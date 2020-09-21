import {Injectable} from '@angular/core';
import {User} from '../domain/user';
import {UserService} from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedUser: User = null;

  constructor(private userService: UserService) {
    console.log(userService)
  }


  login(userLogin: string, password: string): boolean {
    const user = this.userService.getByLogin(userLogin);
    if (user != null && user.password === password) {
      this.loggedUser = user;
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
    return this.isLoggedIn() && this.loggedUser.role.filter(value => value === 'admin').length > 0;
  }
}
