import { Injectable } from '@angular/core';

@Injectable()
export class ValidateService {

  constructor() { }

  //Empty Validation Required 
   
  validateRegister(user){
    if(user){
      if(user.name == undefined || user.email == undefined || user.username == undefined || user.password == undefined || user.cnic == undefined){
           return false;
      } else {
        return true;
      }
    }
  }

  //Email Regular Expression.
    validateEmail(email){
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email.toLowerCase());
    }
    
    //Cnic Validation

    cnicValidate(cnic) {
      // var cnic_no = '12345-1234567-9';
       var cnic_no_regex = /^[0-9+]{5}-[0-9+]{7}-[0-9]{1}$/;
       return cnic_no_regex.test(cnic);
     }

    pecValidate(pecid) {
      const pecid_no_regex = /^pec-[0-9]{3}$/; 
      return pecid_no_regex.test(pecid.toLowerCase());
    }

     PhoneValidate(phone) {
      // var cnic_no = '12345-1234567-9';
     //  var phone_no_regex = /^[\+]?[(]?[0-9]{4,5}[)]?[-\s\.]?[0-9]{7}$/;
         
     const phone_no_regex = /^03[0-9]{2}-[0-9]{7}$/;
     
     return phone_no_regex.test(phone);
     }  
     
}
