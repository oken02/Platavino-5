const S = require("sequelize");
const db = require("../db");

const Vino = db.define("vino", {
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
    type: S.STRING,
  },
  Img: {
    type: S.STRING,
  },
});

module.exports = Vino;
