import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AlertComponent } from 'src/app/_directives';
import { AuthGuard } from 'src/app/_guards';
import { JwtInterceptor, ErrorInterceptor } from 'src/app/_helpers';
import { AlertService, AuthenticationService, StorageService } from 'src/app/_services';
import { fakeBackendProvider } from 'src/app/_helpers';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { MainComponent } from 'src/app/main/main.component';
import { ProfileComponent } from 'src/app/profile/profile.component';
import { LoginComponent } from 'src/app/auth/login/login.component';
import { RegisterComponent } from 'src/app/auth/register/register.component';
import { HeaderComponent } from 'src/app/header/header.component';
import { UserComponent } from 'src/app/main/user/user.component';
import { Imagepost1Component } from 'src/app/main/imagepost1/imagepost1.component';
import { Imagepost2Component } from 'src/app/main/imagepost2/imagepost2.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    AlertComponent,
    AuthComponent,
    UserComponent,
    Imagepost1Component,
    Imagepost2Component,
    MainComponent,
    ProfileComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent
  ],
  providers: [
    AuthGuard,
    AlertService,
    AuthenticationService,
    StorageService,
    MainComponent,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider
  ],
  entryComponents: [ Imagepost1Component, Imagepost2Component, UserComponent ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
