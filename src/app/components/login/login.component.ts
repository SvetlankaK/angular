import { Component, OnInit } from '@angular/core';
import {User} from "../../domain/user";
import {UserService} from "../../service/user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  name: string;
  users: User[] = [];
  newUserLogin = '';

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.users = this.userService.findAll();
  }


}
