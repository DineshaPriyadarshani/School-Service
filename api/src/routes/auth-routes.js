const router = require('express').Router();

const authCheck = (req,res,next)=> {
    if(!req.user){
        res.send(req.user);
    }else{
        next();
    }
}

router.get('/login',auCheck,(req,res)=> {
    res.send(req.user);
    console.log(req.user);
});

router.get('/logout',(req,res)=> {
    req.logOut();
    res.send({key:'logedOut'})
});