const { Sequelize } = require("sequelize");

const db = new Sequelize("e-comerce", "oken02", "nose123", {
  host: "localhost",
  dialect: "postgres",
});

module.exports = db;
