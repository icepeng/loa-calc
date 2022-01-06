import { fixed } from "./refine";
import { getRefineTable, RefineTable } from './data';

const createGetJanginFixed = 
  (table: RefineTable, price: Record<string, number>, binded: any) => 
  (additionalProb: number) => {
    const result = fixed(
      table as RefineTable, price, {}, additionalProb / 100, 0, 0, 0
    );

    const { jangin } = result.path[1];

    return (Math.floor(jangin * 10000) / 10000).toFixed(4);
  }


describe('refine', () => {

  /**
   * thanks to 카단:만남의 지평선:AssetPricing
   * https://www.inven.co.kr/board/lostark/4821/84928
   * [계량재련학] Appendix. 재련 확률 완벽 가이드
   * 장기백 데이터 및 로직 참고
   */
  describe('jangin - high', () => {
    const price = {
      "파편": 0,
      "하급오레하": 0,
      "중급오레하": 0,
      "상급오레하": 0,
      "명돌": 0,
      "위명돌": 0,
      "경명돌": 0,
      "수결": 0,
      "파결": 0,
      "수호강석": 0,
      "파괴강석": 0,
      "은총": 0,
      "축복": 0,
      "가호": 0,
      "재봉술기본": 0,
      "재봉술응용": 0,
      "재봉술심화": 0,
      "야금술기본": 0,
      "야금술응용": 0,
      "야금술심화": 0,
      "골드": 1,
    }
  
    const itemInfo = {
      type: "weapon",
      grade: "t3_1302",
      target: 7,
    };

    const table = getRefineTable(
      itemInfo.type,
      itemInfo.grade,
      itemInfo.target
    )

    const getJanginFixed = createGetJanginFixed(table!, price, {});

    // base prob = 60,
    it('totalProb 80.00% then first jangin be 37.20%', () => {
      const additionalProb = 80.00 - 60.00;
      const expectValue = "0.3720";

      const result = getJanginFixed(additionalProb);
      expect(result).toBe(expectValue);
    })

    it('totalProb 81.25% then first jangin be 37.79%', () => {
      const additionalProb = 81.25 - 60.00;
      const expectValue = "0.3779";

      const result = getJanginFixed(additionalProb);
      expect(result).toBe(expectValue);
    })

    it('totalProb 82.50% then first jangin be 38.37%', () => {
      const additionalProb = 82.50 - 60.00;
      const expectValue = "0.3837";

      const result = getJanginFixed(additionalProb);
      expect(result).toBe(expectValue);
    })

    it('totalProb 83.75% then first jangin be 38.95%', () => {
      const additionalProb = 83.75 - 60.00;
      const expectValue = "0.3895";

      const result = getJanginFixed(additionalProb);
      expect(result).toBe(expectValue);
    })

    it('totalProb 85.00% then first jangin be 39.53%', () => {
      const additionalProb = 85.00 - 60.00;
      const expectValue = "0.3953";

      const result = getJanginFixed(additionalProb);
      expect(result).toBe(expectValue);
    })

    it('totalProb 86.25% then first jangin be 40.11%', () => {
      const additionalProb = 86.25 - 60.00;
      const expectValue = "0.4011";

      const result = getJanginFixed(additionalProb);
      expect(result).toBe(expectValue);
    })

    it('totalProb 87.50% then first jangin be 40.69%', () => {
      const additionalProb = 87.50 - 60.00;
      const expectValue = "0.4069";

      const result = getJanginFixed(additionalProb);
      expect(result).toBe(expectValue);
    })

    it('totalProb 88.75% then first jangin be 41.27%', () => {
      const additionalProb = 88.75 - 60.00;
      const expectValue = "0.4127";

      const result = getJanginFixed(additionalProb);
      expect(result).toBe(expectValue);
    })

    it('totalProb 90.00% then first jangin be 41.86%', () => {
      const additionalProb = 90.00 - 60.00;
      const expectValue = "0.4186";

      const result = getJanginFixed(additionalProb);
      expect(result).toBe(expectValue);
    })

    it('totalProb 91.25% then first jangin be 42.44%', () => {
      const additionalProb = 91.25 - 60.00;
      const expectValue = "0.4244";

      const result = getJanginFixed(additionalProb);
      expect(result).toBe(expectValue);
    })

    it('totalProb 91.67% then first jangin be 42.63%', () => {
      const additionalProb = 91.67 - 60.00;
      const expectValue = "0.4263";

      const result = getJanginFixed(additionalProb);
      expect(result).toBe(expectValue);
    })

    it('totalProb 92.50% then first jangin be 43.02%', () => {
      const additionalProb = 92.50 - 60.00;
      const expectValue = "0.4302";

      const result = getJanginFixed(additionalProb);
      expect(result).toBe(expectValue);
    })

    it('totalProb 93.34% then first jangin be 43.41%', () => {
      const additionalProb = 93.34 - 60.00;
      const expectValue = "0.4341";

      const result = getJanginFixed(additionalProb);
      expect(result).toBe(expectValue);
    })

    it('totalProb 93.75% then first jangin be 43.60%', () => {
      const additionalProb = 93.75 - 60.00;
      const expectValue = "0.4360";

      const result = getJanginFixed(additionalProb);
      expect(result).toBe(expectValue);
    })

    it('totalProb 95.00% then first jangin be 44.18%', () => {
      const additionalProb = 95.00 - 60.00;
      const expectValue = "0.4418";

      const result = getJanginFixed(additionalProb);
      expect(result).toBe(expectValue);
    })

    it('totalProb 95.01% then first jangin be 44.19%', () => {
      const additionalProb = 95.01 - 60.00;
      const expectValue = "0.4419";

      const result = getJanginFixed(additionalProb);
      expect(result).toBe(expectValue);
    })

    it('totalProb 96.25% then first jangin be 44.76%', () => {
      const additionalProb = 96.25 - 60.00;
      const expectValue = "0.4476";

      const result = getJanginFixed(additionalProb);
      expect(result).toBe(expectValue);
    })

    it('totalProb 96.68% then first jangin be 44.96%', () => {
      const additionalProb = 96.68 - 60.00;
      const expectValue = "0.4496";

      const result = getJanginFixed(additionalProb);
      expect(result).toBe(expectValue);
    })

    it('totalProb 97.50% then first jangin be 45.34%', () => {
      const additionalProb = 97.50 - 60.00;
      const expectValue = "0.4534";

      const result = getJanginFixed(additionalProb);
      expect(result).toBe(expectValue);
    })

    it('totalProb 98.35% then first jangin be 45.74%', () => {
      const additionalProb = 98.35 - 60.00;
      const expectValue = "0.4574";

      const result = getJanginFixed(additionalProb);
      expect(result).toBe(expectValue);
    })

    it('totalProb 98.75% then first jangin be 45.93%', () => {
      const additionalProb = 98.75 - 60.00;
      const expectValue = "0.4593";

      const result = getJanginFixed(additionalProb);
      expect(result).toBe(expectValue);
    })

  });
  describe('jangin - low', () => {
    const price = {
      "파편": 0,
      "하급오레하": 0,
      "중급오레하": 0,
      "상급오레하": 0,
      "명돌": 0,
      "위명돌": 0,
      "경명돌": 0,
      "수결": 0,
      "파결": 0,
      "수호강석": 0,
      "파괴강석": 0,
      "은총": 0,
      "축복": 0,
      "가호": 0,
      "재봉술기본": 0,
      "재봉술응용": 0,
      "재봉술심화": 0,
      "야금술기본": 0,
      "야금술응용": 0,
      "야금술심화": 0,
      "골드": 1,
    }
  
    const itemInfo = {
      type: "weapon",
      grade: "t3_1390",
      target: 14,
      // baseProb: 5,
    };

    const table = getRefineTable(
      itemInfo.type,
      itemInfo.grade,
      itemInfo.target
    )

    const getJanginFixed = createGetJanginFixed(table!, price, {});

    // base prob = 5,
    it('totalProb 6.40% then first jangin be 2.97%', () => {
      const additionalProb = 6.40 - 5;
      const expectValue = "0.0297";

      const result = getJanginFixed(additionalProb);
      expect(result).toBe(expectValue);
    })

    it('totalProb 6.41% then first jangin be 2.98%', () => {
      const additionalProb = 6.41 - 5;
      const expectValue = "0.0298";

      const result = getJanginFixed(additionalProb);
      expect(result).toBe(expectValue);
    })

    it('totalProb 6.45% then first jangin be 3.00%', () => {
      const additionalProb = 6.45 - 5;
      const expectValue = "0.0300";

      const result = getJanginFixed(additionalProb);
      expect(result).toBe(expectValue);
    })
  })
})