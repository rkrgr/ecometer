const invoiceModel = require("../db/models/invoice.db");

module.exports = {
    getInvoices: (num) => {
        return invoiceModel.getInvoices(num);
    }
};