import { Component, OnInit } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from 'src/app/_models/user';
import { GlobalService, StorageService } from 'src/app/_services';

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
    private httpService: HttpClient
  ) {
    this.storageService.watchStorage().subscribe((data: string) => {
      console.log('Saw change(s) on data: ' + data);
      this.updateName();
      this.updateStatus();
      this.updateAvatar();
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
        this.name = user.displayname === null || user.displayname === '' ?
          user.username : user.displayname;
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
    return this.location.path().indexOf('/profile') > -1;
  }

  hasProfile(): boolean {
    return this.location.path().indexOf('/main') > -1;
  }

  hasLogIn(): boolean {
    return this.location.path().indexOf('/auth/register') > -1;
  }

  hasLogOut(): boolean {
    return this.location.path().indexOf('/main') > -1 ||
      this.location.path().indexOf('/profile') > -1;
  }

  hasRegister(): boolean {
    return this.location.path().indexOf('/auth/login') > -1;
  }

  logOut() {
    try {
      localStorage.removeItem('currentUser');
    } catch (e) {
      console.log('This browser does not support local storage. [Header]');
    }
    this.storageService.setItem('User removed!');

    const request = this.httpService.put<Response>(
      this.globalService.serverURL + '/logout',
      {},
      this.globalService.options);

    return request.toPromise().then(res => {
      return res.body && res.body === 'success';
    }).catch((err: HttpErrorResponse) => {
      console.log (err.message);
    });
  }
}
