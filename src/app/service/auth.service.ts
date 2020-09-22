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

  login(userLogin: string, password: string): boolean {
    this.userService.getByLogin(userLogin).subscribe(user => this.temporaryUser = user, error => {
      console.log(error)
    });
    console.log(this.temporaryUser);
    if (this.temporaryUser.password === password) {
      this.loggedUser = this.temporaryUser;
      return true;
    } else {
      return false;
    }
  }

  // login(userLogin: string, password: string): boolean {
  //   let p = new Promise<User>((resolve, reject) => {
  //     this.userService.getByLogin(userLogin).subscribe(data => {
  //       resolve(data);
  //       console.log(data+"before check pass")
  //     });
  //   }).then(data => this.temporaryUser = data).then(data => {
  //     if (this.temporaryUser.password === password) {
  //       this.loggedUser = this.temporaryUser;
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   });
  //   return false;
  // }
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
