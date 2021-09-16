const express = require("express");
const router = express.Router();
const Vinos = require("../models/Vino");
const { Op } = require("sequelize");

//LLEGAREMOS A LAS RUTAS A TRAVÉS DE LA RUTA "http://localhost:3001/api/categorias/..."

//OBTENDREMOS TODOS LOS VINOS QUE COINCIDAN CON EL PAIS BUSCADO
// router.get("/pais", (req, res, next) => {

router.get("/", (req, res, next) => {
  const fields = req.query;
  console.log(fields);
  if (fields.Precio) {
    let [min, max] = fields.Precio.split("-");
    if (!min) min = 0;
    if (!max) max = 10000000;

    fields.Precio = {
      [Op.between]: [parseInt(min), parseInt(max)],
    };
  }

  Vinos.findAll({
    where: fields,
  })
    .then((vinos) => res.send(vinos))
    .catch(next);
});

//OBTENDREMOS TODOS LOS VINOS QUE TENGAN EL MISMO PRECIO QUE PASAREMOS EN EL BODY

router.get("/precio", (req, res) => {
  console.log("PROPS", req.query);
  const { min = 0, max = 10000000000 } = req.query;

  // if (min && max && min < max) {
  Vinos.findAll({
    where: {
      Precio: {
        [Op.between]: [parseInt(min), parseInt(max)],
      },
    },
  })
    .then((vinos) => res.send(vinos))
    .catch(console.log);
  // } else {
  // res.json({ msg: "tienes que eviar el min y el max" });
  // }
});

//OBTENDREMOS TODOS LOS VINOS QUE TENGAN EL MISMO VARIETAL QUE PASAREMOS EN EL BODY
router.get("/varietal", (req, res, next) => {
  Vinos.findAll({
    where: {
      Varietal: req.body.Varietal,
    },
  })
    .then((vinos) => res.send(vinos))
    .catch(next);
});

router.get("/bodega/:name", async (req, res, next) => {
  // console.log("GHGA", req.query);
  console.log("PROPS", req.query);

  const vinos = await Vinos.findAll({
    where: {
      Bodega: {
        [Op.substring]: req.params.name,
      },
    },
  }).catch(console.log);

  res.send(vinos);
});

//OBTENDREMOS TODOS LOS VINOS QUE TENGAN EL MISMO VARIETAL QUE PASAMOS COMO PARÁMETRO DE RUTA
router.get("/:varietal", (req, res, next) => {
  Vinos.findAll({
    where: {
      Varietal: req.params.varietal,
    },
  })
    .then((vinos) => res.send(vinos))
    .catch(next);
});

module.exports = router;
