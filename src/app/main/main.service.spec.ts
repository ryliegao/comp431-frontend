import { inject, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MainService } from './main.service';
import { AuthService } from 'src/app/auth/auth.service';
import { StorageService } from 'src/app/_services';

describe('MainService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ AuthService, StorageService ]
    });
  });

  it('should be created', () => {
    const service: MainService = TestBed.get(MainService);
    expect(service).toBeTruthy();
  });

  it('should fetch articles for current logged in user', () => {
    inject([ HttpTestingController, AuthService ],
      (httpMock: HttpTestingController, service: MainService) => {
        service.followInfo = { following: ['a', 'b'] };

        service.loadPosts().then(posts => {
          const req = httpMock.expectOne('assets/posts.json');
          expect(req.request.method).toEqual('GET');
          req.flush([
            {a: {content: 'a', image: 'a', comments: []}},
            {b: {content: 'b', image: 'b', comments: []}},
            {c: {content: 'c', image: 'c', comments: []}},
            ]);

          expect(service.loadPosts).toHaveBeenCalled();
          expect(posts).toContain(jasmine.objectContaining(
            {content: 'a', image: 'a', comments: []}
            ));
          expect(posts).toContain(jasmine.objectContaining(
            {content: 'b', image: 'b', comments: []}
            ));
          expect(posts).not.toContain(jasmine.objectContaining(
            {content: 'c', image: 'c', comments: []}
            ));
        });
      });
  });

  it('should add a follower on request', () => {
    inject([ HttpTestingController, AuthService ],
      (httpMock: HttpTestingController, service: MainService) => {
        service.followInfo = { following: ['a', 'b'] };

        service.addFollowee('kj1024').then(() => {
          expect(service.followInfo.following).toContain('kj1024');
          }
        );
      });
  });

  it('should remove a follower on request', () => {
    inject([ HttpTestingController, AuthService ],
      (httpMock: HttpTestingController, service: MainService) => {
        service.followInfo = { following: ['a', 'b'] };

        service.removeFollowee('a');
        expect(service.followInfo.following).not.toContain('a');
      });
  });
});
