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
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { StorageService } from 'src/app/_services';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [ Imagepost1Component, Imagepost2Component ]
})
export class MainComponent implements OnInit, OnDestroy {
  @ViewChild('postContainer', { read: ViewContainerRef }) container;
  currentUser: User;
  users: User[] = [];
  footer: SafeHtml;
  content: string[] = [];
  image: string[] = [];
  searchText = '';
  data = {};
  componentRef: ComponentRef<Imagepost1Component>;
  cleared = true;
  postText: string;
  defaultImage = 'assets/images/default-img.jpg';

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

  private loadUsers() { }

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
      this.container.clear();
    }
  }

  private createPost(content: string, image: string, clear: boolean, index = this.container.length) {
    let check: boolean;
    if (this.container.length === 0 || clear) {
      this.container.clear();
      check = true;
    } else {
      check = index === 0;
    }
    if (check) {
      const factory: ComponentFactory<Imagepost1Component> = this.resolver.resolveComponentFactory(Imagepost1Component);
      this.componentRef = this.container.createComponent(factory, index);
    } else {
      const factory: ComponentFactory<Imagepost2Component> = this.resolver.resolveComponentFactory(Imagepost2Component);
      this.componentRef = this.container.createComponent(factory, index);
    }
    this.componentRef.instance.content = content;
    this.componentRef.instance.image = image;
  }

  changeStatus(status: string) {
    try {
      if (localStorage.getItem('currentUser')) {
        const user: User = JSON.parse(localStorage.getItem('currentUser'));
        const newUser = new User(
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
      }
    } catch (e) {
      console.log('This browser does not support local storage.');
    }
  }

  ngOnDestroy() {
    if (this.componentRef) {
      this.componentRef.destroy();
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
