import { fakeAsync, ComponentFixture, TestBed, tick, inject } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';
import { StorageService } from 'src/app/_services';
import { MainComponent } from './main.component';
import { User } from 'src/app/_models/user';
import { MainService } from './main.service';
import { UserComponent } from './user/user.component';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [ ReactiveFormsModule, FormsModule, HttpClientTestingModule ],
      declarations: [ MainComponent, UserComponent ],
      providers: [ StorageService ]
    })
    .compileComponents();

    const info = { username: 'ml82' };
    spyOn(localStorage, 'getItem').and.returnValue(JSON.stringify(new User(info)));
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch articles for current logged in user', () => {
    fakeAsync(inject([MainComponent], () => {
      component.ngOnInit();
      tick();
      fixture.detectChanges();

      fixture.whenStable().then(() => {
        expect(component.posts.length).toEqual(1);
        expect(component.posts[0]).not.toBeNull();
        expect(component.posts[0].content).toEqual('content');
        expect(component.posts[0].image).toEqual('image');
        expect(component.posts[0].comments).toEqual([]);
      });
    }));
  });

  it('should update the search keyword', () => {
    spyOn(MainComponent.prototype, 'search');
    expect(component.searchText).toEqual('');

    const input = fixture.debugElement.query(By.css('.accordion_search_bar')).nativeElement;
    input.value = 'dummy';
    input.dispatchEvent(new Event('input'));
    input.click();
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      expect(component.searchText).toEqual('dummy');
      expect(component.search).toHaveBeenCalled();
    });
  });

  it('should filter displayed articles by the search keyword', () => {
    let first = 0;
    let second = 0;
    spyOn(MainComponent.prototype, 'createPost').and.callFake((content, image, clear) => {
      if (clear) {
        first++;
      } else {
        second++;
      }
    });
    component.posts = [
      {content: 'abc', image: 'image', comments: []},
      {content: 'image', image: 'abc', comments: []},
      {content: 'abc def', image: 'image', comments: []}
      ];
    component.searchText = 'text';
    component.search();
    expect(first).toEqual(0);
    expect(second).toEqual(0);

    component.searchText = 'abc';
    component.search();
    expect(first).toEqual(1);
    expect(second).toEqual(1);
  });

  it('should add articles when adding a follower', () => {
    fakeAsync(inject([MainComponent], () => {
      MainService.prototype.followInfo = { following: [], followers: []};
      component.posts = [];
      spyOn(MainService.prototype, 'loadPosts').and.returnValue(
        Promise.resolve({ content: 'content', image: 'image', comments: [] })
      );
      spyOn(MainService.prototype, 'addFollowee').and.callFake((username) => {
        MainService.prototype.followInfo.following.push(username);
        return Promise.resolve({ username });
      });

      component.currentUser = new User({ username: 'ml82' });
      component.addText = 'kj1024';
      component.addFollowee();
      tick();
      fixture.detectChanges();

      fixture.whenStable().then(() => {
        expect(MainService.prototype.addFollowee).toHaveBeenCalledTimes(1);
        expect(MainService.prototype.loadPosts).toHaveBeenCalledTimes(1);
        expect(MainService.prototype.followInfo.following.length).toEqual(1);
        expect(MainService.prototype.followInfo.following).toContain('kj1024');

        expect(component.posts[0]).not.toBeNull();
        expect(component.posts[0].content).toEqual('content');
        expect(component.posts[0].image).toEqual('image');
        expect(component.posts[0].comments).toEqual([]);
      });
    }));
  });

  it('should remove articles when removing a follower', () => {
    fakeAsync(inject([MainComponent], () => {
      component.posts = [{ content: 'content', image: 'image', comments: [] }];
      MainService.prototype.followInfo = { following: [ 'kj1024' ], followers: []};
      spyOn(MainService.prototype, 'removeFollowee').and.callFake((username) => {
        MainService.prototype.followInfo.following.splice(0, 1);
      });
      spyOn(MainService.prototype, 'loadPosts').and.returnValue(
        Promise.resolve([])
      );
      UserComponent.prototype.removeFollowee();
      tick();
      fixture.detectChanges();

      fixture.whenStable().then(() => {
        expect(MainService.prototype.removeFollowee).toHaveBeenCalledTimes(1);
        expect(MainService.prototype.loadPosts).toHaveBeenCalledTimes(1);
        expect(MainService.prototype.followInfo.following.length).toEqual(0);
        expect(MainService.prototype.followInfo.following).not.toContain('kj1024');

        expect(component.posts.length).toEqual(0);
      });
    }));
  });
});
