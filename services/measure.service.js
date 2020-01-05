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
    },
    getBestMeasures: (num) => {
        return new Promise(async (resolve, reject) => {
            const measures = await measureModel.getBestMeasures(num)
            if (measures === undefined) {
                reject('Could not read best measures from database.')
            }
            resolve(measures)
        })
    }
};