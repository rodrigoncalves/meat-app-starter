import { Component, OnInit } from '@angular/core';
import { RadioOptionModel } from 'app/shared/radio/radio-option.model';
import { CartItemModel } from 'app/restaurant-detail/shopping-cart/cart-item.model';
import { OrderService } from './order.service';
import { OrderModel } from './order.model';
import { OrderItem } from './order-item.model';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  orderForm: FormGroup;

  delivery: number = 8;

  paymentOptions: RadioOptionModel[] = [
    { label: 'Dinheiro', value: 'MON' },
    { label: 'Cartão de débito', value: 'DEB' },
    { label: 'Cartão de crédito', value: 'CRE' },
    { label: 'Cartão refeição', value: 'REF' },
  ];

  constructor(
    private orderService: OrderService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.orderForm = this.fb.group({
      name: this.fb.control(''),
      email: this.fb.control(''),
      emailConfirmation: this.fb.control(''),
      address: this.fb.control(''),
      number: this.fb.control(''),
      optionalAddress: this.fb.control(''),
      paymentOption: this.fb.control(''),
    });
  }

  itemsValue(): number {
    return this.orderService.itemsValue();
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

  checkOrder(order: OrderModel) {
    order.items = this.cartItems()
      .map((item: CartItemModel) => new OrderItem(item.quantity, item.menuItem.id));

    this.orderService.checkOrder(order)
      .subscribe((orderId: string) => {
        this.router.navigate(['/order-summary']);
        this.orderService.clear();
      });
  }

}
