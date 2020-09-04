import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {RegistrationComponent} from "./components/registration/registration.component";
import {WelcomeComponent} from "./components/welcome/welcome.component";
import {BrowserModule} from "@angular/platform-browser";


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'welcome', component: WelcomeComponent},
  {path: '', redirectTo: 'login'},//todo не работает
  // otherwise redirect to home
  {path: '**', redirectTo: 'login'}
];
export const routing = RouterModule.forRoot(routes);

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  bootstrap: [LoginComponent]
})
export class AppRoutingModule {
}

// <div *ngFor="let user of users">{{user.login}}</div>
// login : <input [(ngModel)]="newUserLogin"> <button (click)="addUser()">add</button>
//   </div>
// <div>Name: {{name}}</div>
// <button (click)="name = 'bye world'">change name</button>
// <div>Input: <input [(ngModel)]="name"></div>
