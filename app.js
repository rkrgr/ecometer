const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

// Handlebars Middleware
app.engine('handlebars', exphbs({ 
    defaultLayout: 'main',
    helpers: require('./config/handlebarsHelpers')
 }));
app.set('view engine', 'handlebars');

app.use('/', require('./routes/index.router'));

module.exports = app;
