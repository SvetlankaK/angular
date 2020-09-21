import {Injectable} from '@angular/core';
import {User} from '../domain/user';
import {HttpClient} from "@angular/common/http";
import {Observable, Subscription} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[];

  constructor(private http: HttpClient) {
  }

  findAll(): User[] {
    this.http.get<User[]>(`http://localhost:8090/users`).subscribe(data => this.users = data);
    console.log(this.users);
    return this.users;
    // subscribe((data: User[]) => {
    //     this.users = data;
    //   },
    //   error => {
    //     console.log(error);
    //   });
  }

  getById(userId: number): Observable<User> {
    return this.http.get<User>(`http://localhost:8090/users/${userId}`);
  }

  getByLogin(userLogin: string): Observable<User> {
    return this.http.get<User>(`http://localhost:8090/?userLogin=${userLogin}`);
  }

  register(user: User): Observable<User> {
    return this.http.post<User>(`http://localhost:8090/users/`, user);
  }

  update(user: User): Observable<User> {
    let id = user.userId;
    return this.http.put<User>(`http://localhost:8090/users/${id}`, user);
  }

  delete(userId: number): Observable<User> {
    return this.http.delete<User>(`http://localhost:8090/users/${userId}`);
  }

}
