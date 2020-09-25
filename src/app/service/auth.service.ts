import {Injectable} from '@angular/core';
import {User} from '../domain/user';
import {UserService} from './user.service';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedUser: User = null;


  constructor(private userService: UserService, private http: HttpClient) {
  }

  get token(): string {
    return localStorage.getItem('token')
  }

  login(userLogin: string, password: string): Observable<boolean> {
    return this.http.post<any>(`http://localhost:8090/api/auth/signin`, {password, userLogin}).pipe(map(resp => {
        localStorage.setItem('token', resp.token);
        console.log(resp)
        this.loggedUser.role = [];
        this.loggedUser.role = [{roleName: resp.role}];
        this.loggedUser.userLogin = resp.userLogin;
        this.loggedUser.name = resp.name;
        console.log(this.loggedUser)
        return true;
      }
    ))
  }

  logout(): void {
    localStorage.removeItem('token');
    this.loggedUser = null;
  }

  isLoggedIn(): boolean {
    return (localStorage.getItem('token') !== null);
  }

  isAdmin(): boolean {
    return this.isLoggedIn() && this.loggedUser.role.filter(value => value.roleName === 'admin').length > 0;
  }


}

