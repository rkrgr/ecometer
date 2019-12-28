const db = require('../connection')

const tableName = 'tbl_unternehmen'

function rowToCompany(row) {
    return {
        id: row.unternehmen_ID,
        name: row.unternehmen_name,
        password: row.unternehmen_passwort,
        mail: row.unternehmen_mail
    }
}

module.exports = {
    getCompanyById: (id) => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM ' + tableName + ' WHERE unternehmen_ID=?', id, (err, rows) => {
                if (err) {
                    reject(err)
                } else if (!rows.length) {
                    resolve(null)
                } else {
                    resolve(rowToCompany(rows[0]))
                }
            })
        })
    },
    getCompanyByName: (name) => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM ' + tableName + ' WHERE unternehmen_name=?', name, (err, rows) => {
                if (err) {
                    reject(err)
                } else if (!rows.length) {
                    resolve(null)
                } else {
                    resolve(rowToCompany(rows[0]))
                }
            })
        })
    },
    addCompany: (name, password) => {
        return new Promise((resolve, reject) => {
            db.query('INSERT INTO ' + tableName + ' (unternehmen_name, unternehmen_passwort) VALUES (?,?);',
                [name, password],
                (err, result) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve(result.insertId)
                    }
                })
        })
    }
}
