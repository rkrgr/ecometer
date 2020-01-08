const moment = require("moment")

const db = require('../connection')

const tableName = 'tbl_massnahme'

function rowToMeasure(row) {
    return {
        id: row.massnahme_ID,
        name: row.massnahme_name,
        date: row.massnahme_datum,
        public: row.massnahme_offentlich,
        emissionFactor: row.massnahme_emissionsfaktor,
        absoluteSaving: row.massnahme_absoluteeinsaprung,
        co2Saving: row.massnahme_co2einsparung,
        unit: row.einheit_name,
        category: row.kategorie_name,
        company: row.unternehmen_name
    };
}

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
            db.query('SELECT * FROM ' + tableName + ', tbl_einheit, tbl_kategorie, tbl_unternehmen ' +
                'WHERE fk_mass_einheit=einheit_ID AND fk_mass_kategorie=kategorie_ID AND fk_mass_unternehmen=unternehmen_ID ' +
                'ORDER BY massnahme_datum DESC LIMIT ?', num, (err, rows) => {
                if (err) {
                    reject(err)
                } else {
                    let results = []
                    rows.forEach((row) => {
                        results.push(rowToMeasure(row))
                    })
                    resolve(results)
                }
            })
        })
    },
    getBestMeasures: (num) => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM ' + tableName + ', tbl_einheit, tbl_kategorie, tbl_unternehmen ' +
                'WHERE fk_mass_einheit=einheit_ID AND fk_mass_kategorie=kategorie_ID AND fk_mass_unternehmen=unternehmen_ID ' +
                ' ORDER BY massnahme_co2einsparung DESC LIMIT ?', num, (err, rows) => {
                if (err) {
                    reject(err)
                } else {
                    let results = []
                    rows.forEach((row) => {
                        results.push(rowToMeasure(row))
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
            db.query('INSERT INTO ' + tableName + ' (massnahme_name, massnahme_co2einsparung,massnahme_absoluteeinsaprung, massnahme_datum, fk_mass_unternehmen, fk_mass_einheit, fk_mass_kategorie, massnahme_offentlich) VALUES (?,?,?,?,?,?,?,?)',
                [measure.name, measure.co2Saving, measure.timestamp.format('YYYY-MM-DD'), measure.companyId, 1, 1, true], (err, result) => {
                    if (err) {
                        reject(err)
                    } else {
                        //resolve(result.insertId)
                        resolve(results)
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
