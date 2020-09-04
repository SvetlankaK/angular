import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from "../../service/user.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})

export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  invalidData = false;


  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private service: UserService) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      login: ['', Validators.required],
      password: ['', Validators.required]
    });
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
      if (user != null && user.password == password) {
        this.router.navigate(["welcome"]);
      } else {
        this.invalidData = true;
      }
    }
  }

}



