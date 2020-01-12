const invoiceService = require("../services/invoice.service")
const categoryService = require("../services/category.service")
const unitService = require("../services/unit.service")
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
        const unitsForCategoryMap = await unitService.getUnitsForCategory();
        res.render('invoiceinsert', {
            categories,
            unitsForCategory: JSON.stringify(Array.from(unitsForCategoryMap.entries()))
        });
    },
    invoice_insert: async (req, res) => {
        var invoice = {}

        invoice.categoryId = req.body.category;
        invoice.rechnung_verbrauchswert = req.body.rechnung_verbrauchswert;
        invoice.unitId = req.body.unit;
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