const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

// Handlebars Middleware
app.engine('handlebars', exphbs({ 
    defaultLayout: 'main',
    helpers: require('./config/handlebarsHelpers')
 }));
app.set('view engine', 'handlebars');

app.use('/', require('./routes/index.js'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
