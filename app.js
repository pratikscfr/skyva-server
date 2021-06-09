require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const routes = require('./routes/routes');
const cors = require('cors');
express.urlencoded({ extended: false });
const app = express();

app.use(morgan('dev'));
app.use(cors());

app.use(express.json());
app.use(routes);

module.exports = app;
