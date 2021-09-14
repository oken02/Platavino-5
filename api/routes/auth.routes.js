const express = require("express");

const User = require("../models/User");
const Carrito = require("../models/Carrito");

const bcrypt = require("bcrypt");
const { justAdmin } = require("../middlewares/justAdmin");

const { generateToken, validateToken } = require("../utils/jwt");

// Este router esta ya montado en /useres en server/app.js
const router = express.Router();

/*

    /api/auth

*/

router.put("/promover/:id", [validateToken, justAdmin], async (req, res) => {
  const { id } = req.params;
  const user = await User.findByPk(id);

  console.log("USER", user);
  if (!user) {
    res.sendStatus(404);
  }

  user.role = "admin";
  const resDB = await user.save();
  console.log("RES  DB", resDB);

  return res.sendStatus(200);
});

router.post("/admin", async (req, res) => {
  const { email, username, password } = req.body;

  if (!email || !username || !password) {
    return res.status(400).json({
      ok: false,
      msg: "debes enviar todos los campos para crear un usuario",
    });
  }
  try {
    const user = await User.findOne({ where: { email: email } });

    if (user) {
      return res
        .status(400)
        .json({ ok: false, msg: "el email ya se registró con otro usuario" });
    }

    const admin = await User.create({
      ...req.body,
      role: "admin",
      password: await bcrypt.hash(req.body.password, 12),
    });
    res.send({ ok: "true", admin });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

router.post("/validate", validateToken, (req, res) => {
  const { id: userId } = req.payload;

  User.findByPk(userId)
    .then((user) => {
      res.json({
        ok: true,
        msg: "el token es valido",
        user: user.toJSON(),
      });
    })
    .catch(console.log);
});

router.post("/login", async (req, res) => {
  console.log("BODY EN LOGIN", req.body);
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      ok: false,
      msg: "debes enviar email y password para logearte",
    });
  }

  try {
    const user = await User.findOne({
      where: { email },
      attributes: ["username", "email", "id", "role", "password", "carritoId"],
    });

    if (!user) {
      return res
        .status(404)
        .send({ ok: false, msg: "no existe ningun usuario con ese email" });
    }

    const validLogin = await bcrypt.compare(password, user.password);

    if (validLogin) {
      
      const token = generateToken({ id: user.id, role: user.role,carritoId:user.carritoId });

      // delete user.dataValues.password;

      const userLogged = user.toJSON();
      delete userLogged.password;
      console.log("userLogged", userLogged);

      res.send({ ok: true, user: userLogged, token });
    } else {
      return res.status(404).send({
        ok: false,
        msg: "la contraseña no coincide con se email",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ ok: false, msg: "server error" });
  }
});

router.post("/register", async (req, res) => {
  const { email, username, password } = req.body;

  if (!email || !username || !password) {
    return res.status(400).json({
      ok: false,
      msg: "debes enviar todos los campos para crear un usuario",
    });
  }

  try {
    const user = await User.findOne({ where: { email: email } });

    if (user) {
      return res
        .status(400)
        .json({ ok: false, msg: "el email ya se registró con otro usuario" });
    }

    const passwordHashed = await bcrypt.hash(password, 12);

    const userCreated = await User.create(
      {
        ...req.body,
        password: passwordHashed,
      },
      {
        fields: ["password", "username", "email"],
      }
    );

    console.log("USER BEFORE", userCreated);
    // userCreated
    const carrito = await Carrito.create({ Unidades: 0 });

    const carritoDB = await userCreated.setCarrito(carrito);
    console.log("USER AFTER", userCreated);

    console.log("CARRITO CREATED RESPONSE", carritoDB);

    return res.status(201).json({
      ok: true,
      msg: "el usuario fue creado",
      userdb: userCreated,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ ok: false, msg: "server error" });
  }
});

module.exports = router;
