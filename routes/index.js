const router = require('express').Router();

const homeController = require('../controller/home.controller');

router.get('/', homeController.index);

module.exports = router;