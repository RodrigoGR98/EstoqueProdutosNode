const express = require('express');
const app = express();
const router = express.Router();
const cors = require('cors');
var bodyParser = require('body-parser');

// Conversão do Body para JSON()
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

//Start do aplicativo

app.use(cors());

const index = require('./routes/index');
const produtoRoute = require('./routes/ProdutoRoute');
app.use('/', index);
app.use('/produtos', produtoRoute);
module.exports = app;