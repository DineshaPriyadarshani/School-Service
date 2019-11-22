//To check is it a valid token when login

const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;

const keys = require('./keys');
const User = require('../models/user-model');

const opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretKey.key;

module.exports = function(passport) {
    passport.use(new JwtStrategy(opts, function(jwt_payload, done) {

        User.finduserById({_id: jwt_payload._doc._id}, function(err, user) {
            if (err) {
                return done(err, false);
            }
            if (user) {
                return done(null, user);
            } else {
                return done(null, false);
                // or you could create a new account
            }
        });
    }));
}

