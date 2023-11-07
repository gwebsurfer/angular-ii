import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListItemComponent } from './list-item.component';
import { ItemCardComponent } from './item-card/item-card.component';

@NgModule({
  declarations: [ListItemComponent, ItemCardComponent],
  providers: [],
  exports: [ListItemComponent],
  imports: [CommonModule],
})
export class ListItemModule {}
