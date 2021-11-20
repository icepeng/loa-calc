export interface SearchResult {
  name: string;
  priceYesterday: number;
  priceRecent: number;
  priceLowest: number;
}

export function getSearchScript() {
  return `
  function parse(document, index) {
    const row = document.querySelector(\`#tbodyItemList > tr:nth-child(\${index})\`);
    if (!row) {
      return;
    }
  
    const name = row
      .querySelector(\`td:nth-child(1) > div > span.name\`)
      .innerText.trim();
    const priceYesterday = parseFloat(
      row
        .querySelector(\`td:nth-child(2) > div > em\`)
        .innerText.trim()
        .replace(/,/g, ''),
    );
    const priceRecent = parseFloat(
      row
        .querySelector(\`td:nth-child(3) > div > em\`)
        .innerText.trim()
        .replace(/,/g, ''),
    );
    const priceLowest = parseFloat(
      row
        .querySelector(\`td:nth-child(4) > div > em\`)
        .innerText.trim()
        .replace(/,/g, ''),
    );
  
    return {
      name,
      priceYesterday,
      priceRecent,
      priceLowest,
    };
  }
  
  async function search(name, tier, page) {
    const body = new URLSearchParams();
  
    body.append('firstCategory', 50000);
    body.append('secondCategory', 0);
    body.append('characterClass', 0);
    body.append('tier', tier);
    body.append('grade', 99);
    body.append('itemName', name);
    body.append('pageNo', page);
    body.append('isInit', false);
    body.append('sortType', 7);
  
    return fetch('https://lostark.game.onstove.com/Market/List_v2', {
      headers: {
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
      },
      body: body,
      method: 'POST',
    })
      .then((res) => res.text())
      .then((html) => {
        const parser = new DOMParser();
        return parser.parseFromString(html, 'text/html');
      })
      .then((document) => {
        if (document.querySelector('#idLogin')) {
          console.log('로그인이 필요합니다. 스크립트를 종료합니다.');
          throw new Error('ERR_NO_LOGIN');
        }
        if (document.querySelector('#tbodyItemList > tr.empty')) {
          if (
            document
              .querySelector('#tbodyItemList > tr.empty')
              .innerText.trim() ===
            '경매장 연속 검색으로 인해 검색 이용이 최대 5분간 제한되었습니다.'
          ) {
            return 'ERR_LIMIT_REACHED';
          }
          return [];
        }
        return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
          .map((index) => parse(document, index))
          .filter((x) => !!x);
      });
  }
  
  async function trySearch(name, tier, page) {
    let failCount = 0;
    while (true) {
      const products = await search(name, tier, page);
      if (products === 'ERR_LIMIT_REACHED') {
        failCount += 1;
        if (failCount > 5) {
          throw new Error(
            '경매장 검색에 5회 연속 실패했습니다. 스크립트를 종료합니다.',
          );
        }
        console.log(
          '경매장 검색 횟수 제한을 초과했습니다. 5분 후에 자동으로 재시도합니다.',
        );
        await new Promise((resolve) => setTimeout(resolve, 60000 * 5 + 1000));
      } else {
        return products;
      }
    }
  }
  
  let result;
  function copyResult() {
    const el = document.createElement('textarea');
    document.body.appendChild(el);
    el.value = JSON.stringify(result, null, 2);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    alert('검색 결과가 복사되었습니다.');
  }

  const btn = document.getElementById('copyBtn');
  if (btn) {
    btn.remove();
  }
  Promise.all([trySearch('', 3, 1), trySearch('', 3, 2), trySearch('', 3, 3), trySearch('오레하 융화 재료', 0, 1)]).then((res) => {
    result = res.flat();
    console.log(result);
    const el = document.createElement('button');
    el.id = 'copyBtn';
    el.style = 'width: 100%; height: 64px; text-align: center';
    el.innerText = '검색 결과 복사';
    el.onclick = copyResult;
    document.body.prepend(el);
  });`;
}
