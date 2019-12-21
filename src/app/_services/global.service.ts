import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';

interface Config {
  site_base: string;
  resource_maps: {
    main: {
      following: string;
      articles: string;
      comments: string;
    },
    profile: {
      user_id: string;
      address: string;
      profile_id: string;
    },
    users: {
      user_id: string;
      login: string;
      registration: string;
      logout: string;
    },
  }
}

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  public config: Config;
  public serverURL: string;

  constructor(private http: HttpClient) {
    this.http.get<Config>('assets/e6156yeah.config.json').subscribe(res => {
      this.config = res;
      this.serverURL = res.site_base;
    }, (err: HttpErrorResponse) => {
      console.log ("global.service: " + err.message);
    });
  }

  // public serverURL = 'http://127.0.0.1:5000'; // TODO: change to aws domain

  public getHeaders: () => HttpHeaders = () =>
    new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Token', sessionStorage.getItem('session_id') || '')
      .set('X-Api-Key', localStorage.getItem('FBLoggedIn') || 'false')
  ;
}
