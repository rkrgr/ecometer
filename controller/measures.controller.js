const measuresService = require("../services/measures.service");

module.exports = {
    index: async (req, res) => {
            const allMeasures = await allMeasuresService.getAllMeasures(3);
            res.render('allMeasures', {
                allMeasures
            });
    },
    
        index: async (req, res) => {
                
                res.render('createMeasures');
    
                myMassnahme :request.body.myMassnamhe, 
                myEinheit : request.body.myEinheit,       
                nachname : request.body.nachname,
        }
}