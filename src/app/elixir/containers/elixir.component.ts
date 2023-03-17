import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { api } from '../../../../.yalc/@mokoko/elixir';
import { createScoreCalculator } from '../score';
import * as JSZip from 'jszip';

@Component({
  selector: 'app-elixir',
  templateUrl: './elixir.component.html',
  styleUrls: ['./elixir.component.scss'],
})
export class ElixirComponent implements OnInit {
  constructor(private titleService: Title) {
    this.titleService.setTitle(
      'LoaCalc : 엘릭서 시뮬레이션 - 로스트아크 최적화 계산기'
    );
  }

  gameState = api.game.getInitialGameState({ maxEnchant: 10, totalTurn: 14 });
  selectedSageIndex: number | null = null;
  selectedEffectIndex: number | null = null;

  currentCurve: number[] = [];
  curveScores: number[] = [];
  adviceScores: number[] = [];
  valueCalculator: ReturnType<typeof createScoreCalculator> | null = null;

  ngOnInit(): void {
    fetch('assets/elixir_53_44_any.zip')
      .then((res) => res.blob())
      .then(async (compressed) => {
        const zip = new JSZip();
        await zip.loadAsync(compressed);
        const adviceCounting = await zip
          .file('advice_counting.json')
          ?.async('string')
          .then(JSON.parse);
        const curveRank12 = await zip
          .file('curve_rank_12.json')
          ?.async('string')
          .then(JSON.parse);
        const curveRank13 = await zip
          .file('curve_rank_13.json')
          ?.async('string')
          .then(JSON.parse);
        const curveRank14 = await zip
          .file('curve_rank_14.json')
          ?.async('string')
          .then(JSON.parse);
        const curveRank15 = await zip
          .file('curve_rank_15.json')
          ?.async('string')
          .then(JSON.parse);
        const curveProb12 = await zip
          .file('curve_prob_12.json')
          ?.async('string')
          .then(JSON.parse);
        const curveProb13 = await zip
          .file('curve_prob_13.json')
          ?.async('string')
          .then(JSON.parse);
        const curveProb14 = await zip
          .file('curve_prob_14.json')
          ?.async('string')
          .then(JSON.parse);
        const curveProb15 = await zip
          .file('curve_prob_15.json')
          ?.async('string')
          .then(JSON.parse);
        this.valueCalculator = createScoreCalculator({
          adviceCounting,
          curveRankRecord: {
            12: curveRank12,
            13: curveRank13,
            14: curveRank14,
            15: curveRank15,
          },
          curveProbRecord: {
            12: curveProb12,
            13: curveProb13,
            14: curveProb14,
            15: curveProb15,
          },
        });
        this.updateScores();
      });
  }

  get seed() {
    return api.rng.getSeed();
  }

  get phase() {
    return this.gameState.phase;
  }

  get uiState() {
    return {
      selectedSageIndex: this.selectedSageIndex,
      selectedEffectIndex: this.selectedEffectIndex,
    };
  }

  get pickRatios() {
    return api.mutation.queryPickRatios(this.gameState);
  }

  get luckyRatios() {
    return api.mutation.queryLuckyRatios(this.gameState);
  }

  updateScores() {
    if (this.valueCalculator === null) return;

    const scores = this.valueCalculator.calculateScores(
      this.gameState,
      this.currentCurve
    );

    this.curveScores = scores.curveScores;
    this.adviceScores = scores.adviceScores;
  }

  selectSage(index: number) {
    if (this.gameState.sages[index].isExhausted) return;

    this.selectedSageIndex = index;
  }

  selectEffect(index: number) {
    this.selectedEffectIndex = index;
  }

  applyCouncil() {
    if (this.selectedSageIndex === null) return;
    if (
      api.game.isEffectSelectionRequired(this.gameState, this.uiState) &&
      this.selectedEffectIndex === null
    ) {
      return;
    }

    this.gameState = api.game.applyCouncil(this.gameState, this.uiState);

    if (this.gameState.phase === 'restart') {
      this.reset();
    }
  }

  enchant() {
    if (this.selectedSageIndex === null) return;

    this.gameState = api.game.enchant(this.gameState, this.uiState);
    this.currentCurve = [...this.currentCurve, this.selectedSageIndex];
    this.updateScores();
    this.selectedSageIndex = null;
    this.selectedEffectIndex = null;
  }

  reroll() {
    this.gameState = api.game.reroll(this.gameState);
    this.updateScores();
  }

  benchmark() {}

  reset() {
    this.gameState = api.game.getInitialGameState({
      maxEnchant: 10,
      totalTurn: 14,
    });
    this.selectedSageIndex = null;
    this.selectedEffectIndex = null;
    this.currentCurve = [];
    this.updateScores();
  }
}
