const router = require('express').Router()

const controller = require('../controller/resetPassword.controller')

router.get('/', controller.index);
router.post('/', controller.resetPassword);

module.exports = router
