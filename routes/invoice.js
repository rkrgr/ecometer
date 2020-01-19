const router = require('express').Router();


const invoiceController = require('../controller/invoice.controller');

router.get('/', invoiceController.invoices);

router.get('/insert', invoiceController.invoice_insert_index);
router.post('/insert', invoiceController.invoice_insert);

router.get('/edit/:invoiceId', invoiceController.invoiceEditIndex);
router.post('/edit', invoiceController.invoiceUpdate);

router.post('/delete/:invoiceId', invoiceController.invoiceDelete);

module.exports = router;