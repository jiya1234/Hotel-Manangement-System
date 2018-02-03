import { Injectable } from '@angular/core';
//import {profile} from '../../server/routes/user';
import {Http, Headers , RequestOptions} from '@angular/http';
import  'rxjs/add/operator/map';


@Injectable()
export class DataService {
  private isUserLoggedin;

  constructor(private _http: Http) { 
    this.isUserLoggedin=false;
  }

  setUserLoggedin(){
    this.isUserLoggedin=true;
  }
  getUserLoggedin(){
    this.isUserLoggedin=true;
  }

  dataUser(user) {
    const headers = new Headers();
    headers.append('Content-Type','application/json');
    return this._http.post('http://localhost:3000/api/authenticate', user, {headers : headers})
    .map(res => res.json());
  
  }
  api_url = 'http://localhost:3000';
  todoUrl = `${this.api_url}/api/sign-in`;
    

  

}
