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
import { Raid, raidGroup, rewardData } from '../data';

@Component({
  selector: 'app-raid-box',
  templateUrl: './raid-box.component.html',
  styleUrls: ['./raid-box.component.scss'],
})
export class RaidBoxComponent implements OnInit, OnDestroy {
  priceForm = new FormGroup({
    파편: new FormControl(0.3648),
    명돌: new FormControl(13.5),
    위명돌: new FormControl(21.1),
    경명돌: new FormControl(41.2),
    수결: new FormControl(0.1),
    파결: new FormControl(0.68),
    수호강석: new FormControl(0.1),
    파괴강석: new FormControl(3.58),
    혼돈의돌: new FormControl(500),
  });

  tierControl = new FormControl('t3_1302');
  raidControl = new FormControl('');
  raidList = Object.keys(raidGroup);

  raids$!: Observable<Raid[]>;
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

    this.raids$ = this.raidControl.valueChanges.pipe(
      startWith(this.raidControl.value),
      map((raid) => raidGroup[raid])
    );
    this.subscription$ = this.priceForm.valueChanges.subscribe((priceForm) => {
      localStorage.setItem('raid_box_priceForm', JSON.stringify(priceForm));
    });
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

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }
}
