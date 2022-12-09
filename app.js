const express = require('express');
const parser = require('body-parser');
const cookieSession = require('cookie-session');
const signupRoutes = require('./routes/signupRoutes');
const path = require('path');
const {engine} = require('express-handlebars');
const authMiddleware = require('./middlewares/authenticationMiddleware');

const app = express();
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

app.use("/", parser.urlencoded({extended: true}));

app.use("/static", express.static(path.join(__dirname, 'static')));

app.use(cookieSession({
    name: 'session',
    httpOnly: true,
    keys: ["asdghjhgsdahjsgdhjasd"],
    maxAge: 24 * 60 * 60 * 1000
}));

app.use(authMiddleware);

app.use(signupRoutes);


function handler(req, res){
    res.send("Hello World")
}
app.get('/test', handler)

app.listen(80);