import {Component, OnInit} from '@angular/core';
import {User} from '../../domain/user';
import {UserService} from '../../service/user.service';
import {AppComponent} from '../../app.component';
import {SelectItem} from 'primeng/api';
import {RoleService} from '../../service/role.service';
import {Role} from '../../domain/role';
import { FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.less'],
  providers: [AppComponent]
})
export class UsersComponent implements OnInit {

  constructor(private userService: UserService, private roleService: RoleService, private fb: FormBuilder) {
  }

  users: User[];
  rolesOptions: SelectItem[] = [];
  allRoles: Role[];
  clonedUsers: { [s: string]: User; } = {};
  // userTable: FormGroup;


  ngOnInit(): void {
    this.roleService.findAll().subscribe(
      value => {
        this.allRoles = value;
        value.forEach(role => {
          this.rolesOptions.push({
            value: role.roleName,
            label: role.roleName
          });
        });
      }
    );
    this.loadUsers();
  }


  // initiateForm(): FormGroup {
  //   return this.fb.group({
  //     name: ['', Validators.required, Validators.maxLength(20)],
  //     surname: ['', [Validators.required, Validators.maxLength(20)]],
  //     email: ['', [Validators.required, Validators.email,]],
  //     salary: ['', [Validators.required, Validators.maxLength(10)]],
  //     birthday: ['', [Validators.required]]
  //   });
  // }
  //
  // get getFormControls() {
  //   const control = this.userTable.get('tableRows') as FormArray;
  //   return control;
  // }

  loadUsers(): void {
    this.userService.findAll().subscribe(data => {
      data.forEach(user => {
        user.roleValues = [];
        user.role.forEach(role =>
          user.roleValues.push(role.roleName)
        );
      });
      this.users = data;
    });
  }

  onRowEditInit(user: User) {
    this.clonedUsers[user.userLogin] = {...user};
  }

  onRowEditSave(user: User) {
    delete this.clonedUsers[user.userLogin];
    user.role = this.allRoles.filter(role => user.roleValues.includes(role.roleName));
    this.userService.update(user).subscribe(
      value => this.loadUsers()
    );
  }

  onRowEditCancel(user: User, index: number) {
    this.users[index] = this.clonedUsers[user.userLogin];
    delete this.clonedUsers[user.userLogin];
  }

  delete(user: User) {
    this.userService.delete(user.userId).subscribe(
      value => this.loadUsers()
    );
  }
}
