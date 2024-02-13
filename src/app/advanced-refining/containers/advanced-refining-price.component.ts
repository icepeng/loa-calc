import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-advanced-refining-price',
  templateUrl: './advanced-refining-price.component.html',
  styleUrls: ['./advanced-refining-price.component.scss'],
})
export class AdvancedRefiningPriceComponent {
  @Input() priceForm!: FormGroup;

  constructor() {}
}
