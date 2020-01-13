const companyService = require("../services/company.service");

module.exports = {
    profile: async(req, res) => {
        const userid = req.user.id;
        const company = await companyService.getCompanyById(userid);
        res.render('profile', {company}
        )
    },

    updateProfile: async(req, res) => {
        const company = {
            id: req.user.id,
            name: req.body.companyName,
            mail: req.body.mail,
            passwordOld: req.body.pw,
            passwordNew: req.body.pwn
        }
        await companyService.updateCompany(company)
        res.redirect("/")
    }
}