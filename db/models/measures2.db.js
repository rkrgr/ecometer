const moment = require("moment");

module.exports = {
    getAllMeasures: (num) => {
        return [
            {
                measureName: "PV-Anlage installiert",
                companyName: "Märkische Kiste",
                co2Value:    10,
                date:        moment("2019-11-25")
            },
            {
                measureName: "Hecken gepflanzt",
                companyName: "Märkische Kiste",
                co2Value:    5,
                date:        moment("2018-10-25")
            },
            {
                measureName: "Fenster saniert",
                companyName: "Dreusicke",
                co2Value:    15,
                date:        moment("2017-02-09")
            }
        ];
    }
};