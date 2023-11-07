import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ItemStoreType } from 'src/types/itemStoreType';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
})
export class ListItemComponent {
  @Input() listItem: ItemStoreType[] = [];
  @Output() addItemToCart = new EventEmitter<string>();

  constructor() {}

  public add(id: string): void {
    this.addItemToCart.emit(id);
  }
}
