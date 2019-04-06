import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';
import { StorageService } from 'src/app/_services';

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
    private authService: AuthService,
    private storageService: StorageService
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  removeMsg() {
    this.invalid = false;
    this.notMatch = false;
    this.submitted = false;
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

    // check if the username and password match
    this.authService.checkLogin(this.loginForm.get('username').value, this.loginForm.get('password').value).then(match => {
      if (match) {
        this.storageService.waitForUserLogin().then(() => {
          this.router.navigate(['/main']);
        });
      } else {
        this.notMatch = true;
      }
    });
  }
}
