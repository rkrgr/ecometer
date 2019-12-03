const invoiceService = require("../services/invoice.service")

module.exports = {
    invoice: (req, res) => {
        const invoices = invoiceService.getInvoice(2);
        res.render('invoice', {
            invoices
        })
    }
}