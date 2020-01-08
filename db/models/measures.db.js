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
            console.log("db angesprochen");
            db.query('INSERT INTO ' + tableName + ' (massnahme_name, massnahme_co2einsparung,massnahme_absoluteeinsaprung, massnahme_datum, fk_mass_unternehmen, fk_mass_einheit, fk_mass_kategorie, massnahme_offentlich) VALUES (?,?,?,?,?,?,?,?)',
                [measure.massnahme_name, measure.massnahme_co2einsparung,measure.massnahme_absoluteeinsaprung, measure.massnahme_datum.format('YYYY-MM-DD'), measure.fk_mass_unternehmen, 1, 1,measure.fk_mass_einheit,measure.fk_mass_kategorie,measure.massnahme_offentlich, true], (err, result) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve(result.insertId)
                        console.log("Daten an DB schicken");
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
