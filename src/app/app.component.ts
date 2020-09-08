import {Component, Injectable} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {tokenReference} from "@angular/compiler";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
@Injectable()
export class AppComponent {
  title = 'angular';
  commonTemplate: boolean;
  usersPage: boolean;
  welcomePage: boolean;

  constructor(private router: Router) {

  }
//todo так тоже не робит бля
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
