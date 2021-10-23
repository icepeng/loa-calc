import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  dealOptions,
  imprintOptions,
  penaltyOptions,
} from '../functions/const';
import { AccMap } from '../functions/type';

@Component({
  selector: 'app-acc-form',
  templateUrl: './acc-form.component.html',
  styleUrls: ['./acc-form.component.scss'],
})
export class AccFormComponent implements OnInit {
  dealOptions = dealOptions;
  imprintOptions = imprintOptions;
  penaltyOptions = penaltyOptions;

  accMap: Record<string, AccMap> = {
    목걸이: {
      category: '목걸이',
      quality: 0,
      dealOption1: ['', 0],
      dealOption2: ['', 0],
      name: '',
      imprintOption1: ['', 0],
      imprintOption2: ['', 0],
      imprintPenalty: ['', 0],
    },
    귀걸이1: {
      category: '귀걸이',
      quality: 0,
      dealOption1: ['', 0],
      name: '',
      imprintOption1: ['', 0],
      imprintOption2: ['', 0],
      imprintPenalty: ['', 0],
    },
    귀걸이2: {
      category: '귀걸이',
      quality: 0,
      dealOption1: ['', 0],
      name: '',
      imprintOption1: ['', 0],
      imprintOption2: ['', 0],
      imprintPenalty: ['', 0],
    },
    반지1: {
      category: '반지',
      quality: 0,
      dealOption1: ['', 0],
      name: '',
      imprintOption1: ['', 0],
      imprintOption2: ['', 0],
      imprintPenalty: ['', 0],
    },
    반지2: {
      category: '반지',
      quality: 0,
      dealOption1: ['', 0],
      name: '',
      imprintOption1: ['', 0],
      imprintOption2: ['', 0],
      imprintPenalty: ['', 0],
    },
  };

  constructor() {}

  ngOnInit(): void {
    const savedForm = localStorage.getItem('imprintingForm_v2');
    if (savedForm) {
      const form = JSON.parse(savedForm);
      this.accMap = form.accMap;
    }
  }

  filterImprint(name: string) {
    return imprintOptions.filter((x) => x.includes(name));
  }
}
