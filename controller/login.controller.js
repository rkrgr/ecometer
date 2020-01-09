const passport = require('passport')

module.exports = {
    index: async (req, res) => {
        res.render('login')
    },
    authenticate: passport.authenticate('local', {
            successRedirect: '/',
            failureRedirect: '/login',
            failureFlash: true
    })
}
