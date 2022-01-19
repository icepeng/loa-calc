import { Component, Input } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import {
  dealOptions,
  imprintOptions,
  initialAccMap,
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

  toggleFixed(event: MatSlideToggleChange, accType: string) {
    if (event.checked === false) {
      const acc = this.accMap[accType];
      this.accMap[accType] = JSON.parse(JSON.stringify(initialAccMap[accType]));
      this.accMap[accType].quality = acc.quality;
      this.accMap[accType].dealOption1 = [acc.dealOption1[0], 0];
      if (this.accMap[accType].dealOption2) {
        this.accMap[accType].dealOption2! = [acc.dealOption2![0], 0];
      }
    }
  }
}
