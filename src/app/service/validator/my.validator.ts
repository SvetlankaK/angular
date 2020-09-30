import {FormControl} from "@angular/forms";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {UserService} from "../user.service";


@Injectable({providedIn: 'root'})
export class MyValidator {


  constructor() {

  }

  static uniqueLogin(control: FormControl, userService: UserService): Promise<any> | Observable<any> {
    return new Promise(resolve => {
      if (!userService.checkLoginIsUnique(control.value).subscribe(value => console.log(value)))
        resolve({uniqueLogin: true})
      else {
        resolve(null)
      }
    })
  }

}
