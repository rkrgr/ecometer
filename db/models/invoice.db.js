
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
    getInvoices: (companyId) => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM tbl_rechnung r, tbl_kategorie k, tbl_einheit e ' +
                     'WHERE r.fk_rechn_kategorie = k.kategorie_ID AND r.fk_rechn_einheit = e.einheit_ID AND fk_rechn_unternehmen=? ORDER BY rechnungsdaten_startdatum DESC', 
                     companyId, 
                     (err, rows) => {
                        if (err) {
                            reject(err)
                        } else {
                            resolve(rows)
                        }
            })
        })
    },
    getInvoicesOrderedByEnddateAsc: () => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM tbl_rechnung ORDER BY rechnung_enddatum', (err, rows) => {
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
    getOldestInvoiceFromCompanyOfCategoryForPilar: (companyId, categoryId) => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM tbl_rechnung WHERE fk_rechn_unternehmen = ? AND fk_rechn_kategorie = ? ORDER BY rechnung_enddatum DESC LIMIT 1', [companyId, categoryId], (err, rows) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(rows[0]);
                    //console.log(rows[0]);
                }
            })
        })
    },
    getNewestInvoiceFromCompanyOfCategoryForPilar: (companyId, categoryId) => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM tbl_rechnung WHERE fk_rechn_unternehmen = ? AND fk_rechn_kategorie = ? ORDER BY rechnung_enddatum ASC LIMIT 1', [companyId, categoryId], (err, rows) => {
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
        return new Promise((resolve, reject) => {
            db.query('INSERT INTO ' + tableName + ' (rechnung_verbrauchswert, rechnung_emissionsfaktor, rechnungsdaten_startdatum, rechnung_enddatum, fk_rechn_einheit, fk_rechn_unternehmen, fk_rechn_kategorie) VALUES (?,?,?,?,?,?,?)',
                [invoice.rechnung_verbrauchswert, invoice.rechnung_emissionsfaktor, invoice.rechnungsdaten_startdatum, invoice.rechnung_enddatum, invoice.unitId, invoice.fk_rechn_unternehmen, invoice.categoryId], (err, result) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve(result.insertId)
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

