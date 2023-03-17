/// <reference lib="webworker" />

import * as JSZip from 'jszip';

addEventListener('message', ({ data }) => {
  dispatch(data.action, data.payload);
});

type actionType = 'fetch' | 'calculate';

const dispatch = (type: actionType, payload: any) => {
  if (type === 'fetch') {
    fetchInitialData();
  }
};

const INITIAL_DATA_FILE_NAME = 'elixir_53_44_01_mini2';
const INITIAL_DATA_URL = `assets/${INITIAL_DATA_FILE_NAME}.zip`;

const fetchInitialData = async () => {
  let blob: Blob;
  try {
    const cacheStorage = await caches.open(INITIAL_DATA_FILE_NAME);
    const cached = await cacheStorage.match(INITIAL_DATA_URL);

    if (!cached) {
      const fetched = await fetch(INITIAL_DATA_URL);
      blob = await fetched.blob();
      cacheStorage.put(INITIAL_DATA_URL, new Response(blob, { status: 200 }));
    } else {
      blob = await cached.blob();
    }
  } catch (error) {
    // https://developer.mozilla.org/en-US/docs/Web/API/caches
    // Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.
    const fetched = await fetch(INITIAL_DATA_URL);
    blob = await fetched.blob();
  }

  Promise.resolve(blob).then(async (compressed) => {
    const zip = new JSZip();
    await zip.loadAsync(compressed);

    const adviceCounting = await zip
      .file('advice_counting.json')
      ?.async('string')
      .then(JSON.parse);
    const curveRank12 = await zip
      .file('curve_rank_12.json')
      ?.async('string')
      .then(JSON.parse);
    const curveRank13 = await zip
      .file('curve_rank_13.json')
      ?.async('string')
      .then(JSON.parse);
    const curveRank14 = await zip
      .file('curve_rank_14.json')
      ?.async('string')
      .then(JSON.parse);
    const curveRank15 = await zip
      .file('curve_rank_15.json')
      ?.async('string')
      .then(JSON.parse);
    const curveProb12 = await zip
      .file('curve_prob_12.json')
      ?.async('string')
      .then(JSON.parse);
    const curveProb13 = await zip
      .file('curve_prob_13.json')
      ?.async('string')
      .then(JSON.parse);
    const curveProb14 = await zip
      .file('curve_prob_14.json')
      ?.async('string')
      .then(JSON.parse);
    const curveProb15 = await zip
      .file('curve_prob_15.json')
      ?.async('string')
      .then(JSON.parse);

    const preIndexedCurveRank = await zip
      .file('pre_indexed_curve_rank.json')
      ?.async('string')
      .then(JSON.parse);

    postMessage({
      action: 'fetch',
      payload: {
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
        preIndexedCurveRank,
      },
    });
  });
};
