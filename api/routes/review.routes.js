const express = require("express");
const Review = require("../models/Review");
const Vino = require("../models/Vino");
const User = require("../models/User");

const { validateToken } = require("../utils/jwt");

// Este router esta ya montado en /useres en server/app.js
const router = express.Router();

/*

    /api/reviews

*/

router.get("/:vinoId", async (req, res) => {
  const vinos = await Review.findAll({
    where: {
      vinoId: req.params.vinoId,
    },
    include: User,
  });

  res.json(vinos);
});

router.post("/:vinoId", [validateToken], async (req, res) => {
  const userId = req.payload.id;
  const vinoId = req.params.vinoId;
  try {
    const review = await Review.create({ ...req.body, vinoId, userId });

    const reviews = await Review.findAll({ where: { vinoId } });

    let promedio = 0;
    for (const review of reviews) {
      promedio += review.puntaje;
    }
    promedio /= reviews.length.toFixed(1);

    const vino = await Vino.update(
      { stars: promedio, valoraciones: reviews.length },
      { where: { id: vinoId }, returning: true }
    );

    console.log("VINO UPDATED", vino);

    res.json({ ...review.toJSON(), user: await review.getUser() });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
