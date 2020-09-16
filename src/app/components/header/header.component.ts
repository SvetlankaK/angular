import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  isAdmin: boolean;

  constructor() {
  }

  ngOnInit(): void {
    if (localStorage.getItem("loggedIn") === "true") {
      let user = JSON.parse(localStorage.getItem("user"));
      if (user.role == "admin") {
        this.isAdmin = true;
      }
    }
  }

  logout() {
    localStorage.setItem("loggedIn", "false");
  }
}
