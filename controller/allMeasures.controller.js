const allMeasuresService = require("../services/measure.service");

module.exports = {
    index: async (req, res) => {
            const allMeasures = await allMeasuresService.getAllMeasures(3);
            res.render('allMeasures', {
                allMeasures
            });
    }
}