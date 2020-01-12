const model = require("../db/models/unit.db");

module.exports = {
    getUnitsForCategory: () => {
        return new Promise(async (resolve, reject) => {
            try {
                const unitsForCategory = await model.getUnitsForCategory();
                resolve(unitsForCategory);
            } catch(e) {
                reject(e);
            }
        });
    }
};
