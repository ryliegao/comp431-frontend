import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {User} from '../_models/user';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (!localStorage) {
      // return true if localStorage is not available
      return true;
    } else if (!localStorage.getItem('currentUser')) {
      // return false if localStorage is available but user has not registered
      this.router.navigate(['/auth/register']); // redirect to register page
      return false;
    } else {
      const user: User = JSON.parse(localStorage.getItem('currentUser'));
      if (!user.loggedin) {
        // if user has registered but not logged in, redirect to login page
        this.router.navigate(['/auth/login']);
      }
      return user.loggedin;
    }
  }
}
