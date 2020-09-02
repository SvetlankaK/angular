import {Injectable} from '@angular/core';
import {User} from "../domain/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[] = [{
    login: 'kat17',
    password: 'драсте',
    email: 'cat1717@mail.ru',
    name: 'Анна',
    surname: 'Иванова', dateOfBirth: "11.11.1998"
  }, {
    login: 'leadss',
    password: 'fdeefe',
    email: 'liveliver@gmail.com',
    name: 'Максим',
    surname: 'Вешалкин',
    dateOfBirth: "11.05.1995"
  }];

  constructor() {
  }

  findAll(): User[] {
    return this.users;
  }
}
