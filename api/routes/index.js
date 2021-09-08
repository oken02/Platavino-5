const express = require("express");
const router = express.Router();

const vinosRouter = require("./vinosRoute")


router.use("/vinos",vinosRouter )



// router.use('/vinos', vinos)

module.exports = router;