const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes/index");
const models = require("./models/index");

const db = require("./db");
// const db = require("./config/db");

const app = express();

// app.use(express.static("../public"));
app.use(express.urlencoded());
app.use(express.json());

app.use("/api", routes);

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
