import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { refineData } from '../data';
import { fixed, optimize, Path } from '../refine';

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
    골드: new FormControl(1),
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

  noBreathPrice = 0;
  noBreathPath: Path = [];

  fullBreathPrice = 0;
  fullBreathPath: Path = [];

  materials: { name: string; amount: number; price: number }[] = [];
  materialPrice = 0;

  constructor() {}

  ngOnInit(): void {
    const savedPriceForm = localStorage.getItem('priceForm');
    if (savedPriceForm) {
      this.priceForm.patchValue(JSON.parse(savedPriceForm));
    }

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

        this.materials = Object.entries(table.amount).map(([name, amount]) => ({
          name,
          amount,
          price: this.priceForm.value[name] * amount,
        }));
        this.materialPrice = this.materials.reduce(
          (sum, x) => sum + x.price,
          0
        );

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
    const optimal = optimize(
      table,
      this.priceForm.value,
      itemInfo.additionalProb / 100,
      itemInfo.probFromFailure / 100,
      itemInfo.jangin / 100
    );

    this.optimalPrice = optimal.price;
    this.optimalPath = optimal.path;

    const noBreath = fixed(
      table,
      this.priceForm.value,
      itemInfo.additionalProb / 100,
      itemInfo.probFromFailure / 100,
      itemInfo.jangin / 100,
      0
    );

    this.noBreathPrice = noBreath.price;
    this.noBreathPath = noBreath.path;

    const fullBreath = fixed(
      table,
      this.priceForm.value,
      itemInfo.additionalProb / 100,
      itemInfo.probFromFailure / 100,
      itemInfo.jangin / 100,
      Object.keys(table.breath).length
    );

    this.fullBreathPrice = fullBreath.price;
    this.fullBreathPath = fullBreath.path;

    localStorage.setItem('priceForm', JSON.stringify(this.priceForm.value));
  }
}
