const measuresService = require("../services/measures.service");
const categoryService = require("../services/category.service");
console.log(categoryService);
const unitService = require("../services/unit.service");

//const format = require("moment-format");
const moment = require("moment");


module.exports = {
        allMeasures: async (req, res) => {
                const allMeasures = await measuresService.getAllMeasures(10); //req.user.id
                res.render('allMeasures', {
                        user: req.user,
                        allMeasures
                });
                console.log('allMeasures controller ');
        },
    
        createMeasures: async (req, res) => {
                const categories = await categoryService.getCategories();
                const unitsforCategoryMap = await unitService.getUnitsForCategory();
                res.render('createMeasures', {
                        categories,
                        unitsforCategory:unitsforCategoryMap //JSON.stringify(Array.from(unitsforCategoryMap.entries()))
                });
        },

        measure_insert:async (req, res)=>{
            var measure = {}
            
            measure.fk_mass_kategorie = req.body.category;
            measure.massnahme_name=req.body.massnahme_name;
            measure.massnahme_datum=req.body.massnahme_datum;
            measure.massnahme_absoluteeinsaprung=parseFloat(req.body.massnahme_absoluteeinsaprung);
            measure.massnahme_co2einsparung=parseFloat(req.body.massnahme_co2einsparung);
            measure.fk_mass_einheit=req.body.fk_mass_einheit;
            measure.fk_mass_unternehmen=1;
            measure.massnahme_offentlich=req.body.massnahme_offentlich?true:false;       
                
                

            console.log(measure);

            const insertMeasure = await measuresService.insertMeasure(measure);

            console.log(measure);
            res.redirect('../measures')        
        },
        measureEditIndex: async (req, res) => {
                const categories = await categoryService.getCategories();
                const unitsForCategoryMap = await unitService.getUnitsForCategory();
                const measure = await measuresService.getAllMeasures(req.params.measureId);
                res.render('measureEdit', {
                    user: req.user,
                    measure,
                    categories,
                    unitsForCategory: JSON.stringify(Array.from(unitsForCategoryMap.entries()))
                });
            },
        measureUpdate: async (req, res) => {
        await measuresService.updateMeasure({
                id: req.body.measureId,
                massnahme_name: req.body.massnahme_name,
                massnahme_datum: req.body.massnahme_datum,
                massnahme_absoluteeinsaprung: req.body.massnahme_absoluteeinsaprung,
                massnahme_co2einsparung: req.body.massnahme_co2einsparung,
                unitId: req.body.fk_mass_einheit,
                categoryId: req.body.category
        });
        res.redirect("/measures");
        },
        measureDelete: async (req, res)=>{
                await measuresService.deleteMeasure(req.params.measureId);
                res.redirect('/measures');
        }
}