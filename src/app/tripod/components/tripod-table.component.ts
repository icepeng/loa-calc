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
import { marketData } from '../data';
import {
  ComposeFilter,
  ComposeResult,
  Summary,
  TripodValue,
} from '../functions/type';
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
  @Input() isLoading!: boolean;
  @Output() hoverResult = new EventEmitter<ComposeResult | null>();
  @Output() fixItem = new EventEmitter<{
    category: number;
    summary: Summary;
  }>();
  @Output() excludeItem = new EventEmitter<{
    category: number;
    summary: Summary;
  }>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  dataSource = new MatTableDataSource<ComposeResult>([]);
  categoryColumns = marketData.marketCategory.filter((x) => x.parent === 10000);
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
    if (changes.categories) {
      this.columns = [
        'price',
        ...this.categories.map((x: number) => x.toString()),
      ];
    }
  }

  getTripodString(item: TripodValue) {
    return getTripodString(item);
  }
}
