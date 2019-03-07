import {async, ComponentFixture, TestBed, tick, fakeAsync, inject} from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProfileComponent } from './profile.component';
import { StorageService } from 'src/app/_services';
import {User} from '../_models/user';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ReactiveFormsModule, FormsModule, RouterTestingModule, HttpClientTestingModule ],
      declarations: [ ProfileComponent ],
      providers: [ StorageService ]
    })
    .compileComponents();

    const info = { username: 'ml82', displayname: 'Mark Lee', email: 'ml82@rice.edu' };
    spyOn(localStorage, 'getItem').and.returnValue(JSON.stringify(new User(info)));
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch the logged in user\'s profile information', () => {
    fakeAsync(inject([ProfileComponent], () => {
      expect(component.displayname).toEqual('');
      expect(component.email).toEqual('');
      component.ngOnInit();
      tick();
      fixture.detectChanges();

      fixture.whenStable().then(() => {
        expect(localStorage.getItem).toHaveBeenCalled();
        expect(component.displayname).toEqual('Mark Lee');
        expect(component.email).toEqual('ml82@rice.edu');
      });
    }));
  });
});
