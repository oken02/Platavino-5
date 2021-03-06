const S = require("sequelize");
const db = require("../db");

const Vino = db.define("vino", {
  valoraciones: {
    type: S.INTEGER,
    defaultValue: 0,
  },
  stars: {
    type: S.FLOAT,
    defaultValue: 0,
  },
  PaisDeOrigen: {
    type: S.STRING,
  },
  Bodega: {
    type: S.STRING,
  },
  Precio: {
    type: S.INTEGER,
  },
  Varietal: {
    type: S.STRING,
  },
  Color: {
    type: S.STRING,
  },
  ml: {
    type: S.INTEGER,
  },
  Descripcion: {
    type: S.TEXT,
  },
  Img: {
    type: S.TEXT,
  },
  Stock: {
    type: S.INTEGER,
  },
});

module.exports = Vino;
