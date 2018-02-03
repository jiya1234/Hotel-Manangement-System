import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import {Admin} from '.../../../server/models/admin';

@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.css'],
  providers: [AuthenticationService]
})
export class AdminsComponent implements OnInit {
  admins: Admin[];
  admin: Admin;
  name:string;
  PEC_ID:string;
  email:string;
  cnic:string;

  constructor(private authService: AuthenticationService) { }

  addAdmin()
  {
    const newAdmin={
      name: this.name,
      PEC_ID: this.PEC_ID,
      email: this.email,
      cnic: this.cnic
    }

    this.authService.addAdmin(newAdmin)
      .subscribe(admin =>{
        this.authService.getAdmins()
        .subscribe(admins =>
          this.admins  = admins);
      });
  }

  ngOnInit() {
    this.authService.getAdmins()
    .subscribe(admins =>
    this.admins = admins);
  }

}
