const invoiceService = require("../services/invoice.service");
const measureService = require("../services/measures.service");

module.exports = {
    index: async (req, res) => {
        const historyMap = await invoiceService.getHistoryMap();
        const latestMeasures = await measureService.getLatestMeasures(3);
        const bestMeasures = await measureService.getBestMeasures(3);
        const pilarData = await invoiceService.getPilardataByCompanyId();


        res.render('index', {
            user: req.user,
            historyMap: JSON.stringify(Array.from(historyMap.entries())),
            latestMeasures,
            bestMeasures,
            pilarData
        });
    }
}