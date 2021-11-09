import { Component, Input, OnInit } from '@angular/core';
import { ComposeFilter, Summary, TripodForm } from '../functions/type';
import { getTripodString } from '../functions/util';

@Component({
  selector: 'app-tripod-item-view',
  templateUrl: './tripod-item-view.component.html',
  styleUrls: ['./tripod-item-view.component.scss'],
})
export class TripodItemViewComponent implements OnInit {
  @Input() item!: Summary;
  @Input() filter!: ComposeFilter;

  constructor() {}

  ngOnInit(): void {}

  getTripodString(item: TripodForm) {
    return getTripodString(item);
  }
}
