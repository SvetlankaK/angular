import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {UserService} from "../../service/user.service";
import {ToastrService} from 'ngx-toastr';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.less']
})

export class RegistrationComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService, private toastr: ToastrService) {
  }

  registerForm: FormGroup;
  loading = false;
  submitted = false;
  dateOfBirth: Date;

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required, Validators.minLength(5)],
      surname: ['', Validators.required, Validators.minLength(5)],
      dateOfBirth: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      login: ['', [Validators.required, Validators.minLength(6)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      salary: [],
      id: [],
      role: ['user']
    });
  }

  get fval() {
    return this.registerForm.controls;
  }

  onFormSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    this.loading = true;
    this.userService.register(this.registerForm.value);
    this.router.navigate(['/login']);
  }

  generateId() {
    return this.userService.generateId();
  }
}
