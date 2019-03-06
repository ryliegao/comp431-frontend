import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from 'src/app/_models/user';
import { StorageService } from 'src/app/_services';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpService: HttpClient, private storageService: StorageService) { }

  static checkUnderage(birthday: Date) {
    const today = new Date(Date.now());
    const year = today.getFullYear() - birthday.getFullYear();
    const month = today.getMonth() - birthday.getMonth();
    const day = today.getDate() - birthday.getDate() - 1; // Do not use getDay()
    if (year < 18 || (year === 18 && month < 0) || (year === 18 && month === 0 && day < 0)) {
      alert('Sorry, you are underage!\n\nOnly individuals 18 years of age ' +
        'or older on the day of registration are allowed to register');
      return false;
    }
    return true;
  }

  static checkPasswordEquality(pswd1, pswd2) {
    if (pswd1 !== pswd2) {
      alert('ERROR: The passwords you entered do not match.');
      return false;
    }
    return true;
  }

  makeNewUser(obj) {
    try {
      const user = new User(obj);
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.storageService.setItem('New user stored!');
    } catch (e) {
      console.log('This browser does not support local storage.');
    }
  }

  checkLogin(username: string, password: string) {
    return this.httpService.get('assets/profile.json').toPromise().then(data => {
      let i = 0;
      while (data[i]) {
        if (username === data[i].username && password === data[i].password) {
          const user = {
            username: data[i].username,
            displayname: data[i].displayname,
            email: data[i].email,
            phone: data[i].phone,
            birthday: data[i].birthday,
            zipcode: data[i].zipcode,
            password: data[i].password,
            loggedin: true,
            status: data[i].status,
            avatar: data[i].avatar
          };
          this.makeNewUser(user);
          return true;
        }
        i++;
      }
      return false;
    }).catch((err: HttpErrorResponse) => {
      console.log (err.message);
    });
  }
}
