import { SearchOption } from './type';
declare const getSearchString: any;

export function getSearchScript(
  toSearch: Record<string, number>[],
  accMap: Record<string, SearchOption>
) {
  return getSearchString(toSearch, accMap);
}
