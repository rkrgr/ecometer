const invoiceService = require("../services/invoice.service")

module.exports = {
    invoice: async (req, res) => {
        const invoices = await invoiceService.getInvoices(2);
        res.render('invoice', {
            invoices
        });
    }
}