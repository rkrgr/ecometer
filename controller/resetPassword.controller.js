const companyService = require('../services/company.service');

module.exports = {
    index: (req, res) => {
        res.render("resetPassword");
    },
    resetPassword: async (req, res) => {
        const email = req.body.email;
        const company = await companyService.getCompanyByEMail(email);
        companyService.resetPassword(company.id);
        res.redirect('/login');
    }
}
