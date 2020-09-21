import {Injectable} from '@angular/core';
import {User} from '../domain/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[] = [{
    userId: 1,
    userLogin: 'kat',
    password: 'pass',
    email: 'cat1717@mail.ru',
    name: 'Анна',
    surname: 'Иванова', dateOfBirth: "11.11.1998",
    role: ['user'],
    salary: 100
  }, {
    userId: 2,
    userLogin: 'leadss',
    password: 'fdeefe',
    email: 'liveliver@gmail.com',
    name: 'Максим',
    surname: 'Вешалкин',
    dateOfBirth: "11.05.1995",
    role: ['user'],
    salary: 100
  }, {
    userId: 3,
    userLogin: 'Sveta',
    password: 'gfhjkm',
    email: 'svetla@gmail.com',
    name: 'Света',
    surname: 'Кветко',
    dateOfBirth: '04.06.2000',
    role: ['user', 'admin'],
    salary: 100
  },
    {
      userId: 4,
      userLogin: 'Max',
      password: 'qwe456',
      email: 'maksiik@gmail.com',
      name: 'Максим',
      surname: 'Ворошилов',
      dateOfBirth: '17.02.1998',
      salary: 2000,
      role: ['user', 'admin'],
    }, {
      userId: 5,
      userLogin: 'gerald',
      password: 'gddsssm',
      email: 'fiiklo@gmail.com',
      name: 'Грегорий',
      surname: 'Навицкий',
      dateOfBirth: '17.05.1992',
      role: ['user'],
      salary: 1222
    }, {
      userId: 6,
      userLogin: 'hello',
      password: 'world',
      email: 'sgas@gmail.com',
      name: 'Варя',
      surname: 'Фоминова',
      dateOfBirth: '11.01.1990',
      role: ['user'],
      salary: 1999
    }];

  constructor() {
  }

  findAll(): User[] {
    return this.users;
  }

  getById(userId: number) {
    return this.users.find(user => user.userId == userId);
  }

  getByLogin(userLogin: string) {
    return this.users.find(user => user.userLogin == userLogin);
  }

  register(user: User) {
    return this.users.push(user);
  }

  update(user: User) {
    let u = this.getById(user.userId);
    let ind = this.users.indexOf(u);
    this.users[ind] = user;
  }

  delete(userId: number) {
    this.users = this.users.filter(user => user.userId !== userId);
  }

  generateId() {
    return this.users.length + 1;
  }
}
