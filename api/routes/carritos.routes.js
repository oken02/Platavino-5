const express = require("express");
const User = require("../models/User");
const Vino = require("../models/Vino");

const Carrito = require("../models/Carrito");

const bcrypt = require("bcrypt");
const { Op } = require("sequelize");

const { justAdmin } = require("../middlewares/justAdmin");
const { validateToken } = require("../utils/jwt");
const CartItem = require("../models/CartItem");

const router = express.Router();

/*
  
    /api/carritos

 */

// router.post("/", async (req, res) => {
//   const carrito = await Carrito.create(req.body);
//   res.send({ carrito });
// });

// router.post("/:carritoID", async (req, res) => {
//   const carritoID = req.params.carritoID;
//   const vino = req.body;

//   console.log("RE BODY", req.body);

//   try {
//     const carrito = await Carrito.findByPk(carritoID);

//     // const carrito = Carrito.build({ id: carritoID });

//     console.log(carrito.toJSON());
//     const vinoCreated = await carrito.addVino(vino.id);

//     console.log(vinoCreated);

//     return res.json({ vinoCreated });
//   } catch (error) {
//     console.log(error);
//   }
// });

router.post("/:vinoId", [validateToken], async (req, res) => {
  const { carritoId, id } = req.payload;
  const { vinoId } = req.params;
  const { cantidad } = req.body;

  console.log("RE BODY", { carritoId, id, vinoId });

  try {
    const [cartItem, created] = await CartItem.findOrCreate({
      where: { carritoId, vinoId },
      defaults: {
        cantidad: cantidad || 1,
      },
    });

    return res.send([cartItem, created]);
    // res.send("ok")
  } catch (error) {
    console.log(error);
  }
});

router.get("/", [validateToken], async (req, res) => {
  const { carritoId } = req.payload;

  console.log("PAYLOAD", req.payload);

  try {
  } catch (error) {}

  const carrito = await Carrito.findByPk(carritoId);

  if (!carrito) {
    return res.status(404).json({ ok: false, msg: "ese carrito no existe" });
  }

  const vinosDB = await carrito.getCartItems({
    include: Vino,
    attributes: ["id", "cantidad", "carritoId"],
  });

  res.json({ vinosDB, length: vinosDB.length });
});

//
//

// router.post("/:carritoID/:vinoID", async (req, res) => {
//   const { carritoID, vinoID } = req.params;

//   const carrito = await Carrito.findByPk(carritoID);

//   const vinoDB = await carrito.addVino(vinoID);

//   console.log(vinoDB);

//   res.json({ ok: true, carrito, vinoDB });
// });

// router.get("/:carritoID", async (req, res) => {
//   const { carritoID } = req.params;

//   const carrito = await Carrito.findByPk(carritoID);

//   if (!carrito) {
//     return res.status(404).json({ ok: false, msg: "ese carrito no existe" });
//   }

//   const vinosDB = await carrito.getVinos();

//   res.json({ vinosDB, length: vinosDB.length });
// });

router.delete("/:vinoId", [validateToken], async (req, res) => {
  const { carritoId, id } = req.payload;

  // const carrito = await Carrito.findByPk(carritoId);

  // if (!carrito) {
  //   return res.status(404).json({ ok: false, msg: "ese carrito no existe" });
  // }

  // const r = await carrito.removeCartItem(req.params.vinoId);

  CartItem.destroy({
    where: {
      id: req.params.vinoId,
    },
  });

  // console.log("DELETED", r);
  // console.log("DELETED ", r);
  return res.json({
    ok: true,
    msg: "se eliminó el vino",
    // r,
  });
});

module.exports = router;
