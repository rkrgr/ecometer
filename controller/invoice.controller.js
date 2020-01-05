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
    invoice_insert_index: async (req, res) => {
        res.render('invoiceinsert')
    },
    invoice_insert: async (req, res) => {
        var invoice = {}
        invoice.fk_rechn_kategorie = req.body.fk_rechn_kategorie;
        invoice.rechnung_verbrauchswert = req.body.rechnung_verbrauchswert;
        invoice.fk_rechn_einheit = req.body.fk_rechn_einheit;
        invoice.rechnung_emissionsfaktor = req.body.rechnung_emissionsfaktor;
        invoice.rechnungsdaten_startdatum = req.body.rechnungsdaten_startdatum;
        invoice.rechnung_enddatum = req.body.rechnung_enddatum;
        console.log(invoice);   
        //var body = JSON.stringify(req.body)     
        //console.log(req.body.fk_rechn_einheit)
        //console.log(body)
        //console.log(req.body.fk_rechn_einheit)
        const insertInvoice = await invoiceService.insertInvoice(invoice);
        res.render('insertinvoice', {
            insertInvoice
        });
    },
    invoice_delete: async (req, res) => {
        const invoicedelete = await invoiceService.deleteInvoice(1); // attention id allready existsy -> alternation of database
        res.render('deleteinvoice', {
            invoicedelete
        });
    }
}