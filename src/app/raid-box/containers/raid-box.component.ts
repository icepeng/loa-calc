import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Title } from '@angular/platform-browser';
import { map, Observable, startWith } from 'rxjs';
import { MarketPriceService } from '../../market-price.service';
import { Raid, raidGroup } from '../data';

@Component({
  selector: 'app-raid-box',
  templateUrl: './raid-box.component.html',
  styleUrls: ['./raid-box.component.scss'],
})
export class RaidBoxComponent implements OnInit {
  priceForm = new FormGroup({
    파편: new FormControl(0.4384),
    운명파편: new FormControl(0.338),
    명돌: new FormControl(17.4),
    위명돌: new FormControl(18.7),
    경명돌: new FormControl(38.9),
    찬명돌: new FormControl(58.4),
    운돌: new FormControl(42),
    위운돌: new FormControl(200),
    수결: new FormControl(0.1),
    파결: new FormControl(0.36),
    수호강석: new FormControl(0.1),
    파괴강석: new FormControl(1.87),
    정제된수호강석: new FormControl(0.25),
    정제된파괴강석: new FormControl(9.69),
    운명의수호석: new FormControl(1.29),
    운명의수호석결정: new FormControl(5),
    운명의파괴석: new FormControl(2.62),
    운명의파괴석결정: new FormControl(10),
    혼돈의돌: new FormControl(500),
  });

  tierControl = new FormControl('t3_1250');
  raidControl = new FormControl('');
  raidList = Object.keys(raidGroup);

  raids$!: Observable<Raid[]>;

  constructor(
    private titleService: Title,
    private marketPriceService: MarketPriceService,
    private snackbar: MatSnackBar
  ) {
    this.titleService.setTitle(
      'LoaCalc : 더보기 손익 - 로스트아크 최적화 계산기'
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

    this.raids$ = this.raidControl.valueChanges.pipe(
      startWith(this.raidControl.value),
      map((raid) => raidGroup[raid])
    );
  }
}
