import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { User } from './user.model';
import { NotificationService } from 'app/shared/messages/notification.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'mt-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private notificationService: NotificationService
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: this.fb.control('', [Validators.required, Validators.email]),
      password: this.fb.control('', [Validators.required])
    })
  }

  login() {
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;
    this.loginService.login(email, password).subscribe(
      (user: User) => this.notificationService.notify(`Bem vindo(a), ${user.name}!`),
      (res: HttpErrorResponse) => this.notificationService.notify(res.error.message)
    );
  }

}
