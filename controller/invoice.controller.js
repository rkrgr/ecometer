const invoiceService = require("../services/invoice.service")

module.exports = {
    invoice: (req, res) => {
        const invoices = invoiceService.getInvoices(2);
        res.render('invoice', {
            invoices
        })
    }
}