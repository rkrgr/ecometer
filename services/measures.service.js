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
    getBestMeasures: (num) => {
        return new Promise(async (resolve, reject) => {
            const measures = await measureModel.getBestMeasures(num)
            if (measures === undefined) {
                reject('Could not read best measures from database.')
            }
            resolve(measures)
        })
    },
    getAllMeasures: (companyId) => {
        return new Promise(async (resolve, reject) => {
            const allMeasures = await measureModel.getAllMeasures(companyId)
            if (allMeasures === undefined) {
                reject('Could not read latest measures from database.')
            }
            console.log(allMeasures);
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
    },
    deleteMeasure:(id)=>{
        return new Promise(async (resolve,reject)=>{
            try {
                const deleteMeasure=await measureModel.deleteMeasure(id)
                resolve(deleteMeasure)
            }
            catch(e){
                reject(e)
            }
        })
    }
};