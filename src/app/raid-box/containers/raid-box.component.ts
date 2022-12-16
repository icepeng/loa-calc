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
    파편: new FormControl(0),
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
    혼돈의돌: new FormControl(500),
  });

  tierControl = new FormControl('t3_1302');
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
        this.marketPriceService.getPriceObj('YDayAvgPrice')
      );
    }

    this.raids$ = this.raidControl.valueChanges.pipe(
      startWith(this.raidControl.value),
      map((raid) => raidGroup[raid])
    );
  }
}
