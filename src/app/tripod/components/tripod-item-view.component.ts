import { Component, Input, OnInit } from '@angular/core';
import { marketData } from '../data';
import { ComposeFilter, Summary, TripodForm } from '../functions/type';

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
    const skill = marketData.marketAuction.marketMenuAuctionSkillList.find(
      (el) => el.value === item.skill
    )!;
    const tripod = skill.marketMenuSkillTripodList.find(
      (el) => el.value === item.tripod
    )!;
    return `[${skill.text}] ${tripod.text}+${item.level}`;
  }
}
