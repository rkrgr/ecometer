const measureService = require("../services/measure.service");

module.exports = {
    index: (req, res) => {
            const measures = measureService.getLatestMeasures(3);
            res.render('index', {
                measures
            });
    }
}