import { Injectable } from "@angular/core";
import { ShoppingCartService } from "app/restaurant-detail/shopping-cart/shopping-cart.service";
import { CartItemModel } from "app/restaurant-detail/shopping-cart/cart-item.model";
import { OrderModel } from "./order.model";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map'
import { MEAT_API } from "app/app.api";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class OrderService {

  constructor(private cartService: ShoppingCartService, private http: HttpClient) { }

  itemsValue(): number {
    return this.cartService.total();
  }

  cartItems(): CartItemModel[] {
    return this.cartService.items;
  }

  increaseQty(item: CartItemModel) {
    this.cartService.increaseQty(item);
  }

  decreaseQty(item: CartItemModel) {
    this.cartService.decreaseQty(item);
  }

  remove(item: CartItemModel) {
    this.cartService.removeItem(item);
  }

  clear() {
    this.cartService.clear();
  }

  checkOrder(order: OrderModel): Observable<string> {
    return this.http.post<OrderModel>(`${MEAT_API}/orders`, order)
      .map(order => order.id);
  }
}
