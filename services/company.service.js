const companyModel = require("../db/models/company.db");

module.exports = {
    getCompanyById: (id) => {
        return new Promise(async (resolve, reject) => {
            try {
                const company = await companyModel.getCompanyById(id)
                resolve(company)
            } catch(e) {
                reject(e)
            }
        })
    },
    getCompanyByName: (name) => {
        return new Promise(async (resolve, reject) => {
            try {
                const company = await companyModel.getCompanyByName(name)
                resolve(company)
            } catch(e) {
                reject(e)
            }
        })
    },
    addCompany: (name, mail, password) => {
        return new Promise(async (resolve, reject) => {
            try {
                const insertId = await companyModel.addCompany(name, mail, password)
                resolve(insertId)
            } catch(e) {
                reject(e)
            }
        })
    }
};