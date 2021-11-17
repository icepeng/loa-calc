import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ComposeFilter, ComposeResult, TripodValue } from '../functions/type';
import { getTripodString } from '../functions/util';

@Component({
  selector: 'app-tripod-table',
  templateUrl: './tripod-table.component.html',
  styleUrls: ['./tripod-table.component.scss'],
})
export class TripodTableComponent implements AfterViewInit, OnChanges {
  @Input() data!: ComposeResult[];
  @Input() categories!: number[];
  @Input() filter!: ComposeFilter;
  @Input() showRestSingles!: boolean;
  @Input() isLoading!: boolean;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  dataSource = new MatTableDataSource<ComposeResult>([]);
  columns: string[] = ['price'];

  constructor() {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.data) {
      this.dataSource.data = changes.data.currentValue;
      this.dataSource.paginator?.firstPage();
    }
    if (changes.categories || changes.showRestSingles) {
      this.columns = [
        'price',
        ...this.categories.map((x: number) => x.toString()),
      ];
      if (this.showRestSingles) {
        this.columns.push('restSingles');
      }
    }
  }

  getTripodString(item: TripodValue) {
    return getTripodString(item);
  }
}
