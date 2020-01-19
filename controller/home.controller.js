const invoiceService = require("../services/invoice.service");
const measureService = require("../services/measures.service");

module.exports = {
    index: async (req, res) => {
        const historyMap = await invoiceService.getHistoryMap();
        const latestMeasures = await measureService.getLatestMeasures(3);
        const bestMeasures = await measureService.getBestMeasures(3);
        const pilarDataByCompanyId = await invoiceService.getPilardataByCompanyId(1); // req.body.id is empty
        const pilarDataOfAllCompanys = await invoiceService.getPilarDataOfAllCompanys();
        console.log(pilarDataOfAllCompanys);
        res.render('index', {
            user: req.user,
            historyMap: JSON.stringify(Array.from(historyMap.entries())),
            latestMeasures,
            bestMeasures,
            pilarDataByCompanyId: JSON.stringify(pilarDataByCompanyId),
            pilarDataOfAllCompanys: JSON.stringify(pilarDataByCompanyId)
        });
    }
}