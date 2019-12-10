const invoiceModel = require("../db/models/invoice.db");

module.exports = {
    getInvoices: (num) => {
        return new Promise(async (resolve, reject) => {
            const invoices = await invoiceModel.getInvoices(num)
            if (invoices === undefined) {
                reject('Could not access invoice')
            }
            resolve(invoices)
        }) 
    }
};
