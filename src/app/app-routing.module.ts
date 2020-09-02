import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// <h3>User List</h3>
// <div *ngFor="let user of users">{{user.login}}</div>
// <div>
// login : <input [(ngModel)]="newUserLogin"> <button (click)="addUser()">add</button>
//   </div>
//   <p>child works!</p>
// <div>Name: {{name}}</div>
// <button (click)="name = 'bye world'">change name</button>
// <div>Input: <input [(ngModel)]="name"></div>
