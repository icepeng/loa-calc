import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { api, query } from '../../../../.yalc/@mokoko/elixir';
import { createScoreCalculator } from '../functions/score';
import { LoadingDialogComponent } from '../../core/components/loading-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { GameState } from '@mokoko/elixir';
import * as JSZip from 'jszip';
import { fetchModel } from '../functions/fetch-model';

@Component({
  selector: 'app-elixir',
  templateUrl: './elixir.component.html',
  styleUrls: ['./elixir.component.scss'],
})
export class ElixirComponent implements OnInit {
  constructor(
    private titleService: Title,
    private snackbar: MatSnackBar,
    private dialog: MatDialog
  ) {
    this.titleService.setTitle(
      'LoaCalc : 엘릭서 시뮬레이션 - 로스트아크 최적화 계산기'
    );
  }

  worker!: Worker;
  isLoading = false;

  gameState = api.game.getInitialGameState({ maxEnchant: 10, totalTurn: 14 });
  selectedSageIndex: number | null = null;
  selectedEffectIndex: number | null = null;

  focusedIndices: [number, number] = [0, 1];

  currentCurve: number[] = [];
  curveScores: number[] = [];
  adviceScores: number[] = [];
  totalScores: number[] = [];
  baselineScore: number = 0;

  stateHistory: GameState[] = [this.gameState];

  valueCalculator: ReturnType<typeof createScoreCalculator> | null = null;

  dialogRef: MatDialogRef<LoadingDialogComponent> | null = null;

  ngOnInit(): void {
    this.dialogRef = this.dialog.open(LoadingDialogComponent, {
      disableClose: true,
    });
    if (typeof Worker !== 'undefined') {
      this.fetchInitialData();
    } else {
      this.snackbar.open(
        'Web Worker가 지원되지 않는 브라우저입니다. 최신 브라우저를 사용해주세요.',
        '닫기'
      );
    }
  }

  private fetchInitialData() {
    this.isLoading = true;

    console.time('initialized');

    fetchModel().then((modelData) => {
      console.time('createScoreCalculator');
      this.valueCalculator = createScoreCalculator(modelData);
      console.timeEnd('createScoreCalculator');
      console.timeEnd('initialized');
      this.updateScores();
      this.isLoading = false;
      this.dialogRef?.close();
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
    return query.game.getPickRatios(this.gameState);
  }

  get luckyRatios() {
    return query.game.getLuckyRatios(this.gameState);
  }

  updateScores() {
    if (this.valueCalculator === null) return;

    const scores = this.valueCalculator.calculateScores(
      this.gameState,
      this.currentCurve,
      this.focusedIndices
    );
    this.baselineScore = this.valueCalculator.getBaselineAdviceScore(
      this.gameState
    );

    this.curveScores = scores.curveScores;
    this.adviceScores = scores.adviceScores;
    this.totalScores = scores.totalScores;
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
      query.game.isEffectSelectionRequired(
        this.gameState,
        this.selectedSageIndex
      ) &&
      this.selectedEffectIndex === null
    ) {
      return;
    }

    this.gameState = api.game.applyCouncil(this.gameState, this.uiState);
    this.stateHistory.push(this.gameState);

    if (this.gameState.phase === 'restart') {
      this.reset();
      return;
    }
  }

  enchant() {
    if (this.selectedSageIndex === null) return;

    this.gameState = api.game.enchant(this.gameState, this.uiState);
    this.stateHistory.push(this.gameState);
    this.currentCurve = [...this.currentCurve, this.selectedSageIndex];
    this.selectedSageIndex = null;
    this.selectedEffectIndex = null;

    if (this.gameState.phase !== 'done') {
      this.updateScores();
    }
  }

  reroll() {
    this.gameState = api.game.reroll(this.gameState);
    this.stateHistory.push(this.gameState);
    this.updateScores();
  }

  onFocusTarget(index: number) {
    if (this.focusedIndices.includes(index)) {
      return;
    }
    this.focusedIndices = [this.focusedIndices[1], index];
    this.updateScores();
  }

  undo() {
    this.gameState = this.stateHistory[this.stateHistory.length - 2];
    this.stateHistory.pop();
  }

  reset() {
    const isConfirmed = window.confirm('정말 초기화하시겠습니까?');
    if (!isConfirmed) return;

    this.gameState = api.game.getInitialGameState({
      maxEnchant: 10,
      totalTurn: 14,
    });
    this.selectedSageIndex = null;
    this.selectedEffectIndex = null;
    this.currentCurve = [];
    this.stateHistory = [this.gameState];
    this.updateScores();
  }
}
