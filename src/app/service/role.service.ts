import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Role} from '../domain/role';

@Injectable({
  providedIn: 'root'
})
export class RoleService {


  constructor(private http: HttpClient) {
  }

  findAll(): Observable<Role[]> {
    return this.http.get<Role[]>(`http://localhost:8090/roles`).pipe();
  }

}
