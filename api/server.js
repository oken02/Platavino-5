const express = require("express");
const routes = require("./routes/index");
const models = require("./models/index");

const db = require("./db");
// const db = require("./config/db");
const { Carrito, Orden, User, Vino } = require('./models/index')


const app = express();
// logging middleware

// app.use(express.static("../public"));
app.use(express.urlencoded());
app.use(express.json());

app.use("/api", routes);

app.use("/api", (req, res) => {
  res.sendStatus(404);
});

// error middleware -> https://expressjs.com/es/guide/error-handling.html
app.use((err, req, res, next) => {
  res.status(500).send(err);
});

db.sync({ force: false })
  .then(() =>
    app.listen(3000, () =>
      console.log("Servidor corriendo en http://localhost:3000")
    )
  )
  .catch((err) => console.log(err));

