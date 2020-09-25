import {Injectable} from '@angular/core';
import {User} from '../domain/user';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private http: HttpClient) {
  }

  findAll(): Observable<User[]> {
    return this.http.get<User[]>(`http://localhost:8090/users`).pipe();
  }

  getById(userId: number): Observable<User> {
    return this.http.get<User>(`http://localhost:8090/users/${userId}`);
  }

  getByLogin(userLogin: string): Observable<User> {
    return this.http.get<User>(`http://localhost:8090/users/login/${userLogin}`);
  }

  register(user: User): Observable<User> {
    return this.http.post<User>(`http://localhost:8090/register/`, user);
  }

  update(user: User): Observable<User> {
    let id = user.userId;
    return this.http.put<User>(`http://localhost:8090/users/${id}`, user);
  }

  delete(userId: number): Observable<void> {
    return this.http.delete<void>(`http://localhost:8090/users/${userId}`);
  }

}
