import { Component, Input } from '@angular/core';
import { ComposeFilter, Summary, TripodForm } from '../functions/type';
import { getTripodString } from '../functions/util';

@Component({
  selector: 'app-tripod-item-view',
  templateUrl: './tripod-item-view.component.html',
  styleUrls: ['./tripod-item-view.component.scss'],
})
export class TripodItemViewComponent {
  @Input() item!: Summary;
  @Input() filter!: ComposeFilter;

  constructor() {}

  getTripodString(item: TripodForm) {
    return getTripodString(item);
  }
}
