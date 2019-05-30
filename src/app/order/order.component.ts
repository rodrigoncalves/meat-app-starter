import { Component, OnInit } from '@angular/core';
import { RadioOptionModel } from 'app/shared/radio/radio-option.model';
import { CartItemModel } from 'app/restaurant-detail/shopping-cart/cart-item.model';
import { ShoppingCartService } from 'app/restaurant-detail/shopping-cart/shopping-cart.service';
import { OrderService } from './order.service';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  paymentOptions: RadioOptionModel[] = [
    { label: 'Dinheiro', value: 'MON' },
    { label: 'Cartão de débito', value: 'DEB' },
    { label: 'Cartão de crédito', value: 'CRE' },
    { label: 'Cartão refeição', value: 'REF' },
  ];

  constructor(private orderService: OrderService) { }

  ngOnInit() {
  }

  cartItems() {
    return this.orderService.cartItems();
  }

  increaseQty(item: CartItemModel) {
    this.orderService.increaseQty(item);
  }

  decreaseQty(item: CartItemModel) {
    this.orderService.decreaseQty(item)
  }

  remove(item: CartItemModel) {
    this.orderService.remove(item);
  }

}
