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
import { ComposeResult } from '../functions/type';

@Component({
  selector: 'app-compose-table',
  templateUrl: './compose-table.component.html',
  styleUrls: ['./compose-table.component.scss'],
})
export class ComposeTableComponent implements OnInit, AfterViewInit, OnChanges {
  @Input() data!: ComposeResult[];
  @Input() isLoading!: boolean;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  dataSource = new MatTableDataSource<ComposeResult>([]);

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.data) {
      this.dataSource.data = changes.data.currentValue;
    }
  }
}
