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
