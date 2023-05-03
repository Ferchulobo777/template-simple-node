const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
require('dotenv').config();
const router = require('./routes');
const hbs = require('hbs','handlebars');

// Esta es nuestra aplicación
const app = express();

// Middlewares 
app.use(express.json());
app.use(helmet({
    crossOriginResourcePolicy: false,
}));
app.use(cors());
app.set('view engine', 'hbs', 'handlebars');   
app.set("views", __dirname+"/views");
hbs.registerPartials(__dirname + '/views/partials');
app.use('/', router);

module.exports = app;