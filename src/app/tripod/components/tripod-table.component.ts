import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ComposeFilter, ComposeResult } from '../functions/type';

@Component({
  selector: 'app-tripod-table',
  templateUrl: './tripod-table.component.html',
  styleUrls: ['./tripod-table.component.scss'],
})
export class TripodTableComponent implements OnInit, AfterViewInit, OnChanges {
  @Input() data!: ComposeResult[];
  @Input() selectedCategories!: number[];
  @Input() filter!: ComposeFilter;
  @Input() isLoading!: boolean;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  dataSource = new MatTableDataSource<ComposeResult>([]);
  columns: string[] = ['price'];

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.data) {
      this.dataSource.data = changes.data.currentValue;
      this.dataSource.paginator?.firstPage();
    }
    if (changes.selectedCategories) {
      this.columns = [
        'price',
        ...changes.selectedCategories.currentValue.map((x: number) =>
          x.toString()
        ),
      ];
    }
  }
}
