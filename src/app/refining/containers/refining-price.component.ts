import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-refining-price',
  templateUrl: './refining-price.component.html',
  styleUrls: ['./refining-price.component.scss'],
})
export class RefiningPriceComponent {
  @Input() priceForm!: FormGroup;

  constructor() {}
}
