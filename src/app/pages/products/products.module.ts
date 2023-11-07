import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ListItemModule } from './components/list-item/list-item.module';
import { ProductsService } from './products.service';
import { ProductsRoutingModule } from './products-routing.module';
import { MatDialogModule } from '@angular/material/dialog';
import { CartComponent } from './cart/cart.component';

@NgModule({
  exports: [ProductsComponent],
  declarations: [ProductsComponent, CartComponent],
  imports: [
    CommonModule,
    ListItemModule,
    ProductsRoutingModule,
    MatDialogModule,
  ],
  providers: [ProductsService],
})
export class ProductsModule {}
