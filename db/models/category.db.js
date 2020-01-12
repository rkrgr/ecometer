const db = require('../connection');

const tableName = 'tbl_kategorie';

function rowToCategory(row) {
    return {
        id: row.kategorie_ID,
        name: row.kategorie_name
    }
}

module.exports = {
    getCategories: () => {
        return new Promise((resolve, reject) => {
            db.query("SELECT * FROM " + tableName, (err, rows) => {
                if (err) {
                    reject(err);
                } else {
                    let result = [];
                    rows.forEach(row => {
                        result.push(rowToCategory(row));
                    });
                    resolve(result);
                }
            });
        });
    }
};
