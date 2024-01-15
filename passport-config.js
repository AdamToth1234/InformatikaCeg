const LocalStrategy = require("passport-local").Strategy
const bcrypt = require("bcrypt")
const User = require("./config")


async function initialize(passport) {
    const authenticateUser = async (email, password, done) => {
        try {
            const user = await User.findOne({ email: email })

            if (!user) {
                console.log("Nincs ilyen felhasználó ezzel az email címmel!")
                return done(null, false, { message: "Nincs ilyen felhasználó ezzel az email címmel!" })
            }

            if (await bcrypt.compare(password, user.password)) {
                return done(null, user)
            } else {
                console.log("Helytelen jelszó!");
                return done(null, false, { message: "Helytelen jelszó!" })
            }
        } catch (err) {
            return done(err);
        }
    };

    passport.use(new LocalStrategy({ usernameField: "email" }, authenticateUser));
    passport.serializeUser((user, done) => done(null, user.id))
    passport.deserializeUser((id, done) => {
        User.findById(id)
            .then(user => {
                done(null, user);
            })
            .catch(err => {
                done(err, null);
            })
    })
}

module.exports = initialize