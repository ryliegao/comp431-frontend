import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/_models/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StorageService } from 'src/app/_services/storage.service';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../auth.component.css', './register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private storageService: StorageService,
    private authService: AuthService) { }

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

  get f() { return this.registerForm.controls; }

  onSubmit() {
    const age = AuthService.checkUnderage(new Date(this.registerForm.value.birthday));
    const pswd = AuthService.checkPasswordEquality(this.registerForm.value.password1, this.registerForm.value.password2);
    this.submitted = true;

    if (age && pswd && this.registerForm.valid) {
      const user = {
        username: this.registerForm.value.username,
        displayname: this.registerForm.value.displayname,
        email: this.registerForm.value.email,
        phone: this.registerForm.value.phone,
        birthday: this.registerForm.value.birthday,
        zipcode: this.registerForm.value.zipcode,
        password: this.registerForm.value.password1,
        loggedin: true
      };
      this.authService.makeNewUser(user);
      alert(this.registerForm.value.username + ', you have successfully registered!');
      this.router.navigate(['/auth/login']);
      this.storageService.setItem(
        this.registerForm.value.displayname === null || this.registerForm.value.displayname === '' ?
          this.registerForm.value.username : this.registerForm.value.displayname
      );
    }

    return false;
  }
}
