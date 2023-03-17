import * as JSZip from 'jszip';

interface FetchInitialDataPayload {
  action: 'fetch';
  payload: {
    adviceCounting: any;
    curveRankRecord: any;
    curveProbRecord: any;
    preIndexedCurveRank: any;
  };
}

const modelFileNames = {
  adviceCounting: 'advice_counting.bin',
  curveRankRecord: {
    12: 'curve_rank_12.bin',
    13: 'curve_rank_13.bin',
    14: 'curve_rank_14.bin',
    15: 'curve_rank_15.bin',
  },
  curveProbRecord: {
    12: 'curve_prob_12.bin',
    13: 'curve_prob_13.bin',
    14: 'curve_prob_14.bin',
    15: 'curve_prob_15.bin',
  },
} as const;

async function decodeAdviceCountingFromZip(
  zip: JSZip
): Promise<number[][][][]> {
  const file = zip.file(modelFileNames.adviceCounting);
  if (!file) {
    throw new Error(`${modelFileNames.adviceCounting} file not found in zip`);
  }

  const buffer = await file.async('arraybuffer');

  const view = new DataView(buffer);

  const length = view.byteLength / 4;

  const array: number[][][][] = [];
  for (let i = 0; i < 11; i++) {
    array[i] = [];
    for (let j = 0; j < 11; j++) {
      array[i][j] = [];
      for (let k = 0; k < 14; k++) {
        array[i][j][k] = new Array(279);
      }
    }
  }

  return new Promise((resolve) => {
    let index = 0;
    let i = 0,
      j = 0,
      k = 0,
      l = 0;
    const step = () => {
      const start = performance.now();
      while (index < length) {
        i = Math.floor(index / (11 * 14 * 279));
        j = Math.floor((index % (11 * 14 * 279)) / (14 * 279));
        k = Math.floor((index % (14 * 279)) / 279);
        l = index % 279;
        array[i][j][k][l] = view.getFloat32(index * 4, true);
        index++;
        if (performance.now() - start > 16) {
          requestAnimationFrame(step);
          return;
        }
      }
      resolve(array);
    };
    requestAnimationFrame(step);
  });
}

export async function decodeCurveRankFromZip(
  zip: JSZip,
  filename: string,
  level1Length: number
): Promise<number[][]> {
  const file = zip.file(filename);
  if (!file) {
    throw new Error(`${filename} file not found in zip`);
  }

  const buffer = await file.async('arraybuffer');
  const view = new DataView(buffer);
  const length = view.byteLength / 4;
  const level2Length = length / level1Length;

  const array: number[][] = [];
  for (let i = 0; i < level2Length; i++) {
    array[i] = new Array(level1Length);
  }

  return new Promise((resolve) => {
    let index = 0;
    let i = 0,
      j = 0;
    const step = () => {
      const start = performance.now();
      while (index < length) {
        let count = 0;
        i = Math.floor(index / level1Length);
        j = Math.floor(index % level1Length);
        array[i][j] = view.getFloat32(index * 4, true);
        index++;
        count++;
        if (count > 300 && performance.now() - start > 16) {
          requestAnimationFrame(step);
          return;
        }
      }
      resolve(array);
    };
    requestAnimationFrame(step);
  });
}

export async function decodeCurveProbFromZip(
  zip: JSZip,
  filename: string
): Promise<number[]> {
  const file = zip.file(filename);
  if (!file) {
    throw new Error(`${filename} file not found in zip`);
  }

  const buffer = await file.async('arraybuffer');
  const view = new DataView(buffer);
  const length = view.byteLength / 4;

  const array: number[] = [];

  return new Promise((resolve) => {
    let index = 0,
      count = 0;
    const step = () => {
      const start = performance.now();
      while (index < length) {
        array[index] = view.getFloat32(index * 4, true);
        index++;
        if (performance.now() - start > 16) {
          requestAnimationFrame(step);
          return;
        }
      }
      resolve(array);
    };
    requestAnimationFrame(step);
  });
}

export function fetchModel() {
  console.time('fetchInitialData');
  return fetch('assets/elixir_53_44_01_mini2_bin.zip')
    .then((res) => res.blob())
    .then(async (compressed) => {
      console.timeEnd('fetchInitialData');

      console.time('unzip');
      const zip = new JSZip();
      await zip.loadAsync(compressed);
      console.timeEnd('unzip');

      console.time('adviceCounting');
      const adviceCounting = await decodeAdviceCountingFromZip(zip);
      console.timeEnd('adviceCounting');

      console.time('curveRank12');
      const curveRank12 = await decodeCurveRankFromZip(
        zip,
        modelFileNames.curveRankRecord[12],
        12 - 1
      );
      console.timeEnd('curveRank12');

      console.time('curveRank13');
      const curveRank13 = await decodeCurveRankFromZip(
        zip,
        modelFileNames.curveRankRecord[13],
        13 - 1
      );
      console.timeEnd('curveRank13');

      console.time('curveRank14');
      const curveRank14 = await decodeCurveRankFromZip(
        zip,
        modelFileNames.curveRankRecord[14],
        14 - 1
      );
      console.timeEnd('curveRank14');

      console.time('curveRank15');
      const curveRank15 = await decodeCurveRankFromZip(
        zip,
        modelFileNames.curveRankRecord[15],
        15 - 1
      );
      console.timeEnd('curveRank15');

      console.time('curveProb12');
      const curveProb12 = await decodeCurveProbFromZip(
        zip,
        modelFileNames.curveProbRecord[12]
      );
      console.timeEnd('curveProb12');

      console.time('curveProb13');
      const curveProb13 = await decodeCurveProbFromZip(
        zip,
        modelFileNames.curveProbRecord[13]
      );
      console.timeEnd('curveProb13');

      console.time('curveProb14');
      const curveProb14 = await decodeCurveProbFromZip(
        zip,
        modelFileNames.curveProbRecord[14]
      );
      console.timeEnd('curveProb14');

      console.time('curveProb15');
      const curveProb15 = await decodeCurveProbFromZip(
        zip,
        modelFileNames.curveProbRecord[15]
      );
      console.timeEnd('curveProb15');

      return {
        adviceCounting,
        curveRankRecord: {
          12: curveRank12,
          13: curveRank13,
          14: curveRank14,
          15: curveRank15,
        },
        curveProbRecord: {
          12: curveProb12,
          13: curveProb13,
          14: curveProb14,
          15: curveProb15,
        },
      };
    });
}
