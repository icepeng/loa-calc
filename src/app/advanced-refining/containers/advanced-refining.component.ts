import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Title } from '@angular/platform-browser';
import { combineLatest, startWith, Subject, takeUntil } from 'rxjs';
import { MarketPriceService } from '../../market-price.service';
import { AdvancedRefineTable, getAdvancedRefineTable } from '../data';
import { AdvancedRefineReport, getReport } from '../logic';

@Component({
  selector: 'app-advanced-refining',
  templateUrl: './advanced-refining.component.html',
  styleUrls: ['./advanced-refining.component.scss'],
})
export class AdvancedRefiningComponent implements OnInit, OnDestroy {
  priceForm = new FormGroup({
    파편: new FormControl(0),
    운명파편: new FormControl(0),
    최상급오레하: new FormControl(0),
    아비도스: new FormControl(0),
    찬명돌: new FormControl(0),
    운돌: new FormControl(0),
    위운돌: new FormControl(0),
    정제된수호강석: new FormControl(0),
    운명의수호석: new FormControl(0),
    운명의수호석결정: new FormControl(0),
    정제된파괴강석: new FormControl(0),
    운명의파괴석: new FormControl(0),
    운명의파괴석결정: new FormControl(0),
    은총: new FormControl(0),
    축복: new FormControl(0),
    가호: new FormControl(0),
    빙하: new FormControl(0),
    용암: new FormControl(0),
    장인의야금술1단계: new FormControl(0),
    장인의야금술2단계: new FormControl(0),
    장인의야금술3단계: new FormControl(0),
    장인의야금술4단계: new FormControl(0),
    장인의재봉술1단계: new FormControl(0),
    장인의재봉술2단계: new FormControl(0),
    장인의재봉술3단계: new FormControl(0),
    장인의재봉술4단계: new FormControl(0),
    골드: new FormControl(1),
  });
  bindedForm = new FormGroup({
    파편: new FormControl(true),
    운명파편: new FormControl(true),
    최상급오레하: new FormControl(true),
    아비도스: new FormControl(true),
    찬명돌: new FormControl(true),
    운돌: new FormControl(true),
    위운돌: new FormControl(true),
    정제된수호강석: new FormControl(true),
    운명의수호석: new FormControl(true),
    운명의수호석결정: new FormControl(true),
    정제된파괴강석: new FormControl(true),
    운명의파괴석: new FormControl(true),
    운명의파괴석결정: new FormControl(true),
    은총: new FormControl(true),
    축복: new FormControl(true),
    가호: new FormControl(true),
    빙하: new FormControl(true),
    용암: new FormControl(true),
    장인의야금술1단계: new FormControl(true),
    장인의야금술2단계: new FormControl(true),
    장인의야금술3단계: new FormControl(true),
    장인의야금술4단계: new FormControl(true),
    장인의재봉술1단계: new FormControl(true),
    장인의재봉술2단계: new FormControl(true),
    장인의재봉술3단계: new FormControl(true),
    장인의재봉술4단계: new FormControl(true),
    골드: new FormControl({ value: true, disabled: true }),
  });
  itemForm = new FormGroup({
    type: new FormControl(),
    target: new FormControl(),
  });

  materials: { name: string; amount: number; price: number }[] = [];
  materialPrice = 0;
  breathes: { name: string; amount: number; price: number }[] = [];

  reports: AdvancedRefineReport[] = [];
  tableRows: string[] = [
    'normalBreathNames',
    'bonusBreathNames',
    'paidNormalPrice',
    'freeNormalPrice',
    'bonusPrice',
    'expectedTryCount',
    'expectedPrice',
  ];

  unsubscribe$ = new Subject<boolean>();

  constructor(
    private titleService: Title,
    private marketPriceService: MarketPriceService,
    private snackbar: MatSnackBar
  ) {
    this.titleService.setTitle(
      'LoaCalc : 상급 재련 최적화 - 로스트아크 최적화 계산기'
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

    this.itemForm.valueChanges
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((itemForm) => {
        if (!itemForm.type || !itemForm.target) {
          return;
        }

        const table = getAdvancedRefineTable(itemForm.type, itemForm.target);

        if (!table) {
          return;
        }

        this.setMaterials(table, this.priceForm.value, this.bindedForm.value);
      });

    combineLatest([
      this.priceForm.valueChanges.pipe(startWith(this.priceForm.value)),
      this.bindedForm.valueChanges.pipe(startWith(this.bindedForm.value)),
    ])
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(([priceForm, bindedForm]) => {
        const itemForm = this.itemForm.value;

        if (!itemForm.type || !itemForm.target) {
          return;
        }

        const table = getAdvancedRefineTable(itemForm.type, itemForm.target);

        if (!table) {
          return;
        }

        this.setMaterials(table, priceForm, bindedForm);
      });
  }

  ngOnDestroy() {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }

  setMaterials(
    table: AdvancedRefineTable,
    priceForm: Record<string, number>,
    bindedForm: Record<string, boolean>
  ) {
    this.materials = Object.entries(table.amount).map(([name, amount]) => ({
      name,
      amount,
      price:
        priceForm[name] *
        amount *
        (name === '골드' || bindedForm[name] ? 1 : 0),
    }));
    this.materialPrice = this.materials.reduce((sum, x) => sum + x.price, 0);
    this.breathes = [
      ...Object.entries(table.breath).map(([name, amount]) => ({
        name,
        amount,
        price: priceForm[name] * (bindedForm[name] ? 1 : 0),
      })),
      ...(table.book
        ? [{ name: table.book, amount: 1, price: priceForm[table.book] }]
        : []),
    ];
  }

  calculate() {
    const itemInfo = this.itemForm.getRawValue();
    const table = getAdvancedRefineTable(itemInfo.type, itemInfo.target);
    if (!table) {
      return;
    }

    this.reports = getReport(
      table,
      Object.fromEntries(
        Object.entries(this.priceForm.value as Record<string, number>).map(
          ([name, price]) => [
            name,
            price * (name === '골드' || this.bindedForm.value[name] ? 1 : 0),
          ]
        )
      )
    );
    this.tableRows = this.reports[0].hasEnhancedBonus
      ? [
          'normalBreathNames',
          'bonusBreathNames',
          'enhancedBonusBreathNames',
          'paidNormalPrice',
          // 'paidNormalTry',
          'freeNormalPrice',
          // 'freeNormalTry',
          'bonusPrice',
          // 'bonusTry',
          'enhancedBonusPrice',
          // 'enhancedBonusTry',
          'expectedTryCount',
          'expectedPrice',
        ]
      : [
          'normalBreathNames',
          'bonusBreathNames',
          'paidNormalPrice',
          // 'paidNormalTry',
          'freeNormalPrice',
          // 'freeNormalTry',
          'bonusPrice',
          // 'bonusTry',
          'expectedTryCount',
          'expectedPrice',
        ];
  }

  trackByIndex(index: number) {
    return index;
  }

  trackByMaterial(index: number, material: { name: string }) {
    return material.name;
  }
}
