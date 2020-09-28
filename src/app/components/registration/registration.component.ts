import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {UserService} from "../../service/user.service";
import {User} from '../../domain/user';
import {MyValidator} from "../../service/validator/my.validator";


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.less']
})

export class RegistrationComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService,
    private validator: MyValidator) {

  }

  registerForm: FormGroup;
  registered = false;
  submitted = false;
  dateOfBirth: Date;


  ngOnInit() {
    this.dateOfBirth = new Date();
    this.registerForm = this.formBuilder.group({
      name: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
      surname: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]],
      dateOfBirth: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      userLogin: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)], [this.validator.uniqueLogin]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
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
      this.userService.register(user).subscribe(
        value => {
          this.registered = true;
          setTimeout(() => {
            this.router.navigate(['/login']);
          }, 3000);
        }
      );
    }
  }

}
