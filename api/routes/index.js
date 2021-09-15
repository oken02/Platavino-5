
const express = require("express");
const router = express.Router();

const vinosRouter = require("./vinosRoute")

const categoriesRouter = require("./categoriesRoute")


router.use("/vinos", vinosRouter)
router.use("/categorias", categoriesRouter)



//LLEGAREMOS A LA RUTA "VINOS" A TRAVÉS DE LA RUTA "http://localhost:3001/api/..."
//LLEGAREMOS A LA RUTA "CATEGORIAS" A TRAVÉS DE LA RUTA "http://localhost:3001/api/..."
const authRouter = require("./auth.routes");
const usersRouter = require("./users.routes");
const carritosRouter = require("./carritos.routes");
const { User } = require("../models");

router.put('/addAdmin/:id', (req, res, next) => {
    User.update(
        { role: 'admin' },
        {
            where: {
                id: req.params.id
            }
        }
    )
        .then((data) => {
            res.send(data)
        })
        .catch(e => console.log(e))
})




router.use("/auth", authRouter);
router.use("/users", usersRouter);
router.use("/carritos", carritosRouter);




module.exports = router;
