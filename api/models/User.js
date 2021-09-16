const S = require("sequelize");
const db = require("../db");

const User = db.define("user", {
  username: {
    type: S.STRING,
    allowNull: false,
  },
  email: {
    type: S.STRING,
    allowNull: false,
    // isEmail: true,
    //  validate:{

    //  }
  },
  password: {
    type: S.STRING,
    allowNull: false,
  },
  role: {
    type: S.STRING,
    defaultValue: "user",
  },
});

module.exports = User;
