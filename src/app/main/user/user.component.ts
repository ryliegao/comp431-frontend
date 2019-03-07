import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() username: string;
  @Input() avatar: string;
  @Input() status: string;
  hearts: number;
  following: number;
  followers: number;
  show = true;

  constructor() {
    this.status = 'I use to design websites and applications for the web.';
    this.hearts = 127;
    this.following = 853;
    this.followers = 505;
  }

  ngOnInit() {
  }

}
