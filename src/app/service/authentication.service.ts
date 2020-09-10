import {Injectable} from '@angular/core';
import {UserService} from "./user.service";
import {User} from "../domain/user";
import {ActivatedRoute, RouterModule} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  loggedIn: boolean;
  isAdmin: boolean;
  generalAccessUrl: string[] = ["/", "login", "registration", "error"];
  authorizedAccessUrl: string[] = ["/", "login", "registration", "error", "welcome"];
  adminAccessUrl: string[] = ["/", "login", "registration", "error", "welcome", "users"];

  constructor(private service: UserService) {

  }

  checkAccess(user: User, route: ActivatedRoute) {
    const routeToCheck = route.url;

    if (user.role === "admin") {
      this.isAdmin = true;
    }


  }
}
