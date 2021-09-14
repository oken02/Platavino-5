const express = require("express");
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
  });

  res.json(vinos);
});




router.post("/:vinoId", [validateToken], async (req, res) => {
  const userId = req.payload.id;
  const vinoId = req.params.vinoId;
  try {
    const review = await Review.create({ ...req.body, vinoId, userId });
    res.json(review);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
