import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {UserService} from "../../service/user.service";
import {User} from '../../domain/user';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.less']
})

export class RegistrationComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService) {

  }

  registerForm: FormGroup;
  registered = false;
  submitted = false;
  dateOfBirth: Date;


  ngOnInit() {
    this.dateOfBirth = new Date();
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      surname: ['', [Validators.required, Validators.minLength(5)]],
      dateOfBirth: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      userLogin: ['', [Validators.required, Validators.minLength(6)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      salary: ['100']
    })
  }

  get errorFiled() {
    return this.registerForm.controls;
  }

  onFormSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    if (this.registerForm.valid) {
      const user: User = this.registerForm.value;
      user.role = [];
      user.role.push({roleName: 'user', id: 1});
      this.userService.register(user).subscribe(
        value => {
          this.registered = true;
          this.router.navigate(['/login']);
        }
      );
    }
  }

}
