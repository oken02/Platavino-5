// server configs
const express = require("express");
const volleyball = require("volleyball");
const routes = require("./routes/index");
const http = require("http");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const db = require("./db");

// const Vino = require("./models/Vino");\
const { Vino, User, Orden, Carrito } = require("./models/index");

const app = express();
// logging middleware
app.use(volleyball);

/* app.use(express.static("build")); */

// parsing middleware
app.use(express.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api", routes);

app.use("/api", (req, res) => {
  res.sendStatus(404);
});

// error middleware -> https://expressjs.com/es/guide/error-handling.html
app.use((err, req, res, next) => {
  res.status(500).send(err.message);
});

db.sync({ force: true }).then(() => {
  app.listen(3001, () => console.log("Servidor escuchando en el puerto 3001"));
});
