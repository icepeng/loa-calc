import { Component, Input } from '@angular/core';
import {
  dealOptions,
  imprintOptions,
  itemNames,
  penaltyOptions,
} from '../functions/const';
import { AccMap } from '../functions/type';

@Component({
  selector: 'app-acc-form',
  templateUrl: './acc-form.component.html',
  styleUrls: ['./acc-form.component.scss'],
})
export class AccFormComponent {
  @Input() accMap!: Record<string, AccMap>;

  dealOptions = dealOptions;
  imprintOptions = imprintOptions;
  penaltyOptions = penaltyOptions;

  constructor() {}

  filterImprint(name: string) {
    return imprintOptions.filter((x) => x.includes(name));
  }

  filterItemName(name: string, category: string) {
    return itemNames.filter((x) => x.includes(name) && x.endsWith(category));
  }

  resetImprintOptions(category: string) {
    this.accMap[category] = {
      ...this.accMap[category],
      imprintOption1: ['', 0],
      imprintOption2: ['', 0],
      imprintPenalty: ['', 0],
    };
  }
}
