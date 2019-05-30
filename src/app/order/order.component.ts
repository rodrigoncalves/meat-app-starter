import { Component, OnInit } from '@angular/core';
import { RadioOptionModel } from 'app/shared/radio/radio-option.model';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  paymentOptions: RadioOptionModel[] = [
    { label: 'Dinheiro', value: 'MON'},
    { label: 'Cartão de débito', value: 'DEB'},
    { label: 'Cartão de crédito', value: 'CRE'},
    { label: 'Cartão refeição', value: 'REF'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
