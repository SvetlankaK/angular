import {FormControl, Validators} from "@angular/forms";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {UserService} from "../user.service";

@Injectable({providedIn: 'root'})
export class MyValidator extends Validators{

  constructor(private userService: UserService) {
    super();
  }

  uniqueLogin(control: FormControl): Promise<any> | Observable<any> {
    return new Promise(resolve => {
      if (!this.userService.checkLoginIsUnique(control.value).subscribe(value => console.log(value)))
        resolve({uniqueLogin: true})
      else {
        resolve(null)
      }
    })
  }

}
