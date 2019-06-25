import { RestaurantModel } from "./restaurant/restaurant.model";
import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { MEAT_API } from "app/app.api";
import { Observable } from "rxjs/Observable";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { MenuItemModel } from "app/restaurant-detail/menu-item/menu-item.model";

@Injectable()
export class RestaurantsService {

  constructor(private http: HttpClient) { }

  restaurants(search?: string): Observable<RestaurantModel[]> {
    let params: HttpParams = undefined;
    if (search) {
      params = new HttpParams()
        .append('q', search);
    }
    return this.http.get<RestaurantModel[]>(`${MEAT_API}/restaurants`, { params });
  }

  restaurantById(id: string): Observable<RestaurantModel> {
    return this.http.get<RestaurantModel>(`${MEAT_API}/restaurants/${id}`);
  }

  restaurantsReviews(id: string): Observable<any> {
    return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`);
  }

  menuOfRestaurant(id: string): Observable<MenuItemModel[]> {
    return this.http.get<MenuItemModel[]>(`${MEAT_API}/restaurants/${id}/menu`);
  }
}
