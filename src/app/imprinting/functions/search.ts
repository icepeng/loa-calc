import {
  categoryMap,
  dealOptionMap,
  gradeMap,
  imprintOptionMap,
} from './const';
import { AccMap, SearchGrade } from './type';
import { getOverlappingAcc } from './util';

export function getSearchScript(
  imprints: Record<string, number>[],
  accTypes: string[],
  accMap: Record<string, AccMap>,
  searchGrade: SearchGrade,
  dedupe: boolean
) {
  const overlappingAcc = dedupe
    ? getOverlappingAcc(accMap)
    : {
        귀걸이: false,
        반지: false,
      };
  const accTypesToSearch = accTypes.filter((acc) => {
    if (acc === '귀걸이2' && overlappingAcc.귀걸이) {
      return false;
    }
    if (acc === '반지2' && overlappingAcc.반지) {
      return false;
    }
    return true;
  });
  return `const category = ${JSON.stringify(categoryMap)};
    const grade = ${JSON.stringify(gradeMap)};
    const dealOption = ${JSON.stringify(dealOptionMap)};
    const imprintOption = ${JSON.stringify(imprintOptionMap)};

    const internalDataMap = new Map();
    
    function parse(document, index) {
      const row = document.querySelector(
        \`#auctionListTbody > tr:nth-child(\${index})\`
      );
      if (!row) {
        return;
      }
    
      const grade = parseInt(row.querySelector('td:nth-child(1) > div.grade').getAttribute('data-grade'), 10);
      const id = row.querySelector('td:nth-child(7) > button').getAttribute('data-productid');
      const name = row
        .querySelector(\`td:nth-child(1) > div.grade > span.name\`)
        .innerText.trim();
      const tradeLeftStr = row
        .querySelector(\`td:nth-child(1) > div.grade > span.count\`)
        .innerText.trim();
      const tradeLeft = tradeLeftStr === "[구매 후 거래 불가]" ? 0 : parseInt(tradeLeftStr.split("거래 ")[1].split("회")[0], 10)
      const effects = row
          .querySelector(\`td:nth-child(1) > div.effect\`)
          .innerText.trim()
          .split("\\n")
          .map((str) => str.trim())
          .filter((str) => !!str)
          .map((str) => {
            const fragments = str.split("[")
            return [
              fragments[fragments.length - 1].split("]")[0],
              parseInt(str.split("+")[1], 10),
            ]
          });
      const quality = parseInt(
        row.querySelector(\`td:nth-child(3) > div > span.txt\`).innerText.trim(),
        10
      );
      const buyPrice = parseFloat(
        row
          .querySelector(\`td:nth-child(6) > div > em\`)
          .innerText.trim()
          .replace(/,/g, "")
      )
      const auctionPrice = parseFloat(
        row
          .querySelector(\`td:nth-child(5) > div > em\`)
          .innerText.trim()
          .replace(/,/g, "")
      );
      const price = buyPrice || auctionPrice;

      const historyBtn = row.querySelector('div.grade > .button--deal-history');
      const internalData = {...historyBtn.dataset};
      if (internalData) {
        internalDataMap.set(id, internalData);
      }
    
      return {
        isFixed: false,
        name,
        id,
        grade,
        tradeLeft,
        effects,
        quality,
        price,
        buyPrice,
        auctionPrice
      };
    }
    
    async function search(form, pageNo) {
      const body = new URLSearchParams();
    
      body.append("request[firstCategory]", 200000);
      body.append("request[secondCategory]", form.category);
      body.append("request[itemTier]", 3);
      body.append("request[itemGrade]", form.grade ?? "");
      body.append("request[itemLevelMin]", 0);
      body.append("request[itemLevelMax]", 1700);
      body.append("request[gradeQuality]", form.quality);
      body.append("request[etcOptionList][0][firstOption]", 2);
      body.append(
        "request[etcOptionList][0][secondOption]",
        form.dealOption1?.type ?? ""
      );
      body.append(
        "request[etcOptionList][0][minValue]",
        form.dealOption1?.min ?? ""
      );
      body.append("request[etcOptionList][0][maxValue]", "");
      body.append("request[etcOptionList][1][firstOption]", 2);
      body.append(
        "request[etcOptionList][1][secondOption]",
        form.dealOption2?.type ?? ""
      );
      body.append(
        "request[etcOptionList][1][minValue]",
        form.dealOption2?.min ?? ""
      );
      body.append("request[etcOptionList][1][maxValue]", "");
      body.append("request[etcOptionList][2][firstOption]", 3);
      body.append(
        "request[etcOptionList][2][secondOption]",
        form.imprintOption1?.type ?? ""
      );
      body.append(
        "request[etcOptionList][2][minValue]",
        form.imprintOption1?.min ?? ""
      );
      body.append("request[etcOptionList][2][maxValue]", "");
      body.append("request[etcOptionList][3][firstOption]", 3);
      body.append(
        "request[etcOptionList][3][secondOption]",
        form.imprintOption2?.type ?? ""
      );
      body.append(
        "request[etcOptionList][3][minValue]",
        form.imprintOption2?.min ?? ""
      );
      body.append("request[etcOptionList][3][maxValue]", "");
      body.append("request[pageNo]", pageNo);
      body.append("request[sortOption][Sort]", "BUY_PRICE");
      body.append("request[sortOption][IsDesc]", false);
    
      return fetch("https://lostark.game.onstove.com/Auction", {
        headers: {
          "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        },
        body: body,
        method: "POST",
      })
        .then((res) => {
          if (res.status === 500) {
            throw new Error('ERR_INTERNAL_SERVER');
          }
          return res.text();
        })
        .then((html) => {
          if (html.includes('서비스 점검 중입니다.')) {
            throw new Error('ERR_MAINTENANCE');
          }
          const parser = new DOMParser();
          return parser.parseFromString(html, "text/html");
        })
        .then((document) => {
          if (document.querySelector("#idLogin")) {
            throw new Error('ERR_NO_LOGIN');
          }
          if (document.querySelector("#auctionListTbody > tr.empty")) {
              if (document.querySelector("#auctionListTbody > tr.empty").innerText.trim() === "경매장 연속 검색으로 인해 검색 이용이 최대 5분간 제한되었습니다.") {
                throw new Error('ERR_LIMIT_REACHED');
              }
              return {
                products: [],
                totalPages: 1,
              };
          }
          const products = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
            .map((index) => parse(document, index))
            .filter((x) => !!x);
          
          const lastPageFn = document.querySelector("a.pagination__last").getAttribute("onclick");
          const totalPages = lastPageFn ? parseInt(lastPageFn.split(".page(")[1].split(");")[0], 10) : 1;

          return {
            products,
            totalPages,
          }
        });
    }

    async function trySearch(form, pageNo) {
      let searchResult;
      let failCount = 0;
      while (true) {
        try {
          searchResult = await search(form, pageNo);
          return searchResult;
        } catch (err) {
          failCount += 1;
          if (failCount > 5) {
              throw new Error('경매장 검색에 5회 연속 실패했습니다. 스크립트를 종료합니다.')
          }
          if (err.message === 'ERR_LIMIT_REACHED') {
              console.log('경매장 검색 횟수 제한을 초과했습니다. 5분 후에 자동으로 재시도합니다.');
              await new Promise(resolve => setTimeout(resolve, 60000 * 5 + 1000));
              continue;
          }
          if (err.message === 'ERR_INTERNAL_SERVER') {
            console.log('경매장 검색 서버에 오류가 발생했습니다. 30초 후에 자동으로 재시도합니다.');
            await new Promise(resolve => setTimeout(resolve, 30000));
            continue;
          }
          if (err.message === 'ERR_MAINTENANCE') {
            console.log('경매장 서비스 점검 중입니다. 스크립트를 종료합니다.');
            throw err;
          }
          if (err.message === 'ERR_NO_LOGIN') {
            console.log('로그인이 필요합니다. 스크립트를 종료합니다.');
            throw err;
          }
          console.log('식별되지 않은 오류가 발생했습니다. 스크립트를 종료합니다.');
          throw err;
        }
      }
    }
    
    const SEARCH_DELAY = 6.2
    async function getSearchResult(imprints, accTypes, accMap, overlapping, searchGrade) {
      const result = [];
      const total = imprints.length * accTypes.length;
      let count = 0;
      for (const imprint of imprints) {
        for (const accType of accTypes) {
          count += 1;
          const estimated = new Date();
          estimated.setSeconds(estimated.getSeconds() + (total - count) * SEARCH_DELAY);
          console.log(\`검색 진행중 - \${count} / \${total}\n예상 완료 시각: \${estimated.toLocaleTimeString()}\`)
          const [[type1, min1], [type2, min2]] = Object.entries(imprint);
          const acc = accMap[accType];
          const form = {
            category: category[acc.category],
            grade: grade[searchGrade],
            quality: acc.quality,
            dealOption1: acc.dealOption1 && {
                type: dealOption[acc.dealOption1[0]],
                min: acc.dealOption1[1],
            },
            dealOption2: acc.dealOption2 && {
                type: dealOption[acc.dealOption2[0]],
                min: acc.dealOption2[1],
            },
            imprintOption1: {
                type: imprintOption[type1],
                min: min1,
            },
            imprintOption2: {
                type: imprintOption[type2],
                min: min2,
            },
          };
          const { products, totalPages } = await trySearch(form, 1);
          const productsAll = [...products];
          if (products.filter(product => product.buyPrice).length <= 3 && totalPages > 1) {
            console.log("1페이지에 충분한 매물이 발견되지 않아 추가 검색을 진행합니다.")
            await new Promise(resolve => setTimeout(resolve, SEARCH_DELAY * 1000));
            const { products: products5p } = await trySearch(form, Math.max(Math.floor(totalPages / 20), 2));
            productsAll.push(...products5p);
          }
          result.push([
            \`\${type1}_\${min1}_\${type2}_\${min2}_\${accType}\`,
            productsAll,
          ]);
          if (accType === "귀걸이1" && overlapping.귀걸이) {
            result.push([
              \`\${type1}_\${min1}_\${type2}_\${min2}_귀걸이2\`,
              productsAll,
            ]);
          }
          if (accType === "반지1" && overlapping.반지) {
            result.push([
              \`\${type1}_\${min1}_\${type2}_\${min2}_반지2\`,
              productsAll,
            ]);
          }
          await new Promise(resolve => setTimeout(resolve, SEARCH_DELAY * 1000));
        }
      }
      return Object.fromEntries(result);
    }

    let result;
    function copyResult() {
      navigator.clipboard.writeText(JSON.stringify(result, null, 2))
        .then(() => {
          alert('검색 결과가 복사되었습니다.');
        })
        .catch(() => {
          alert('검색 결과 복사에 실패했습니다. txt 파일 다운로드로 재시도합니다.');
          downloadResult();
        });
    }

    function downloadResult() {
      const el = document.createElement('a');
      el.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(JSON.stringify(result, null, 2)));
      el.setAttribute('download', 'imprinting.txt');
      el.click();
    }

    const btn = document.getElementById('copyBtn');
    if (btn) {
      btn.remove();
    }
    getSearchResult(${JSON.stringify(imprints)}, ${JSON.stringify(
    accTypesToSearch
  )}, ${JSON.stringify(accMap)}, ${JSON.stringify(
    overlappingAcc
  )}, "${searchGrade}").then(res => {
    result = res;
    console.log(res);
    const el = document.createElement('button');
    el.id = 'copyBtn';
    el.style = 'width: 100%; height: 64px; text-align: center';
    el.innerText = '검색 결과 복사';
    el.onclick = copyResult;
    document.body.prepend(el);
  });  
  `;
}
