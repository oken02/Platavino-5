const S = require('sequelize');
const db = require('../db');

const User = db.define('user', {
    UserName :{
        type: S.STRING,
        allowNull: false,
    },
    email:{
        type: S.STRING,
        allowNull: false,
    }

});

module.exports = User;