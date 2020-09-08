import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {RegistrationComponent} from "./components/registration/registration.component";
import {WelcomeComponent} from "./components/welcome/welcome.component";
import {BrowserModule} from "@angular/platform-browser";
import {UsersComponent} from "./components/users/users.component";


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'welcome/:login', component: WelcomeComponent},
  {path: 'users', component: UsersComponent},
  // todo не работает ни один редирект, например то, что ниже:

  //  {path: '', redirectTo: 'login'},не работает

  {path: '**', redirectTo: 'login'}
];
export const routing = RouterModule.forRoot(routes);

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  bootstrap: [LoginComponent]
})
export class AppRoutingModule {
}

