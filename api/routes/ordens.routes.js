const express = require("express");
const User = require("../models/User");
const Carrito = require("../models/Carrito");

const bcrypt = require("bcrypt");
const { Op } = require("sequelize");

const { justAdmin } = require("../middlewares/justAdmin");
const { validateToken } = require("../utils/jwt");
const CartItem = require("../models/CartItem");
const { Orden } = require("../models");

const router = express.Router();

/*
  
    /api/ordens

 */

router.post("/", [validateToken], async (req, res) => {
  const { id } = req.payload;

  const carItems = req.body;

  //   const r = await Orden.bulkCreate(carItems.map((c) => Orden.build(c)));
  const r = await Orden.bulkCreate(carItems);

  const user = await User.findByPk(id);
  console.log("USER", user);
  const newCart = Carrito.build({ userId: user.id });

  await user.setCarrito(newCart);

  console.log(r);

  res.send(user);
});

module.exports = router;
