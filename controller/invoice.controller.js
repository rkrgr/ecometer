const invoiceService = require("../services/invoice.service")
const categoryService = require("../services/category.service")
const moment = require("moment")

module.exports = {
    invoice: async (req, res) => {
        const invoice = await invoiceService.getInvoice(1); // hidden field info
        res.render('invoice', {
            invoice
        });
    },
    invoices: async (req, res) => {
        const invoices = await invoiceService.getInvoices(3); // hidden field info
        res.render('invoices', {
            invoices
        });
    },
    invoice_insert_index: async (req, res) => {
        const categories = await categoryService.getCategories();
        res.render('invoiceinsert', {
            categories
        });
    },
    invoice_insert: async (req, res) => {
        var invoice = {}

        invoice.fk_rechn_kategorie = req.body.fk_rechn_kategorie;
        invoice.rechnung_verbrauchswert = req.body.rechnung_verbrauchswert;
        invoice.fk_rechn_einheit = req.body.fk_rechn_einheit;
        invoice.rechnung_emissionsfaktor = req.body.rechnung_emissionsfaktor;
        invoice.rechnungsdaten_startdatum = req.body.rechnungsdaten_startdatum;
        invoice.rechnung_enddatum = req.body.rechnung_enddatum;
        invoice.fk_rechn_unternehmen = "1"; // attention
        console.log(invoice);
        const insertInvoice = await invoiceService.insertInvoice(invoice);
        res.redirect('../invoice/invoiceinsert')
    },
    invoice_delete: async (req, res) => {
        const invoicedelete = await invoiceService.deleteInvoice(1);
        res.render('deleteinvoice', {
            invoicedelete
        });
    }
}