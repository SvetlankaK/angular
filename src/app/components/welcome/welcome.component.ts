import {Component, OnInit} from '@angular/core';
import {User} from "../../domain/user";
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../service/user.service";
import {AppComponent} from "../../app.component";
import {SharedService} from "../../service/shared.service";


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.less'],
  providers: [AppComponent]
})
export class WelcomeComponent implements OnInit {

  currentUser: User;
  login: string;

  constructor(private service: UserService, private route: ActivatedRoute, private appComponent: AppComponent, private sService: SharedService) {
  }


  ngOnInit(): void {
    this.sService.onAppCommonTemplate.emit(true);
    this.sService.onAppWelcomeTemplate.emit(true);
    if (localStorage.getItem("loggedIn") === "true") {
      let user = JSON.parse(localStorage.getItem("user"));
      this.login = user.userLogin;
      if (user.role == "admin") {
        this.sService.onAppAdminView.emit(true);
      }
    }
  }

}
