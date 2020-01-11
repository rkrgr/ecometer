const measuresService = require("../services/measures.service");
//const format = require("moment-format");
const moment = require("moment");


module.exports = {
        allMeasures: async (req, res) => {
                
                const allMeasures = await measuresService.getAllMeasures(10);
                
                res.render('allMeasures', {
                    allMeasures
                });
        },
    
        createMeasures: async (req, res) => {
                res.render('createMeasures');
        },

        measure_insert:async (req, res)=>{
            var measure = {}
            
            //fk_mass_einheit, fk_mass_kategorie, fk_mass_unternehmen  
            measure.massnahme_name=req.body.massnahme_name;
            //measure.massnahme_datum.format('YYYY-MM-DD')="02.11.2019";
            measure.massnahme_absoluteeinsaprung=parseFloat(req.body.massnahme_absoluteeinsaprung);
            measure.massnahme_co2einsparung=parseFloat(req.body.massnahme_co2einsparung);
            measure.tbl_kategorie_einheit=1;
            measure.tbl_kategorie_einheit=1;
            measure.fk_mass_unternehmen=1;

            console.log(measure);

            const insertMeasure = await measuresService.insertMeasure(measure);

            //res.render('insertinvoice', {
            //    insertInvoice
            //});
            //res.redirect(307, '/test');
            //res.send({redirect: '/invoice/invoiceinsert'});
            console.log(measure);
            res.redirect('../measures')        

        }
        
}