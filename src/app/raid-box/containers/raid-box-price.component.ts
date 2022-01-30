import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-raid-box-price',
  templateUrl: './raid-box-price.component.html',
  styleUrls: ['./raid-box-price.component.scss'],
})
export class RaidBoxPriceComponent {
  @Input() priceForm!: FormGroup;

  constructor() {}
}
