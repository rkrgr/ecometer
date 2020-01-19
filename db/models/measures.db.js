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
    getAllMeasures: (companyId) => {
        return new Promise((resolve, reject) => {
            let query = `SELECT ${tableName}.*,tbl_kategorie.kategorie_name FROM ${tableName}
            left join tbl_kategorie on ${tableName}.fk_mass_kategorie=tbl_kategorie.kategorie_ID
            ORDER BY massnahme_datum DESC`;
            db.query(query, companyId, (err, rows) => {
                if (err) {
                   
                    reject(err)
                } else {
                    let results = []
                    rows.forEach((row) => {
                        results.push({
                            massnahme_ID:row.massnahme_ID,
                            fk_mass_unternehmen:row.fk_mass_unternehmen,
                            massnahme_name: row.massnahme_name,
                            kategorie_name: row.kategorie_name,
                            massnahme_co2einsparung: row.massnahme_co2einsparung,
                            massnahme_absoluteeinsaprung: row.massnahme_absoluteeinsaprung,
                            massnahme_datum: row.massnahme_datum

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
<<<<<<< HEAD
        return new Promise((resolve, reject) => {          
=======
        return new Promise((resolve, reject) => {
>>>>>>> 0702fb843dfa44630318f412e1d8a79512f1ed6e
            db.query('INSERT INTO ' + tableName + ' (massnahme_name, massnahme_datum, massnahme_absoluteeinsaprung, massnahme_co2einsparung, fk_mass_einheit, fk_mass_kategorie, fk_mass_unternehmen, massnahme_offentlich  ) VALUES (?,?,?,?,?,?,?,?)',
                [measure.massnahme_name, measure.massnahme_datum , measure.massnahme_absoluteeinsaprung,  //measure.massnahme_datum.format('YYYY-MM-DD')
                measure.massnahme_co2einsparung,measure.fk_mass_einheit,measure.fk_mass_kategorie,measure.fk_mass_unternehmen,measure.massnahme_offentlich], (err, result) => {
                    if (err) {                        
                       
                        console.log(err);
                        reject(err)
                    } else {
                        resolve(result.insertId)
<<<<<<< HEAD
                        
=======
>>>>>>> 0702fb843dfa44630318f412e1d8a79512f1ed6e
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
