import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { MEAT_API } from "app/app.api";
import { User } from "./user.model";
import { Router, NavigationEnd } from "@angular/router";

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';

@Injectable()
export class LoginService {

  loggedUser: User;
  lastUrl: string;

  constructor(private http: HttpClient, private router: Router) {
    this.router.events
      .filter(e => e instanceof NavigationEnd)
      .subscribe((e: NavigationEnd) => this.lastUrl = e.url);
  }

  login(email: string, password: string): Observable<User> {
    return this.http.post<User>(`${MEAT_API}/login`, { email, password })
      .do(user => this.loggedUser = user);
  }

  isLoggedIn(): boolean {
    return this.loggedUser !== undefined;
  }

  handleLogin(path: string = this.lastUrl) {
    this.router.navigate(['/login', btoa(path)]);
  }

  logout() {
    this.loggedUser = undefined;
  }

}
