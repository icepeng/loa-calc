import { Clipboard } from '@angular/cdk/clipboard';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { compose } from '../functions/compose';
import {
  dealOptions,
  imprintOptions,
  penaltyOptions,
} from '../functions/const';
import { getCandidates, getCombinations } from '../functions/scan';
import { getSearchScript } from '../functions/search';
import { ComposeResult, Imprint, Item, SearchOption } from '../functions/type';
import { dedupe, filterRecord, subtractRecord } from '../functions/util';

@Component({
  selector: 'app-imprinting',
  templateUrl: './imprinting.component.html',
  styleUrls: ['./imprinting.component.scss'],
})
export class ImprintingComponent implements OnInit {
  imprintOptions = imprintOptions;
  penaltyOptions = penaltyOptions;
  dealOptions = dealOptions;

  target: [string, number][] = [
    ['', 0],
    ['', 0],
    ['', 0],
    ['', 0],
    ['', 0],
    ['', 0],
  ];

  stone: [string, number][] = [
    ['', 0],
    ['', 0],
  ];

  stonePenalty: [string, number] = ['', 0];

  book: [string, number][] = [
    ['', 0],
    ['', 0],
  ];

  accMap: Record<string, SearchOption> = {
    목걸이: {
      category: '목걸이',
      quality: 0,
      dealOption1: {
        type: '',
        min: 0,
      },
      dealOption2: {
        type: '',
        min: 0,
      },
    },
    귀걸이1: {
      category: '귀걸이',
      quality: 0,
      dealOption1: {
        type: '',
        min: 0,
      },
    },
    귀걸이2: {
      category: '귀걸이',
      quality: 0,
      dealOption1: {
        type: '',
        min: 0,
      },
    },
    반지1: {
      category: '반지',
      quality: 0,
      dealOption1: {
        type: '',
        min: 0,
      },
    },
    반지2: {
      category: '반지',
      quality: 0,
      dealOption1: {
        type: '',
        min: 0,
      },
    },
  };

  candidates: Imprint[] = [];
  combinations: Imprint[][] = [];
  toSearch: Imprint[] = [];

  searchResult = '';

  filter = {
    치명: 0,
    특화: 0,
    신속: 0,
  };

  worker: Worker | null = null;
  isLoading = false;

  dataSource = new MatTableDataSource<ComposeResult>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private snackbar: MatSnackBar, private clipboard: Clipboard) {}

  ngOnInit(): void {
    const savedForm = localStorage.getItem('imprintingForm');
    if (savedForm) {
      const form = JSON.parse(savedForm);
      this.target = form.target;
      this.stone = form.stone;
      this.stonePenalty = form.stonePenalty;
      this.book = form.book;
      this.accMap = form.accMap;
    }

    if (typeof Worker !== 'undefined') {
      this.worker = new Worker(
        new URL('../imprinting.worker', import.meta.url)
      );
    }
  }

  filterImprint(name: string) {
    return imprintOptions.filter((x) => x.includes(name));
  }

  getTargetImprints() {
    return this.target.map((x) => x[0]).filter((x) => !!x);
  }

  generate() {
    localStorage.setItem(
      'imprintingForm',
      JSON.stringify({
        target: this.target,
        stone: this.stone,
        stonePenalty: this.stonePenalty,
        book: this.book,
        accMap: this.accMap,
      })
    );

    if (
      Object.values(this.accMap).find(
        (x) => !x.dealOption1.type && !x.dealOption2?.type
      )
    ) {
      this.snackbar.open('입력되지 않은 전투 특성이 있습니다.', '닫기');
      return;
    }

    let initial = Object.fromEntries(this.target);
    this.stone.forEach(([name, amount]) => {
      if (initial[name]) {
        initial[name] -= amount;
      }
    });
    this.book.forEach(([name, amount]) => {
      if (initial[name]) {
        initial[name] -= amount;
      }
    });
    initial = filterRecord(initial);

    this.candidates = getCandidates(initial);
    this.combinations = getCombinations(initial, this.candidates);
    this.toSearch = dedupe(this.combinations.flat());

    if (this.toSearch.length === 0) {
      this.snackbar.open('불가능한 목표 각인입니다.', '닫기');
      return;
    }

    const searchScript = getSearchScript(this.toSearch, this.accMap);
    const copySuccess = this.clipboard.copy(searchScript);
    if (copySuccess) {
      this.snackbar.open('검색 코드가 복사되었습니다.', '닫기');
      this.searchResult = '';
    } else {
      this.snackbar.open('검색 코드 복사에 실패했습니다.', '닫기');
    }
  }

  applySearchResult() {
    if (this.isLoading) {
      return;
    }

    try {
      this.dataSource.paginator = this.paginator;
      this.isLoading = true;

      if (this.worker) {
        this.worker.onmessage = ({ data }) => {
          this.dataSource.data = data;
          this.isLoading = false;
        };
        this.worker.postMessage({
          combinations: this.combinations,
          initialEffect: Object.fromEntries([this.stonePenalty]),
          searchResult: JSON.parse(this.searchResult),
          filter: this.filter,
        });
      } else {
        this.dataSource.data = compose(
          this.combinations,
          Object.fromEntries([this.stonePenalty]),
          JSON.parse(this.searchResult),
          this.filter
        );
        this.isLoading = false;
      }
    } catch (err) {
      this.snackbar.open('오류가 발생했습니다. 설명서를 확인해주세요.', '닫기');
      throw err;
    }
  }
}
