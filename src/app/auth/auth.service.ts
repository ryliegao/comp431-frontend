import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { User } from 'src/app/_models/user';
import { StorageService, GlobalService } from 'src/app/_services';

interface LoginResponse {
  username: string;
  result: boolean;
}

interface ProfileResponse {
  profile_id: string;
  user_id: string;
  profile_entries: Array<ProfileEntry>;
}

interface ProfileEntry {
  type: string;
  subtype:string;
  value:string;
}

interface AddressResponse {
  address_line_1: string;
  address_line_2: string;
  city: string;
  state: string;
}

interface UserResponse {
  last_name: string;
  first_name: string;
  email: string;
  status: string;
  password: string;
  avatar: string;
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

  makeNewUser(obj, profile = null) {
    try {
      const user = new User(obj);
      if (profile) {
        user.email = profile.email || user.email;
        user.home_phone = profile.home_phone || user.home_phone;
        user.work_phone = profile.work_phone || user.work_phone;
        user.mobile_phone = profile.mobile_phone || user.mobile_phone;
        user.other_phone = profile.other_phone || user.other_phone;
        user.address_line_1 = profile.address_line_1 || user.address_line_1;
        user.address_line_2 = profile.address_line_2 || user.address_line_2;
        user.city = profile.city || user.city;
        user.state = profile.state || user.state;
      }
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
      {
        headers: this.globalService.getHeaders(),
        observe: "response"
      }
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

  getProfile(userID: string) {
    const profile_request = this.httpService.get<ProfileResponse>(
      this.globalService.serverURL + `/api/user/${userID}/profile`,
      {
        headers: this.globalService.getHeaders(),
        observe: "response"
      });

    return profile_request.toPromise().then(res => {
      sessionStorage.setItem('profile_id', res.body.profile_id);
      sessionStorage.setItem('user_id', res.body.user_id);
      sessionStorage.setItem('ETag', res.headers.get('ETag'));

      const user: User = JSON.parse(localStorage.getItem('currentUser'));
      let profile = {}, address_link;
      for (let entry of res.body.profile_entries) {
        switch (entry.type.toLowerCase()) {
          case 'email':
            profile['email'] = entry.value;
            break;
          case 'address':
            address_link = entry.value;
            break;
          case 'telephone':
            profile[entry.subtype.toLowerCase() + '_phone'] = entry.value;
            break;
        }
      }

      const address_request = this.httpService.get<AddressResponse>(
        this.globalService.serverURL + address_link,
        {
          headers: this.globalService.getHeaders()
        });
      return address_request.toPromise().then(res => {
        profile["address_line_1"] = res.address_line_1;
        profile["address_line_2"] = res.address_line_2;
        profile["city"] = res.city;
        profile["state"] = res.state;
        this.makeNewUser(user, profile);
      });
    }).catch((err: HttpErrorResponse) => {
      console.log('' + err.message);
    });
  }

  updateProfile(email: string, hpn: string, wpn: string, mpn: string, opn: string,
                address_line_1: string, address_line_2: string, city:string, state: string) {
    const profile_id = sessionStorage.getItem('profile_id');
    const user_id = sessionStorage.getItem('user_id');
    const addr_body = {address_line_1, address_line_2, city, state};

    const addr_request = this.httpService.post<string>(
      this.globalService.serverURL + '/addresses',
      addr_body,
      {
        headers: this.globalService.getHeaders()
      });

    return addr_request.toPromise().then(res => {
      const profile_body = {
        profile_id,
        user_id,
        profile_entries: [
          {type: 'email', subtype: '', value: email},
          {type: 'address', subtype: '', value: '/addresses/' + res}]
      };
      if (hpn !== '') {
        profile_body.profile_entries.push({type: 'telephone', subtype: 'home', value: hpn});
      }
      if (wpn !== '') {
        profile_body.profile_entries.push({type: 'telephone', subtype: 'work', value: wpn});
      }
      if (mpn !== '') {
        profile_body.profile_entries.push({type: 'telephone', subtype: 'mobile', value: mpn});
      }
      if (opn !== '') {
        profile_body.profile_entries.push({type: 'telephone', subtype: 'other', value: opn});
      }

      const profile_request = this.httpService.put<string>(
        this.globalService.serverURL + '/api/profile/' + profile_id,
        profile_body,
        {
          headers: this.globalService.getHeaders()
            .set('If-Match', sessionStorage.getItem('ETag') || '')
        });

      return profile_request.toPromise().then(() => {
        alert("Profile successfully updated!");
        return true;
      }).catch((err: HttpErrorResponse) => {
        console.log(err.message);
        return false;
      });
    });
  }
}
