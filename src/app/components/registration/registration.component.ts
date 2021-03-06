import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {UserService} from "../../service/user.service";
import {Title} from "@angular/platform-browser";


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
    private title: Title) {
    this.title.setTitle("Registration");
  }

  registerForm: FormGroup;
  registered = false;
  submitted = false;
  dateOfBirth: Date;


  ngOnInit() {
    this.dateOfBirth = new Date();
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required, Validators.minLength(5)],
      surname: ['', Validators.required, Validators.minLength(5)],
      dateOfBirth: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      userLogin: ['', [Validators.required, Validators.minLength(6)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      salary: ["100"],
      id: [this.generateId()],
      role: ['user']
    });
  }

  get errorFiled() {
    return this.registerForm.controls;
  }

  onFormSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    console.log(this.registerForm.value);
    this.userService.register(this.registerForm.value);
    this.registered = true;
    setTimeout(() => {
      this.router.navigate(['/login'])
    }, 3000);
  }


  generateId() {
    return this.userService.generateId();
  }
}
