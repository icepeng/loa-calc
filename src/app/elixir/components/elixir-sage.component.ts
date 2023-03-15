import { Component, Input } from '@angular/core';
import { api, EffectOption, GameState, effect } from '@mokoko/elixir';

@Component({
  selector: 'app-elixir-sage',
  templateUrl: './elixir-sage.component.html',
  styleUrls: ['./elixir-sage.component.scss'],
})
export class ElixirSageComponent {
  @Input() gameState!: GameState;
  @Input() curveScores!: number[];
  @Input() adviceScores!: number[];
  @Input() index!: number;
  @Input() selectedEffectOptions!: EffectOption[];

  constructor() {}

  get sage() {
    return this.gameState.sages[this.index];
  }

  get description() {
    return api.sage.getDescription(this.gameState, this.index);
  }

  get curveScore() {
    return this.curveScores[this.index];
  }

  get adviceScore() {
    return this.adviceScores[this.index];
  }

  effectName(index: number) {
    return effect.getEffectOptionNameById(
      this.gameState.effects[index].optionId
    );
  }
}
