const express = require("express");
const routes = require("./routes/index");
const models = require("./models/index");
const cors = require("cors");
const db = require("./db");
// const db = require("./config/db");
// const { Carrito, Orden, User, Vino, Review } = require("./models");

const app = express();
// logging middleware

// app.use(express.static("../public"));
app.use(express.urlencoded());
app.use(express.json());

app.use(cors());
app.use("/api", routes);

app.use("/api", (req, res) => {
  res.sendStatus(404);
});

// error middleware -> https://expressjs.com/es/guide/error-handling.html
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send(err);
});

db.sync({ force: false })
  .then(() =>
    app.listen(3001, () =>
      console.log("Servidor corriendo en http://localhost:3001")
    )
  )
  .catch((err) => console.log(err));
