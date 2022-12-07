import axios from 'axios';
import { environment } from '../../../environments/environment';

export async function getPriceData() {
  /** 재련 재료 아이템 ID 리스트
    - 명예의 파편 주머니(소) 66130131
    - 명예의 파편 주머니(중) 66130132
    - 명예의 파편 주머니(대) 66130133
    - 하급 오레하 융화 재료 6861007
    - 중급 오레하 융화 재료 6861008
    - 고급 오레하 융화 재료 6801009
    - 최상급 오레하 융화 재료 6861011
    - 명예의 돌파석 66110221
    - 위대한 명예의 돌파석 66110222
    - 경이로운 명예의 돌파석 66110223
    - 찬란한 명예의 돌파석 66110224
    - 수호석 결정 66102103
    - 파괴석 결정 66102003
    - 수호강석 66102104
    - 파괴강석 66102004
    - 정제된 수호강석 66102105
    - 정제된 파괴강석 66102005
    - 태양의 은총 66111121
    - 태양의 축복 66111122
    - 태양의 가호 66111123
    - 재봉술 : 수선 기본 66112524
    - 재봉술 : 수선 응용 66112525
    - 재봉술 : 수선 심화 66112526
    - 재봉술 : 수선 숙련 66112534
    - 재봉술 : 수선 특화 66112535
    - 야금술 : 단조 기본 66112521
    - 야금술 : 단조 응용 66112522
    - 야금술 : 단조 심화 66112523
    - 야금술 : 단조 숙련 66112531
    - 야금술 : 단조 특화 66112532
  */

  const getData = async (itemId: number): Promise<number> => {
    const { loaToken } = environment;
    const result = await axios.get(
      `https://developer-lostark.game.onstove.com/markets/items/${itemId}`,
      {
        headers: {
          accept: 'application/json',
          authorization: `bearer ${loaToken}`,
        },
      }
    );
    return result.data[0].Stats[0]?.AvgPrice;
  };

  return {
    파편: Math.min(
      (await getData(66130131)) / 500,
      (await getData(66130132)) / 1000,
      (await getData(66130133)) / 1500
    ),
    하급오레하: await getData(6861007),
    중급오레하: await getData(6861008),
    상급오레하: await getData(6861009),
    최상급오레하: await getData(6861011),
    명돌: await getData(66110221),
    위명돌: await getData(66110222),
    경명돌: await getData(66110223),
    찬명돌: await getData(66110224),
    수결: (await getData(66102103)) / 10,
    파결: (await getData(66102003)) / 10,
    수호강석: (await getData(66102104)) / 10,
    파괴강석: (await getData(66102004)) / 10,
    정제된수호강석: (await getData(66102105)) / 10,
    정제된파괴강석: (await getData(66102005)) / 10,
    은총: await getData(66111121),
    축복: await getData(66111122),
    가호: await getData(66111123),
    재봉술기본: await getData(66112524),
    재봉술응용: await getData(66112525),
    재봉술심화: await getData(66112526),
    재봉술숙련: await getData(66112534),
    재봉술특화: await getData(66112535),
    야금술기본: await getData(66112521),
    야금술응용: await getData(66112522),
    야금술심화: await getData(66112523),
    야금술숙련: await getData(66112531),
    야금술특화: await getData(66112532),
  };
}
