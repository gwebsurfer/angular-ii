import { Injectable } from '@angular/core';
import { itemStore } from 'src/constants/item-store';
import { ItemStoreType } from 'src/types/itemStoreType';
import { MatDialog } from '@angular/material/dialog';
import { CartComponent } from './cart/cart.component';
import { ItemOrderType, OrderType } from 'src/types/orderType';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private dialog: MatDialog) {}

  public getItems(): ItemStoreType[] {
    return itemStore;
  }

  public getItemBy(id: string): ItemStoreType | undefined {
    return itemStore.find((item) => item.id === id);
  }

  openCartModal(cart: ItemOrderType[]) {
    console.log(cart);
    const dialogRef = this.dialog.open(CartComponent, {
      width: '600px',
      height: '400px',
      data: cart,
    });
  }
}
