const companyModel = require("../db/models/company.db");
const generateRandomString = require('../util/generateRandomString');
const bcrypt = require('bcryptjs');
const sendMail = require("../util/mailer");

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
    getCompanyByEMail: (email) => {
        return new Promise(async (resolve, reject) => {
            try {
                const company = await companyModel.getCompanyByEMail(email)
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
    },
    resetPassword: (email) => {
        return new Promise(async (resolve, reject) => {
            try {
                const newPassword = generateRandomString(8);
                const company = await companyModel.getCompanyByEMail(email);
                const hashedPassword = bcrypt.hashSync(newPassword);
                await companyModel.updatePassword(company.id, hashedPassword);
                sendMail(email, newPassword);
                resolve();
            } catch (e) {
                reject(e);
            }
        })
    }
};