import { Component, OnInit } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { User } from 'src/app/_models/user';
import { StorageService } from 'src/app/_services';

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
    private storageService: StorageService) {
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
    // const user: User = JSON.parse(localStorage.getItem('currentUser'));
    // const obj = {
    //   username: user.username,
    //   displayname: user.displayname,
    //   email: user.email,
    //   phone: user.phone,
    //   birthday: user.birthday,
    //   zipcode: user.zipcode,
    //   password: user.password,
    //   loggedin: false,
    //   status: user.status,
    //   avatar: user.avatar
    // };
    // AuthService.makeNewUser(obj);
  }
}
