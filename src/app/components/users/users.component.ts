import {Component, OnInit} from '@angular/core';
import {User} from '../../domain/user';
import {UserService} from '../../service/user.service';
import {AppComponent} from '../../app.component';
import {SelectItem} from 'primeng/api';
import {RoleService} from '../../service/role.service';
import {Role} from '../../domain/role';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.less'],
  providers: [AppComponent]
})
export class UsersComponent implements OnInit {

  constructor(private userService: UserService, private roleService: RoleService) {
  }

  users: User[];
  rolesOptions: SelectItem[] = [];
  allRoles: Role[];
  clonedUsers: { [s: string]: User; } = {};


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
