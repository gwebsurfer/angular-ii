import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsModule } from './pages/products/products.module';
import { NotFoundModule } from './pages/not-found/not-found.module';
import { CartComponent } from './pages/products/cart/cart.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ProductsModule,
    NotFoundModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
