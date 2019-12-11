const measureService = require("../services/measures.service");

module.exports = {
    index: async (req, res) => {
            const measures = await measureService.getAllMeasures(3);
            res.render('index', {
                measures
            });
    }
}