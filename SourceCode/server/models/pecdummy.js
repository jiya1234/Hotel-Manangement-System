 'use strict'

 const mongoose = require('mongoose');
 const bcrypt = require('bcryptjs');

 const config = require('../config/database');  
 //const pecDummy = require ('..');

 const UserSchema = mongoose.Schema({
    
      pecid : {
          type : String
      },
      cnic : {
          type : String,
          required: true
      }
     
  });
  
  const Pecdummy = module.exports = mongoose.model('Pecdummy', UserSchema);


  module.exports.getUserByPecid = function(pecid,callback){
    User.findById(pecid,callback);
}

module.exports.getUserBycnic = function(cnic,callback){
    const query = {cnic: cnic}
    User.findOne(query,callback);
}