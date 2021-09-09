const express = require("express");
const User = require("../models/User");
const Carrito = require("../models/Carrito");

const bcrypt = require("bcrypt");
const { Op } = require("sequelize");

const { justAdmin } = require("../middlewares/justAdmin");
const { validateToken } = require("../utils/jwt");
const { RestoreSharp } = require("@material-ui/icons");
const router = express.Router();

/*
  
    /api/carritos

 */

router.post("/", async (req, res) => {
  const carrito = await Carrito.create(req.body);
  res.send({ carrito });
});

router.get("/:id", async (req, res) => {
  const user = await User.findByPk(userID);

  const vinos = await user.getVinos();

  return res.json({ vinos });
});

router.post("/:carritoID", async (req, res) => {
  const carritoID = req.params.carritoID;
  const vino = req.body;

  console.log("RE BODY", req.body);

  try {
    //   const user = User.create({ id: carritoID });
    //   user.

    // const carrito = await Carrito.findByPk(carritoID);

    const carrito = Carrito.build({ id: carritoID });
    
    console.log(carrito.toJSON());
    const vinoCreated = await carrito.addVino(vino.id);

    console.log(vinoCreated);

    return res.json({ vinoCreated });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
