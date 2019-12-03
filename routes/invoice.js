const router = require('express').Router();

const invoiceController = require('../controller/invoice.controller');

router.get('/', invoiceController.invoice);

module.exports = router;