import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { marketData, MarketSkill, MarketTripod } from '../data';

@Component({
  selector: 'app-tripod-form',
  templateUrl: './tripod-form.component.html',
  styleUrls: ['./tripod-form.component.scss'],
})
export class TripodFormComponent implements OnInit, OnChanges {
  @Input() classCode!: number;
  @Input() formGroup!: FormGroup;

  skillOptions: MarketSkill[] = [];
  tripodOptions$!: Observable<MarketTripod[]>;

  constructor() {}

  ngOnInit(): void {
    this.tripodOptions$ = this.formGroup.get('skill')!.valueChanges.pipe(
      startWith(this.formGroup.value.skill),
      map(
        (skill: number) =>
          marketData.marketAuction.marketMenuAuctionSkillList
            .find((x) => x.value === skill)
            ?.marketMenuSkillTripodList.filter((x) => !x.isGem) ?? []
      )
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    const skillList = marketData.marketAuction.marketMenuAuctionSkillList;

    if (changes.classCode) {
      const classCode: number = changes.classCode.currentValue;
      this.skillOptions = skillList.filter((x) => x.class === classCode);

      if (changes.classCode.previousValue != null) {
        this.formGroup.reset({
          skill: null,
          tripod: null,
          level: 3,
          required: true,
        });
      }
    }
  }
}
