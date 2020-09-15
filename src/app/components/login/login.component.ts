import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from "../../service/user.service";
import {ToastrService} from "ngx-toastr";
import {PrimeNGConfig} from "primeng/api";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})

export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  invalidData = false;
  id: string;
  stringifyData: any;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private service: UserService, private toastr: ToastrService,
    private primengConfig: PrimeNGConfig) {
  }

  ngOnInit() {
    this.primengConfig.ripple = true;
    this.loginForm = this.formBuilder.group({
      login: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get errorField() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      this.invalidData = true;
      return;
    }
    if (this.loginForm.valid) {
      const login = this.loginForm.get('login').value;
      const password = this.loginForm.get('password').value;
      let user = this.service.getByLogin(login);
      this.stringifyData = JSON.stringify(user);
      localStorage.setItem("loggedIn", "true");
      localStorage.setItem("user", this.stringifyData);
      if (user != null && user.password == password) {
        this.router.navigate(['welcome']);
      } else {
        this.invalidData = true;
      }
    }
  }

}



