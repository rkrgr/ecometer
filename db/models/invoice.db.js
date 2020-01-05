
//const format = require("moment-format")

const db = require('../connection')

const tableName = 'tbl_rechnung'

module.exports = {
    getInvoice: (id) => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM ' + tableName + ' WHERE rechnung_ID= ?', id, (err, rows) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(rows[0])
                }
            })
        })
    },
    /*
    getInvoices: (num) => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM ' + tableName + ' ORDER BY rechnungsdaten_startdatum DESC LIMIT ?', num, (err, rows) => {
                if (err) {
                    reject(err)
                } else {
                    let results = []
                    rows.forEach((row) => {
                        results.push({
                            //name: row.rechnung_name?
                            verbrauchswert: row.rechnung_verbrauchswert,
                            emissionfactor: row.rechnung_emissionsfaktor,
                            startdate: row.rechnungsdaten_startdatum,
                            enddate: row.rechnung_enddatum

                        })
                    })
                    resolve(results)
                }
            })
        })
    },
    */
    
    getInvoices: (num) => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM tbl_rechnung ORDER BY rechnungsdaten_startdatum DESC LIMIT ?', num, (err, rows) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(rows)
                }
            })
        })
    },
    getInvoiceFromCompanyOfCategoryBeforeDate: (companyId, categoryId, date) => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM tbl_rechnung WHERE fk_rechn_unternehmen = ? AND fk_rechn_kategorie = ? AND rechnung_enddatum < ? ORDER BY rechnung_enddatum DESC LIMIT 1', [companyId, categoryId, date], (err, rows) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(rows[0])
                }
            })
        })
    },
    //format('YYYY-MM-DD') did not work on dates
    insertInvoice: (invoice) => {
        console.log("db angesprochen");
        return new Promise((resolve, reject) => {
            db.query('INSERT INTO ' + tableName + ' (rechnung_verbrauchswert, rechnung_emissionsfaktor, rechnungsdaten_startdatum, rechnung_enddatum, fk_rechn_einheit, fk_rechn_unternehmen, fk_rechn_kategorie) VALUES (?,?,?,?,?,?,?)',
                [invoice.rechnung_verbrauchswert, invoice.rechnung_emissionsfaktor, invoice.rechnungsdaten_startdatum, invoice.rechnung_enddatum, invoice.fk_rechn_einheit, invoice.fk_rechn_unternehmen, invoice.fk_rechn_kategorie], (err, result) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve(result.insertId)
                        console.log("inserted into db")
                    }
                })
        })
    },
    deleteinvoice: (id) => {
        return new Promise((resolve, reject) => {
            db.query('DELETE FROM ' + tableName + ' WHERE rechnung_ID=?', id, (err, result) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(result.affectedRows)
                }
            })
        })
    }
}



