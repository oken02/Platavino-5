const Sequelize = require('sequelize');

//https://sequelize.org/master/manual/getting-started.html
// Option 2: Passing parameters separately (other dialects)
const db = new Sequelize('Platavino5', null, null, {
    host: 'localhost',
    dialect: 'postgres'
  });

module.exports = db;
