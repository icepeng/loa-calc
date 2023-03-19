import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
  EffectOption,
  GameState,
  SageType,
} from '../../../../.yalc/@mokoko/elixir';
import { CouncilDialogComponent } from './council-dialog.component';

@Component({
  selector: 'app-elixir-sage',
  templateUrl: './elixir-sage.component.html',
  styleUrls: ['./elixir-sage.component.scss'],
})
export class ElixirSageComponent {
  @Input() gameState!: GameState;
  @Input() curveScores!: number[];
  @Input() adviceScores!: number[];
  @Input() totalScores!: number[];
  @Input() index!: number;
  @Input() selectedEffectOptions!: EffectOption[];

  @Output() changeCouncil = new EventEmitter<string>();
  @Output() changeTypePower = new EventEmitter<{
    type: SageType;
    power: number;
  }>();

  constructor(private dialog: MatDialog) {}

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

  get isHighest() {
    return this.totalScore === Math.max(...this.totalScores);
  }

  launchCouncilDialog(index: number) {
    const dialogRef = this.dialog.open(CouncilDialogComponent, {
      disableClose: false,
      data: { gameState: this.gameState, index },
    });

    dialogRef.afterClosed().subscribe((councilId) => {
      if (councilId == null) return;
      this.changeCouncil.emit(councilId);
    });
  }

  setTypePower(type: SageType, power: number) {
    this.changeTypePower.emit({ type, power });
  }
}
