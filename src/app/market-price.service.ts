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

    const getPrice = (name: string) =>
      items.find((x) => x.Name === name)?.[priceType] ?? 0;
    const obj = {
      파편: Math.min(
        getPrice('명예의 파편 주머니(소)') / 500,
        getPrice('명예의 파편 주머니(중)') / 1000,
        getPrice('명예의 파편 주머니(대)') / 1500
      ),
      중급오레하: getPrice('오레하 융화 재료'),
      상급오레하: getPrice('상급 오레하 융화 재료'),
      최상급오레하: getPrice('최상급 오레하 융화 재료'),
      명돌: getPrice('명예의 돌파석'),
      위명돌: getPrice('위대한 명예의 돌파석'),
      경명돌: getPrice('경이로운 명예의 돌파석'),
      찬명돌: getPrice('찬란한 명예의 돌파석'),
      수결: getPrice('수호석 결정') / 10,
      파결: getPrice('파괴석 결정') / 10,
      수호강석: getPrice('수호강석') / 10,
      파괴강석: getPrice('파괴강석') / 10,
      정제된수호강석: getPrice('정제된 수호강석') / 10,
      정제된파괴강석: getPrice('정제된 파괴강석') / 10,
      은총: getPrice('태양의 은총'),
      축복: getPrice('태양의 축복'),
      가호: getPrice('태양의 가호'),
      재봉술기본: getPrice('재봉술 : 수선 기본'),
      재봉술응용: getPrice('재봉술 : 수선 응용'),
      재봉술심화: getPrice('재봉술 : 수선 심화'),
      재봉술숙련: getPrice('재봉술 : 수선 숙련'),
      재봉술특화: getPrice('재봉술 : 수선 특화'),
      재봉술전문: getPrice('재봉술 : 수선 전문'),
      재봉술복합: getPrice('재봉술 : 수선 복합'),
      야금술기본: getPrice('야금술 : 단조 기본'),
      야금술응용: getPrice('야금술 : 단조 응용'),
      야금술심화: getPrice('야금술 : 단조 심화'),
      야금술숙련: getPrice('야금술 : 단조 숙련'),
      야금술특화: getPrice('야금술 : 단조 특화'),
      야금술전문: getPrice('야금술 : 단조 전문'),
      야금술복합: getPrice('야금술 : 단조 복합'),
    };

    return Object.fromEntries(
      Object.entries(obj).map(([key, value]) => [
        key,
        Math.round(value * 10000) / 10000,
      ])
    );
  }
}
