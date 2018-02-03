import { Component, OnInit } from '@angular/core';
//import {AuthenticationService} from '../../app/services/authentication.service';
//import {user} from '../../../server/models/user';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  //providers: [AuthenticationService]
})
export class AdminComponent implements OnInit {

//  contacts: any; 
//  name : String;
//  email : String;
//  password : String;
//  username : String;
//  pecid : String;
//  cnic : Number;
//  phone : Number

constructor() { }
   
// addContact() {
//   const NewContact = {
//     name : this.name,
//     email : this.email,
//     password : this.password,
//     username : this.password,
//     pecid : this.pecid,
//     cnic : this.cnic,
//     phone : this.phone
//   }
//   this.authSerivce.addContact(NewContact)
//   .subscribe(contact => {
//      this.contacts.push(contact);
//      this.authSerivce.getContact()
//      .subscribe(contacts => 
//        this.contacts = contacts);
//      });
// } 

// deleteContact(id:any) {
//   const contacts  = this.contacts;
//   this.authSerivce.deleteContact(id)
//   .subscribe(data => {
//     if(data.n==1){
//       for(var i =0 ; i< contacts.length; i++){
//          if(contacts[i]._id == id){
//            contacts.splice(i,1);
//          }
//       }
//     }
//   })
// }


  ngOnInit() {
    // this.authSerivce.getContact()
    // .subscribe(contacts  => 
    //       this.contacts = contacts
    // );
  }

}
