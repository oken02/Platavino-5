const express = require("express");
const router = express.Router();

const vinosRouter = require("./vinosRoute");

const categoriesRouter = require("./categoriesRoute");

const reviewsRouter = require("./review.routes");

//LLEGAREMOS A LA RUTA "VINOS" A TRAVÉS DE LA RUTA "http://localhost:3001/api/..."
//LLEGAREMOS A LA RUTA "CATEGORIAS" A TRAVÉS DE LA RUTA "http://localhost:3001/api/..."
const authRouter = require("./auth.routes");
const usersRouter = require("./users.routes");
const carritosRouter = require("./carritos.routes");

router.use("/vinos", vinosRouter);
router.use("/categorias", categoriesRouter);

router.use("/auth", authRouter);
router.use("/users", usersRouter);
router.use("/carritos", carritosRouter);
router.use("/reviews", reviewsRouter);

module.exports = router;
