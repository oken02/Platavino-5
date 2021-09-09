const express = require("express");
const router = express.Router();

const vinosRouter = require("./vinosRoute")

const categoriesRouter = require("./categoriesRoute")


router.use("/vinos",vinosRouter )
router.use("/categorias",categoriesRouter)



//LLEGAREMOS A LA RUTA "VINOS" A TRAVÉS DE LA RUTA "http://localhost:3001/api/..."
//LLEGAREMOS A LA RUTA "CATEGORIAS" A TRAVÉS DE LA RUTA "http://localhost:3001/api/..."


module.exports = router;