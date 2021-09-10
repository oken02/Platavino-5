const User = require("./User");
const Carrito = require("./Carrito");
const Vino = require("./Vino");
const Orden = require("./Orden");

Carrito.hasOne(User);
User.belongsTo(Carrito);

Vino.belongsToMany(Carrito, { through: "CarritoVino" });
Carrito.belongsToMany(Vino, { through: "CarritoVino" });

module.exports = {
  User,
  Carrito,
  Vino,
  Orden,
};
