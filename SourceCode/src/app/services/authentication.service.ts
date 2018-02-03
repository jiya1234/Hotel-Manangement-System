import { Injectable } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import {Http , Headers} from '@angular/http';
import 'rxjs/add/operator/map';
//import {tokenNotExpired} from 'angular2-jwt';
import { tokenNotExpired } from 'angular2-jwt';
import { Token } from '@angular/compiler';
import {Admin} from '.../../../server/models/admin';
//import {User} from '../../../server/models/user';

@Injectable()
export class AuthenticationService {
     
 
 authToken : any;
 user : any;
 private isUserLoggedIn = false;
 private isAuthentication = false;

  constructor(private http: Http) { 
    //  this.user.isUserLoggedIn = false;
   } 


    // Verify 
   setUserLogin() {
      this.isUserLoggedIn = true;
   } 
     // verify
   getUserLogin() {
     return this.isUserLoggedIn;
   }

   setAuthentication(){
     this.isAuthentication = true;

   }

   getAuthentication(){
     return this.isAuthentication;

   }

   //for admin data work
   getAdmins(){
      return this.http.get('http://localhost:3000/api/admins')
      .map(res => res.json());
     }

     addAdmin(admin) {
        var headers = new Headers();
         headers.append('Content-Type','application/json');
         return this.http.post('http://localhost:3000/api/Admin' ,admin, {headers : headers})
         .map(res => res.json());
       }

       //admins work finish



   registerUser(user) {
     const headers = new Headers();
     headers.append('Content-Type','application/json');
     return this.http.post('http://localhost:3000/api/register', user, {headers : headers})
     .map(res => res.json());
   }

    authenticateUser(user) {
      const headers = new Headers();
      headers.append('Content-Type','application/json');
      return this.http.post('http://localhost:3000/api/authenticate', user, {headers : headers})
      .map(res => res.json());
    
    }
    
    getProfile() {
      const headers = new Headers();
      this.loadToken();
      headers.append('Authorization',this.authToken);
      headers.append('Content-Type','application/json');
      return this.http.get('http://localhost:3000/api/profile', {headers : headers})
      .map(res => res.json());
    }
    
    //getSign api from validation .. 
      
    getSign(user) {
      const headers = new Headers();
     // headers.append('Authorization',this.authToken);
      headers.append('Content-Type','application/json');
      return this.http.post('http://localhost:3000/api/getSign' , user, {headers : headers})
      .map(res => res.json());
    }
    

    
   /* Storing Token in the local Storage of browser */
    storeUserData(token,user){
      localStorage.setItem('id_token',token);
      localStorage.setItem('user', JSON.stringify(user));
      this.authToken = token;
      this.user = user;   
     }
     
     /* Load Token for the Profile Request */
     loadToken() {
        const token = localStorage.getItem('id_token');
        this.authToken = token;
     }
    
     /* This function of Hide Navbar Apps */
     loggedIn() {
      this.loadToken();
      return tokenNotExpired()
    }
     


   /* Logout Functionality Perform */
     logout(){
       this.authToken = null;
       this.user = null;
       localStorage.clear();
     }
     
    
    
    
    //  getContact() {
    //   return this.http.get('http://localhost:3000/api/contact')
    //   .map(res => res.json());
    //  }
     
      
    //  addContact(newContact) {
    //   const headers = new Headers();
    //   // headers.append('Authorization',this.authToken);
    //    headers.append('Content-Type','application/json');
    //    return this.http.post('http://localhost:3000/api/contact' ,newContact, {headers : headers})
    //    .map(res => res.json());
    //  }

    //  deleteContact(id) {
    //   return this.http.delete('http://localhost:3000/api/contact/'+id)
    //   .map(res => res.json());
    //  }
}
