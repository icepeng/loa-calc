import { SearchOption } from './type';

export async function getSearchScript(
  toSearch: Record<string, number>[],
  accMap: Record<string, SearchOption>
) {
  if(!(globalThis as any).searchScript) {
    await fetch('assets/js/searchScript.js').then(res => res.text()).then(scr => {
      const script = document.createElement('script');
      document.body.appendChild(script);
      script.innerHTML = scr;
    });
  }
  const searchScriptRegex = /^function.+?\{(.*)\}$/gis.exec(((globalThis as any).searchScript as Function).toString());
  if (!searchScriptRegex || searchScriptRegex.length < 2) {
    throw new Error('Could not find search function');
  }

  return `${searchScriptRegex[1]}

  getSearchResult(
    ${JSON.stringify(toSearch)},
    ${JSON.stringify(accMap)}
  ).then(res => console.log(res));
  `;
}
