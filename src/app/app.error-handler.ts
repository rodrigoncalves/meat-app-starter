import { Response } from "@angular/http";
import { Observable } from "rxjs/Observable";

export class ErrorHandler {
  static handleError(error: Response | any) {
    let msg: string;
    if (error instanceof Response) {
      msg = `Erro ${error.status} ao acessar a URL ${error.url} - ${error.statusText}`;
    } else {
      msg = error.toString();
    }
    console.error(msg);
    return Observable.throw(msg);
  }
}
