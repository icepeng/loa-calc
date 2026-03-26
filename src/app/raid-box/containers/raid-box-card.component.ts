import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Raid, Reward, rewardData } from '../data';

@Component({
  selector: 'app-raid-box-card',
  templateUrl: './raid-box-card.component.html',
  styles: [
    `
      :host {
        display: contents;
      }
      .materials {
        min-width: 240px;
      }

      .material-info {
        margin-bottom: 12px;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RaidBoxCardComponent implements OnInit, OnChanges, OnDestroy {
  @Input() priceTable!: Record<string, number>;
  @Input() itemTier!: string;
  @Input() raid!: Raid;
  materials: { name: string; amount: number; price: number }[] = [];
  materialPrice: number = 0;
  openPrice: number = 0;

  subscription$!: Subscription;

  checkForm = new FormGroup({
    파편: new FormControl(true),
    운명파편: new FormControl(true),
    하급오레하: new FormControl(true),
    중급오레하: new FormControl(true),
    상급오레하: new FormControl(true),
    아비도스: new FormControl(true),
    위명돌: new FormControl(true),
    경명돌: new FormControl(true),
    찬명돌: new FormControl(true),
    운돌: new FormControl(true),
    위운돌: new FormControl(true),
    수결: new FormControl(true),
    파결: new FormControl(true),
    수호강석: new FormControl(true),
    파괴강석: new FormControl(true),
    정제된수호강석: new FormControl(true),
    정제된파괴강석: new FormControl(true),
    운명의수호석: new FormControl(true),
    운명의수호석결정: new FormControl(true),
    운명의파괴석: new FormControl(true),
    운명의파괴석결정: new FormControl(true),
    혼돈의돌: new FormControl(true),
  });

  constructor() {}

  ngOnInit() {
    this.subscription$ = this.checkForm.valueChanges.subscribe((value) =>
      this.update(value)
    );
  }

  ngOnChanges() {
    this.update(this.checkForm.value);
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }

  private getMaterials(
    priceTable: Record<string, number>,
    checkTable: Record<string, boolean>,
    rewardTable: Reward,
    itemTier: string
  ): { name: string; amount: number; price: number }[] {
    return Object.entries(rewardTable.rewards)
      .map(([name, amount]): [string, number] => {
        if (itemTier === 't4_1590') {
          if (name === '정제된수호강석') {
            return ['운명의수호석', amount / 5];
          }
          if (name === '정제된파괴강석') {
            return ['운명의파괴석', amount / 5];
          }
          if (name === '찬명돌') {
            return ['운돌', amount / 5];
          }
          if (name === '수호강석') {
            return ['운명의수호석', amount / 25];
          }
          if (name === '파괴강석') {
            return ['운명의파괴석', amount / 25];
          }
          if (name === '경명돌') {
            return ['운돌', amount / 25];
          }
          if (name === '수결') {
            return ['운명의수호석', amount / 125];
          }
          if (name === '파결') {
            return ['운명의파괴석', amount / 125];
          }
          if (name === '위명돌') {
            return ['운돌', amount / 125];
          }
        }
        if (itemTier === 't3_1525') {
          if (name === '수호강석') {
            return ['정제된수호강석', amount / 5];
          }
          if (name === '파괴강석') {
            return ['정제된파괴강석', amount / 5];
          }
          if (name === '경명돌') {
            return ['찬명돌', amount / 5];
          }
          if (name === '수결') {
            return ['정제된수호강석', amount / 25];
          }
          if (name === '파결') {
            return ['정제된파괴강석', amount / 25];
          }
          if (name === '위명돌') {
            return ['찬명돌', amount / 25];
          }
        }
        if (itemTier === 't3_1390') {
          if (name === '수결') {
            return ['수호강석', amount / 5];
          }
          if (name === '파결') {
            return ['파괴강석', amount / 5];
          }
          if (name === '위명돌') {
            return ['경명돌', amount / 5];
          }
        }
        return [name, amount];
      })
      .map(([name, amount]) => ({
        name,
        amount,
        price: checkTable[name] ? priceTable[name] * amount : 0,
      }));
  }

  private update(checkTable: Record<string, boolean>) {
    const rewardTable = rewardData[this.raid];
    this.materials = this.getMaterials(
      this.priceTable,
      checkTable,
      rewardTable,
      this.itemTier
    );
    this.materialPrice = this.materials.reduce(
      (acc, cur) => acc + cur.price,
      0
    );
    this.openPrice = rewardTable.price;
  }

  getCheckControl(name: string) {
    return this.checkForm.get(name) as FormControl;
  }
}
