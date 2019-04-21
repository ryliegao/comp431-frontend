import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from 'src/app/_models/user';
import { StorageService, GlobalService } from 'src/app/_services';

interface LoginResponse {
  username: string;
  result: string;
}

interface NameResponse {
  username: string;
  displaynames: Array<{username: string, displayname: string}>;
}

interface EmailResponse {
  username: string;
  email: string;
}

interface PhoneResponse {
  username: string;
  phone: string;
}

interface DobResponse {
  username: string;
  dob: string;
}

interface ZipCodeResponse {
  username: string;
  zipcode: string;
}

interface StatusResponse {
  username: string;
  headlines: Array<{username: string, headline: string}>;
}

interface AvatarResponse {
  username: string;
  avatars: Array<{username: string, avatar: string}>;
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
    const body = { username, password };
    const user = { username, displayname: null, email: null, phone: null, birthday: null, zipcode: null,
      password: null, loggedin: true, status: null, avatar: null };
    const request = this.httpService.post<LoginResponse>(
      this.globalService.serverURL + '/login',
      body,
      this.globalService.options
    );

    return request.toPromise().then(login => {
      return login.result && login.result === 'success';
    }).then(loggedin => {
      return this.httpService.get<NameResponse>(
        this.globalService.serverURL + '/displaynames/:users?users=' + username,
        this.globalService.options).toPromise().then(names => {
          if (names.displaynames.length > 0) {
            user.displayname = names.displaynames[0].displayname;
          }
          return this.httpService.get<EmailResponse>(
            this.globalService.serverURL + '/email/:user?user=' + username,
            this.globalService.options).toPromise().then(email => {
              user.email = email.email;
              return this.httpService.get<PhoneResponse>(
                this.globalService.serverURL + '/phone/:user?user=' + username,
                this.globalService.options).toPromise().then(phone => {
                  user.phone = phone.phone;
                  return this.httpService.get<DobResponse>(
                    this.globalService.serverURL + '/dob/:user?user=' + username,
                    this.globalService.options).toPromise().then(dob => {
                      user.birthday = dob.dob;
                      return this.httpService.get<ZipCodeResponse>(
                        this.globalService.serverURL + '/zipcode/:user?user=' + username,
                        this.globalService.options).toPromise().then(zipcode => {
                          user.zipcode = zipcode.zipcode;
                          return this.httpService.get<StatusResponse>(
                            this.globalService.serverURL + '/headlines/:users?users=' + username,
                            this.globalService.options).toPromise().then(headlines => {
                              if (headlines.headlines.length > 0) {
                                user.status = headlines.headlines[0].headline;
                              }
                              return this.httpService.get<AvatarResponse>(
                                this.globalService.serverURL + '/avatars/:users?users=' + username,
                                this.globalService.options).toPromise().then(avatars => {
                                  if (avatars.avatars.length > 0) {
                                    user.avatar = avatars.avatars[0].avatar;
                                  }
                                }).then(() => {
                                  if (loggedin) { this.makeNewUser(user); }
                                  return loggedin;
                                });
                            });
                        });
                    });
                });
            });
        });
    }).catch((err: HttpErrorResponse) => {
      console.log (err.message);
    });
  }

  registerUser(user: User) {
    const body = {
      username: user.username,
      displayname: user.displayname,
      email: user.email,
      phone: user.phone,
      dob: user.birthday,
      zipcode: user.zipcode,
      password: user.password
    };
    const request = this.httpService.post<LoginResponse>(
      this.globalService.serverURL + '/register',
      body,
      this.globalService.options
    );

    return request.toPromise().then(res => {
      return res.result && res.result === 'success';
    }).catch((err: HttpErrorResponse) => {
      console.log(err.message);
    });
  }

  // update display name
  // update email
  // update phone
  // update zip code
  // update password

  updateDisplayName(displayname: string) {
    const request = this.httpService.put<NameResponse>(
      this.globalService.serverURL + '/displayname',
      { displayname },
      this.globalService.options
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
      this.globalService.options
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
      this.globalService.options
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
      this.globalService.options
    );

    return request.toPromise().then(res => {
      return res.zipcode;
    }).catch((err: HttpErrorResponse) => {
      console.log(err.message);
      return '';
    });
  }
}
