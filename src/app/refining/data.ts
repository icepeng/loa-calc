export interface RefineTableData {
  baseProb: number;
  amount: Record<string, number>;
  breath: Record<string, [number, number]>;
}

export interface RefineTable {
  baseProb: number;
  additionalProb: number;
  janginMultiplier: number;
  amount: Record<string, number>;
  breath: Record<string, [number, number]>;
}

const breathTable: Record<number, Record<string, [number, number]>> = {
  0.6: {
    은총: [12, 0.0167],
    축복: [6, 0.0333],
    가호: [2, 0.1],
  },
  0.5: {
    은총: [12, 0.0105],
    축복: [6, 0.0279],
    가호: [2, 0.0837],
  },
  0.45: {
    은총: [12, 0.0125],
    축복: [6, 0.025],
    가호: [2, 0.075],
  },
  0.3: {
    은총: [12, 0.0084],
    축복: [6, 0.0167],
    가호: [2, 0.05],
  },
  0.15: {
    은총: [24, 0.0021],
    축복: [12, 0.0042],
    가호: [4, 0.0125],
  },
  0.1: {
    은총: [24, 0.0014],
    축복: [12, 0.0028],
    가호: [4, 0.0083],
  },
  0.05: {
    은총: [36, 0.0005],
    축복: [18, 0.0009],
    가호: [6, 0.0028],
  },
  0.04: {
    은총: [36, 0.0004],
    축복: [18, 0.0007],
    가호: [6, 0.0022],
  },
  0.03: {
    은총: [36, 0.0003],
    축복: [18, 0.0006],
    가호: [6, 0.0017],
  },
  0.015: {
    은총: [48, 0.0001],
    축복: [24, 0.0002],
    가호: [8, 0.0007],
  },
  0.01: {
    은총: [48, 0.0001],
    축복: [24, 0.0002],
    가호: [8, 0.0004],
  },
  0.005: {
    은총: [48, 0.0001],
    축복: [24, 0.0002],
    가호: [8, 0.0004],
  },
};

const t4ArmorBreathTable: Record<number, Record<string, [number, number]>> = {
  0.1: {
    빙하: [20, 0.005],
  },
  0.05: {
    빙하: [20, 0.0025],
  },
  0.04: {
    빙하: [20, 0.002],
  },
  0.03: {
    빙하: [20, 0.0015],
  },
  0.015: {
    빙하: [25, 0.0006],
  },
  0.01: {
    빙하: [25, 0.0004],
  },
  0.005: {
    빙하: [50, 0.0001],
  },
};

const t4WeaponBreathTable: Record<number, Record<string, [number, number]>> = {
  0.1: {
    용암: [20, 0.005],
  },
  0.05: {
    용암: [20, 0.0025],
  },
  0.04: {
    용암: [20, 0.002],
  },
  0.03: {
    용암: [20, 0.0015],
  },
  0.015: {
    용암: [25, 0.0006],
  },
  0.01: {
    용암: [25, 0.0004],
  },
  0.005: {
    용암: [50, 0.0001],
  },
};

export const refineData: Record<
  string,
  Record<string, Record<number, RefineTableData>>
