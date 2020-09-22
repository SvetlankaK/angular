import {Injectable} from '@angular/core';
import {User} from '../domain/user';
import {UserService} from './user.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedUser: User = null;


  constructor(private userService: UserService) {
  }

  login(userLogin: string, password: string): Observable<boolean> {
    return this.userService.getByLogin(userLogin).pipe(map(user => {
        console.log(user);
        this.loggedUser = user;
        if (user.userLogin === userLogin && user.password === password) {
          return true;
        }
        return false;
    }
    ));
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
