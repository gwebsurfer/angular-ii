import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ItemStoreType } from 'src/types/itemStoreType';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss'],
})
export class ItemCardComponent {
  @Input() item: ItemStoreType | null = null;
  @Output() addToCart = new EventEmitter<string>();
  constructor() {}

  ngOnInit() {}

  public add() {
    if (!this.item?.isAvailable) return;
    this.addToCart.emit(this.item.id);
  }
}
