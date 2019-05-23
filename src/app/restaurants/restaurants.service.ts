import { RestaurantModel } from "./restaurant/restaurant.model";
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { MEAT_API } from "app/app.api";
import { Observable } from "rxjs/Observable";
import { ErrorHandler } from "app/app.error-handler";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class RestaurantsService {

  constructor(private http: Http) { }

  restaurants(): Observable<RestaurantModel[]> {
    return this.http.get(`${MEAT_API}/restaurants`)
      .map(res => res.json())
      .catch(ErrorHandler.handleError);
  }

  restaurantById(id: string): Observable<RestaurantModel> {
    return this.http.get(`${MEAT_API}/restaurants/${id}`)
      .map(res => res.json())
      .catch(ErrorHandler.handleError);
  }
}
