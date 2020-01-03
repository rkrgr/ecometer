const router = require('express').Router()

const homeController = require('../controller/home.controller')

router.use('/login', require('./login.router'))
router.use('/invoice', require('../routes/invoice.js'))
router.use('/allMeasures', require('../routes/allMeasures.router'))
router.use('/createMeasures', require('../routes/createMeasures.router'))

router.get('/', homeController.index)

module.exports = router
