import { Component, Input, Output, OnInit } from '@angular/core';
import { MainService } from 'src/app/main/main.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() username: string;
  @Input() displayname: string;
  @Input() avatar: string;
  @Input() status: string;
  hearts: number;
  following: number;
  followers: number;
  show = true;

  constructor(private service: MainService) {
    this.hearts = 127;
    this.following = 853;
    this.followers = 505;
  }

  ngOnInit() {
  }

  removeFollowee() {
    this.show = false;
    this.service.removeFollowee(this.username);
  }
}
