import { Component, Input } from '@angular/core';
import { EffectOption, GameState } from '../../../../.yalc/@mokoko/elixir';

@Component({
  selector: 'app-elixir-practice-sage',
  templateUrl: './elixir-practice-sage.component.html',
  styleUrls: ['./elixir-practice-sage.component.scss'],
})
export class ElixirPracticeSageComponent {
  @Input() gameState!: GameState;
  @Input() curveScores!: number[];
  @Input() adviceScores!: number[];
  @Input() totalScores!: number[];
  @Input() index!: number;
  @Input() selectedEffectOptions!: EffectOption[];

  constructor() {}

  get sage() {
    return this.gameState.sages[this.index];
  }

  get description() {
    return GameState.query.getCouncilDescription(this.gameState, this.index);
  }

  get curveScore() {
    return this.curveScores[this.index];
  }

  get adviceScore() {
    return this.adviceScores[this.index];
  }

  get totalScore() {
    return this.totalScores[this.index];
  }
}
