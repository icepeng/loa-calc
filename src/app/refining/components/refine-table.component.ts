import { Component, Input } from '@angular/core';
import { Path } from '../refine';

@Component({
  selector: 'app-refine-table',
  templateUrl: './refine-table.component.html',
  styleUrls: ['./refine-table.component.scss'],
})
export class RefineTableComponent {
  @Input() price!: number;
  @Input() path!: Path;

  constructor() {}

  getBreathesName(breathes: Record<string, number>) {
    return Object.entries(breathes)
      .map(([name, amount]) => `${name}x${amount}`)
      .join(',');
  }

  getFullJangin(path: Path) {
    return path.reduce((sum, step) => sum + step.price, 0);
  }
}
