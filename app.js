const express = require('express');
const parser = require('body-parser');
const signupRoutes = require('./routes/signupRoutes');
const path = require('path');
const {engine} = require('express-handlebars');

const app = express();
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

app.use(parser.urlencoded({extended: true}));
app.use("/static", express.static(path.join(__dirname, 'static')));
app.use(signupRoutes);

app.listen(80);