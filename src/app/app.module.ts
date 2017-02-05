import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { PasswordStrengthBar } from 'ng2-password-strength-bar';

import {  AuthGuard } from './auth.service';
import {  routes } from './app.routes';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';
import { SignupComponent } from './signup/signup.component';
import { MembersComponent } from './members/members.component';

export const firebaseConfig = {
  apiKey: "AIzaSyBVu8MySF8zLkgqai5bd89L9eDGCiIznXw",
  authDomain: "login-auth-ba43c.firebaseapp.com",
  databaseURL: "https://login-auth-ba43c.firebaseio.com",
  storageBucket: "login-auth-ba43c.appspot.com",
  messagingSenderId: "335881348823"
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmailComponent,
    SignupComponent,
    MembersComponent,
    PasswordStrengthBar
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    routes
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {

}
