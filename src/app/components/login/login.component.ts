import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PrimeNGConfig} from "primeng/api";
import {AuthService} from '../../service/auth.service';


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
  message: string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private primengConfig: PrimeNGConfig) {
  }

  ngOnInit() {
    this.primengConfig.ripple = true;
    this.loginForm = this.formBuilder.group({
      userLogin: ['', [Validators.required]],
      password: ['', [Validators.required]]
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
      const userLogin = this.loginForm.get('userLogin').value;
      const password = this.loginForm.get('password').value;
      this.authService.login(userLogin, password).subscribe(result => {
        if (result) {
          this.router.navigate(['welcome']);
        } else {
          this.invalidData = true;
        }
      });
    }
  }

}



