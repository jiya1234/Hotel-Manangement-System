import { Injectable } from '@angular/core';
import { CanActivate , ActivatedRouteSnapshot , RouterStateSnapshot } from '@angular/router';
import { Router } from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {AuthenticationService} from '../services/authentication.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private authService : AuthenticationService
     ) {}

    canActivate(
        next: ActivatedRouteSnapshot,
        state : RouterStateSnapshot) : Observable<boolean> | Promise<boolean> | boolean {
            return this.authService.getUserLogin();
            
        }

     
    // canActivate() {
    //     if (localStorage.getItem('isLoggedin')) {
    //         return true;
    //     }

    //     this.router.navigate(['/login']);
    //     return false;
    // }
}
