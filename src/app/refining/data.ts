export interface RefineTableData {
  baseProb: number;
  amount: Record<string, number>;
  breath: Record<string, [number, number]>;
}

export interface RefineTable {
  baseProb: number;
  additionalProb: number;
  amount: Record<string, number>;
  breath: Record<string, [number, number]>;
}

const breathTable: Record<number, Record<string, [number, number]>> = {
  0.6: {
    은총: [12, 0.0167],
    축복: [6, 0.0333],
    가호: [2, 0.1],
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

export const refineData: Record<
  string,
  Record<string, Record<number, RefineTableData>>
> = {
  armor: {
    t3_1302: {
      7: {
        baseProb: 0.6,
        amount: {
          수결: 156,
          명돌: 4,
          하급오레하: 2,
          파편: 42,
          골드: 220,
        },
        breath: {
          재봉술기본: [1, 0.1],
          ...breathTable[0.6],
        },
      },
      8: {
        baseProb: 0.45,
        amount: {
          수결: 156,
          명돌: 4,
          하급오레하: 2,
          파편: 42,
          골드: 220,
        },
        breath: {
          재봉술기본: [1, 0.1],
          ...breathTable[0.45],
        },
      },
      9: {
        baseProb: 0.3,
        amount: {
          수결: 156,
          명돌: 4,
          하급오레하: 2,
          파편: 42,
          골드: 220,
        },
        breath: {
          재봉술기본: [1, 0.1],
          ...breathTable[0.3],
        },
      },
      10: {
        baseProb: 0.3,
        amount: {
          수결: 192,
          명돌: 6,
          하급오레하: 4,
          파편: 50,
          골드: 220,
        },
        breath: {
          재봉술기본: [1, 0.1],
          ...breathTable[0.3],
        },
      },
      11: {
        baseProb: 0.3,
        amount: {
          수결: 192,
          명돌: 6,
          하급오레하: 4,
          파편: 50,
          골드: 220,
        },
        breath: {
          재봉술기본: [1, 0.1],
          ...breathTable[0.3],
        },
      },
      12: {
        baseProb: 0.15,
        amount: {
          수결: 192,
          명돌: 6,
          하급오레하: 4,
          파편: 50,
          골드: 220,
        },
        breath: {
          재봉술기본: [1, 0.1],
          ...breathTable[0.15],
        },
      },
      13: {
        baseProb: 0.15,
        amount: {
          수결: 228,
          명돌: 6,
          하급오레하: 4,
          파편: 60,
          골드: 220,
        },
        breath: {
          재봉술기본: [1, 0.1],
          ...breathTable[0.15],
        },
      },
      14: {
        baseProb: 0.15,
        amount: {
          수결: 228,
          명돌: 8,
          하급오레하: 4,
          파편: 60,
          골드: 220,
        },
        breath: {
          재봉술기본: [1, 0.1],
          ...breathTable[0.15],
        },
      },
      15: {
        baseProb: 0.1,
        amount: {
          수결: 228,
          명돌: 8,
          하급오레하: 4,
          파편: 60,
          골드: 220,
        },
        breath: {
          재봉술기본: [1, 0.1],
          ...breathTable[0.1],
        },
      },
    },
    t3_1340: {
      7: {
        baseProb: 0.6,
        amount: {
          수결: 404,
          위명돌: 8,
          중급오레하: 6,
          파편: 108,
          골드: 330,
        },
        breath: {
          재봉술응용: [1, 0.1],
          ...breathTable[0.6],
        },
      },
      8: {
        baseProb: 0.45,
        amount: {
          수결: 404,
          위명돌: 10,
          중급오레하: 6,
          파편: 108,
          골드: 330,
        },
        breath: {
          재봉술응용: [1, 0.1],
          ...breathTable[0.45],
        },
      },
      9: {
        baseProb: 0.3,
        amount: {
          수결: 404,
          위명돌: 10,
          중급오레하: 6,
          파편: 108,
          골드: 330,
        },
        breath: {
          재봉술응용: [1, 0.1],
          ...breathTable[0.3],
        },
      },
      10: {
        baseProb: 0.3,
        amount: {
          수결: 498,
          위명돌: 10,
          중급오레하: 8,
          파편: 132,
          골드: 330,
        },
        breath: {
          재봉술응용: [1, 0.1],
          ...breathTable[0.3],
        },
      },
      11: {
        baseProb: 0.3,
        amount: {
          수결: 498,
          위명돌: 10,
          중급오레하: 8,
          파편: 132,
          골드: 330,
        },
        breath: {
          재봉술응용: [1, 0.1],
          ...breathTable[0.3],
        },
      },
      12: {
        baseProb: 0.15,
        amount: {
          수결: 498,
          위명돌: 12,
          중급오레하: 8,
          파편: 132,
          골드: 330,
        },
        breath: {
          재봉술응용: [1, 0.1],
          ...breathTable[0.15],
        },
      },
      13: {
        baseProb: 0.15,
        amount: {
          수결: 592,
          위명돌: 12,
          중급오레하: 8,
          파편: 158,
          골드: 330,
        },
        breath: {
          재봉술응용: [1, 0.1],
          ...breathTable[0.15],
        },
      },
      14: {
        baseProb: 0.15,
        amount: {
          수결: 592,
          위명돌: 12,
          중급오레하: 8,
          파편: 158,
          골드: 330,
        },
        breath: {
          재봉술응용: [1, 0.1],
          ...breathTable[0.15],
        },
      },
      15: {
        baseProb: 0.1,
        amount: {
          수결: 592,
          위명돌: 12,
          중급오레하: 8,
          파편: 158,
          골드: 350,
        },
        breath: {
          재봉술응용: [1, 0.1],
          ...breathTable[0.1],
        },
      },
      16: {
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
      17: {
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
      18: {
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
      19: {
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
      20: {
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
      21: {
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
      22: {
        baseProb: 0.01,
        amount: {
          수결: 874,
          위명돌: 24,
          중급오레하: 18,
          파편: 1340,
          골드: 380,
        },
        breath: {
          ...breathTable[0.01],
        },
      },
      23: {
        baseProb: 0.01,
        amount: {
          수결: 874,
          위명돌: 26,
          중급오레하: 20,
          파편: 1818,
          골드: 390,
        },
        breath: {
          ...breathTable[0.01],
        },
      },
      24: {
        baseProb: 0.005,
        amount: {
          수결: 874,
          위명돌: 28,
          중급오레하: 22,
          파편: 2466,
          골드: 400,
        },
        breath: {
          ...breathTable[0.005],
        },
      },
      25: {
        baseProb: 0.005,
        amount: {
          수결: 968,
          위명돌: 30,
          중급오레하: 24,
          파편: 3346,
          골드: 420,
        },
        breath: {
          ...breathTable[0.005],
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
  },
  weapon: {
    t3_1302: {
      7: {
        baseProb: 0.6,
        amount: {
          파결: 258,
          명돌: 4,
          하급오레하: 4,
          파편: 60,
          골드: 400,
        },
        breath: {
          야금술기본: [1, 0.1],
          ...breathTable[0.6],
        },
      },
      8: {
        baseProb: 0.45,
        amount: {
          파결: 258,
          명돌: 8,
          하급오레하: 4,
          파편: 60,
          골드: 400,
        },
        breath: {
          야금술기본: [1, 0.1],
          ...breathTable[0.45],
        },
      },
      9: {
        baseProb: 0.3,
        amount: {
          파결: 258,
          명돌: 8,
          하급오레하: 4,
          파편: 60,
          골드: 400,
        },
        breath: {
          야금술기본: [1, 0.1],
          ...breathTable[0.3],
        },
      },
      10: {
        baseProb: 0.3,
        amount: {
          파결: 320,
          명돌: 10,
          하급오레하: 4,
          파편: 74,
          골드: 400,
        },
        breath: {
          야금술기본: [1, 0.1],
          ...breathTable[0.3],
        },
      },
      11: {
        baseProb: 0.3,
        amount: {
          파결: 320,
          명돌: 10,
          하급오레하: 4,
          파편: 74,
          골드: 400,
        },
        breath: {
          야금술기본: [1, 0.1],
          ...breathTable[0.3],
        },
      },
      12: {
        baseProb: 0.15,
        amount: {
          파결: 320,
          명돌: 10,
          하급오레하: 4,
          파편: 74,
          골드: 400,
        },
        breath: {
          야금술기본: [1, 0.1],
          ...breathTable[0.15],
        },
      },
      13: {
        baseProb: 0.15,
        amount: {
          파결: 380,
          명돌: 10,
          하급오레하: 6,
          파편: 88,
          골드: 400,
        },
        breath: {
          야금술기본: [1, 0.1],
          ...breathTable[0.15],
        },
      },
      14: {
        baseProb: 0.15,
        amount: {
          파결: 380,
          명돌: 12,
          하급오레하: 6,
          파편: 88,
          골드: 400,
        },
        breath: {
          야금술기본: [1, 0.1],
          ...breathTable[0.15],
        },
      },
      15: {
        baseProb: 0.1,
        amount: {
          파결: 380,
          명돌: 12,
          하급오레하: 6,
          파편: 88,
          골드: 400,
        },
        breath: {
          야금술기본: [1, 0.1],
          ...breathTable[0.1],
        },
      },
    },
    t3_1340: {
      7: {
        baseProb: 0.6,
        amount: {
          파결: 672,
          위명돌: 12,
          중급오레하: 6,
          파편: 156,
          골드: 640,
        },
        breath: {
          야금술응용: [1, 0.1],
          ...breathTable[0.6],
        },
      },
      8: {
        baseProb: 0.45,
        amount: {
          파결: 672,
          위명돌: 14,
          중급오레하: 6,
          파편: 156,
          골드: 640,
        },
        breath: {
          야금술응용: [1, 0.1],
          ...breathTable[0.45],
        },
      },
      9: {
        baseProb: 0.3,
        amount: {
          파결: 672,
          위명돌: 14,
          중급오레하: 8,
          파편: 156,
          골드: 640,
        },
        breath: {
          야금술응용: [1, 0.1],
          ...breathTable[0.3],
        },
      },
      10: {
        baseProb: 0.3,
        amount: {
          파결: 830,
          위명돌: 16,
          중급오레하: 8,
          파편: 192,
          골드: 640,
        },
        breath: {
          야금술응용: [1, 0.1],
          ...breathTable[0.3],
        },
      },
      11: {
        baseProb: 0.3,
        amount: {
          파결: 830,
          위명돌: 16,
          중급오레하: 8,
          파편: 192,
          골드: 660,
        },
        breath: {
          야금술응용: [1, 0.1],
          ...breathTable[0.3],
        },
      },
      12: {
        baseProb: 0.15,
        amount: {
          파결: 830,
          위명돌: 18,
          중급오레하: 8,
          파편: 192,
          골드: 660,
        },
        breath: {
          야금술응용: [1, 0.1],
          ...breathTable[0.15],
        },
      },
      13: {
        baseProb: 0.15,
        amount: {
          파결: 986,
          위명돌: 18,
          중급오레하: 10,
          파편: 228,
          골드: 660,
        },
        breath: {
          야금술응용: [1, 0.1],
          ...breathTable[0.15],
        },
      },
      14: {
        baseProb: 0.15,
        amount: {
          파결: 986,
          위명돌: 20,
          중급오레하: 10,
          파편: 228,
          골드: 660,
        },
        breath: {
          야금술응용: [1, 0.1],
          ...breathTable[0.15],
        },
      },
      15: {
        baseProb: 0.1,
        amount: {
          파결: 986,
          위명돌: 20,
          중급오레하: 10,
          파편: 228,
          골드: 660,
        },
        breath: {
          야금술응용: [1, 0.1],
          ...breathTable[0.1],
        },
      },
      16: {
        baseProb: 0.1,
        amount: {
          파결: 1144,
          위명돌: 22,
          중급오레하: 12,
          파편: 310,
          골드: 680,
        },
        breath: {
          야금술심화: [1, 0.1],
          ...breathTable[0.1],
        },
      },
      17: {
        baseProb: 0.1,
        amount: {
          파결: 1144,
          위명돌: 24,
          중급오레하: 14,
          파편: 422,
          골드: 680,
        },
        breath: {
          야금술심화: [1, 0.1],
          ...breathTable[0.1],
        },
      },
      18: {
        baseProb: 0.05,
        amount: {
          파결: 1144,
          위명돌: 28,
          중급오레하: 16,
          파편: 572,
          골드: 680,
        },
        breath: {
          야금술심화: [1, 0.05],
          ...breathTable[0.05],
        },
      },
      19: {
        baseProb: 0.05,
        amount: {
          파결: 1300,
          위명돌: 30,
          중급오레하: 18,
          파편: 776,
          골드: 710,
        },
        breath: {
          야금술심화: [1, 0.05],
          ...breathTable[0.05],
        },
      },
      20: {
        baseProb: 0.03,
        amount: {
          파결: 1300,
          위명돌: 32,
          중급오레하: 20,
          파편: 1054,
          골드: 730,
        },
        breath: {
          야금술심화: [1, 0.03],
          ...breathTable[0.03],
        },
      },
      21: {
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
      22: {
        baseProb: 0.01,
        amount: {
          파결: 1458,
          위명돌: 38,
          중급오레하: 26,
          파편: 1944,
          골드: 780,
        },
        breath: {
          ...breathTable[0.01],
        },
      },
      23: {
        baseProb: 0.01,
        amount: {
          파결: 1458,
          위명돌: 42,
          중급오레하: 28,
          파편: 2640,
          골드: 810,
        },
        breath: {
          ...breathTable[0.01],
        },
      },
      24: {
        baseProb: 0.005,
        amount: {
          파결: 1458,
          위명돌: 44,
          중급오레하: 32,
          파편: 3586,
          골드: 840,
        },
        breath: {
          ...breathTable[0.005],
        },
      },
      25: {
        baseProb: 0.005,
        amount: {
          파결: 1615,
          위명돌: 48,
          중급오레하: 36,
          파편: 4868,
          골드: 870,
        },
        breath: {
          ...breathTable[0.005],
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
  applyResearch: boolean
): RefineTable | undefined {
  if (!itemType || !itemGrade || !refineTarget) {
    return undefined;
  }
  const data = refineData[itemType][itemGrade][refineTarget];

  let additionalProb = 0;
  let costReduction = 0;
  let goldReduction = 0;
  if (itemGrade === 't3_1302' && refineTarget <= 15) {
    additionalProb = 0.2;
    costReduction = 0.5;
    goldReduction = 1;
  }
  if (itemGrade === 't3_1340' && refineTarget <= 15) {
    additionalProb = 0.2;
    costReduction = 0.6;
    goldReduction = 1;
  }
  if (itemGrade === 't3_1340' && refineTarget >= 16 && refineTarget <= 17) {
    additionalProb += 0.1;
    costReduction = 0.3;
    goldReduction = 1;
  }
  if (itemGrade === 't3_1340' && refineTarget === 18) {
    additionalProb += 0.05;
    costReduction = 0.3;
    goldReduction = 1;
  }

  if (applyResearch) {
    if (itemGrade === 't3_1302' && refineTarget <= 15) {
      additionalProb += 0.1;
    }
    if (itemGrade === 't3_1340' && refineTarget <= 15) {
      additionalProb += 0.1;
    }
    if (itemGrade === 't3_1340' && refineTarget >= 16 && refineTarget <= 18) {
      additionalProb += 0.05;
    }
  }

  additionalProb = Math.round(additionalProb * 100) / 100;

  return {
    additionalProb,
    amount: Object.fromEntries(
      Object.entries(data.amount).map(([name, value]) => [
        name,
        name === '골드'
          ? Math.round(value * (1 - goldReduction))
          : Math.round(value * (1 - costReduction)),
      ])
    ),
    baseProb: data.baseProb,
    breath: data.breath,
  };
}
