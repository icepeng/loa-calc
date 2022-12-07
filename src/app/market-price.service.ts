import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MarketPriceService {
  data?: {
    updateTime: string;
    items: any[];
  };

  constructor() {}

  async updateData() {
    this.data = await fetch(environment.marketPriceUrl).then((res) =>
      res.json()
    );
  }

  getPriceObj(priceType: 'YDayAvgPrice' | 'RecentPrice' | 'CurrentMinPrice') {
    if (!this.data) {
      throw new Error('call updateData() first.');
    }

    const items = this.data.items;
    const obj = {
      파편: Math.min(
        items.find((x) => x.Name === '명예의 파편 주머니(소)')![priceType] /
          500,
        items.find((x) => x.Name === '명예의 파편 주머니(중)')![priceType] /
          1000,
        items.find((x) => x.Name === '명예의 파편 주머니(대)')![priceType] /
          1500
      ),
      하급오레하: items.find((x) => x.Name === '하급 오레하 융화 재료')![
        priceType
      ],
      중급오레하: items.find((x) => x.Name === '중급 오레하 융화 재료')![
        priceType
      ],
      상급오레하: items.find((x) => x.Name === '상급 오레하 융화 재료')![
        priceType
      ],
      최상급오레하: items.find((x) => x.Name === '최상급 오레하 융화 재료')![
        priceType
      ],
      명돌: items.find((x) => x.Name === '명예의 돌파석')![priceType],
      위명돌: items.find((x) => x.Name === '위대한 명예의 돌파석')![priceType],
      경명돌: items.find((x) => x.Name === '경이로운 명예의 돌파석')![
        priceType
      ],
      찬명돌: items.find((x) => x.Name === '찬란한 명예의 돌파석')![priceType],
      수결: items.find((x) => x.Name === '수호석 결정')![priceType] / 10,
      파결: items.find((x) => x.Name === '파괴석 결정')![priceType] / 10,
      수호강석: items.find((x) => x.Name === '수호강석')![priceType] / 10,
      파괴강석: items.find((x) => x.Name === '파괴강석')![priceType] / 10,
      정제된수호강석:
        items.find((x) => x.Name === '정제된 수호강석')![priceType] / 10,
      정제된파괴강석:
        items.find((x) => x.Name === '정제된 파괴강석')![priceType] / 10,
      은총: items.find((x) => x.Name === '태양의 은총')![priceType],
      축복: items.find((x) => x.Name === '태양의 축복')![priceType],
      가호: items.find((x) => x.Name === '태양의 가호')![priceType],
      재봉술기본: items.find((x) => x.Name === '재봉술 : 수선 기본')![
        priceType
      ],
      재봉술응용: items.find((x) => x.Name === '재봉술 : 수선 응용')![
        priceType
      ],
      재봉술심화: items.find((x) => x.Name === '재봉술 : 수선 심화')![
        priceType
      ],
      재봉술숙련: items.find((x) => x.Name === '재봉술 : 수선 숙련')![
        priceType
      ],
      재봉술특화: items.find((x) => x.Name === '재봉술 : 수선 특화')![
        priceType
      ],
      야금술기본: items.find((x) => x.Name === '야금술 : 단조 기본')![
        priceType
      ],
      야금술응용: items.find((x) => x.Name === '야금술 : 단조 응용')![
        priceType
      ],
      야금술심화: items.find((x) => x.Name === '야금술 : 단조 심화')![
        priceType
      ],
      야금술숙련: items.find((x) => x.Name === '야금술 : 단조 숙련')![
        priceType
      ],
      야금술특화: items.find((x) => x.Name === '야금술 : 단조 특화')![
        priceType
      ],
    };

    return Object.fromEntries(
      Object.entries(obj).map(([key, value]) => [
        key,
        Math.round(value * 10000) / 10000,
      ])
    );
  }
}
