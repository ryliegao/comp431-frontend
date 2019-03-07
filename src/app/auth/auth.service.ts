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
      if (data[username]) {
        if (password === data[username].password) {
          const user = {
            username: data[username].username,
            displayname: data[username].displayname,
            email: data[username].email,
            phone: data[username].phone,
            birthday: data[username].birthday,
            zipcode: data[username].zipcode,
            password: data[username].password,
            loggedin: true,
            status: data[username].status,
            avatar: data[username].avatar
          };
          this.makeNewUser(user);
          return true;
        }
      }
      return false;
    }).catch((err: HttpErrorResponse) => {
      console.log (err.message);
    });
  }
}
