import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ComposeFilter, Summary, TripodValue } from '../functions/type';
import { getTripodString } from '../functions/util';

@Component({
  selector: 'app-tripod-item-view',
  templateUrl: './tripod-item-view.component.html',
  styleUrls: ['./tripod-item-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TripodItemViewComponent {
  @Input() item!: Summary;
  @Input() filter!: ComposeFilter;

  constructor() {}

  getTripodString(item: TripodValue) {
    return getTripodString(item);
  }
}
