const router = require("express").Router();

const authRouter = require("./auth.routes");
const usersRouter = require("./users.routes");

// router.use('/vinos', vinos)

router.use("/auth", authRouter);
router.use("/users", usersRouter);

module.exports = router;
