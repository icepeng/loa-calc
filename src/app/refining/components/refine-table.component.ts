import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { Path, Step } from '../refine';

@Component({
  selector: 'app-refine-table',
  templateUrl: './refine-table.component.html',
  styleUrls: ['./refine-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RefineTableComponent implements OnChanges {
  @Input() price!: number;
  @Input() materials: { name: string; amount: number; price: number }[] = [];
  @Input() path!: Path;

  pathView: (Step & { breathesName: string })[] = [];
  averageMaterial: [string, number][] = [];
  fullJanginMaterial: [string, number][] = [];
  fullJanginPrice: number = 0;

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.path) {
      this.pathView = this.path.map((step) => ({
        ...step,
        breathesName: this.getBreathesName(step.breathes),
      }));
      this.averageMaterial = this.getAvarageMaterial(this.path);
      this.fullJanginMaterial = this.getFullJanginMaterial(this.path);
      this.fullJanginPrice = this.getFullJangin(this.path);
    }
  }

  trackByIndex(index: number) {
    return index;
  }

  private getBreathesName(breathes: Record<string, number>) {
    return Object.entries(breathes)
      .map(([name, amount]) => `${name}x${amount}`)
      .join(',');
  }

  private getAvarageMaterial(path: Path) {
    const obj: Record<string, number> = {};
    const breathes: Record<string, number> = {};
    path.forEach((step, index) => {
      this.materials.forEach((material) => {
        obj[material.name] =
          (obj[material.name] ?? 0) +
          material.amount * step.globalProb * (index + 1);
      });
      Object.entries(step.breathes).forEach(([name, amount]) => {
        breathes[name] = (breathes[name] ?? 0) + amount;
      });
      Object.entries(breathes).forEach(([name, amount]) => {
        obj[name] = (obj[name] ?? 0) + amount * step.globalProb;
      });
    });
    return Object.entries(obj);
  }

  private getFullJanginMaterial(path: Path) {
    const obj: Record<string, number> = {};
    path.forEach((step) => {
      this.materials.forEach((material) => {
        obj[material.name] = (obj[material.name] ?? 0) + material.amount;
      });
      Object.entries(step.breathes).forEach(([name, amount]) => {
        obj[name] = (obj[name] ?? 0) + amount;
      });
    });
    return Object.entries(obj);
  }

  private getFullJangin(path: Path) {
    return path.reduce((sum, step) => sum + step.price, 0);
  }
}
