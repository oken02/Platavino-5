const Sequelize = require("sequelize");

//https://sequelize.org/master/manual/getting-started.html
// Option 2: Passing parameters separately (other dialects)
const db = new Sequelize("platavino5", null, null, {
  host: "localhost",
  dialect: "postgres",
  logging: false,
});

module.exports = db;

// module.exports = db;

// const { Sequelize } = require("sequelize");

// const db = new Sequelize("e-comerce", "oken02", "nose123", {
//   host: "localhost",
//   dialect: "postgres",
//   logging:false
// });

// module.exports = db;
