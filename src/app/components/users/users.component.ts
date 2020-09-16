import {Component, OnInit} from '@angular/core';
import {User} from '../../domain/user';
import {UserService} from '../../service/user.service';
import {AppComponent} from '../../app.component';
import {SelectItem} from 'primeng/api';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.less'],
  providers: [AppComponent]
})
export class UsersComponent implements OnInit {

  constructor(private service: UserService) {
  }

  users: User[];
  roles: SelectItem[];
  clonedUsers: { [s: string]: User; } = {};
  wait = false;

  ngOnInit(): void {
    this.roles = [{
      label: 'User',
      value: 'user'
    },
      {
        label: 'Admin',
        value: 'admin'
      }];
    this.loadUsers();
  }

  loadUsers(): void {
    this.users = this.service.findAll();
  }

  onRowEditInit(user: User) {
    this.clonedUsers[user.login] = {...user};
    console.log(this.clonedUsers);
  }

  onRowEditSave(user: User) {
    delete this.clonedUsers[user.login];
    this.service.update(user);
    this.loadUsers();
  }

  onRowEditCancel(user: User, index: number) {
    this.users[index] = this.clonedUsers[user.login];
    delete this.clonedUsers[user.login];
  }

  delete(user: User) {
    this.service.delete(user.id);
    this.loadUsers();
  }
}
