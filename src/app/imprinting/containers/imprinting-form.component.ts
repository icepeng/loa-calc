import { Component, OnInit } from '@angular/core';
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
  imprintOptions = imprintOptions;
  penaltyOptions = penaltyOptions;

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

  constructor() {}

  ngOnInit(): void {
    const savedForm = localStorage.getItem(imprintingFormToken);
    if (savedForm) {
      const form = JSON.parse(savedForm);
      this.target = form.target;
      this.stoneBooks = form.stoneBooks;
    }
  }

  filterImprint(name: string) {
    return imprintOptions.filter((x) => x.includes(name));
  }

  getTargetImprints() {
    return this.target.map((x) => x[0]).filter((x) => !!x);
  }

  addStoneBook() {
    this.stoneBooks.push({
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
  }
}
