import { Injectable } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../services/validate.service';
//import {profile} from '../../../server/routes/user';
import {FlashMessagesService}  from 'angular2-flash-messages';
import {Router} from '@angular/router';
import {AuthenticationService} from '../services/authentication.service';
import { DataService } from '../data.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  name: String;
  username: String;
  email : String;
  password: String;
  cpassword : String;
  phone : String; 
  pecid: String; 
  cnic : String;
 // cpassword : String; 
  form;

  constructor(
    private ValidateService: ValidateService, 
    private flashMessage : FlashMessagesService,
    private authService : AuthenticationService,
    private router: Router,
    private dataservice: DataService,
   // private fb : FormBuilder,
   // private form : FormGroup
  ) {
    //  this.form = fb.group({
    //     password : ['' , Validators.required],
    //     cpassword : ['' , Validators.required]

    //  }, {Validators : matchFields('password,','cpassword')})
   }

  ngOnInit() {
  }

onRegisterSubmit(){
     
    const user = {
      name: this.name,
      email:this.email,
      username:this.username,
      password:this.password,
      cpassword: this.cpassword,
      cnic: this.cnic,
      phone : this.phone,
      pecid : this.pecid
    }
    console.log(this.form.valid.errors);

    this.authService.getSign(user).subscribe(data => {
       if(data) {
         this.authService.setUserLogin();
       //  this.router.navigate(['login']);
       }
      else {
        alert('Try Again');
      }
    });
    //Required Fields
    if(!this.ValidateService.validateRegister(user)){
      this.flashMessage.show('Please filled in all fields', {cssClass: 'alert-danger',timeout:3000});
      //alert("filled"); 
      return false;
    }
    
    //Validate Email Service
    if(!this.ValidateService.validateEmail(user.email)){
      this.flashMessage.show('Please enter a valid email', {cssClass: 'alert-danger',timeout:3000});
      return false;
   }
   // Cnic Validation Service
   if(!this.ValidateService.cnicValidate(user.cnic)){
    this.flashMessage.show('Please enter a valid Cnic', {cssClass: 'alert-danger',timeout:3000});
    return false;
 }
  // Phone Validation Service
   if(!this.ValidateService.PhoneValidate(user.phone)){
     this.flashMessage.show('Please enter a valid Phone Number', {cssClass: 'alert-danger',timeout:3000});
     return false;
  }

// Phone Validation Service
if(!this.ValidateService.pecValidate(user.pecid)){
  this.flashMessage.show('Please enter a valid PEC ID ', {cssClass: 'alert-danger',timeout:3000});
  return false;
}


   //Register User
   
  this.authService.registerUser(user).subscribe(data => {
     if(data.success){
       this.password.valueOf == this.cpassword.valueOf;
       this.flashMessage.show('You are now registered', {cssClass: 'alert-success', timeout: 3000});
       this.router.navigate(['login']);
      } else {
        this.password.valueOf != this.password.valueOf;
      this.flashMessage.show('You are not  registered', {cssClass: 'alert-danger', timeout: 3000});
     this.router.navigate(['signup']);
    }
  }); 
      
  }
}
// function matchFields (field1,field2) {
//   return form => {
//     if(form.controls[field1].value !== form.controls[field2].value )
//     return {mismatchFields : true}
//   } 
// }
