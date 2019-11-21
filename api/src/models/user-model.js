const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//To hash the password 
const bcrypt = require('bcryptjs');

const userSchema = new Schema({
    phoneNumber: {type:String, required: true},
    password: {type:String, required: true}
});

const User=mongoose.model('User',userSchema);
module.exports=User;

//Hash the password
module.exports.saveUser = function (newUser, callback) {
    console.log(newUser);
    bcrypt.genSalt(10, (err,salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            console.log("called");
            console.log(hash);
            // newUser.password = hash;
            // newUser.saltSeceret = salt;
            // next();
        });
    });
}

