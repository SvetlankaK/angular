import {Injectable} from '@angular/core';
import {User} from "../domain/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[] = [{
    id: 1,
    login: 'kat17',
    password: 'драсте',
    email: 'cat1717@mail.ru',
    name: 'Анна',
    surname: 'Иванова', dateOfBirth: "11.11.1998",
    salary: 100
  }, {
    id: 2,
    login: 'leadss',
    password: 'fdeefe',
    email: 'liveliver@gmail.com',
    name: 'Максим',
    surname: 'Вешалкин',
    dateOfBirth: "11.05.1995",
    salary: 100
  }, {
    id: 3,
    login: 'Sveta',
    password: 'gfhjkm',
    email: 'svetlanka@gmail.com',
    name: 'Света',
    surname: 'Кветк0',
    dateOfBirth: '04.06.2000',
    salary: 100
  },
    {
      id: 4,
      login: 'Max',
      password: 'qwe456',
      email: 'maksiik@gmail.com',
      name: 'Максим',
      surname: 'Ворошилов',
      dateOfBirth: '17.02.1998',
      salary: 2000
    }];

  constructor() {
  }

  findAll(): User[] {
    return this.users;
  }

  getById(id: number) {
    return this.users.find(user => user.id == id);
  }

  getByLogin(login: string) {
    return this.users.find(user => user.login == login);
  }

  register(user: User) {
    return this.users.push(user);
  }

  update(user: User, id: number) {
    let u = this.getById(id);
    let ind = this.users.indexOf(u);
    delete this.users[ind];
    this.users.push(user);
  }

  delete(id: number) {
    let user = this.users.find(user => user.id == id);
    let ind = this.users.indexOf(user);
    delete this.users[ind];
  }
}
