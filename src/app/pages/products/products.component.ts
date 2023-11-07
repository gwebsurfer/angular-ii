import { Component } from '@angular/core';
import { ProductsService } from './products.service';
import { ItemStoreType } from 'src/types/itemStoreType';
import { ItemOrderType, OrderType } from 'src/types/orderType';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  public storeItems: ItemStoreType[] = [];
  public cart: ItemOrderType[] = [];

  constructor(private _service: ProductsService) {}

  ngOnInit() {
    this.storeItems = this._service.getItems();
  }

  public addItemToCart(id: string): void {
    const selectedProduct = this._service.getItemBy(id);
    if (selectedProduct) {
      const productIndex = this.cart.findIndex((item) => item.productId === id);
      if (productIndex > -1) {
        this.cart[productIndex].quantity++;
      } else {
        const newItemCart: ItemOrderType = {
          productId: selectedProduct.id,
          quantity: 1,
        };
        this.cart.push(newItemCart);
      }
    }
  }

  public removeItemFromCart(id: string) {
    const productIndex = this.cart.findIndex((item) => item.productId === id);
    if (this.cart[productIndex].quantity === 1) {
      this.cart.splice(productIndex, 1);
    } else {
      this.cart[productIndex].quantity--;
    }
  }

  public updateCart(cart: ItemOrderType[]): void {
    this.cart = [...cart];
  }

  openCartModal() {
    console.log(this.cart);
    this._service.openCartModal(this.cart);
  }
}
