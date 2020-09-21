export class User {
  userLogin: string;
  password: string;
  name: string;
  surname: string;
  dateOfBirth: string;
  email: string;
  userId: number;
  salary: number;
  role: string[];

  constructor(id: number, name: string, userLogin: string, password: string, surname: string, dateOfBirth: string, email: string, salary: number, role: string[]) {
  }

}
