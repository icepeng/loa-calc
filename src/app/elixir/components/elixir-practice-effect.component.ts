import { Component, EventEmitter, Input, Output } from '@angular/core';
import { api, data, GameState } from '../../../../.yalc/@mokoko/elixir';

@Component({
  selector: 'app-elixir-practice-effect',
  templateUrl: './elixir-practice-effect.component.html',
  styleUrls: [
    './elixir-effect-common.scss',
    './elixir-practice-effect.component.scss',
  ],
})
export class ElixirPracticeEffectComponent {
  @Input() gameState!: GameState;
  @Input() pickRatios!: number[];
  @Input() luckyRatios!: number[];
  @Input() index!: number;
  @Output() focusTarget = new EventEmitter<number>();

  constructor() {}

  get valueSquares() {
    return Array.from({ length: this.gameState.config.maxEnchant }, (_, i) =>
      data.effectLevelTable[i] !== data.effectLevelTable[i + 1]
        ? data.effectLevelTable[i + 1]
        : null
    );
  }

  get effect() {
    return this.gameState.effects[this.index];
  }

  get pickRatio() {
    return this.pickRatios[this.index];
  }

  get luckyRatio() {
    return this.luckyRatios[this.index];
  }

  get effectOptions() {
    return api.effect.getUiSelectableEffects(this.gameState, this.index);
  }

  onFocusTarget(event: MouseEvent) {
    event.stopPropagation();
    this.focusTarget.emit(this.index);
  }
}
