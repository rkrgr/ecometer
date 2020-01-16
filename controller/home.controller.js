const invoiceService = require("../services/invoice.service");
const measureService = require("../services/measures.service");

module.exports = {
    index: async (req, res) => {
        const historyMap = await invoiceService.getHistoryMap();
        const latestMeasures = await measureService.getLatestMeasures(3);
        const bestMeasures = await measureService.getBestMeasures(3);
        const pilarData = await invoiceService.getPilardata();
        // hier muss die const rein für allInvoices
        // hier muss die const rein für den referenzwert reference2014
        res.render('index', {
            user: req.user,
            historyMap: JSON.stringify(Array.from(historyMap.entries())),
            latestMeasures,
            bestMeasures,
            pilarData
        });
    }
}