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
  submitted = false;

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required,
        Validators.pattern('^[a-zA-Z]([a-zA-Z0-9]+)*')])],
      displayname: ['', null],
      email: ['', Validators.compose([Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+')])],
      phone: ['', Validators.compose([Validators.required,
        Validators.pattern('^[1-9]\\d{2}-\\d{3}-\\d{4}')])],
      birthday: ['', Validators.compose([Validators.required,
        Validators.pattern('^\\d{4}[\\/\\-](0?[1-9]|1[012])[\\/\\-](0?[1-9]|[12][0-9]|3[01])')])],
      zipcode: ['', Validators.compose([Validators.required,
        Validators.pattern('^\\d{5}$')])],
      password1: ['', Validators.required],
      password2: ['', Validators.required]
    });
  }

  checkUnderage() {
    const today = new Date(Date.now());
    const birthday = new Date(this.registerForm.value.birthday);
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
    if (this.registerForm.value.password1 !== this.registerForm.value.password2) {
      alert('ERROR: The passwords you entered do not match.');
      return false;
    }
    return true;
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    const age = this.checkUnderage();
    const pswd = this.checkPasswordEquality();
    this.submitted = true;

    if (age && pswd && this.registerForm.valid) {
      try {
        const user = new User(
          this.registerForm.value.username,
          this.registerForm.value.displayname,
          this.registerForm.value.email,
          this.registerForm.value.phone,
          this.registerForm.value.birthday,
          this.registerForm.value.zipcode,
          this.registerForm.value.password1
        );
        localStorage.setItem('currentUser', JSON.stringify(user));

        // user = JSON.parse(localStorage.getItem('currentUser'));
      } catch (e) {
        console.log('This browser does not support local storage.');
      }
      alert(this.registerForm.value.username + ', you have successfully registered!');
      this.router.navigate(['/auth/login']);
    }
    return false;
  }
}
