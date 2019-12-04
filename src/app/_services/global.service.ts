import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  public serverURL = 'https://e6156yeah.us-east-2.elasticbeanstalk.com';
  // public serverURL = 'http://127.0.0.1:5000'; // TODO: change to aws domain

  public options: object = {
    headers: new HttpHeaders()
      .set('Content-Type', 'application/json'),
    // withCredentials: true
  };
}
