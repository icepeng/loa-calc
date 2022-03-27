import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { map, Observable, startWith, Subscription, withLatestFrom } from 'rxjs';
import { SkillSpec } from '../models/skill-spec';
import { Tripod } from '../models/tripod';

@Component({
  selector: 'app-tripod-form',
  templateUrl: './tripod-form.component.html',
  styles: [],
})
export class TripodFormComponent implements OnInit, OnChanges, OnDestroy {
  @Input() tripodForm!: FormGroup;
  @Input() tier!: number;
  @Input() skillSpec!: SkillSpec | null;

  tripods: Tripod[] = [];
  tripodLevels$!: Observable<number[]>;
  subscription$!: Subscription;

  constructor() {}

  ngOnInit() {
    const tripodNameControl = this.tripodForm.get('name')!;
    const tripodLevelControl = this.tripodForm.get('level')!;
    this.tripodLevels$ = tripodNameControl.valueChanges.pipe(
      startWith(tripodNameControl.value),
      map((tripodName) => {
        const tripod = this.tripods.find(
          (tripod) => tripod.name === tripodName
        );
        if (!tripod) {
          return [];
        }
        return Array.from(
          { length: tripod.maxLevel },
          (_, k) => k + 1
        ).reverse();
      })
    );

    this.subscription$ = this.tripodLevels$
      .pipe(
        withLatestFrom(
          tripodLevelControl.valueChanges.pipe(
            startWith(tripodLevelControl.value)
          )
        )
      )
      .subscribe(([levels, level]) => {
        if (!levels.includes(level)) {
          tripodLevelControl.setValue(null);
        }
      });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.skillSpec || changes.tier) {
      if (!this.skillSpec) {
        this.tripods = [];
        return;
      }

      this.tripods = this.skillSpec.tripods.filter(
        (tripod) => tripod.tier === this.tier
      );
    }
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }
}
