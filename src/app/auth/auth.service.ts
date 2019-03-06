import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpService: HttpClient) { }

  checkLogin(username: string, password: string) {
    return this.httpService.get('assets/profile.json').toPromise().then(data => {
      let i = 0;
      while (data[i]) {
        if (username === data[i].username && password === data[i].password) {
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
