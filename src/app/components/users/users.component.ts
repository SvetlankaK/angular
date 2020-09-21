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
    this.service.findAll().subscribe(data => this.users = data);
  }

  onRowEditInit(user: User) {
    this.clonedUsers[user.userLogin] = {...user};
    console.log(this.clonedUsers);
  }

  onRowEditSave(user: User) {
    delete this.clonedUsers[user.userLogin];
    this.service.update(user);
    this.loadUsers();
  }

  onRowEditCancel(user: User, index: number) {
    this.users[index] = this.clonedUsers[user.userLogin];
    delete this.clonedUsers[user.userLogin];
  }

  delete(user: User) {
    this.service.delete(user.userId);
    this.loadUsers();
  }
}
