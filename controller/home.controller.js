const measureService = require("../services/measure.service");

module.exports = {
    index: async (req, res) => {
            const latestMeasures = await measureService.getLatestMeasures(3);
            const bestMeasures = await measureService.getBestMeasures(3);
            res.render('index', {
                latestMeasures,
                bestMeasures
            });
    }
}