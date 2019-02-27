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
}
