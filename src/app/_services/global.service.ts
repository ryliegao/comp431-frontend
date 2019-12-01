import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

let token = sessionStorage.getItem('Token');
if(token === null){
  token = 'Not exsits'
};

@Injectable({
  providedIn: 'root'
})

export class GlobalService {
  // public serverURL = 'http://e6156yeah.us-east-2.elasticbeanstalk.com';
  public serverURL = ' http://127.0.0.1:5000'; // TODO: change to heroku domain
  public options: object = {
    headers: new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Token', token),
    observe: 'response',
    withCredentials: true
  };
}
