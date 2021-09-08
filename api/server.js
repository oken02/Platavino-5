const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/index')
const models = require('./models/index')
const Vino = require("./models/Vino")
const vinosRoute = require("../api/routes/vinosRoute")
const db = require('./db');

const app = express();

app.use(express.static('../public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/api",routes);

app.use((err, req, res, next) => {
    res.status(500).send(err);
});

db.sync({ force: true })
 .then(() => app.listen(3000, ()=> console.log('Servidor corriendo en http://localhost:3000')))
 .catch((err) => console.log(err));