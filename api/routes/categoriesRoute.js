const express = require("express");
const router = express.Router();
const Vinos = require("../models/Vino");

//LLEGAREMOS A LAS RUTAS A TRAVÉS DE LA RUTA "http://localhost:3001/api/categorias/..."


//OBTENDREMOS TODOS LOS VINOS QUE COINCIDAN CON EL PAIS BUSCADO
router.get("/pais", (req, res, next) => {
    Vinos.findAll({where:{
      PaisDeOrigen:req.body.PaisDeOrigen
    }})
      .then((vinos) => res.send(vinos))
      .catch(next);
  });
  
  //OBTENDREMOS TODOS LOS VINOS QUE TENGAN EL MISMO PRECIO QUE PASAREMOS EN EL BODY
  router.get("/precio", (req, res, next) => {
    Vinos.findAll({where:{
      Precio:req.body.Precio
    }})
      .then((vinos) => res.send(vinos))
      .catch(next);
  });
  
  //OBTENDREMOS TODOS LOS VINOS QUE TENGAN EL MISMO VARIETAL QUE PASAREMOS EN EL BODY
  router.get("/varietal", (req, res, next) => {
    Vinos.findAll({where:{
      Varietal:req.body.Varietal
    }})
      .then((vinos) => res.send(vinos))
      .catch(next);
  });


  //OBTENDREMOS TODOS LOS VINOS QUE TENGAN EL MISMO VARIETAL QUE PASAMOS COMO PARÁMETRO DE RUTA
  router.get("/:varietal", (req, res, next) => {
    Vinos.findAll({where:{
      Varietal:req.params.varietal
    }})
      .then((vinos) => res.send(vinos))
      .catch(next);
  });



  module.exports = router;