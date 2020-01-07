const invoiceService = require("../services/invoice.service");
const measureService = require("../services/measure.service");

module.exports = {
    index: async (req, res) => {
        const historyMap = await invoiceService.getHistoryMap();
        const latestMeasures = await measureService.getLatestMeasures(3);
        const bestMeasures = await measureService.getBestMeasures(3);
        res.render('index', {
            user: req.user,
            historyMap: JSON.stringify(Array.from(historyMap.entries())),
            latestMeasures,
            bestMeasures
        });
    }
}