import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models/user';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  displayname = '';
  email = '';
  phone = '';
  zipcode = '';
  password = '';
  submitted = false;
  pwError = false;
  pwSuccess = false;
  dnSuccess = false;
  eaError = false;
  eaSuccess = false;
  phError = false;
  phSuccess = false;
  zcError = false;
  zcSuccess = false;
  dn: string;
  ea: string;
  ph: string;
  zc: string;
  pw1: string;
  pw2: string;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    try {
      if (localStorage.getItem('currentUser')) {
        const user: User = JSON.parse(localStorage.getItem('currentUser'));
        this.displayname = user.displayname;
        this.email = user.email;
        this.phone = user.phone;
        this.zipcode = user.zipcode;
        this.password = user.password;
      }
    } catch (e) {
      console.log('This browser does not support local storage.');
    }
  }

  onSubmit() {
    this.submitted = true;
    this.pwError = false;
    this.pwSuccess = false;
    this.dnSuccess = false;
    this.eaError = false;
    this.eaSuccess = false;
    this.phError = false;
    this.phSuccess = false;
    this.zcError = false;
    this.zcSuccess = false;

    if (this.pw1 !== this.pw2) {
      this.pwError = true;
    } else if (this.pw1) {
      if (this.password !== this.pw1) {
        this.password = this.pw1;
        this.pwSuccess = true;
      }
    }

    if (this.dn && this.dn !== this.displayname) {
      this.displayname = this.dn;
      this.dnSuccess = true;
    }

    if (this.ea && this.ea !== this.email) {
      if (/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(this.ea)) {
        this.email = this.ea;
        this.eaSuccess = true;
      } else {
        this.eaError = true;
      }
    }

    if (this.ph && this.ph !== this.phone) {
      if (/^[1-9]\d{2}-\d{3}-\d{4}$/.test(this.ph)) {
        this.phone = this.ph;
        this.phSuccess = true;
      } else {
        this.phError = true;
      }
    }

    if (this.zc && this.zc !== this.zipcode) {
      if (/^\d{5}$/.test(this.zc)) {
        this.zipcode = this.zc;
        this.zcSuccess = true;
      } else {
        this.zcError = true;
      }
    }

    try {
      if (localStorage.getItem('currentUser')) {
        const user: User = JSON.parse(localStorage.getItem('currentUser'));
        const newUser = {
          username: user.username,
          displayname: this.displayname,
          email: this.email,
          phone: this.phone,
          birthday: user.birthday,
          zipcode: this.zipcode,
          password: this.password,
          loggedin: true,
          status: user.status,
          avatar: user.avatar
        };
        this.authService.makeNewUser(newUser);
        this.authService.updateDisplayName(this.displayname).then(() => {
          return this.authService.updateEmail(this.email).then(() => {
            return this.authService.updatePhone(this.phone).then(() => {
              return this.authService.updateZipCode(this.zipcode);
            });
          });
        });
      }
    } catch (e) {
      console.log('This browser does not support local storage.');
    }

    if (!(this.pwError || this.eaError || this.phError || this.zcError)) {
      this.pw1 = '';
      this.pw2 = '';
      this.dn = '';
      this.ea = '';
      this.ph = '';
      this.zc = '';
    }

    this.submitted = false;
  }
}
