export class User {

  // public getLogin(): string {
  //   return this.login;
  // }
  //
  // public setLogin(value: string) {
  //   this.login = value;
  // }
  //
  // public getPassword(): string {
  //   return this.password;
  // }
  //
  // public setPassword(value: string) {
  //   this.password = value;
  // }
  //
  // public getName(): string {
  //   return this.name;
  // }
  //
  // public setName(value: string) {
  //   this.name = value;
  // }
  //
  // public getSurname(): string {
  //   return this.surname;
  // }
  //
  // public setSurname(value: string) {
  //   this.surname = value;
  // }
  //
  // public getDateOfBirth(): string {
  //   return this.dateOfBirth;
  // }
  //
  // public setDateOfBirth(value: string) {
  //   this.dateOfBirth = value;
  // }
  //
  // public getEmail(): string {
  //   return this.email;
  // }
  //
  // public setEmail(value: string) {
  //   this.email = value;
  // }
  //
  // public getId(): number {
  //   return this.id;
  // }
  //
  // public setId(value: number) {
  //   this.id = value;
  // }
  //
  // public getSalary(): number {
  //   return this.salary;
  // }
  //
  // public setSalary(value: number) {
  //   this.salary = value;
  // }

  login: string;
  password: string;
  name: string;
  surname: string;
  dateOfBirth: string;
  email: string;
  id: number;
  salary: number;
  role:string;



  constructor(id: number, name: string, login: string, password: string, surname: string, dateOfBirth: string, email: string, salary: number, role:string) {
  }

}
