const { Model } = require("sequelize");
const S = require("sequelize");
const CartItem = require("./CartItem");
const Vino = require("./Vino");

const db = require("../db");

class Orden extends Model {
  async validateStock() {
    this.status = "procesada";

    const cartItems = await CartItem.findAll({
      where: { carritoId: this.carritoId },
      include: Vino,
    });

    for (const cartItem of cartItems) {
      if (cartItem.cantidad < cartItem.vino.Stock) {
      }
    }
  }
}

Orden.init(
  {
    PrecioTotal: {
      type: S.STRING,
      allowNull: false,
    },
    Status: {
      type: S.STRING,
      // allowNull: false,
      defaultValue: "creado",
    },
    FechaCompra: {
      type: S.DATE,
      defaultValue: new Date(),
    },
  },
  {
    sequelize: db, // We need to pass the connection instance
    modelName: "Orden", // We need to choose the model name
  }
);

Orden.disminuirStock = async (cartItems) => {
  for (const cartItem of cartItems) {
    await Vino.update(
      {
        Stock: cartItem.vino.Stock - cartItem.cantidad,
      },
      {
        where: {
          id: cartItem.vinoId,
        },
      }
    );
  }
};

module.exports = Orden;
