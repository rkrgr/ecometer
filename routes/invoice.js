const router = require('express').Router();


const invoiceController = require('../controller/invoice.controller');

router.get('/', invoiceController.invoices);

router.get('/insert', invoiceController.invoice_insert_index);
router.post('/insert', invoiceController.invoice_insert);

router.delete('/invoicedelete', invoiceController.invoice_delete);

module.exports = router;