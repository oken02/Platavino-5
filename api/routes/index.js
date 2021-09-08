const router = require('express').Router();

const vinosRouter = require("./vinosRoute")


router.use("/vinos",vinosRouter )



// router.use('/vinos', vinos)

module.exports = router;