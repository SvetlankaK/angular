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

  ngOnInit(): void {
    this.appComponent.commonTemplate = true;
    this.appComponent.usersPage = true;
    this.users = this.service.findAll();
  }

}
