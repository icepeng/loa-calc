/// <reference lib="webworker" />

import { compose } from './functions/compose';

addEventListener('message', ({ data }) => {
  compose(data.candidates, data.searchResult, data.fixedItems, data.filter);
});
