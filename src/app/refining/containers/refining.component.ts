import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { refineData } from '../data';
import { optimize, Path } from '../refine';

@Component({
  selector: 'app-refining',
  templateUrl: './refining.component.html',
  styleUrls: ['./refining.component.scss'],
})
export class RefiningComponent implements OnInit {
  priceForm = new FormGroup({
    파편: new FormControl(0.324),
    하급오레하: new FormControl(12),
    중급오레하: new FormControl(13),
    상급오레하: new FormControl(25),
    명돌: new FormControl(35),
    위명돌: new FormControl(42),
    경명돌: new FormControl(189),
    수결: new FormControl(0.08),
    파결: new FormControl(1.9),
    수호강석: new FormControl(0.4),
    파괴강석: new FormControl(9.5),
    은총: new FormControl(65),
    축복: new FormControl(156),
    가호: new FormControl(252),
    재봉술기본: new FormControl(34),
    재봉술응용: new FormControl(50),
    재봉술심화: new FormControl(1040),
    야금술기본: new FormControl(90),
    야금술응용: new FormControl(118),
    야금술심화: new FormControl(3100),
  });
  itemForm = new FormGroup({
    type: new FormControl(),
    grade: new FormControl(),
    target: new FormControl(),
    baseProb: new FormControl({ value: null, disabled: true }),
    additionalProb: new FormControl({ value: null, disabled: true }),
    probFromFailure: new FormControl(0),
    totalProb: new FormControl({ value: null, disabled: true }),
    jangin: new FormControl(0),
    applyResearch: new FormControl(false),
  });
  targetList: number[] = [];
  optimalPrice = 0;
  optimalPath: Path = [];

  constructor() {}

  ngOnInit(): void {
    this.itemForm.valueChanges.subscribe((value) => {
      if (value.type && value.grade) {
        const itemType = value.type as string;
        const itemGrade = value.grade as string;
        this.targetList = Object.keys(refineData[itemType][itemGrade]).map(
          (x) => +x
        );
      }

      if (value.type && value.grade && value.target) {
        const itemType = value.type as string;
        const itemGrade = value.grade as string;
        const refineTarget = value.target as number;
        const table = refineData[itemType][itemGrade][refineTarget];

        if (!table) {
          return;
        }

        let additionalProb = 0;
        if (itemGrade !== 't3_1390' && refineTarget <= 15) {
          additionalProb = 20;
          if (value.applyResearch) {
            additionalProb += 10;
          }
        }
        this.itemForm.patchValue(
          {
            baseProb: table.baseProb * 100,
            additionalProb,
            totalProb:
              table.baseProb * 100 + additionalProb + value.probFromFailure,
          },
          {
            emitEvent: false,
          }
        );
      }
    });
  }

  calculate() {
    const itemInfo = this.itemForm.getRawValue();
    const itemType = itemInfo.type as string;
    const itemGrade = itemInfo.grade as string;
    const refineTarget = itemInfo.target as number;
    const table = refineData[itemType][itemGrade][refineTarget];
    const { price, path } = optimize(
      table,
      this.priceForm.value,
      itemInfo.additionalProb / 100,
      itemInfo.probFromFailure / 100,
      itemInfo.jangin / 100
    );

    this.optimalPrice = price;
    this.optimalPath = path;
  }
}
