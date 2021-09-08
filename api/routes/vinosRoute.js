const express = require("express");
const router = express.Router();
const Vinos = require("../models/Vino");

/* router.get("/", (req, res, next) => {
  

  
    Vinos.findAll()
    .then((vinos) => res.send(vinos))
    .catch(next);
}); */

router.get("/", (req, res, next) => {
 Vinos.findAll()
  .then((vinos) => res.send(vinos))
  .catch(next);
} );

router.post("/nuevo", (req, res, next) => {
  Vinos.create(req.body)
    .then((product) => res.status(201).send(product))
    .catch(next);
} );

module.exports = router;
