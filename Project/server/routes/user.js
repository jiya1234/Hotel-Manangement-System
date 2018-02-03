const express = require('express');
const router = express.Router();
const passport = require('passport');
//var LocalStrategy = require('passport-local').Strategy;
const jwt = require('jsonwebtoken');
var expressValidator = require('express-validator');
const Admin = require('../models/admin');
const User = require('../models/user');
const config = require('../config/database');


// ADMIN DATA PART

router.get('/admins',(req, res, next)=>{
    Admin.find(function(err,admins){
        res.json(admins);
    })
});

router.post('/admin',(req, res, next)=>{
    let newAdmin= new Admin({
        name: req.body.name,
        PEC_ID: req.body.PEC_ID,
        email: req.body.email,
        cnic: req.body.cnic
    });

    newAdmin.save((err,admin)=>{
        if(err)
        {
            res.json({msg: 'Failed to add contact'});
        }
        else{
            res.json({msg: 'add contact'});
        }
        });
    
});


//Register 
router.post('/register' , (req,res,next) => {
   let newUser = new User({
      name: req.body.name,
      email: req.body.email,
      username: req.body.username,
      password: req.body.password,
      cpassword : req.body.cpassword,
      cnic  : req.body.cnic,
      phone : req.body.phone,
      pecid : req.body.pecid
   });
   

   req.checkBody(req.body.password).equals(req.body.password);
   
     
   User.addUser(newUser, (err,user) => {
     if(err){
         res.json({success:false,msg:'Failed to register user'});
     } else {
        //req.checkBody('password', 'Password is required').notEmpty();
        req.checkBody(req.body.cpassword).equals(req.body.password);
         res.json({success:true, msg:'User registered'});
     }
   });
});



//Registration Comparing method.
 
router.post('/getSign', (req,res,next) => {
  Admin.findOne({cnic: req.body.cnic, PEC_ID:req.body.pecid}, function(err,result){
        if(err) { res.json(err);}
      else {
          res.json(result);
      }   
  })
});


//Authenticate
router.post('/authenticate' , (req,res,next) => {
   const email = req.body.email;
   const password = req.body.password;

   User.getUserByUsername(email, (err,user) => {
      if(err) throw err;
      if(!user){
          return res.json({success:false , msg:'Email not Found!!'});
      }
      User.comparePassword(password,user.password , (err, isMatch) =>{
        if(err) throw err;
        if(isMatch){
            const token = jwt.sign(user.toJSON(),config.secret, {
                  expiresIn: 604800 //1 week
            });
     
        res.json({
             success: true,
             token: 'Bearer ' + token,
             user: {
                 id: user._id,
                 name: user.name,
                // password : user.password,
                 email : user.email  
             }
        });
       } else {
          return res.json({success : false, msg:'Wrong Password'}); 
       }
      });
   });
 });

 
 
router.get("/profile", passport.authenticate('jwt', { session: false }), function(req, res){
    //res.json({message: "Success! You can not see this without a token"});
    res.json({user: req.user});
  });



 
 module.exports = router;
