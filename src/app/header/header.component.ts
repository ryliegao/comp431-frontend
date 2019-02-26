import { Component, OnInit } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [
    Location,
    { provide: LocationStrategy, useClass: PathLocationStrategy }
  ]
})

export class HeaderComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  hasMain(): boolean {
    return this.location.path().indexOf('/profile') > -1;
  }

  hasProfile(): boolean {
    return this.location.path().indexOf('/main') > -1;
  }

  hasLogIn(): boolean {
    return this.location.path().indexOf('/auth/register') > -1;
  }

  hasLogOut(): boolean {
    return this.location.path().indexOf('/main') > -1 ||
      this.location.path().indexOf('/profile') > -1;
  }

  hasRegister(): boolean {
    return this.location.path().indexOf('/auth/login') > -1;
  }

}
