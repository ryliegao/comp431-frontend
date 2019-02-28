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

  constructor(
    private sanitizer: DomSanitizer,
    private httpService: HttpClient,
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

  private createPost(content: string, image: string, clear: boolean) {
    if (clear) {
      this.container.clear();
    }
    const factory: ComponentFactory<Imagepost1Component> = this.resolver.resolveComponentFactory(Imagepost1Component);
    this.componentRef = this.container.createComponent(factory);
    this.componentRef.instance.content = content;
    this.componentRef.instance.image = image;
  }

  ngOnDestroy() {
    this.componentRef.destroy();
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
