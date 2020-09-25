import {Role} from "./role";

export class User {
  userLogin: string;
  password?: string;
  name: string;
  surname?: string;
  dateOfBirth?: string;
  email?: string;
  userId: number;
  salary?: number;
  role: Role[];
  roleValues?: string[];
  token?: string;

  constructor(id: number, name: string, userLogin: string,  role: Role[]) {
  }

}
