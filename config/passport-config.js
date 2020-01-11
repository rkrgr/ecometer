const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcryptjs')

function initialize(passport, getUserByEMail, getUserById) {
    const authenticateUser = async (email, password, done) => {
        let user;
        try {
            user = await getUserByEMail(email)
        } catch (e) {
            return done(null, false, e)
        }

        if(user === null) {
            return done(null, false, { message: 'Kein Nutzer mit diesem Namen gefunden.' })
        }

        try {
            if(await bcrypt.compare(password, user.password)) {
                return done(null, user)
            } else {
                return done(null, false, { message: 'Password ist falsch.' })
            }
        } catch (e) {
            return done(e)
        }
    }

    passport.use(new LocalStrategy({ usernameField: 'email' }, authenticateUser))
    passport.serializeUser((user, done) => done(null, user.id))
    passport.deserializeUser(async (id, done) => {
        return done(null, await getUserById(id))
    })
}

module.exports = initialize
