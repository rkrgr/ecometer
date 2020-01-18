const invoiceService = require("../services/invoice.service")
const categoryService = require("../services/category.service")
const unitService = require("../services/unit.service")
const moment = require("moment")

const dateformat = "DD.MM.YYYY";

module.exports = {
    invoices: async (req, res) => {
        const invoices = await invoiceService.getInvoices(req.user.id);
        res.render('invoices', {
            user: req.user,
            invoices
        });
    },
    invoice_insert_index: async (req, res) => {
        const categories = await categoryService.getCategories();
        const unitsForCategoryMap = await unitService.getUnitsForCategory();
        res.render('invoiceinsert', {
            user: req.user,
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
        invoice.rechnungsdaten_startdatum = moment(req.body.rechnungsdaten_startdatum);
        invoice.rechnung_enddatum = moment(req.body.rechnung_enddatum);
        invoice.fk_rechn_unternehmen = req.user.id;
        await invoiceService.insertInvoice(invoice);
        res.redirect('/invoices')
    },
    invoiceEditIndex: async (req, res) => {
        const categories = await categoryService.getCategories();
        const unitsForCategoryMap = await unitService.getUnitsForCategory();
        const invoice = await invoiceService.getInvoice(req.params.invoiceId);
        invoice.rechnungsdaten_startdatum = moment(invoice.rechnungsdaten_startdatum).format('YYYY-MM-DD');
        invoice.rechnung_enddatum = moment(invoice.rechnung_enddatum).format('YYYY-MM-DD');
        res.render('invoiceEdit', {
            user: req.user,
            invoice,
            categories,
            unitsForCategory: JSON.stringify(Array.from(unitsForCategoryMap.entries()))
        });
    },
    invoiceUpdate: async (req, res) => {
        await invoiceService.updateInvoice({
            id: req.body.invoiceId,
            consumption: req.body.rechnung_verbrauchswert,
            emissionFactor: req.body.rechnung_emissionsfaktor,
            startDate: moment(req.body.rechnungsdaten_startdatum),
            endDate: moment(req.body.rechnung_enddatum),
            unitId: req.body.unit,
            categoryId: req.body.category
        });
        res.redirect("/invoices");
    },
    invoiceDelete: async (req, res) => {
        await invoiceService.deleteInvoice(req.params.invoiceId);
        res.redirect('/invoices');
    }
}