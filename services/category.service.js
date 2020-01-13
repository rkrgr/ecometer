const model = require("../db/models/category.db");

module.exports = {
    getCategories: () => {
        return new Promise(async (resolve, reject) => {
            try {
                const categories = await model.getCategories();
                resolve(categories);
            } catch(e) {
                reject(e);
            }
        });
    }
};
