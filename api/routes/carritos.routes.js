const express = require("express");
const User = require("../models/User");
const Carrito = require("../models/Carrito");

const bcrypt = require("bcrypt");
const { Op } = require("sequelize");

const { justAdmin } = require("../middlewares/justAdmin");
const { validateToken } = require("../utils/jwt");
const router = express.Router();

/*
  
    /api/carritos

 */

router.get("/:id", async (req, res) => {
  const user = await User.findByPk(userID);

  const vinos = await user.getVinos();

  return res.json({ vinos });
});

router.post("/:carritoID", async (req, res) => {
  const carritoID = req.params.carritoID;
  const vino = req.body;

  //   const user = User.create({ id: carritoID });
  //   user.

  //   const user = await User.findByPk(carritoID);

  const carrito = Carrito.build({ id: carritoID });

  const r = await carrito.addVino(vino);
  
  console.log(r);

  return res.json({ vinoCreated });
});

module.exports = router;
