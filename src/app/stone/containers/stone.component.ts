import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {
  Ability,
  buildSymbols,
  cal_dp,
  calProb1Safe,
  calProb2Safe,
  calProb3Safe,
  decodeP,
  getCurrentP,
  getIdx,
  getTaskPreset,
  Sequence,
  Task,
  toPercent,
} from '../stone';

@Component({
  selector: 'app-stone',
  templateUrl: './stone.component.html',
  styleUrls: ['./stone.component.scss'],
})
export class StoneComponent implements OnInit {
  na = 10;
  seq: Sequence = [];
  symbols: Record<Ability, (boolean | null)[]> = {
    ability1: [],
    ability2: [],
    penalty: [],
  };

  indexes: Record<Ability, [number, number]> = {
    ability1: [10, 0],
    ability2: [10, 0],
    penalty: [10, 0],
  };

  tasks: Task[] = [];

  dpList: Float64Array[] = [];

  probList: {
    ability1: number;
    ability2: number;
    penalty: number;
    max: number;
    ability1Str: string;
    ability2Str: string;
    penaltyStr: string;
  }[] = [];

  attemptProb = 0.75;

  mode: 'select' | 'simulate' = 'select';
  showFuture = false;

  constructor(private titleService: Title) {
    this.titleService.setTitle('LoaCalc : 어빌리티 스톤 세공 - 로스트아크 최적화 계산기')
  }

  ngOnInit(): void {
    this.na = 10;
    this.seq = [];
    this.tasks = [getTaskPreset(this.na, 0), getTaskPreset(this.na, 1)];
    this.updateDpList();
  }

  naChange(na: number) {
    this.na = na;
    this.tasks = [getTaskPreset(this.na, 0), getTaskPreset(this.na, 1)];
    this.updateDpList();
  }

  doAttempt(type: Ability, result: boolean) {
    const num_attempts = this.na;
    if (
      this.seq.filter((attempt) => attempt[0] === type).length < num_attempts
    ) {
      this.seq.push([type, result]);
    }
    this.setUI();
  }

  simulateAttempt(type: Ability) {
    if (Math.random() < this.attemptProb) {
      this.doAttempt(type, true);
    } else {
      this.doAttempt(type, false);
    }
  }

  undo() {
    this.seq.pop();
    this.setUI();
  }

  reset() {
    this.seq = [];
    this.setUI();
  }

  addTask() {
    this.tasks.push(getTaskPreset(this.na, 0));
    this.updateDpList();
  }

  removeTask(i: number) {
    this.tasks.splice(i, 1);
    this.updateDpList();
  }

  updateDpList() {
    this.dpList = this.tasks.map((task) => cal_dp(this.na, task.goalCells));
    this.setUI();
  }

  setUI() {
    const p = getCurrentP(this.seq);
    this.attemptProb = decodeP(p);

    this.symbols.ability1 = buildSymbols(this.seq, this.na, 'ability1');
    this.symbols.ability2 = buildSymbols(this.seq, this.na, 'ability2');
    this.symbols.penalty = buildSymbols(this.seq, this.na, 'penalty');

    this.indexes.ability1 = getIdx(this.seq, this.na, 'ability1');
    this.indexes.ability2 = getIdx(this.seq, this.na, 'ability2');
    this.indexes.penalty = getIdx(this.seq, this.na, 'penalty');

    this.probList = [];
    for (let i = 0; i < this.tasks.length; i += 1) {
      const { penaltyLimit } = this.tasks[i];
      const dp = this.dpList[i];
      const prob1 = calProb1Safe(
        this.na,
        dp,
        this.indexes.ability1[0],
        this.indexes.ability2[0],
        this.indexes.penalty[0],
        p,
        this.indexes.ability1[1],
        this.indexes.ability2[1],
        penaltyLimit - this.indexes.penalty[1]
      );
      const prob2 = calProb2Safe(
        this.na,
        dp,
        this.indexes.ability1[0],
        this.indexes.ability2[0],
        this.indexes.penalty[0],
        p,
        this.indexes.ability1[1],
        this.indexes.ability2[1],
        penaltyLimit - this.indexes.penalty[1]
      );
      const prob3 = calProb3Safe(
        this.na,
        dp,
        this.indexes.ability1[0],
        this.indexes.ability2[0],
        this.indexes.penalty[0],
        p,
        this.indexes.ability1[1],
        this.indexes.ability2[1],
        penaltyLimit - this.indexes.penalty[1]
      );
      this.probList[i] = {
        ability1: prob1,
        ability2: prob2,
        penalty: prob3,
        max: Math.max(prob1, prob2, prob3),
        ability1Str: toPercent(prob1),
        ability2Str: toPercent(prob2),
        penaltyStr: toPercent(prob3),
      };
    }
  }
}
