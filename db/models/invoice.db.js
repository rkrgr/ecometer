/*
const moment = require("moment")

const db = require('../connection')

module.exports = {
    getInvoices: (id) => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM tbl_rechnung WHERE id=?', id, (err, rows) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(rows[0])
                }
            })
        })
    },
}
*/



const moment = require("moment");

module.exports = {
    getInvoices: (num) => {
        return [
            {
                invoiceName: "1",
                emissionFactor: 474,
                invoiceValue: 400000,
                dateStart: moment("2018-12-03"),
                dateEnd: moment("2019-12-03")
            },
            {
                invoiceName: "2",
                emissionFactor: 500,
                invoiceValue: 10000,
                dateStart: moment("2018-06-17"),
                dateEnd: moment("2019-06-17")
            },
            {
                invoiceName: "3",
                emissionFactor: 308,
                invoiceValue: 5000000,
                dateStart: moment("2018-04-12"),
                dateEnd: moment("2019-01-05")
            }
        ];
    }
};
