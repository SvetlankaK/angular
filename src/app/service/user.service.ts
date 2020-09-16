import {EventEmitter, Injectable} from '@angular/core';
import {User} from '../domain/user';

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
    role: ['user'],
    salary: 100
  }, {
    id: 2,
    login: 'leadss',
    password: 'fdeefe',
    email: 'liveliver@gmail.com',
    name: 'Максим',
    surname: 'Вешалкин',
    dateOfBirth: "11.05.1995",
    role: ['user'],
    salary: 100
  }, {
    id: 3,
    login: 'Sveta',
    password: 'gfhjkm',
    email: 'svetlanka@gmail.com',
    name: 'Света',
    surname: 'Кветко',
    dateOfBirth: '04.06.2000',
    role: ['user', 'admin'],
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
      salary: 2000,
      role: ['user', 'admin'],
    }, {
      id: 5,
      login: 'gerald',
      password: 'gddsssm',
      email: 'fiiklo@gmail.com',
      name: 'Грегорий',
      surname: 'Навицкий',
      dateOfBirth: '17.05.1992',
      role: ['user'],
      salary: 1222
    }, {
      id: 6,
      login: 'hello',
      password: 'world',
      email: 'sggOllas@gmail.com',
      name: 'Варя',
      surname: 'Колесникович',
      dateOfBirth: '11.01.1990',
      role: ['user'],
      salary: 1999
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

  update(user: User) {
    let u = this.getById(user.id);
    let ind = this.users.indexOf(u);
    this.users[ind] = user;
  }

  delete(id: number) {
    this.users = this.users.filter(user => user.id !== id);
  }

  generateId() {
    return this.users.length + 1;
  }
}
