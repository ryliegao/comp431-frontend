import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/_models/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  username = '';
  displayname = '';
  email = '';
  phone = '';
  birthday = null;
  zipcode = '';
  password1 = '';
  password2 = '';

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required, Validators.pattern],
      email: ['', Validators.required, Validators.pattern],
      phone: ['', Validators.required, Validators.pattern],
      birthday: ['', Validators.required, Validators.pattern],
      zipcode: ['', Validators.required, Validators.pattern]
    });
  }

  checkUnderage() {
    const today = new Date(Date.now());
    const birthday = new Date(this.birthday);
    const year = today.getFullYear() - birthday.getFullYear();
    const month = today.getMonth() - birthday.getMonth();
    const day = today.getDate() - birthday.getDate() - 1; // Do not use getDay()
    if (year < 18 || (year === 18 && month < 0) || (year === 18 && month === 0 && day < 0)) {
      alert('Sorry, you are underage!\n\nOnly individuals 18 years of age ' +
        'or older on the day of registration are allowed to register');
      return false;
    }
    return true;
  }

  checkPasswordEquality() {
    if (this.password1 !== this.password2) {
      alert('ERROR: The passwords you entered do not match.');
      return false;
    }
    return true;
  }

  onSubmit() {
    const age = this.checkUnderage();
    const pswd = this.checkPasswordEquality();
    console.log('age is ' + age);
    console.log('pswd is ' + pswd);
    console.log('this.registerForm.valid is ' + this.registerForm.valid);
    if (age && pswd) { // && this.registerForm.valid
      try {
        if (window.localStorage) {
          const user = new User(this.username, this.displayname, this.email, this.phone, this.birthday,
            this.zipcode, this.password1);
          window.localStorage.setItem('currentUser', JSON.stringify(user));

          // user = JSON.parse(window.localStorage.getItem('user'));
        }
      } catch (e) {
        console.log('This browser does not support local storage.');
      }
      alert(this.username + ', you have successfully registered!');
      this.router.navigate(['/auth/login']);
    }
    return false;
  }
}
