import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SearchResult } from '../../refining/search';

@Component({
  selector: 'app-raid-box-search-dialog',
  templateUrl: './raid-box-search-dialog.component.html',
  styleUrls: ['./raid-box-search-dialog.component.scss'],
})
export class RaidBoxSearchDialogComponent {
  searchResult = '';
  priceType: 'priceYesterday' | 'priceRecent' | 'priceLowest' =
    'priceYesterday';

  constructor(
    private dialogRef: MatDialogRef<RaidBoxSearchDialogComponent>,
    private snackbar: MatSnackBar
  ) {}

  onSubmit() {
    try {
      const data: SearchResult[] = JSON.parse(this.searchResult);
      const result = {
        파편: Math.min(
          data.find((x) => x.name === '명예의 파편 주머니(소)')![
            this.priceType
          ] / 500,
          data.find((x) => x.name === '명예의 파편 주머니(중)')![
            this.priceType
          ] / 1000,
          data.find((x) => x.name === '명예의 파편 주머니(대)')![
            this.priceType
          ] / 1500
        ),
        명돌: data.find((x) => x.name === '명예의 돌파석')![this.priceType],
        위명돌: data.find((x) => x.name === '위대한 명예의 돌파석')![
          this.priceType
        ],
        경명돌: data.find((x) => x.name === '경이로운 명예의 돌파석')![
          this.priceType
        ],
        찬명돌: data.find((x) => x.name === '찬란한 명예의 돌파석')![
          this.priceType
        ],
        수결: data.find((x) => x.name === '수호석 결정')![this.priceType] / 10,
        파결: data.find((x) => x.name === '파괴석 결정')![this.priceType] / 10,
        수호강석: data.find((x) => x.name === '수호강석')![this.priceType] / 10,
        파괴강석: data.find((x) => x.name === '파괴강석')![this.priceType] / 10,
        정제된수호강석: data.find((x) => x.name === '정제된 수호강석')![this.priceType] / 10,
        정제된파괴강석: data.find((x) => x.name === '정제된 파괴강석')![this.priceType] / 10,
      };
      this.dialogRef.close(
        Object.fromEntries(
          Object.entries(result).map(([key, value]) => [
            key,
            Math.round(value * 10000) / 10000,
          ])
        )
      );
    } catch (err) {
      this.snackbar.open('올바르지 않은 검색 결과 형식입니다.', '닫기');
    }
  }

  onCancel() {
    this.dialogRef.close();
  }
}
