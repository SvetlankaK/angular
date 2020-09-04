import {Component, OnInit} from '@angular/core';
import {User} from "../../domain/user";
import {AppComponent} from "../../app.component";
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../service/user.service";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.less']
})
export class WelcomeComponent implements OnInit {

  private route: ActivatedRoute

  constructor( private service: UserService) {
  }

  currentUser: User;
  login: string;

  ngOnInit(): void {
    const userLogin = this.route.snapshot.paramMap.get('login');
    //todo хотела передавать айди, но якобы придет строска и я хз пока че с приведением типов
    let user = this.service.getByLogin(userLogin);
    this.login = userLogin;

  }


}
