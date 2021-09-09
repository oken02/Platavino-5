import models from '../models/index';

var User = models.User;
var Vino = models.Vino;
var Carrito = models.Carrito;

const createCarrito = async (req, res) => {
    const {
        PaisDeOrigen,
        Bodega,
        Precio,
        Varietal,
        Color,
        ml,
        Descripcion,
        Img,
        Stock
    } = req.body // tomos los datos del vino de la pagina para crear un elemento que va a ir en el carrito

    const {
        first_name, 
        last_name, 
        user_id, email,
      } = req.user; // tomos los datos del usuario para guardarlo en el elemento que va a ir en el carrito

    const created_on = moment(new Date()); // guardardo la fecha en el elemento que va a ir en el carrito

    const createCarritoPostgres =
    
}

module.exports = {
    createCarrito,
    viewCarrito,
    modUnidades,
    deleteCarrito
}