import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import {
  filter,
  map,
  Observable,
  startWith,
  Subject,
  takeUntil,
  withLatestFrom,
} from 'rxjs';
import { SkillSpec } from '../models/skill-spec';
import { Tripod } from '../models/tripod';

@Component({
  selector: 'app-skill-form',
  templateUrl: './skill-form.component.html',
})
export class SkillFormComponent implements OnInit, OnDestroy {
  @Input() skillForm!: FormGroup;
  @Input() skillSpecs!: SkillSpec[];

  skillSpec$!: Observable<SkillSpec>;
  skillLevels$!: Observable<number[]>;
  tripods$!: Array<Observable<Tripod[]>>;
  tripodLevels$!: Array<Observable<number[]>>;

  unsubscribe$ = new Subject<boolean>();

  constructor() {}

  get tripodForms() {
    return (this.skillForm.get('tripod') as FormArray).controls as FormGroup[];
  }

  ngOnInit(): void {
    const exists = <T>(value: T | null | undefined): value is T =>
      value != null;

    this.skillSpec$ = this.skillForm.get('name')!.valueChanges.pipe(
      startWith(this.skillForm.get('name')!.value),
      filter(exists),
      map((name) => this.skillSpecs.find((skill) => skill.name === name)),
      filter(exists)
    );
    this.skillLevels$ = this.skillSpec$.pipe(
      map((skill) => Object.keys(skill.damageTable).map((x) => +x))
    );

    this.skillForm
      .get('name')!
      .valueChanges.pipe(takeUntil(this.unsubscribe$))
      .subscribe(() => {
        this.skillForm.patchValue({
          level: null,
          gem: null,
          tripod: [
            { name: null, level: null },
            { name: null, level: null },
            { name: null, level: null },
          ],
        });
      });
  }

  ngOnDestroy() {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }
}
