import { Clipboard } from '@angular/cdk/clipboard';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Title } from '@angular/platform-browser';
import { startWith, Subject, take, takeUntil } from 'rxjs';
import { combinations } from '../../../util';
import { TripodSearchDialogComponent } from '../components/tripod-search-dialog.component';
import { marketData } from '../data';
import { getSearchScript } from '../functions/search';
import {
  ComposeFilter,
  ComposeResult,
  SearchResult,
  Summary,
  TripodValue,
} from '../functions/type';
import { getTripodString } from '../functions/util';

@Component({
  selector: 'app-tripod',
  templateUrl: './tripod.component.html',
  styleUrls: ['./tripod.component.scss'],
})
export class TripodComponent implements OnInit, OnDestroy {
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
    requiredTripods: new FormControl([]),
  });
  fixedItems: ComposeFilter['fixedItems'] = {};
  fixedItemsLength = 0;
  excludedItems: ComposeFilter['excludedItems'] = {
    180000: [],
    190010: [],
    190020: [],
    190030: [],
    190040: [],
    190050: [],
  };
  excludedItemsLength = 0;

  filledTripodForm: TripodValue[] = [];
  tripodFilters: { text: string; value: TripodValue }[] = [];

  selectedCategories: number[] = [];

  searchResult: SearchResult[] = [];
  composeResult: ComposeResult[] = [];
  searchResultCategories: number[] = [];
  lastFilter: ComposeFilter = this.filterForm.value;
  isLoading = false;
  hoveredResult: ComposeResult | null = null;

  subscribe$ = new Subject<void>();
  worker!: Worker;

  constructor(
    private snackbar: MatSnackBar,
    private clipboard: Clipboard,
    private dialog: MatDialog,
    private titleService: Title
  ) {
    this.titleService.setTitle(
      'LoaCalc : 트포 도시락 - 로스트아크 최적화 계산기'
    );
  }

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

    this.formGroup
      .get('categoryList')!
      .valueChanges.pipe(
        takeUntil(this.subscribe$),
        startWith(this.formGroup.value.categoryList)
      )
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

    this.formGroup
      .get('tripodList')!
      .valueChanges.pipe(
        takeUntil(this.subscribe$),
        startWith(this.formGroup.value.tripodList)
      )
      .subscribe((tripodList) => {
        this.filledTripodForm = tripodList
          .filter((form: any) => form.required && form.skill && form.tripod)
          .map((form: any) => {
            const { required, ...rest } = form;
            return rest;
          }) as TripodValue[];
        this.tripodFilters = this.filledTripodForm
          .map((value) => {
            const text = getTripodString(value);
            return {
              text,
              value,
            };
          })
          .sort((a, b) => a.text.localeCompare(b.text));
      });

    const savedForm = localStorage.getItem('tripodForm');
    if (savedForm) {
      this.formGroup.setValue(JSON.parse(savedForm));
    }
  }

  ngOnDestroy() {
    this.subscribe$.next();
    this.subscribe$.complete();
  }

  resetForm() {
    this.formGroup.patchValue({
      categoryList: {
        180000: true,
        190010: true,
        190020: true,
        190030: true,
        190040: true,
        190050: true,
      },
      tripodList: Array.from({ length: 18 }, () => ({
        skill: null,
        tripod: null,
        level: 3,
        required: true,
      })),
    });
  }

  resetTripodFilter() {
    this.filterForm.get('requiredTripods')!.reset([]);
  }

  hoverResult(result: ComposeResult | null) {
    this.hoveredResult = result;
  }

  fixItem({ category, summary }: { category: number; summary: Summary }) {
    this.fixedItems[category] = summary;
    this.fixedItemsLength = Object.keys(this.fixedItems).length;
    this.applySearchResult();
  }

  resetFixedItems() {
    this.fixedItems = {};
    this.fixedItemsLength = 0;
  }

  excludeItem({ category, summary }: { category: number; summary: Summary }) {
    this.excludedItems[category].push(summary);
    this.excludedItemsLength += 1;
    this.applySearchResult();
  }

  resetExcludedItems() {
    this.excludedItems = {
      180000: [],
      190010: [],
      190020: [],
      190030: [],
      190040: [],
      190050: [],
    };
    this.excludedItemsLength = 0;
  }

  getCombinations() {
    const allow33 =
      this.filledTripodForm.filter((x) => x.level === 4).length <
      this.categoryList.length;
    return Array.from(combinations(this.filledTripodForm, 2)).filter(
      ([a, b]) => allow33 || a.level > 3 || b.level > 3
    ) as [TripodValue, TripodValue][];
  }

  generate() {
    localStorage.setItem('tripodForm', JSON.stringify(this.formGroup.value));
    if (this.filledTripodForm.length <= 0) {
      this.snackbar.open(`최소 1개의 트라이포드를 선택해야 합니다.`, '닫기');
      return;
    }

    const searchScript = getSearchScript(this.formGroup.value.classCode, [
      ...this.getCombinations(),
      ...Array.from(combinations(this.filledTripodForm, 1)),
    ]);
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
            this.searchResultCategories = this.selectedCategories;
            this.resetTripodFilter();
            this.resetFixedItems();
            this.resetExcludedItems();
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
      tripods: this.filledTripodForm,
      selectedCategories: this.selectedCategories,
      filter: {
        ...this.filterForm.value,
        fixedItems: this.fixedItems,
        excludedItems: this.excludedItems,
      },
    });
  }
}