> = {
  armor: {
    t3_1250: {
      3: {
        baseProb: 0.5,
        amount: {
          수결: 190,
          위명돌: 7,
          파편: 120,
        },
        breath: {
          ...breathTable[0.5],
        },
      },
      4: {
        baseProb: 0.5,
        amount: {
          수결: 230,
          위명돌: 7,
          파편: 120,
        },
        breath: {
          ...breathTable[0.5],
        },
      },
      5: {
        baseProb: 0.3,
        amount: {
          수결: 230,
          위명돌: 8,
          중급오레하: 3,
          파편: 150,
          골드: 70,
        },
        breath: {
          재봉술기본: [1, 0.1],
          ...breathTable[0.3],
        },
      },
      6: {
        baseProb: 0.3,
        amount: {
          수결: 230,
          위명돌: 8,
          중급오레하: 3,
          파편: 150,
          골드: 90,
        },
        breath: {
          재봉술기본: [1, 0.1],
          ...breathTable[0.3],
        },
      },
      7: {
        baseProb: 0.2,
        amount: {
          수결: 280,
          위명돌: 9,
          중급오레하: 4,
          파편: 150,
          골드: 110,
        },
        breath: {
          재봉술기본: [1, 0.1],
          ...breathTable[0.2],
        },
      },
      8: {
        baseProb: 0.2,
        amount: {
          수결: 330,
          위명돌: 9,
          중급오레하: 4,
          파편: 180,
          골드: 130,
        },
        breath: {
          재봉술응용: [1, 0.1],
          ...breathTable[0.2],
        },
      },
      9: {
        baseProb: 0.15,
        amount: {
          수결: 400,
          위명돌: 10,
          중급오레하: 5,
          파편: 180,
          골드: 130,
        },
        breath: {
          재봉술응용: [1, 0.1],
          ...breathTable[0.15],
        },
      },
      10: {
        baseProb: 0.15,
        amount: {
          수결: 470,
          위명돌: 11,
          중급오레하: 6,
          파편: 180,
          골드: 180,
        },
        breath: {
          재봉술응용: [1, 0.1],
          ...breathTable[0.15],
        },
      },
      11: {
        baseProb: 0.1,
        amount: {
          수결: 686,
          위명돌: 14,
          중급오레하: 10,
          파편: 216,
          골드: 350,
        },
        breath: {
          재봉술심화: [1, 0.1],
          ...breathTable[0.1],
        },
      },
      12: {
        baseProb: 0.1,
        amount: {
          수결: 686,
          위명돌: 16,
          중급오레하: 10,
          파편: 292,
          골드: 350,
        },
        breath: {
          재봉술심화: [1, 0.1],
          ...breathTable[0.1],
        },
      },
      13: {
        baseProb: 0.05,
        amount: {
          수결: 686,
          위명돌: 16,
          중급오레하: 12,
          파편: 396,
          골드: 350,
        },
        breath: {
          재봉술심화: [1, 0.05],
          ...breathTable[0.05],
        },
      },
      14: {
        baseProb: 0.05,
        amount: {
          수결: 780,
          위명돌: 18,
          중급오레하: 14,
          파편: 536,
          골드: 350,
        },
        breath: {
          재봉술심화: [1, 0.05],
          ...breathTable[0.05],
        },
      },
      15: {
        baseProb: 0.03,
        amount: {
          수결: 780,
          위명돌: 20,
          중급오레하: 14,
          파편: 728,
          골드: 350,
        },
        breath: {
          재봉술심화: [1, 0.03],
          ...breathTable[0.03],
        },
      },
      16: {
        baseProb: 0.03,
        amount: {
          수결: 780,
          위명돌: 22,
          중급오레하: 16,
          파편: 988,
          골드: 360,
        },
        breath: {
          ...breathTable[0.03],
        },
      },
    },
    t3_1390: {
      12: {
        baseProb: 0.1,
        amount: {
          수호강석: 390,
          경명돌: 11,
          상급오레하: 5,
          파편: 600,
          골드: 480,
        },
        breath: {
          ...breathTable[0.1],
        },
      },
      13: {
        baseProb: 0.1,
        amount: {
          수호강석: 390,
          경명돌: 11,
          상급오레하: 5,
          파편: 600,
          골드: 480,
        },
        breath: {
          재봉술숙련: [1, 0.1],
          ...breathTable[0.1],
        },
      },
      14: {
        baseProb: 0.05,
        amount: {
          수호강석: 420,
          경명돌: 12,
          상급오레하: 7,
          파편: 840,
          골드: 520,
        },
        breath: {
          ...breathTable[0.05],
          재봉술숙련: [1, 0.05],
        },
      },
      15: {
        baseProb: 0.05,
        amount: {
          수호강석: 450,
          경명돌: 12,
          상급오레하: 7,
          파편: 840,
          골드: 560,
        },
        breath: {
          ...breathTable[0.05],
          재봉술숙련: [1, 0.05],
        },
      },
      16: {
        baseProb: 0.04,
        amount: {
          수호강석: 540,
          경명돌: 13,
          상급오레하: 7,
          파편: 1440,
          골드: 670,
        },
        breath: {
          ...breathTable[0.04],
          재봉술특화: [1, 0.04],
        },
      },
      17: {
        baseProb: 0.04,
        amount: {
          수호강석: 570,
          경명돌: 14,
          상급오레하: 7,
          파편: 1440,
          골드: 720,
        },
        breath: {
          ...breathTable[0.04],
          재봉술특화: [1, 0.04],
        },
      },
      18: {
        baseProb: 0.03,
        amount: {
          수호강석: 660,
          경명돌: 17,
          상급오레하: 12,
          파편: 2160,
          골드: 810,
        },
        breath: {
          ...breathTable[0.03],
          재봉술특화: [1, 0.03],
        },
      },
      19: {
        baseProb: 0.03,
        amount: {
          수호강석: 690,
          경명돌: 18,
          상급오레하: 12,
          파편: 2160,
          골드: 860,
        },
        breath: {
          ...breathTable[0.03],
          재봉술특화: [1, 0.03],
        },
      },
      20: {
        baseProb: 0.015,
        amount: {
          수호강석: 780,
          경명돌: 19,
          상급오레하: 18,
          파편: 3000,
          골드: 960,
        },
        breath: {
          ...breathTable[0.015],
        },
      },
      21: {
        baseProb: 0.015,
        amount: {
          수호강석: 810,
          경명돌: 20,
          상급오레하: 18,
          파편: 3960,
          골드: 1020,
        },
        breath: {
          ...breathTable[0.015],
        },
      },
      22: {
        baseProb: 0.01,
        amount: {
          수호강석: 900,
          경명돌: 23,
          상급오레하: 18,
          파편: 5040,
          골드: 1130,
        },
        breath: {
          ...breathTable[0.01],
        },
      },
      23: {
        baseProb: 0.01,
        amount: {
          수호강석: 930,
          경명돌: 25,
          상급오레하: 18,
          파편: 6000,
          골드: 1200,
        },
        breath: {
          ...breathTable[0.01],
        },
      },
      24: {
        baseProb: 0.005,
        amount: {
          수호강석: 1020,
          경명돌: 26,
          상급오레하: 27,
          파편: 7200,
          골드: 1350,
        },
        breath: {
          ...breathTable[0.005],
        },
      },
      25: {
        baseProb: 0.005,
        amount: {
          수호강석: 1050,
          경명돌: 29,
          상급오레하: 27,
          파편: 8640,
          골드: 1470,
        },
        breath: {
          ...breathTable[0.005],
        },
      },
    },
    t3_1525: {
      10: {
        baseProb: 0.15,
        amount: {
          정제된수호강석: 410,
          찬명돌: 9,
          최상급오레하: 4,
          파편: 3500,
          골드: 700,
        },
        breath: {
          ...breathTable[0.15],
        },
      },
      11: {
        baseProb: 0.15,
        amount: {
          정제된수호강석: 410,
          찬명돌: 9,
          최상급오레하: 4,
          파편: 3500,
          골드: 740,
        },
        breath: {
          ...breathTable[0.15],
        },
      },
      12: {
        baseProb: 0.1,
        amount: {
          정제된수호강석: 410,
          찬명돌: 9,
          최상급오레하: 5,
          파편: 4000,
          골드: 770,
        },
        breath: {
          ...breathTable[0.1],
        },
      },
      13: {
        baseProb: 0.1,
        amount: {
          정제된수호강석: 460,
          찬명돌: 12,
          최상급오레하: 5,
          파편: 4000,
          골드: 820,
        },
        breath: {
          ...breathTable[0.1],
          재봉술전문: [1, 0.1],
        },
      },
      14: {
        baseProb: 0.05,
        amount: {
          정제된수호강석: 490,
          찬명돌: 13,
          최상급오레하: 7,
          파편: 4500,
          골드: 860,
        },
        breath: {
          ...breathTable[0.05],
          재봉술전문: [1, 0.05],
        },
      },
      15: {
        baseProb: 0.05,
        amount: {
          정제된수호강석: 550,
          찬명돌: 14,
          최상급오레하: 7,
          파편: 4500,
          골드: 910,
        },
        breath: {
          ...breathTable[0.05],
          재봉술전문: [1, 0.05],
        },
      },
      16: {
        baseProb: 0.04,
        amount: {
          정제된수호강석: 660,
          찬명돌: 15,
          최상급오레하: 7,
          파편: 5000,
          골드: 970,
        },
        breath: {
          ...breathTable[0.04],
          재봉술복합: [1, 0.04],
        },
      },
      17: {
        baseProb: 0.04,
        amount: {
          정제된수호강석: 730,
          찬명돌: 18,
          최상급오레하: 7,
          파편: 5000,
          골드: 1030,
        },
        breath: {
          ...breathTable[0.04],
          재봉술복합: [1, 0.04],
        },
      },
      18: {
        baseProb: 0.03,
        amount: {
          정제된수호강석: 770,
          찬명돌: 19,
          최상급오레하: 12,
          파편: 6000,
          골드: 1100,
        },
        breath: {
          ...breathTable[0.03],
          재봉술복합: [1, 0.03],
        },
      },
      19: {
        baseProb: 0.03,
        amount: {
          정제된수호강석: 810,
          찬명돌: 21,
          최상급오레하: 12,
          파편: 6000,
          골드: 1190,
        },
        breath: {
          ...breathTable[0.03],
          재봉술복합: [1, 0.03],
        },
      },
      20: {
        baseProb: 0.015,
        amount: {
          정제된수호강석: 940,
          찬명돌: 23,
          최상급오레하: 18,
          파편: 8000,
          골드: 1290,
        },
        breath: {
          ...breathTable[0.015],
        },
      },
      21: {
        baseProb: 0.015,
        amount: {
          정제된수호강석: 1030,
          찬명돌: 25,
          최상급오레하: 18,
          파편: 9000,
          골드: 1410,
        },
        breath: {
          ...breathTable[0.015],
        },
      },
      22: {
        baseProb: 0.01,
        amount: {
          정제된수호강석: 1120,
          찬명돌: 28,
          최상급오레하: 18,
          파편: 9000,
          골드: 1560,
        },
        breath: {
          ...breathTable[0.01],
        },
      },
      23: {
        baseProb: 0.01,
        amount: {
          정제된수호강석: 1250,
          찬명돌: 31,
          최상급오레하: 18,
          파편: 11000,
          골드: 1750,
        },
        breath: {
          ...breathTable[0.01],
        },
      },
      24: {
        baseProb: 0.005,
        amount: {
          정제된수호강석: 1460,
          찬명돌: 35,
          최상급오레하: 27,
          파편: 11000,
          골드: 1970,
        },
        breath: {
          ...breathTable[0.005],
        },
      },
      25: {
        baseProb: 0.005,
        amount: {
          정제된수호강석: 1620,
          찬명돌: 38,
          최상급오레하: 27,
          파편: 11000,
          골드: 2250,
        },
        breath: {
          ...breathTable[0.005],
        },
      },
    },
    t4_1590: {
      11: {
        baseProb: 0.1,
        amount: {
          운명의수호석: 750,
          운돌: 11,
          아비도스: 7,
          운명파편: 3000,
          골드: 970,
        },
        breath: {
          ...t4ArmorBreathTable[0.1],
        },
      },
      12: {
        baseProb: 0.1,
        amount: {
          운명의수호석: 780,
          운돌: 13,
          아비도스: 7,
          운명파편: 3180,
          골드: 1070,
        },
        breath: {
          ...t4ArmorBreathTable[0.1],
        },
      },
      13: {
        baseProb: 0.05,
        amount: {
          운명의수호석: 840,
          운돌: 14,
          아비도스: 9,
          운명파편: 4560,
          골드: 1190,
        },
        breath: {
          ...t4ArmorBreathTable[0.05],
        },
      },
      14: {
        baseProb: 0.05,
        amount: {
          운명의수호석: 930,
          운돌: 16,
          아비도스: 9,
          운명파편: 4920,
          골드: 1320,
        },
        breath: {
          ...t4ArmorBreathTable[0.05],
        },
      },
      15: {
        baseProb: 0.04,
        amount: {
          운명의수호석: 1020,
          운돌: 18,
          아비도스: 11,
          운명파편: 5280,
          골드: 1460,
        },
        breath: {
          ...t4ArmorBreathTable[0.04],
        },
      },
      16: {
        baseProb: 0.04,
        amount: {
          운명의수호석: 1170,
          운돌: 20,
          아비도스: 11,
          운명파편: 5640,
          골드: 1600,
        },
        breath: {
          ...t4ArmorBreathTable[0.04],
        },
      },
      17: {
        baseProb: 0.03,
        amount: {
          운명의수호석: 1320,
          운돌: 22,
          아비도스: 15,
          운명파편: 7200,
          골드: 1760,
        },
        breath: {
          ...t4ArmorBreathTable[0.03],
        },
      },
      18: {
        baseProb: 0.03,
        amount: {
          운명의수호석: 1470,
          운돌: 23,
          아비도스: 15,
          운명파편: 7740,
          골드: 1930,
        },
        breath: {
          ...t4ArmorBreathTable[0.03],
        },
      },
      19: {
        baseProb: 0.03,
        amount: {
          운명의수호석: 1620,
          운돌: 25,
          아비도스: 15,
          운명파편: 8220,
          골드: 2110,
        },
        breath: {
          ...t4ArmorBreathTable[0.03],
        },
      },
      20: {
        baseProb: 0.015,
        amount: {
          운명의수호석: 1770,
          운돌: 27,
          아비도스: 21,
          운명파편: 9600,
          골드: 2300,
        },
        breath: {
          ...t4ArmorBreathTable[0.015],
        },
      },
      21: {
        baseProb: 0.015,
        amount: {
          운명의수호석: 1920,
          운돌: 29,
          아비도스: 21,
          운명파편: 10260,
          골드: 2500,
        },
        breath: {
          ...t4ArmorBreathTable[0.015],
        },
      },
      22: {
        baseProb: 0.01,
        amount: {
          운명의수호석: 2220,
          운돌: 31,
          아비도스: 21,
          운명파편: 10920,
          골드: 2710,
        },
        breath: {
          ...t4ArmorBreathTable[0.01],
        },
      },
      23: {
        baseProb: 0.01,
        amount: {
          운명의수호석: 2400,
          운돌: 34,
          아비도스: 21,
          운명파편: 11520,
          골드: 2920,
        },
        breath: {
          ...t4ArmorBreathTable[0.01],
        },
      },
      24: {
        baseProb: 0.005,
        amount: {
          운명의수호석: 2520,
          운돌: 36,
          아비도스: 30,
          운명파편: 12240,
          골드: 3150,
        },
        breath: {
          ...t4ArmorBreathTable[0.005],
        },
      },
      25: {
        baseProb: 0.005,
        amount: {
          운명의수호석: 2700,
          운돌: 40,
          아비도스: 30,
          운명파편: 12900,
          골드: 3390,
        },
        breath: {
          ...t4ArmorBreathTable[0.005],
        },
      },
      
    },
  },
  weapon: {
    t3_1250: {
      3: {
        baseProb: 0.5,
        amount: {
          파결: 310,
          위명돌: 11,
          파편: 200,
        },
        breath: {
          ...breathTable[0.5],
        },
      },
      4: {
        baseProb: 0.5,
        amount: {
          파결: 380,
          위명돌: 11,
          파편: 200,
        },
        breath: {
          ...breathTable[0.5],
        },
      },
      5: {
        baseProb: 0.3,
        amount: {
          파결: 380,
          위명돌: 12,
          중급오레하: 4,
          파편: 200,
          골드: 120,
        },
        breath: {
          ...breathTable[0.3],
          야금술기본: [1, 0.1],
        },
      },
      6: {
        baseProb: 0.3,
        amount: {
          파결: 380,
          위명돌: 13,
          중급오레하: 4,
          파편: 250,
          골드: 150,
        },
        breath: {
          ...breathTable[0.3],
          야금술기본: [1, 0.1],
        },
      },
      7: {
        baseProb: 0.2,
        amount: {
          파결: 460,
          위명돌: 14,
          중급오레하: 5,
          파편: 250,
          골드: 180,
        },
        breath: {
          ...breathTable[0.2],
          야금술기본: [1, 0.1],
        },
      },
      8: {
        baseProb: 0.2,
        amount: {
          파결: 540,
          위명돌: 15,
          중급오레하: 6,
          파편: 300,
          골드: 210,
        },
        breath: {
          ...breathTable[0.2],
          야금술응용: [1, 0.1],
        },
      },
      9: {
        baseProb: 0.15,
        amount: {
          파결: 660,
          위명돌: 16,
          중급오레하: 7,
          파편: 300,
          골드: 250,
        },
        breath: {
          ...breathTable[0.15],
          야금술응용: [1, 0.1],
        },
      },
      10: {
        baseProb: 0.15,
        amount: {
          파결: 780,
          위명돌: 17,
          중급오레하: 8,
          파편: 300,
          골드: 300,
        },
        breath: {
          ...breathTable[0.15],
          야금술응용: [1, 0.1],
        },
      },
      11: {
        baseProb: 0.1,
        amount: {
          파결: 1144,
          위명돌: 22,
          중급오레하: 12,
          파편: 310,
          골드: 680,
        },
        breath: {
          ...breathTable[0.1],
          야금술심화: [1, 0.1],
        },
      },
      12: {
        baseProb: 0.1,
        amount: {
          파결: 1144,
          위명돌: 24,
          중급오레하: 14,
          파편: 422,
          골드: 680,
        },
        breath: {
          ...breathTable[0.1],
          야금술심화: [1, 0.1],
        },
      },
      13: {
        baseProb: 0.05,
        amount: {
          파결: 1144,
          위명돌: 28,
          중급오레하: 16,
          파편: 572,
          골드: 680,
        },
        breath: {
          ...breathTable[0.05],
          야금술심화: [1, 0.05],
        },
      },
      14: {
        baseProb: 0.05,
        amount: {
          파결: 1300,
          위명돌: 30,
          중급오레하: 18,
          파편: 776,
          골드: 710,
        },
        breath: {
          ...breathTable[0.05],
          야금술심화: [1, 0.05],
        },
      },
      15: {
        baseProb: 0.03,
        amount: {
          파결: 1300,
          위명돌: 32,
          중급오레하: 20,
          파편: 1054,
          골드: 730,
        },
        breath: {
          ...breathTable[0.03],
          야금술심화: [1, 0.03],
        },
      },
      16: {
        baseProb: 0.03,
        amount: {
          파결: 1300,
          위명돌: 34,
          중급오레하: 22,
          파편: 1432,
          골드: 750,
        },
        breath: {
          ...breathTable[0.03],
        },
      },
    },
    t3_1390: {
      12: {
        baseProb: 0.1,
        amount: {
          파괴강석: 650,
          경명돌: 18,
          상급오레하: 8,
          파편: 1000,
          골드: 800,
        },
        breath: {
          ...breathTable[0.1],
        },
      },
      13: {
        baseProb: 0.1,
        amount: {
          파괴강석: 650,
          경명돌: 18,
          상급오레하: 8,
          파편: 1000,
          골드: 800,
        },
        breath: {
          야금술숙련: [1, 0.1],
          ...breathTable[0.1],
        },
      },
      14: {
        baseProb: 0.05,
        amount: {
          파괴강석: 700,
          경명돌: 20,
          상급오레하: 12,
          파편: 1400,
          골드: 870,
        },
        breath: {
          ...breathTable[0.05],
          야금술숙련: [1, 0.05],
        },
      },
      15: {
        baseProb: 0.05,
        amount: {
          파괴강석: 750,
          경명돌: 20,
          상급오레하: 12,
          파편: 1400,
          골드: 940,
        },
        breath: {
          ...breathTable[0.05],
          야금술숙련: [1, 0.05],
        },
      },
      16: {
        baseProb: 0.04,
        amount: {
          파괴강석: 900,
          경명돌: 22,
          상급오레하: 12,
          파편: 2400,
          골드: 1120,
        },
        breath: {
          ...breathTable[0.04],
          야금술특화: [1, 0.04],
        },
      },
      17: {
        baseProb: 0.04,
        amount: {
          파괴강석: 950,
          경명돌: 24,
          상급오레하: 12,
          파편: 2400,
          골드: 1200,
        },
        breath: {
          ...breathTable[0.04],
          야금술특화: [1, 0.04],
        },
      },
      18: {
        baseProb: 0.03,
        amount: {
          파괴강석: 1100,
          경명돌: 28,
          상급오레하: 20,
          파편: 3600,
          골드: 1350,
        },
        breath: {
          ...breathTable[0.03],
          야금술특화: [1, 0.03],
        },
      },
      19: {
        baseProb: 0.03,
        amount: {
          파괴강석: 1150,
          경명돌: 30,
          상급오레하: 20,
          파편: 3600,
          골드: 1440,
        },
        breath: {
          ...breathTable[0.03],
          야금술특화: [1, 0.03],
        },
      },
      20: {
        baseProb: 0.015,
        amount: {
          파괴강석: 1300,
          경명돌: 32,
          상급오레하: 30,
          파편: 5000,
          골드: 1600,
        },
        breath: {
          ...breathTable[0.015],
        },
      },
      21: {
        baseProb: 0.015,
        amount: {
          파괴강석: 1350,
          경명돌: 34,
          상급오레하: 30,
          파편: 6600,
          골드: 1700,
        },
        breath: {
          ...breathTable[0.015],
        },
      },
      22: {
        baseProb: 0.01,
        amount: {
          파괴강석: 1500,
          경명돌: 38,
          상급오레하: 30,
          파편: 8400,
          골드: 1880,
        },
        breath: {
          ...breathTable[0.01],
        },
      },
      23: {
        baseProb: 0.01,
        amount: {
          파괴강석: 1550,
          경명돌: 42,
          상급오레하: 30,
          파편: 10000,
          골드: 2000,
        },
        breath: {
          ...breathTable[0.01],
        },
      },
      24: {
        baseProb: 0.005,
        amount: {
          파괴강석: 1700,
          경명돌: 44,
          상급오레하: 45,
          파편: 12000,
          골드: 2250,
        },
        breath: {
          ...breathTable[0.005],
        },
      },
      25: {
        baseProb: 0.005,
        amount: {
          파괴강석: 1750,
          경명돌: 48,
          상급오레하: 45,
          파편: 14400,
          골드: 2450,
        },
        breath: {
          ...breathTable[0.005],
        },
      },
    },
    t3_1525: {
      10: {
        baseProb: 0.15,
        amount: {
          정제된파괴강석: 650,
          찬명돌: 15,
          최상급오레하: 7,
          파편: 6500,
          골드: 1170,
        },
        breath: {
          ...breathTable[0.15],
        },
      },
      11: {
        baseProb: 0.15,
        amount: {
          정제된파괴강석: 650,
          찬명돌: 15,
          최상급오레하: 7,
          파편: 6500,
          골드: 1240,
        },
        breath: {
          ...breathTable[0.15],
        },
      },
      12: {
        baseProb: 0.1,
        amount: {
          정제된파괴강석: 650,
          찬명돌: 15,
          최상급오레하: 8,
          파편: 6500,
          골드: 1290,
        },
        breath: {
          ...breathTable[0.1],
        },
      },
      13: {
        baseProb: 0.1,
        amount: {
          정제된파괴강석: 700,
          찬명돌: 19,
          최상급오레하: 8,
          파편: 8000,
          골드: 1360,
        },
        breath: {
          ...breathTable[0.1],
          야금술전문: [1, 0.1],
        },
      },
      14: {
        baseProb: 0.05,
        amount: {
          정제된파괴강석: 750,
          찬명돌: 20,
          최상급오레하: 12,
          파편: 8000,
          골드: 1430,
        },
        breath: {
          ...breathTable[0.05],
          야금술전문: [1, 0.05],
        },
      },
      15: {
        baseProb: 0.05,
        amount: {
          정제된파괴강석: 800,
          찬명돌: 21,
          최상급오레하: 12,
          파편: 8000,
          골드: 1520,
        },
        breath: {
          ...breathTable[0.05],
          야금술전문: [1, 0.05],
        },
      },
      16: {
        baseProb: 0.04,
        amount: {
          정제된파괴강석: 950,
          찬명돌: 22,
          최상급오레하: 12,
          파편: 9000,
          골드: 1610,
        },
        breath: {
          ...breathTable[0.04],
          야금술복합: [1, 0.04],
        },
      },
      17: {
        baseProb: 0.04,
        amount: {
          정제된파괴강석: 1000,
          찬명돌: 24,
          최상급오레하: 12,
          파편: 9000,
          골드: 1720,
        },
        breath: {
          ...breathTable[0.04],
          야금술복합: [1, 0.04],
        },
      },
      18: {
        baseProb: 0.03,
        amount: {
          정제된파괴강석: 1050,
          찬명돌: 26,
          최상급오레하: 20,
          파편: 12000,
          골드: 1840,
        },
        breath: {
          ...breathTable[0.03],
          야금술복합: [1, 0.03],
        },
      },
      19: {
        baseProb: 0.03,
        amount: {
          정제된파괴강석: 1100,
          찬명돌: 28,
          최상급오레하: 20,
          파편: 14000,
          골드: 1980,
        },
        breath: {
          ...breathTable[0.03],
          야금술복합: [1, 0.03],
        },
      },
      20: {
        baseProb: 0.015,
        amount: {
          정제된파괴강석: 1250,
          찬명돌: 30,
          최상급오레하: 30,
          파편: 14000,
          골드: 2150,
        },
        breath: {
          ...breathTable[0.015],
        },
      },
      21: {
        baseProb: 0.015,
        amount: {
          정제된파괴강석: 1350,
          찬명돌: 33,
          최상급오레하: 30,
          파편: 15000,
          골드: 2350,
        },
        breath: {
          ...breathTable[0.015],
        },
      },
      22: {
        baseProb: 0.01,
        amount: {
          정제된파괴강석: 1450,
          찬명돌: 36,
          최상급오레하: 30,
          파편: 15000,
          골드: 2600,
        },
        breath: {
          ...breathTable[0.01],
        },
      },
      23: {
        baseProb: 0.01,
        amount: {
          정제된파괴강석: 1600,
          찬명돌: 40,
          최상급오레하: 30,
          파편: 17000,
          골드: 2910,
        },
        breath: {
          ...breathTable[0.01],
        },
      },
      24: {
        baseProb: 0.005,
        amount: {
          정제된파괴강석: 1850,
          찬명돌: 44,
          최상급오레하: 45,
          파편: 19000,
          골드: 3290,
        },
        breath: {
          ...breathTable[0.005],
        },
      },
      25: {
        baseProb: 0.005,
        amount: {
          정제된파괴강석: 2150,
          찬명돌: 48,
          최상급오레하: 45,
          파편: 22000,
          골드: 3750,
        },
        breath: {
          ...breathTable[0.005],
        },
      },
    },
    t4_1590: {
      11: {
        baseProb: 0.1,
        amount: {
          운명의파괴석: 1250,
          운돌: 18,
          아비도스: 12,
          운명파편: 5000,
          골드: 1620,
        },
        breath: {
          ...t4WeaponBreathTable[0.1],
        },
      },
      12: {
        baseProb: 0.1,
        amount: {
          운명의파괴석: 1300,
          운돌: 21,
          아비도스: 12,
          운명파편: 5300,
          골드: 1790,
        },
        breath: {
          ...t4WeaponBreathTable[0.1],
        },
      },
      13: {
        baseProb: 0.05,
        amount: {
          운명의파괴석: 1400,
          운돌: 24,
          아비도스: 15,
          운명파편: 7600,
          골드: 1990,
        },
        breath: {
          ...t4WeaponBreathTable[0.05],
        },
      },
      14: {
        baseProb: 0.05,
        amount: {
          운명의파괴석: 1550,
          운돌: 27,
          아비도스: 15,
          운명파편: 8200,
          골드: 2200,
        },
        breath: {
          ...t4WeaponBreathTable[0.05],
        },
      },
      15: {
        baseProb: 0.04,
        amount: {
          운명의파괴석: 1700,
          운돌: 30,
          아비도스: 18,
          운명파편: 8800,
          골드: 2430,
        },
        breath: {
          ...t4WeaponBreathTable[0.04],
        },
      },
      16: {
        baseProb: 0.04,
        amount: {
          운명의파괴석: 1950,
          운돌: 33,
          아비도스: 18,
          운명파편: 9400,
          골드: 2670,
        },
        breath: {
          ...t4WeaponBreathTable[0.04],
        },
      },
      17: {
        baseProb: 0.03,
        amount: {
          운명의파괴석: 2200,
          운돌: 36,
          아비도스: 25,
          운명파편: 12000,
          골드: 2940,
        },
        breath: {
          ...t4WeaponBreathTable[0.03],
        },
      },
      18: {
        baseProb: 0.03,
        amount: {
          운명의파괴석: 2450,
          운돌: 39,
          아비도스: 25,
          운명파편: 12900,
          골드: 3220,
        },
        breath: {
          ...t4WeaponBreathTable[0.03],
        },
      },
      19: {
        baseProb: 0.03,
        amount: {
          운명의파괴석: 2700,
          운돌: 42,
          아비도스: 25,
          운명파편: 13700,
          골드: 3510,
        },
        breath: {
          ...t4WeaponBreathTable[0.03],
        },
      },
      20: {
        baseProb: 0.015,
        amount: {
          운명의파괴석: 2950,
          운돌: 45,
          아비도스: 35,
          운명파편: 16000,
          골드: 3830,
        },
        breath: {
          ...t4WeaponBreathTable[0.015],
        },
      },
      21: {
        baseProb: 0.015,
        amount: {
          운명의파괴석: 3200,
          운돌: 48,
          아비도스: 35,
          운명파편: 17100,
          골드: 4160,
        },
        breath: {
          ...t4WeaponBreathTable[0.015],
        },
      },
      22: {
        baseProb: 0.01,
        amount: {
          운명의파괴석: 3700,
          운돌: 52,
          아비도스: 35,
          운명파편: 18200,
          골드: 4510,
        },
        breath: {
          ...t4WeaponBreathTable[0.01],
        },
      },
      23: {
        baseProb: 0.01,
        amount: {
          운명의파괴석: 4000,
          운돌: 56,
          아비도스: 35,
          운명파편: 19200,
          골드: 4870,
        },
        breath: {
          ...t4WeaponBreathTable[0.01],
        },
      },
      24: {
        baseProb: 0.005,
        amount: {
          운명의파괴석: 4200,
          운돌: 60,
          아비도스: 50,
          운명파편: 20400,
          골드: 5250,
        },
        breath: {
          ...t4WeaponBreathTable[0.005],
        },
      },
      25: {
        baseProb: 0.005,
        amount: {
          운명의파괴석: 4500,
          운돌: 65,
          아비도스: 50,
          운명파편: 21500,
          골드: 5650,
        },
        breath: {
          ...t4WeaponBreathTable[0.005],
        },
      },
    },
  },
};

