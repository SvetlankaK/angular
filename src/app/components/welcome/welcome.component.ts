import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../service/auth.service';



@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.less']
})
export class WelcomeComponent implements OnInit {

  userName: string;

  constructor(private authService: AuthService ) {
  }

  ngOnInit(): void {
    this.userName = this.authService.loggedUser.name;
  }

}
