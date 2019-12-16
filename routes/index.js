const router = require('express').Router();

const homeController = require('../controller/home.controller');

router.get('/', homeController.index);

router.use('/invoice', require('../routes/invoice.js'));

module.exports = router;