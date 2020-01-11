const measureModel = require("../db/models/measures.db");

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
    getAllMeasures: (num) => {
        return new Promise(async (resolve, reject) => {
            const allMeasures = await measureModel.getAllMeasures(num)
            if (allMeasures === undefined) {
                reject('Could not read latest measures from database.')
            }
            resolve(allMeasures)
        })
    },
    insertMeasure: (measure) => {
        return new Promise(async (resolve, reject) => {
            try{
                const insertMeasure = await measureModel.insertMeasure(measure)
                resolve(insertMeasure)
            } catch(e) {
                reject(e)
            }
            
        })
    }
};