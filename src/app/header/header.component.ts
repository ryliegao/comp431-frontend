import { Component, OnInit } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from 'src/app/_models/user';
import { GlobalService, StorageService } from 'src/app/_services';
import { AuthGuard } from 'src/app/_guards';

interface Response {
  body: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [
    Location,
    { provide: LocationStrategy, useClass: PathLocationStrategy }
  ]
})
export class HeaderComponent implements OnInit {
  name: string;
  status: string;
  avatar: string;

  constructor(
    private location: Location,
    private storageService: StorageService,
    private globalService: GlobalService,
    private httpService: HttpClient,
    private authGuard: AuthGuard,
    private router: Router
  ) {
    this.storageService.watchStorage().subscribe((data: string) => {
      this.updateName();
      this.updateStatus();
      this.updateAvatar();
    });
    this.router.events.subscribe(() => {
      this.ngOnInit();
    });
  }

  ngOnInit() {
    this.updateName();
    this.updateStatus();
    this.updateAvatar();
  }

  updateName() {
    try {
      if (localStorage.getItem('currentUser')) {
        const user: User = JSON.parse(localStorage.getItem('currentUser'));
        this.name = user.firstname + ' ' + user.lastname;
      } else {
        this.name = 'Default User';
      }
    } catch (e) {
      console.log('This browser does not support local storage. [Header]');
    }
  }

  updateStatus() {
    try {
      if (localStorage.getItem('currentUser')) {
        const user: User = JSON.parse(localStorage.getItem('currentUser'));
        this.status = user.status;
      } else {
        this.status = 'Hey! I\'m new to here :)';
      }
    } catch (e) {
      console.log('This browser does not support local storage. [Header]');
    }
  }

  updateAvatar() {
    try {
      if (localStorage.getItem('currentUser')) {
        const user: User = JSON.parse(localStorage.getItem('currentUser'));
        this.avatar = user.avatar;
      } else {
        this.avatar = 'assets/images/profile-image.jpeg';
      }
    } catch (e) {
      console.log('This browser does not support local storage. [Header]');
    }
  }

  hasMain(): boolean {
    return window.location.href.indexOf('/profile') > -1;
  }

  hasProfile(): boolean {
    return window.location.href.indexOf('/main') > -1;
  }

  hasLogIn(): boolean {
    return window.location.href.indexOf('/auth/register') > -1;
  }

  hasLogOut(): boolean {
    return window.location.href.indexOf('/main') > -1 ||
      window.location.href.indexOf('/profile') > -1;
  }

  hasRegister(): boolean {
    return window.location.href.indexOf('/auth/login') > -1;
  }

  logOut() {
    if (localStorage.getItem('FBLoggedIn') === 'true') {
      this.authGuard.submitLogout();
    }
    try {
      localStorage.removeItem('currentUser');
      sessionStorage.removeItem('session_id');
    } catch (e) {
      console.log('This browser does not support local storage. [Header]');
    }
    this.storageService.setItem('User removed!');

    const request = this.httpService.put<Response>(
      this.globalService.serverURL + '/logout',
      {},
      this.globalService.options);

    return new Promise(() => true);
  }
}
