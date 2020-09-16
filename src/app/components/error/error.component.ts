import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AuthService} from "../../service/auth.service";

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.less']
})
export class ErrorComponent implements OnInit {

  constructor(private route: ActivatedRoute, private authService: AuthService) {
  }

  unauthorized: boolean;
  notFound: boolean;
  forbidden: boolean;

  ngOnInit(): void {
    const errorType = this.route.snapshot.paramMap.get('type');
    switch (errorType) {
      case "401":
        this.unauthorized = true;
        break;
      case "403":
        this.forbidden = true;
        break;
      case "404":
        this.notFound = true;
        break;
    }
  }


}
