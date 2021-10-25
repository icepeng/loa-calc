import { Clipboard } from '@angular/cdk/clipboard';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { compose } from '../functions/compose';
import { imprintingFormToken, imprintOptions } from '../functions/const';
import { getCandidates, getCombinations } from '../functions/scan';
import { getSearchScript } from '../functions/search';
import { ComposeResult, Imprint, Item } from '../functions/type';
import { addEntries, dedupe, filterRecord } from '../functions/util';
import { AccFormComponent } from './acc-form.component';
import { ImprintingFormComponent } from './imprinting-form.component';

@Component({
  selector: 'app-imprinting',
  templateUrl: './imprinting.component.html',
  styleUrls: ['./imprinting.component.scss'],
})
export class ImprintingComponent implements OnInit {
  @ViewChild(ImprintingFormComponent) imprintingForm!: ImprintingFormComponent;
  @ViewChild(AccFormComponent) accForm!: AccFormComponent;

  combinations: Imprint[][] = [];
  searchAncient = false;
  searchResult = '';

  filter = {
    effects: {
      치명: 0,
      특화: 0,
      신속: 0,
    },
    hasBuyPrice: false,
    tradeLeft: 0,
  };

  worker: Worker | null = null;
  isLoading = false;
  composeResults: ComposeResult[] = [];

  constructor(private snackbar: MatSnackBar, private clipboard: Clipboard) {}

  ngOnInit(): void {
    if (typeof Worker !== 'undefined') {
      this.worker = new Worker(
        new URL('../imprinting.worker', import.meta.url)
      );
    }
  }

  reset() {
    this.imprintingForm.reset();
    this.accForm.reset();
  }

  generate() {
    const form = {
      target: this.imprintingForm.target,
      stone: this.imprintingForm.stone,
      stonePenalty: this.imprintingForm.stonePenalty,
      book: this.imprintingForm.book,
      accMap: this.accForm.accMap,
    };
    localStorage.setItem(imprintingFormToken, JSON.stringify(form));

    if (form.target.find((x) => x[0] && !imprintOptions.includes(x[0]))) {
      this.snackbar.open('올바르지 않은 목표 각인명이 있습니다.', '닫기');
      return;
    }
    if (
      Object.values(form.accMap).find(
        (x) => !x.dealOption1[0] && !x.dealOption2?.[0]
      )
    ) {
      this.snackbar.open('입력되지 않은 전투 특성이 있습니다.', '닫기');
      return;
    }

    const initial = filterRecord(
      [
        ...form.stone,
        ...form.book,
        ...Object.values(form.accMap)
          .filter((acc) => acc.name)
          .flatMap((acc) => [acc.imprintOption1, acc.imprintOption2]),
      ].reduce((obj, [name, amount]) => {
        obj[name] -= amount;
        return obj;
      }, Object.fromEntries(form.target))
    );

    const accToSearch = Object.entries(form.accMap)
      .filter(([name, acc]) => !acc.name)
      .map((x) => x[0]);

    const imprintLimit = this.searchAncient ? 6 : 5;
    this.combinations = getCandidates(initial, accToSearch.length, imprintLimit)
      .map((candidate) => getCombinations(initial, candidate, imprintLimit))
      .flat();

    if (this.combinations.length === 0) {
      this.snackbar.open('불가능한 목표 각인입니다.', '닫기');
      return;
    }

    const searchScript = getSearchScript(
      dedupe(this.combinations.flat()),
      accToSearch,
      form.accMap,
      this.searchAncient
    );
    const copySuccess = this.clipboard.copy(searchScript);
    if (copySuccess) {
      this.snackbar.open('검색 코드가 복사되었습니다.', '닫기');
      this.searchResult = '';
    } else {
      this.snackbar.open('검색 코드 복사에 실패했습니다.', '닫기');
    }
  }

  getFixedItems(): Record<string, Item> {
    return Object.fromEntries(
      Object.entries(this.accForm.accMap)
        .filter(([name, acc]) => acc.name)
        .map(([name, acc]) => [
          name,
          {
            isFixed: true,
            name: acc.name,
            grade: null,
            tradeLeft: null,
            quality: acc.quality,
            price: 0,
            auctionPrice: 0,
            buyPrice: 0,
            effects: addEntries(
              [
                acc.dealOption1,
                acc.dealOption2,
                acc.imprintOption1,
                acc.imprintOption2,
                acc.imprintPenalty,
              ].filter((x): x is [string, number] => !!x)
            ),
          },
        ])
    );
  }

  applySearchResult() {
    if (this.isLoading) {
      return;
    }

    try {
      this.isLoading = true;
      const composeData = {
        combinations: this.combinations,
        initialEffect: Object.fromEntries([this.imprintingForm.stonePenalty]),
        searchResult: JSON.parse(this.searchResult) as Record<string, Item[]>,
        fixedItems: this.getFixedItems(),
        filter: this.filter,
      };

      if (this.worker) {
        this.worker.onmessage = ({ data }) => {
          this.composeResults = data;
          this.isLoading = false;
        };
        this.worker.onerror = (err) => {
          this.snackbar.open(
            '오류가 발생했습니다. 설명서를 확인해주세요.',
            '닫기'
          );
          this.isLoading = false;
        };
        this.worker.postMessage(composeData);
      } else {
        this.composeResults = compose(
          composeData.combinations,
          composeData.initialEffect,
          composeData.searchResult,
          composeData.fixedItems,
          composeData.filter
        );
        this.isLoading = false;
      }
    } catch (err) {
      this.snackbar.open('오류가 발생했습니다. 설명서를 확인해주세요.', '닫기');
      this.isLoading = false;
      throw err;
    }
  }
}
