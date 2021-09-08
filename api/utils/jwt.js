const jwt = require("jsonwebtoken");

const generateToken = (payload) => {
  return jwt.sign(payload, "SECRET", { expiresIn: "7d" });
};

const validateToken = (req, res, next) => {
  console.log("AUTHORIZATION", req.get("Authorization"));
  const [type, reqToken] = (req.get("Authorization") || "").split(" ");
  console.log("REQ TOKEN", reqToken);

  if (!reqToken) {
    return res.sendStatus(401);
  }

  jwt.verify(reqToken, "SECRET", (err, payload) => {
    if (err) return res.sendStatus(401);

    req.payload = payload;
    next();
  });
};

module.exports = {
  generateToken,
  validateToken,
};
