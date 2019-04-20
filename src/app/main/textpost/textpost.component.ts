import { Component, Input, OnInit, NgZone } from '@angular/core';
import { MainService } from 'src/app/main/main.service';

@Component({
  selector: 'app-textpost',
  templateUrl: './textpost.component.html',
  styleUrls: ['./textpost.component.css']
})
export class TextpostComponent implements OnInit {
  @Input() postID: number;
  @Input() author: string;
  @Input() content: string;
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
    this.giveComment = !this.giveComment;
  }

  toggleEdit() {
    this.showComments = false;
    this.btnText = 'See Comments';
    this.giveComment = false;
    this.editPost = !this.editPost;
  }
}

