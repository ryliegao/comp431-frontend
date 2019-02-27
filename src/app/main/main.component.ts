import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models/user';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Imagepost1Component } from './imagepost1/imagepost1.component';
import { Imagepost2Component } from './imagepost2/imagepost2.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {
  currentUser: User;
  users: User[] = [];
  footer: SafeHtml;
  content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas bibendum sem placerat' +
    'sem interdum, a suscipit enim elementum. Proin libero erat, venenatis non enim placerat, ' +
    'faucibus tristique mauris. Phasellus non turpis erat. Morbi aliquet erat mauris, molestie ' +
    'aliquam diam vehicula ac.';


  constructor(private sanitizer: DomSanitizer) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const text = '@Copyright: Rylie Gao<br/>' + new Date(Number(Date.now()));
    this.footer = this.sanitizer.bypassSecurityTrustHtml(text);
  }

  ngOnInit() {
    // this.loadAllUsers();
  }

  // deleteUser(id: number) {
  //   this.userService.delete(id).pipe(first()).subscribe(() => {
  //     this.loadAllUsers();
  //   });
  // }
  //
  // private loadAllUsers() {
  //   this.userService.getAll().pipe(first()).subscribe(users => {
  //     this.users = users;
  //   });
  // }
}
