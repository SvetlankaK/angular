import {Component, Injectable} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";


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

  constructor(private router: Router) {

  }

//todo так тоже не робит


  ngOnInit(): void {
    if (this.router.url == "users") {
      this.commonTemplate = true;
      this.welcomePage = true;
    }
    if (this.router.url.startsWith("welcome")) {
      this.commonTemplate = true;
      this.welcomePage = true;
    }
  }
}
