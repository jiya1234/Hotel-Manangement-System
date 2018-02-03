import { Injectable } from '@angular/core';

import {Http, Headers , RequestOptions} from '@angular/http';
import  'rxjs/add/operator/map';


@Injectable()
export class LoginService {

  constructor(private _http: Http) { }

  api_url = 'http://localhost:3000';
  todoUrl = `${this.api_url}/api/sign-in`;
    

  userLogin(login: LoginService){
      console.log('in  user login ', login);
    //returns the observable of http post request 
    return this._http.post(`${this.todoUrl}`, login);
  }


}
