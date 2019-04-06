import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  // public serverURL = 'https://ryliesbackend.herokuapp.com'; // TODO: change to heroku domain
  public serverURL = 'http://127.0.0.1:3000';

  public options: object = {
    headers: new HttpHeaders()
      .set('Content-Type', 'application/json'),
    withCredentials: true
  };
}
