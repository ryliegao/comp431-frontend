import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StorageService } from 'src/app/_services';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let removed;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      providers: [ StorageService ]
    })
    .compileComponents();

    spyOn(localStorage, 'setItem').and.callFake((key, item) => {
      removed = false;
      component.name = 'Mark Lee';
      component.status = 'Had too much blue cheese... makes me feeling blue today :(';
      component.avatar = 'assets/images/ml82.png';
    });
    spyOn(localStorage, 'removeItem').and.callFake((item) => {
      removed = true;
    });
    spyOn(HeaderComponent.prototype, 'updateName').and.callFake(() => {
      component.name = 'Default User';
    });
    spyOn(HeaderComponent.prototype, 'updateStatus').and.callFake(() => {
      component.status = 'Hey! I\'m new to here :)';
    });
    spyOn(HeaderComponent.prototype, 'updateAvatar').and.callFake(() => {
      component.avatar = 'assets/images/profile-image.jpeg';
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should log out a user and login state should be cleared', () => {
    localStorage.setItem('currentUser', JSON.stringify({username: 'user', password: 'password'}));
    expect(removed).toBeFalsy();
    expect(component.name).toBe('Mark Lee');
    expect(component.status).toBe('Had too much blue cheese... makes me feeling blue today :(');
    expect(component.avatar).toBe('assets/images/ml82.png');

    component.logOut();
    expect(removed).toBeTruthy();
    expect(localStorage.removeItem).toHaveBeenCalledTimes(1);

    expect(component.updateName).toHaveBeenCalledTimes(2);
    expect(component.updateStatus).toHaveBeenCalledTimes(2);
    expect(component.updateAvatar).toHaveBeenCalledTimes(2);

    expect(component.name).toBe('Default User');
    expect(component.status).toBe('Hey! I\'m new to here :)');
    expect(component.avatar).toBe('assets/images/profile-image.jpeg');
  });
});
