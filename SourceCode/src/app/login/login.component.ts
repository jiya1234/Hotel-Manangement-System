import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
import {AuthenticationService} from '../services/authentication.service';
import {FlashMessagesService}  from 'angular2-flash-messages';


import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { FlashMessagesModule } from 'angular2-flash-messages/module/module';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  
    
  email : String;
  password : String;
  

  
  constructor(
    private authService: AuthenticationService,
    private router:Router,
    private flashMessage : FlashMessagesService
    ) { }
  
  ngOnInit() {}
    
//   isValidForm() {
//     return this.isValid;
// }
    onLoginSubmit() {
      const user = {
        email: this.email,
        password: this.password
      }
       
       

      this.authService.authenticateUser(user).subscribe(data => {
         if(data.success){
          this.authService.storeUserData(data.token,data.user);
          this.flashMessage.show('You are now logged In', 
            {cssClass: 'alert-success',
            timeout:3000}); 
            this.authService.setAuthentication();
            this.router.navigate(["dashboard"]);
        } else {
          this.flashMessage.show(data.msg, {cssClass: 'alert-danger',timeout:3000});
          this.router.navigate(['login']);
        }
      });
      
    }
}
