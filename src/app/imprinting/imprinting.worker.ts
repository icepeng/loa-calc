/// <reference lib="webworker" />

import { compose } from './functions/compose';

addEventListener('message', ({ data }) => {
  compose(
    data.combinations,
    data.initialEffect,
    data.searchResult,
    data.fixedItems,
    data.filter
  );
});
