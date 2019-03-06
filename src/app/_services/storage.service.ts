import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class StorageService {
  private storageSubject = new Subject<string>();

  watchStorage(): Observable<any> {
    return this.storageSubject.asObservable();
  }

  setItem(displayName: string) {
    this.storageSubject.next(displayName);
  }

  waitForUserLogin() {
    return new Promise((resolve, reject) => {
      try {
        if (localStorage.getItem('currentUser')) {
          while (JSON.parse(localStorage.getItem('currentUser')) === null ||
            JSON.parse(localStorage.getItem('currentUser')).loggedin === false) { }
          resolve();
        } else {
          reject();
        }
      } catch (e) {
        console.log('This browser does not support local storage. [StorageService]');
        reject();
      }
    });
  }
}
