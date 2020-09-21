import {Injectable} from '@angular/core';
import {User} from '../domain/user';
import {UserService} from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedUser: User = null;
  temporaryUser: User = null;

  constructor(private userService: UserService) {

  }


  async login(userLogin: string, password: string): Promise<Promise<boolean> | boolean>{
    await this.userService.getByLogin(userLogin).subscribe(user => this.temporaryUser = user);
    console.log(this.temporaryUser);
    if (this.temporaryUser.password === password) {
      this.loggedUser = this.temporaryUser;
      return true;
    } else {
      return false;
    }
  }

  logout(): void {
    this.loggedUser = null;
  }

  isLoggedIn(): boolean {
    if (this.loggedUser) {
      return true;
    } else {
      return false;
    }
  }

  isAdmin(): boolean {
    return this.isLoggedIn() && this.loggedUser.role.filter(value => value.roleName === 'admin').length > 0;
  }
}
