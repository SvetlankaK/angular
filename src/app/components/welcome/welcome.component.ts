import {Component, OnInit} from '@angular/core';
import {User} from "../../domain/user";
import {AppComponent} from "../../app.component";



@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.less'],
  providers: [AppComponent]
})
export class WelcomeComponent implements OnInit {

  currentUser: User;
  login: string;
  constructor() {
  }

  ngOnInit(): void {
    if (localStorage.getItem("loggedIn") === "true") {
      let user = JSON.parse(localStorage.getItem("user"));
      this.login = user.userLogin;
      if (user.role == "admin") {
      }
    }
  }

}
