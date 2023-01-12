require('dotenv').config();
const express = require ('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const userRoute = require('./routes/authroutes');
const passport = require('passport');

const app = express();
require('./middleware/auth')(passport)
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', userRoute);
//const api = process.env.API_URL;

app.use(bodyParser.json());
app.use(morgan('tiny'));
module.exports = app