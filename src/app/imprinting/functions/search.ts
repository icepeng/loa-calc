import { AccMap, Item, SearchGrade } from './type';
import { getOverlappingAcc } from './util';

export function getSearchScript(
  imprints: Record<string, number>[],
  accTypes: string[],
  accMap: Record<string, AccMap>,
  searchGrade: SearchGrade
) {
  const overlappingAcc = getOverlappingAcc(accMap);
  const accTypesToSearch = accTypes.filter((acc) => {
    if (acc === '귀걸이2' && overlappingAcc.귀걸이) {
      return false;
    }
    if (acc === '반지2' && overlappingAcc.반지) {
      return false;
    }
    return true;
  });
  return `const category = {
      목걸이: 200010,
      귀걸이: 200020,
      반지: 200030,
    };

    const grade = {
      전설: 4,
      유물: 5,
      고대: 6,
      전체: null,
    };
    
    const dealOption = {
      치명: 15,
      특화: 16,
      제압: 17,
      신속: 18,
      인내: 19,
      숙련: 20,
    };
    
    const imprintOption = {
      각성: 255,
      갈증: 286,
      강령술: 243,
      "강화 무기": 129,
      "강화 방패": 242,
      "결투의 대가": 288,
      "고독한 기사": 225,
      광기: 125,
      "광전사의 비기": 188,
      구슬동자: 134,
      "굳은 의지": 123,
      "극의: 체술": 190,
      "급소 타격": 142,
      "기습의 대가": 249,
      긴급구조: 302,
      "넘치는 교감": 199,
      "달의 소리": 287,
      "달인의 저력": 238,
      돌격대장: 254,
      "두 번째 동료": 258,
      "마나 효율 증가": 168,
      "마나의 흐름": 251,
      "멈출 수 없는 충동": 281,
      바리케이드: 253,
      버스트: 279,
      "번개의 분노": 246,
      "부러진 뼈": 245,
      "분노의 망치": 196,
      "분쇄의 주먹": 236,
      불굴: 235,
      "사냥의 시간": 290,
      "상급 소환사": 198,
      선수필승: 244,
      세맥타통: 256,
      속전속결: 300,
      "슈퍼 차지": 121,
      승부사: 248,
      "시선 집중": 298,
      "실드 관통": 237,
      심판자: 282,
      아드레날린: 299,
      "아르데타인의 기술": 284,
      "안정된 상태": 111,
      "약자 무시": 107,
      "에테르 포식자": 110,
      "여신의 가호": 239,
      역천지체: 257,
      "예리한 둔기": 141,
      "오의 강화": 127,
      오의난무: 292,
      "완벽한 억제": 280,
      원한: 118,
      "위기 모면": 140,
      일격필살: 291,
      "잔재된 기운": 278,
      "저주받은 인형": 247,
      전문의: 301,
      "전투 태세": 224,
      "절실한 구원": 195,
      절정: 276,
      절제: 277,
      점화: 293,
      "정기 흡수": 109,
      "정밀 단도": 303,
      "죽음의 습격": 259,
      "중갑 착용": 240,
      "중력 수련": 197,
      "진실된 용맹": 194,
      "진화의 유산": 285,
      "질량 증가": 295,
      초심: 189,
      "최대 마나 증가": 167,
      추진력: 296,
      "축복의 오라": 283,
      "충격 단련": 191,
      "타격의 대가": 297,
      "탈출의 명수": 202,
      "포격 강화": 193,
      "폭발물 전문가": 241,
      피스메이커: 289,
      핸드거너: 192,
      "화력 강화": 130,
      환류: 294,
      "황제의 칙령": 201,
      "황후의 은총": 200,
    };
    
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
          .map((str) => [
            str.split("[")[1].split("]")[0],
            parseInt(str.split("+")[1], 10),
          ]);
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
        auctionPrice,
      };
    }
    
    async function search(form) {
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
      body.append("request[pageNo]", 1);
      body.append("request[sortOption][Sort]", "BUY_PRICE");
      body.append("request[sortOption][IsDesc]", false);
    
      return fetch("https://lostark.game.onstove.com/Auction/GetAuctionListV2", {
        headers: {
          "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        },
        body: body,
        method: "POST",
      })
        .then((res) => res.text())
        .then((html) => {
          const parser = new DOMParser();
          return parser.parseFromString(html, "text/html");
        })
        .then((document) => {
          if (document.querySelector("#idLogin")) {
            console.log('로그인이 필요합니다. 스크립트를 종료합니다.');
            throw new Error('ERR_NO_LOGIN');
          }
          if (document.querySelector("#auctionListTbody > tr.empty")) {
              if (document.querySelector("#auctionListTbody > tr.empty").innerText.trim() === "경매장 연속 검색으로 인해 검색 이용이 최대 5분간 제한되었습니다.") {
                return 'ERR_LIMIT_REACHED';
              }
              return [];
          }
          return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
            .map((index) => parse(document, index))
            .filter((x) => !!x)
        });
    }
    
    async function getSearchResult(imprints, accTypes, accMap, overlapping, searchGrade) {
      const result = [];
      const total = imprints.length * accTypes.length;
      let count = 0;
      for (const imprint of imprints) {
        for (const accType of accTypes) {
          count += 1;
          const estimated = new Date();
          estimated.setSeconds(estimated.getSeconds() + (total - count) * 3.2);
          console.log(\`검색 진행중 - \${count} / \${total}\n예상 완료 시각: \${estimated.toLocaleTimeString()}\`)
          const [[type1, min1], [type2, min2]] = Object.entries(imprint);
          const acc = accMap[accType];
          
          let searchResult;
          let failCount = 0;
          while (true) {
            searchResult = await search({
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
            });
            if (searchResult === 'ERR_LIMIT_REACHED') {
                failCount += 1;
                if (failCount > 5) {
                    throw new Error('경매장 검색에 5회 연속 실패했습니다. 스크립트를 종료합니다.')
                }
                console.log('경매장 검색 횟수 제한을 초과했습니다. 5분 후에 자동으로 재시도합니다.');
                await new Promise(resolve => setTimeout(resolve, 60000 * 5 + 1000));
            } else {
                break;
            }
          }
          result.push([
            \`\${type1}_\${min1}_\${type2}_\${min2}_\${accType}\`,
            searchResult,
          ]);
          if (accType === "귀걸이1" && overlapping.귀걸이) {
            result.push([
              \`\${type1}_\${min1}_\${type2}_\${min2}_귀걸이2\`,
              searchResult,
            ]);
          }
          if (accType === "반지1" && overlapping.반지) {
            result.push([
              \`\${type1}_\${min1}_\${type2}_\${min2}_반지2\`,
              searchResult,
            ]);
          }
          await new Promise(resolve => setTimeout(resolve, 3200));
        }
      }
      return Object.fromEntries(result);
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

export function getBuyScript(item: Item) {
  return `(() => {
  var auctionProductId = ${item.id};
  var _Contents = "";
  var loader;
  
  $.when(
    $.ajax({
      url: '/Auction/GetAuctionProductBuyInfo',
      method: 'GET',
      data: {
        auctionProductId: auctionProductId,
        worldNo: _representCharacterWorldNo,
        pcName: _representCharacterPcName,
      },
      dataType: 'html',
      beforeSend: function (xhr) {
        loader = new lui.utils.Loader();
      },
      success: function (data) {
        if (!jsonResultCommonCheck(data)) {
          return false;
        }
  
        var json = {
          value: {},
        };
        if (IsJsonString(data, json)) {
          data = json.value;
          if (data.code != 0) {
            commonModalHandler(data.message);
            if (data.code == 10) {
              getSearchAjax();
            }
  
            return false;
          }
        }
  
        _Contents = data;
      },
      error: function (xhr, status, error) {
        ajaxErrorHandler(xhr, status, error);
        return;
      },
      complete: function () {
        loader.remove(); // 로더 제거
      },
    }),
  ).done(function () {
    if (_Contents == '') {
      return false;
    }
  
    var button = $(this);
    button.attr('aria-expanded', 'true');
  
    _bidModal = new lui.utils.Modal({
      id: 'modal-deal-buy',
      class: 'buy',
      isShowModal: true,
      isShowClose: true,
      title: '입찰/구매하기',
      content: _Contents,
      cbInit: function (e) {},
      cbHideCompleted: function () {
        _bidModal.remove();
        getSearchAjax();
      },
    });
  });
})();
/*
구매할 캐릭터가 올바르게 선택되었는지 꼭 확인해주세요
구매할 캐릭터가 올바르게 선택되었는지 꼭 확인해주세요
구매할 캐릭터가 올바르게 선택되었는지 꼭 확인해주세요
구매할 캐릭터가 올바르게 선택되었는지 꼭 확인해주세요
구매할 캐릭터가 올바르게 선택되었는지 꼭 확인해주세요
구매할 캐릭터가 올바르게 선택되었는지 꼭 확인해주세요
구매할 캐릭터가 올바르게 선택되었는지 꼭 확인해주세요
구매할 캐릭터가 올바르게 선택되었는지 꼭 확인해주세요
구매할 캐릭터가 올바르게 선택되었는지 꼭 확인해주세요
*/
  `;
}
