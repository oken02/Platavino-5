const express = require("express");
const User = require("../models/User");
const Carrito = require("../models/Carrito");

const bcrypt = require("bcrypt");
const { Op } = require("sequelize");

const { justAdmin } = require("../middlewares/justAdmin");
const { validateToken } = require("../utils/jwt");
const CartItem = require("../models/CartItem");
const { Orden, Vino } = require("../models");

const router = express.Router();

/*

    /api/ordens

*/

router.post("/", [validateToken], async (req, res) => {
  const { id: userId } = req.payload;
  const user = await User.findByPk(userId);

  const cartItems = await CartItem.findAll({
    where: { carritoId: user.carritoId },
    include: Vino,
  });

  let totalPrice = 0;

  for (const cartItem of cartItems) {
    totalPrice += cartItem.cantidad * cartItem.vino.Precio;
  }

  const sinStock = [];
  const conStock = [];
  for (const cartItem of cartItems) {
    if (cartItem.cantidad > cartItem.vino.Stock) {
      sinStock.push({
        vino: cartItem.vino,
        stock: cartItem.vino.Stock,
      });
    } else {
      conStock.push({
        vino: cartItem.vino,
      });
    }
  }

  if (sinStock.length == 0) {
    const orden = await Orden.create({
      PrecioTotal: totalPrice,
      state: "procesado",
      userId,
      carritoId: user.carritoId,
    });

    const carrito = await Carrito.create();
    console.log("USER OLD CART", user);

    const u = await user.setCarrito(carrito);

    console.log("USER NEW CART", u, "USER", user);

    setTimeout(async () => {
      if (Math.random() * 100 <= 10) {
        orden.Status = "cancelado";
      } else {
        orden.Status = "completado";
        Orden.disminuirStock(cartItems);
      }
      await orden.save();
      console.log("ORDEN COMPLETADA O RECHAZADA");
    }, 5000);

    res.send({
      ok: "true",
      orden,
      conStock,
      sinStock,
    });
  } else {
    res.status(401).json({
      ok: false,
      msg: "hay productos sin stock",
      sinStock,
      conStock,
    });
  }
});

module.exports = router;
