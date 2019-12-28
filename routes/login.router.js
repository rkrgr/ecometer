const router = require('express').Router()

const loginController = require('../controller/login.controller')

router.get('/', loginController.index)

router.post('/', loginController.authenticate)

module.exports = router
