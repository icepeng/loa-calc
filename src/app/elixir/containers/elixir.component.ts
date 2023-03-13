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

  gameState = api.getInitialGameState({ maxEnchant: 10, totalTurn: 14 });
  selectedSageIndex: number | null = null;
  selectedEffectIndex: number | null = null;

  currentCurve: number[] = [];
  curveScores: number[] = [];
  adviceScores: number[][] = [];
  valueCalculator: ReturnType<typeof createScoreCalculator> | null = null;

  ngOnInit(): void {
    fetch('assets/elixir_53_44_01.zip')
      .then((res) => res.blob())
      .then(async (compressed) => {
        const zip = new JSZip();
        await zip.loadAsync(compressed);
        const adviceCounting = await zip
          .file('advice_counting_53_44_01.json')
          ?.async('string')
          .then(JSON.parse);
        const curveRank = await zip
          .file('curve_rank_53_44_01.json')
          ?.async('string')
          .then(JSON.parse);
        const curveProb = await zip
          .file('curve_prob_53_44_01.json')
          ?.async('string')
          .then(JSON.parse);
        this.valueCalculator = createScoreCalculator({
          adviceCounting,
          curveRank,
          curveProb,
        });
        this.updateScores();
      });
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
    return api.queryPickRatios(this.gameState);
  }

  get luckyRatios() {
    return api.queryLuckyRatios(this.gameState);
  }

  get sages() {
    return this.gameState.sages;
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

  sageDescription(index: number) {
    return api.getSageDescription(this.gameState, index);
  }

  effectName(index: number) {
    return this.gameState.effects[index].name;
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
      api.isEffectSelectionRequired(this.gameState, this.uiState) &&
      this.selectedEffectIndex === null
    ) {
      return;
    }

    this.gameState = api.applyCouncil(this.gameState, this.uiState);
  }

  enchant() {
    if (this.selectedSageIndex === null) return;

    this.gameState = api.enchant(this.gameState, this.uiState);
    this.currentCurve = [...this.currentCurve, this.selectedSageIndex];
    this.updateScores();
    this.selectedSageIndex = null;
    this.selectedEffectIndex = null;
  }

  reroll() {
    this.gameState = api.reroll(this.gameState);
    this.updateScores();
  }

  reset() {
    this.gameState = api.getInitialGameState({ maxEnchant: 10, totalTurn: 14 });
    this.selectedSageIndex = null;
    this.selectedEffectIndex = null;
    this.currentCurve = [];
    this.updateScores();
  }
}
