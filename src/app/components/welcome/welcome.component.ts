import {Component, OnInit} from '@angular/core';
import {User} from "../../domain/user";
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../service/user.service";
import {AppComponent} from "../../app.component";
import {TemplateService} from "../../service/template.service";

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

//todo вот главная проблема. я не понимаю как сделать переменную commonTemplate(из AppComponent, который является общим шаблоном для двух
// страниц) = true, не прямо в присваивании её в appComponent(потому что отрисовывается лишь в том случае),
// а со временем, когда надо будет. я пыталась :
// 1)менять в инит методе двух компанентов, где я хочу юзать тот темплейт, как здесь
// 2)меняя в appComponent init методе, в попытке вытощить роут юрл и меняя эти булевы там
//

  ngOnInit(): void {
    this.appComponent.commonTemplate = true;
    this.appComponent.usersPage = true;
    const userLogin = this.route.snapshot.paramMap.get('login');
    let user = this.service.getByLogin(userLogin);
    this.login = userLogin;
  }


}
