/// <reference lib="webworker" />

import { compose } from './functions/compose';

addEventListener('message', ({ data }) => {
  const response = compose(
    data.searchResult,
    data.tripods,
    data.selectedCategories,
    data.filter
  );
  postMessage(response);
});
