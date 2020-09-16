import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.less']
})
export class ContentComponent implements OnInit {


  constructor(private route: Router) {
  }

  ngOnInit(): void {

  }
  usersPage():boolean{
  return  this.route.url.includes('users')
  }
  welcomePage():boolean{
   return  this.route.url.includes('registration')
  }_
}
