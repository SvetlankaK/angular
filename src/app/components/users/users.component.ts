import {Component, OnInit} from '@angular/core';
import {User} from "../../domain/user";
import {UserService} from "../../service/user.service";
import {AppComponent} from "../../app.component";
import {SharedService} from "../../service/shared.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.less'],
  providers: [AppComponent]
})
export class UsersComponent implements OnInit {

  constructor(private service: UserService, private sService: SharedService) {
  }

  users: User[];
  users2: User[];
  clonedUsers: { [s: string]: User; } = {};

  ngOnInit(): void {
    this.sService.onAppCommonTemplate.emit(true);
    this.sService.onAppUsersTemplate.emit(true);
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
