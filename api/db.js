const Sequelize = require('sequelize');

<<<<<<< HEAD
const db = new Sequelize(' ')

module.exports = db;
=======
const WineModel = require('./models/films')
const UserModel = require('./models/users')


const db = new Sequelize();



const Wine = WineModel(db, Sequelize);
const User = UserModel(db, Sequelize);


module.exports = {
    Film,
    User
}
>>>>>>> 3a0f3b5c6419819f9392034e7a5c7a40fa962b08
