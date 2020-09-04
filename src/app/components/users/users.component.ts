import {Component, OnInit} from '@angular/core';
import {User} from "../../domain/user";
import {UserService} from "../../service/user.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.less']
})
export class UsersComponent implements OnInit {

  constructor(private service: UserService) {
  }

  users: User[];
  commonTemplate = true;

  ngOnInit(): void {
    this.users = this.service.findAll();

  }

}
