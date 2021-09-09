const express = require("express");
const router = express.Router();
const Vinos = require("../models/Vino");

//LLEGAREMOS A LAS RUTAS A TRAVÉS DE LA RUTA "http://localhost:3001/api/vinos/..."

//RUTAS DE TODOS NUESTROS VINOS
router.get("/", (req, res, next) => {
  Vinos.findAll()
    .then((vinos) => res.send(vinos))
    .catch(next);
});


//RUTA PARA CREAR UN NUEVO VINO
router.post("/nuevo", (req, res, next) => {
  Vinos.create(req.body)
    .then((product) => res.status(201).send(product))
    .catch(next);
});


//RUTA PARA LLEVARNOS A UNA PAGINA A TAVÉS DEL ID DE UN VINO
router.get("/:id", (req, res, next) => {
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

//RUTA QUE NOS LLEVA A UN VINO A TRAVÉS DE SU ID Y NOS PERMITE EDITAR SUS DATOS
router.put("/edit/:id", (req, res, next) => {
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

//RUTA QUE NOS PERMITE ELIMINAR UN VINO A TRAVÉS DE SU ID
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
