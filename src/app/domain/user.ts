export class User {
  login: string;
  password: string;
  name: string;
  surname: string;
  dateOfBirth: string;
  email: string;
  id: number;
  salary: number;
  role: string[];

  constructor(id: number, name: string, login: string, password: string, surname: string, dateOfBirth: string, email: string, salary: number, role: string[]) {
  }

}
