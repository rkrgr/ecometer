const measureModel= require("../db/models/measures2.db");
module.exports = {
    getAllMeasures: (num) => {
        return measureModel.getAllMeasures(num);
    }
};
/*module.exports = {
    getAllMeasures: (num) => {
        return new Promise(async (resolve, reject) => {
                    const latestMeasures = await measureModel.getMeasure(num)
                    if (latestMeasures === undefined) {
                        reject('Could not read latest measures from database.')
                    }
                    resolve(latestMeasures)
                })
    }
}*/
