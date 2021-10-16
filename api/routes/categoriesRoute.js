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
  if (fields.precio) {
    let [min, max] = fields.precio.split("-");
    if (!min) min = 0;
    if (!max) max = 10000000;
    fields.precio = {
      [Op.between]: [parseInt(min), parseInt(max)],
    };
  }

  if (fields.bodega) {
    fields.bodega = {
      [Op.substring]: fields.bodega,
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
      precio: {
        [Op.between]: [parseInt(min), parseInt(max)],
      },
    },
  })
    .then((vinos) => res.send(vinos))
    .catch(console.log);
});

//OBTENDREMOS TODOS LOS VINOS QUE TENGAN EL MISMO VARIETAL QUE PASAREMOS EN EL BODY
router.get("/varietal", (req, res, next) => {
  Vinos.findAll({
    where: {
      varietal: req.body.varietal,
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
      bodega: {
        [Op.substring]: req.params.name,
      },
    },
  }).catch(console.log);

  setTimeout(() => {
    res.send(vinos);
  }, 1000);
});

//OBTENDREMOS TODOS LOS VINOS QUE TENGAN EL MISMO VARIETAL QUE PASAMOS COMO PARÁMETRO DE RUTA
router.get("/:varietal", (req, res, next) => {
  Vinos.findAll({
    where: {
      varietal: req.params.varietal,
    },
  })
    .then((vinos) => res.send(vinos))
    .catch(next);
});

module.exports = router;
