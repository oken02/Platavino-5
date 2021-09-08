const express = require("express");

const { request, response } = express;

const isAdmin = (req = request, res = response, next) => {
  const { role } = req.payload;

  if (role === "admin") {
    return next();
  } else {
    return res.status(401).json({ msg: "solo admins" });
  }
};

module.exports = isAdmin;
