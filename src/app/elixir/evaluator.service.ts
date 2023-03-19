import { Injectable } from '@angular/core';
import { GameState } from '@mokoko/elixir';
import { createEvaluator, Evaluator } from './functions/evaluate';

@Injectable({
  providedIn: 'root',
})
export class EvaluatorService {
  isLoadingEvaluator = false;
  evaluator!: Evaluator;

  constructor() {}

  async fetchInitialData() {
    this.isLoadingEvaluator = true;

    if (!!this.evaluator) {
      return false;
    }

    return Promise.all([
      fetch('assets/advice_counting.json').then((res) => res.json()),
      fetch('assets/curve_counting.json').then((res) => res.json()),
    ])
      .then(([adviceCounting, curveCounting]) => ({
        adviceCounting,
        curveCounting,
      }))
      .then((modelData) => {
        this.evaluator = createEvaluator(modelData);
        return true;
      });
  }

  evaluateScores(state: GameState, targetIndices: [number, number]) {
    return this.evaluator.evaluateScores(state, targetIndices);
  }

  evaluateBaselineAdviceScore(
    state: GameState,
    targetIndices: [number, number]
  ) {
    return this.evaluator.evaluateBaselineAdviceScore(state, targetIndices);
  }
}
