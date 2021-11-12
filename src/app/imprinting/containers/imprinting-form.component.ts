import { Component, Input, OnInit } from '@angular/core';
import {
  imprintingFormToken,
  imprintOptions,
  penaltyOptions,
} from '../functions/const';
import { StoneBook } from '../functions/type';

@Component({
  selector: 'app-imprinting-form',
  templateUrl: './imprinting-form.component.html',
  styleUrls: ['./imprinting-form.component.scss'],
})
export class ImprintingFormComponent implements OnInit {
  @Input() target: [string, number][] = [];
  @Input() stoneBooks: StoneBook[] = [];

  imprintOptions = imprintOptions;
  penaltyOptions = penaltyOptions;

  constructor() {}

  ngOnInit(): void {}

  filterImprint(name: string) {
    return imprintOptions.filter((x) => x.includes(name));
  }

  getTargetImprints() {
    return this.target.map((x) => x[0]).filter((x) => !!x);
  }

  addStoneBook() {
    this.stoneBooks.push({
      index: this.stoneBooks.length,
      stone: [
        ['', 0],
        ['', 0],
      ],
      stonePenalty: ['', 0],
      book: [
        ['', 0],
        ['', 0],
      ],
    });
  }

  removeStoneBook(index: number) {
    this.stoneBooks.splice(index, 1);
    this.stoneBooks = this.stoneBooks.map((stoneBook, index) => ({
      ...stoneBook,
      index,
    }));
  }
}
