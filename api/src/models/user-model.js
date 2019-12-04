const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const jwt = require('jsonwebtoken');

//To hash the password 
const bcrypt = require('bcryptjs');

const userSchema = new Schema({
    studentId: {type:String, required:true},
    phoneNumber: {type:String, required: true},
    password: {type:String, required: true},
    isCompleted: {type:Boolean, required:true}
});

const User=mongoose.model('User',userSchema);
module.exports=User;

//Hash the password
module.exports.saveUser = function (newUser, callback) {
    bcrypt.genSalt(10, function (err,salt) {
        bcrypt.hash(newUser.password, salt, function (err, hash)  {
            newUser.password = hash;
            
            if (err) throw err;
            newUser.save(callback);
        });
    });
}

//Find the login details from db
module.exports.findByPhoneNumber = (phoneNumber, callback) => {
    const query = {phoneNumber: phoneNumber};
    User.findOne(query,callback);
};

//Compare the password
module.exports.passwordCheck = (plainPassword, hash, callback) => {
    bcrypt.compare(plainPassword, hash, function(err,res){
        if (err) throw err;

        if(res) {
            callback(null,res);
        }
    })
}

//Check whether are there any id for the given token
module.exports.findUserById = function(id, callback) {
    User.findOne(id,callback); 
}