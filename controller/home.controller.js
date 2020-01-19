const invoiceService = require("../services/invoice.service");
const measureService = require("../services/measures.service");

module.exports = {
    index: async (req, res) => {
        const historyMap = await invoiceService.getHistoryMap();
        const latestMeasures = await measureService.getLatestMeasures(3);
        const bestMeasures = await measureService.getBestMeasures(3);
        let pilarDataByCompanyId = undefined;
        if (req.user === undefined) {
            // in case undefined information is needed in future
            pilarDataByCompanyId = await invoiceService.getPilardataByCompanyId(1);
        }else{
            pilarDataByCompanyId = await invoiceService.getPilardataByCompanyId(req.user.id);
        }
        const pilarDataOfAllCompanys = await invoiceService.getPilarDataOfAllCompanys();
        res.render('index', {
            user: req.user,
            historyMap: JSON.stringify(Array.from(historyMap.entries())),
            latestMeasures,
            bestMeasures,
            pilarDataByCompanyId: JSON.stringify(pilarDataByCompanyId),
            pilarDataOfAllCompanys: JSON.stringify(pilarDataByCompanyId) // pilarDataOfAllCompanys empty
        });
    }
}