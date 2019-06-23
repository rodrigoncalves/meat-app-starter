import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { LoginService } from "./login/login.service";
import { Injectable, Injector } from "@angular/core";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private injector: Injector) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const loginService = this.injector.get(LoginService);

    if (loginService.isLoggedIn()) {
      const header = { 'Authorization': `Bearer ${loginService.loggedUser.accessToken}` };
      req = req.clone( { setHeaders: header } )
    }

    return next.handle(req);
  }

}
