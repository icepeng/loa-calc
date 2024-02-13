import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-advanced-refining-item',
  templateUrl: './advanced-refining-item.component.html',
  styleUrls: ['./advanced-refining-item.component.scss'],
})
export class AdvancedRefiningItemComponent {
  @Input() itemForm!: FormGroup;

  constructor() {}
}
