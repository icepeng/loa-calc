import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ComposeResult, SearchResult } from '../functions/type';
import { getTripodString } from '../functions/util';

@Component({
  selector: 'app-tripod-single-list',
  templateUrl: './tripod-single-list.component.html',
  styleUrls: ['./tripod-single-list.component.scss'],
})
export class TripodSingleListComponent implements OnChanges {
  @Input() searchResult: SearchResult[] = [];
  @Input() hoveredResult: ComposeResult | null = null;
  singles: {
    name: string;
    price: number;
    isAuctionPrice: boolean;
    removed: boolean;
  }[] = [];

  columns = ['name', 'price'];

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.searchResult) {
      this.singles = this.searchResult
        .filter((res) => res.tripod.length === 1)
        .map((res) => {
          const name = getTripodString(res.tripod[0]);

          if (res.products.length === 0) {
            return {
              name,
              price: 0,
              isAuctionPrice: false,
              removed: false,
            };
          }

          const buyPrice = res.products.filter((x) => x.buyPrice)[0]?.buyPrice;
          if (buyPrice) {
            return {
              name,
              price: buyPrice,
              isAuctionPrice: false,
              removed: false,
            };
          }

          const auctionPrice = res.products[0].auctionPrice;
          return {
            name,
            price: auctionPrice,
            isAuctionPrice: true,
            removed: false,
          };
        })
        .sort((a, b) => a.price - b.price);
    }
    if (changes.hoveredResult) {
      const tripods = Object.values(this.hoveredResult?.summary ?? {})
        .flatMap((x) => x.tripod)
        .map((tripod) => getTripodString(tripod));
      this.singles = this.singles.map((single) => {
        const removed = tripods.includes(single.name);
        return { ...single, removed };
      });
    }
  }
}
