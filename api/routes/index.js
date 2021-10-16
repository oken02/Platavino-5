const vinosRouter = require("./vinosRoute");
const categoriesRouter = require("./categoriesRoute");
const reviewsRouter = require("./review.routes");
const ordensRouter = require("./ordens.routes");
const authRouter = require("./auth.routes");
const usersRouter = require("./users.routes");
const carritosRouter = require("./carritos.routes");

const router = require("express").Router();

router.use("/vinos", vinosRouter);
router.use("/categorias", categoriesRouter);
router.use("/vinos", vinosRouter);
router.use("/categorias", categoriesRouter);
router.use("/auth", authRouter);
router.use("/users", usersRouter);
router.use("/carritos", carritosRouter);
router.use("/reviews", reviewsRouter);
router.use("/ordens", ordensRouter);

module.exports = router;
