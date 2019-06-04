import { OrderItem } from "./order-item.model";

export class OrderModel {
  constructor(
    public address: string,
    public number: number,
    public optionalAddress: string,
    public paymentOption: string,
    public items: OrderItem[] = []
  ) {}
}
