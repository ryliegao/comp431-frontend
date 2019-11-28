import {
  Component,
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewContainerRef,
  EventEmitter,
  Output
} from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { User } from 'src/app/_models/user';
import { ImagepostComponent } from './imagepost/imagepost.component';
import { TextpostComponent } from './textpost/textpost.component';
import { UserComponent } from './user/user.component';
import { MainService } from './main.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [ ImagepostComponent, TextpostComponent, UserComponent ]
})
export class MainComponent implements OnInit, OnDestroy {
  @ViewChild('postContainer', { read: ViewContainerRef }) postContainer;
  @ViewChild('userContainer', { read: ViewContainerRef }) userContainer;
  @Output() eventEmitter = new EventEmitter();
  currentUser: User;
  users: User[] = [];
  footer: SafeHtml;
  content: string[] = [];
  image: string[] = [];
  searchText = '';
  addText = '';
  posts = [];
  post1Ref: ComponentRef<ImagepostComponent>;
  post2Ref: ComponentRef<TextpostComponent>;
  userRef: ComponentRef<UserComponent>;
  cleared = true;
  adding = false;
  lastFollowed = '';
  addSuccess = false;
  addMyself = false;
  addFailure = false;
  addAlreadyFollowing = false;
  nextID = 0;
  postText = '';
  private serviceSubscription;
  height = '40px';
  uploadedImage = '';

  constructor(
    private sanitizer: DomSanitizer,
    private resolver: ComponentFactoryResolver,
    private service: MainService
  ) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const text = '@Copyright: Rylie Gao<br/>' + new Date(Number(Date.now()));
    this.footer = this.sanitizer.bypassSecurityTrustHtml(text);

    this.serviceSubscription = this.service.onRemove.subscribe({
      next: (event: any) => {
        this.loadPosts();
      }
    });
  }

  ngOnInit() {
    this.loadUsers();
    this.loadPosts();
  }

  addFollowee() {
    this.addSuccess = false;
    this.addFailure = false;
    this.addMyself = false;
    this.addAlreadyFollowing = false;
    this.adding = true;
    if (this.addText === this.currentUser.email) {
      this.addMyself = true;
      return;
    } else if (this.service.followInfo.following.indexOf(this.addText) >= 0) {
      this.addAlreadyFollowing = true;
      return;
    }
    this.lastFollowed = this.addText;
    this.service.addFollowee(this.addText).then(
      newFollowee => {
        if (newFollowee) {
          this.addSuccess = true;
          this.addUser(newFollowee.username, newFollowee.displayname, newFollowee.avatar, newFollowee.status, false, 0);
          this.loadPosts();
        } else {
          this.addFailure = true;
        }
      }
    );
  }

  loadUsers() {
    this.service.loadUsers(this.currentUser.email).then(
      data => {
        this.service.getFolloweeInfo(data.following).then(
          infos => {
            for (let i = 0; i < infos.length; i++) {
              this.addUser(infos[i].username, infos[i].displayname, infos[i].avatar, infos[i].status, i === 0);
            }
          }
        );
      }
    );
  }

  loadPosts() {
    this.service.loadPosts().then(
      data => {
        this.posts = data;
        this.nextID = 0;
        for (let i = 0; i < data.length; i++) {
          // only clear former posts on entry
          if (data[i].author === this.currentUser.email) {
            this.nextID++;
          }
          if (data[i].image && data[i].image !== '') {
            this.createImagePost(data[i].id, data[i].author, data[i].content, data[i].image, i === 0);
          } else {
            this.createTextPost(data[i].id, data[i].author, data[i].content, i === 0);
          }
        }
      }
    );
  }

  search() {
    if (this.searchText === null || this.searchText === '') {
      if (!this.cleared) {
        this.cleared = true;
        this.loadPosts();
      }
      return;
    }
    this.cleared = false;
    let found = false;
    for (let i = 0; i < this.posts.length; i++) {
      const str = this.posts[i].content as string;
      if (str.toLowerCase().indexOf(this.searchText.toLowerCase()) >= 0) {
        this.createImagePost(
          this.posts[i].postID,
          this.posts[i].author,
          this.posts[i].content,
          this.posts[i].image,
          !found
        );
        found = true;
      }
    }
    if (!found) {
      this.postContainer.clear();
    }
  }

  makePost() {
    return this.service.uploadPost(this.postText, this.uploadedImage).then((res) => {
      if (res.articles.length > 0) {
        this.postText = '';
        this.uploadedImage = '';
        this.nextID++;
        return this.loadPosts();
      }
    });
  }

  createTextPost(
    postID: number,
    author: string,
    content: string,
    clear: boolean,
    index = this.postContainer.length
  ) {
    if (clear) {
      this.postContainer.clear();
      index = 0;
    }
    const factory: ComponentFactory<TextpostComponent> = this.resolver.resolveComponentFactory(TextpostComponent);
    this.post2Ref = this.postContainer.createComponent(factory, index);
    this.post2Ref.instance.postID = postID;
    this.post2Ref.instance.author = author;
    this.post2Ref.instance.content = content;
  }

  createImagePost(
    postID: number,
    author: string,
    content: string,
    image: string,
    clear: boolean,
    index = this.postContainer.length
  ) {
    if (clear) {
      this.postContainer.clear();
      index = 0;
    }
    const factory: ComponentFactory<ImagepostComponent> = this.resolver.resolveComponentFactory(ImagepostComponent);
    this.post1Ref = this.postContainer.createComponent(factory, index);
    this.post1Ref.instance.postID = postID;
    this.post1Ref.instance.author = author;
    this.post1Ref.instance.content = content;
    this.post1Ref.instance.image = image;
  }

  addUser(
    username: string,
    displayname: string,
    avatar: string,
    status: string,
    clear: boolean,
    index = this.userContainer.length
  ) {
    if (clear) {
      this.userContainer.clear();
    }
    const factory: ComponentFactory<UserComponent> = this.resolver.resolveComponentFactory(UserComponent);
    this.userRef = this.userContainer.createComponent(factory, index);
    this.userRef.instance.username = username;
    this.userRef.instance.displayname = displayname;
    this.userRef.instance.avatar = avatar;
    this.userRef.instance.status = status;
  }

  changeStatus(status: string) {
    this.service.changeStatus(status);
  }

  expandTextarea() {
    this.height = '100px';
  }

  closeTextarea() {
    this.height = '40px';
  }

  ngOnDestroy() {
    if (this.post1Ref) {
      this.post1Ref.destroy();
    }
    if (this.post2Ref) {
      this.post2Ref.destroy();
    }
  }

  processFile(imageInput) {
    console.log('Processing file');
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {
      const selectedFile = { src: event.target.result, file };
      this.service.uploadImage(selectedFile.file).subscribe(
        (res) => {
          console.log('SUCCESS: successfully uploaded a file');
          this.uploadedImage = res.url;
        },
        (err) => {
          console.log('ERROR: cannot upload file');
        });
    });
    reader.readAsDataURL(file);
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
