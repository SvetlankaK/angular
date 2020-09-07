import {Component, OnInit} from '@angular/core';
import {User} from "../../domain/user";
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../service/user.service";
import {AppComponent} from "../../app.component";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.less'],
  providers: [AppComponent]
})
export class WelcomeComponent implements OnInit {


  constructor(private service: UserService, private route: ActivatedRoute, private appComponent: AppComponent) {
  }

  currentUser: User;
  login: string;


  ngOnInit(): void {
    this.appComponent.commonTemplate = true;
    this.appComponent.usersPage = true;
    const userLogin = this.route.snapshot.paramMap.get('login');
    let user = this.service.getByLogin(userLogin);
    this.login = userLogin;
  }


}
