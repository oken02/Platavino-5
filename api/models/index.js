const User = require("./User");
const Carrito = require("./Carrito");
const Vino = require("./Vino");
const Orden = require("./Orden");
const Review = require("./Review");
const CartItem = require("./CartItem");

Carrito.hasOne(User);
User.belongsTo(Carrito);

CartItem.belongsTo(Carrito);
Carrito.hasMany(CartItem);

Vino.hasOne(CartItem, {
  onDelete: "CASCADE",
});
CartItem.belongsTo(Vino);

User.hasMany(Review);
Review.belongsTo(User);

Vino.hasMany(Review);
Review.belongsTo(Vino);

// Orden.belongsTo(CartItem)
// User.hasMany(CartItem);

Orden.belongsTo(User);
User.hasMany(Orden);

Carrito.hasOne(Orden);
Orden.belongsTo(Carrito);

module.exports = {
  User,
  Carrito,
  Vino,
  Orden,
  Review,
  CartItem,
};
