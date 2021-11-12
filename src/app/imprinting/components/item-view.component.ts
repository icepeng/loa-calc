import { Clipboard } from '@angular/cdk/clipboard';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import {
  dealOptions,
  imprintOptions,
  penaltyOptions,
} from '../functions/const';
import { getBuyScript } from '../functions/search';
import { Item } from '../functions/type';

@Component({
  selector: 'app-item-view',
  templateUrl: './item-view.component.html',
  styleUrls: ['./item-view.component.scss'],
})
export class ItemViewComponent implements OnChanges {
  @Input() item!: Item;
  @Output() exclude = new EventEmitter<Item>();
  dealOptions: [string, number][] = [];
  imprintOptions: [string, number][] = [];
  penalty?: [string, number];

  constructor(private clipboard: Clipboard) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.item.currentValue) {
      const effects = changes.item.currentValue.effects as Item['effects'];
      this.dealOptions = effects.filter((eff) => dealOptions.includes(eff[0]));
      this.imprintOptions = effects.filter((eff) =>
        imprintOptions.includes(eff[0])
      );
      this.penalty = effects.find((eff) => penaltyOptions.includes(eff[0]));
    }
  }

  copyBuyScript() {
    this.clipboard.copy(getBuyScript(this.item));
  }
}
