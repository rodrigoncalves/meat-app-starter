import { CartItemModel } from "./cart-item.model";
import { MenuItemModel } from "../menu-item/menu-item.model";

export class ShoppingCartService {

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
  }

  removeItem(item: CartItemModel) {
    this.items.splice(this.items.indexOf(item), 1);
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
    if (item.quantity === 0){
      this.removeItem(item)
    }
  }

}
