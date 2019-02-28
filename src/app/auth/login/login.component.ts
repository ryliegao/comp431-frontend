import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/_models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../auth.component.css', './login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  wrong = false;
  @Output() loginEmiiter = new EventEmitter();

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      this.wrong = true;
      return;
    }

    // try {
    //   if (localStorage.getItem('currentUser')) {
    //     const user: User = JSON.parse(localStorage.getItem('currentUser'));
    //
    //     if (this.loginForm.value.username === user.username &&
    //       this.loginForm.value.password === user.password) {
    //       this.wrong = false;
    //       this.loading = true;
    //       const newUser = new User(
    //         user.username,
    //         user.displayname,
    //         user.email,
    //         user.phone,
    //         user.birthday,
    //         user.zipcode,
    //         user.password,
    //         true
    //       );
    //       localStorage.setItem('currentUser', JSON.stringify(newUser));
    //       this.router.navigate(['/main']);
    //     } else {
    //       this.wrong = true;
    //     }
    //   }
    // } catch (e) {
    //   console.log('This browser does not support local storage.');
    //   this.wrong = false;
    //   this.loading = true;
    //   this.router.navigate(['/main']);
    // }

    this.router.navigate(['/main']);
  }
}
