import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { User } from 'src/app/_models/user';
import { StorageService } from 'src/app/_services';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private service: StorageService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    try {
      if (!localStorage.getItem('currentUser')) {
        // return false if localStorage is available but user has not registered
        this.router.navigate(['/auth/register']); // redirect to register page
        return false;
      } else {
        const user: User = JSON.parse(localStorage.getItem('currentUser'));
        this.service.setItem('currentUser');
        if (!user.loggedin) {
          // if user has registered but not logged in, redirect to login page
          this.router.navigate(['/auth/login']);
        }
        return user.loggedin;
      }
    } catch (e) {
      console.log('This browser does not support local storage.');
      return true;
    }
  }
}
