import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { getTargetList } from '../data';

@Component({
  selector: 'app-refining-item',
  templateUrl: './refining-item.component.html',
  styleUrls: ['./refining-item.component.scss'],
})
export class RefiningItemComponent implements OnInit {
  @Input() itemForm!: FormGroup;
  targetList$!: Observable<number[]>;

  constructor() {}

  ngOnInit() {
    this.targetList$ = this.itemForm.valueChanges.pipe(
      map((itemForm) => getTargetList(itemForm.type, itemForm.grade))
    );
  }
}
