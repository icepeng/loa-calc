import { Clipboard } from '@angular/cdk/clipboard';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Title } from '@angular/platform-browser';
import { Subscription, take } from 'rxjs';
import { RefiningSearchDialogComponent } from '../components/refining-search-dialog.component';
import { getRefineTable, RefineTable } from '../data';
import { breathNames, fixed, optimize, Path } from '../refine';
import { getSearchScript } from '../search';

@Component({
  selector: 'app-refining',
  templateUrl: './refining.component.html',
  styleUrls: ['./refining.component.scss'],
})
export class RefiningComponent implements OnInit, OnDestroy {
  subscription$!: Subscription;
  priceForm = new FormGroup({
    파편: new FormControl(0.3364),
    하급오레하: new FormControl(14),
    중급오레하: new FormControl(16),
    상급오레하: new FormControl(32),
    명돌: new FormControl(30),
    위명돌: new FormControl(33),
    경명돌: new FormControl(94),
    수결: new FormControl(0.2),
    파결: new FormControl(2.11),
    수호강석: new FormControl(0.61),
    파괴강석: new FormControl(11.59),
    은총: new FormControl(87.9),
    축복: new FormControl(266.5),
    가호: new FormControl(393.8),
    재봉술기본: new FormControl(34.6),
    재봉술응용: new FormControl(34.1),
    재봉술심화: new FormControl(1045.1),
    야금술기본: new FormControl(85.2),
    야금술응용: new FormControl(84.2),
    야금술심화: new FormControl(3030.7),
    골드: new FormControl(1),
  });
  bindedForm = new FormGroup({
    파편: new FormControl(0),
    하급오레하: new FormControl(0),
    중급오레하: new FormControl(0),
    상급오레하: new FormControl(0),
    명돌: new FormControl(0),
    위명돌: new FormControl(0),
    경명돌: new FormControl(0),
    수결: new FormControl(0),
    파결: new FormControl(0),
    수호강석: new FormControl(0),
    파괴강석: new FormControl(0),
    은총: new FormControl(0),
    축복: new FormControl(0),
    가호: new FormControl(0),
    재봉술기본: new FormControl(0),
    재봉술응용: new FormControl(0),
    재봉술심화: new FormControl(0),
    야금술기본: new FormControl(0),
    야금술응용: new FormControl(0),
    야금술심화: new FormControl(0),
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
    private dialog: MatDialog,
    private clipboard: Clipboard,
    private snackbar: MatSnackBar
  ) {
    this.titleService.setTitle(
      'LoaCalc : 재련 최적화 - 로스트아크 최적화 계산기'
    );
  }

  ngOnInit(): void {
    const savedPriceForm = localStorage.getItem('priceForm');
    if (savedPriceForm) {
      this.priceForm.patchValue(JSON.parse(savedPriceForm));
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
      if (itemForm.grade !== 't3_1390' && itemForm.target <= 15) {
        additionalProb = 20;
        if (itemForm.applyResearch) {
          additionalProb += 10;
        }
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

  openSearchDialog() {
    const copySuccess = this.clipboard.copy(getSearchScript());
    if (copySuccess) {
      this.dialog
        .open(RefiningSearchDialogComponent, { disableClose: true })
        .afterClosed()
        .pipe(take(1))
        .subscribe((data) => {
          if (data) {
            this.priceForm.patchValue(data);
          }
        });
    } else {
      this.snackbar.open('검색 코드 복사에 실패했습니다.', '닫기');
    }
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

    localStorage.setItem('priceForm', JSON.stringify(this.priceForm.value));
  }
}
