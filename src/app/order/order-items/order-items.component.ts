import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartItemModel } from 'app/restaurant-detail/shopping-cart/cart-item.model';

@Component({
  selector: 'mt-order-items',
  templateUrl: './order-items.component.html'
})
export class OrderItemsComponent implements OnInit {

  @Input() items: CartItemModel[];

  @Output() increaseQty = new EventEmitter<CartItemModel>();
  @Output() decreaseQty = new EventEmitter<CartItemModel>();
  @Output() remove = new EventEmitter<CartItemModel>();

  constructor() { }

  ngOnInit() {
  }

  emitIncreaseQty(item: CartItemModel) {
    this.increaseQty.emit(item);
  }

  emitDecreaseQty(item: CartItemModel) {
    this.decreaseQty.emit(item);
  }

  emitRemove(item: CartItemModel) {
    this.remove.emit(item);
  }

}
