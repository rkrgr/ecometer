const measuresService = require("../services/measures.service");
//const format = require("moment-format");
const moment = require("moment");


module.exports = {
    allMeasures: async (req, res) => {
            const allMeasures = await measuresService.getAllMeasures(3);
            res.render('allMeasures', {
                allMeasures
            });
    },
    
        createMeasures: async (req, res) => {
                
                res.render('createMeasures');
    
               
        },
        measure_insert:async (req, res)=>{
            var measure = {}
            
        measure.massnahme_name=req.body.massnahme_name;
        measure.massnahme_absoluteeinsaprung=req.body.massnahme_absoluteeinsaprung;
        measure.tbl_kategorie_einheit=req.body.fk_mass_einheit;
        measure.massnahme_co2einsparung=req.body.massnahme_co2einsparung;
        measure.tbl_kategorie_einheit=req.body.fk_mass_einheit;
        console.log(measure);
        const insertMeasure = await measuresService.insertMeasure(measure);
        //res.render('insertinvoice', {
        //    insertInvoice
        //});
        //res.redirect(307, '/test');
        //res.send({redirect: '/invoice/invoiceinsert'});
        res.redirect('../measure/createMeasure')        

        }
        
}