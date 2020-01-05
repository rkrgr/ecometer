const router = require('express').Router();



const invoiceController = require('../controller/invoice.controller');

router.get('/invoice', invoiceController.invoice);

router.get('/invoices',invoiceController.invoices);

router.get('/invoiceinsert', invoiceController.invoice_insert_index);
router.post('/invoiceinsert', invoiceController.invoice_insert)

module.exports = router;