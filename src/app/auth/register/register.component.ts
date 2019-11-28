import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StorageService } from 'src/app/_services/storage.service';
import { AuthService } from 'src/app/auth/auth.service';
import { User } from 'src/app/_models/user';

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
      lastname: ['', Validators.compose([Validators.required,
        Validators.pattern('^[a-zA-Z]*')])],
      firstname: ['', Validators.compose([Validators.required,
        Validators.pattern('^[a-zA-Z]*')])],
      email: ['', Validators.compose([Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+')])],
      password1: ['', Validators.required],
      password2: ['', Validators.required]
    });
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    const pswd = AuthService.checkPasswordEquality(
      this.registerForm.value.password1,
      this.registerForm.value.password2);
    this.submitted = true;

    if (pswd && this.registerForm.valid) {
      const user = {
        lastname: this.registerForm.value.lastname,
        firstname: this.registerForm.value.firstname,
        email: this.registerForm.value.email,
        password: this.registerForm.value.password1,
        loggedin: true
      };
      this.authService.makeNewUser(user);
      this.authService.registerUser(new User(user)).then(result => {
        if (result) {
          alert(this.registerForm.value.firstname + ', you have successfully registered!');
          this.router.navigate(['/auth/login']);
          this.storageService.setItem(
            this.registerForm.value.firstname + ' ' + this.registerForm.value.lastname
          );
        }
      });
    }
    return false;
  }
}
