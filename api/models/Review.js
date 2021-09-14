const { Sequelize, DataTypes, Model } = require("sequelize");
const db = require("../db");

// class Review extends Model {}

const Review = db.define(
  "review",
  // Review.init(
  {
    // Model attributes are defined here
    comentario: {
      type: DataTypes.STRING,
      validate: {
        max: 200,
      },
    },

    puntaje: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  }
);

module.exports = Review;
