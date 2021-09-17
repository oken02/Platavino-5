const express = require("express");
const User = require("../models/User");

const bcrypt = require("bcrypt");
const { Op } = require("sequelize");

const { justAdmin } = require("../middlewares/justAdmin");
const { validateToken } = require("../utils/jwt");
const router = express.Router();

/*
  
    /api/users

 */

router.get("/", [validateToken, justAdmin], async (req, res) => {
  try {
    const users = await User.findAll({
      // attributes: ["username", "email", "id", "role"],
    });
    res.json(users);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

router.delete("/:id", [validateToken, justAdmin], async (req, res) => {
  const { id } = req.params;

  try {
    if (id !== req.payload.id) {
      const resDB = await User.destroy({ where: { id }, limit: 1 });
      console.log("DELETE RES", resDB);
    }
    // const userToDelete = User.build({ id });
    // const resDB = await userToDelete.destroy();
    res.json({ msg: "usuario eliminado" });
  } catch (error) {
    console.log('aca en back', error);
    res.sendStatus(500);
  }
});


router.put("/:id", [validateToken], async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  console.log("PAYLOAD", req.payload);

  const { id: tokenID, role } = req.payload;


  if (tokenID != id) {
    return res.status(401).json({ msg: "no puedes editar el perfil de otro" });

  }

  try {
    const user = await User.findByPk(id);

    if (user) {
      if (body.password) {
        body.password = await bcrypt.hash(body.password, 12);
      }

      if (body.email && body.email != user.email) {
        const userDB = await User.findOne({
          where: {
            email: body.email,
          },
        });

        if (userDB) {
          return res.status(400).json({
            ok: false,
            msg: "el email ya se registró con otro usuario",
          });
        }
      }

      const [, userUpdated] = await User.update(body, {
        where: { id },
        fields: ["username", "password", "email"],
        returning: ["id", "role", "email", "username"],
      });

      res.json({ ok: true, msg: "el usuario fue actualizado", userUpdated });
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

module.exports = router;
