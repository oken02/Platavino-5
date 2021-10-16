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
  paisDeOrigen: {
    type: S.STRING,
  },
  bodega: {
    type: S.STRING,
  },
  precio: {
    type: S.INTEGER,
  },
  varietal: {
    type: S.STRING,
  },
  color: {
    type: S.STRING,
  },
  ml: {
    type: S.INTEGER,
  },
  descripcion: {
    type: S.TEXT,
  },
  img: {
    type: S.TEXT,
  },
  stock: {
    type: S.INTEGER,
  },
});

module.exports = Vino;
