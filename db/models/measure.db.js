const moment = require("moment")

const db = require('../connection')

module.exports = {
    getMeasure: (id) => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM measure WHERE id=?', id, (err, rows) => {
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
            db.query('SELECT * FROM measure ORDER BY timestamp DESC LIMIT ?', num, (err, rows) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(rows)
                }
            })
        })
    },
    insertMeasure: (measure) => { 
        return new Promise((resolve, reject) => {
            db.query('INSERT INTO measure (name, co2Saving, timestamp, companyId) VALUES (?,?,?,?)', [measure.name, measure.co2Saving, measure.timestamp.format('YYYY-MM-DD'), measure.companyId], (err, result) => {
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
            db.query('DELETE FROM measure WHERE id=?', id, (err, result) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(result.affectedRows)
                }
            })
        })
    }
}
