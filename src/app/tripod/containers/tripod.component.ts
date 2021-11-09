import { Clipboard } from '@angular/cdk/clipboard';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { startWith, Subscription, take } from 'rxjs';
import { combinations } from '../../../util';
import { TripodSearchDialogComponent } from '../components/tripod-search-dialog.component';
import { marketData } from '../data';
import { compose } from '../functions/compose';
import { getSearchScript } from '../functions/search';
import {
  ComposeFilter,
  ComposeResult,
  SearchResult,
  TripodForm,
} from '../functions/type';

@Component({
  selector: 'app-tripod',
  templateUrl: './tripod.component.html',
  styleUrls: ['./tripod.component.scss'],
})
export class TripodComponent implements OnInit, OnDestroy {
  skillList = marketData.marketAuction.marketMenuAuctionSkillList;
  classList = marketData.marketClass;
  categoryList = marketData.marketCategory.filter(
    (category) => category.parent === 10000
  );

  formGroup = new FormGroup({
    classCode: new FormControl(102),
    categoryList: new FormGroup({
      180000: new FormControl(true),
      190010: new FormControl(true),
      190020: new FormControl(true),
      190030: new FormControl(true),
      190040: new FormControl(true),
      190050: new FormControl(true),
    }),
    tripodList: new FormArray(
      Array.from(
        { length: 18 },
        () =>
          new FormGroup({
            skill: new FormControl(null),
            tripod: new FormControl(null),
            level: new FormControl(3),
            required: new FormControl(true),
          })
      )
    ),
  });

  filterForm = new FormGroup({
    tradeLeft: new FormControl(2),
  });

  selectedCategories: number[] = [];
  searchResult: SearchResult[] = [];
  composeResult: ComposeResult[] = [];
  lastFilter: ComposeFilter = this.filterForm.value;
  isLoading = false;

  subscription$!: Subscription;
  worker!: Worker;

  constructor(
    private snackbar: MatSnackBar,
    private clipboard: Clipboard,
    private dialog: MatDialog
  ) {}

  get tripodFormControls() {
    return (this.formGroup.get('tripodList') as FormArray)
      .controls as FormGroup[];
  }

  ngOnInit(): void {
    if (typeof Worker !== 'undefined') {
      this.worker = new Worker(new URL('../tripod.worker', import.meta.url));
    } else {
      this.snackbar.open(
        'Web Worker가 지원되지 않는 브라우저입니다. 최신 브라우저를 사용해주세요.',
        '닫기'
      );
    }

    this.subscription$ = this.formGroup
      .get('categoryList')!
      .valueChanges.pipe(startWith(this.formGroup.value.categoryList))
      .subscribe((categories) => {
        const len = Object.values(categories).filter((x) => x).length * 3;
        const tripodList = this.formGroup.get('tripodList') as FormArray;
        while (len > tripodList.length) {
          tripodList.push(
            new FormGroup({
              skill: new FormControl(null),
              tripod: new FormControl(null),
              level: new FormControl(3),
              required: new FormControl(true),
            })
          );
        }
        while (len < tripodList.length) {
          tripodList.removeAt(tripodList.length - 1);
        }

        this.selectedCategories = Object.entries(categories)
          .filter(([k, v]) => v)
          .map(([k, v]) => +k);
      });

    const savedForm = localStorage.getItem('tripodForm');
    if (savedForm) {
      this.formGroup.setValue(JSON.parse(savedForm));
    }
  }

  ngOnDestroy() {
    this.subscription$.unsubscribe();
  }

  getFilledTripodForm(): (TripodForm & { required: boolean })[] {
    return this.formGroup.value.tripodList.filter(
      (form: any) => form.required && form.skill && form.tripod
    );
  }

  getCombinations() {
    const filledTripodForm = this.getFilledTripodForm();
    const allow33 =
      filledTripodForm.filter((x) => x.level === 4).length <
      this.categoryList.length;
    return Array.from(
      combinations(
        filledTripodForm.map((form: any) => {
          const { required, ...rest } = form;
          return rest;
        }) as TripodForm[],
        2
      )
    ).filter(([a, b]) => allow33 || a.level > 3 || b.level > 3);
  }

  generate() {
    localStorage.setItem('tripodForm', JSON.stringify(this.formGroup.value));

    const requiredTripodMin = this.selectedCategories.length * 2;
    if (this.getFilledTripodForm().length < requiredTripodMin) {
      this.snackbar.open(
        `최소 ${requiredTripodMin}개의 트라이포드를 선택해야 합니다.`,
        '닫기'
      );
      return;
    }

    const searchScript = getSearchScript(
      this.formGroup.value.classCode,
      this.getCombinations()
    );
    const copySuccess = this.clipboard.copy(searchScript);

    if (copySuccess) {
      this.dialog
        .open(TripodSearchDialogComponent, {
          disableClose: true,
        })
        .afterClosed()
        .pipe(take(1))
        .subscribe((data) => {
          if (data) {
            this.searchResult = data;
            this.applySearchResult();
          }
        });
    } else {
      this.snackbar.open('검색 코드 복사에 실패했습니다.', '닫기');
    }
  }

  applySearchResult() {
    if (this.isLoading) {
      return;
    }

    this.isLoading = true;
    const searchResult = this.searchResult;
    this.worker.onmessage = ({ data }) => {
      this.composeResult = data;
      if (this.composeResult.length === 0) {
        this.snackbar.open('조건에 맞는 매물이 없습니다.', '닫기');
      }
      this.lastFilter = this.filterForm.value;
      this.isLoading = false;
    };
    this.worker.onerror = (err) => {
      this.snackbar.open('오류가 발생했습니다. 설명서를 확인해주세요.', '닫기');
      this.isLoading = false;
    };
    this.worker.postMessage({
      searchResult,
      selectedCategories: this.selectedCategories,
      filter: this.filterForm.value,
    });
  }
}
