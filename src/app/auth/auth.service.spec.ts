import { inject, TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AuthService } from './auth.service';
import { StorageService } from 'src/app/_services';

describe('AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [ AuthService, StorageService ]
    });

    spyOn(AuthService.prototype, 'checkLogin').and.callThrough();
  });

  it('should be created', () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(service).toBeTruthy();
  });

  it('should log in a previously registered user',
    inject([ HttpTestingController, AuthService],
      (httpMock: HttpTestingController, service: AuthService) => {

        service.checkLogin('ml82', 'Mark123').then(match => {
          const req = httpMock.expectOne('assets/profile.json');
          expect(req.request.method).toEqual('GET');
          req.flush({ username: 'ml82', password: 'Mark123' });

          expect(service.checkLogin).toHaveBeenCalledWith('ml82', 'Mark123');
          expect(match).toBeTruthy();
        });

        service.checkLogin('ml82', 'Mark124').then(match => {
          expect(service.checkLogin).toHaveBeenCalledWith('ml82', 'Mark124');
          expect(match).toBeFalsy();
        });

        expect(service.checkLogin).toHaveBeenCalledTimes(2);
    }));

  it('should not log in an invalid user',
    inject([ HttpTestingController, AuthService],
      (httpMock: HttpTestingController, service: AuthService) => {

        service.checkLogin('kj1024', 'Krystal123').then(match => {
          const req = httpMock.expectOne('assets/profile.json');
          expect(req.request.method).toEqual('GET');
          req.flush({ username: 'ml82', password: 'Mark123'});

          expect(service.checkLogin).toHaveBeenCalledWith('kj1024', 'Krystal123');
          expect(match).toBeFalsy();
        });

        expect(service.checkLogin).toHaveBeenCalledTimes(1);
      }));

});
