const invoiceService = require("../services/invoice.service")

module.exports = {
    invoice: async (req, res) => {
        const invoice = await invoiceService.getInvoice(1);
        res.render('invoice', {
            invoice
        });
    },
    invoices: async (req, res) => {
        const invoices = await invoiceService.getInvoices(3); 
        res.render('invoices', {
            invoices
        });
    },
    invoice_insert: async (req, res) => {
        const invoices = await invoiceService.insertInvoice(1); //attention id alleady exists
        res.render('insertinvoice', {
            insertInvoice
        });
    },
    invoice_delete: async (req, res) => {
        const invoices = await invoiceService.deleteInvoice(1); // attention id allready existsy -> alternation of database
        res.render('deleteinvoice', {
            invoicedelete
        });
    }
}