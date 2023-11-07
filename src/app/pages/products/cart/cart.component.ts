import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ItemOrderType } from 'src/types/orderType';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: ItemOrderType[]) {
    this.cart = data;
  }

  @Input() cart: ItemOrderType[] = [];
  @Output() updateCart = new EventEmitter<ItemOrderType[]>();

  public increment(item: ItemOrderType): void {
    item.quantity++;
    this.updateCart.emit(this.cart);
  }

  public decrement(item: ItemOrderType): void {
    if (item.quantity > 1) {
      item.quantity--;
      this.updateCart.emit(this.cart);
    }
  }
}
