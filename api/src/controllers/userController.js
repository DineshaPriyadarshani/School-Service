const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports.register = (req, res, next) => {
    const user = new User();

    user.phoneNumber = req.body.phoneNumber;
    user.password = req.body.password;

    User.saveUser(user, function(err, newUser) {
        if(err) {
            res.json({state:false, msg:"Data inseryted"});
        }
        if(newUser) {
            res.json({state:true, msg:"Successfully inserted"});
        }
    })

}