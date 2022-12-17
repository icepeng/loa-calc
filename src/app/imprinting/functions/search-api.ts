import {
  Auction,
  AuctionItem,
  getSDK,
  ItemOption,
  RequestAuctionItems,
} from '@mokoko/sdk';
import {
  categoryMap,
  dealOptionMap,
  gradeMap,
  imprintOptionMap,
} from './const';
import { AccMap, SearchGrade } from './type';
import { getOverlappingAcc } from './util';

export function getSearchClient(apiKey: string) {
  const sdk = getSDK({
    fetchFn: fetch,
    apiKey,
  });

  function hashItemOptions(options: ItemOption[]) {
    return options
      .map((option) => `${option.OptionName}-${option.Value}`)
      .join('_');
  }

  function hashItem(item: AuctionItem) {
    return [
      item.Name,
      hashItemOptions(item.Options ?? []),
      item.AuctionInfo?.BidStartPrice,
      item.AuctionInfo?.BuyPrice,
      item.AuctionInfo?.TradeAllowCount,
      item.AuctionInfo?.EndDate,
    ].join('_');
  }

  function parse(item: AuctionItem) {
    const grade = gradeMap[item.Grade!];
    const id = hashItem(item);
    const name = item.Name;
    const tradeLeft = item.AuctionInfo!.TradeAllowCount;
    const effects = item.Options!.map((option) => [
      option.OptionName,
      option.Value,
    ]);
    const quality = item.GradeQuality;
    const buyPrice = item.AuctionInfo!.BuyPrice;
    const auctionPrice = item.AuctionInfo!.BidStartPrice;
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

  async function search(form: RequestAuctionItems) {
    return sdk.auctionsGetItems(form).then((res: Auction) => {
      if (res.Items == null) {
        return {
          products: [],
          totalPages: 1,
        };
      }

      const products = res.Items.map((item) => parse(item));
      const totalPages = Math.ceil(res.TotalCount! / 10);

      return {
        products,
        totalPages,
      };
    });
  }

  async function getSearchResult(
    imprints: Record<string, number>[],
    accTypes: string[],
    accMap: Record<string, AccMap>,
    searchGrade: SearchGrade,
    dedupe: boolean,
    onProgress?: (progress: { total: number; finished: number }) => void
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

    const result = [];
    const total = imprints.length * accTypesToSearch.length;
    let finished = 0;
    for (const imprint of imprints) {
      for (const accType of accTypesToSearch) {
        const [[type1, min1], [type2, min2]] = Object.entries(imprint);
        const acc = accMap[accType];
        const form: RequestAuctionItems = {
          CategoryCode: categoryMap[acc.category],
          Sort: 'BUY_PRICE',
          SortCondition: 'ASC',
          ItemTier: 3,
          ItemGrade: searchGrade === '전체' ? undefined : searchGrade,
          ItemGradeQuality: acc.quality,
          EtcOptions: [
            {
              FirstOption: 2,
              SecondOption:
                (acc.dealOption1 && dealOptionMap[acc.dealOption1[0]]) ?? '',
              MinValue: acc.dealOption1?.[1] ?? 0,
            },
            {
              FirstOption: 2,
              SecondOption:
                (acc.dealOption2 && dealOptionMap[acc.dealOption2[0]]) ?? '',
              MinValue: acc.dealOption2?.[1] ?? 0,
            },
            {
              FirstOption: 3,
              SecondOption: imprintOptionMap[type1] ?? '',
              MinValue: min1 ?? 0,
            },
            {
              FirstOption: 3,
              SecondOption: imprintOptionMap[type2] ?? '',
              MinValue: min2 ?? 0,
            },
          ],
          PageNo: 1,
        };

        const { products, totalPages } = await search(form);
        const productsAll = [...products];

        if (
          products.filter((product) => product.buyPrice).length <= 3 &&
          totalPages > 1
        ) {
          const { products: products5p } = await search({
            ...form,
            PageNo: Math.max(Math.floor(totalPages / 20), 2),
          });
          productsAll.push(...products5p);
        }

        result.push([
          `${type1}_${min1}_${type2}_${min2}_${accType}`,
          productsAll,
        ]);

        if (accType === '귀걸이1' && overlappingAcc.귀걸이) {
          result.push([
            `${type1}_${min1}_${type2}_${min2}_귀걸이2`,
            productsAll,
          ]);
        }
        if (accType === '반지1' && overlappingAcc.반지) {
          result.push([`${type1}_${min1}_${type2}_${min2}_반지2`, productsAll]);
        }

        finished += 1;
        onProgress?.({ total, finished });
      }
    }
    return Object.fromEntries(result);
  }

  return {
    getSearchResult,
  };
}

export type SearchClient = ReturnType<typeof getSearchClient>;
