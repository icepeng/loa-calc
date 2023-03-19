import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Title } from '@angular/platform-browser';
import {
  api,
  data,
  GameState,
  SageType,
} from '../../../../.yalc/@mokoko/elixir';
import { LoadingDialogComponent } from '../../core/components/loading-dialog.component';
import { CouncilDialogComponent } from '../components/council-dialog.component';
import { EvaluatorService } from '../evaluator.service';

@Component({
  selector: 'app-elixir',
  templateUrl: './elixir.component.html',
  styleUrls: ['./elixir.component.scss'],
})
export class ElixirComponent implements OnInit {
  isLoading = false;

  gameState = api.game.getInitialGameState({ maxEnchant: 10, totalTurn: 14 });

  focusedIndices: [number, number] = [0, 1];

  curveScores: number[] = [];
  adviceScores: number[] = [];
  totalScores: number[] = [];
  baselineScore: number = 0;

  dialogRef: MatDialogRef<LoadingDialogComponent> | null = null;

  councils = data.councils;

  isDangerous = false;

  constructor(
    private titleService: Title,
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

  get pickRatios() {
    return GameState.query.getPickRatios(this.gameState);
  }

  get luckyRatios() {
    return GameState.query.getLuckyRatios(this.gameState);
  }

  get recommendReroll() {
    return this.adviceScores.every((score) => score < this.baselineScore);
  }

  getCouncilDescription(id: string, index: number) {
    return GameState.query.getCouncilDescriptionFromId(
      this.gameState,
      id,
      index
    );
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

  onFocusTarget(index: number) {
    if (this.focusedIndices.includes(index)) {
      return;
    }
    this.focusedIndices = [this.focusedIndices[1], index];
    this.updateScores();
  }

  resetStates() {
    this.gameState = api.game.getInitialGameState({
      maxEnchant: 10,
      totalTurn: 14,
    });
    this.updateScores();
  }

  increaseTurnLeft() {
    this.gameState = {
      ...this.gameState,
      turnLeft: Math.min(
        this.gameState.config.totalTurn,
        this.gameState.turnLeft + 1
      ),
    };
    this.isDangerous = false;
    this.updateScores();
  }

  decreaseTurnLeft() {
    this.gameState = {
      ...this.gameState,
      turnLeft: Math.max(0, this.gameState.turnLeft - 1),
    };
    this.isDangerous = false;
    this.updateScores();
  }

  increaseEffectValue(index: number) {
    this.gameState = GameState.increaseEffectValue(this.gameState, index, 1);
    this.updateScores();
  }

  decreaseEffectValue(index: number) {
    this.gameState = GameState.increaseEffectValue(this.gameState, index, -1);
    this.updateScores();
  }

  setEffectValue(index: number, value: number) {
    this.gameState = GameState.setEffectValue(this.gameState, index, value);
    this.updateScores();
  }

  setEffectSealed(index: number, isSealed: boolean) {
    if (isSealed) {
      this.gameState = GameState.sealEffect(this.gameState, index);
    } else {
      this.gameState = GameState.unsealEffect(this.gameState, index);
    }
    this.updateScores();
  }

  setCouncil(index: number, councilId: string) {
    this.gameState = {
      ...this.gameState,
      sages: this.gameState.sages.map((sage, i) =>
        i === index
          ? {
              ...sage,
              councilId,
            }
          : sage
      ),
    };
    this.isDangerous = true;
    this.updateScores();
  }

  setTypePower(
    index: number,
    { type, power }: { type: SageType; power: number }
  ) {
    this.gameState = {
      ...this.gameState,
      sages: this.gameState.sages.map((sage, i) =>
        i === index
          ? {
              ...sage,
              type,
              power,
            }
          : sage
      ),
    };
    this.updateScores();
  }

  onResetClick() {
    const isConfirmed = window.confirm('정말 초기화하시겠습니까?');
    if (!isConfirmed) return;

    this.resetStates();
  }
}
