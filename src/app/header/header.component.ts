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

  constructor(
    private location: Location,
    private storageService: StorageService) {
    this.storageService.watchStorage().subscribe((data: string) => {
      console.log(data);
      this.updateName();
    });
  }

  ngOnInit() {
    this.updateName();
  }

  updateName() {
    try {
      if (localStorage.getItem('currentUser')) {
        const user: User = JSON.parse(localStorage.getItem('currentUser'));
        this.name = user.displayname === null || user.displayname === '' ?
          user.username : user.displayname;
      } else {
        this.name = 'Default Name';
      }
    } catch (e) {
      console.log('This browser does not support local storage.');
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
      if (localStorage.getItem('currentUser')) {
        const user: User = JSON.parse(localStorage.getItem('currentUser'));
        const newUser = new User(
          user.username,
          user.displayname,
          user.email,
          user.phone,
          user.birthday,
          user.zipcode,
          user.password,
          false
        );
        localStorage.setItem('currentUser', JSON.stringify(newUser));
      }
    } catch (e) {
      console.log('This browser does not support local storage.');
    }
  }
}
