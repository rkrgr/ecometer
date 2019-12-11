const measureService = require("../services/measure.service");

module.exports = {
    index: async (req, res) => {
            const measures = await measureService.getAllMeasures(3);
            res.render('index', {
                measures
            });
    }
}