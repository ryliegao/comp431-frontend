import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  public serverURL = 'https://r79lu1r8di.execute-api.us-east-1.amazonaws.com/test';
  // public serverURL = 'http://127.0.0.1:5000'; // TODO: change to aws domain

  public getHeaders: () => HttpHeaders = () =>
    new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Token', sessionStorage.getItem('session_id') || '')
      .set('FBlogin', localStorage.getItem('FBLoggedIn') || 'false')
  ;
}
