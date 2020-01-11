const companyService = require('../services/company.service');

module.exports = {
    index: (req, res) => {
        res.render("resetPassword");
    },
    resetPassword: async (req, res) => {
        const email = req.body.email;
        companyService.resetPassword(email);
        res.redirect('/login');
    }
}
