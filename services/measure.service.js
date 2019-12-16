const measureModel = require("../db/models/measure.db");

module.exports = {
    getLatestMeasures: (num) => {
        return new Promise(async (resolve, reject) => {
            const latestMeasures = await measureModel.getLatestMeasures(num)
            if (latestMeasures === undefined) {
                reject('Could not read latest measures from database.')
            }
            resolve(latestMeasures)
        })
    }
};