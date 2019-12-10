/*
const moment = require("moment")

const db = require('../connection')

module.exports = {
    getInvoices: (id) => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM tbl_rechnung WHERE id=?', id, (err, rows) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(rows[0])
                }
            })
        })
    },
}
*/



const moment = require("moment");

module.exports = {
    getInvoices: (num) => {
        return [
            {
                rechnung_ID: "1",
                rechnung_emissionsfaktor: 474,
                rechnung_verbrauchswert: 400000,
                rechnungsdaten_startdatum: moment("2018-12-03"),
                rechnung_enddatum: moment("2019-12-03"),
                fk_rechn_einheit: "kWh",
                fk_rechn_kategorie: "Energie"
            },
            {
                rechnung_ID: "2",
                rechnung_emissionsfaktor: 500,
                rechnung_verbrauchswert: 10000,
                rechnungsdaten_startdatum: moment("2018-06-17"),
                rechnung_enddatum: moment("2019-06-17"),
                fk_rechn_einheit: "kWh",
                fk_rechn_kategorie: "Energie"
            },
            {
                rechnung_ID: "3",
                rechnung_emissionsfaktor: 308,
                rechnung_verbrauchswert: 5000000,
                rechnungsdaten_startdatum: moment("2018-04-12"),
                rechnung_enddatum: moment("2019-01-05"),
                fk_rechn_einheit: "kWh",
                fk_rechn_kategorie: "Energie"
            }
        ];
    }
};
