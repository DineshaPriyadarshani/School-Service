const express = require('express');
const router = express.Router();
const User = require('../models/user-model');

router.post('/',function (req, res) {
    console.log('route call');
    const user = new User({
        name : req.body.name,
        phoneNumber : req.body.phoneNumber,
        address : req.body.address,
        occupation : req.body.occupation,
        contactNumber : req.body.contactNumber,
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