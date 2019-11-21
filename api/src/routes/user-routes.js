const express = require('express');
const router = express.Router();
const UserModel = require('../models/user-model');
//const contrlUser = require('../controllers/userController');

router.route('/register').post( function(req,res){
    console.log("register");
    console.log(req.body);
    
});

module.exports = router;