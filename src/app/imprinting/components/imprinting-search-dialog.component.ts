import { Clipboard } from '@angular/cdk/clipboard';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { getSearchScript } from '../functions/search';
import { AccMap, Candidate, Imprint, SearchGrade } from '../functions/type';
import { dedupe, getOverlappingAcc } from '../functions/util';

@Component({
  selector: 'app-imprinting-search-dialog',
  templateUrl: './imprinting-search-dialog.component.html',
  styleUrls: ['./imprinting-search-dialog.component.scss'],
})
export class ImprintingSearchDialogComponent implements OnInit {
  searchResult = '';
  searchMode: '전체' | '압축' = '전체';
  imprintLimit: number = 5;
  toSearch: Imprint[] = [];
  accTypesToSearch: string[] = [];
  candidates: Candidate[] = [];
  compressedCandidates: Candidate[] = [];
  copied = false;

  constructor(
    private dialogRef: MatDialogRef<ImprintingSearchDialogComponent>,
    private snackbar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA)
    public data: {
      candidates: Candidate[];
      searchGrade: SearchGrade;
      accMap: Record<string, AccMap>;
      accTypes: string[];
    },
    private clipboard: Clipboard
  ) {}

  ngOnInit(): void {
    this.imprintLimit = this.data.searchGrade === '유물' ? 5 : 6;
    const overlappingAcc = getOverlappingAcc(this.data.accMap);
    this.accTypesToSearch = this.data.accTypes.filter((acc) => {
      if (acc === '귀걸이2' && overlappingAcc.귀걸이) {
        return false;
      }
      if (acc === '반지2' && overlappingAcc.반지) {
        return false;
      }
      return true;
    });

    const getUnused = (comb: Imprint[]) =>
      comb.filter((imprint) => Object.keys(imprint).includes('잡옵')).length;
    this.compressedCandidates = this.data.candidates.map(
      ({ stoneBook, combinations }) => {
        const maxUnused = Math.max(
          ...combinations.map((comb) => getUnused(comb))
        );
        return {
          stoneBook,
          combinations:
            maxUnused > 0
              ? combinations.filter((comb) => getUnused(comb) >= 1)
              : combinations,
        };
      }
    );
    this.setSearchMode('전체');
  }

  setSearchMode(searchMode: '전체' | '압축') {
    this.searchMode = searchMode;
    if (searchMode === '전체') {
      this.candidates = this.data.candidates;
    }
    if (searchMode === '압축') {
      this.candidates = this.compressedCandidates;
    }
    this.toSearch = dedupe(
      this.candidates.flatMap((candidate) => candidate.combinations).flat()
    );
  }

  copySearchScript() {
    const searchScript = getSearchScript(
      this.toSearch,
      this.data.accTypes,
      this.data.accMap,
      this.data.searchGrade
    );

    const copySuccess = this.clipboard.copy(searchScript);
    if (copySuccess) {
      this.copied = true;
    } else {
      this.snackbar.open('검색 코드 복사에 실패했습니다.', '닫기');
    }
  }

  onSubmit() {
    try {
      const searchResult = JSON.parse(this.searchResult);
      this.dialogRef.close({ searchResult, candidates: this.candidates });
    } catch (err) {
      this.snackbar.open(
        '올바르지 않은 검색 결과 형식입니다. 설명서를 확인해주세요.',
        '닫기'
      );
    }
  }

  onCancel() {
    if (
      !this.copied ||
      window.confirm('경매장 검색 진행중입니다. 정말 취소하시겠습니까?')
    ) {
      this.dialogRef.close();
    }
  }
}
