import { TripodValue } from './type';

export function getSearchScript(classCode: number, tripods: TripodValue[][]) {
  return `
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
          .map((str) => ({
            skill: str.split("[")[1].split("]")[0],
            tripod: str.split("]")[1].split("Lv")[0].trim(),
            level: parseInt(str.split("+")[1], 10),
          }))
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
    
      return {
        name,
        id,
        grade,
        effects,
        tradeLeft,
        buyPrice,
        auctionPrice,
      };
    }
    
    async function search(form, pageNo) {
      const body = new URLSearchParams();
    
      body.append("request[firstCategory]", 10000);
      body.append("request[secondCategory]", 0);
      body.append("request[classNo]", form.classNo);
      body.append("request[itemTier]", "");
      body.append("request[itemGrade]", "");
      body.append("request[itemLevelMin]", 0);
      body.append("request[itemLevelMax]", 1700);
      body.append("request[itemName]", "");
      body.append("request[gradeQuality]", "");
      body.append("request[skillOptionList][0][firstOption]", form.skillOptionList[0].skill);
      body.append("request[skillOptionList][0][secondOption]", form.skillOptionList[0].tripod);
      body.append("request[skillOptionList][0][minValue]", form.skillOptionList[0].level);
      body.append("request[skillOptionList][0][maxValue]", "");
      body.append("request[skillOptionList][1][firstOption]", form.skillOptionList[1]?.skill ?? "");
      body.append("request[skillOptionList][1][secondOption]", form.skillOptionList[1]?.tripod ?? "");
      body.append("request[skillOptionList][1][minValue]", form.skillOptionList[1]?.level ?? "");
      body.append("request[skillOptionList][1][maxValue]", "");
      body.append("request[skillOptionList][2][firstOption]", "");
      body.append("request[skillOptionList][2][secondOption]", "");
      body.append("request[skillOptionList][2][minValue]", "");
      body.append("request[skillOptionList][2][maxValue]", "");
      body.append("request[etcOptionList][0][firstOption]", "");
      body.append("request[etcOptionList][0][secondOption]", "");
      body.append("request[etcOptionList][0][minValue]", "");
      body.append("request[etcOptionList][0][maxValue]", "");
      body.append("request[etcOptionList][1][firstOption]", "");
      body.append("request[etcOptionList][1][secondOption]", "");
      body.append("request[etcOptionList][1][minValue]", "");
      body.append("request[etcOptionList][1][maxValue]", "");
      body.append("request[etcOptionList][2][firstOption]", "");
      body.append("request[etcOptionList][2][secondOption]", "");
      body.append("request[etcOptionList][2][minValue]", "");
      body.append("request[etcOptionList][2][maxValue]", "");
      body.append("request[etcOptionList][3][firstOption]", "");
      body.append("request[etcOptionList][3][secondOption]", "");
      body.append("request[etcOptionList][3][minValue]", "");
      body.append("request[etcOptionList][3][maxValue]", "");
      body.append("request[pageNo]", pageNo);
      body.append("request[sortOption][Sort]", "BUY_PRICE");
      body.append("request[sortOption][IsDesc]", false);
    
      return fetch("https://lostark.game.onstove.com/Auction/GetAuctionListV2", {
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
      let failCount = 0;
      while (true) {
        try {
          const result = await search(form, pageNo);
          return result;
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
    async function getSearchResult(classCode, tripods) {
      const result = [];
      const total = tripods.length;
      let count = 0;
      for (const tripod of tripods) {
          count += 1;
          const estimated = new Date();
          estimated.setSeconds(estimated.getSeconds() + (total - count) * SEARCH_DELAY);
          console.log(\`검색 진행중 - \${count} / \${total}\n예상 완료 시각: \${estimated.toLocaleTimeString()}\`)
          
          const { products, totalPages } = await trySearch({
            classNo: classCode,
            skillOptionList: tripod
          }, 1);

          if (products.filter(product => product.buyPrice).length <= 3 && totalPages > 1) {
            console.log("1페이지에 충분한 매물이 발견되지 않아 추가 검색을 진행합니다.")
            await new Promise(resolve => setTimeout(resolve, SEARCH_DELAY * 1000));
            const { products: products5p } = await trySearch({
              classNo: classCode,
              skillOptionList: tripod
            }, Math.max(Math.floor(totalPages / 20), 2));
            
            result.push({
              tripod,
              products: [...products, ...products5p],
            });
          } else {
            result.push({
              tripod,
              products,
            });
          }
          await new Promise(resolve => setTimeout(resolve, SEARCH_DELAY * 1000));
      }
      return result;
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
    getSearchResult(${classCode}, ${JSON.stringify(tripods)}).then(res => {
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
