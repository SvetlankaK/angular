import {Component, Injectable} from '@angular/core';
import {Router} from "@angular/router";

@Injectable()
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
@Injectable()
export class AppComponent {
  title = 'angular';

  constructor(private route: Router) {
  }

  ngOnInit(): void {

  }

  isHeaderFooterShown(): boolean {
    return !(this.route.url.includes('login') || this.route.url.includes('registration') || this.route.url.includes('error'));
  }

}
