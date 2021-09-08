const express = require("express");
const router = express.Router();
const Vinos = require("../models/Vino");



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


router.get("/:id", (req, res, next) => {
  // Finding the Page
  Vinos.findOne({
    where: {
      id: req.params.id,
    },
    
  })
    .then((page) => {
      if (!page) return next("No se encontro tu pagina");
      res.send(page);
    })
    .catch(next);
});



router.put("/:id", (req, res, next) => {
  Vinos.update(req.body, {
    where: {
      id: req.params.id,
    },
    returning: true,
  })
    .then(([affectedRows, updated]) => {
      const page = updated[0];
      res.send(page);
    })
    .catch(next);
});


/** DELETE **/
router.delete("/borrar/:id", (req, res, next) => {
  Vinos.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then(() => res.sendStatus(202))
    .catch(next);
});

module.exports = router;
