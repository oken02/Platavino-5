const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/index')
const db = require('./db');

const app = express();

app.use(express.static('../public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(routes);

app.use((err, req, res, next) => {
    res.status(500).send(err);
});

db.sync()
 .then(() => app.listen(5432, ()=> console.log('Servidor corriendo en http://localhost:5432')))
 .catch((err) => console.log(err));