import {
  Component,
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { User } from 'src/app/_models/user';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Imagepost1Component } from './imagepost1/imagepost1.component';
import { Imagepost2Component } from './imagepost2/imagepost2.component';
import { UserComponent } from './user/user.component';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { StorageService } from 'src/app/_services';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [ Imagepost1Component, Imagepost2Component, UserComponent ]
})
export class MainComponent implements OnInit, OnDestroy {
  @ViewChild('postContainer', { read: ViewContainerRef }) postContainer;
  @ViewChild('userContainer', { read: ViewContainerRef }) userContainer;
  currentUser: User;
  users: User[] = [];
  footer: SafeHtml;
  content: string[] = [];
  image: string[] = [];
  searchText = '';
  data = {};
  post1Ref: ComponentRef<Imagepost1Component>;
  post2Ref: ComponentRef<Imagepost2Component>;
  userRef: ComponentRef<UserComponent>;
  cleared = true;
  beginningPost = true;
  endingPost = true;
  postText: string;
  defaultImage = 'assets/images/default-img.jpg';
  defaultAvatar = 'assets/images/mack-joyner.jpg';

  constructor(
    private sanitizer: DomSanitizer,
    private httpService: HttpClient,
    private storageService: StorageService,
    private resolver: ComponentFactoryResolver) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const text = '@Copyright: Rylie Gao<br/>' + new Date(Number(Date.now()));
    this.footer = this.sanitizer.bypassSecurityTrustHtml(text);
  }

  ngOnInit() {
    this.loadPosts();
    this.loadUsers();
  }

  private loadPosts() {
    this.httpService.get('assets/posts.json').subscribe(
      data => {
        this.data = data;
        let i = 0;
        while (data[i]) {
          // only clear former posts on entry
          this.createPost(data[i].content, data[i].image, i === 0);
          i++;
        }
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }

  private loadUsers() {
    this.httpService.get('assets/users.json').subscribe(
      data => {
        let i = 0;
        while (data[i]) {
          // only clear former users on entry
          this.addUser(data[i].username, data[i].image, i === 0);
          i++;
        }
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
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
    let i = 0;
    let found = false;
    while (this.data[i]) {
      const str = this.data[i].content as string;
      if (str.toLowerCase().indexOf(this.searchText.toLowerCase()) >= 0) {
        this.createPost(this.data[i].content, this.data[i].image, true);
        found = true;
      }
      i++;
    }
    if (!found) {
      this.postContainer.clear();
    }
  }

  createPost(content: string, image: string, clear: boolean, index = this.postContainer.length) {
    if (clear) {
      this.postContainer.clear();
      index = 0;
    }

    const factory: ComponentFactory<Imagepost1Component> = this.resolver.resolveComponentFactory(Imagepost1Component);
    this.post1Ref = this.postContainer.createComponent(factory, index);
    this.post1Ref.instance.content = content;
    this.post1Ref.instance.image = image;

    // if ((isAdding && this.beginningPost) || this.endingPost) {
    //   const factory: ComponentFactory<Imagepost1Component> = this.resolver.resolveComponentFactory(Imagepost1Component);
    //   this.post1Ref = this.postContainer.createComponent(factory, index);
    //   this.post1Ref.instance.content = content;
    //   this.post1Ref.instance.image = image;
    // } else {
    //   const factory: ComponentFactory<Imagepost2Component> = this.resolver.resolveComponentFactory(Imagepost2Component);
    //   this.post2Ref = this.postContainer.createComponent(factory, index);
    //   this.post2Ref.instance.content = content;
    //   this.post2Ref.instance.image = image;
    //   if (!this.endingPost) {
    //     this.endingPost = true;
    //   } else if () {
    //     this.endingPost = false;
    //   }
    // }
  }

  addUser(username: string, image: string, clear: boolean, index = this.userContainer.length) {
    if (clear) {
      this.userContainer.clear();
    }
    const factory: ComponentFactory<UserComponent> = this.resolver.resolveComponentFactory(UserComponent);
    this.userRef = this.userContainer.createComponent(factory, index);
    this.userRef.instance.username = username;
    this.userRef.instance.image = image;
  }

  changeStatus(status: string) {
    try {
      let newUser;
      if (localStorage.getItem('currentUser')) {
        const user: User = JSON.parse(localStorage.getItem('currentUser'));
        newUser = new User(
          user.username,
          user.displayname,
          user.email,
          user.phone,
          user.birthday,
          user.zipcode,
          user.password,
          user.loggedin,
          status
        );
        localStorage.setItem('currentUser', JSON.stringify(newUser));
        this.storageService.setItem(status);
      } else {
        newUser = new User(
          '',
          'Default Name',
          '',
          '',
          null,
          '',
          '',
          true,
          status
        );
      }
      localStorage.setItem('currentUser', JSON.stringify(newUser));
      this.storageService.setItem(status);
    } catch (e) {
      console.log('This browser does not support local storage.');
    }
  }

  ngOnDestroy() {
    if (this.post1Ref) {
      this.post1Ref.destroy();
    }
    if (this.post2Ref) {
      this.post2Ref.destroy();
    }
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
