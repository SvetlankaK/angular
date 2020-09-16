import {Component, OnInit} from '@angular/core';
import {User} from "../../domain/user";
import {UserService} from "../../service/user.service";
import {AppComponent} from "../../app.component";

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
  users2: User[];
  clonedUsers: { [s: string]: User; } = {};
  wait = false;

  ngOnInit(): void {
    this.users = this.service.findAll();
    this.users2 = this.service.findAll();
  }

  onRowEditInit(user: User) {
    this.clonedUsers[user.id] = {...user};
  }

  onRowEditSave(user: User) {
    if (user.salary > 0) {
      let ind = this.users.indexOf(user);
      delete this.users[ind];
      this.users.push(user);
      delete this.clonedUsers[user.id];
    }
    this.wait = true;
    setTimeout(() => {
      this.wait = false;
    }, 2000);
  }

  onRowEditCancel(user: User, index: number) {
    this.users2[index] = this.clonedUsers[user.id];
    delete this.clonedUsers[user.id];
  }

  delete(user: User) {
    this.service.delete(user.id);
    let ind = this.users.indexOf(user);
    delete this.users[ind];

  }
}
