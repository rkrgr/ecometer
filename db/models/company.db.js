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
    getCompanyByEMail: (email) => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM ' + tableName + ' WHERE unternehmen_mail=?', email, (err, rows) => {
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
    addCompany: (name, mail, password) => {
        return new Promise((resolve, reject) => {
            db.query('INSERT INTO ' + tableName + ' (unternehmen_name, unternehmen_mail, unternehmen_passwort) VALUES (?,?,?);',
                [name, mail, password],
                (err, result) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve(result.insertId)
                    }
                })
        })
    },
    updatePassword: (id, newPassword) => {
        return new Promise((resolve, reject) => {
            db.query('UPDATE ' + tableName + ' SET unternehmen_passwort=? WHERE unternehmen_ID=?',
            [newPassword, id],
            (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result.affectedRows);
                }
            });
        });
    },
    updateCompanyWithPassword: (id, name, mail, password) => {
        return new Promise((resolve, reject) => {
            db.query('UPDATE ' + tableName + ' SET unternehmen_passwort=?, unternehmen_name=?, unternehmen_mail=? WHERE unternehmen_ID=?',
            [password, name, mail, id],
            (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result.affectedRows);
                }
            });
        });

    },
    updateCompanyWithoutPassword: (id, name, mail) => {
        return new Promise((resolve, reject) => {
            db.query('UPDATE ' + tableName + ' SET  unternehmen_name=?, unternehmen_mail=? WHERE unternehmen_ID=?',
            [name, mail, id],
            (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result.affectedRows);
                }
            });
        });

    }

    
}
