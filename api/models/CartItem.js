const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = require("../db");

class CartItem extends Model {}

CartItem.init(
  {
    cantidad: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize, // We need to pass the connection instance
    modelName: "CartItem", // We need to choose the model name
  }
);

module.exports = CartItem;
