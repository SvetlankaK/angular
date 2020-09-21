import {Role} from "./role";

export class User {
  userLogin: string;
  password: string;
  name: string;
  surname: string;
  dateOfBirth: string;
  email: string;
  userId: number;
  salary: number;
  role: Role[];

  constructor(id: number, name: string, userLogin: string, password: string, surname: string, dateOfBirth: string, email: string, salary: number, role: Role[]) {
  }

}
