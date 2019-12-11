const measureModel= require("../");
module.exports = {
    getAllMeasures:(num)=>{
        return new Promise(async(resolve, reject)=>{
            const allMeasures =await measureModel.getAllMeasures(num)
            if(allMeasures===undefined){
                reject('Could not read latest meusures from DB')
            }
            resolve(allMeasures)
        })
    }
};