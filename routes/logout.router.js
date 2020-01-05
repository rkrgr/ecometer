const router = require('express').Router()

const logoutController = require('../controller/logout.controller')

router.get('/', logoutController.logout)

module.exports = router
