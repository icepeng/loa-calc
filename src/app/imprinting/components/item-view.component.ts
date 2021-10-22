import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Item } from '../functions/type';

@Component({
  selector: 'app-item-view',
  templateUrl: './item-view.component.html',
  styleUrls: ['./item-view.component.scss'],
})
export class ItemViewComponent implements OnChanges {
  @Input() item!: Item;
  effects: [string, number][] = [];

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.item.currentValue) {
      this.effects = Object.entries(changes.item.currentValue.effects);
    }
  }
}
