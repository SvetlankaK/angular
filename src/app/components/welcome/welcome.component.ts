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
      this.currentUser = JSON.parse(localStorage.getItem("user"));
      console.log(this.currentUser.login);
      this.login = this.currentUser.login;
    }
  }

}
