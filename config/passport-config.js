const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcryptjs')

function initialize(passport, getUserByName, getUserById) {
    const authenticateUser = async (username, password, done) => {
        let user;
        try {
            user = await getUserByName(username)
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

    passport.use(new LocalStrategy({ usernameField: 'name' }, authenticateUser))
    passport.serializeUser((user, done) => done(null, user.id))
    passport.deserializeUser((id, done) => {
        return done(null, getUserById(id))
    })
}

module.exports = initialize
