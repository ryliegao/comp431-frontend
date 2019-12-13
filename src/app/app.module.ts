import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AlertService, AuthenticationService, StorageService, GlobalService } from 'src/app/_services';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from 'src/app/_guards';
import { MainComponent } from 'src/app/main/main.component';
import { ProfileComponent } from 'src/app/profile/profile.component';
import { LoginComponent } from 'src/app/auth/login/login.component';
import { RegisterComponent } from 'src/app/auth/register/register.component';
import { HeaderComponent } from 'src/app/header/header.component';
import { UserComponent } from 'src/app/main/user/user.component';
import { ImagepostComponent } from 'src/app/main/imagepost/imagepost.component';
import { TextpostComponent } from 'src/app/main/textpost/textpost.component';
import { MainDirective } from 'src/app/main/main.directive';
import { ProfileDirective } from "src/app/profile/profile.directive";

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    AuthComponent,
    UserComponent,
    ImagepostComponent,
    TextpostComponent,
    MainComponent,
    ProfileComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    MainDirective,
    ProfileDirective
  ],
  providers: [
    AuthGuard,
    AlertService,
    AuthenticationService,
    GlobalService,
    StorageService,
    MainComponent
  ],
  entryComponents: [ ImagepostComponent, TextpostComponent, UserComponent ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
