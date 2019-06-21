import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { MEAT_API } from "app/app.api";
import { User } from "./user.model";

import 'rxjs/add/operator/do';

@Injectable()
export class LoginService {

  loggedUser: User;

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<User> {
    return this.http.post<User>(`${MEAT_API}/login`, { email, password })
      .do(user => this.loggedUser = user);
  }

  isLoggedIn(): boolean {
    return this.loggedUser !== undefined;
  }
}
