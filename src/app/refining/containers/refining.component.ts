import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { MarketPriceService } from '../../market-price.service';
import { RefineCautionDialogComponent } from '../components/refine-caution-dialog.component';
import { RefineTable, getRefineTable } from '../data';
import { Path, breathNames, fixed, optimize } from '../refine';

@Component({
  selector: 'app-refining',
  templateUrl: './refining.component.html',
  styleUrls: ['./refining.component.scss'],
})
export class RefiningComponent implements OnInit, OnDestroy {
  subscription$!: Subscription;
  priceForm = new FormGroup({
    파편: new FormControl(0),
    운명파편: new FormControl(0),
    중급오레하: new FormControl(0),
    상급오레하: new FormControl(0),
    최상급오레하: new FormControl(0),
    아비도스: new FormControl(0),
    명돌: new FormControl(0),
    위명돌: new FormControl(0),
    경명돌: new FormControl(0),
    찬명돌: new FormControl(0),
    운돌: new FormControl(0),
    수결: new FormControl(0),
    파결: new FormControl(0),
    수호강석: new FormControl(0),
    파괴강석: new FormControl(0),
    정제된수호강석: new FormControl(0),
    정제된파괴강석: new FormControl(0),
    운명의수호석: new FormControl(0),
    운명의파괴석: new FormControl(0),
    은총: new FormControl(0),
    축복: new FormControl(0),
    가호: new FormControl(0),
    빙하: new FormControl(0),
    용암: new FormControl(0),
    재봉술기본: new FormControl(0),
    재봉술응용: new FormControl(0),
    재봉술심화: new FormControl(0),
    재봉술숙련: new FormControl(0),
    재봉술특화: new FormControl(0),
    재봉술전문: new FormControl(0),
    재봉술복합: new FormControl(0),
    재봉술업화A: new FormControl(0),
    재봉술업화B: new FormControl(0),
    야금술기본: new FormControl(0),
    야금술응용: new FormControl(0),
    야금술심화: new FormControl(0),
    야금술숙련: new FormControl(0),
    야금술특화: new FormControl(0),
    야금술전문: new FormControl(0),
    야금술복합: new FormControl(0),
    야금술업화A: new FormControl(0),
    야금술업화B: new FormControl(0),
    골드: new FormControl(1),
  });
  bindedForm = new FormGroup({
    파편: new FormControl(0),
    운명파편: new FormControl(0),
    중급오레하: new FormControl(0),
    상급오레하: new FormControl(0),
    최상급오레하: new FormControl(0),
    아비도스: new FormControl(0),
    명돌: new FormControl(0),
    위명돌: new FormControl(0),
    경명돌: new FormControl(0),
    찬명돌: new FormControl(0),
    운돌: new FormControl(0),
    수결: new FormControl(0),
    파결: new FormControl(0),
    수호강석: new FormControl(0),
    파괴강석: new FormControl(0),
    정제된수호강석: new FormControl(0),
    정제된파괴강석: new FormControl(0),
    운명의수호석: new FormControl(0),
    운명의파괴석: new FormControl(0),
    은총: new FormControl(0),
    축복: new FormControl(0),
    가호: new FormControl(0),
    빙하: new FormControl(0),
    용암: new FormControl(0),
    재봉술기본: new FormControl(0),
    재봉술응용: new FormControl(0),
    재봉술심화: new FormControl(0),
    재봉술숙련: new FormControl(0),
    재봉술특화: new FormControl(0),
    재봉술전문: new FormControl(0),
    재봉술복합: new FormControl(0),
    재봉술업화A: new FormControl(0),
    재봉술업화B: new FormControl(0),
    야금술기본: new FormControl(0),
    야금술응용: new FormControl(0),
    야금술심화: new FormControl(0),
    야금술숙련: new FormControl(0),
    야금술특화: new FormControl(0),
    야금술전문: new FormControl(0),
    야금술복합: new FormControl(0),
    야금술업화A: new FormControl(0),
    야금술업화B: new FormControl(0),
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
    private snackbar: MatSnackBar,
    private dialog: MatDialog
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
        this.marketPriceService.getPriceObj('RecentPrice')
      );
    }

    this.subscription$ = this.itemForm.valueChanges.subscribe((itemForm) => {
      const table = getRefineTable(
        itemForm.type,
        itemForm.grade,
        itemForm.target,
        itemForm.applyResearch,
        itemForm.applyHyperExpress
      );

      if (!table) {
        return;
      }

      this.setMaterials(table, this.priceForm.value);

      this.itemForm.patchValue(
        {
          baseProb: table.baseProb * 100,
          additionalProb: table.additionalProb * 100,
          totalProb:
            table.baseProb * 100 +
            table.additionalProb * 100 +
            itemForm.probFromFailure,
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
        itemForm.target,
        itemForm.applyResearch,
        itemForm.applyHyperExpress
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

  onCautionLaunch() {
    this.dialog.open(RefineCautionDialogComponent, {
      maxWidth: '480px',
    });
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
      itemInfo.target,
      itemInfo.applyResearch,
      itemInfo.applyHyperExpress
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
      itemInfo.probFromFailure / 100,
      itemInfo.jangin / 100
    );

    this.optimalPrice = optimal.price;
    this.optimalPath = optimal.path;

    const noBreath = fixed(
      table,
      this.priceForm.value,
      bindedMap,
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
      itemInfo.probFromFailure / 100,
      itemInfo.jangin / 100,
      Object.keys(table.breath).length
    );

    this.fullBreathPrice = fullBreath.price;
    this.fullBreathPath = fullBreath.path;
  }
}
