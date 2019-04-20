import { Component, Input, OnInit } from '@angular/core';
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
  comments = [];
  showComments = false;
  giveComment = false;
  editPost = false;
  btnText = 'See Comments';

  constructor(private service: MainService) {}

  ngOnInit() { }

  loadComments() {
    this.giveComment = false;
    this.editPost = false;
    if (!this.showComments) {
      this.service.loadComments(this.author, this.postID).then(
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

  writeComment() {
    this.showComments = false;
    this.editPost = false;
    if (!this.giveComment) {
      this.giveComment = true;
    } else {
      this.giveComment = false;
    }
  }

  rewritePost() {
    this.showComments = false;
    this.giveComment = false;
    if (!this.editPost) {
      this.editPost = true;
    } else {
      this.editPost = false;
    }
  }
}
