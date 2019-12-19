import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { User } from 'src/app/_models/user';
import { StorageService, GlobalService } from 'src/app/_services';

interface LoginResponse {
  username: string;
  result: boolean;
}

interface NameResponse {
  username: string;
  displaynames: Array<{username: string, displayname: string}>;
}

interface UserResponse {
  last_name: string;
  first_name: string;
  email: string;
  status: string;
  password: string;
  avatar: string;
}

interface EmailResponse {
  username: string;
  email: string;
}

interface PhoneResponse {
  username: string;
  phone: string;
}

interface ZipCodeResponse {
  username: string;
  zipcode: string;
}

interface AvatarResponse {
  avatar: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private httpService: HttpClient,
    private storageService: StorageService,
    private globalService: GlobalService
  ) { }

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

  storeToken(token: string) {
    sessionStorage.setItem('session_id', token);
  }

  retrieveToken(): string {
    return sessionStorage.getItem('session_id') || '';
  }

  checkLogin(username: string, password: string): Promise<boolean | number> {
    const body = { username, password };
    const user = { lastname: null, firstname: null, email: username, password: null,
      loggedin: true, status: null, avatar: null };
    const request = this.httpService.post<LoginResponse>(
      this.globalService.serverURL + '/api/user/login',
      body,
      { observe: "response" }
    );

    return request.toPromise().then(login => {
      this.storeToken(login.headers.get('Token'));
      return this.httpService.get<UserResponse>(
        this.globalService.serverURL + '/api/user/' + username,
        {
          headers: new HttpHeaders()
            .set('Token', this.retrieveToken())
        }).toPromise().then(userRsp => {
        user.lastname = userRsp.last_name;
        user.firstname = userRsp.first_name;
        user.password = userRsp.password;
        user.status = userRsp.status; // TODO: this is not the status we want
        user.avatar = userRsp.avatar;
        this.makeNewUser(user);
        return login.body.result;
      });
    }).catch((err: HttpErrorResponse) => {
      return err.status;
    });
  }

  registerUser(user: User) {
    const body = {
      last_name: user.lastname,
      first_name: user.firstname,
      email: user.email,
      password: user.password
    };
    const request = this.httpService.post<LoginResponse>(
      this.globalService.serverURL + '/api/user/registration',
      body,
      { headers: this.globalService.getHeaders() }
    );

    return request.toPromise().then(
      () => true // this means the response status is 200
    ).catch((err: HttpErrorResponse) => {
      console.log("auth.service/registerUser: " + err.message);
    });
  }

  updateDisplayName(displayname: string) {
    const request = this.httpService.put<NameResponse>(
      this.globalService.serverURL + '/displayname',
      { displayname },
      { headers: this.globalService.getHeaders() }
    );

    return request.toPromise().then(res => {
      return res.displaynames;
    }).catch((err: HttpErrorResponse) => {
      console.log(err.message);
      return '';
    });
  }

  updateEmail(email: string) {
    const request = this.httpService.put<EmailResponse>(
      this.globalService.serverURL + '/email',
      { email },
      { headers: this.globalService.getHeaders() }
    );

    return request.toPromise().then(res => {
      return res.email;
    }).catch((err: HttpErrorResponse) => {
      console.log(err.message);
      return '';
    });
  }

  updatePhone(phone: string) {
    const request = this.httpService.put<PhoneResponse>(
      this.globalService.serverURL + '/phone',
      { phone },
      { headers: this.globalService.getHeaders() }
    );

    return request.toPromise().then(res => {
      return res.phone;
    }).catch((err: HttpErrorResponse) => {
      console.log(err.message);
      return '';
    });
  }

  updateZipCode(zipcode: string) {
    const request = this.httpService.put<ZipCodeResponse>(
      this.globalService.serverURL + '/zipcode',
      { zipcode },
      { headers: this.globalService.getHeaders() }
    );

    return request.toPromise().then(res => {
      return res.zipcode;
    }).catch((err: HttpErrorResponse) => {
      console.log(err.message);
      return '';
    });
  }

  updateAvatar(avatar: string) {
    const request = this.httpService.put<AvatarResponse>(
      this.globalService.serverURL + '/avatar',
      { avatar },
      { headers: this.globalService.getHeaders() }
    );

    return request.toPromise().then(res => {
      return res.avatar;
    }).catch((err: HttpErrorResponse) => {
      console.log(err.message);
      return '';
    });
  }

  logOut() {
    const request = this.httpService.put<Response>(
      this.globalService.serverURL + '/logout',
      {},
      { headers: this.globalService.getHeaders() }
    );

    return request.toPromise()
      .catch((err: HttpErrorResponse) => {
      console.log(err.message);
    });
  }
}
