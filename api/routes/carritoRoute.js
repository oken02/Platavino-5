const express = require("express");
const router = express.Router();
const {createCarrito} = require("../controller/carrito-controllers");

router.post('/', createCarrito);
router.get('/', viewCarrito);
router.put('/', modUnidades);
router.delete('/', deleteCarrito);

module.exports = router;