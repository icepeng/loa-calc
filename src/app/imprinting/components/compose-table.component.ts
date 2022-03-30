import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { lastValueFrom } from 'rxjs';
import { take } from 'rxjs/operators';
import { ComposeResult, Item, StoneBook } from '../functions/type';
import { AdditionalSearchDialogComponent } from './additional-search-dialog.component';

@Component({
  selector: 'app-compose-table',
  templateUrl: './compose-table.component.html',
  styleUrls: ['./compose-table.component.scss'],
})
export class ComposeTableComponent implements AfterViewInit, OnChanges {
  @Input() data!: ComposeResult[];
  @Input() progress!: number;
  @Input() isLoading!: boolean;
  @Input() target!: [string, number][];
  @Input() stoneBooks!: StoneBook[];
  @Output() exclude = new EventEmitter<Item>();
  @Output() additionalSearch = new EventEmitter<{
    accType: string;
    quality: number;
  }>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  dataSource = new MatTableDataSource<ComposeResult>([]);
  stoneBookIndex: number | null = null;

  constructor(private dialog: MatDialog) {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.data) {
      this.dataSource.data = changes.data.currentValue;
      this.dataSource.paginator?.firstPage();
      this.changeStoneBook(null);
    }
  }

  changeStoneBook(index: number | null) {
    this.stoneBookIndex = index;
    if (index === null) {
      this.dataSource.data = this.data;
      return;
    }
    this.dataSource.data = this.data.filter(
      (el) => el.stoneBook.index === index
    );
  }

  async handleAdditionalSearch(accType: string) {
    const dialog = this.dialog
      .open(AdditionalSearchDialogComponent, {
        disableClose: true,
      })
      .afterClosed()
      .pipe(take(1));

    const quality: number | undefined = await lastValueFrom(dialog);
    if (quality !== undefined) {
      this.additionalSearch.emit({ accType, quality });
    }
  }
}
