const invoiceService = require("../services/invoice.service")

module.exports = {
    invoice: async (req, res) => {
        const invoices = await invoiceService.getInvoices(1);
        res.render('invoice', {
            invoices
        });
    },
    invoices: async (req, res) => {
        const invoices = await invoiceService.getInvoices(2);
        res.render('invoice', {
            invoices
        });
    }
}