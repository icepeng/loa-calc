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
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ComposeResult, Item, StoneBook } from '../functions/type';

@Component({
  selector: 'app-compose-table',
  templateUrl: './compose-table.component.html',
  styleUrls: ['./compose-table.component.scss'],
})
export class ComposeTableComponent implements AfterViewInit, OnChanges {
  @Input() data!: ComposeResult[];
  @Input() progress!: number;
  @Input() isLoading!: boolean;
  @Input() stoneBooks!: StoneBook[];
  @Output() exclude = new EventEmitter<Item>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  dataSource = new MatTableDataSource<ComposeResult>([]);
  stoneBookIndex: number | null = null;

  constructor() {}

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
}
