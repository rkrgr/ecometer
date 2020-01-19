const db = require('../connection');

const tableName = 'tbl_einheit';

function rowToUnit(row) {
    return {
        id: row.einheit_ID,
        name: row.einheit_name
    }
}

module.exports = {
    // returns map with categoryId -> unit
    getUnitsForCategory: () => {
        return new Promise((resolve, reject) => {
            db.query("SELECT * FROM " + tableName + ", tbl_kategorie_einheit " +
                "WHERE einheit_ID=fk_einheit", (err, rows) => {
                if (err) {
                    reject(err);
                } else {
                    let result = new Map();
                    rows.forEach(row => {
                        const categoryId = row.fk_kategorie;
                        const unit = rowToUnit(row);
                        if(result.has(categoryId)) {
                            let units = result.get(categoryId);
                            units.push(unit);
                            result.set(categoryId, units);
                        } else {
                            result.set(categoryId, [unit])
                        }
                    });
                    resolve(result);
                }
            });
        });
    }
};
