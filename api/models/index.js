const User = require('./User');
const Carrito = require('./Carrito');
const Vino = require('./Vino');
const Orden = require('./Orden');


User.hasOne(Carrito);
Carrito.belongsTo(User);

Vino.belongsToMany(Carrito, { through: 'CarritoVino' });
Carrito.belongsToMany(Vino, { through: 'CarritoVino' });


module.exports = {
    User,
    Carrito,
    Vino,
    Orden

}