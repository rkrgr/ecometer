const measureService = require("../services/measures.service");

module.exports = {
    index: async (req, res) => {
            const measures = await measureService.getLatestMeasures(3);
            res.render('index', {
                measures
            });
    }
}