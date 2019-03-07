import { inject, TestBed } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { MainService } from './main.service';
import {AuthService} from '../auth/auth.service';

describe('MainService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
  });

  it('should be created', () => {
    const service: MainService = TestBed.get(MainService);
    expect(service).toBeTruthy();
  });

  it('should fetch articles for current logged in user', () => {
    inject([ HttpTestingController, AuthService],
      (httpMock: HttpTestingController, service: MainService) => {
        service.followInfo = { following: ['a', 'b'], followers: ['c'] };

        service.loadPosts().then(posts => {
          const req = httpMock.expectOne('assets/posts.json');
          expect(req.request.method).toEqual('GET');
          req.flush([
            {a: {content: 'a', image: 'a', comments: []}},
            {b: {content: 'b', image: 'b', comments: []}},
            {c: {content: 'c', image: 'c', comments: []}},
            ]);

          expect(service.loadPosts).toHaveBeenCalled();
          expect(posts).toContain(jasmine.objectContaining({content: 'a', image: 'a', comments: []}));
          expect(posts).toContain(jasmine.objectContaining({content: 'b', image: 'b', comments: []}));
          expect(posts).not.toContain(jasmine.objectContaining({content: 'c', image: 'c', comments: []}));
        });
      });
  });
});
