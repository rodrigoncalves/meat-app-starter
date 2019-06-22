import { CartItemModel } from "./cart-item.model";
import { MenuItemModel } from "../menu-item/menu-item.model";
import { Injectable } from "@angular/core";
import { NotificationService } from "app/shared/messages/notification.service";

@Injectable()
export class ShoppingCartService {

  constructor(private notificationService: NotificationService) { }

  items: CartItemModel[] = [];

  clear() {
    this.items = [];
  }

  addItem(item: MenuItemModel) {
    const foundItem = this.items.find(mItem => mItem.menuItem.id == item.id);
    if (foundItem) {
      this.increaseQty(foundItem);
    } else {
      this.items.push(new CartItemModel(item))
    }

    this.notificationService.notify(`Você adicionou o item ${item.name}`);
  }

  removeItem(item: CartItemModel) {
    this.items.splice(this.items.indexOf(item), 1);

    this.notificationService.notify(`Você removeu o item ${item.menuItem.name}`);
  }

  total(): number {
    return this.items
      .map(item => item.value())
      .reduce((prev, value) => prev + value, 0);
  }

  increaseQty(item: CartItemModel) {
    item.quantity++;
  }

  decreaseQty(item: CartItemModel) {
    item.quantity = item.quantity - 1
    if (item.quantity === 0) {
      this.removeItem(item)
    }
  }

}
