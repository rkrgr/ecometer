const router = require('express').Router();

const invoiceController = require('../controller/invoice.controller');

router.get('/invoice', invoiceController.invoice);

router.get ('/invoices',invoiceController.invoices);

module.exports = router;