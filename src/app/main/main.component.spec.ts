import { fakeAsync, ComponentFixture, TestBed, tick, inject } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';
import { StorageService } from 'src/app/_services';
import { MainComponent } from './main.component';
import { User } from 'src/app/_models/user';
import { MainService } from './main.service';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [ ReactiveFormsModule, FormsModule, HttpClientTestingModule ],
      declarations: [ MainComponent ],
      providers: [ StorageService ]
    })
    .compileComponents();

    const info = { username: 'ml82' };
    spyOn(localStorage, 'getItem').and.returnValue(JSON.stringify(new User(info)));
    spyOn(MainService.prototype, 'loadPosts').and.returnValue(
      Promise.resolve({ content: 'content', image: 'image', comments: [] })
    );
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
    fakeAsync(inject([MainComponent], (comp) => {
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

    const input = fixture.debugElement.query(By.css('#accordion_search_bar')).nativeElement;
    input.value = 'dummy';
    input.dispatchEvent(new Event('input'));
    input.click();
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      expect(component.searchText).toEqual('dummy');
      expect(component.search).toHaveBeenCalled();
    });
  });
});
