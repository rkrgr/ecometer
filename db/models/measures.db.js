const moment = require("moment")

const db = require('../connection')

const tableName = 'tbl_massnahme'

module.exports = {
    getMeasure: (id) => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM ' + tableName + ' WHERE massnahme_ID=?', id, (err, rows) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(rows[0])
                }
            })
        })
    },
    getLatestMeasures: (num) => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM ' + tableName + ' ORDER BY massnahme_datum DESC LIMIT ?', num, (err, rows) => {
                if (err) {
                    reject(err)
                } else {
                    let results = []
                    rows.forEach((row) => {
                        results.push({
                            name: row.massnahme_name,
                            timestamp: row.massnahme_datum,
                            companyId: row.fk_mass_unternehmen
                        })
                    })
                    resolve(results)
                }
            })
        })
    },
    getAllMeasures: (num) => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM ' + tableName + ' ORDER BY massnahme_datum DESC LIMIT ?', num, (err, rows) => {
                if (err) {
                    reject(err)
                } else {
                    let results = []
                    rows.forEach((row) => {
                        results.push({
                            name: row.massnahme_name,
                            kategorie:row.fk_mass_kategorie,
                            co2einsparung:row.massnahme_co2einsparung,
                            absoluteeinsparung:row.massnahme_absoluteeinsparung,
                            timestamp: row.massnahme_datum

                        })
                    })
                    resolve(results)
                }
            })
        })
    },
    insertMeasure: (measure) => {
        return new Promise((resolve, reject) => {
            db.query('INSERT INTO ' + tableName + ' (massnahme_name, massnahme_co2einsparung, massnahme_datum, fk_mass_unternehmen, fk_mass_einheit, fk_mass_kategorie, massnahme_offentlich) VALUES (?,?,?,?,?,?,?)',
                [measure.name, measure.co2Saving, measure.timestamp.format('YYYY-MM-DD'), measure.companyId, 1, 1, true], (err, result) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve(result.insertId)
                    }
                })
        })
    },
    deleteMeasure: (id) => {
        return new Promise((resolve, reject) => {
            db.query('DELETE FROM ' + tableName + ' WHERE massnahme_ID=?', id, (err, result) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(result.affectedRows)
                }
            })
        })
    }
}
