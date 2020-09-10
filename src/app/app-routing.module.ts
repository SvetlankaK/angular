import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {RegistrationComponent} from "./components/registration/registration.component";
import {WelcomeComponent} from "./components/welcome/welcome.component";
import {BrowserModule} from "@angular/platform-browser";
import {UsersComponent} from "./components/users/users.component";
import {ErrorComponent} from "./components/error/error.component";
import {AppComponent} from "./app.component";

const commonTemplateRoutes: Routes = [
  {path: 'welcome/:login', component:AppComponent},
  {path: 'users', component: UsersComponent},
];

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'welcome/:login', component: WelcomeComponent, children: commonTemplateRoutes},
  {path: 'users', component: UsersComponent},
  {path: 'error/:type', component: ErrorComponent},
  {path: '**', redirectTo: 'login'}
];
export const routing = RouterModule.forRoot(routes);

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  bootstrap: [LoginComponent]
})
export class AppRoutingModule {
}

