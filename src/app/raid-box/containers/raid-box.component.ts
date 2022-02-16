import { Clipboard } from '@angular/cdk/clipboard';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Title } from '@angular/platform-browser';
import {
  combineLatest,
  filter,
  map,
  Observable,
  startWith,
  Subscription,
  take,
} from 'rxjs';
import { getSearchScript } from '../../refining/search';
import { RaidBoxSearchDialogComponent } from '../components/raid-box-search-dialog.component';
import { Raid, rewardData } from '../data';

@Component({
  selector: 'app-raid-box',
  templateUrl: './raid-box.component.html',
  styleUrls: ['./raid-box.component.scss'],
})
export class RaidBoxComponent implements OnInit, OnDestroy {
  priceForm = new FormGroup({
    파편: new FormControl(0.1929),
    명돌: new FormControl(20),
    위명돌: new FormControl(18),
    경명돌: new FormControl(22),
    수결: new FormControl(0.1),
    파결: new FormControl(0.92),
    수호강석: new FormControl(0.21),
    파괴강석: new FormControl(4.94),
    혼돈의돌: new FormControl(500),
  });
  checkForm = new FormGroup({
    파편: new FormControl(true),
    하급오레하: new FormControl(true),
    중급오레하: new FormControl(true),
    상급오레하: new FormControl(true),
    명돌: new FormControl(true),
    위명돌: new FormControl(true),
    경명돌: new FormControl(true),
    수결: new FormControl(true),
    파결: new FormControl(true),
    수호강석: new FormControl(true),
    파괴강석: new FormControl(true),
    혼돈의돌: new FormControl(true),
  });

  tierControl = new FormControl('t3_1302');

  raidControl = new FormControl('');
  raidList = Object.keys(rewardData);

  materials$!: Observable<{ name: string; amount: number; price: number }[]>;
  materialPrice$!: Observable<number>;
  openPrice$!: Observable<number>;

  subscription$!: Subscription;

  constructor(
    private titleService: Title,
    private dialog: MatDialog,
    private clipboard: Clipboard,
    private snackbar: MatSnackBar
  ) {
    this.titleService.setTitle(
      'LoaCalc : 더보기 손익 - 로스트아크 최적화 계산기'
    );
  }

  ngOnInit(): void {
    const savedPriceForm = localStorage.getItem('raid_box_priceForm');
    if (savedPriceForm) {
      this.priceForm.patchValue(JSON.parse(savedPriceForm));
    }

    const priceTable$: Observable<Record<string, number>> =
      this.priceForm.valueChanges.pipe(startWith(this.priceForm.value));
    const checkTable$: Observable<Record<string, boolean>> =
      this.checkForm.valueChanges.pipe(startWith(this.checkForm.value));
    const rewardTable$ = this.raidControl.valueChanges.pipe(
      startWith(this.raidControl.value),
      filter((value) => !!value),
      map((raid: Raid) => rewardData[raid])
    );
    const itemTier$ = this.tierControl.valueChanges.pipe(
      startWith(this.tierControl.value)
    );

    this.subscription$ = this.priceForm.valueChanges.subscribe((priceForm) => {
      localStorage.setItem('raid_box_priceForm', JSON.stringify(priceForm));
    });
    this.materials$ = combineLatest([
      priceTable$,
      checkTable$,
      rewardTable$,
      itemTier$,
    ]).pipe(
      map(([priceTable, checkTable, rewardTable, itemTier]) => {
        return Object.entries(rewardTable.rewards)
          .map(([name, amount]): [string, number] => {
            if (itemTier === 't3_1390') {
              if (name === '수결') {
                return ['수호강석', amount / 5];
              }
              if (name === '파결') {
                return ['파괴강석', amount / 5];
              }
              if (name === '위명돌') {
                return ['경명돌', amount / 5];
              }
              if (name === '명돌') {
                return ['경명돌', amount / 25];
              }
            }
            if (itemTier === 't3_1340') {
              if (name === '명돌') {
                return ['위명돌', amount / 5];
              }
            }
            return [name, amount];
          })
          .map(([name, amount]) => ({
            name,
            amount,
            price: checkTable[name] ? priceTable[name] * amount : 0,
          }));
      })
    );
    this.materialPrice$ = this.materials$.pipe(
      map((materials) => materials.reduce((sum, x) => sum + x.price, 0))
    );
    this.openPrice$ = rewardTable$.pipe(
      map((rewardTable) => rewardTable.price)
    );
  }

  openSearchDialog() {
    const copySuccess = this.clipboard.copy(getSearchScript());
    if (copySuccess) {
      this.dialog
        .open(RaidBoxSearchDialogComponent, { disableClose: true })
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

  getCheckControl(name: string) {
    return this.checkForm.get(name) as FormControl;
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }
}
