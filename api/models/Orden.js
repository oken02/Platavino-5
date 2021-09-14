const S = require("sequelize");
const db = require("../db");

const Orden = db.define("orden", {
  // Id: {
  //   type: S.STRING,
  //   allowNull: false,
  // },
  PrecioTotal: {
    type: S.STRING,
    allowNull: false,
  },
  Status: {
    type: S.STRING,
    // allowNull: false,
    defaultValue: "creado",
  },
  FechaCompra: {
    type: S.DATE,
    defaultValue: new Date(),
  },
});

module.exports = Orden;
