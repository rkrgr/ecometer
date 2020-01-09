const measuresService = require("../services/measures.service");

module.exports = {
    allMeasures: async (req, res) => {
            const allMeasures = await measuresService.getAllMeasures(3);
            res.render('allMeasures', {
                allMeasures
            });
    },
    
        createMeasures: async (req, res) => {
                
                res.render('createMeasures');
    
               
        },
        measure_insert:async (req, res)=>{
            var measure_add = {}

        measure_add.massnahme_name=req.body.myMassnahme;
        measure_add.massnahme_absoluteeinsaprung=req.body.myGroesse;
        measure_add.tbl_kategorie_einheit=req.body.myEinheit;
        measure_add.massnahme_co2einsparung=req.body.Co2;
        measure_add.tbl_kategorie_einheit=req.body.myEinheit

        

        }
        
}