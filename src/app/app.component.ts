import {Component, Injectable} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {SharedService} from "./service/shared.service";

@Injectable()
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
@Injectable()
export class AppComponent {
  title = 'angular';
  public commonTemplate: boolean;
  public usersPage: boolean;
  public welcomePage: boolean;
  public admin: boolean;

  constructor(private route: ActivatedRoute, private sharedService: SharedService) {

    sharedService.onAppCommonTemplate.subscribe(
      (commonTemplate) => {
        this.commonTemplate = commonTemplate;
      });
    sharedService.onAppWelcomeTemplate.subscribe(
      (welcomePage) => {
        this.welcomePage = welcomePage;
      });
    sharedService.onAppUsersTemplate.subscribe(
      (usersPage) => {
        this.usersPage = usersPage;
      });
    sharedService.onAppAdminView.subscribe(
      (admin) => {
        this.admin = admin;
      });
  }


  ngOnInit(): void {
    this.commonTemplate = false;
    this.welcomePage = false;
    this.usersPage = false;
    this.admin = false;
  }

}
