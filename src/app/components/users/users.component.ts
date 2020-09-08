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

  constructor(private service: UserService, private appComponent: AppComponent) {
  }

  users: User[];
  users2: User[];
  clonedUsers: { [s: string]: User; } = {};

  ngOnInit(): void {
    this.appComponent.commonTemplate = true;
    this.appComponent.usersPage = true;
    this.users = this.service.findAll();
    this.users2 = this.service.findAll();
  }

  onRowEditInit(user: User) {
    this.clonedUsers[user.id] = {...user};
  }

  onRowEditSave(user: User) {
    if (user.salary > 0) {
      //todo мои попытки в удаление/измнение инфы, но если их раскомментить, она не только не меняется, но и юай ломается

      // this.service.update(user, user.id);
      // let ind = this.users.indexOf(user);
      // delete this.users[ind];
      // this.users.push(user);
      delete this.clonedUsers[user.id];
    }
  }

  onRowEditCancel(user: User, index: number) {
    this.users2[index] = this.clonedUsers[user.id];
    delete this.clonedUsers[user.id];
  }

//todo не понимаю, удаляется ли тут юзер, например. ибо там странно на юае ломается эта строчка. возможно так потому что оно удалило, но нормально отрисовать не может
  delete(user: User) {
    this.service.delete(user.id);
    let ind = this.users.indexOf(user);
    delete this.users[ind];
  }
}
