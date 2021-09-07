const S = require('sequelize');
const db = require('../db');

const Vino = db.define('vino', {
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
    Color:{
        type: S.STRING,
    },
    ml:{
        type: S.INTEGER,
    },
    Descripcion:{
        type: S.STRING,
    },
        
});

module.exports = Vino;