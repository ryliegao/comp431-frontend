import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  public serverURL = 'https://r79lu1r8di.execute-api.us-east-1.amazonaws.com/test';
  // public serverURL = 'http://127.0.0.1:5000'; // TODO: change to aws domain

  public options: object = {
    headers: new HttpHeaders()
      .set('Content-Type', 'application/json'),
    // withCredentials: true
  };
}
