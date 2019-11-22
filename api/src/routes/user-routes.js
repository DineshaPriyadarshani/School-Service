const express = require('express');
const router = express.Router();
const User = require('../models/user-model');

router.post('/',function (req, res) {
    const user = new User({
        phoneNumber : req.body.phoneNumber,
        password : req.body.password
    });

    User.saveUser(user, function(err, newUser) {
        if(err) {
            res.json({state:false, msg:"Data not inserted"});
        }
        if(newUser) {
            res.json({state:true, msg:"Successfully inserted"});
        }
    })
    
});

module.exports = router;