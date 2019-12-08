const router = require('express').Router()

const loginController = require('../controller/login.controller')

router.get('/', loginController.index)

module.exports = router
