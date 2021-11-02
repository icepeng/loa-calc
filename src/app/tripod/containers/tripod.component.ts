import { Clipboard } from '@angular/cdk/clipboard';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { startWith, Subscription } from 'rxjs';
import { combinations } from '../../../util';
import { marketData } from '../data';
import { compose } from '../functions/compose';
import { getSearchScript } from '../functions/search';
import { ComposeResult, SearchResult, TripodForm } from '../functions/type';

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
            level: new FormControl(null),
            required: new FormControl(true),
          })
      )
    ),
  });

  lossRateForm = new FormGroup({
    2: new FormControl(10),
    1: new FormControl(50),
    0: new FormControl(100),
  });

  selectedCategories: number[] = [];
  searchResult = '';
  composeResult: ComposeResult[] = [];

  subscription$!: Subscription;

  constructor(private snackbar: MatSnackBar, private clipboard: Clipboard) {}

  get tripodFormControls() {
    return (this.formGroup.get('tripodList') as FormArray)
      .controls as FormGroup[];
  }

  ngOnInit(): void {
    const temp = localStorage.getItem('tripodForm');
    if (temp) {
      this.formGroup.setValue(JSON.parse(temp));
    }

    this.subscription$ = this.formGroup
      .get('categoryList')!
      .valueChanges.pipe(startWith(this.formGroup.value.categoryList))
      .subscribe((categories) => {
        const len = Object.values(categories).filter((x) => x).length * 3;
        const tripodList = this.formGroup.get('tripodList') as FormArray;
        while (len > tripodList.length) {
          tripodList.controls.push(
            new FormGroup({
              skill: new FormControl(null),
              tripod: new FormControl(null),
              level: new FormControl(null),
              required: new FormControl(true),
            })
          );
        }
        while (len < tripodList.length) {
          tripodList.controls.pop();
        }

        this.selectedCategories = Object.entries(categories)
          .filter(([k, v]) => v)
          .map(([k, v]) => +k);
      });
  }

  ngOnDestroy() {
    this.subscription$.unsubscribe();
  }

  getCombinations() {
    return Array.from(
      combinations(
        this.formGroup.value.tripodList
          .filter((form: any) => form.required && form.skill && form.tripod)
          .map((form: any) => {
            const { required, ...rest } = form;
            return rest;
          }) as TripodForm[],
        2
      )
    ).filter(([a, b]) => a.level > 3 || b.level > 3);
  }

  generate() {
    localStorage.setItem('tripodForm', JSON.stringify(this.formGroup.value));
    const searchScript = getSearchScript(
      this.formGroup.value.classCode,
      this.getCombinations()
    );
    this.clipboard.copy(searchScript);
  }

  applySearchResult() {
    try {
      const searchResult = JSON.parse(this.searchResult) as SearchResult[];
      this.composeResult = compose(
        searchResult,
        this.selectedCategories,
        this.lossRateForm.value
      );
    } catch (err) {
      this.snackbar.open('오류가 발생했습니다. 설명서를 확인해주세요.', '닫기');
      throw err;
    }
  }
}
