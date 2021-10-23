/// <reference lib="webworker" />

import { compose } from './functions/compose';

addEventListener('message', ({ data }) => {
  const response = compose(
    data.combinations,
    data.initialEffect,
    data.searchResult,
    data.fixedItems,
    data.filter
  );
  postMessage(response);
});
