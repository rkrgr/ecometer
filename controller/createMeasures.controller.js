module.exports = {
    index: async (req, res) => {
            
            res.render('createMeasures');

            myMassnahme :request.body.myMassnamhe, 
            myEinheit : request.body.myEinheit,       
            nachname : request.body.nachname,
    }
}