import { Clipboard } from '@angular/cdk/clipboard';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Title } from '@angular/platform-browser';
import { take } from 'rxjs';
import { ImprintingSearchDialogComponent } from '../components/imprinting-search-dialog.component';
import {
  imprintingFormToken,
  imprintOptions,
  initialAccMap,
  penaltyOptions,
} from '../functions/const';
import { getCombinations } from '../functions/scan';
import { getSearchScript } from '../functions/search';
import {
  AccMap,
  Candidate,
  ComposeFilter,
  ComposeResult,
  Item,
  SearchGrade,
  StoneBook,
} from '../functions/type';
import {
  addItemsToSearchResult,
  dedupe,
  filterRecord,
  getFixedItem,
} from '../functions/util';
import { AccFormDialogComponent } from './acc-form-dialog.component';

@Component({
  selector: 'app-imprinting',
  templateUrl: './imprinting.component.html',
  styleUrls: ['./imprinting.component.scss'],
})
export class ImprintingComponent implements OnInit {
  target: [string, number][] = [
    ['', 0],
    ['', 0],
    ['', 0],
    ['', 0],
    ['', 0],
    ['', 0],
    ['', 0],
  ];

  stoneBooks: StoneBook[] = [
    {
      index: 0,
      stone: [
        ['', 0],
        ['', 0],
      ],
      stonePenalty: ['', 0],
      book: [
        ['', 0],
        ['', 0],
      ],
    },
  ];

  accMap: Record<string, AccMap> = initialAccMap;

  penaltyOptions = penaltyOptions;

  candidates: Candidate[] = [];
  searchGrade: SearchGrade = '유물';
  searchResult: Record<string, Item[]> = {};

  filter: ComposeFilter = {
    effects: {
      치명: 0,
      특화: 0,
      신속: 0,
    },
    hasBuyPrice: true,
    allowedPenalties: [],
    tradeLeft: 0,
    ancientCountMin: 0,
    exclude: new Set<string>(),
  };
  additionalItems: {
    acc: AccMap;
    price: number;
  }[] = [];

  worker!: Worker;
  isLoading = false;
  progress = 0;
  composeResults: ComposeResult[] = [];

  constructor(
    private snackbar: MatSnackBar,
    private clipboard: Clipboard,
    private dialog: MatDialog,
    private titleService: Title
  ) {
    this.titleService.setTitle(
      'LoaCalc : 각인 최적화 - 로스트아크 최적화 계산기'
    );
  }

  ngOnInit(): void {
    if (typeof Worker !== 'undefined') {
      this.worker = new Worker(
        new URL('../imprinting.worker', import.meta.url)
      );
    } else {
      this.snackbar.open(
        'Web Worker가 지원되지 않는 브라우저입니다. 최신 브라우저를 사용해주세요.',
        '닫기'
      );
    }
    const savedForm = localStorage.getItem(imprintingFormToken);
    if (savedForm) {
      const form = JSON.parse(savedForm);
      this.target = form.target;
      this.stoneBooks = form.stoneBooks;
      this.accMap = form.accMap;
    }
  }

  reset() {
    this.target = [
      ['', 0],
      ['', 0],
      ['', 0],
      ['', 0],
      ['', 0],
      ['', 0],
      ['', 0],
    ];
    this.stoneBooks = [
      {
        index: 0,
        stone: [
          ['', 0],
          ['', 0],
        ],
        stonePenalty: ['', 0],
        book: [
          ['', 0],
          ['', 0],
        ],
      },
    ];
    this.accMap = JSON.parse(JSON.stringify(initialAccMap));
  }

  addItemDialog() {
    this.dialog
      .open(AccFormDialogComponent, {
        disableClose: true,
      })
      .afterClosed()
      .pipe(take(1))
      .subscribe((data: { acc: AccMap; price: number }) => {
        if (data) {
          this.additionalItems.push(data);
        }
      });
  }

  resetAdditionalItems() {
    this.additionalItems = [];
  }

  exclude(item: Item) {
    this.filter.exclude.add(item.id!);
    this.applySearchResult();
  }

  resetExcludeFilter() {
    this.filter.exclude = new Set();
  }

  generate() {
    const form = {
      target: this.target,
      stoneBooks: this.stoneBooks,
      accMap: this.accMap,
    };
    localStorage.setItem(imprintingFormToken, JSON.stringify(form));

    if (form.target.find((x) => x[0] && !imprintOptions.includes(x[0]))) {
      this.snackbar.open('올바르지 않은 목표 각인명이 있습니다.', '닫기');
      return;
    }
    if (
      Object.values(form.accMap).find(
        (x) =>
          !x.dealOption1[0] ||
          (x.category === '목걸이' ? !x.dealOption2![0] : false)
      )
    ) {
      this.snackbar.open('입력되지 않은 전투 특성이 있습니다.', '닫기');
      return;
    }

    const accTypes = Object.entries(form.accMap)
      .filter(([name, acc]) => !acc.name)
      .map((x) => x[0]);

    const imprintLimit = this.searchGrade === '유물' ? 5 : 6;

    this.candidates = form.stoneBooks.map((stoneBook) => {
      const initial = filterRecord(
        [
          ...stoneBook.stone,
          ...stoneBook.book,
          ...Object.values(form.accMap)
            .filter((acc) => acc.name)
            .flatMap((acc) => [acc.imprintOption1, acc.imprintOption2]),
        ].reduce((obj, [name, amount]) => {
          obj[name] -= amount;
          return obj;
        }, Object.fromEntries(form.target))
      );

      const combinations = getCombinations(
        initial,
        accTypes.length,
        imprintLimit
      );

      return {
        stoneBook,
        combinations,
      };
    });

    const impossibleIndex = this.candidates.findIndex(
      (candidate) => candidate.combinations.length === 0
    );
    if (impossibleIndex !== -1) {
      this.snackbar.open(
        `불가능한 목표 각인입니다: #${impossibleIndex + 1}`,
        '닫기'
      );
      return;
    }

    const searchScript = getSearchScript(
      dedupe(
        this.candidates.flatMap((candidate) => candidate.combinations).flat()
      ),
      accTypes,
      form.accMap,
      this.searchGrade
    );

    const copySuccess = this.clipboard.copy(searchScript);
    if (copySuccess) {
      this.dialog
        .open(ImprintingSearchDialogComponent, {
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
      this.filter.exclude = new Set();
    } else {
      this.snackbar.open('검색 코드 복사에 실패했습니다.', '닫기');
    }
  }

  getFixedItems(): Record<string, Item> {
    return Object.fromEntries(
      Object.entries(this.accMap)
        .filter(([name, acc]) => acc.name)
        .map(([name, acc]) => [name, getFixedItem(acc)])
    );
  }

  applySearchResult() {
    if (this.isLoading) {
      return;
    }

    this.isLoading = true;
    this.worker.onmessage = ({ data }) => {
      if (data.done) {
        this.composeResults = data.result;
        if (this.composeResults.length === 0) {
          this.snackbar.open('조건에 맞는 매물이 없습니다.', '닫기');
        }
        this.isLoading = false;
      } else {
        this.progress = data.finished / data.total;
      }
    };
    this.worker.onerror = (err) => {
      this.snackbar.open('오류가 발생했습니다. 설명서를 확인해주세요.', '닫기');
      this.isLoading = false;
    };

    this.worker.postMessage({
      candidates: this.candidates,
      accMap: this.accMap,
      searchResult: addItemsToSearchResult(
        this.searchResult,
        this.accMap,
        this.additionalItems
      ),
      fixedItems: this.getFixedItems(),
      filter: this.filter,
    });
  }
}
