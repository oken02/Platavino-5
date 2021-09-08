const Sequelize = require("sequelize");

//https://sequelize.org/master/manual/getting-started.html
// Option 2: Passing parameters separately (other dialects)



const db = new Sequelize("platavino5", null, null, {
  host: "localhost",
  dialect: "postgres",
  logging: false,
});

module.exports = db;
