import { Component, Input, OnInit } from '@angular/core';
import {
  dealOptions,
  imprintingFormToken,
  imprintOptions,
  penaltyOptions,
} from '../functions/const';
import { AccMap } from '../functions/type';

@Component({
  selector: 'app-acc-form',
  templateUrl: './acc-form.component.html',
  styleUrls: ['./acc-form.component.scss'],
})
export class AccFormComponent implements OnInit {
  @Input() accMap!: Record<string, AccMap>;

  dealOptions = dealOptions;
  imprintOptions = imprintOptions;
  penaltyOptions = penaltyOptions;

  constructor() {}

  ngOnInit(): void {
  }

  filterImprint(name: string) {
    return imprintOptions.filter((x) => x.includes(name));
  }
}
