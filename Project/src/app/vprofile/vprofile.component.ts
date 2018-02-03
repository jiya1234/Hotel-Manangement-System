import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import {AuthenticationService} from '../services/authentication.service';
import { DataService } from '../data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-vprofile',
  templateUrl: './vprofile.component.html',
  styleUrls: ['./vprofile.component.css']
})
export class VprofileComponent implements OnInit {

    pecid: String; 
    cnic : String;
  



  constructor(
    private authService : AuthenticationService,
    private router: Router,
    private dataservice: DataService
  )
  {}

  ngOnInit() {
  }

  onSubmit(){
    
      const user = {
    
        cnic: this.cnic,
        pecid : this.pecid
      }
   

  this.authService.getSign(user).subscribe(data => {
    if(data) {
      this.authService.setUserLogin();
      this.router.navigate(['signup']);
    }
   else {
     alert('Try Again');
     this.router.navigate(['vprofile']);
   }
 });
 }
}
