import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { getKoreanRegex } from 'ko-fuzzy';
import {
  data,
  EffectOption,
  GameState,
} from '../../../../.yalc/@mokoko/elixir';

@Component({
  selector: 'app-effect-dialog',
  templateUrl: './effect-dialog.component.html',
  styles: [
    `
      .table {
        width: 60vh;
        height: 60vh;
        overflow: scroll;
      }

      .row {
        border-bottom: 1px solid #ccc;
        padding: 12px 8px;
      }

      .row.selected {
        background-color: #eee;
      }
    `,
  ],
})
export class EffectDialogComponent implements OnInit {
  councils = data.effectOptions;
  dataSource: readonly EffectOption[] = [];
  filteredDataSource: readonly EffectOption[] = [];

  filterText: string = '';

  selected: EffectOption | null = null;

  constructor(
    public dialogRef: MatDialogRef<EffectDialogComponent>,
    @Inject(MAT_DIALOG_DATA)
    public dialogData: { gameState: GameState; index: number }
  ) {}

  ngOnInit(): void {
    this.dataSource = [...data.effectOptions];
    this.filteredDataSource = [...this.dataSource];
  }

  selectRow(option: EffectOption) {
    this.selected = option;
  }

  filterData(str: string) {
    this.filterText = str;
    this.filteredDataSource = this.dataSource.filter((data) => {
      if (this.filterText === '') return true;
      return getKoreanRegex(this.filterText, { consonantMatch: false }).test(
        data.name
      );
    });
  }

  confirm() {
    if (this.selected) {
      this.dialogRef.close(this.selected.name);
    }
  }

  cancel() {
    this.dialogRef.close();
  }
}
