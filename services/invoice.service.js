const invoiceModel = require("../db/models/invoice.db");

module.exports = {
    getInvoice: (num) => {
        return invoiceModel.getInvoice(num);
    }
};