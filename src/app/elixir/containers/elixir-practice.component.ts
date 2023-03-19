import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Title } from '@angular/platform-browser';
import { api, GameState } from '../../../../.yalc/@mokoko/elixir';
import { LoadingDialogComponent } from '../../core/components/loading-dialog.component';
import { EvaluatorService } from '../evaluator.service';
import { createEvaluator } from '../functions/evaluate';

@Component({
  selector: 'app-elixir',
  templateUrl: './elixir-practice.component.html',
  styleUrls: ['./elixir-common.scss', './elixir-practice.component.scss'],
})
export class ElixirPracticeComponent implements OnInit {
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

  valueCalculator: ReturnType<typeof createEvaluator> | null = null;

  dialogRef: MatDialogRef<LoadingDialogComponent> | null = null;

  constructor(
    private titleService: Title,
    private snackbar: MatSnackBar,
    private dialog: MatDialog,
    private evaluator: EvaluatorService
  ) {
    this.titleService.setTitle(
      'LoaCalc : 엘릭서 시뮬레이션 - 로스트아크 최적화 계산기'
    );
  }

  ngOnInit(): void {
    this.dialogRef = this.dialog.open(LoadingDialogComponent, {
      disableClose: true,
    });
    this.evaluator.fetchInitialData().then(() => {
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
    return GameState.query.getPickRatios(this.gameState);
  }

  get luckyRatios() {
    return GameState.query.getLuckyRatios(this.gameState);
  }

  updateScores() {
    const scores = this.evaluator.evaluateScores(
      this.gameState,
      this.focusedIndices
    );
    this.baselineScore = this.evaluator.evaluateBaselineAdviceScore(
      this.gameState,
      this.focusedIndices
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
    if (this.selectedSageIndex === null) {
      this.snackbar.open('조언을 선택해주세요.', '닫기', { duration: 3000 });
      return;
    }
    if (
      GameState.query.isEffectSelectionRequired(
        this.gameState,
        this.selectedSageIndex
      )
    ) {
      if (this.selectedEffectIndex === null) {
        this.snackbar.open('효과를 선택해주세요.', '닫기', { duration: 3000 });
        return;
      }
    }

    this.gameState = api.game.applyCouncil(this.gameState, this.uiState);
    this.stateHistory.push(this.gameState);

    if (this.gameState.phase === 'restart') {
      this.resetStates();
      return;
    }
  }

  enchant() {
    if (this.selectedSageIndex === null) {
      return;
    }

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
    this.updateScores();
  }

  resetStates() {
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

  onResetClick() {
    const isConfirmed = window.confirm('정말 초기화하시겠습니까?');
    if (!isConfirmed) return;

    this.resetStates();
  }
}
