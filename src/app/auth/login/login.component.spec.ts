import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { StorageService } from 'src/app/_services';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authSpy;
  let storageSpy;
  let routerSpy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ReactiveFormsModule, FormsModule, RouterTestingModule, HttpClientTestingModule ],
      declarations: [ LoginComponent ],
      providers: [ AuthService, StorageService ]
    })
    .compileComponents();

    spyOn(LoginComponent.prototype, 'removeMsg').and.callThrough();
    spyOn(LoginComponent.prototype, 'onSubmit').and.callThrough();
    authSpy = spyOn(AuthService.prototype, 'checkLogin').and.callFake((user, pass) => {
      return new Promise((resolve, reject) => {
        if (user === 'ml82' && pass === 'Mark123') {
          resolve(true);
        } else {
          resolve(false);
        }
      });
    });
    storageSpy = spyOn(StorageService.prototype, 'waitForUserLogin').and.callFake(() => {
      return new Promise((resolve, reject) => {
        resolve();
      });
    });
    routerSpy = spyOn(TestBed.get(Router), 'navigate');
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update mismatch message for displaying login error to user', () => {
    expect(fixture.debugElement.query(By.css('.error-message'))).toBeNull();
    expect(component.submitted).toBeFalsy();
    expect(component.invalid).toBeFalsy();
    expect(component.notMatch).toBeFalsy();

    component.loginForm.setValue({username: 'kj1024', password: 'Krystal123'});
    component.onSubmit();
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      expect(component.submitted).toBeTruthy();
      expect(component.invalid).toBeFalsy();
      expect(component.notMatch).toBeTruthy();
      expect(component.onSubmit).toHaveBeenCalledTimes(1);
      fixture.detectChanges();
    }).then(() => {
      const notMatchMsg = fixture.debugElement.query(By.css('.error-message'));
      expect(notMatchMsg).not.toBeNull();
      expect(notMatchMsg.nativeElement.textContent).toContain('Username and password do not match!');
      expect(authSpy).toHaveBeenCalledTimes(1);
      component.removeMsg();
      fixture.detectChanges();
    }).then(() => {
      expect(component.submitted).toBeFalsy();
      expect(component.invalid).toBeFalsy();
      expect(component.notMatch).toBeFalsy();
      fixture.detectChanges();
    }).then(() => {
      expect(fixture.debugElement.query(By.css('.error-message'))).toBeNull();
    });
  });

  it('should update invalid message for displaying login error to user', () => {
    expect(fixture.debugElement.query(By.css('.error-message'))).toBeNull();
    expect(component.submitted).toBeFalsy();
    expect(component.invalid).toBeFalsy();
    expect(component.notMatch).toBeFalsy();

    const username = component.loginForm.controls.username;
    const errors = username.errors || {};
    expect(errors.required).toBeTruthy();
    component.onSubmit();
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      expect(component.submitted).toBeTruthy();
      expect(component.invalid).toBeTruthy();
      expect(component.notMatch).toBeFalsy();

      const invalidMsg = fixture.debugElement.query(By.css('.error-message'));
      expect(invalidMsg).not.toBeNull();
      expect(invalidMsg.nativeElement.textContent).toContain('Please enter both of your username and your password!');
    });

    expect(component.onSubmit).toHaveBeenCalledTimes(1);
    expect(authSpy).toHaveBeenCalledTimes(0);
  });

  it('should not send error message if no login error is detected', () => {
    component.loginForm.setValue({username: 'ml82', password: 'Mark123'});
    component.onSubmit();
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      expect(component.submitted).toBeTruthy();
      expect(component.invalid).toBeFalsy();
      expect(component.notMatch).toBeFalsy();
      expect(authSpy).toHaveBeenCalledTimes(1);
      expect(storageSpy).toHaveBeenCalledTimes(1);
      fixture.detectChanges();
    }).then(() => {
      expect(fixture.debugElement.query(By.css('.error-message'))).toBeNull();
      expect(component.onSubmit).toHaveBeenCalledTimes(1);
      expect(routerSpy).toHaveBeenCalledTimes(1);
    });
  });

});
