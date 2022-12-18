import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { MarketPriceService } from '../../market-price.service';
import { getRefineTable, RefineTable } from '../data';
import { breathNames, fixed, optimize, Path } from '../refine';

@Component({
  selector: 'app-refining',
  templateUrl: './refining.component.html',
  styleUrls: ['./refining.component.scss'],
})
export class RefiningComponent implements OnInit, OnDestroy {
  subscription$!: Subscription;
  priceForm = new FormGroup({
    파편: new FormControl(0.4384),
    하급오레하: new FormControl(13.6),
    중급오레하: new FormControl(14.3),
    상급오레하: new FormControl(29.9),
    최상급오레하: new FormControl(72),
    명돌: new FormControl(17.4),
    위명돌: new FormControl(18.7),
    경명돌: new FormControl(38.9),
    찬명돌: new FormControl(58.4),
    수결: new FormControl(0.1),
    파결: new FormControl(0.36),
    수호강석: new FormControl(0.1),
    파괴강석: new FormControl(1.87),
    정제된수호강석: new FormControl(0.25),
    정제된파괴강석: new FormControl(9.69),
    은총: new FormControl(54.1),
    축복: new FormControl(113.2),
    가호: new FormControl(224.1),
    재봉술기본: new FormControl(14.1),
    재봉술응용: new FormControl(5.5),
    재봉술심화: new FormControl(265.4),
    재봉술숙련: new FormControl(911),
    재봉술특화: new FormControl(2023.5),
    야금술기본: new FormControl(31.8),
    야금술응용: new FormControl(12.3),
    야금술심화: new FormControl(478.4),
    야금술숙련: new FormControl(2055.3),
    야금술특화: new FormControl(4848.5),
    골드: new FormControl(1),
  });
  bindedForm = new FormGroup({
    파편: new FormControl(0),
    하급오레하: new FormControl(0),
    중급오레하: new FormControl(0),
    상급오레하: new FormControl(0),
    최상급오레하: new FormControl(0),
    명돌: new FormControl(0),
    위명돌: new FormControl(0),
    경명돌: new FormControl(0),
    찬명돌: new FormControl(0),
    수결: new FormControl(0),
    파결: new FormControl(0),
    수호강석: new FormControl(0),
    파괴강석: new FormControl(0),
    정제된수호강석: new FormControl(0),
    정제된파괴강석: new FormControl(0),
    은총: new FormControl(0),
    축복: new FormControl(0),
    가호: new FormControl(0),
    재봉술기본: new FormControl(0),
    재봉술응용: new FormControl(0),
    재봉술심화: new FormControl(0),
    재봉술숙련: new FormControl(0),
    재봉술특화: new FormControl(0),
    야금술기본: new FormControl(0),
    야금술응용: new FormControl(0),
    야금술심화: new FormControl(0),
    야금술숙련: new FormControl(0),
    야금술특화: new FormControl(0),
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
    applyHyperExpress: new FormControl(false),
  });
  reduceBindedMaterials = false;
  reduceBindedBooks = false;
  reduceBindedBreathes = false;

  optimalPrice = 0;
  optimalPath: Path = [];

  noBreathPrice = 0;
  noBreathPath: Path = [];

  fullBreathPrice = 0;
  fullBreathPath: Path = [];

  materials: { name: string; amount: number; price: number }[] = [];
  materialPrice = 0;
  breathes: { name: string; prob: number; amount: number; price: number }[] =
    [];

  constructor(
    private titleService: Title,
    private marketPriceService: MarketPriceService,
    private snackbar: MatSnackBar
  ) {
    this.titleService.setTitle(
      'LoaCalc : 재련 최적화 - 로스트아크 최적화 계산기'
    );
  }

  async ngOnInit() {
    if (!this.marketPriceService.data) {
      await this.marketPriceService
        .updateData()
        .catch(() =>
          this.snackbar.open(
            '가격 정보를 가져오는 중에 오류가 발생하였습니다.',
            '닫기'
          )
        );
    }
    if (this.marketPriceService.data) {
      this.priceForm.patchValue(
        this.marketPriceService.getPriceObj('YDayAvgPrice')
      );
    }

    this.subscription$ = this.itemForm.valueChanges.subscribe((itemForm) => {
      const table = getRefineTable(
        itemForm.type,
        itemForm.grade,
        itemForm.target
      );

      if (!table) {
        return;
      }

      this.setMaterials(table, this.priceForm.value);

      let additionalProb = 0;
      if (
        (itemForm.grade === 't3_1340' || itemForm.grade === 't3_1302') &&
        itemForm.target <= 15
      ) {
        additionalProb = 20;
        if (itemForm.applyResearch) {
          additionalProb += 10;
        }
      }
      if (
        itemForm.grade === 't3_1340' &&
        itemForm.target >= 16 &&
        itemForm.target <= 17 &&
        itemForm.applyHyperExpress
      ) {
        additionalProb += 5;
      }

      this.itemForm.patchValue(
        {
          baseProb: table.baseProb * 100,
          additionalProb,
          totalProb:
            table.baseProb * 100 + additionalProb + itemForm.probFromFailure,
        },
        {
          emitEvent: false,
        }
      );
    });

    this.priceForm.valueChanges.subscribe((priceForm) => {
      const itemForm = this.itemForm.value;
      const table = getRefineTable(
        itemForm.type,
        itemForm.grade,
        itemForm.target
      );

      if (!table) {
        return;
      }

      this.setMaterials(table, priceForm);
    });
  }

  ngOnDestroy() {
    this.subscription$.unsubscribe();
  }

  setMaterials(refineTable: RefineTable, priceForm: Record<string, number>) {
    this.materials = Object.entries(refineTable.amount).map(
      ([name, amount]) => ({
        name,
        amount,
        price: priceForm[name] * amount,
      })
    );
    this.materialPrice = this.materials.reduce((sum, x) => sum + x.price, 0);
    this.breathes = Object.entries(refineTable.breath).map(
      ([name, [amount, prob]]) => ({
        name,
        amount,
        prob,
        price: priceForm[name],
      })
    );
  }

  calculate() {
    const itemInfo = this.itemForm.getRawValue();
    const table = getRefineTable(
      itemInfo.type,
      itemInfo.grade,
      itemInfo.target
    );
    if (!table) {
      return;
    }

    const bindedMap = Object.fromEntries([
      ...(this.reduceBindedMaterials
        ? this.materials.map((material) => [
            material.name,
            this.bindedForm.value[material.name],
          ])
        : []),
      ...(this.reduceBindedBooks
        ? this.breathes
            .filter((breath) => !breathNames.includes(breath.name))
            .map((breath) => [breath.name, this.bindedForm.value[breath.name]])
        : []),
      ...(this.reduceBindedBreathes
        ? breathNames.map((name) => [name, this.bindedForm.value[name]])
        : []),
    ]);

    const optimal = optimize(
      table,
      this.priceForm.value,
      bindedMap,
      itemInfo.additionalProb / 100,
      itemInfo.probFromFailure / 100,
      itemInfo.jangin / 100
    );

    this.optimalPrice = optimal.price;
    this.optimalPath = optimal.path;

    const noBreath = fixed(
      table,
      this.priceForm.value,
      bindedMap,
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
      bindedMap,
      itemInfo.additionalProb / 100,
      itemInfo.probFromFailure / 100,
      itemInfo.jangin / 100,
      Object.keys(table.breath).length
    );

    this.fullBreathPrice = fullBreath.price;
    this.fullBreathPath = fullBreath.path;
  }
}
