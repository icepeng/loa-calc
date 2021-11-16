import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stone-symbol',
  templateUrl: './stone-symbol.component.html',
  styleUrls: ['./stone-symbol.component.scss'],
})
export class StoneSymbolComponent {
  @Input() symbol!: boolean | null;
  @Input() type!: string;

  constructor() {}
}
