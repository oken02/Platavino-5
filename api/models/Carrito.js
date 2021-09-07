const S = require('sequelize');
const db = require('../db');

const Carrito = db.define('carrito', {
    PaisDeOrigen:{
        type: S.STRING,
    },
    Bodega:{
        type: S.STRING,
    },
    Precio:{
        type: S.NUMBER,
    },
    Varietal:{
        type: S.STRING,
    },
    ml:{
        type: S.NUMBER,
    },
    
});

module.exports = Carrito;