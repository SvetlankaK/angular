import {Component, OnInit} from '@angular/core';
import {User} from "../../domain/user";
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../service/user.service";
import {AppComponent} from "../../app.component";
import {SharedService} from "../../service/shared-service.service";



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
    this.sService.onMainEvent.emit(true);
    this.appComponent.commonTemplate = true;
    this.appComponent.usersPage = true;
    const userLogin = this.route.snapshot.paramMap.get('login');
    let user = this.service.getByLogin(userLogin);
    this.login = userLogin;
    // if (user.role == "admin") {
    //   this.appComponent.admin = true;
    // }
  }


}
