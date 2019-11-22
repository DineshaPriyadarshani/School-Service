const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/user-model');
const keys = require('../config/keys');
const passport = require('passport');

const authCheck = (req,res,next)=> {
    if(!req.user){
        res.send(req.user);
    }else{
        next();
    }
}

router.post('/login', (req,res)=> {
    const phoneNumber = req.body.phoneNumber;
    const password = req.body.password;

    User.findByPhoneNumber(phoneNumber, function(err, user) {
        if(err) throw err;

        if(!user){
            res.json({state:false, msg:"No user found"});
        }

        User.passwordCheck(password, user.password, function(err, match) {
            if(err) throw err;

            if(match) {
                //create a token
                const token = jwt.sign(user.toJSON(), keys.secretKey.key, {expiresIn:86400});
                res.json({
                    state:true,
                    token:"JWT" + token,
                    user: {
                        id:user._id,
                        phoneNumber:user._phoneNumber
                        }
                });
            } else {
                return res.json({success: false, msg: 'Wrong password'});
              }
        });
    });
});

router.post('/profile', passport.authenticate('jwt', { session: false }),function(req, res) {
    res.send({user:req.user});
}
);

router.get('/logout',(req,res)=> {
    req.logOut();
    res.send({key:'logedOut'})
});

module.exports = router;