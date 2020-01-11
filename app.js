const express = require('express')
const exphbs = require('express-handlebars')
const passport = require('passport')
const flash = require('express-flash')
const session = require('express-session')
const methodOverride = require('method-override')

const initializePassport = require('./config/passport-config')
const companyService = require('./services/company.service')

const app = express()

// Handlebars Middleware
app.engine('handlebars', exphbs({ 
    defaultLayout: 'main',
    helpers: require('./config/handlebarsHelpers')
 }))
app.set('view engine', 'handlebars')

app.use(express.static(__dirname + '/public'))

initializePassport(
    passport,
    companyService.getCompanyByEMail,
    companyService.getCompanyById
)

app.use(express.urlencoded({ extended: false }))
app.use(flash())
app.use(session({
    secret: 'tempSecret',
    resave: false,
    saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(methodOverride('_method'))

app.use('/', require('./routes/index.router'))

module.exports = app
