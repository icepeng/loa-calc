import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SearchResult } from '../search';

@Component({
  selector: 'app-refining-search-dialog',
  templateUrl: './refining-search-dialog.component.html',
  styleUrls: ['./refining-search-dialog.component.scss'],
})
export class RefiningSearchDialogComponent {
  searchResult = '';
  priceType: 'priceYesterday' | 'priceRecent' | 'priceLowest' =
    'priceYesterday';

  constructor(
    private dialogRef: MatDialogRef<RefiningSearchDialogComponent>,
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
        하급오레하: data.find((x) => x.name === '하급 오레하 융화 재료')![
          this.priceType
        ],
        중급오레하: data.find((x) => x.name === '중급 오레하 융화 재료')![
          this.priceType
        ],
        상급오레하: data.find((x) => x.name === '상급 오레하 융화 재료')![
          this.priceType
        ],
        명돌: data.find((x) => x.name === '명예의 돌파석')![this.priceType],
        위명돌: data.find((x) => x.name === '위대한 명예의 돌파석')![
          this.priceType
        ],
        경명돌: data.find((x) => x.name === '경이로운 명예의 돌파석')![
          this.priceType
        ],
        수결: data.find((x) => x.name === '수호석 결정')![this.priceType] / 10,
        파결: data.find((x) => x.name === '파괴석 결정')![this.priceType] / 10,
        수호강석: data.find((x) => x.name === '수호강석')![this.priceType] / 10,
        파괴강석: data.find((x) => x.name === '파괴강석')![this.priceType] / 10,
        은총: data.find((x) => x.name === '태양의 은총')![this.priceType],
        축복: data.find((x) => x.name === '태양의 축복')![this.priceType],
        가호: data.find((x) => x.name === '태양의 가호')![this.priceType],
        재봉술기본: data.find((x) => x.name === '재봉술 : 수선 기본')![
          this.priceType
        ],
        재봉술응용: data.find((x) => x.name === '재봉술 : 수선 응용')![
          this.priceType
        ],
        재봉술심화: data.find((x) => x.name === '재봉술 : 수선 심화')![
          this.priceType
        ],
        야금술기본: data.find((x) => x.name === '야금술 : 단조 기본')![
          this.priceType
        ],
        야금술응용: data.find((x) => x.name === '야금술 : 단조 응용')![
          this.priceType
        ],
        야금술심화: data.find((x) => x.name === '야금술 : 단조 심화')![
          this.priceType
        ],
      };
      this.dialogRef.close(result);
    } catch (err) {
      this.snackbar.open('올바르지 않은 검색 결과 형식입니다.', '닫기');
    }
  }

  onCancel() {
    this.dialogRef.close();
  }
}
