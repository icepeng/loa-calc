import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { filter, map, Observable, startWith, tap } from 'rxjs';
import { scouter } from '../models/job';
import { SkillSpec } from '../models/skill-spec';
import { Tripod } from '../models/tripod';

@Component({
  selector: 'app-skill-form',
  templateUrl: './skill-form.component.html',
})
export class SkillFormComponent implements OnInit {
  @Input() skillForm!: FormGroup;

  skills = scouter.skills;
  skill$!: Observable<SkillSpec>;
  skillLevels$!: Observable<number[]>;
  tripods$!: Array<Observable<Tripod[]>>;

  constructor() {}

  ngOnInit(): void {
    const exists = <T>(value: T | null | undefined): value is T =>
      value != null;

    this.skill$ = this.skillForm.get('name')!.valueChanges.pipe(
      startWith(this.skillForm.get('name')!.value),
      filter(exists),
      map((name) => this.skills.find((skill) => skill.name === name)),
      filter(exists)
    );
    this.skillLevels$ = this.skill$.pipe(
      map((skill) => Object.keys(skill.damageTable).map((x) => +x))
    );
    this.tripods$ = [1, 2, 3].map((tier) =>
      this.skill$.pipe(
        map((skill) => skill.tripods.filter((tripod) => tripod.tier === tier))
      )
    );

    this.skillForm.get('name')!.valueChanges.subscribe(() => {
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
}