export function getTargetList(
  itemType: string | undefined,
  itemGrade: string | undefined
) {
  if (!itemType || !itemGrade) {
    return [];
  }
  return Object.keys(refineData[itemType][itemGrade]).map((x) => +x);
}

export function getRefineTable(
  itemType: string | undefined,
  itemGrade: string | undefined,
  refineTarget: number | undefined,
  applyResearch: boolean,
  applyHyperExpress: boolean
): RefineTable | undefined {
  if (!itemType || !itemGrade || !refineTarget) {
    return undefined;
  }
  const data = refineData[itemType][itemGrade][refineTarget];

  let additionalProb = 0;
  let costReduction = 0;
  let goldReduction = 0;
  let goldCeilUnit = 1;
  let janginMultiplier = 1;
  if (itemGrade === 't3_1250' && refineTarget <= 12) {
    additionalProb = 0.1;
    costReduction = 0.4;
    goldReduction = 1;
  }
  if (itemGrade === 't3_1250' && refineTarget >= 13 && refineTarget <= 14) {
    additionalProb = 0.05;
    costReduction = 0.4;
    goldReduction = 1;
  }
  if (itemGrade === 't3_1250' && refineTarget === 15) {
    additionalProb = 0.03;
    costReduction = 0.4;
    goldReduction = 1;
  }
  if (itemGrade === 't3_1390' && refineTarget >= 1 && refineTarget <= 20) {
    additionalProb = data.baseProb;
    goldReduction = 0.5;
    costReduction = 0.5;
    goldCeilUnit = 10;
  }

  if (applyResearch) {
    if (itemGrade === 't3_1250' && refineTarget >= 1 && refineTarget <= 10) {
      additionalProb += 0.1;
    }
    if (itemGrade === 't3_1250' && refineTarget >= 11 && refineTarget <= 13) {
      additionalProb += 0.05;
    }
    if (itemGrade === 't3_1250' && refineTarget >= 14 && refineTarget <= 15) {
      additionalProb += 0.02;
    }
  }

  if (applyHyperExpress) {
    // 2024 Summer, Super Mococo Express
    if (itemGrade === 't3_1390' && refineTarget >= 13 && refineTarget <= 19) {
      additionalProb = data.baseProb;
      goldReduction = 0.7;
      costReduction = 0.7;
      goldCeilUnit = 1;
    }

    if (itemGrade === 't3_1525' && refineTarget >= 13 && refineTarget <= 15) {
      additionalProb += data.baseProb / 2;
      goldReduction = 0.4;
      costReduction = 0.4;
      goldCeilUnit = 1;
    }
  }

  additionalProb = Math.round(additionalProb * 1000) / 1000;

  return {
    additionalProb,
    janginMultiplier,
    amount: Object.fromEntries(
      Object.entries(data.amount).map(([name, value]) => [
        name,
        name === '골드'
          ? Math.ceil((value * (1 - goldReduction)) / goldCeilUnit) *
            goldCeilUnit
          : Math.round(value * (1 - costReduction)),
      ])
    ),
    baseProb: data.baseProb,
    breath: data.breath,
  };
}
