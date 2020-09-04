import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { RegistrationComponent } from './components/registration/registration.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { UsersComponent } from './components/users/users.component';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    WelcomeComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
