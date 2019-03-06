import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../auth.component.css', './login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  invalid = false;
  notMatch = false;
  @Output() loginEmiiter = new EventEmitter();

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private service: AuthService) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    this.invalid = false;
    this.notMatch = false;
    this.submitted = true;

    // check if the input fields are filled
    if (this.loginForm.invalid) {
      this.invalid = true;
      return;
    }

    // check if the username and password matches
    if (!this.service.checkLogin(this.loginForm.get('username').value, this.loginForm.get('password').value)) {
      this.notMatch = true;
      return;
    }

    this.router.navigate(['/main']);
  }
}
