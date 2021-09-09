const express = require("express");
const router = express.Router();
const {createCarrito} = require("../controller/carrito-controllers");

router.post('/:carritoID/:vinoID', createCarrito);
router.get('/:carritoID', viewCarrito);
[,234].length

// vino2 cantidad:5
// router.put('/', modUnidades);
router.delete('/', deleteCarrito);

module.exports = router;

