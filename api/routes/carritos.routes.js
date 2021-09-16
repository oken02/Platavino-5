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

// router.post("/:vinoId", [validateToken], async (req, res) => {
//   const { id: userId } = req.payload;
//   const { vinoId } = req.params;
//   const { cantidad } = req.body;

//   try {
//     const user = await User.findByPk(userId);

//     const cartItem = await CartItem.findOrCreate({
//       where: { carritoId: user.carritoId, vinoId },
//       defaults: {
//         cantidad: cantidad || 1,
//       },
//       include: Vino,
//     });
//     console.log(cartItem)
//     return res.json(cartItem);
//     // res.send("ok")
//   } catch (error) {
//     console.log(error);
//   }
// });

router.post('/:vinoId', [validateToken], (req, res) => {
  const { id: userId } = req.payload;
  const { vinoId } = req.params;
  const { cantidad } = req.body;

  User.findByPk(userId)
    .then((data) => {
      CartItem.findOrCreate({
        where: {
          carritoId: data,
          vinoId: vinoId
        },
        include: Vino,
      })
        .then((data) => {
          res.send(data)
        })
        .catch(e => console.log('FINDORCREATE', e))
    })
    .catch(e => console.log('FINDBYPK', e))
})



router.get("/", [validateToken], async (req, res) => {
  const { id: userId } = req.payload;

  console.log("PAYLOAD", req.payload);

  try {
    const user = await User.findByPk(userId);
    const carrito = await Carrito.findByPk(user.carritoId);

    const vinosDB = await carrito.getCartItems({
      include: Vino,
      // attributes: ["id", "cantidad", "carritoId"],
    });
    res.json(vinosDB);
  } catch (error) {
    console.log(error);
  }
});

router.delete("/:cartItemId", [validateToken], async (req, res) => {
  await CartItem.destroy({
    where: {
      id: req.params.cartItemId,
    },
  });

  return res.json({
    ok: true,
    msg: "se eliminó el vino",
  });
});

router.put("/:cartItemId", [validateToken], async (req, res) => {
  const { cartItemId } = req.params;
  const { newCantidad } = req.body;

  const cartItemUpdated = await CartItem.update(
    {
      cantidad: newCantidad,
    },
    {
      where: {
        id: cartItemId,
      },
    }
  );

  res.json(cartItemUpdated);
});

module.exports = router;
