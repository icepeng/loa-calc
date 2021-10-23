import { Component, OnInit } from '@angular/core';
import {
  dealOptions,
  imprintOptions,
  penaltyOptions,
} from '../functions/const';

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

  constructor() {}

  ngOnInit(): void {
    const savedForm = localStorage.getItem('imprintingForm_v2');
    if (savedForm) {
      const form = JSON.parse(savedForm);
      this.target = form.target;
      this.stone = form.stone;
      this.stonePenalty = form.stonePenalty;
      this.book = form.book;
    }
  }

  filterImprint(name: string) {
    return imprintOptions.filter((x) => x.includes(name));
  }

  getTargetImprints() {
    return this.target.map((x) => x[0]).filter((x) => !!x);
  }
}
