import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { api, query } from '../../../../.yalc/@mokoko/elixir';
import { createScoreCalculator } from '../score';
import { LoadingDialogComponent } from '../../core/components/loading-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

interface FetchInitialDataPayload {
  action: 'fetch';
  payload: {
    adviceCounting: any;
    curveRankRecord: any;
    curveProbRecord: any;
    preIndexedCurveRank: any;
  };
}

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

  currentCurve: number[] = [];
  curveScores: number[] = [];
  adviceScores: number[] = [];
  totalScores: number[] = [];
  valueCalculator: ReturnType<typeof createScoreCalculator> | null = null;

  dialogRef: MatDialogRef<LoadingDialogComponent> | null = null;

  ngOnInit(): void {
    this.dialogRef = this.dialog.open(LoadingDialogComponent, {
      disableClose: true,
    });
    if (typeof Worker !== 'undefined') {
      this.worker = new Worker(new URL('../elixir.worker', import.meta.url));
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

    const handleFetchIntialData = ({
      data,
    }: MessageEvent<FetchInitialDataPayload>) => {
      if (data.action !== 'fetch') {
        return;
      }
      this.isLoading = false;
      this.worker.removeEventListener('message', handleFetchIntialData);
      this.worker.removeEventListener('error', handleFetchIntialDataError);

      this.valueCalculator = createScoreCalculator(data.payload);
      this.updateScores();
      this.dialogRef?.close();
    };
    const handleFetchIntialDataError = (err: ErrorEvent) => {
      this.isLoading = false;
      this.worker.removeEventListener('message', handleFetchIntialData);
      this.worker.removeEventListener('error', handleFetchIntialDataError);

      this.dialogRef?.close();
      this.snackbar.open('오류가 발생했습니다. 설명서를 확인해주세요.', '닫기'); // TODO: 핸들링? 메세지?
    };

    this.worker.onerror = handleFetchIntialDataError;
    this.worker.onmessage = handleFetchIntialData;

    this.worker.postMessage({ action: 'fetch' });
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
      this.currentCurve
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
