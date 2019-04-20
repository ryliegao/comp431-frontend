import { Component, Input, OnInit, NgZone } from '@angular/core';
import { MainService } from 'src/app/main/main.service';

@Component({
  selector: 'app-imagepost',
  templateUrl: './imagepost.component.html',
  styleUrls: ['./imagepost.component.css']
})
export class ImagepostComponent implements OnInit {
  @Input() postID: number;
  @Input() author: string;
  @Input() content: string;
  @Input() image: string;
  user: string;
  comments = [];
  showComments = false;
  giveComment = false;
  editPost = false;
  btnText = 'See Comments';
  editContent: string;
  commentContent: string;
  authorized: boolean;

  constructor(private service: MainService, private ngZone: NgZone) {}

  ngOnInit() {
    this.authorized = (this.author === this.service.getCurrentUser());
    this.editContent = this.content;
  }

  eidtPost() {
    return this.service.editPost(this.postID, this.editContent).then(result => {
      this.authorized = result;
      if (this.authorized) {
        this.content = this.editContent;
      }
      return this.ngZone.run(() => this.ngOnInit());
    });
  }

  commentPost() {
    this.service.commentPost(this.postID, this.commentContent).then(() => {
      this.commentContent = '';
    });
  }

  toggleComments() {
    this.giveComment = false;
    this.editPost = false;
    if (!this.showComments) {
      this.service.loadComments(this.postID).then(
        comments => {
          this.showComments = true;
          this.btnText = 'Fold Comments';
          this.comments = comments;
        }
      );
    } else {
      this.showComments = false;
      this.btnText = 'See Comments';
      this.comments = [];
    }
  }

  toggleComment() {
    this.showComments = false;
    this.btnText = 'See Comments';
    this.editPost = false;
    if (!this.giveComment) {
      this.giveComment = true;
    } else {
      this.giveComment = false;
    }
  }

  toggleEdit() {
    this.showComments = false;
    this.btnText = 'See Comments';
    this.giveComment = false;
    if (!this.editPost) {
      this.editPost = true;
    } else {
      this.editPost = false;
    }
  }
}
