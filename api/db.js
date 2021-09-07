const Sequelize = require('sequelize');

const WineModel = require('./models/films')
const UserModel = require('./models/users')


const db = new Sequelize();



const Wine = WineModel(db, Sequelize);
const User = UserModel(db, Sequelize);


module.exports = {
    Film,
    User
}