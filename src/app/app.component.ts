import {Component, EventEmitter, Injectable} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {SharedService} from "./service/shared-service.service";


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
    sharedService.onMainEvent.subscribe(
      (commonTemplate) => {
        this.commonTemplate = commonTemplate;
      });
  }

  public initTemplate() {
    this.commonTemplate = true;
    this.welcomePage = true;
  }

  ngOnInit(): void {
    this.welcomePage = true;
  }

}
