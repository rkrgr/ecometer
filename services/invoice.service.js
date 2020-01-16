const invoiceModel = require("../db/models/invoice.db");
const categoryModel =require("../db/models/category.db");
const companyModel = require("../db/models/company.db");

module.exports = {
    getInvoice: (id) => {
        return new Promise(async (resolve, reject) => {
            const invoice = await invoiceModel.getInvoices(id)
            if (invoice === undefined) {
                reject('Could not access invoice by id')
            }
            resolve(invoice)
        }) 
    },
    getInvoices: (companyId) => {
        return new Promise(async (resolve, reject) => {
            const invoices = await invoiceModel.getInvoices(companyId)
            if (invoices === undefined) {
                reject('Could not access invoice list')
            }
            resolve(invoices)
        }) 
    },
    getHistoryMap: () => {
        return new Promise(async (resolve, reject) => {
            try {
                const result = new Map();
                const invoices = await invoiceModel.getInvoicesOrderedByEnddateAsc();

                invoices.forEach(async invoice => {
                    const companyId = invoice.fk_rechn_unternehmen;
                    const categoryId = invoice.fk_rechn_kategorie;
                    const date = invoice.rechnung_enddatum.toJSON();
                    const invoiceBefore = await invoiceModel.getInvoiceFromCompanyOfCategoryBeforeDate(companyId, categoryId, date);
                    
                    if(invoiceBefore) {
                        const co2EmissionBefore = invoiceBefore.rechnung_emissionsfaktor * invoiceBefore.rechnung_verbrauchswert;
                        const co2Emission = invoice.rechnung_emissionsfaktor * invoice.rechnung_verbrauchswert;
                        const co2Saving = co2EmissionBefore - co2Emission;

                        if(result.has(date)) {
                            let co2SavingSum = result.get(date) + co2Saving;
                            result.set(date, co2SavingSum);
                        } else {
                            result.set(date, co2Saving);
                        }
                    }
                });

                resolve(result);
            } catch (e) {
                reject(e);
            }
        })
    },
    getPilarDataOfAllCompanys: () => {
        return new Promise(async (resolve, reject) => {
            try {
                var pilarDataCompanys = {};
                const companies = await companyModel.getListOfAllCompanys();
                companies.forEach(async company => {
                    const companyDataPilar = await this.getPilardataByCompanyId(company.unternehmen_ID);
                    pilarDataCompanys.company.unternehmen_ID = companyDataPilar;
                })
                //console.log(pilarDataCompanys); /////////
                resolve(pilarDataCompanys)
            } catch(e) {
                reject(e)
            }
        })
    },
    getPilardataByCompanyId: (companyId) => {
        return new Promise(async (resolve, reject) => {
            try {
                
                var pilarDataById = {};
                const categories = await categoryModel.getCategories(); 
                //console.log(categories);               
                //ATENTION 
                companyId = 1;
                //ATENTION END
                categories.forEach(async category => {
                    const invoiceOldest = await invoiceModel.getOldestInvoiceFromCompanyOfCategoryForPilar(companyId, category.id);
                    const invoiceNewest = await invoiceModel.getNewestInvoiceFromCompanyOfCategoryForPilar(companyId, category.id);
                    if (invoiceNewest === undefined || invoiceOldest === undefined){
                        // in case undefined information is needed in future
                    } else{
                        const co2EmissionOldest = await invoiceOldest.rechnung_verbrauchswert * invoiceOldest.rechnung_emissionsfaktor;
                        const co2EmissionNewest = await invoiceNewest.rechnung_verbrauchswert * invoiceNewest.rechnung_emissionsfaktor;
                        if (co2EmissionOldest-co2EmissionNewest>0){
                            co2SavingPercent = ((co2EmissionOldest-co2EmissionOldest)/co2EmissionOldest)*100;
                            //console.log(co2SavingPercent);
                        } 
                        else {
                            co2SavingPercent = 0; //überlegen ob man hier einfach 0 draus macht
                        }
                    }               

                    pilarDataById.category.kategorie_ID = co2SavingPercent;
                    
                })
                //console.log(pilarDataById);
                resolve(pilarDataById);
            } catch (e) {
                reject(e);
            }
        })
    },
    insertInvoice: (invoice) => {
        return new Promise(async (resolve, reject) => {
            try {
                const insertInvoice = await invoiceModel.insertInvoice(invoice)
                resolve(insertInvoice)
            } catch(e) {
                reject(e)
            }
        })
    },
    deleteInvoice: (id) => {
        return new Promise(async (resolve, reject) => {
            try {
                const deleteInvoice = await invoiceModel.deleteinvoice(id)
                resolve(deleteInvoice)
            } catch(e) {
                reject(e)
            }
        })
    }
};
