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

router.get("/", [validateToken], async (req, res) => {
  const { id: userId } = req.payload;

  const user = User.build({ id: userId });

  const ordens = await user.getOrdens({
    include: {
      model: Carrito,
      include: { model: CartItem, include: { model: Vino } },
    },
  });
  // const cartItems = CartItem.findAll({where:carritoId:})
  console.log("ESTO ES LA RTA DEL BACK", ordens);
  res.json(ordens);
});

router.get("/all", async (req, res) => {
  // const { id: userId } = req.payload;

  // const user = User.build({ id: userId });

  const ordens = await Orden.findAll({
    include: {
      model: Carrito,
      include: { model: CartItem, include: { model: Vino } },
    },
  });
  // const cartItems = CartItem.findAll({where:carritoId:})
  console.log("ESTO ES LA RTA DEL BACK", ordens);
  res.json(ordens);
});

router.get("/:ordenId", [validateToken], async (req, res) => {
  // const { id: userId } = req.payload;
  const { ordenId } = req.params;

  const orden = await Orden.findByPk(ordenId, {
    include: {
      model: Carrito,
      include: { model: CartItem, include: { model: Vino } },
    },
  });

  res.json(orden);
});

router.post("/", [validateToken], async (req, res) => {
  const { id: userId } = req.payload;
  const user = await User.findByPk(userId);

  const cartItems = await CartItem.findAll({
    where: { carritoId: user.carritoId },
    include: Vino,
  });

  let totalPrice = 0;

  for (const cartItem of cartItems) {
    totalPrice += cartItem.cantidad * cartItem.vino.precio;
  }

  const sinStock = [];
  const conStock = [];
  for (const cartItem of cartItems) {
    if (cartItem.cantidad > cartItem.vino.stock) {
      sinStock.push({
        vino: cartItem.vino,
        stock: cartItem.vino.stock,
      });
    } else {
      conStock.push({
        vino: cartItem.vino,
      });
    }
  }

  if (sinStock.length == 0) {
    const orden = await Orden.create({
      precioTotal: totalPrice,
      state: "procesado",
      userId,
      carritoId: user.carritoId,
      ...req.body,
    });

    const carrito = await Carrito.create();
    console.log("USER OLD CART", user);

    const u = await user.setCarrito(carrito);

    console.log("USER NEW CART", u, "USER", user);

    setTimeout(async () => {
      if (Math.random() * 100 <= 10) {
        orden.state = "cancelado";
      } else {
        orden.state = "completado";
        Orden.disminuirStock(cartItems);
      }
      await orden.save();
      console.log("ORDEN COMPLETADA O RECHAZADA");
    }, 5000);

    res.send({
      orden,
      conStock,
      sinStock,
    });
  } else {
    res.status(401).json({
      msg: "hay productos sin stock",
      sinStock,
      conStock,
    });
  }
});

module.exports = router;
