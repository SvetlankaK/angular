import {Component, OnInit} from '@angular/core';
import {User} from "../../domain/user";
import {AppComponent} from "../../app.component";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.less']
})
export class WelcomeComponent implements OnInit {


  constructor(private appComponent: AppComponent) {
  }

  currentUser: User;
  login: string;

  ngOnInit(): void {
    this.appComponent.commonTemplate = true;
    this.login = this.currentUser.login;
  }


}
