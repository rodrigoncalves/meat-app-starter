import { HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

export class ErrorHandler {
  static handleError(error: HttpErrorResponse | any) {
    let msg: string;
    if (error instanceof HttpErrorResponse) {
      msg = `Erro ${error.status} ao acessar a URL ${error.url} - ${error.statusText || ''} ${error.error}`;
    } else {
      msg = error.message ? error.message : error.toString();
    }
    console.error(msg);
    return Observable.throw(msg);
  }
}
