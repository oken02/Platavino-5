const jwt = require("jsonwebtoken");

const generateToken = (payload) => {
  return jwt.sign(payload, "SECRET", { expiresIn: "7d" });
};

const validateToken = (req, res, next) => {
  console.log("AUTHORIZATION", req.get("Authorization"));
  const [type, reqToken] = (req.get("Authorization") || "").split(" ");
  console.log("REQ TOKEN", reqToken);

  if (!reqToken) {
    return res.status(401).json({ msg: "no se envio el token" });
  }

  jwt.verify(reqToken, "SECRET", (err, payload) => {

    if (err) return res.status(401).json({ msg: "el token no es valido" });

    console.log("TOKEN VALIDO");
    req.payload = payload;
    next();
  });
};

module.exports = {
  generateToken,
  validateToken,
};
