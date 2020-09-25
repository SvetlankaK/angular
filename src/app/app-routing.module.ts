import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {RegistrationComponent} from "./components/registration/registration.component";
import {WelcomeComponent} from "./components/welcome/welcome.component";
import {BrowserModule} from "@angular/platform-browser";
import {UsersComponent} from "./components/users/users.component";
import {ErrorComponent} from "./components/error/error.component";
import {LogoutComponent} from './components/logout/logout.component';
import {AuthorizedGuard} from './service/authorized.guard';
import {AdminGuard} from './service/admin.guard';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'welcome', component: WelcomeComponent, canActivate: [AuthorizedGuard]},
  {path: 'users', component: UsersComponent, canActivate: [AuthorizedGuard, AdminGuard]},
  {path: 'error/:type', component: ErrorComponent},
  {path: '**', redirectTo: 'error/404'}
];
export const routing = RouterModule.forRoot(routes);

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  bootstrap: [LoginComponent]
})
export class AppRoutingModule {
}

