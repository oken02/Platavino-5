const express = require("express");
const { User } = require("../models");
const Review = require("../models/Review");
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
    const review = await Review.create(
      { ...req.body, vinoId, userId },
      { include: User }
    );
    res.json(
      await Review.findAll({
        where: {
          id: review.id,
        },
        include: User,
      })[0]
    );
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
