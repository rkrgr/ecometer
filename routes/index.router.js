const router = require('express').Router()

const homeController = require('../controller/home.controller')

router.get('/', homeController.index)

router.use('/login', require('./login.router'))
router.use('/logout', require('./logout.router'))
router.use('/resetPassword', require('./resetPassword.router'))

router.use('/invoices', require('../routes/invoice.js'))

router.use('/profile', require('./profile.router'))

router.use('/measures', require('./measures.router'))

module.exports = router
