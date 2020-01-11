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
    /*insertMeasure: (measure) => {
        return new Promise((resolve, reject) => {
            console.log("db angesprochen");
            db.query('INSERT INTO ' + tableName + ' (massnahme_name, massnahme_datum, massnahme_offentlich) VALUES (?, ?, ?)',
                [measure.massnahme_name, measure.massnahme_datum.format('YYYY-MM-DD'), true], (err, result) => {
                    if (err) {
                        console.log("Fehler beim INSERT");
                        reject(err)
                    } else {
                        resolve(result.insertId)
                        console.log("Daten an DB schicken");
                    }
                })
        })
    },*/
    insertMeasure: (measure) => {
        return new Promise((resolve, reject) => {
            console.log("db angesprochen");
            db.query('INSERT INTO ' + tableName + ' (massnahme_name, massnahme_datum, massnahme_absoluteeinsaprung, massnahme_co2einsparung, fk_mass_einheit, fk_mass_kategorie, fk_mass_unternehmen, massnahme_offentlich  ) VALUES (?,?,?,?,?,?,?,?)',
                [measure.massnahme_name, '1990-08-09', measure.massnahme_absoluteeinsaprung,  //measure.massnahme_datum.format('YYYY-MM-DD')
                measure.massnahme_co2einsparung, 1, 1, 1, true], (err, result) => {
                    if (err) {
                        console.log("!!Fehler beim INSERT");
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
