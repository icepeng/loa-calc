export interface MarketClass {
  value: number;
  text: string;
}

export interface MarketCategory {
  value: number;
  text: string;
  parent: number;
  playerClassSearch: 0 | 1;
  useLevelSearch: 0 | 1;
  itemLevelSearch: 0 | 1;
  itemGradeSearch: 0 | 1;
  itemQualitySearch: 0 | 1;
  itemTierSearch: 0 | 1;
  skillTripodOptionSearch: 0 | 1;
  skillOptionSearch: 0 | 1;
  statSearch: 0 | 1;
  abilitySearch: 0 | 1;
  marketEnabled: 0 | 1;
  auctionEnabled: 0 | 1;
}

export interface MarketSkill {
  value: number;
  class: number;
  text: string;
  isSkillGroup: boolean;
  marketMenuSkillTripodList: MarketTripod[];
}

export interface MarketTripod {
  value: number;
  text: string;
  isGem: boolean;
}

export const marketData = {
  marketCategory: [
    {
      value: 10000,
      text: '장비',
      parent: 0,
      playerClassSearch: 1,
      useLevelSearch: 0,
      itemLevelSearch: 1,
      itemGradeSearch: 1,
      itemQualitySearch: 1,
      itemTierSearch: 1,
      skillTripodOptionSearch: 1,
      skillOptionSearch: 0,
      statSearch: 0,
      abilitySearch: 0,
      marketEnabled: 0,
      auctionEnabled: 1,
    },
    {
      value: 10100,
      text: '장비 상자',
      parent: 0,
      playerClassSearch: 0,
      useLevelSearch: 0,
      itemLevelSearch: 1,
      itemGradeSearch: 1,
      itemQualitySearch: 0,
      itemTierSearch: 1,
      skillTripodOptionSearch: 0,
      skillOptionSearch: 0,
      statSearch: 0,
      abilitySearch: 0,
      marketEnabled: 1,
      auctionEnabled: 0,
    },
    {
      value: 20000,
      text: '아바타',
      parent: 0,
      playerClassSearch: 1,
      useLevelSearch: 0,
      itemLevelSearch: 0,
      itemGradeSearch: 1,
      itemQualitySearch: 0,
      itemTierSearch: 1,
      skillTripodOptionSearch: 0,
      skillOptionSearch: 0,
      statSearch: 0,
      abilitySearch: 0,
      marketEnabled: 1,
      auctionEnabled: 0,
    },
    {
      value: 20005,
      text: '무기',
      parent: 20000,
      playerClassSearch: 1,
      useLevelSearch: 0,
      itemLevelSearch: 0,
      itemGradeSearch: 1,
      itemQualitySearch: 0,
      itemTierSearch: 1,
      skillTripodOptionSearch: 0,
      skillOptionSearch: 0,
      statSearch: 0,
      abilitySearch: 0,
      marketEnabled: 1,
      auctionEnabled: 0,
    },
    {
      value: 20010,
      text: '머리',
      parent: 20000,
      playerClassSearch: 1,
      useLevelSearch: 0,
      itemLevelSearch: 0,
      itemGradeSearch: 1,
      itemQualitySearch: 0,
      itemTierSearch: 1,
      skillTripodOptionSearch: 0,
      skillOptionSearch: 0,
      statSearch: 0,
      abilitySearch: 0,
      marketEnabled: 1,
      auctionEnabled: 0,
    },
    {
      value: 20020,
      text: '얼굴1',
      parent: 20000,
      playerClassSearch: 1,
      useLevelSearch: 0,
      itemLevelSearch: 0,
      itemGradeSearch: 1,
      itemQualitySearch: 0,
      itemTierSearch: 1,
      skillTripodOptionSearch: 0,
      skillOptionSearch: 0,
      statSearch: 0,
      abilitySearch: 0,
      marketEnabled: 1,
      auctionEnabled: 0,
    },
    {
      value: 20030,
      text: '얼굴2',
      parent: 20000,
      playerClassSearch: 1,
      useLevelSearch: 0,
      itemLevelSearch: 0,
      itemGradeSearch: 1,
      itemQualitySearch: 0,
      itemTierSearch: 1,
      skillTripodOptionSearch: 0,
      skillOptionSearch: 0,
      statSearch: 0,
      abilitySearch: 0,
      marketEnabled: 1,
      auctionEnabled: 0,
    },
    {
      value: 20050,
      text: '상의',
      parent: 20000,
      playerClassSearch: 1,
      useLevelSearch: 0,
      itemLevelSearch: 0,
      itemGradeSearch: 1,
      itemQualitySearch: 0,
      itemTierSearch: 1,
      skillTripodOptionSearch: 0,
      skillOptionSearch: 0,
      statSearch: 0,
      abilitySearch: 0,
      marketEnabled: 1,
      auctionEnabled: 0,
    },
    {
      value: 20060,
      text: '하의',
      parent: 20000,
      playerClassSearch: 1,
      useLevelSearch: 0,
      itemLevelSearch: 0,
      itemGradeSearch: 1,
      itemQualitySearch: 0,
      itemTierSearch: 1,
      skillTripodOptionSearch: 0,
      skillOptionSearch: 0,
      statSearch: 0,
      abilitySearch: 0,
      marketEnabled: 1,
      auctionEnabled: 0,
    },
    {
      value: 20070,
      text: '상하의 세트',
      parent: 20000,
      playerClassSearch: 1,
      useLevelSearch: 0,
      itemLevelSearch: 0,
      itemGradeSearch: 1,
      itemQualitySearch: 0,
      itemTierSearch: 1,
      skillTripodOptionSearch: 0,
      skillOptionSearch: 0,
      statSearch: 0,
      abilitySearch: 0,
      marketEnabled: 1,
      auctionEnabled: 0,
    },
    {
      value: 21400,
      text: '악기',
      parent: 20000,
      playerClassSearch: 1,
      useLevelSearch: 0,
      itemLevelSearch: 0,
      itemGradeSearch: 1,
      itemQualitySearch: 0,
      itemTierSearch: 1,
      skillTripodOptionSearch: 0,
      skillOptionSearch: 0,
      statSearch: 0,
      abilitySearch: 0,
      marketEnabled: 1,
      auctionEnabled: 0,
    },
    {
      value: 21500,
      text: '아바타 상자',
      parent: 20000,
      playerClassSearch: 1,
      useLevelSearch: 0,
      itemLevelSearch: 0,
      itemGradeSearch: 1,
      itemQualitySearch: 0,
      itemTierSearch: 1,
      skillTripodOptionSearch: 0,
      skillOptionSearch: 0,
      statSearch: 0,
      abilitySearch: 0,
      marketEnabled: 1,
      auctionEnabled: 0,
    },
    {
      value: 30000,
      text: '어빌리티 스톤',
      parent: 0,
      playerClassSearch: 1,
      useLevelSearch: 0,
      itemLevelSearch: 0,
      itemGradeSearch: 1,
      itemQualitySearch: 0,
      itemTierSearch: 1,
      skillTripodOptionSearch: 0,
      skillOptionSearch: 0,
      statSearch: 0,
      abilitySearch: 1,
      marketEnabled: 0,
      auctionEnabled: 1,
    },
    {
      value: 40000,
      text: '각인서',
      parent: 0,
      playerClassSearch: 1,
      useLevelSearch: 0,
      itemLevelSearch: 0,
      itemGradeSearch: 1,
      itemQualitySearch: 0,
      itemTierSearch: 1,
      skillTripodOptionSearch: 0,
      skillOptionSearch: 0,
      statSearch: 0,
      abilitySearch: 0,
      marketEnabled: 1,
      auctionEnabled: 0,
    },
    {
      value: 50000,
      text: '강화 재료',
      parent: 0,
      playerClassSearch: 0,
      useLevelSearch: 1,
      itemLevelSearch: 0,
      itemGradeSearch: 1,
      itemQualitySearch: 0,
      itemTierSearch: 1,
      skillTripodOptionSearch: 0,
      skillOptionSearch: 0,
      statSearch: 0,
      abilitySearch: 0,
      marketEnabled: 1,
      auctionEnabled: 0,
    },
    {
      value: 50010,
      text: '재련 재료',
      parent: 50000,
      playerClassSearch: 0,
      useLevelSearch: 0,
      itemLevelSearch: 0,
      itemGradeSearch: 1,
      itemQualitySearch: 0,
      itemTierSearch: 1,
      skillTripodOptionSearch: 0,
      skillOptionSearch: 0,
      statSearch: 0,
      abilitySearch: 0,
      marketEnabled: 1,
      auctionEnabled: 0,
    },
    {
      value: 50020,
      text: '재련 추가 재료',
      parent: 50000,
      playerClassSearch: 0,
      useLevelSearch: 0,
      itemLevelSearch: 0,
      itemGradeSearch: 1,
      itemQualitySearch: 0,
      itemTierSearch: 1,
      skillTripodOptionSearch: 0,
      skillOptionSearch: 0,
      statSearch: 0,
      abilitySearch: 0,
      marketEnabled: 1,
      auctionEnabled: 0,
    },
    {
      value: 51000,
      text: '기타 재료',
      parent: 50000,
      playerClassSearch: 0,
      useLevelSearch: 1,
      itemLevelSearch: 0,
      itemGradeSearch: 1,
      itemQualitySearch: 0,
      itemTierSearch: 1,
      skillTripodOptionSearch: 0,
      skillOptionSearch: 0,
      statSearch: 0,
      abilitySearch: 0,
      marketEnabled: 1,
      auctionEnabled: 0,
    },
    {
      value: 51100,
      text: '무기 진화 재료',
      parent: 50000,
      playerClassSearch: 0,
      useLevelSearch: 0,
      itemLevelSearch: 0,
      itemGradeSearch: 1,
      itemQualitySearch: 0,
      itemTierSearch: 1,
      skillTripodOptionSearch: 0,
      skillOptionSearch: 0,
      statSearch: 0,
      abilitySearch: 0,
      marketEnabled: 1,
      auctionEnabled: 0,
    },
    {
      value: 60000,
      text: '전투 용품',
      parent: 0,
      playerClassSearch: 0,
      useLevelSearch: 1,
      itemLevelSearch: 0,
      itemGradeSearch: 1,
      itemQualitySearch: 0,
      itemTierSearch: 1,
      skillTripodOptionSearch: 0,
      skillOptionSearch: 0,
      statSearch: 0,
      abilitySearch: 0,
      marketEnabled: 1,
      auctionEnabled: 0,
    },
    {
      value: 60200,
      text: '배틀 아이템 -회복형',
      parent: 60000,
      playerClassSearch: 0,
      useLevelSearch: 1,
      itemLevelSearch: 0,
      itemGradeSearch: 1,
      itemQualitySearch: 0,
      itemTierSearch: 1,
      skillTripodOptionSearch: 0,
      skillOptionSearch: 0,
      statSearch: 0,
      abilitySearch: 0,
      marketEnabled: 1,
      auctionEnabled: 0,
    },
    {
      value: 60300,
      text: '배틀 아이템 -공격형',
      parent: 60000,
      playerClassSearch: 0,
      useLevelSearch: 1,
      itemLevelSearch: 0,
      itemGradeSearch: 1,
      itemQualitySearch: 0,
      itemTierSearch: 1,
      skillTripodOptionSearch: 0,
      skillOptionSearch: 0,
      statSearch: 0,
      abilitySearch: 0,
      marketEnabled: 1,
      auctionEnabled: 0,
    },
    {
      value: 60400,
      text: '배틀 아이템 -기능성',
      parent: 60000,
      playerClassSearch: 0,
      useLevelSearch: 1,
      itemLevelSearch: 0,
      itemGradeSearch: 1,
      itemQualitySearch: 0,
      itemTierSearch: 1,
      skillTripodOptionSearch: 0,
      skillOptionSearch: 0,
      statSearch: 0,
      abilitySearch: 0,
      marketEnabled: 1,
      auctionEnabled: 0,
    },
    {
      value: 60500,
      text: '배틀 아이템 -버프형',
      parent: 60000,
      playerClassSearch: 0,
      useLevelSearch: 1,
      itemLevelSearch: 0,
      itemGradeSearch: 1,
      itemQualitySearch: 0,
      itemTierSearch: 1,
      skillTripodOptionSearch: 0,
      skillOptionSearch: 0,
      statSearch: 0,
      abilitySearch: 0,
      marketEnabled: 1,
      auctionEnabled: 0,
    },
    {
      value: 70000,
      text: '요리',
      parent: 0,
      playerClassSearch: 0,
      useLevelSearch: 1,
      itemLevelSearch: 0,
      itemGradeSearch: 1,
      itemQualitySearch: 0,
      itemTierSearch: 1,
      skillTripodOptionSearch: 0,
      skillOptionSearch: 0,
      statSearch: 0,
      abilitySearch: 0,
      marketEnabled: 1,
      auctionEnabled: 0,
    },
    {
      value: 90000,
      text: '생활',
      parent: 0,
      playerClassSearch: 0,
      useLevelSearch: 1,
      itemLevelSearch: 0,
      itemGradeSearch: 1,
      itemQualitySearch: 0,
      itemTierSearch: 1,
      skillTripodOptionSearch: 0,
      skillOptionSearch: 0,
      statSearch: 0,
      abilitySearch: 0,
      marketEnabled: 1,
      auctionEnabled: 0,
    },
    {
      value: 90200,
      text: '식물채집 전리품',
      parent: 90000,
      playerClassSearch: 0,
      useLevelSearch: 1,
      itemLevelSearch: 0,
      itemGradeSearch: 1,
      itemQualitySearch: 0,
      itemTierSearch: 1,
      skillTripodOptionSearch: 0,
      skillOptionSearch: 0,
      statSearch: 0,
      abilitySearch: 0,
      marketEnabled: 1,
      auctionEnabled: 0,
    },
    {
      value: 90300,
      text: '벌목 전리품',
      parent: 90000,
      playerClassSearch: 0,
      useLevelSearch: 1,
      itemLevelSearch: 0,
      itemGradeSearch: 1,
      itemQualitySearch: 0,
      itemTierSearch: 1,
      skillTripodOptionSearch: 0,
      skillOptionSearch: 0,
      statSearch: 0,
      abilitySearch: 0,
      marketEnabled: 1,
      auctionEnabled: 0,
    },
    {
      value: 90400,
      text: '채광 전리품',
      parent: 90000,
      playerClassSearch: 0,
      useLevelSearch: 1,
      itemLevelSearch: 0,
      itemGradeSearch: 1,
      itemQualitySearch: 0,
      itemTierSearch: 1,
      skillTripodOptionSearch: 0,
      skillOptionSearch: 0,
      statSearch: 0,
      abilitySearch: 0,
      marketEnabled: 1,
      auctionEnabled: 0,
    },
    {
      value: 90500,
      text: '수렵 전리품',
      parent: 90000,
      playerClassSearch: 0,
      useLevelSearch: 1,
      itemLevelSearch: 0,
      itemGradeSearch: 1,
      itemQualitySearch: 0,
      itemTierSearch: 1,
      skillTripodOptionSearch: 0,
      skillOptionSearch: 0,
      statSearch: 0,
      abilitySearch: 0,
      marketEnabled: 1,
      auctionEnabled: 0,
    },
    {
      value: 90600,
      text: '낚시 전리품',
      parent: 90000,
      playerClassSearch: 0,
      useLevelSearch: 1,
      itemLevelSearch: 0,
      itemGradeSearch: 1,
      itemQualitySearch: 0,
      itemTierSearch: 1,
      skillTripodOptionSearch: 0,
      skillOptionSearch: 0,
      statSearch: 0,
      abilitySearch: 0,
      marketEnabled: 1,
      auctionEnabled: 0,
    },
    {
      value: 90700,
      text: '고고학 전리품',
      parent: 90000,
      playerClassSearch: 0,
      useLevelSearch: 1,
      itemLevelSearch: 0,
      itemGradeSearch: 1,
      itemQualitySearch: 0,
      itemTierSearch: 1,
      skillTripodOptionSearch: 0,
      skillOptionSearch: 0,
      statSearch: 0,
      abilitySearch: 0,
      marketEnabled: 1,
      auctionEnabled: 0,
    },
    {
      value: 90800,
      text: '기타',
      parent: 90000,
      playerClassSearch: 0,
      useLevelSearch: 1,
      itemLevelSearch: 0,
      itemGradeSearch: 1,
      itemQualitySearch: 0,
      itemTierSearch: 1,
      skillTripodOptionSearch: 0,
      skillOptionSearch: 0,
      statSearch: 0,
      abilitySearch: 0,
      marketEnabled: 1,
      auctionEnabled: 0,
    },
    {
      value: 100000,
      text: '모험의 서',
      parent: 0,
      playerClassSearch: 0,
      useLevelSearch: 1,
      itemLevelSearch: 0,
      itemGradeSearch: 1,
      itemQualitySearch: 0,
      itemTierSearch: 1,
      skillTripodOptionSearch: 0,
      skillOptionSearch: 0,
      statSearch: 0,
      abilitySearch: 0,
      marketEnabled: 1,
      auctionEnabled: 0,
    },
    {
      value: 110000,
      text: '항해',
      parent: 0,
      playerClassSearch: 0,
      useLevelSearch: 0,
      itemLevelSearch: 0,
      itemGradeSearch: 1,
      itemQualitySearch: 0,
      itemTierSearch: 1,
      skillTripodOptionSearch: 0,
      skillOptionSearch: 0,
      statSearch: 0,
      abilitySearch: 0,
      marketEnabled: 1,
      auctionEnabled: 0,
    },
    {
      value: 110100,
      text: '선박 재료',
      parent: 110000,
      playerClassSearch: 0,
      useLevelSearch: 0,
      itemLevelSearch: 0,
      itemGradeSearch: 1,
      itemQualitySearch: 0,
      itemTierSearch: 1,
      skillTripodOptionSearch: 0,
      skillOptionSearch: 0,
      statSearch: 0,
      abilitySearch: 0,
      marketEnabled: 1,
      auctionEnabled: 0,
    },
    {
      value: 110110,
      text: '선박 스킨',
      parent: 110000,
      playerClassSearch: 0,
      useLevelSearch: 0,
      itemLevelSearch: 0,
      itemGradeSearch: 1,
      itemQualitySearch: 0,
      itemTierSearch: 1,
      skillTripodOptionSearch: 0,
      skillOptionSearch: 0,
      statSearch: 0,
      abilitySearch: 0,
      marketEnabled: 1,
      auctionEnabled: 0,
    },
    {
      value: 111900,
      text: '선박 재료 상자',
      parent: 110000,
      playerClassSearch: 0,
      useLevelSearch: 0,
      itemLevelSearch: 0,
      itemGradeSearch: 1,
      itemQualitySearch: 0,
      itemTierSearch: 1,
      skillTripodOptionSearch: 0,
      skillOptionSearch: 0,
      statSearch: 0,
      abilitySearch: 0,
      marketEnabled: 1,
      auctionEnabled: 0,
    },
    {
      value: 140000,
      text: '펫',
      parent: 0,
      playerClassSearch: 0,
      useLevelSearch: 0,
      itemLevelSearch: 0,
      itemGradeSearch: 1,
      itemQualitySearch: 0,
      itemTierSearch: 1,
      skillTripodOptionSearch: 0,
      skillOptionSearch: 0,
      statSearch: 0,
      abilitySearch: 0,
      marketEnabled: 1,
      auctionEnabled: 0,
    },
    {
      value: 140100,
      text: '펫',
      parent: 140000,
      playerClassSearch: 0,
      useLevelSearch: 0,
      itemLevelSearch: 0,
      itemGradeSearch: 1,
      itemQualitySearch: 0,
      itemTierSearch: 1,
      skillTripodOptionSearch: 0,
      skillOptionSearch: 0,
      statSearch: 0,
      abilitySearch: 0,
      marketEnabled: 1,
      auctionEnabled: 0,
    },
    {
      value: 140200,
      text: '펫 상자',
      parent: 140000,
      playerClassSearch: 0,
      useLevelSearch: 0,
      itemLevelSearch: 0,
      itemGradeSearch: 1,
      itemQualitySearch: 0,
      itemTierSearch: 1,
      skillTripodOptionSearch: 0,
      skillOptionSearch: 0,
      statSearch: 0,
      abilitySearch: 0,
      marketEnabled: 1,
      auctionEnabled: 0,
    },
    {
      value: 160000,
      text: '탈 것',
      parent: 0,
      playerClassSearch: 0,
      useLevelSearch: 1,
      itemLevelSearch: 0,
      itemGradeSearch: 1,
      itemQualitySearch: 0,
      itemTierSearch: 1,
      skillTripodOptionSearch: 0,
      skillOptionSearch: 0,
      statSearch: 0,
      abilitySearch: 0,
      marketEnabled: 1,
      auctionEnabled: 0,
    },
    {
      value: 160100,
      text: '탈 것',
      parent: 160000,
      playerClassSearch: 0,
      useLevelSearch: 1,
      itemLevelSearch: 0,
      itemGradeSearch: 1,
      itemQualitySearch: 0,
      itemTierSearch: 1,
      skillTripodOptionSearch: 0,
      skillOptionSearch: 0,
      statSearch: 0,
      abilitySearch: 0,
      marketEnabled: 1,
      auctionEnabled: 0,
    },
    {
      value: 160200,
      text: '탈 것 상자',
      parent: 160000,
      playerClassSearch: 0,
      useLevelSearch: 1,
      itemLevelSearch: 0,
      itemGradeSearch: 1,
      itemQualitySearch: 0,
      itemTierSearch: 1,
      skillTripodOptionSearch: 0,
      skillOptionSearch: 0,
      statSearch: 0,
      abilitySearch: 0,
      marketEnabled: 1,
      auctionEnabled: 0,
    },
    {
      value: 170000,
      text: '기타',
      parent: 0,
      playerClassSearch: 0,
      useLevelSearch: 1,
      itemLevelSearch: 0,
      itemGradeSearch: 1,
      itemQualitySearch: 0,
      itemTierSearch: 1,
      skillTripodOptionSearch: 0,
      skillOptionSearch: 0,
      statSearch: 0,
      abilitySearch: 0,
      marketEnabled: 1,
      auctionEnabled: 0,
    },
    {
      value: 180000,
      text: '무기',
      parent: 10000,
      playerClassSearch: 1,
      useLevelSearch: 0,
      itemLevelSearch: 1,
      itemGradeSearch: 1,
      itemQualitySearch: 1,
      itemTierSearch: 1,
      skillTripodOptionSearch: 1,
      skillOptionSearch: 0,
      statSearch: 0,
      abilitySearch: 0,
      marketEnabled: 0,
      auctionEnabled: 1,
    },
    {
      value: 190010,
      text: '투구',
      parent: 10000,
      playerClassSearch: 1,
      useLevelSearch: 0,
      itemLevelSearch: 1,
      itemGradeSearch: 1,
      itemQualitySearch: 1,
      itemTierSearch: 1,
      skillTripodOptionSearch: 1,
      skillOptionSearch: 0,
      statSearch: 0,
      abilitySearch: 0,
      marketEnabled: 0,
      auctionEnabled: 1,
    },
    {
      value: 190020,
      text: '상의',
      parent: 10000,
      playerClassSearch: 1,
      useLevelSearch: 0,
      itemLevelSearch: 1,
      itemGradeSearch: 1,
      itemQualitySearch: 1,
      itemTierSearch: 1,
      skillTripodOptionSearch: 1,
      skillOptionSearch: 0,
      statSearch: 0,
      abilitySearch: 0,
      marketEnabled: 0,
      auctionEnabled: 1,
    },
    {
      value: 190030,
      text: '하의',
      parent: 10000,
      playerClassSearch: 1,
      useLevelSearch: 0,
      itemLevelSearch: 1,
      itemGradeSearch: 1,
      itemQualitySearch: 1,
      itemTierSearch: 1,
      skillTripodOptionSearch: 1,
      skillOptionSearch: 0,
      statSearch: 0,
      abilitySearch: 0,
      marketEnabled: 0,
      auctionEnabled: 1,
    },
    {
      value: 190040,
      text: '장갑',
      parent: 10000,
      playerClassSearch: 1,
      useLevelSearch: 0,
      itemLevelSearch: 1,
      itemGradeSearch: 1,
      itemQualitySearch: 1,
      itemTierSearch: 1,
      skillTripodOptionSearch: 1,
      skillOptionSearch: 0,
      statSearch: 0,
      abilitySearch: 0,
      marketEnabled: 0,
      auctionEnabled: 1,
    },
    {
      value: 190050,
      text: '어깨',
      parent: 10000,
      playerClassSearch: 1,
      useLevelSearch: 0,
      itemLevelSearch: 1,
      itemGradeSearch: 1,
      itemQualitySearch: 1,
      itemTierSearch: 1,
      skillTripodOptionSearch: 1,
      skillOptionSearch: 0,
      statSearch: 0,
      abilitySearch: 0,
      marketEnabled: 0,
      auctionEnabled: 1,
    },
    {
      value: 200000,
      text: '장신구',
      parent: 0,
      playerClassSearch: 1,
      useLevelSearch: 0,
      itemLevelSearch: 0,
      itemGradeSearch: 1,
      itemQualitySearch: 1,
      itemTierSearch: 1,
      skillTripodOptionSearch: 0,
      skillOptionSearch: 0,
      statSearch: 1,
      abilitySearch: 1,
      marketEnabled: 0,
      auctionEnabled: 1,
    },
    {
      value: 200010,
      text: '목걸이',
      parent: 200000,
      playerClassSearch: 1,
      useLevelSearch: 0,
      itemLevelSearch: 0,
      itemGradeSearch: 1,
      itemQualitySearch: 1,
      itemTierSearch: 1,
      skillTripodOptionSearch: 0,
      skillOptionSearch: 0,
      statSearch: 1,
      abilitySearch: 1,
      marketEnabled: 0,
      auctionEnabled: 1,
    },
    {
      value: 200020,
      text: '귀걸이',
      parent: 200000,
      playerClassSearch: 1,
      useLevelSearch: 0,
      itemLevelSearch: 0,
      itemGradeSearch: 1,
      itemQualitySearch: 1,
      itemTierSearch: 1,
      skillTripodOptionSearch: 0,
      skillOptionSearch: 0,
      statSearch: 1,
      abilitySearch: 1,
      marketEnabled: 0,
      auctionEnabled: 1,
    },
    {
      value: 200030,
      text: '반지',
      parent: 200000,
      playerClassSearch: 1,
      useLevelSearch: 0,
      itemLevelSearch: 0,
      itemGradeSearch: 1,
      itemQualitySearch: 1,
      itemTierSearch: 1,
      skillTripodOptionSearch: 0,
      skillOptionSearch: 0,
      statSearch: 1,
      abilitySearch: 1,
      marketEnabled: 0,
      auctionEnabled: 1,
    },
    {
      value: 200040,
      text: '팔찌',
      parent: 200000,
      playerClassSearch: 0,
      useLevelSearch: 0,
      itemLevelSearch: 0,
      itemGradeSearch: 1,
      itemQualitySearch: 0,
      itemTierSearch: 1,
      skillTripodOptionSearch: 0,
      skillOptionSearch: 0,
      statSearch: 1,
      abilitySearch: 0,
      marketEnabled: 0,
      auctionEnabled: 1,
    },
    {
      value: 210000,
      text: '보석',
      parent: 0,
      playerClassSearch: 1,
      useLevelSearch: 0,
      itemLevelSearch: 0,
      itemGradeSearch: 1,
      itemQualitySearch: 0,
      itemTierSearch: 1,
      skillTripodOptionSearch: 0,
      skillOptionSearch: 1,
      statSearch: 0,
      abilitySearch: 0,
      marketEnabled: 0,
      auctionEnabled: 1,
    },
    {
      value: 220000,
      text: '보석 상자',
      parent: 0,
      playerClassSearch: 0,
      useLevelSearch: 0,
      itemLevelSearch: 0,
      itemGradeSearch: 1,
      itemQualitySearch: 0,
      itemTierSearch: 1,
      skillTripodOptionSearch: 0,
      skillOptionSearch: 0,
      statSearch: 0,
      abilitySearch: 0,
      marketEnabled: 1,
      auctionEnabled: 0,
    },
  ],
  marketClass: [
    {
      value: 102,
      text: '버서커',
    },
    {
      value: 103,
      text: '디스트로이어',
    },
    {
      value: 104,
      text: '워로드',
    },
    {
      value: 105,
      text: '홀리나이트',
    },
    {
      value: 202,
      text: '아르카나',
    },
    {
      value: 203,
      text: '서머너',
    },
    {
      value: 204,
      text: '바드',
    },
    {
      value: 205,
      text: '소서리스',
    },
    {
      value: 302,
      text: '배틀마스터',
    },
    {
      value: 303,
      text: '인파이터',
    },
    {
      value: 304,
      text: '기공사',
    },
    {
      value: 305,
      text: '창술사',
    },
    {
      value: 312,
      text: '스트라이커',
    },
    {
      value: 402,
      text: '블레이드',
    },
    {
      value: 403,
      text: '데모닉',
    },
    {
      value: 404,
      text: '리퍼',
    },
    {
      value: 502,
      text: '호크아이',
    },
    {
      value: 503,
      text: '데빌헌터',
    },
    {
      value: 504,
      text: '블래스터',
    },
    {
      value: 505,
      text: '스카우터',
    },
    {
      value: 512,
      text: '건슬링어',
    },
  ],
  marketAuction: {
    marketMenuAuctionSkillList: [
      {
        value: 29120,
        class: 503,
        text: 'AT02 유탄',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '원거리 투척',
            isGem: false,
          },
          {
            value: 4,
            text: '강화 수류탄',
            isGem: false,
          },
          {
            value: 5,
            text: '세열 수류탄',
            isGem: false,
          },
          {
            value: 6,
            text: '빙결 수류탄',
            isGem: false,
          },
          {
            value: 7,
            text: '불꽃놀이',
            isGem: false,
          },
          {
            value: 8,
            text: '내부 발화',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 38120,
        class: 512,
        text: 'AT02 유탄',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '원거리 투척',
            isGem: false,
          },
          {
            value: 3,
            text: '마력 조절',
            isGem: false,
          },
          {
            value: 4,
            text: '강화 수류탄',
            isGem: false,
          },
          {
            value: 5,
            text: '세열 수류탄',
            isGem: false,
          },
          {
            value: 6,
            text: '빙결 수류탄',
            isGem: false,
          },
          {
            value: 7,
            text: '불꽃놀이',
            isGem: false,
          },
          {
            value: 8,
            text: '내부 발화',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 28120,
        class: 502,
        text: 'DM-42',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '마력 조절',
            isGem: false,
          },
          {
            value: 2,
            text: '약육강식',
            isGem: false,
          },
          {
            value: 4,
            text: '원거리 설치',
            isGem: false,
          },
          {
            value: 5,
            text: '충격 지뢰',
            isGem: false,
          },
          {
            value: 7,
            text: '화염 지뢰',
            isGem: false,
          },
          {
            value: 8,
            text: '분산 설치',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 17140,
        class: 104,
        text: '가디언의 낙뢰',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '마력 조절',
            isGem: false,
          },
          {
            value: 2,
            text: '식지않는 열기',
            isGem: false,
          },
          {
            value: 3,
            text: '피해 행운',
            isGem: false,
          },
          {
            value: 5,
            text: '강인한 일격',
            isGem: false,
          },
          {
            value: 7,
            text: '번개 줄기',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 17170,
        class: 104,
        text: '가디언의 수호',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 17090,
        class: 104,
        text: '갈고리 사슬',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '빠른 준비',
            isGem: false,
          },
          {
            value: 2,
            text: '마력 조절',
            isGem: false,
          },
          {
            value: 3,
            text: '강화된 일격',
            isGem: false,
          },
          {
            value: 4,
            text: '날카로운 사슬',
            isGem: false,
          },
          {
            value: 5,
            text: '족쇄',
            isGem: false,
          },
          {
            value: 6,
            text: '공격 준비',
            isGem: false,
          },
          {
            value: 8,
            text: '도발',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 30050,
        class: 504,
        text: '강화탄',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 2,
            text: '급소 포격',
            isGem: false,
          },
          {
            value: 4,
            text: '포탄 강화',
            isGem: false,
          },
          {
            value: 5,
            text: '약육강식',
            isGem: false,
          },
          {
            value: 6,
            text: '재빠른 손놀림',
            isGem: false,
          },
          {
            value: 8,
            text: '내부 발화',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 30170,
        class: 504,
        text: '개틀링건',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '강화된 사격',
            isGem: false,
          },
          {
            value: 2,
            text: '빠른 준비',
            isGem: false,
          },
          {
            value: 3,
            text: '마무리 사격',
            isGem: false,
          },
          {
            value: 4,
            text: '성장 탄환',
            isGem: false,
          },
          {
            value: 6,
            text: '단단한 갑옷',
            isGem: false,
          },
          {
            value: 7,
            text: '파괴자의 의지',
            isGem: false,
          },
          {
            value: 8,
            text: '조준 사격',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 39290,
        class: 312,
        text: '격호각',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '공격 집중',
            isGem: false,
          },
          {
            value: 3,
            text: '급소타격',
            isGem: false,
          },
          {
            value: 4,
            text: '내려차기',
            isGem: false,
          },
          {
            value: 6,
            text: '집중 타격',
            isGem: false,
          },
          {
            value: 7,
            text: '효율적인 타격',
            isGem: false,
          },
          {
            value: 8,
            text: '호왕아',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 20260,
        class: 203,
        text: '고대의 창',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '고대의 심판',
            isGem: false,
          },
          {
            value: 2,
            text: '재빠른 시전',
            isGem: false,
          },
          {
            value: 3,
            text: '빠른 준비',
            isGem: false,
          },
          {
            value: 4,
            text: '폭열의 창',
            isGem: false,
          },
          {
            value: 5,
            text: '빙결의 창',
            isGem: false,
          },
          {
            value: 7,
            text: '응축된 힘',
            isGem: false,
          },
          {
            value: 8,
            text: '고대의 힘',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 35160,
        class: 505,
        text: '고전압탄',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '급소 사격',
            isGem: false,
          },
          {
            value: 2,
            text: '배터리 충전',
            isGem: false,
          },
          {
            value: 3,
            text: '빠른 준비',
            isGem: false,
          },
          {
            value: 4,
            text: '강력 감전',
            isGem: false,
          },
          {
            value: 5,
            text: '날렵한 움직임',
            isGem: false,
          },
          {
            value: 6,
            text: '전류 방출',
            isGem: false,
          },
          {
            value: 8,
            text: '압축 사격',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 30090,
        class: 504,
        text: '곡사포',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 2,
            text: '재빠른 손놀림',
            isGem: false,
          },
          {
            value: 3,
            text: '마력 조절',
            isGem: false,
          },
          {
            value: 4,
            text: '비열한 공격',
            isGem: false,
          },
          {
            value: 5,
            text: '마무리 포격',
            isGem: false,
          },
          {
            value: 6,
            text: '집중 포격',
            isGem: false,
          },
          {
            value: 7,
            text: '섬광 포탄',
            isGem: false,
          },
          {
            value: 8,
            text: '불꽃놀이',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 23080,
        class: 303,
        text: '공명의 사슬',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '빠른 준비',
            isGem: false,
          },
          {
            value: 2,
            text: '집중',
            isGem: false,
          },
          {
            value: 3,
            text: '재빠른 손놀림',
            isGem: false,
          },
          {
            value: 4,
            text: '강화된 일격',
            isGem: false,
          },
          {
            value: 5,
            text: '거친 사슬',
            isGem: false,
          },
          {
            value: 6,
            text: '꿰뚫는 일격',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 34160,
        class: 305,
        text: '공의연무',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '마력 조절',
            isGem: false,
          },
          {
            value: 2,
            text: '습격',
            isGem: false,
          },
          {
            value: 5,
            text: '단단한 갑옷',
            isGem: false,
          },
          {
            value: 7,
            text: '신속한 대응',
            isGem: false,
          },
          {
            value: 8,
            text: '날이 선 일격',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 30110,
        class: 504,
        text: '공중 폭격',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '발포 준비',
            isGem: false,
          },
          {
            value: 2,
            text: '빠른 발사',
            isGem: false,
          },
          {
            value: 4,
            text: '화염 폭격',
            isGem: false,
          },
          {
            value: 5,
            text: '냉기 폭격',
            isGem: false,
          },
          {
            value: 6,
            text: '전기 폭격',
            isGem: false,
          },
          {
            value: 7,
            text: '무자비한 폭격',
            isGem: false,
          },
          {
            value: 8,
            text: '핵폭탄',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 35050,
        class: 505,
        text: '과충전 배터리',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '배터리 충전',
            isGem: false,
          },
          {
            value: 4,
            text: '폭발성 배터리',
            isGem: false,
          },
          {
            value: 5,
            text: '진탕 배터리',
            isGem: false,
          },
          {
            value: 6,
            text: '연속 폭발',
            isGem: false,
          },
          {
            value: 7,
            text: '즉시 폭발',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 39090,
        class: 312,
        text: '광폭진',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '공격 집중',
            isGem: false,
          },
          {
            value: 2,
            text: '마력 조절',
            isGem: false,
          },
          {
            value: 5,
            text: '약점포착',
            isGem: false,
          },
          {
            value: 7,
            text: '빙하폭발',
            isGem: false,
          },
          {
            value: 8,
            text: '화산폭발',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 34560,
        class: 305,
        text: '굉열파',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '빠른 준비',
            isGem: false,
          },
          {
            value: 2,
            text: '약점포착',
            isGem: false,
          },
          {
            value: 3,
            text: '재빠른 손놀림',
            isGem: false,
          },
          {
            value: 4,
            text: '창끝 공격',
            isGem: false,
          },
          {
            value: 5,
            text: '보호막',
            isGem: false,
          },
          {
            value: 7,
            text: '공파섬',
            isGem: false,
          },
          {
            value: 8,
            text: '공진참',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 18060,
        class: 103,
        text: '그라비티 임팩트',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '충전 강화',
            isGem: false,
          },
          {
            value: 2,
            text: '중력 강화',
            isGem: false,
          },
          {
            value: 3,
            text: '행운의 코어',
            isGem: false,
          },
          {
            value: 4,
            text: '단단한 정신',
            isGem: false,
          },
          {
            value: 5,
            text: '냉혹한 복수',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 18190,
        class: 103,
        text: '그라비티 컴프레이션',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '단단한 심장',
            isGem: false,
          },
          {
            value: 2,
            text: '합리적인 선택',
            isGem: false,
          },
          {
            value: 3,
            text: '견딜 수 없는 힘',
            isGem: false,
          },
          {
            value: 5,
            text: '강력한 마무리',
            isGem: false,
          },
          {
            value: 6,
            text: '절대적인 힘',
            isGem: false,
          },
          {
            value: 8,
            text: '자기장 강화',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 18200,
        class: 103,
        text: '그라비티 포스',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '충전 강화',
            isGem: false,
          },
          {
            value: 2,
            text: '단단한 신체',
            isGem: false,
          },
          {
            value: 3,
            text: '치명적인 힘',
            isGem: false,
          },
          {
            value: 4,
            text: '재빠른 움직임',
            isGem: false,
          },
          {
            value: 5,
            text: '단일 공격',
            isGem: false,
          },
          {
            value: 6,
            text: '행운의 코어',
            isGem: false,
          },
          {
            value: 7,
            text: '방출되는 본능',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 27130,
        class: 403,
        text: '그라인드 체인',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '강화된 일격',
            isGem: false,
          },
          {
            value: 3,
            text: '빠른 준비',
            isGem: false,
          },
          {
            value: 4,
            text: '급소 타격',
            isGem: false,
          },
          {
            value: 5,
            text: '기동성 약화',
            isGem: false,
          },
          {
            value: 7,
            text: '연속 공격',
            isGem: false,
          },
          {
            value: 8,
            text: '그라인드 존',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 28200,
        class: 502,
        text: '그림자 화살',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '고속 충전',
            isGem: false,
          },
          {
            value: 3,
            text: '마력 조절',
            isGem: false,
          },
          {
            value: 5,
            text: '저주 강화',
            isGem: false,
          },
          {
            value: 7,
            text: '그림자 추적',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 28130,
        class: 502,
        text: '급소 베기',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '마력 조절',
            isGem: false,
          },
          {
            value: 2,
            text: '실버 마스터',
            isGem: false,
          },
          {
            value: 3,
            text: '급소 타격',
            isGem: false,
          },
          {
            value: 5,
            text: '불의의 일격',
            isGem: false,
          },
          {
            value: 6,
            text: '상처 악화',
            isGem: false,
          },
          {
            value: 7,
            text: '이중 베기',
            isGem: false,
          },
          {
            value: 8,
            text: '은밀한 움직임',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 24230,
        class: 304,
        text: '기공장',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '빠른 준비',
            isGem: false,
          },
          {
            value: 2,
            text: '인내 강화',
            isGem: false,
          },
          {
            value: 3,
            text: '속도 강화',
            isGem: false,
          },
          {
            value: 4,
            text: '성장 파동',
            isGem: false,
          },
          {
            value: 5,
            text: '기동성 약화',
            isGem: false,
          },
          {
            value: 6,
            text: '강화된 파동',
            isGem: false,
          },
          {
            value: 7,
            text: '공간 팽창',
            isGem: false,
          },
          {
            value: 8,
            text: '공간 수축',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 35180,
        class: 505,
        text: '기동 타격',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 2,
            text: '입체 기동',
            isGem: false,
          },
          {
            value: 3,
            text: '빠른 준비',
            isGem: false,
          },
          {
            value: 4,
            text: '배터리 충전',
            isGem: false,
          },
          {
            value: 5,
            text: '날렵함',
            isGem: false,
          },
          {
            value: 6,
            text: '섬광 사격',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 20180,
        class: 203,
        text: '끈적이는 이끼늪',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '정신 강화',
            isGem: false,
          },
          {
            value: 2,
            text: '빠른 준비',
            isGem: false,
          },
          {
            value: 3,
            text: '공격 준비',
            isGem: false,
          },
          {
            value: 5,
            text: '맹독 이끼늪',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 29180,
        class: 503,
        text: '나선의 추적자',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '통찰력',
            isGem: false,
          },
          {
            value: 3,
            text: '재빠른 손놀림',
            isGem: false,
          },
          {
            value: 4,
            text: '가벼운 발걸음',
            isGem: false,
          },
          {
            value: 5,
            text: '성장 탄환',
            isGem: false,
          },
          {
            value: 6,
            text: '집중 사격',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 38180,
        class: 512,
        text: '나선의 추적자',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '통찰력',
            isGem: false,
          },
          {
            value: 3,
            text: '재빠른 손놀림',
            isGem: false,
          },
          {
            value: 4,
            text: '가벼운 발걸음',
            isGem: false,
          },
          {
            value: 5,
            text: '성장 탄환',
            isGem: false,
          },
          {
            value: 6,
            text: '집중 사격',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 34540,
        class: 305,
        text: '나선창',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '화력 조절',
            isGem: false,
          },
          {
            value: 2,
            text: '창끝 공격',
            isGem: false,
          },
          {
            value: 3,
            text: '어깨 치기',
            isGem: false,
          },
          {
            value: 4,
            text: '연속 찌르기',
            isGem: false,
          },
          {
            value: 5,
            text: '나선 찌르기',
            isGem: false,
          },
          {
            value: 6,
            text: '모아 찌르기',
            isGem: false,
          },
          {
            value: 7,
            text: '기합 찌르기',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 26090,
        class: 404,
        text: '나이트메어',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 4,
            text: '비열한 일격',
            isGem: false,
          },
          {
            value: 5,
            text: '암수',
            isGem: false,
          },
          {
            value: 6,
            text: '빠른 준비',
            isGem: false,
          },
          {
            value: 7,
            text: '배후 공격',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 24200,
        class: 304,
        text: '낙영장',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '인내 강화',
            isGem: false,
          },
          {
            value: 2,
            text: '기밀한 공격',
            isGem: false,
          },
          {
            value: 4,
            text: '무방비 표적',
            isGem: false,
          },
          {
            value: 5,
            text: '약점포착',
            isGem: false,
          },
          {
            value: 7,
            text: '무도가의 육감',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 23220,
        class: 303,
        text: '난타연권',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '빈틈포착',
            isGem: false,
          },
          {
            value: 2,
            text: '정의로운 약탈',
            isGem: false,
          },
          {
            value: 5,
            text: '붉은 폭발',
            isGem: false,
          },
          {
            value: 6,
            text: '단일 타격',
            isGem: false,
          },
          {
            value: 7,
            text: '광폭화',
            isGem: false,
          },
          {
            value: 8,
            text: '역회전 타격',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 24210,
        class: 304,
        text: '난화격',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '공격 강화',
            isGem: false,
          },
          {
            value: 2,
            text: '훔쳐오기',
            isGem: false,
          },
          {
            value: 5,
            text: '후회없는 공격',
            isGem: false,
          },
          {
            value: 6,
            text: '냉정한 움직임',
            isGem: false,
          },
          {
            value: 7,
            text: '전이되는 화상',
            isGem: false,
          },
          {
            value: 8,
            text: '잔상 공격',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 17030,
        class: 104,
        text: '날카로운 창',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 4,
            text: '상처',
            isGem: false,
          },
          {
            value: 5,
            text: '무방비 표적',
            isGem: false,
          },
          {
            value: 7,
            text: '멈추지 않는 창격',
            isGem: false,
          },
          {
            value: 8,
            text: '창격 강화',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 24250,
        class: 304,
        text: '내공 방출',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '재빠른 손놀림',
            isGem: false,
          },
          {
            value: 2,
            text: '빠른 준비',
            isGem: false,
          },
          {
            value: 5,
            text: '내공 방출 강화',
            isGem: false,
          },
          {
            value: 7,
            text: '공격 준비',
            isGem: false,
          },
          {
            value: 8,
            text: '무도가의 함성',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 22290,
        class: 302,
        text: '내공연소',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '연소 갑옷',
            isGem: false,
          },
          {
            value: 2,
            text: '가벼운 발걸음',
            isGem: false,
          },
          {
            value: 3,
            text: '엘리멘탈 갈취',
            isGem: false,
          },
          {
            value: 4,
            text: '연소 유지',
            isGem: false,
          },
          {
            value: 5,
            text: '기술 감량',
            isGem: false,
          },
          {
            value: 6,
            text: '격렬한 전투',
            isGem: false,
          },
          {
            value: 7,
            text: '수련의 힘',
            isGem: false,
          },
          {
            value: 8,
            text: '최후의 속삭임',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 30180,
        class: 504,
        text: '네이팜탄',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 4,
            text: '급소 포격',
            isGem: false,
          },
          {
            value: 5,
            text: '뜨거운 열기',
            isGem: false,
          },
          {
            value: 6,
            text: '섬광 폭발',
            isGem: false,
          },
          {
            value: 7,
            text: '연쇄 폭발',
            isGem: false,
          },
          {
            value: 8,
            text: '춤추는 화염',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 17130,
        class: 104,
        text: '넬라시아의 기운',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '가벼운 발걸음',
            isGem: false,
          },
          {
            value: 2,
            text: '마력 조절',
            isGem: false,
          },
          {
            value: 3,
            text: '빠른 준비',
            isGem: false,
          },
          {
            value: 4,
            text: '효과 증대',
            isGem: false,
          },
          {
            value: 6,
            text: '효과 유지',
            isGem: false,
          },
          {
            value: 7,
            text: '리더쉽',
            isGem: false,
          },
          {
            value: 8,
            text: '생존',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 22170,
        class: 302,
        text: '뇌명각',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '날카로운 움직임',
            isGem: false,
          },
          {
            value: 2,
            text: '엘리멘탈 갈취',
            isGem: false,
          },
          {
            value: 3,
            text: '무자비',
            isGem: false,
          },
          {
            value: 4,
            text: '벼락차기',
            isGem: false,
          },
          {
            value: 5,
            text: '가벼운 표적',
            isGem: false,
          },
          {
            value: 6,
            text: '강렬한 전격',
            isGem: false,
          },
          {
            value: 7,
            text: '천뢰',
            isGem: false,
          },
          {
            value: 8,
            text: '섬뢰',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 39170,
        class: 312,
        text: '뇌명각',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '날카로운 움직임',
            isGem: false,
          },
          {
            value: 2,
            text: '엘리멘탈 갈취',
            isGem: false,
          },
          {
            value: 3,
            text: '무자비',
            isGem: false,
          },
          {
            value: 4,
            text: '벼락차기',
            isGem: false,
          },
          {
            value: 5,
            text: '가벼운 표적',
            isGem: false,
          },
          {
            value: 6,
            text: '강렬한 전격',
            isGem: false,
          },
          {
            value: 7,
            text: '천뢰',
            isGem: false,
          },
          {
            value: 8,
            text: '섬뢰',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 18100,
        class: 103,
        text: '뉴트럴라이저',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '어둠의 기운',
            isGem: false,
          },
          {
            value: 2,
            text: '대지의 기운',
            isGem: false,
          },
          {
            value: 3,
            text: '강한 충격',
            isGem: false,
          },
          {
            value: 6,
            text: '성장하는 중력',
            isGem: false,
          },
          {
            value: 8,
            text: '중력 조절',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 27060,
        class: 403,
        text: '님블컷',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '마력 조절',
            isGem: false,
          },
          {
            value: 2,
            text: '빠른 준비',
            isGem: false,
          },
          {
            value: 4,
            text: '뇌전 공격',
            isGem: false,
          },
          {
            value: 6,
            text: '암흑 공격',
            isGem: false,
          },
          {
            value: 7,
            text: '치명적인 일격',
            isGem: false,
          },
          {
            value: 8,
            text: '잠식 해방',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 30080,
        class: 504,
        text: '다연장로켓포',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '화염 로켓',
            isGem: false,
          },
          {
            value: 2,
            text: '냉기 로켓',
            isGem: false,
          },
          {
            value: 4,
            text: '백 스텝',
            isGem: false,
          },
          {
            value: 5,
            text: '기절 효과',
            isGem: false,
          },
          {
            value: 6,
            text: '재빠른 포격',
            isGem: false,
          },
          {
            value: 7,
            text: '레이저 포',
            isGem: false,
          },
          {
            value: 8,
            text: '접근 불가',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 16210,
        class: 102,
        text: '다이빙 슬래쉬',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '탁월한 기동성',
            isGem: false,
          },
          {
            value: 2,
            text: '조절',
            isGem: false,
          },
          {
            value: 3,
            text: '빠른 준비',
            isGem: false,
          },
          {
            value: 4,
            text: '신속한 이동',
            isGem: false,
          },
          {
            value: 5,
            text: '대검풍',
            isGem: false,
          },
          {
            value: 7,
            text: '파워 슬래쉬',
            isGem: false,
          },
          {
            value: 8,
            text: '검파편',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 16141,
        class: 102,
        text: '다크 러쉬',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 19050,
        class: 202,
        text: '다크 리저렉션',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '날렵한 움직임',
            isGem: false,
          },
          {
            value: 2,
            text: '꿰뚫는 일격',
            isGem: false,
          },
          {
            value: 3,
            text: '정신 강화',
            isGem: false,
          },
          {
            value: 4,
            text: '퀵 드로',
            isGem: false,
          },
          {
            value: 5,
            text: '치명적 카드',
            isGem: false,
          },
          {
            value: 6,
            text: '강렬한 카드',
            isGem: false,
          },
          {
            value: 7,
            text: '죽음의 공포',
            isGem: false,
          },
          {
            value: 8,
            text: '분노의 일격',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 25150,
        class: 402,
        text: '다크 악셀',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '재빠른 손놀림',
            isGem: false,
          },
          {
            value: 2,
            text: '가벼운 발걸음',
            isGem: false,
          },
          {
            value: 3,
            text: '마력 조절',
            isGem: false,
          },
          {
            value: 5,
            text: '강회전',
            isGem: false,
          },
          {
            value: 6,
            text: '급소 타격',
            isGem: false,
          },
          {
            value: 7,
            text: '어퍼 악셀',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 17080,
        class: 104,
        text: '대쉬 어퍼 파이어',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '빠른 준비',
            isGem: false,
          },
          {
            value: 3,
            text: '공격 준비',
            isGem: false,
          },
          {
            value: 4,
            text: '강화된 일격',
            isGem: false,
          },
          {
            value: 5,
            text: '약점 포착',
            isGem: false,
          },
          {
            value: 7,
            text: '창격 강화',
            isGem: false,
          },
          {
            value: 8,
            text: '멈추지 않는 포성',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 29080,
        class: 503,
        text: '대재앙',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 3,
            text: '재빠른 조준',
            isGem: false,
          },
          {
            value: 4,
            text: '마무리 사격',
            isGem: false,
          },
          {
            value: 5,
            text: '무방비 표적',
            isGem: false,
          },
          {
            value: 8,
            text: '영원한 재앙',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 38080,
        class: 512,
        text: '대재앙',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 3,
            text: '재빠른 조준',
            isGem: false,
          },
          {
            value: 4,
            text: '마무리 사격',
            isGem: false,
          },
          {
            value: 5,
            text: '무방비 표적',
            isGem: false,
          },
          {
            value: 8,
            text: '영원한 재앙',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 20240,
        class: 203,
        text: '대지 붕괴',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '화염 붕괴',
            isGem: false,
          },
          {
            value: 2,
            text: '빙하 붕괴',
            isGem: false,
          },
          {
            value: 4,
            text: '여진',
            isGem: false,
          },
          {
            value: 5,
            text: '흔들림',
            isGem: false,
          },
          {
            value: 7,
            text: '대지 조작',
            isGem: false,
          },
          {
            value: 8,
            text: '대지진',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 19200,
        class: 202,
        text: '댄싱 오브 스파인플라워',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '치명적인 꽃',
            isGem: false,
          },
          {
            value: 2,
            text: '격렬한 춤',
            isGem: false,
          },
          {
            value: 3,
            text: '가벼운 발걸음',
            isGem: false,
          },
          {
            value: 5,
            text: '짜릿한 춤',
            isGem: false,
          },
          {
            value: 6,
            text: '밤에 피는 꽃',
            isGem: false,
          },
          {
            value: 7,
            text: '가시 집약',
            isGem: false,
          },
          {
            value: 8,
            text: '치명적 가시',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 26830,
        class: 404,
        text: '댄싱 오브 퓨리',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '날렵한 움직임',
            isGem: false,
          },
          {
            value: 2,
            text: '꿰뚫는 일격',
            isGem: false,
          },
          {
            value: 4,
            text: '혼돈 강화',
            isGem: false,
          },
          {
            value: 5,
            text: '신속한 준비',
            isGem: false,
          },
          {
            value: 6,
            text: '치명적인 단검',
            isGem: false,
          },
          {
            value: 7,
            text: '그림자의 춤',
            isGem: false,
          },
          {
            value: 8,
            text: '절제된 동작',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 16100,
        class: 102,
        text: '더블 슬래쉬',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '강화된 일격',
            isGem: false,
          },
          {
            value: 2,
            text: '어깨치기',
            isGem: false,
          },
          {
            value: 5,
            text: '양단',
            isGem: false,
          },
          {
            value: 7,
            text: '난도질',
            isGem: false,
          },
          {
            value: 8,
            text: '공간 베기',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 27050,
        class: 403,
        text: '데모닉 슬래쉬',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '탁월한 기동성',
            isGem: false,
          },
          {
            value: 3,
            text: '강화된 일격',
            isGem: false,
          },
          {
            value: 5,
            text: '둔화 효과',
            isGem: false,
          },
          {
            value: 6,
            text: '날렵한 움직임',
            isGem: false,
          },
          {
            value: 8,
            text: '스핀 킥',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 27090,
        class: 403,
        text: '데몬 그랩',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '빠른 준비',
            isGem: false,
          },
          {
            value: 2,
            text: '마력 조절',
            isGem: false,
          },
          {
            value: 3,
            text: '재빠른 손놀림',
            isGem: false,
          },
          {
            value: 4,
            text: '둔화 효과',
            isGem: false,
          },
          {
            value: 5,
            text: '잠식하는 힘',
            isGem: false,
          },
          {
            value: 6,
            text: '꿰뚫는 손',
            isGem: false,
          },
          {
            value: 7,
            text: '거대한 손아귀',
            isGem: false,
          },
          {
            value: 8,
            text: '뻗어 나가는 손',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 27120,
        class: 403,
        text: '데몬 비전',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 2,
            text: '집중 방출',
            isGem: false,
          },
          {
            value: 3,
            text: '마력 조절',
            isGem: false,
          },
          {
            value: 4,
            text: '전격 방출',
            isGem: false,
          },
          {
            value: 5,
            text: '암흑 방출',
            isGem: false,
          },
          {
            value: 6,
            text: '잠식하는 힘',
            isGem: false,
          },
          {
            value: 8,
            text: '넘치는 힘',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 27220,
        class: 403,
        text: '데몰리션',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 2,
            text: '마력 조절',
            isGem: false,
          },
          {
            value: 3,
            text: '약점 포착',
            isGem: false,
          },
          {
            value: 5,
            text: '파상 공격',
            isGem: false,
          },
          {
            value: 6,
            text: '빠른 공격',
            isGem: false,
          },
          {
            value: 7,
            text: '잠식 해방',
            isGem: false,
          },
          {
            value: 8,
            text: '돌진 베기',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 26120,
        class: 404,
        text: '데스 사이드',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 4,
            text: '기습',
            isGem: false,
          },
          {
            value: 5,
            text: '약육 강식',
            isGem: false,
          },
          {
            value: 6,
            text: '치명적인 단검',
            isGem: false,
          },
          {
            value: 7,
            text: '데스 콜',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 25080,
        class: 402,
        text: '데스 센텐스',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '탁월한 기동성',
            isGem: false,
          },
          {
            value: 2,
            text: '빠른 준비',
            isGem: false,
          },
          {
            value: 4,
            text: '확인 사살',
            isGem: false,
          },
          {
            value: 5,
            text: '무자비',
            isGem: false,
          },
          {
            value: 6,
            text: '냉기 지대',
            isGem: false,
          },
          {
            value: 7,
            text: '회심의 일격',
            isGem: false,
          },
          {
            value: 8,
            text: '폭발',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 29090,
        class: 503,
        text: '데스파이어',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '재빠른 손놀림',
            isGem: false,
          },
          {
            value: 3,
            text: '예리한 일격',
            isGem: false,
          },
          {
            value: 4,
            text: '화염 폭탄',
            isGem: false,
          },
          {
            value: 5,
            text: '냉기 폭탄',
            isGem: false,
          },
          {
            value: 8,
            text: '무한 섬멸',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 38090,
        class: 512,
        text: '데스파이어',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '재빠른 손놀림',
            isGem: false,
          },
          {
            value: 3,
            text: '예리한 일격',
            isGem: false,
          },
          {
            value: 4,
            text: '화염 폭탄',
            isGem: false,
          },
          {
            value: 5,
            text: '냉기 폭탄',
            isGem: false,
          },
          {
            value: 8,
            text: '무한 섬멸',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 27240,
        class: 403,
        text: '데시메이트',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '출혈 효과',
            isGem: false,
          },
          {
            value: 2,
            text: '재빠른 손놀림',
            isGem: false,
          },
          {
            value: 3,
            text: '빠른 준비',
            isGem: false,
          },
          {
            value: 4,
            text: '약점 포착',
            isGem: false,
          },
          {
            value: 5,
            text: '잠식 방출',
            isGem: false,
          },
          {
            value: 6,
            text: '치명적인 일격',
            isGem: false,
          },
          {
            value: 7,
            text: '냉혹한 손',
            isGem: false,
          },
          {
            value: 8,
            text: '집중 공략',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 24070,
        class: 304,
        text: '독마권',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '충전 강화',
            isGem: false,
          },
          {
            value: 2,
            text: '공격 강화',
            isGem: false,
          },
          {
            value: 3,
            text: '인내 강화',
            isGem: false,
          },
          {
            value: 4,
            text: '성공적인 변화',
            isGem: false,
          },
          {
            value: 5,
            text: '꿰뚫는 일격',
            isGem: false,
          },
          {
            value: 8,
            text: '치명적인 독',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 36070,
        class: 105,
        text: '돌진',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '탁월한 기동성',
            isGem: false,
          },
          {
            value: 2,
            text: '빠른 준비',
            isGem: false,
          },
          {
            value: 4,
            text: '강화된 일격',
            isGem: false,
          },
          {
            value: 5,
            text: '날렵한 움직임',
            isGem: false,
          },
          {
            value: 6,
            text: '빛의 보호',
            isGem: false,
          },
          {
            value: 7,
            text: '기습 공격',
            isGem: false,
          },
          {
            value: 8,
            text: '약육강식',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 37310,
        class: 205,
        text: '돌풍',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '정신 강화',
            isGem: false,
          },
          {
            value: 2,
            text: '빠른 준비',
            isGem: false,
          },
          {
            value: 3,
            text: '날렵한 시전',
            isGem: false,
          },
          {
            value: 4,
            text: '화염 회오리',
            isGem: false,
          },
          {
            value: 5,
            text: '냉기 회오리',
            isGem: false,
          },
          {
            value: 6,
            text: '번개 회오리',
            isGem: false,
          },
          {
            value: 8,
            text: '싹쓸바람',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 18110,
        class: 103,
        text: '드레드노트',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 2,
            text: '견딜 수 없는 힘',
            isGem: false,
          },
          {
            value: 4,
            text: '단단한 신체',
            isGem: false,
          },
          {
            value: 5,
            text: '날카로운 해머',
            isGem: false,
          },
          {
            value: 6,
            text: '광분한 해머',
            isGem: false,
          },
          {
            value: 7,
            text: '빛나는 공격',
            isGem: false,
          },
          {
            value: 8,
            text: '몰아치는 해머',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 26510,
        class: 404,
        text: '디스토션',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '그림자 충전',
            isGem: false,
          },
          {
            value: 2,
            text: '치명적인 그림자',
            isGem: false,
          },
          {
            value: 3,
            text: '빠른 준비',
            isGem: false,
          },
          {
            value: 5,
            text: '순풍',
            isGem: false,
          },
          {
            value: 6,
            text: '약육강식',
            isGem: false,
          },
          {
            value: 7,
            text: '그림자 질주',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 26800,
        class: 404,
        text: '라스트 그래피티',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 2,
            text: '급소 타격',
            isGem: false,
          },
          {
            value: 4,
            text: '신속한 준비',
            isGem: false,
          },
          {
            value: 5,
            text: '급습 강화',
            isGem: false,
          },
          {
            value: 6,
            text: '혼돈 강화',
            isGem: false,
          },
          {
            value: 7,
            text: '유언',
            isGem: false,
          },
          {
            value: 8,
            text: '그림자 올가미',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 17070,
        class: 104,
        text: '라이징 스피어',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '돌진',
            isGem: false,
          },
          {
            value: 4,
            text: '강화된 일격',
            isGem: false,
          },
          {
            value: 5,
            text: '화염창',
            isGem: false,
          },
          {
            value: 7,
            text: '대지파편',
            isGem: false,
          },
          {
            value: 8,
            text: '연쇄폭발',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 27100,
        class: 403,
        text: '라이징 클로',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '빠른 준비',
            isGem: false,
          },
          {
            value: 3,
            text: '약점 포착',
            isGem: false,
          },
          {
            value: 5,
            text: '치명적인 일격',
            isGem: false,
          },
          {
            value: 7,
            text: '착취의 손아귀',
            isGem: false,
          },
          {
            value: 8,
            text: '죽음의 손아귀',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 37210,
        class: 205,
        text: '라이트닝 볼텍스',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 3,
            text: '정신 강화',
            isGem: false,
          },
          {
            value: 5,
            text: '가벼운 발걸음',
            isGem: false,
          },
          {
            value: 8,
            text: '사나운 번개',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 37300,
        class: 205,
        text: '라이트닝 볼트',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '마비',
            isGem: false,
          },
          {
            value: 3,
            text: '빠른 준비',
            isGem: false,
          },
          {
            value: 4,
            text: '강화된 일격',
            isGem: false,
          },
          {
            value: 6,
            text: '급소 타격',
            isGem: false,
          },
          {
            value: 7,
            text: '갈래 번개',
            isGem: false,
          },
          {
            value: 8,
            text: '전압 상승',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 28020,
        class: 502,
        text: '래피드 샷',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 2,
            text: '마력 조절',
            isGem: false,
          },
          {
            value: 4,
            text: '더블 샷',
            isGem: false,
          },
          {
            value: 5,
            text: '쇼크 샷',
            isGem: false,
          },
          {
            value: 6,
            text: '가벼운 발걸음',
            isGem: false,
          },
          {
            value: 7,
            text: '마지막 일격',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 18210,
        class: 103,
        text: '러닝 크래쉬',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '행운의 코어',
            isGem: false,
          },
          {
            value: 2,
            text: '중력 강화',
            isGem: false,
          },
          {
            value: 3,
            text: '빠른 준비',
            isGem: false,
          },
          {
            value: 4,
            text: '반중력',
            isGem: false,
          },
          {
            value: 5,
            text: '치밀한 계획',
            isGem: false,
          },
          {
            value: 8,
            text: '강화된 전진',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 16120,
        class: 102,
        text: '레드 더스트',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '빠른 준비',
            isGem: false,
          },
          {
            value: 2,
            text: '날렵한 움직임',
            isGem: false,
          },
          {
            value: 3,
            text: '정신 강화',
            isGem: false,
          },
          {
            value: 4,
            text: '급소 타격',
            isGem: false,
          },
          {
            value: 6,
            text: '혈파참',
            isGem: false,
          },
          {
            value: 7,
            text: '붉은 파도',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 20040,
        class: 203,
        text: '레이네의 가호',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 3,
            text: '가벼운 발걸음',
            isGem: false,
          },
          {
            value: 4,
            text: '보호막 강화',
            isGem: false,
          },
          {
            value: 5,
            text: '보호막 유지',
            isGem: false,
          },
          {
            value: 7,
            text: '공진',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 26810,
        class: 404,
        text: '레이지 스피어',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '치명적인 단검',
            isGem: false,
          },
          {
            value: 2,
            text: '빠른 준비',
            isGem: false,
          },
          {
            value: 3,
            text: '학살',
            isGem: false,
          },
          {
            value: 5,
            text: '고립',
            isGem: false,
          },
          {
            value: 6,
            text: '기습',
            isGem: false,
          },
          {
            value: 7,
            text: '집중 공격',
            isGem: false,
          },
          {
            value: 8,
            text: '처형',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 38190,
        class: 512,
        text: '레인 오브 불릿',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '기습',
            isGem: false,
          },
          {
            value: 3,
            text: '급소 사격',
            isGem: false,
          },
          {
            value: 4,
            text: '원거리 사격',
            isGem: false,
          },
          {
            value: 6,
            text: '속사',
            isGem: false,
          },
          {
            value: 7,
            text: '화염 사격',
            isGem: false,
          },
          {
            value: 8,
            text: '빠른 준비',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 21150,
        class: 204,
        text: '리듬 벅샷',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '선율 증가',
            isGem: false,
          },
          {
            value: 2,
            text: '정신 강화',
            isGem: false,
          },
          {
            value: 6,
            text: '샷 강화',
            isGem: false,
          },
          {
            value: 7,
            text: '날렵한 시전',
            isGem: false,
          },
          {
            value: 8,
            text: '샷 집중',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 37280,
        class: 205,
        text: '리버스 그래비티',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '빠른 준비',
            isGem: false,
          },
          {
            value: 4,
            text: '용암 지대',
            isGem: false,
          },
          {
            value: 6,
            text: '전격 지대',
            isGem: false,
          },
          {
            value: 7,
            text: '약점 포착',
            isGem: false,
          },
          {
            value: 8,
            text: '약육 강식',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 19260,
        class: 202,
        text: '리턴',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 2,
            text: '정신 집중',
            isGem: false,
          },
          {
            value: 4,
            text: '노출된 표적',
            isGem: false,
          },
          {
            value: 5,
            text: '약점 포착',
            isGem: false,
          },
          {
            value: 6,
            text: '집중된 카드',
            isGem: false,
          },
          {
            value: 7,
            text: '연속 공격',
            isGem: false,
          },
          {
            value: 8,
            text: '노출된 어둠',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 17110,
        class: 104,
        text: '리프 어택',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '직접타격',
            isGem: false,
          },
          {
            value: 2,
            text: '빠른 준비',
            isGem: false,
          },
          {
            value: 3,
            text: '탁월한 기동성',
            isGem: false,
          },
          {
            value: 5,
            text: '전류지대',
            isGem: false,
          },
          {
            value: 6,
            text: '충격파',
            isGem: false,
          },
          {
            value: 7,
            text: '낮은 충격',
            isGem: false,
          },
          {
            value: 8,
            text: '도약',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 20020,
        class: 203,
        text: '마력의 결정체',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '정신 강화',
            isGem: false,
          },
          {
            value: 2,
            text: '원거리 발사',
            isGem: false,
          },
          {
            value: 4,
            text: '화염 결정',
            isGem: false,
          },
          {
            value: 5,
            text: '얼음 결정',
            isGem: false,
          },
          {
            value: 6,
            text: '번개 결정',
            isGem: false,
          },
          {
            value: 7,
            text: '연쇄 폭발',
            isGem: false,
          },
          {
            value: 8,
            text: '광역 폭발',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 20030,
        class: 203,
        text: '마력의 질주',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '불타는 질주',
            isGem: false,
          },
          {
            value: 2,
            text: '폭풍의 질주',
            isGem: false,
          },
          {
            value: 3,
            text: '얼어붙은 질주',
            isGem: false,
          },
          {
            value: 4,
            text: '붕괴의 질주',
            isGem: false,
          },
          {
            value: 5,
            text: '쾌속마',
            isGem: false,
          },
          {
            value: 6,
            text: '약점포착',
            isGem: false,
          },
          {
            value: 7,
            text: '파괴전차',
            isGem: false,
          },
          {
            value: 8,
            text: '승천',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 20130,
        class: 203,
        text: '마리린',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '공격력 강화',
            isGem: false,
          },
          {
            value: 2,
            text: '두꺼운 피부',
            isGem: false,
          },
          {
            value: 4,
            text: '도발 명령',
            isGem: false,
          },
          {
            value: 5,
            text: '돌진 명령',
            isGem: false,
          },
          {
            value: 6,
            text: '무력화 명령',
            isGem: false,
          },
          {
            value: 7,
            text: '교감',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 25160,
        class: 402,
        text: '마엘스톰',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '차가운 접촉',
            isGem: false,
          },
          {
            value: 2,
            text: '오브 조절',
            isGem: false,
          },
          {
            value: 4,
            text: '다크 오더',
            isGem: false,
          },
          {
            value: 6,
            text: '윈드 스톰',
            isGem: false,
          },
          {
            value: 8,
            text: '위압',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 16220,
        class: 102,
        text: '마운틴 크래쉬',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '빠른 준비',
            isGem: false,
          },
          {
            value: 2,
            text: '집중',
            isGem: false,
          },
          {
            value: 4,
            text: '강화된 일격',
            isGem: false,
          },
          {
            value: 5,
            text: '속공 준비',
            isGem: false,
          },
          {
            value: 6,
            text: '둔화 효과',
            isGem: false,
          },
          {
            value: 7,
            text: '지진파',
            isGem: false,
          },
          {
            value: 8,
            text: '대지 충돌',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 38110,
        class: 512,
        text: '마탄의 사수',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 3,
            text: '특수 탄환',
            isGem: false,
          },
          {
            value: 4,
            text: '사면초가',
            isGem: false,
          },
          {
            value: 6,
            text: '영혼의 일발',
            isGem: false,
          },
          {
            value: 7,
            text: '가디언의 숨결',
            isGem: false,
          },
          {
            value: 8,
            text: '혹한의 안식처',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 34150,
        class: 305,
        text: '맹룡열파',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '화염참',
            isGem: false,
          },
          {
            value: 2,
            text: '냉기참',
            isGem: false,
          },
          {
            value: 3,
            text: '빠른 준비',
            isGem: false,
          },
          {
            value: 4,
            text: '추가 베기',
            isGem: false,
          },
          {
            value: 5,
            text: '우회 베기',
            isGem: false,
          },
          {
            value: 6,
            text: '정교한 베기',
            isGem: false,
          },
          {
            value: 7,
            text: '불굴의 용기',
            isGem: false,
          },
          {
            value: 8,
            text: '각성',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 23180,
        class: 303,
        text: '맹호격',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 3,
            text: '복식 강화',
            isGem: false,
          },
          {
            value: 5,
            text: '약점포착',
            isGem: false,
          },
          {
            value: 6,
            text: '집중',
            isGem: false,
          },
          {
            value: 7,
            text: '거친 분쇄',
            isGem: false,
          },
          {
            value: 8,
            text: '광란한 폭격',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 16620,
        class: 102,
        text: '메일스톰',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '날렵한 움직임',
            isGem: false,
          },
          {
            value: 2,
            text: '정신 강화',
            isGem: false,
          },
          {
            value: 3,
            text: '집중',
            isGem: false,
          },
          {
            value: 5,
            text: '강화된 일격',
            isGem: false,
          },
          {
            value: 6,
            text: '급소 타격',
            isGem: false,
          },
          {
            value: 7,
            text: '화염 소용돌이',
            isGem: false,
          },
          {
            value: 8,
            text: '함몰',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 29100,
        class: 503,
        text: '메테오 스트림',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '마력 조절',
            isGem: false,
          },
          {
            value: 3,
            text: '약점포착',
            isGem: false,
          },
          {
            value: 5,
            text: '비열한 공격',
            isGem: false,
          },
          {
            value: 6,
            text: '꿰뚫는 폭발',
            isGem: false,
          },
          {
            value: 7,
            text: '폭격 지원',
            isGem: false,
          },
          {
            value: 8,
            text: '혜성 낙하',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 38100,
        class: 512,
        text: '메테오 스트림',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '마력 조절',
            isGem: false,
          },
          {
            value: 3,
            text: '약점포착',
            isGem: false,
          },
          {
            value: 5,
            text: '비열한 공격',
            isGem: false,
          },
          {
            value: 6,
            text: '꿰뚫는 폭발',
            isGem: false,
          },
          {
            value: 7,
            text: '폭격 지원',
            isGem: false,
          },
          {
            value: 8,
            text: '혜성 낙하',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 35140,
        class: 505,
        text: '명령 : M143 기관총',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '급소 사격',
            isGem: false,
          },
          {
            value: 2,
            text: '빠른 준비',
            isGem: false,
          },
          {
            value: 3,
            text: '정교한 명령',
            isGem: false,
          },
          {
            value: 5,
            text: '치명적인 사격',
            isGem: false,
          },
          {
            value: 7,
            text: '약육 사격',
            isGem: false,
          },
          {
            value: 8,
            text: '대구경 탄환',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 35110,
        class: 505,
        text: '명령 : 레이드 미사일',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '정교한 명령',
            isGem: false,
          },
          {
            value: 2,
            text: '코어 에너지 충전',
            isGem: false,
          },
          {
            value: 3,
            text: '배터리 방출',
            isGem: false,
          },
          {
            value: 6,
            text: '오르간 미사일',
            isGem: false,
          },
          {
            value: 7,
            text: '약점 포착',
            isGem: false,
          },
          {
            value: 8,
            text: '대형 미사일',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 35100,
        class: 505,
        text: '명령 : 베이비 드론',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '정교한 명령',
            isGem: false,
          },
          {
            value: 2,
            text: '급소 공격',
            isGem: false,
          },
          {
            value: 4,
            text: '플레임 베이비',
            isGem: false,
          },
          {
            value: 5,
            text: '썬더 베이비',
            isGem: false,
          },
          {
            value: 6,
            text: '코어 에너지 수급',
            isGem: false,
          },
          {
            value: 7,
            text: '총력전',
            isGem: false,
          },
          {
            value: 8,
            text: '일제 공격',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 35070,
        class: 505,
        text: '명령 : 블록케이드',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 2,
            text: '빠른 준비',
            isGem: false,
          },
          {
            value: 3,
            text: '급소 타격',
            isGem: false,
          },
          {
            value: 4,
            text: '폭렬 탄약',
            isGem: false,
          },
          {
            value: 5,
            text: '코어 에너지 충전',
            isGem: false,
          },
          {
            value: 6,
            text: '약점 포착',
            isGem: false,
          },
          {
            value: 7,
            text: '무차별 사격',
            isGem: false,
          },
          {
            value: 8,
            text: '완전 봉쇄',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 35090,
        class: 505,
        text: '명령 : 액티브 펄스',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 2,
            text: '정교한 명령',
            isGem: false,
          },
          {
            value: 4,
            text: '펄스 보호막',
            isGem: false,
          },
          {
            value: 5,
            text: '코어 에너지 충전',
            isGem: false,
          },
          {
            value: 6,
            text: '약육 강식',
            isGem: false,
          },
          {
            value: 7,
            text: '파문 펄스',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 35060,
        class: 505,
        text: '명령 : 카펫',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 3,
            text: '배터리 방출',
            isGem: false,
          },
          {
            value: 5,
            text: '폭렬 포화',
            isGem: false,
          },
          {
            value: 6,
            text: '화염 바다',
            isGem: false,
          },
          {
            value: 7,
            text: '약점 포착',
            isGem: false,
          },
          {
            value: 8,
            text: '초토화',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 35080,
        class: 505,
        text: '명령 : 플레어 빔',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '상흔',
            isGem: false,
          },
          {
            value: 2,
            text: '강화 레이저',
            isGem: false,
          },
          {
            value: 3,
            text: '빠른 준비',
            isGem: false,
          },
          {
            value: 4,
            text: '프리징 빔',
            isGem: false,
          },
          {
            value: 5,
            text: '라이트닝 빔',
            isGem: false,
          },
          {
            value: 6,
            text: '코어 에너지 충전',
            isGem: false,
          },
          {
            value: 7,
            text: '레이저 쇼',
            isGem: false,
          },
          {
            value: 8,
            text: '레이저 커팅',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 24090,
        class: 304,
        text: '무공탄',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '속도 강화',
            isGem: false,
          },
          {
            value: 3,
            text: '기동성 약화',
            isGem: false,
          },
          {
            value: 4,
            text: '관통하는 고통',
            isGem: false,
          },
          {
            value: 5,
            text: '과잉 공급',
            isGem: false,
          },
          {
            value: 6,
            text: '날카로운 공격',
            isGem: false,
          },
          {
            value: 7,
            text: '무아지경',
            isGem: false,
          },
          {
            value: 8,
            text: '마지막 한 발',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 25140,
        class: 402,
        text: '문라이트 소닉',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '암흑 공격',
            isGem: false,
          },
          {
            value: 2,
            text: '화염 공격',
            isGem: false,
          },
          {
            value: 3,
            text: '냉기 공격',
            isGem: false,
          },
          {
            value: 4,
            text: '빠른 준비',
            isGem: false,
          },
          {
            value: 5,
            text: '지속력 강화',
            isGem: false,
          },
          {
            value: 6,
            text: '집중 공격',
            isGem: false,
          },
          {
            value: 8,
            text: '쉐이드 소닉',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 20250,
        class: 203,
        text: '물의 정령',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '재빠른 시전',
            isGem: false,
          },
          {
            value: 2,
            text: '견고한 로브',
            isGem: false,
          },
          {
            value: 3,
            text: '마나 회복',
            isGem: false,
          },
          {
            value: 4,
            text: '진흙 정령',
            isGem: false,
          },
          {
            value: 5,
            text: '물보라 정령',
            isGem: false,
          },
          {
            value: 6,
            text: '약점포착',
            isGem: false,
          },
          {
            value: 7,
            text: '정령의 지혜',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 30220,
        class: 504,
        text: '미사일 폭격',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '원거리 설치',
            isGem: false,
          },
          {
            value: 3,
            text: '슬로우 효과',
            isGem: false,
          },
          {
            value: 4,
            text: '급소 폭격',
            isGem: false,
          },
          {
            value: 5,
            text: '약육강식',
            isGem: false,
          },
          {
            value: 6,
            text: '약점포착',
            isGem: false,
          },
          {
            value: 7,
            text: 'EMP 폭발',
            isGem: false,
          },
          {
            value: 8,
            text: '원자 폭탄',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 29200,
        class: 503,
        text: '민첩한 사격',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '마력 조절',
            isGem: false,
          },
          {
            value: 2,
            text: '재빠른 움직임',
            isGem: false,
          },
          {
            value: 3,
            text: '급소 공격',
            isGem: false,
          },
          {
            value: 4,
            text: '근접 사격',
            isGem: false,
          },
          {
            value: 6,
            text: '탁월한 기동성',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 38200,
        class: 512,
        text: '민첩한 사격',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 2,
            text: '재빠른 움직임',
            isGem: false,
          },
          {
            value: 3,
            text: '급소 공격',
            isGem: false,
          },
          {
            value: 4,
            text: '근접 사격',
            isGem: false,
          },
          {
            value: 6,
            text: '탁월한 기동성',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 23200,
        class: 303,
        text: '밀고 나가기',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '급소타격',
            isGem: false,
          },
          {
            value: 2,
            text: '단단한 갑옷',
            isGem: false,
          },
          {
            value: 4,
            text: '분노 표출',
            isGem: false,
          },
          {
            value: 5,
            text: '순간포착',
            isGem: false,
          },
          {
            value: 6,
            text: '꿰뚫는 일격',
            isGem: false,
          },
          {
            value: 7,
            text: '죽음의 문턱',
            isGem: false,
          },
          {
            value: 8,
            text: '난폭한 전진',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 22120,
        class: 302,
        text: '바람의 속삭임',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '바람의 축복',
            isGem: false,
          },
          {
            value: 2,
            text: '바람의 가호',
            isGem: false,
          },
          {
            value: 3,
            text: '바람의 맹세',
            isGem: false,
          },
          {
            value: 4,
            text: '전사의 용기',
            isGem: false,
          },
          {
            value: 5,
            text: '빠른 준비',
            isGem: false,
          },
          {
            value: 7,
            text: '공격 준비',
            isGem: false,
          },
          {
            value: 8,
            text: '초강풍',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 34110,
        class: 305,
        text: '반월섬',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '난무 특화',
            isGem: false,
          },
          {
            value: 3,
            text: '회전 올려치기',
            isGem: false,
          },
          {
            value: 4,
            text: '약점타격',
            isGem: false,
          },
          {
            value: 5,
            text: '이중 올려치기',
            isGem: false,
          },
          {
            value: 6,
            text: '최후의 판단',
            isGem: false,
          },
          {
            value: 7,
            text: '돌격 베기',
            isGem: false,
          },
          {
            value: 8,
            text: '강풍 베기',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 22320,
        class: 302,
        text: '방천격',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '엘리멘탈 갈취',
            isGem: false,
          },
          {
            value: 2,
            text: '약점포착',
            isGem: false,
          },
          {
            value: 4,
            text: '정의로운 빛',
            isGem: false,
          },
          {
            value: 5,
            text: '어둠 가르기',
            isGem: false,
          },
          {
            value: 6,
            text: '강렬한 전격',
            isGem: false,
          },
          {
            value: 7,
            text: '남다른 격',
            isGem: false,
          },
          {
            value: 8,
            text: '특출난 능력',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 39320,
        class: 312,
        text: '방천격',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '엘리멘탈 갈취',
            isGem: false,
          },
          {
            value: 2,
            text: '약점포착',
            isGem: false,
          },
          {
            value: 4,
            text: '정의로운 빛',
            isGem: false,
          },
          {
            value: 5,
            text: '어둠 가르기',
            isGem: false,
          },
          {
            value: 6,
            text: '강렬한 전격',
            isGem: false,
          },
          {
            value: 7,
            text: '남다른 격',
            isGem: false,
          },
          {
            value: 8,
            text: '특출난 능력',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 20200,
        class: 203,
        text: '방출된 의지',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 2,
            text: '마력 조절',
            isGem: false,
          },
          {
            value: 3,
            text: '기운 조절',
            isGem: false,
          },
          {
            value: 5,
            text: '혹한의 바람',
            isGem: false,
          },
          {
            value: 6,
            text: '모래 바람',
            isGem: false,
          },
          {
            value: 8,
            text: '마력 증폭',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 17100,
        class: 104,
        text: '방패 격동',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '빠른 준비',
            isGem: false,
          },
          {
            value: 2,
            text: '날렵한 움직임',
            isGem: false,
          },
          {
            value: 6,
            text: '방어 준비',
            isGem: false,
          },
          {
            value: 7,
            text: '두 번째 격동',
            isGem: false,
          },
          {
            value: 8,
            text: '강습',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 17050,
        class: 104,
        text: '방패 돌진',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '단단한 갑옷',
            isGem: false,
          },
          {
            value: 2,
            text: '빠른 준비',
            isGem: false,
          },
          {
            value: 3,
            text: '강화된 일격',
            isGem: false,
          },
          {
            value: 5,
            text: '보호막',
            isGem: false,
          },
          {
            value: 6,
            text: '가벼운 발걸음',
            isGem: false,
          },
          {
            value: 7,
            text: '끝나지 않은 공격',
            isGem: false,
          },
          {
            value: 8,
            text: '파괴 전차',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 17150,
        class: 104,
        text: '방패 밀치기',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 2,
            text: '방어 준비',
            isGem: false,
          },
          {
            value: 3,
            text: '날렵한 움직임',
            isGem: false,
          },
          {
            value: 4,
            text: '방패 강화',
            isGem: false,
          },
          {
            value: 6,
            text: '약점 포착',
            isGem: false,
          },
          {
            value: 7,
            text: '추가 타격',
            isGem: false,
          },
          {
            value: 8,
            text: '눈 먼 충격',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 17040,
        class: 104,
        text: '배쉬',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 2,
            text: '날렵한 움직임',
            isGem: false,
          },
          {
            value: 3,
            text: '전격 배쉬',
            isGem: false,
          },
          {
            value: 4,
            text: '공격 준비',
            isGem: false,
          },
          {
            value: 6,
            text: '방패 강화',
            isGem: false,
          },
          {
            value: 8,
            text: '메아리',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 35150,
        class: 505,
        text: '백플립 스트라이크',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 2,
            text: '탁월한 기동성',
            isGem: false,
          },
          {
            value: 6,
            text: '집중 공격',
            isGem: false,
          },
          {
            value: 7,
            text: '즉시 발화',
            isGem: false,
          },
          {
            value: 8,
            text: '폭탄 다발',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 17200,
        class: 104,
        text: '버스트 캐넌',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '관통탄',
            isGem: false,
          },
          {
            value: 2,
            text: '확산탄',
            isGem: false,
          },
          {
            value: 3,
            text: '고폭탄',
            isGem: false,
          },
          {
            value: 4,
            text: '정밀한 포격',
            isGem: false,
          },
          {
            value: 6,
            text: '과충전',
            isGem: false,
          },
          {
            value: 7,
            text: '회전포격',
            isGem: false,
          },
          {
            value: 8,
            text: '집중포화',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 39080,
        class: 312,
        text: '번개의 속삭임',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 3,
            text: '엘리멘탈 갈취',
            isGem: false,
          },
          {
            value: 4,
            text: '빠른 준비',
            isGem: false,
          },
          {
            value: 5,
            text: '전이되는 번개',
            isGem: false,
          },
          {
            value: 8,
            text: '약육강식',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 24110,
        class: 304,
        text: '번천장',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '빠른 준비',
            isGem: false,
          },
          {
            value: 2,
            text: '인내 강화',
            isGem: false,
          },
          {
            value: 4,
            text: '화염 공격',
            isGem: false,
          },
          {
            value: 6,
            text: '적극적인 공격',
            isGem: false,
          },
          {
            value: 8,
            text: '공간 흡착',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 24080,
        class: 304,
        text: '벽력장',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '선공 준비',
            isGem: false,
          },
          {
            value: 2,
            text: '인내 강화',
            isGem: false,
          },
          {
            value: 5,
            text: '냉기 공격',
            isGem: false,
          },
          {
            value: 6,
            text: '화염 공격',
            isGem: false,
          },
          {
            value: 7,
            text: '몰아치는 공격',
            isGem: false,
          },
          {
            value: 8,
            text: '잔인한 손아귀',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 25180,
        class: 402,
        text: '보이드 스트라이크',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '재빠른 손놀림',
            isGem: false,
          },
          {
            value: 3,
            text: '오브 조절',
            isGem: false,
          },
          {
            value: 4,
            text: '암흑 공격',
            isGem: false,
          },
          {
            value: 5,
            text: '공허 지대',
            isGem: false,
          },
          {
            value: 7,
            text: '블랙 익스플로젼',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 35040,
        class: 505,
        text: '불릿 해일',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '재빠른 손놀림',
            isGem: false,
          },
          {
            value: 4,
            text: '강화 사격',
            isGem: false,
          },
          {
            value: 5,
            text: '배터리 충전',
            isGem: false,
          },
          {
            value: 6,
            text: '약육 사격',
            isGem: false,
          },
          {
            value: 8,
            text: '강화 탄창',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 21060,
        class: 204,
        text: '불협화음',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '날렵한 시전',
            isGem: false,
          },
          {
            value: 2,
            text: '선율 증가',
            isGem: false,
          },
          {
            value: 3,
            text: '정신 강화',
            isGem: false,
          },
          {
            value: 4,
            text: '약육강식',
            isGem: false,
          },
          {
            value: 5,
            text: '무기력한 화음',
            isGem: false,
          },
          {
            value: 7,
            text: '살아있는 화음',
            isGem: false,
          },
          {
            value: 8,
            text: '화음 강화',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 22160,
        class: 302,
        text: '붕천퇴',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 3,
            text: '재빠른 발놀림',
            isGem: false,
          },
          {
            value: 4,
            text: '수룡각',
            isGem: false,
          },
          {
            value: 6,
            text: '공격 준비',
            isGem: false,
          },
          {
            value: 7,
            text: '파쇄의 질풍각',
            isGem: false,
          },
          {
            value: 8,
            text: '자원 증폭',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 39160,
        class: 312,
        text: '붕천퇴',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 3,
            text: '재빠른 발놀림',
            isGem: false,
          },
          {
            value: 4,
            text: '수룡각',
            isGem: false,
          },
          {
            value: 6,
            text: '바람의 축복',
            isGem: false,
          },
          {
            value: 7,
            text: '파쇄의 질풍각',
            isGem: false,
          },
          {
            value: 8,
            text: '자원 증폭',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 27080,
        class: 403,
        text: '브루탈 크로스',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '전기 공격',
            isGem: false,
          },
          {
            value: 3,
            text: '암흑 공격',
            isGem: false,
          },
          {
            value: 6,
            text: '치명적인 일격',
            isGem: false,
          },
          {
            value: 7,
            text: '기습 침투',
            isGem: false,
          },
          {
            value: 8,
            text: '크리티컬 크로스',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 26560,
        class: 404,
        text: '블랙 미스트',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '그림자 충전',
            isGem: false,
          },
          {
            value: 2,
            text: '탁월한 기동성',
            isGem: false,
          },
          {
            value: 4,
            text: '안개의 눈',
            isGem: false,
          },
          {
            value: 6,
            text: '퍼지는 안개',
            isGem: false,
          },
          {
            value: 8,
            text: '안개 폭발',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 16140,
        class: 102,
        text: '블러디 러쉬',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 25100,
        class: 402,
        text: '블레이드 댄스',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '암흑 공격',
            isGem: false,
          },
          {
            value: 2,
            text: '화염 공격',
            isGem: false,
          },
          {
            value: 4,
            text: '빠른 준비',
            isGem: false,
          },
          {
            value: 6,
            text: '급소 타격',
            isGem: false,
          },
          {
            value: 7,
            text: '마무리 강화',
            isGem: false,
          },
          {
            value: 8,
            text: '난도질',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 28150,
        class: 502,
        text: '블레이드 스톰',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '원거리 타격',
            isGem: false,
          },
          {
            value: 2,
            text: '재빠른 손놀림',
            isGem: false,
          },
          {
            value: 3,
            text: '실버 마스터',
            isGem: false,
          },
          {
            value: 4,
            text: '독 칼날',
            isGem: false,
          },
          {
            value: 5,
            text: '번개 칼날',
            isGem: false,
          },
          {
            value: 7,
            text: '블레이드 댄스',
            isGem: false,
          },
          {
            value: 8,
            text: '쉐도우 댄스',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 37200,
        class: 205,
        text: '블레이즈',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '발화',
            isGem: false,
          },
          {
            value: 3,
            text: '정신 강화',
            isGem: false,
          },
          {
            value: 5,
            text: '불꽃 확장',
            isGem: false,
          },
          {
            value: 6,
            text: '이글거리는 화염',
            isGem: false,
          },
          {
            value: 7,
            text: '약점 포착',
            isGem: false,
          },
          {
            value: 8,
            text: '꺼지지 않는 불꽃',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 25200,
        class: 402,
        text: '블리츠 러시',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 2,
            text: '탁월한 기동성',
            isGem: false,
          },
          {
            value: 3,
            text: '급소 타격',
            isGem: false,
          },
          {
            value: 5,
            text: '차지 강화',
            isGem: false,
          },
          {
            value: 6,
            text: '다크 차지',
            isGem: false,
          },
          {
            value: 7,
            text: '쉐도우 러시',
            isGem: false,
          },
          {
            value: 8,
            text: '듀얼 블리츠',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 26520,
        class: 404,
        text: '블링크',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '그림자 충전',
            isGem: false,
          },
          {
            value: 2,
            text: '꿰뚫는 일격',
            isGem: false,
          },
          {
            value: 3,
            text: '발목 절단',
            isGem: false,
          },
          {
            value: 4,
            text: '전진 베기',
            isGem: false,
          },
          {
            value: 5,
            text: '소용돌이 표창',
            isGem: false,
          },
          {
            value: 6,
            text: '분쇄 표창',
            isGem: false,
          },
          {
            value: 7,
            text: '죽음의 그림자',
            isGem: false,
          },
          {
            value: 8,
            text: '그림자 강화',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 30060,
        class: 504,
        text: '빙결탄',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 2,
            text: '마력 조절',
            isGem: false,
          },
          {
            value: 3,
            text: '빙결 강화',
            isGem: false,
          },
          {
            value: 4,
            text: '냉기 포탄',
            isGem: false,
          },
          {
            value: 5,
            text: '강화 포탄',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 21260,
        class: 204,
        text: '빛의 광시곡',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '마력 조절',
            isGem: false,
          },
          {
            value: 2,
            text: '빠른 준비',
            isGem: false,
          },
          {
            value: 3,
            text: '날렵한 시전',
            isGem: false,
          },
          {
            value: 7,
            text: '빛의 집중',
            isGem: false,
          },
          {
            value: 8,
            text: '빛의 보호',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 36050,
        class: 105,
        text: '빛의 충격',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 4,
            text: '신앙심',
            isGem: false,
          },
          {
            value: 5,
            text: '기동성 약화',
            isGem: false,
          },
          {
            value: 7,
            text: '빛나는 구체',
            isGem: false,
          },
          {
            value: 8,
            text: '강력한 충격',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 34550,
        class: 305,
        text: '사두룡격',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '화력 조절',
            isGem: false,
          },
          {
            value: 2,
            text: '재빠른 손놀림',
            isGem: false,
          },
          {
            value: 3,
            text: '창끝 공격',
            isGem: false,
          },
          {
            value: 4,
            text: '난폭한 찌르기',
            isGem: false,
          },
          {
            value: 5,
            text: '최후의 창',
            isGem: false,
          },
          {
            value: 7,
            text: '빠른 준비',
            isGem: false,
          },
          {
            value: 8,
            text: '덧난 상처',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 21020,
        class: 204,
        text: '사운드 쇼크',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '빠른 준비',
            isGem: false,
          },
          {
            value: 3,
            text: '폭파 유지',
            isGem: false,
          },
          {
            value: 5,
            text: '싸늘한 쇼크',
            isGem: false,
          },
          {
            value: 6,
            text: '쇼크 강화',
            isGem: false,
          },
          {
            value: 8,
            text: '곡사',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 21050,
        class: 204,
        text: '사운드 웨이브',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '날렵한 시전',
            isGem: false,
          },
          {
            value: 4,
            text: '마력 조절',
            isGem: false,
          },
          {
            value: 5,
            text: '인내의 웨이브',
            isGem: false,
          },
          {
            value: 6,
            text: '선율 증가',
            isGem: false,
          },
          {
            value: 7,
            text: '불타는 웨이브',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 21120,
        class: 204,
        text: '사운드 홀릭',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '사운드 집중',
            isGem: false,
          },
          {
            value: 2,
            text: '진압',
            isGem: false,
          },
          {
            value: 4,
            text: '지속력 강화',
            isGem: false,
          },
          {
            value: 5,
            text: '소리 방벽',
            isGem: false,
          },
          {
            value: 6,
            text: '기동성 약화',
            isGem: false,
          },
          {
            value: 7,
            text: '선율 증가',
            isGem: false,
          },
          {
            value: 8,
            text: '집중 포화',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 18130,
        class: 103,
        text: '사이즈믹 해머',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '빠른 준비',
            isGem: false,
          },
          {
            value: 3,
            text: '절대적인 힘',
            isGem: false,
          },
          {
            value: 4,
            text: '약육강식',
            isGem: false,
          },
          {
            value: 5,
            text: '뇌진탕',
            isGem: false,
          },
          {
            value: 6,
            text: '날카로운 벽',
            isGem: false,
          },
          {
            value: 7,
            text: '굶주린 힘',
            isGem: false,
          },
          {
            value: 8,
            text: '강화된 약점 포착',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 26820,
        class: 404,
        text: '사일런트 스매셔',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 3,
            text: '빠른 준비',
            isGem: false,
          },
          {
            value: 6,
            text: '그림자 잔상',
            isGem: false,
          },
          {
            value: 7,
            text: '지면 강타',
            isGem: false,
          },
          {
            value: 8,
            text: '압살',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 29020,
        class: 503,
        text: '사형 집행',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '가벼운 발놀림',
            isGem: false,
          },
          {
            value: 3,
            text: '급소 타격',
            isGem: false,
          },
          {
            value: 6,
            text: '사격 개시',
            isGem: false,
          },
          {
            value: 7,
            text: '대공 사격',
            isGem: false,
          },
          {
            value: 8,
            text: '무차별 난사',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 30070,
        class: 504,
        text: '산탄',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 3,
            text: '약점포착',
            isGem: false,
          },
          {
            value: 4,
            text: '급소 타격',
            isGem: false,
          },
          {
            value: 5,
            text: '꿰뚫는 일격',
            isGem: false,
          },
          {
            value: 7,
            text: '섬멸 산탄',
            isGem: false,
          },
          {
            value: 8,
            text: '내부 발화',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 22180,
        class: 302,
        text: '삼연권',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '암흑 공격',
            isGem: false,
          },
          {
            value: 2,
            text: '엘리멘탈 갈취',
            isGem: false,
          },
          {
            value: 3,
            text: '화염 공격',
            isGem: false,
          },
          {
            value: 4,
            text: '단단한 갑옷',
            isGem: false,
          },
          {
            value: 5,
            text: '성장 공격',
            isGem: false,
          },
          {
            value: 6,
            text: '무자비',
            isGem: false,
          },
          {
            value: 7,
            text: '뇌신권',
            isGem: false,
          },
          {
            value: 8,
            text: '오연권',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 39180,
        class: 312,
        text: '삼연권',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '암흑 공격',
            isGem: false,
          },
          {
            value: 2,
            text: '엘리멘탈 갈취',
            isGem: false,
          },
          {
            value: 3,
            text: '화염 공격',
            isGem: false,
          },
          {
            value: 4,
            text: '단단한 갑옷',
            isGem: false,
          },
          {
            value: 5,
            text: '성장 공격',
            isGem: false,
          },
          {
            value: 6,
            text: '무자비',
            isGem: false,
          },
          {
            value: 7,
            text: '뇌신권',
            isGem: false,
          },
          {
            value: 8,
            text: '오연권',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 26110,
        class: 404,
        text: '샤벨 스팅거',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 4,
            text: '두개의 그림자',
            isGem: false,
          },
          {
            value: 5,
            text: '날카로운 단검',
            isGem: false,
          },
          {
            value: 7,
            text: '낙인 활성',
            isGem: false,
          },
          {
            value: 8,
            text: '속전속결',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 27250,
        class: 403,
        text: '샤펀 컷',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '탁월한 기동성',
            isGem: false,
          },
          {
            value: 2,
            text: '지속력 강화',
            isGem: false,
          },
          {
            value: 3,
            text: '강화된 베기',
            isGem: false,
          },
          {
            value: 4,
            text: '지독한 출혈',
            isGem: false,
          },
          {
            value: 5,
            text: '수직 베기',
            isGem: false,
          },
          {
            value: 7,
            text: '크리티컬 컷',
            isGem: false,
          },
          {
            value: 8,
            text: '데몬 컷',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 28110,
        class: 502,
        text: '샤프 슈터',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '급소 타격',
            isGem: false,
          },
          {
            value: 3,
            text: '마력 조절',
            isGem: false,
          },
          {
            value: 5,
            text: '고통스러운 사격',
            isGem: false,
          },
          {
            value: 6,
            text: '약점 포착',
            isGem: false,
          },
          {
            value: 7,
            text: '집중 사격',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 29170,
        class: 503,
        text: '샷건 연사',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '근접 사격',
            isGem: false,
          },
          {
            value: 2,
            text: '풀레인지',
            isGem: false,
          },
          {
            value: 4,
            text: '강화된 사격',
            isGem: false,
          },
          {
            value: 6,
            text: '빠른 준비',
            isGem: false,
          },
          {
            value: 7,
            text: '연장 사격',
            isGem: false,
          },
          {
            value: 8,
            text: '특수 탄환',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 38170,
        class: 512,
        text: '샷건 연사',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '기습',
            isGem: false,
          },
          {
            value: 2,
            text: '사면초가',
            isGem: false,
          },
          {
            value: 4,
            text: '강화된 사격',
            isGem: false,
          },
          {
            value: 6,
            text: '빠른 준비',
            isGem: false,
          },
          {
            value: 7,
            text: '연장 사격',
            isGem: false,
          },
          {
            value: 8,
            text: '특수 탄환',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 29110,
        class: 503,
        text: '샷건의 지배자',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '풀레인지',
            isGem: false,
          },
          {
            value: 2,
            text: '재빠른 손놀림',
            isGem: false,
          },
          {
            value: 3,
            text: '근접 사격',
            isGem: false,
          },
          {
            value: 4,
            text: '약점 포착',
            isGem: false,
          },
          {
            value: 5,
            text: '강화 사격',
            isGem: false,
          },
          {
            value: 6,
            text: '신속한 준비',
            isGem: false,
          },
          {
            value: 7,
            text: '지배자의 의지',
            isGem: false,
          },
          {
            value: 8,
            text: '군림하는 자',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 37220,
        class: 205,
        text: '서릿발',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '오한',
            isGem: false,
          },
          {
            value: 2,
            text: '깨달음',
            isGem: false,
          },
          {
            value: 3,
            text: '날렵한 시전',
            isGem: false,
          },
          {
            value: 4,
            text: '강화된 일격',
            isGem: false,
          },
          {
            value: 7,
            text: '서리 파편',
            isGem: false,
          },
          {
            value: 8,
            text: '서리 지대',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 25040,
        class: 402,
        text: '서프라이즈 어택',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 2,
            text: '급소 타격',
            isGem: false,
          },
          {
            value: 4,
            text: '탁월한 기동성',
            isGem: false,
          },
          {
            value: 5,
            text: '기동성 약화',
            isGem: false,
          },
          {
            value: 6,
            text: '예리한 일격',
            isGem: false,
          },
          {
            value: 7,
            text: '검풍 잔영',
            isGem: false,
          },
          {
            value: 8,
            text: '잔인한 공격',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 34140,
        class: 305,
        text: '선풍참혼',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '빠른 준비',
            isGem: false,
          },
          {
            value: 2,
            text: '화력 조절',
            isGem: false,
          },
          {
            value: 3,
            text: '마력 조절',
            isGem: false,
          },
          {
            value: 5,
            text: '신속 전진',
            isGem: false,
          },
          {
            value: 6,
            text: '광휘의 창',
            isGem: false,
          },
          {
            value: 7,
            text: '통제',
            isGem: false,
          },
          {
            value: 8,
            text: '강화된 뇌진탕',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 36090,
        class: 105,
        text: '섬광 베기',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '단단한 갑옷',
            isGem: false,
          },
          {
            value: 2,
            text: '급소 타격',
            isGem: false,
          },
          {
            value: 3,
            text: '날렵한 움직임',
            isGem: false,
          },
          {
            value: 4,
            text: '성장 공격',
            isGem: false,
          },
          {
            value: 5,
            text: '빠른 준비',
            isGem: false,
          },
          {
            value: 6,
            text: '힘의 방출',
            isGem: false,
          },
          {
            value: 7,
            text: '재빠른 검술',
            isGem: false,
          },
          {
            value: 8,
            text: '변화된 검술',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 36040,
        class: 105,
        text: '섬광 찌르기',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 2,
            text: '빠른 준비',
            isGem: false,
          },
          {
            value: 3,
            text: '약육 강식',
            isGem: false,
          },
          {
            value: 4,
            text: '꿰뚫는 일격',
            isGem: false,
          },
          {
            value: 5,
            text: '정교한 검술',
            isGem: false,
          },
          {
            value: 6,
            text: '연속 공격',
            isGem: false,
          },
          {
            value: 7,
            text: '섬광 강화',
            isGem: false,
          },
          {
            value: 8,
            text: '변화된 검술',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 22060,
        class: 302,
        text: '섬열란아',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '성스러운 공격',
            isGem: false,
          },
          {
            value: 2,
            text: '암흑 공격',
            isGem: false,
          },
          {
            value: 4,
            text: '타격의 달인',
            isGem: false,
          },
          {
            value: 5,
            text: '빠른 일격',
            isGem: false,
          },
          {
            value: 6,
            text: '약점포착',
            isGem: false,
          },
          {
            value: 7,
            text: '흥분한 일격',
            isGem: false,
          },
          {
            value: 8,
            text: '득도',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 39060,
        class: 312,
        text: '섬열란아',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '성스러운 공격',
            isGem: false,
          },
          {
            value: 2,
            text: '암흑 공격',
            isGem: false,
          },
          {
            value: 4,
            text: '타격의 달인',
            isGem: false,
          },
          {
            value: 5,
            text: '빠른 일격',
            isGem: false,
          },
          {
            value: 6,
            text: '약점포착',
            isGem: false,
          },
          {
            value: 7,
            text: '흥분한 일격',
            isGem: false,
          },
          {
            value: 8,
            text: '득도',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 24040,
        class: 304,
        text: '섬열파',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '인내 강화',
            isGem: false,
          },
          {
            value: 3,
            text: '약점포착',
            isGem: false,
          },
          {
            value: 5,
            text: '무자비',
            isGem: false,
          },
          {
            value: 7,
            text: '맹렬한 습격',
            isGem: false,
          },
          {
            value: 8,
            text: '혼신의 포격',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 24140,
        class: 304,
        text: '섭물진기',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '단단한 갑옷',
            isGem: false,
          },
          {
            value: 2,
            text: '빠른 준비',
            isGem: false,
          },
          {
            value: 3,
            text: '인내 강화',
            isGem: false,
          },
          {
            value: 5,
            text: '약점포착',
            isGem: false,
          },
          {
            value: 6,
            text: '공격 강화',
            isGem: false,
          },
          {
            value: 7,
            text: '필사적인 공격',
            isGem: false,
          },
          {
            value: 8,
            text: '예리한 판단',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 19240,
        class: 202,
        text: '세렌디피티',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '꿰뚫는 일격',
            isGem: false,
          },
          {
            value: 2,
            text: '눈속임',
            isGem: false,
          },
          {
            value: 3,
            text: '정신 강화',
            isGem: false,
          },
          {
            value: 4,
            text: '우연한 일격',
            isGem: false,
          },
          {
            value: 5,
            text: '우연한 강타',
            isGem: false,
          },
          {
            value: 6,
            text: '강화된 일격',
            isGem: false,
          },
          {
            value: 7,
            text: '연속된 어둠',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 19140,
        class: 202,
        text: '셀레스티얼 레인',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '날렵한 움직임',
            isGem: false,
          },
          {
            value: 2,
            text: '급소 타격',
            isGem: false,
          },
          {
            value: 3,
            text: '마력 조절',
            isGem: false,
          },
          {
            value: 4,
            text: '파멸의 카드',
            isGem: false,
          },
          {
            value: 5,
            text: '기동성 약화',
            isGem: false,
          },
          {
            value: 6,
            text: '강화된 일격',
            isGem: false,
          },
          {
            value: 7,
            text: '폭우',
            isGem: false,
          },
          {
            value: 8,
            text: '약점 포착',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 16600,
        class: 102,
        text: '소드 스톰',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '날렵한 움직임',
            isGem: false,
          },
          {
            value: 2,
            text: '빠른 준비',
            isGem: false,
          },
          {
            value: 3,
            text: '급소 타격',
            isGem: false,
          },
          {
            value: 4,
            text: '후폭풍',
            isGem: false,
          },
          {
            value: 5,
            text: '약점 포착',
            isGem: false,
          },
          {
            value: 7,
            text: '화염 폭풍',
            isGem: false,
          },
          {
            value: 8,
            text: '지진 파동',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 25110,
        class: 402,
        text: '소울 앱소버',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 3,
            text: '재빠른 손놀림',
            isGem: false,
          },
          {
            value: 4,
            text: '암흑 공격',
            isGem: false,
          },
          {
            value: 5,
            text: '화염 공격',
            isGem: false,
          },
          {
            value: 6,
            text: '냉기 공격',
            isGem: false,
          },
          {
            value: 7,
            text: '강력한 찌르기',
            isGem: false,
          },
          {
            value: 8,
            text: '반 가르기',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 16060,
        class: 102,
        text: '숄더 차지',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '보호막 효과',
            isGem: false,
          },
          {
            value: 2,
            text: '타오르는 분노',
            isGem: false,
          },
          {
            value: 3,
            text: '탁월한 기동성',
            isGem: false,
          },
          {
            value: 4,
            text: '연속 돌진',
            isGem: false,
          },
          {
            value: 5,
            text: '내려치기',
            isGem: false,
          },
          {
            value: 7,
            text: '지진 효과',
            isGem: false,
          },
          {
            value: 8,
            text: '분노 폭발',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 21250,
        class: 204,
        text: '수호의 연주',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 2,
            text: '정신 강화',
            isGem: false,
          },
          {
            value: 3,
            text: '날렵한 시전',
            isGem: false,
          },
          {
            value: 4,
            text: '끝나지 않는 수호',
            isGem: false,
          },
          {
            value: 5,
            text: '강력한 수호',
            isGem: false,
          },
          {
            value: 6,
            text: '수호의 응징',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 23150,
        class: 303,
        text: '순간 타격',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 2,
            text: '복식 강화',
            isGem: false,
          },
          {
            value: 3,
            text: '집중',
            isGem: false,
          },
          {
            value: 4,
            text: '위험한 계약',
            isGem: false,
          },
          {
            value: 5,
            text: '정밀함',
            isGem: false,
          },
          {
            value: 6,
            text: '역작용',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 20050,
        class: 203,
        text: '순간 폭발',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '통찰력',
            isGem: false,
          },
          {
            value: 3,
            text: '기운 조절',
            isGem: false,
          },
          {
            value: 4,
            text: '급소 폭발',
            isGem: false,
          },
          {
            value: 5,
            text: '눈부신 폭발',
            isGem: false,
          },
          {
            value: 6,
            text: '약점포착',
            isGem: false,
          },
          {
            value: 7,
            text: '대폭발',
            isGem: false,
          },
          {
            value: 8,
            text: '폭발의 덫',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 24240,
        class: 304,
        text: '순보',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '끊임없는 열정',
            isGem: false,
          },
          {
            value: 3,
            text: '탁월한 기동성',
            isGem: false,
          },
          {
            value: 5,
            text: '미끄러운 갑옷',
            isGem: false,
          },
          {
            value: 6,
            text: '승리의 환호',
            isGem: false,
          },
          {
            value: 7,
            text: '변하는 시공간',
            isGem: false,
          },
          {
            value: 8,
            text: '매서운 움직임',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 37320,
        class: 205,
        text: '숭고한 해일',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '정신 강화',
            isGem: false,
          },
          {
            value: 2,
            text: '빠른 준비',
            isGem: false,
          },
          {
            value: 3,
            text: '깨달음',
            isGem: false,
          },
          {
            value: 5,
            text: '추가 폭발',
            isGem: false,
          },
          {
            value: 6,
            text: '진화된 해일',
            isGem: false,
          },
          {
            value: 7,
            text: '약점 포착',
            isGem: false,
          },
          {
            value: 8,
            text: '붉은 해일',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 26070,
        class: 404,
        text: '쉐도우 닷',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 4,
            text: '빠른 준비',
            isGem: false,
          },
          {
            value: 5,
            text: '치명적인 단검',
            isGem: false,
          },
          {
            value: 7,
            text: '죽음의 일격',
            isGem: false,
          },
          {
            value: 8,
            text: '급습 활성',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 26600,
        class: 404,
        text: '쉐도우 스톰',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '그림자 충전',
            isGem: false,
          },
          {
            value: 2,
            text: '치명적인 그림자',
            isGem: false,
          },
          {
            value: 3,
            text: '꿰뚫는 일격',
            isGem: false,
          },
          {
            value: 4,
            text: '난무 강화',
            isGem: false,
          },
          {
            value: 5,
            text: '빠른 준비',
            isGem: false,
          },
          {
            value: 6,
            text: '마침표',
            isGem: false,
          },
          {
            value: 7,
            text: '검은 폭풍',
            isGem: false,
          },
          {
            value: 8,
            text: '그림자 지대',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 26570,
        class: 404,
        text: '쉐도우 트랩',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '치명적인 그림자',
            isGem: false,
          },
          {
            value: 2,
            text: '날렵한 몸놀림',
            isGem: false,
          },
          {
            value: 4,
            text: '도약',
            isGem: false,
          },
          {
            value: 5,
            text: '그림자 늪',
            isGem: false,
          },
          {
            value: 6,
            text: '그림자 올가미',
            isGem: false,
          },
          {
            value: 7,
            text: '연속 공격',
            isGem: false,
          },
          {
            value: 8,
            text: '그림자 활성',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 20160,
        class: 203,
        text: '슈르디',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '충돌 무시',
            isGem: false,
          },
          {
            value: 3,
            text: '빛의 성장',
            isGem: false,
          },
          {
            value: 5,
            text: '덩치 슈르디',
            isGem: false,
          },
          {
            value: 6,
            text: '허영이 슈르디',
            isGem: false,
          },
          {
            value: 7,
            text: '짜릿한 빛',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 28220,
        class: 502,
        text: '스나이프',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '빠른 준비',
            isGem: false,
          },
          {
            value: 2,
            text: '재빠른 손놀림',
            isGem: false,
          },
          {
            value: 4,
            text: '완벽함',
            isGem: false,
          },
          {
            value: 6,
            text: '약점 포착',
            isGem: false,
          },
          {
            value: 7,
            text: '길리슈트',
            isGem: false,
          },
          {
            value: 8,
            text: '손쉬운 먹잇감',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 19320,
        class: 202,
        text: '스크래치 딜러',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '탁월한 기동성',
            isGem: false,
          },
          {
            value: 4,
            text: '예리한 일격',
            isGem: false,
          },
          {
            value: 5,
            text: '퍼스트 스크래치',
            isGem: false,
          },
          {
            value: 6,
            text: '약점 공격',
            isGem: false,
          },
          {
            value: 7,
            text: '연속 공격',
            isGem: false,
          },
          {
            value: 8,
            text: '안전 장치',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 16090,
        class: 102,
        text: '스트라이크 웨이브',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '파동',
            isGem: false,
          },
          {
            value: 2,
            text: '빠른 축적',
            isGem: false,
          },
          {
            value: 3,
            text: '빠른 준비',
            isGem: false,
          },
          {
            value: 5,
            text: '한계 돌파',
            isGem: false,
          },
          {
            value: 6,
            text: '폭파',
            isGem: false,
          },
          {
            value: 7,
            text: '블레이즈 웨이브',
            isGem: false,
          },
          {
            value: 8,
            text: '대지 뒤집기',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 19150,
        class: 202,
        text: '스트림 오브 엣지',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 2,
            text: '가속 스트림',
            isGem: false,
          },
          {
            value: 3,
            text: '엣지 밤',
            isGem: false,
          },
          {
            value: 4,
            text: '데스 휠',
            isGem: false,
          },
          {
            value: 5,
            text: '썬더 스트림',
            isGem: false,
          },
          {
            value: 6,
            text: '다크니스 엣지',
            isGem: false,
          },
          {
            value: 7,
            text: '스트림 웨이브',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 21090,
        class: 204,
        text: '스티그마',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 2,
            text: '날렵한 시전',
            isGem: false,
          },
          {
            value: 4,
            text: '얼어붙은 낙인',
            isGem: false,
          },
          {
            value: 6,
            text: '폭풍의 낙인',
            isGem: false,
          },
          {
            value: 7,
            text: '고통의 낙인',
            isGem: false,
          },
          {
            value: 8,
            text: '선율 증가',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 19190,
        class: 202,
        text: '스파이럴 엣지',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '정신 강화',
            isGem: false,
          },
          {
            value: 2,
            text: '빠른 준비',
            isGem: false,
          },
          {
            value: 3,
            text: '탁월한 기동성',
            isGem: false,
          },
          {
            value: 5,
            text: '무자비한 사격',
            isGem: false,
          },
          {
            value: 6,
            text: '급소 포착',
            isGem: false,
          },
          {
            value: 7,
            text: '카드 폭풍',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 29060,
        class: 503,
        text: '스파이럴 플레임',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '냉기탄',
            isGem: false,
          },
          {
            value: 2,
            text: '맹렬한 불꽃',
            isGem: false,
          },
          {
            value: 3,
            text: '재빠른 조준',
            isGem: false,
          },
          {
            value: 4,
            text: '성장 탄환',
            isGem: false,
          },
          {
            value: 5,
            text: '고속 탄환',
            isGem: false,
          },
          {
            value: 6,
            text: '마무리 사격',
            isGem: false,
          },
          {
            value: 7,
            text: '총열 강화',
            isGem: false,
          },
          {
            value: 8,
            text: '후폭풍',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 38060,
        class: 512,
        text: '스파이럴 플레임',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '냉기탄',
            isGem: false,
          },
          {
            value: 2,
            text: '맹렬한 불꽃',
            isGem: false,
          },
          {
            value: 3,
            text: '재빠른 조준',
            isGem: false,
          },
          {
            value: 4,
            text: '성장 탄환',
            isGem: false,
          },
          {
            value: 5,
            text: '고속 탄환',
            isGem: false,
          },
          {
            value: 6,
            text: '마무리 사격',
            isGem: false,
          },
          {
            value: 7,
            text: '총열 강화',
            isGem: false,
          },
          {
            value: 8,
            text: '후폭풍',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 27140,
        class: 403,
        text: '스피닝 다이브',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '재빠른 손놀림',
            isGem: false,
          },
          {
            value: 2,
            text: '탁월한 기동성',
            isGem: false,
          },
          {
            value: 3,
            text: '무방비 표적',
            isGem: false,
          },
          {
            value: 5,
            text: '스피닝 강화',
            isGem: false,
          },
          {
            value: 7,
            text: '피니쉬 다이브',
            isGem: false,
          },
          {
            value: 8,
            text: '스피닝 마스터',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 26050,
        class: 404,
        text: '스피닝 대거',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 5,
            text: '회전력 강화',
            isGem: false,
          },
          {
            value: 6,
            text: '최후의 칼날',
            isGem: false,
          },
          {
            value: 7,
            text: '그림자 잔상',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 27230,
        class: 403,
        text: '스피닝 웨폰',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '출혈 효과',
            isGem: false,
          },
          {
            value: 2,
            text: '날렵한 움직임',
            isGem: false,
          },
          {
            value: 3,
            text: '빠른 준비',
            isGem: false,
          },
          {
            value: 4,
            text: '지속력 강화',
            isGem: false,
          },
          {
            value: 6,
            text: '즉시 처결',
            isGem: false,
          },
          {
            value: 7,
            text: '꿰뚫는 날',
            isGem: false,
          },
          {
            value: 8,
            text: '잠식 해방',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 26060,
        class: 404,
        text: '스피릿 캐치',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 4,
            text: '도약',
            isGem: false,
          },
          {
            value: 5,
            text: '발목 절단',
            isGem: false,
          },
          {
            value: 6,
            text: '날카로운 단검',
            isGem: false,
          },
          {
            value: 7,
            text: '그림자 잔상',
            isGem: false,
          },
          {
            value: 8,
            text: '속전속결',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 17160,
        class: 104,
        text: '스피어 샷',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '단단한 갑옷',
            isGem: false,
          },
          {
            value: 2,
            text: '날렵한 움직임',
            isGem: false,
          },
          {
            value: 4,
            text: '강화된 일격',
            isGem: false,
          },
          {
            value: 5,
            text: '약점 포착',
            isGem: false,
          },
          {
            value: 7,
            text: '폭멸창',
            isGem: false,
          },
          {
            value: 8,
            text: '근접폭발',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 25120,
        class: 402,
        text: '스핀 커터',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 3,
            text: '재빠른 손놀림',
            isGem: false,
          },
          {
            value: 4,
            text: '단단한 갑옷',
            isGem: false,
          },
          {
            value: 5,
            text: '강회전',
            isGem: false,
          },
          {
            value: 6,
            text: '빠른 준비',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 27070,
        class: 403,
        text: '슬래셔',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '급소 베기',
            isGem: false,
          },
          {
            value: 2,
            text: '출혈 효과',
            isGem: false,
          },
          {
            value: 3,
            text: '재빠른 손놀림',
            isGem: false,
          },
          {
            value: 5,
            text: '전진 베기',
            isGem: false,
          },
          {
            value: 6,
            text: '예리한 일격',
            isGem: false,
          },
          {
            value: 7,
            text: '강력한 일격',
            isGem: false,
          },
          {
            value: 8,
            text: '일렉트로닉 쇼크',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 19310,
        class: 202,
        text: '시크릿 가든',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '빠른 준비',
            isGem: false,
          },
          {
            value: 2,
            text: '정신 집중',
            isGem: false,
          },
          {
            value: 3,
            text: '급소 타격',
            isGem: false,
          },
          {
            value: 4,
            text: '완전한 비밀',
            isGem: false,
          },
          {
            value: 5,
            text: '스톰 가든',
            isGem: false,
          },
          {
            value: 6,
            text: '다크니스 가든',
            isGem: false,
          },
          {
            value: 7,
            text: '시크릿 찬스',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 19210,
        class: 202,
        text: '신비한 쇄도',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '정신 강화',
            isGem: false,
          },
          {
            value: 3,
            text: '퀵 드로',
            isGem: false,
          },
          {
            value: 5,
            text: '쇄도 집중',
            isGem: false,
          },
          {
            value: 6,
            text: '기동성 약화',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 36120,
        class: 105,
        text: '신성 지역',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '빠른 준비',
            isGem: false,
          },
          {
            value: 2,
            text: '기동성 약화',
            isGem: false,
          },
          {
            value: 4,
            text: '약육강식',
            isGem: false,
          },
          {
            value: 5,
            text: '신성한 표식',
            isGem: false,
          },
          {
            value: 6,
            text: '가호',
            isGem: false,
          },
          {
            value: 7,
            text: '드넓은 은총',
            isGem: false,
          },
          {
            value: 8,
            text: '빛의 결집',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 36100,
        class: 105,
        text: '신성 폭발',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '단단한 갑옷',
            isGem: false,
          },
          {
            value: 2,
            text: '강화된 일격',
            isGem: false,
          },
          {
            value: 3,
            text: '재빠른 손놀림',
            isGem: false,
          },
          {
            value: 6,
            text: '폭발 강화',
            isGem: false,
          },
          {
            value: 7,
            text: '준비된 폭발',
            isGem: false,
          },
          {
            value: 8,
            text: '폭발의 여파',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 36190,
        class: 105,
        text: '신성검',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '자세 잡기',
            isGem: false,
          },
          {
            value: 2,
            text: '성흔',
            isGem: false,
          },
          {
            value: 4,
            text: '빛의 분출',
            isGem: false,
          },
          {
            value: 5,
            text: '약점 포착',
            isGem: false,
          },
          {
            value: 6,
            text: '급소 타격',
            isGem: false,
          },
          {
            value: 7,
            text: '응축된 기운',
            isGem: false,
          },
          {
            value: 8,
            text: '빛의 해방',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 36140,
        class: 105,
        text: '신성한 보호',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '마력 조절',
            isGem: false,
          },
          {
            value: 2,
            text: '재빠른 손놀림',
            isGem: false,
          },
          {
            value: 3,
            text: '가벼운 발걸음',
            isGem: false,
          },
          {
            value: 5,
            text: '효과 유지',
            isGem: false,
          },
          {
            value: 6,
            text: '보호 강화',
            isGem: false,
          },
          {
            value: 7,
            text: '천둥의 보호',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 36170,
        class: 105,
        text: '신의 분노',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '약육 강식 ',
            isGem: false,
          },
          {
            value: 2,
            text: '날카로운 일격',
            isGem: false,
          },
          {
            value: 5,
            text: '신앙심',
            isGem: false,
          },
          {
            value: 6,
            text: '천둥',
            isGem: false,
          },
          {
            value: 7,
            text: '빛의 수호자',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 36150,
        class: 105,
        text: '신의 율법',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '보호막',
            isGem: false,
          },
          {
            value: 2,
            text: '숙련된 지혜',
            isGem: false,
          },
          {
            value: 3,
            text: '율법 강화',
            isGem: false,
          },
          {
            value: 6,
            text: '벼락',
            isGem: false,
          },
          {
            value: 8,
            text: '빛의 수호자',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 23060,
        class: 303,
        text: '심판',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '급소타격',
            isGem: false,
          },
          {
            value: 2,
            text: '집중',
            isGem: false,
          },
          {
            value: 4,
            text: '무방비 표적',
            isGem: false,
          },
          {
            value: 5,
            text: '무식한 타격',
            isGem: false,
          },
          {
            value: 6,
            text: '즉시 파괴',
            isGem: false,
          },
          {
            value: 7,
            text: '진정한 심판',
            isGem: false,
          },
          {
            value: 8,
            text: '매의 발톱',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 36060,
        class: 105,
        text: '심판의 빛',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 2,
            text: '강화된 일격',
            isGem: false,
          },
          {
            value: 3,
            text: '마력 조절',
            isGem: false,
          },
          {
            value: 5,
            text: '신앙심',
            isGem: false,
          },
          {
            value: 6,
            text: '약점 포착',
            isGem: false,
          },
          {
            value: 7,
            text: '지속력 강화',
            isGem: false,
          },
          {
            value: 8,
            text: '정의의 빛',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 29050,
        class: 503,
        text: '심판의 시간',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '빠른 준비',
            isGem: false,
          },
          {
            value: 2,
            text: '마력 조절',
            isGem: false,
          },
          {
            value: 4,
            text: '징역 선고',
            isGem: false,
          },
          {
            value: 5,
            text: '최종 판결',
            isGem: false,
          },
          {
            value: 7,
            text: '강화 파편',
            isGem: false,
          },
          {
            value: 8,
            text: '확산 파편',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 38050,
        class: 512,
        text: '심판의 시간',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '빠른 준비',
            isGem: false,
          },
          {
            value: 2,
            text: '마력 조절',
            isGem: false,
          },
          {
            value: 4,
            text: '징역 선고',
            isGem: false,
          },
          {
            value: 5,
            text: '최종 판결',
            isGem: false,
          },
          {
            value: 7,
            text: '강화 파편',
            isGem: false,
          },
          {
            value: 8,
            text: '확산 파편',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 29210,
        class: 503,
        text: '썸머솔트샷',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '마력 조절',
            isGem: false,
          },
          {
            value: 2,
            text: '재빠른 움직임',
            isGem: false,
          },
          {
            value: 4,
            text: '화상 효과',
            isGem: false,
          },
          {
            value: 5,
            text: '급소 사격',
            isGem: false,
          },
          {
            value: 8,
            text: '슈퍼 아머',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 38210,
        class: 512,
        text: '썸머솔트샷',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '마력 조절',
            isGem: false,
          },
          {
            value: 2,
            text: '재빠른 움직임',
            isGem: false,
          },
          {
            value: 4,
            text: '화상 효과',
            isGem: false,
          },
          {
            value: 5,
            text: '급소 사격',
            isGem: false,
          },
          {
            value: 8,
            text: '슈퍼 아머',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 20060,
        class: 203,
        text: '쏜살 바람새',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '정신 강화',
            isGem: false,
          },
          {
            value: 3,
            text: '날렵한 움직임',
            isGem: false,
          },
          {
            value: 4,
            text: '화염새',
            isGem: false,
          },
          {
            value: 5,
            text: '얼음새',
            isGem: false,
          },
          {
            value: 7,
            text: '집단 비행',
            isGem: false,
          },
          {
            value: 8,
            text: '어미 바람새',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 27200,
        class: 403,
        text: '쓰러스트 임팩트',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 4,
            text: '기절 효과',
            isGem: false,
          },
          {
            value: 5,
            text: '강화된 폭발',
            isGem: false,
          },
          {
            value: 6,
            text: '깊게 찌르기',
            isGem: false,
          },
          {
            value: 7,
            text: '잠식하는 힘',
            isGem: false,
          },
          {
            value: 8,
            text: '원혼 폭발',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 35190,
        class: 505,
        text: '아발란체',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 2,
            text: '약점 포착',
            isGem: false,
          },
          {
            value: 4,
            text: '빠른 준비',
            isGem: false,
          },
          {
            value: 5,
            text: '깔끔한 연계',
            isGem: false,
          },
          {
            value: 6,
            text: '영점 조준',
            isGem: false,
          },
          {
            value: 7,
            text: '간결한 마무리',
            isGem: false,
          },
          {
            value: 8,
            text: '결정타',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 37250,
        class: 205,
        text: '아이스 애로우',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '오한',
            isGem: false,
          },
          {
            value: 2,
            text: '깨달음',
            isGem: false,
          },
          {
            value: 3,
            text: '빠른 준비',
            isGem: false,
          },
          {
            value: 4,
            text: '꿰뚫는 일격',
            isGem: false,
          },
          {
            value: 7,
            text: '얼음 송곳',
            isGem: false,
          },
          {
            value: 8,
            text: '서리 폭격',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 28040,
        class: 502,
        text: '아토믹 애로우',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '마력 조절',
            isGem: false,
          },
          {
            value: 2,
            text: '재빠른 손놀림',
            isGem: false,
          },
          {
            value: 4,
            text: '무거운 폭탄',
            isGem: false,
          },
          {
            value: 5,
            text: '불꽃 화약',
            isGem: false,
          },
          {
            value: 6,
            text: '화살촉 강화',
            isGem: false,
          },
          {
            value: 7,
            text: '전격 화살',
            isGem: false,
          },
          {
            value: 8,
            text: '긴 도화선',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 28080,
        class: 502,
        text: '애로우 샤워',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '재빠른 손놀림',
            isGem: false,
          },
          {
            value: 2,
            text: '마력 조절',
            isGem: false,
          },
          {
            value: 4,
            text: '지속력 강화',
            isGem: false,
          },
          {
            value: 5,
            text: '화염 세례',
            isGem: false,
          },
          {
            value: 6,
            text: '전기 세례',
            isGem: false,
          },
          {
            value: 7,
            text: '꿰뚫는 화살',
            isGem: false,
          },
          {
            value: 8,
            text: '장대비',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 28070,
        class: 502,
        text: '애로우 해일',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '강화된 화살',
            isGem: false,
          },
          {
            value: 2,
            text: '블리자드',
            isGem: false,
          },
          {
            value: 3,
            text: '헬파이어',
            isGem: false,
          },
          {
            value: 4,
            text: '저속 탄환',
            isGem: false,
          },
          {
            value: 5,
            text: '재빠른 발사',
            isGem: false,
          },
          {
            value: 6,
            text: '거대 회오리',
            isGem: false,
          },
          {
            value: 7,
            text: '웨이브 해일',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 35130,
        class: 505,
        text: '어나힐레이션 모드',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '약점 포착',
            isGem: false,
          },
          {
            value: 3,
            text: '신속한 준비',
            isGem: false,
          },
          {
            value: 4,
            text: '편제 개편',
            isGem: false,
          },
          {
            value: 6,
            text: '코어 에너지 충전',
            isGem: false,
          },
          {
            value: 7,
            text: '전우',
            isGem: false,
          },
          {
            value: 8,
            text: '십자 포화',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 16110,
        class: 102,
        text: '어설트 블레이드',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '날렵한 움직임',
            isGem: false,
          },
          {
            value: 2,
            text: '꿰뚫는 일격',
            isGem: false,
          },
          {
            value: 4,
            text: '집중',
            isGem: false,
          },
          {
            value: 6,
            text: '내부 출혈',
            isGem: false,
          },
          {
            value: 7,
            text: '절삭',
            isGem: false,
          },
          {
            value: 8,
            text: '역습',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 18080,
        class: 103,
        text: '어스 스매셔',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '치명적인 힘',
            isGem: false,
          },
          {
            value: 2,
            text: '단단한 신체',
            isGem: false,
          },
          {
            value: 3,
            text: '행운의 코어',
            isGem: false,
          },
          {
            value: 6,
            text: '기본 단련',
            isGem: false,
          },
          {
            value: 7,
            text: '폭발하는 타격',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 25070,
        class: 402,
        text: '어스 슬래쉬',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 2,
            text: '약육강식',
            isGem: false,
          },
          {
            value: 3,
            text: '밀어내기',
            isGem: false,
          },
          {
            value: 4,
            text: '암흑 주입',
            isGem: false,
          },
          {
            value: 5,
            text: '기절 효과',
            isGem: false,
          },
          {
            value: 6,
            text: '약점 포착',
            isGem: false,
          },
          {
            value: 7,
            text: '도약 공격',
            isGem: false,
          },
          {
            value: 8,
            text: '대지 폭발',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 18150,
        class: 103,
        text: '어스 이터',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '강화된 일격',
            isGem: false,
          },
          {
            value: 2,
            text: '붉은 파편',
            isGem: false,
          },
          {
            value: 3,
            text: '절대적인 힘',
            isGem: false,
          },
          {
            value: 6,
            text: '대지충격',
            isGem: false,
          },
          {
            value: 7,
            text: '대지의 분노',
            isGem: false,
          },
          {
            value: 8,
            text: '바위 폭풍',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 25060,
        class: 402,
        text: '어퍼 슬래쉬',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '단단한 갑옷',
            isGem: false,
          },
          {
            value: 2,
            text: '재빠른 손놀림',
            isGem: false,
          },
          {
            value: 3,
            text: '급소 타격',
            isGem: false,
          },
          {
            value: 5,
            text: '강력한 회오리',
            isGem: false,
          },
          {
            value: 6,
            text: '대형 회오리',
            isGem: false,
          },
          {
            value: 7,
            text: '날카로운 공격',
            isGem: false,
          },
          {
            value: 8,
            text: '강인함',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 19120,
        class: 202,
        text: '언리미티드 셔플',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '파멸의 셔플',
            isGem: false,
          },
          {
            value: 2,
            text: '빠른 준비',
            isGem: false,
          },
          {
            value: 3,
            text: '퀵 드로',
            isGem: false,
          },
          {
            value: 4,
            text: '무한의 뇌격',
            isGem: false,
          },
          {
            value: 5,
            text: '어둠의 핵',
            isGem: false,
          },
          {
            value: 6,
            text: '얼티밋 셔플',
            isGem: false,
          },
          {
            value: 7,
            text: '예견된 죽음',
            isGem: false,
          },
          {
            value: 8,
            text: '파멸의 폭풍',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 37240,
        class: 205,
        text: '에너지 방출',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '날렵한 시전',
            isGem: false,
          },
          {
            value: 4,
            text: '응축된 화염',
            isGem: false,
          },
          {
            value: 5,
            text: '응축된 냉기',
            isGem: false,
          },
          {
            value: 6,
            text: '응축된 번개',
            isGem: false,
          },
          {
            value: 7,
            text: '에너지 폭격',
            isGem: false,
          },
          {
            value: 8,
            text: '에너지 난사',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 35210,
        class: 505,
        text: '에너지 버스터',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '응축',
            isGem: false,
          },
          {
            value: 3,
            text: '전력전개',
            isGem: false,
          },
          {
            value: 4,
            text: '플레임 버스터',
            isGem: false,
          },
          {
            value: 5,
            text: '라이트닝 버스터',
            isGem: false,
          },
          {
            value: 7,
            text: '레일건',
            isGem: false,
          },
          {
            value: 8,
            text: '멜트 다우너',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 30160,
        class: 504,
        text: '에너지 필드',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 2,
            text: '필드 방출',
            isGem: false,
          },
          {
            value: 4,
            text: '보호막 강화',
            isGem: false,
          },
          {
            value: 5,
            text: '에너지 증가',
            isGem: false,
          },
          {
            value: 6,
            text: '빠른 준비',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 37290,
        class: 205,
        text: '엘레기안의 손길',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 2,
            text: '파도의 분노',
            isGem: false,
          },
          {
            value: 3,
            text: '빠른 준비',
            isGem: false,
          },
          {
            value: 4,
            text: '재빠른 발놀림',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 37260,
        class: 205,
        text: '엘리멘탈 리액트',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '통찰력',
            isGem: false,
          },
          {
            value: 3,
            text: '빠른 준비',
            isGem: false,
          },
          {
            value: 4,
            text: '강화된 일격',
            isGem: false,
          },
          {
            value: 5,
            text: '약육 강식',
            isGem: false,
          },
          {
            value: 6,
            text: '최후의 일격',
            isGem: false,
          },
          {
            value: 7,
            text: '안정된 크리스탈',
            isGem: false,
          },
          {
            value: 8,
            text: '충격파',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 20090,
        class: 203,
        text: '엘씨드',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '정신 강화',
            isGem: false,
          },
          {
            value: 2,
            text: '마력 증폭',
            isGem: false,
          },
          {
            value: 3,
            text: '소환 유지',
            isGem: false,
          },
          {
            value: 4,
            text: '맹독 씨앗',
            isGem: false,
          },
          {
            value: 5,
            text: '얼음 씨앗',
            isGem: false,
          },
          {
            value: 8,
            text: '엘리트 소환',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 24120,
        class: 304,
        text: '여래신장',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '공격 강화',
            isGem: false,
          },
          {
            value: 2,
            text: '빠른 준비',
            isGem: false,
          },
          {
            value: 4,
            text: '냉기 공격',
            isGem: false,
          },
          {
            value: 6,
            text: '화염 공격',
            isGem: false,
          },
          {
            value: 7,
            text: '화려한 공격',
            isGem: false,
          },
          {
            value: 8,
            text: '무식한 손바닥',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 28060,
        class: 502,
        text: '연막 화살',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '마력 조절',
            isGem: false,
          },
          {
            value: 2,
            text: '빠른 준비',
            isGem: false,
          },
          {
            value: 3,
            text: '원거리 사격',
            isGem: false,
          },
          {
            value: 4,
            text: '끈적이는 안개',
            isGem: false,
          },
          {
            value: 5,
            text: '어두운 안개',
            isGem: false,
          },
          {
            value: 6,
            text: '독 안개',
            isGem: false,
          },
          {
            value: 8,
            text: '죽음의 안개',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 34120,
        class: 305,
        text: '연환섬',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '삼조격',
            isGem: false,
          },
          {
            value: 3,
            text: '치명적인 공격',
            isGem: false,
          },
          {
            value: 4,
            text: '최후의 판단',
            isGem: false,
          },
          {
            value: 6,
            text: '뇌쇄된 표적',
            isGem: false,
          },
          {
            value: 7,
            text: '약점포착',
            isGem: false,
          },
          {
            value: 8,
            text: '광휘의 창',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 23100,
        class: 303,
        text: '연환파신권',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '노련한 행동',
            isGem: false,
          },
          {
            value: 3,
            text: '끝나지 않는 분노',
            isGem: false,
          },
          {
            value: 6,
            text: '화염 폭발',
            isGem: false,
          },
          {
            value: 7,
            text: '대폭발',
            isGem: false,
          },
          {
            value: 8,
            text: '흔들리는 지대',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 34060,
        class: 305,
        text: '열공참',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '재빠른 손놀림',
            isGem: false,
          },
          {
            value: 2,
            text: '급소 타격',
            isGem: false,
          },
          {
            value: 3,
            text: '난무 특화',
            isGem: false,
          },
          {
            value: 4,
            text: '화염 회전',
            isGem: false,
          },
          {
            value: 5,
            text: '냉기 회전',
            isGem: false,
          },
          {
            value: 6,
            text: '강화된 일격',
            isGem: false,
          },
          {
            value: 7,
            text: '단극회전',
            isGem: false,
          },
          {
            value: 8,
            text: '초극회전',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 16400,
        class: 102,
        text: '오러 블레이드',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '섬전',
            isGem: false,
          },
          {
            value: 2,
            text: '빠른 준비',
            isGem: false,
          },
          {
            value: 3,
            text: '원거리 타격',
            isGem: false,
          },
          {
            value: 5,
            text: '검상',
            isGem: false,
          },
          {
            value: 6,
            text: '파괴',
            isGem: false,
          },
          {
            value: 7,
            text: '공간베기',
            isGem: false,
          },
          {
            value: 8,
            text: '멸절',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 22030,
        class: 302,
        text: '오의 : 나선경',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '약점포착',
            isGem: false,
          },
          {
            value: 4,
            text: '재빠른 손놀림',
            isGem: false,
          },
          {
            value: 5,
            text: '행운의 버블',
            isGem: false,
          },
          {
            value: 6,
            text: '공격 준비',
            isGem: false,
          },
          {
            value: 7,
            text: '파멸의 일격',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 39030,
        class: 312,
        text: '오의 : 나선경',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '약점포착',
            isGem: false,
          },
          {
            value: 4,
            text: '재빠른 손놀림',
            isGem: false,
          },
          {
            value: 5,
            text: '행운의 버블',
            isGem: false,
          },
          {
            value: 6,
            text: '바람의 축복',
            isGem: false,
          },
          {
            value: 7,
            text: '파멸의 일격',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 22100,
        class: 302,
        text: '오의 : 뇌진격',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '급소 타격',
            isGem: false,
          },
          {
            value: 2,
            text: '강렬한 전격',
            isGem: false,
          },
          {
            value: 5,
            text: '확고한 의지',
            isGem: false,
          },
          {
            value: 7,
            text: '감전',
            isGem: false,
          },
          {
            value: 8,
            text: '위험한 거래',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 39100,
        class: 312,
        text: '오의 : 뇌호격',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '행운의 버블',
            isGem: false,
          },
          {
            value: 2,
            text: '단일 타격',
            isGem: false,
          },
          {
            value: 3,
            text: '빠른 준비',
            isGem: false,
          },
          {
            value: 4,
            text: '약점포착',
            isGem: false,
          },
          {
            value: 6,
            text: '꿰뚫는 일격',
            isGem: false,
          },
          {
            value: 7,
            text: '모아 차기',
            isGem: false,
          },
          {
            value: 8,
            text: '연속 차기',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 22020,
        class: 302,
        text: '오의 : 폭쇄진',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '약점포착',
            isGem: false,
          },
          {
            value: 2,
            text: '최후의 폭발',
            isGem: false,
          },
          {
            value: 3,
            text: '거친 폭발',
            isGem: false,
          },
          {
            value: 4,
            text: '행운의 버블',
            isGem: false,
          },
          {
            value: 5,
            text: '냉기 폭발',
            isGem: false,
          },
          {
            value: 6,
            text: '화염 폭발',
            isGem: false,
          },
          {
            value: 7,
            text: '끝없는 파괴',
            isGem: false,
          },
          {
            value: 8,
            text: '대폭발',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 39020,
        class: 312,
        text: '오의 : 폭쇄진',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '약점포착',
            isGem: false,
          },
          {
            value: 2,
            text: '최후의 폭발',
            isGem: false,
          },
          {
            value: 3,
            text: '광풍',
            isGem: false,
          },
          {
            value: 4,
            text: '행운의 버블',
            isGem: false,
          },
          {
            value: 5,
            text: '냉기 폭발',
            isGem: false,
          },
          {
            value: 6,
            text: '화염 폭발',
            isGem: false,
          },
          {
            value: 7,
            text: '끝없는 파괴',
            isGem: false,
          },
          {
            value: 8,
            text: '대폭발',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 22110,
        class: 302,
        text: '오의 : 풍신초래',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '대지 폭풍',
            isGem: false,
          },
          {
            value: 2,
            text: '냉기 폭풍',
            isGem: false,
          },
          {
            value: 3,
            text: '번개 폭풍',
            isGem: false,
          },
          {
            value: 4,
            text: '성장 공격',
            isGem: false,
          },
          {
            value: 6,
            text: '과회전',
            isGem: false,
          },
          {
            value: 7,
            text: '폭풍 소환',
            isGem: false,
          },
          {
            value: 8,
            text: '휘몰아치는 폭풍',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 39110,
        class: 312,
        text: '오의 : 풍신초래',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '대지 폭풍',
            isGem: false,
          },
          {
            value: 2,
            text: '냉기 폭풍',
            isGem: false,
          },
          {
            value: 3,
            text: '번개 폭풍',
            isGem: false,
          },
          {
            value: 4,
            text: '성장 공격',
            isGem: false,
          },
          {
            value: 6,
            text: '과회전',
            isGem: false,
          },
          {
            value: 7,
            text: '폭풍 소환',
            isGem: false,
          },
          {
            value: 8,
            text: '휘몰아치는 폭풍',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 39040,
        class: 312,
        text: '오의 : 호왕출현',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 2,
            text: '단단한 갑옷',
            isGem: false,
          },
          {
            value: 3,
            text: '빠른 준비',
            isGem: false,
          },
          {
            value: 4,
            text: '암흑 공격',
            isGem: false,
          },
          {
            value: 5,
            text: '단일 타격',
            isGem: false,
          },
          {
            value: 6,
            text: '불의 고리',
            isGem: false,
          },
          {
            value: 7,
            text: '호승격',
            isGem: false,
          },
          {
            value: 8,
            text: '승천',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 22040,
        class: 302,
        text: '오의 : 화룡천상',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 2,
            text: '행운의 버블',
            isGem: false,
          },
          {
            value: 4,
            text: '집중 타격',
            isGem: false,
          },
          {
            value: 5,
            text: '흑룡의 승천',
            isGem: false,
          },
          {
            value: 6,
            text: '마무리 일격',
            isGem: false,
          },
          {
            value: 7,
            text: '폭풍의 눈',
            isGem: false,
          },
          {
            value: 8,
            text: '최후의 한방',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 22080,
        class: 302,
        text: '용맹의 포효',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '마력 조절',
            isGem: false,
          },
          {
            value: 3,
            text: '엘리멘탈 갈취',
            isGem: false,
          },
          {
            value: 4,
            text: '빠른 준비',
            isGem: false,
          },
          {
            value: 5,
            text: '기동성 약화',
            isGem: false,
          },
          {
            value: 8,
            text: '충격 강화',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 23050,
        class: 303,
        text: '용의 강림',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '탁월한 기동성',
            isGem: false,
          },
          {
            value: 2,
            text: '복식 강화',
            isGem: false,
          },
          {
            value: 3,
            text: '순간포착',
            isGem: false,
          },
          {
            value: 5,
            text: '화신 출격',
            isGem: false,
          },
          {
            value: 7,
            text: '대파괴',
            isGem: false,
          },
          {
            value: 8,
            text: '흑룡의 강림',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 39120,
        class: 312,
        text: '운룡각',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '탁월한 기동성',
            isGem: false,
          },
          {
            value: 2,
            text: '재빠른 발놀림',
            isGem: false,
          },
          {
            value: 3,
            text: '엘리멘탈 갈취',
            isGem: false,
          },
          {
            value: 4,
            text: '가벼운 표적',
            isGem: false,
          },
          {
            value: 5,
            text: '강화된 일격',
            isGem: false,
          },
          {
            value: 6,
            text: '약육강식',
            isGem: false,
          },
          {
            value: 7,
            text: '백호각',
            isGem: false,
          },
          {
            value: 8,
            text: '낙화각',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 19180,
        class: 202,
        text: '운명의 부름',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '정신 강화',
            isGem: false,
          },
          {
            value: 2,
            text: '꿰뚫는 일격',
            isGem: false,
          },
          {
            value: 3,
            text: '날렵한 움직임',
            isGem: false,
          },
          {
            value: 4,
            text: '퀵 드로',
            isGem: false,
          },
          {
            value: 5,
            text: '약점 포착',
            isGem: false,
          },
          {
            value: 6,
            text: '어두운 운명',
            isGem: false,
          },
          {
            value: 7,
            text: '연속 공격',
            isGem: false,
          },
          {
            value: 8,
            text: '운명의 집중',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 18090,
        class: 103,
        text: '원 맨 아미',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '빠른 준비',
            isGem: false,
          },
          {
            value: 2,
            text: '재빠른 움직임',
            isGem: false,
          },
          {
            value: 3,
            text: '중력 강화',
            isGem: false,
          },
          {
            value: 4,
            text: '녹슬지 않은 해머',
            isGem: false,
          },
          {
            value: 5,
            text: '약점포착',
            isGem: false,
          },
          {
            value: 6,
            text: '붉은 해머',
            isGem: false,
          },
          {
            value: 7,
            text: '치명적인 해머',
            isGem: false,
          },
          {
            value: 8,
            text: '우월한 타격',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 22190,
        class: 302,
        text: '월섬각',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '열섬각',
            isGem: false,
          },
          {
            value: 2,
            text: '강렬한 전격',
            isGem: false,
          },
          {
            value: 3,
            text: '백열각',
            isGem: false,
          },
          {
            value: 4,
            text: '탁월한 기동성',
            isGem: false,
          },
          {
            value: 6,
            text: '단일 타격',
            isGem: false,
          },
          {
            value: 7,
            text: '화려한 발재간',
            isGem: false,
          },
          {
            value: 8,
            text: '만월각',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 39190,
        class: 312,
        text: '월섬각',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '열섬각',
            isGem: false,
          },
          {
            value: 2,
            text: '강렬한 전격',
            isGem: false,
          },
          {
            value: 3,
            text: '백열각',
            isGem: false,
          },
          {
            value: 4,
            text: '탁월한 기동성',
            isGem: false,
          },
          {
            value: 6,
            text: '단일 타격',
            isGem: false,
          },
          {
            value: 7,
            text: '화려한 발재간',
            isGem: false,
          },
          {
            value: 8,
            text: '만월각',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 16610,
        class: 102,
        text: '윈드 블레이드',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '가속',
            isGem: false,
          },
          {
            value: 2,
            text: '출혈 효과',
            isGem: false,
          },
          {
            value: 3,
            text: '빠른 준비',
            isGem: false,
          },
          {
            value: 4,
            text: '강화된 일격',
            isGem: false,
          },
          {
            value: 5,
            text: '급소 타격',
            isGem: false,
          },
          {
            value: 6,
            text: '집중',
            isGem: false,
          },
          {
            value: 7,
            text: '돌풍',
            isGem: false,
          },
          {
            value: 8,
            text: '윈드 스위프트',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 21070,
        class: 204,
        text: '윈드 오브 뮤직',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '정신 강화',
            isGem: false,
          },
          {
            value: 2,
            text: '빠른 준비',
            isGem: false,
          },
          {
            value: 3,
            text: '날렵한 시전',
            isGem: false,
          },
          {
            value: 4,
            text: '선율 증가',
            isGem: false,
          },
          {
            value: 5,
            text: '강화된 시전',
            isGem: false,
          },
          {
            value: 6,
            text: '피해량 감소',
            isGem: false,
          },
          {
            value: 7,
            text: '초고속 시전',
            isGem: false,
          },
          {
            value: 8,
            text: '수호의 바람',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 25050,
        class: 402,
        text: '윈드 컷',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '기동성 약화',
            isGem: false,
          },
          {
            value: 2,
            text: '약육강식',
            isGem: false,
          },
          {
            value: 3,
            text: '빠른 준비',
            isGem: false,
          },
          {
            value: 5,
            text: '급소 타격',
            isGem: false,
          },
          {
            value: 6,
            text: '지속력 강화',
            isGem: false,
          },
          {
            value: 7,
            text: '검기 폭발',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 20220,
        class: 203,
        text: '윙드 스피릿',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '마력 강화',
            isGem: false,
          },
          {
            value: 3,
            text: '마나 회복',
            isGem: false,
          },
          {
            value: 4,
            text: '썬더 스피릿',
            isGem: false,
          },
          {
            value: 5,
            text: '어스 스피릿',
            isGem: false,
          },
          {
            value: 7,
            text: '소용돌이',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 34570,
        class: 305,
        text: '유성강천',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '약점포착',
            isGem: false,
          },
          {
            value: 5,
            text: '화력 조절',
            isGem: false,
          },
          {
            value: 6,
            text: '빠른 준비',
            isGem: false,
          },
          {
            value: 7,
            text: '강력한 마무리',
            isGem: false,
          },
          {
            value: 8,
            text: '지면 폭발',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 21180,
        class: 204,
        text: '율동의 하프',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '소환의 의지',
            isGem: false,
          },
          {
            value: 2,
            text: '날렵한 시전',
            isGem: false,
          },
          {
            value: 3,
            text: '정신 강화',
            isGem: false,
          },
          {
            value: 8,
            text: '거대 하프',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 21170,
        class: 204,
        text: '음파 진동',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 2,
            text: '수호의 진동',
            isGem: false,
          },
          {
            value: 4,
            text: '얼어붙은 핵',
            isGem: false,
          },
          {
            value: 6,
            text: '연쇄 진동',
            isGem: false,
          },
          {
            value: 8,
            text: '진동 확산',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 21110,
        class: 204,
        text: '음표 뭉치',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '굳건한 음표',
            isGem: false,
          },
          {
            value: 2,
            text: '도돌이표',
            isGem: false,
          },
          {
            value: 3,
            text: '음표 붕괴',
            isGem: false,
          },
          {
            value: 6,
            text: '음표 해일',
            isGem: false,
          },
          {
            value: 7,
            text: '무자비한 방출',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 28140,
        class: 502,
        text: '이동 베기',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '빠른 준비',
            isGem: false,
          },
          {
            value: 3,
            text: '탁월한 기동성',
            isGem: false,
          },
          {
            value: 5,
            text: '실버 마스터',
            isGem: false,
          },
          {
            value: 6,
            text: '약육강식',
            isGem: false,
          },
          {
            value: 8,
            text: '강화 베기',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 19030,
        class: 202,
        text: '이보크',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '빠른 준비',
            isGem: false,
          },
          {
            value: 2,
            text: '정신 강화',
            isGem: false,
          },
          {
            value: 3,
            text: '퀵 드로',
            isGem: false,
          },
          {
            value: 4,
            text: '집속 마법진',
            isGem: false,
          },
          {
            value: 5,
            text: '마나 중독',
            isGem: false,
          },
          {
            value: 6,
            text: '치명적 공격',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 26080,
        class: 404,
        text: '이블리스토',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 5,
            text: '치명적인 단검',
            isGem: false,
          },
          {
            value: 6,
            text: '심호흡',
            isGem: false,
          },
          {
            value: 7,
            text: '죽음의 일격',
            isGem: false,
          },
          {
            value: 8,
            text: '속전속결',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 35120,
        class: 505,
        text: '이스케이프',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '탁월한 기동성',
            isGem: false,
          },
          {
            value: 2,
            text: '배터리 절약',
            isGem: false,
          },
          {
            value: 6,
            text: '협동 사격',
            isGem: false,
          },
          {
            value: 7,
            text: '응급 보호',
            isGem: false,
          },
          {
            value: 8,
            text: '약육 사격',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 34040,
        class: 305,
        text: '이연격',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '화염 베기',
            isGem: false,
          },
          {
            value: 2,
            text: '냉기 베기',
            isGem: false,
          },
          {
            value: 3,
            text: '대지 베기',
            isGem: false,
          },
          {
            value: 5,
            text: '최후의 판단',
            isGem: false,
          },
          {
            value: 6,
            text: '난무 특화',
            isGem: false,
          },
          {
            value: 7,
            text: '공간 베기',
            isGem: false,
          },
          {
            value: 8,
            text: '속성 강타',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 29220,
        class: 503,
        text: '이퀄리브리엄',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '고속 사격',
            isGem: false,
          },
          {
            value: 4,
            text: '섬멸 사격',
            isGem: false,
          },
          {
            value: 5,
            text: '적 소탕',
            isGem: false,
          },
          {
            value: 6,
            text: '원거리 사격',
            isGem: false,
          },
          {
            value: 7,
            text: '화상 효과',
            isGem: false,
          },
          {
            value: 8,
            text: '급소 사격',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 38220,
        class: 512,
        text: '이퀄리브리엄',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '고속 사격',
            isGem: false,
          },
          {
            value: 4,
            text: '섬멸 사격',
            isGem: false,
          },
          {
            value: 5,
            text: '적 소탕',
            isGem: false,
          },
          {
            value: 6,
            text: '원거리 사격',
            isGem: false,
          },
          {
            value: 7,
            text: '화상 효과',
            isGem: false,
          },
          {
            value: 8,
            text: '급소 사격',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 37330,
        class: 205,
        text: '익스플로전',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '발화',
            isGem: false,
          },
          {
            value: 2,
            text: '정신 강화',
            isGem: false,
          },
          {
            value: 3,
            text: '약육강식',
            isGem: false,
          },
          {
            value: 5,
            text: '소용돌이 화염',
            isGem: false,
          },
          {
            value: 6,
            text: '약점 포착',
            isGem: false,
          },
          {
            value: 7,
            text: '마력 증폭',
            isGem: false,
          },
          {
            value: 8,
            text: '최후의 일격',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 18140,
        class: 103,
        text: '인듀어 페인',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 2,
            text: '중력 강화',
            isGem: false,
          },
          {
            value: 4,
            text: '반중력',
            isGem: false,
          },
          {
            value: 5,
            text: '전장의 공포',
            isGem: false,
          },
          {
            value: 7,
            text: '건강한 정신',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 37230,
        class: 205,
        text: '인페르노',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '발화',
            isGem: false,
          },
          {
            value: 4,
            text: '화염 지대',
            isGem: false,
          },
          {
            value: 5,
            text: '약점 포착',
            isGem: false,
          },
          {
            value: 7,
            text: '화력 팽창',
            isGem: false,
          },
          {
            value: 8,
            text: '화력 보충',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 19230,
        class: 202,
        text: '인피니티 샤워',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '빠른 준비',
            isGem: false,
          },
          {
            value: 3,
            text: '급소 타격',
            isGem: false,
          },
          {
            value: 5,
            text: '균일한 공격',
            isGem: false,
          },
          {
            value: 6,
            text: '무방비 표적',
            isGem: false,
          },
          {
            value: 7,
            text: '무한의 최후',
            isGem: false,
          },
          {
            value: 8,
            text: '무한의 집중',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 28050,
        class: 502,
        text: '일렉트릭 노바',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '재빠른 손놀림',
            isGem: false,
          },
          {
            value: 2,
            text: '마력 조절',
            isGem: false,
          },
          {
            value: 3,
            text: '원거리 사격',
            isGem: false,
          },
          {
            value: 5,
            text: '과부하',
            isGem: false,
          },
          {
            value: 6,
            text: '전하 충격',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 23160,
        class: 303,
        text: '일망 타진',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '신속한 준비',
            isGem: false,
          },
          {
            value: 2,
            text: '단일 타격',
            isGem: false,
          },
          {
            value: 3,
            text: '피의 갈증',
            isGem: false,
          },
          {
            value: 4,
            text: '광인',
            isGem: false,
          },
          {
            value: 5,
            text: '상황 판단',
            isGem: false,
          },
          {
            value: 7,
            text: '보강된 타격',
            isGem: false,
          },
          {
            value: 8,
            text: '묵직한 한방',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 34080,
        class: 305,
        text: '일섬각',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '탁월한 기동성',
            isGem: false,
          },
          {
            value: 3,
            text: '마력 조절',
            isGem: false,
          },
          {
            value: 4,
            text: '기절 효과',
            isGem: false,
          },
          {
            value: 5,
            text: '약점포착',
            isGem: false,
          },
          {
            value: 6,
            text: '최후의 판단',
            isGem: false,
          },
          {
            value: 7,
            text: '강회전',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 28030,
        class: 502,
        text: '일제 사격',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '약육강식',
            isGem: false,
          },
          {
            value: 2,
            text: '마력 조절',
            isGem: false,
          },
          {
            value: 3,
            text: '가벼운 발걸음',
            isGem: false,
          },
          {
            value: 5,
            text: '냉기 화살',
            isGem: false,
          },
          {
            value: 7,
            text: '은밀한 움직임',
            isGem: false,
          },
          {
            value: 8,
            text: '밀집 사격',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 29190,
        class: 503,
        text: '잔혹한 추적자',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '재빠른 손놀림',
            isGem: false,
          },
          {
            value: 2,
            text: '마력 조절',
            isGem: false,
          },
          {
            value: 4,
            text: '급소 사격',
            isGem: false,
          },
          {
            value: 5,
            text: '연사력 강화',
            isGem: false,
          },
          {
            value: 7,
            text: '빠른 총 뽑기',
            isGem: false,
          },
          {
            value: 8,
            text: '폭발성 탄환',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 22070,
        class: 302,
        text: '잠룡승천축',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '나선각',
            isGem: false,
          },
          {
            value: 3,
            text: '급소 타격',
            isGem: false,
          },
          {
            value: 4,
            text: '빠른 준비',
            isGem: false,
          },
          {
            value: 5,
            text: '강화된 일격',
            isGem: false,
          },
          {
            value: 6,
            text: '공격 준비',
            isGem: false,
          },
          {
            value: 8,
            text: '수주승천각',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 39070,
        class: 312,
        text: '잠룡승천축',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '나선각',
            isGem: false,
          },
          {
            value: 3,
            text: '급소 타격',
            isGem: false,
          },
          {
            value: 4,
            text: '빠른 준비',
            isGem: false,
          },
          {
            value: 5,
            text: '강화된 일격',
            isGem: false,
          },
          {
            value: 6,
            text: '바람의 축복',
            isGem: false,
          },
          {
            value: 8,
            text: '수주승천각',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 34590,
        class: 305,
        text: '적룡포',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 2,
            text: '화력 조절',
            isGem: false,
          },
          {
            value: 3,
            text: '빠른 준비',
            isGem: false,
          },
          {
            value: 4,
            text: '단호한 의지',
            isGem: false,
          },
          {
            value: 5,
            text: '진화하는 창술',
            isGem: false,
          },
          {
            value: 7,
            text: '약점포착',
            isGem: false,
          },
          {
            value: 8,
            text: '조준 거리',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 20270,
        class: 203,
        text: '전기 폭풍',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '마력 조절',
            isGem: false,
          },
          {
            value: 2,
            text: '재빠른 시전',
            isGem: false,
          },
          {
            value: 3,
            text: '견고한 로브',
            isGem: false,
          },
          {
            value: 4,
            text: '급소 공격',
            isGem: false,
          },
          {
            value: 6,
            text: '지속력 강화',
            isGem: false,
          },
          {
            value: 8,
            text: '유도 폭풍',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 20230,
        class: 203,
        text: '전류 방출',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '체인 방출',
            isGem: false,
          },
          {
            value: 2,
            text: '재빠른 시전',
            isGem: false,
          },
          {
            value: 3,
            text: '고속 방출',
            isGem: false,
          },
          {
            value: 4,
            text: '전류 강화',
            isGem: false,
          },
          {
            value: 5,
            text: '약육강식',
            isGem: false,
          },
          {
            value: 6,
            text: '약점포착',
            isGem: false,
          },
          {
            value: 7,
            text: '초전류 지대',
            isGem: false,
          },
          {
            value: 8,
            text: '고전압',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 30190,
        class: 504,
        text: '전방 포격',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 2,
            text: '화력 조절',
            isGem: false,
          },
          {
            value: 4,
            text: '빠른 준비',
            isGem: false,
          },
          {
            value: 5,
            text: '강화된 포격',
            isGem: false,
          },
          {
            value: 6,
            text: '예리한 일격',
            isGem: false,
          },
          {
            value: 7,
            text: '춤추는 폭발',
            isGem: false,
          },
          {
            value: 8,
            text: '집중 포격',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 35170,
        class: 505,
        text: '전술 사격',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '약점 포착 ',
            isGem: false,
          },
          {
            value: 2,
            text: '빠른 준비',
            isGem: false,
          },
          {
            value: 3,
            text: '배터리 충전',
            isGem: false,
          },
          {
            value: 4,
            text: '예열 사격',
            isGem: false,
          },
          {
            value: 6,
            text: '추가 사격',
            isGem: false,
          },
          {
            value: 8,
            text: '진화 사격',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 23020,
        class: 303,
        text: '전진의 일격',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '집중',
            isGem: false,
          },
          {
            value: 2,
            text: '탁월한 기동성',
            isGem: false,
          },
          {
            value: 3,
            text: '공격 준비',
            isGem: false,
          },
          {
            value: 4,
            text: '무자비한 전진',
            isGem: false,
          },
          {
            value: 6,
            text: '파괴자',
            isGem: false,
          },
          {
            value: 7,
            text: '강력한 주먹',
            isGem: false,
          },
          {
            value: 8,
            text: '돌격대',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 34580,
        class: 305,
        text: '절룡세',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '마력 조절',
            isGem: false,
          },
          {
            value: 3,
            text: '화력 조절',
            isGem: false,
          },
          {
            value: 4,
            text: '정신 파괴',
            isGem: false,
          },
          {
            value: 6,
            text: '절대 방어',
            isGem: false,
          },
          {
            value: 8,
            text: '정확한 공격',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 38040,
        class: 512,
        text: '절멸의 탄환',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '사면초가',
            isGem: false,
          },
          {
            value: 2,
            text: '재빠른 손놀림',
            isGem: false,
          },
          {
            value: 5,
            text: '강화 사격',
            isGem: false,
          },
          {
            value: 7,
            text: '최후의 일격',
            isGem: false,
          },
          {
            value: 8,
            text: '반동 회피',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 30150,
        class: 504,
        text: '점프 포격',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '재빠른 점프',
            isGem: false,
          },
          {
            value: 2,
            text: '마력 조절',
            isGem: false,
          },
          {
            value: 5,
            text: '강화된 포격',
            isGem: false,
          },
          {
            value: 6,
            text: '약점포착',
            isGem: false,
          },
          {
            value: 7,
            text: '3단 포격',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 18160,
        class: 103,
        text: '점핑 스매쉬',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '어둠의 불꽃',
            isGem: false,
          },
          {
            value: 2,
            text: '대지의 해머',
            isGem: false,
          },
          {
            value: 3,
            text: '탁월한 변화',
            isGem: false,
          },
          {
            value: 4,
            text: '시간의 뒤틀림',
            isGem: false,
          },
          {
            value: 6,
            text: '행운의 코어',
            isGem: false,
          },
          {
            value: 7,
            text: '중력반전',
            isGem: false,
          },
          {
            value: 8,
            text: '분쇄',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 36180,
        class: 105,
        text: '정의 집행',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '수호 방벽',
            isGem: false,
          },
          {
            value: 4,
            text: '완벽한 타격',
            isGem: false,
          },
          {
            value: 5,
            text: '힘의 방출',
            isGem: false,
          },
          {
            value: 6,
            text: '날카로운 일격',
            isGem: false,
          },
          {
            value: 7,
            text: '분노 표출',
            isGem: false,
          },
          {
            value: 8,
            text: '빛의 폭발',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 36080,
        class: 105,
        text: '정의의 검',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '통찰력',
            isGem: false,
          },
          {
            value: 2,
            text: '빛의 길',
            isGem: false,
          },
          {
            value: 3,
            text: '강화된 일격',
            isGem: false,
          },
          {
            value: 5,
            text: '뇌검 소환',
            isGem: false,
          },
          {
            value: 6,
            text: '폭발의 검',
            isGem: false,
          },
          {
            value: 7,
            text: '눈부신 빛의 검',
            isGem: false,
          },
          {
            value: 8,
            text: '거대한 빛의 검',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 27210,
        class: 403,
        text: '제노사이드',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '잔인한 일격',
            isGem: false,
          },
          {
            value: 2,
            text: '급소 타격',
            isGem: false,
          },
          {
            value: 4,
            text: '연속 공격',
            isGem: false,
          },
          {
            value: 6,
            text: '파멸의 주먹',
            isGem: false,
          },
          {
            value: 7,
            text: '잠식 강화',
            isGem: false,
          },
          {
            value: 8,
            text: '잠식 방출',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 29240,
        class: 503,
        text: '조준 사격',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '고속 탄환',
            isGem: false,
          },
          {
            value: 3,
            text: '최후의 한발',
            isGem: false,
          },
          {
            value: 4,
            text: '강화된 사격',
            isGem: false,
          },
          {
            value: 6,
            text: '기절 효과',
            isGem: false,
          },
          {
            value: 7,
            text: '고속 사격',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 37350,
        class: 205,
        text: '종말의 날',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '발화',
            isGem: false,
          },
          {
            value: 2,
            text: '정신 강화',
            isGem: false,
          },
          {
            value: 3,
            text: '통찰력',
            isGem: false,
          },
          {
            value: 4,
            text: '화염 지대',
            isGem: false,
          },
          {
            value: 5,
            text: '소행성',
            isGem: false,
          },
          {
            value: 6,
            text: '과열된 운석',
            isGem: false,
          },
          {
            value: 7,
            text: '마력 증폭',
            isGem: false,
          },
          {
            value: 8,
            text: '최후의 일격',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 29040,
        class: 503,
        text: '종말의 전조',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '근접 사격',
            isGem: false,
          },
          {
            value: 2,
            text: '풀레인지',
            isGem: false,
          },
          {
            value: 3,
            text: '기절 효과',
            isGem: false,
          },
          {
            value: 4,
            text: '강화된 사격',
            isGem: false,
          },
          {
            value: 6,
            text: '빠른 준비',
            isGem: false,
          },
          {
            value: 7,
            text: '재앙의 여파',
            isGem: false,
          },
          {
            value: 8,
            text: '다가온 종말',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 23110,
        class: 303,
        text: '죽음의 선고',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '빠른 준비',
            isGem: false,
          },
          {
            value: 3,
            text: '마음의 눈',
            isGem: false,
          },
          {
            value: 5,
            text: '단일 타격',
            isGem: false,
          },
          {
            value: 6,
            text: '마무리 공격',
            isGem: false,
          },
          {
            value: 7,
            text: '충격 폭발',
            isGem: false,
          },
          {
            value: 8,
            text: '뇌호흡',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 21240,
        class: 204,
        text: '죽음의 전주곡',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '열렬한 환호',
            isGem: false,
          },
          {
            value: 2,
            text: '빠른 준비',
            isGem: false,
          },
          {
            value: 3,
            text: '정신 강화',
            isGem: false,
          },
          {
            value: 4,
            text: '죽음의 증폭',
            isGem: false,
          },
          {
            value: 5,
            text: '엄습한 죽음',
            isGem: false,
          },
          {
            value: 7,
            text: '죽음의 아리아',
            isGem: false,
          },
          {
            value: 8,
            text: '고통의 울부짖음',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 30200,
        class: 504,
        text: '중력 폭발',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 2,
            text: '집단 공격',
            isGem: false,
          },
          {
            value: 3,
            text: '기절 효과',
            isGem: false,
          },
          {
            value: 4,
            text: '단단한 갑옷',
            isGem: false,
          },
          {
            value: 6,
            text: '중력 회오리',
            isGem: false,
          },
          {
            value: 8,
            text: '행성 중력',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 17180,
        class: 104,
        text: '증오의 함성',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '빠른 준비',
            isGem: false,
          },
          {
            value: 3,
            text: '방어 준비',
            isGem: false,
          },
          {
            value: 4,
            text: '도발 유지',
            isGem: false,
          },
          {
            value: 5,
            text: '약육강식',
            isGem: false,
          },
          {
            value: 6,
            text: '보호막',
            isGem: false,
          },
          {
            value: 8,
            text: '고함',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 22090,
        class: 302,
        text: '지뢰진',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 2,
            text: '무방비 표적',
            isGem: false,
          },
          {
            value: 4,
            text: '약육강식',
            isGem: false,
          },
          {
            value: 5,
            text: '약점포착',
            isGem: false,
          },
          {
            value: 7,
            text: '지각 변동',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 23070,
        class: 303,
        text: '지진쇄',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '대지의 힘',
            isGem: false,
          },
          {
            value: 2,
            text: '불굴의 힘',
            isGem: false,
          },
          {
            value: 5,
            text: '기습 강타',
            isGem: false,
          },
          {
            value: 6,
            text: '강격',
            isGem: false,
          },
          {
            value: 7,
            text: '강력한 지진',
            isGem: false,
          },
          {
            value: 8,
            text: '거인의 진격',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 23240,
        class: 303,
        text: '진 용출권',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '기술 연마',
            isGem: false,
          },
          {
            value: 2,
            text: '번개 주먹',
            isGem: false,
          },
          {
            value: 4,
            text: '냉정한 타격',
            isGem: false,
          },
          {
            value: 5,
            text: '분노의 타격',
            isGem: false,
          },
          {
            value: 6,
            text: '공중 폭격',
            isGem: false,
          },
          {
            value: 7,
            text: '용의 분노',
            isGem: false,
          },
          {
            value: 8,
            text: '작렬하는 주먹',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 36130,
        class: 105,
        text: '질주 베기',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '단단한 갑옷',
            isGem: false,
          },
          {
            value: 2,
            text: '가벼운 발걸음',
            isGem: false,
          },
          {
            value: 3,
            text: '빠른 준비',
            isGem: false,
          },
          {
            value: 4,
            text: '강력한 일격',
            isGem: false,
          },
          {
            value: 6,
            text: '번개 베기',
            isGem: false,
          },
          {
            value: 7,
            text: '무자비한 질주',
            isGem: false,
          },
          {
            value: 8,
            text: '마무리 일격',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 34130,
        class: 305,
        text: '질풍참',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '빠른 준비',
            isGem: false,
          },
          {
            value: 2,
            text: '화력 조절',
            isGem: false,
          },
          {
            value: 3,
            text: '단단한 갑옷',
            isGem: false,
          },
          {
            value: 5,
            text: '용맹한 행동',
            isGem: false,
          },
          {
            value: 7,
            text: '강화된 일격',
            isGem: false,
          },
          {
            value: 8,
            text: '약점포착',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 28210,
        class: 502,
        text: '집요한 추적',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 2,
            text: '빠른 준비',
            isGem: false,
          },
          {
            value: 3,
            text: '탁월한 기동성',
            isGem: false,
          },
          {
            value: 4,
            text: '가벼운 발걸음',
            isGem: false,
          },
          {
            value: 6,
            text: '약점 포착',
            isGem: false,
          },
          {
            value: 7,
            text: '깔끔한 한방',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 36160,
        class: 105,
        text: '집행자의 검',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '가벼운 발걸음',
            isGem: false,
          },
          {
            value: 2,
            text: '성흔',
            isGem: false,
          },
          {
            value: 5,
            text: '도전자의 의지',
            isGem: false,
          },
          {
            value: 7,
            text: '넓게 베기',
            isGem: false,
          },
          {
            value: 8,
            text: '집행자의 일격',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 17210,
        class: 104,
        text: '차지 스팅거',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '상처',
            isGem: false,
          },
          {
            value: 2,
            text: '약점 포착',
            isGem: false,
          },
          {
            value: 3,
            text: '단단한 갑옷',
            isGem: false,
          },
          {
            value: 5,
            text: '차지 강화',
            isGem: false,
          },
          {
            value: 7,
            text: '라이트닝 차지',
            isGem: false,
          },
          {
            value: 8,
            text: '라스트 차지',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 28090,
        class: 502,
        text: '차징 샷',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 2,
            text: '카모플라쥬',
            isGem: false,
          },
          {
            value: 3,
            text: '빠른 준비',
            isGem: false,
          },
          {
            value: 4,
            text: '더블 샷',
            isGem: false,
          },
          {
            value: 5,
            text: '오버 페인',
            isGem: false,
          },
          {
            value: 6,
            text: '재빠른 손놀림',
            isGem: false,
          },
          {
            value: 7,
            text: '즉발',
            isGem: false,
          },
          {
            value: 8,
            text: '정조준',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 36110,
        class: 105,
        text: '처단',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '재빠른 손놀림',
            isGem: false,
          },
          {
            value: 3,
            text: '마력 조절',
            isGem: false,
          },
          {
            value: 4,
            text: '신성한 처벌',
            isGem: false,
          },
          {
            value: 5,
            text: '관통하는 검 ',
            isGem: false,
          },
          {
            value: 6,
            text: '약육강식',
            isGem: false,
          },
          {
            value: 8,
            text: '도약 공격',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 37270,
        class: 205,
        text: '천벌',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '마비',
            isGem: false,
          },
          {
            value: 2,
            text: '정신 강화',
            isGem: false,
          },
          {
            value: 4,
            text: '피할 수 없는 운명',
            isGem: false,
          },
          {
            value: 5,
            text: '방전',
            isGem: false,
          },
          {
            value: 6,
            text: '파멸',
            isGem: false,
          },
          {
            value: 7,
            text: '마력 증폭',
            isGem: false,
          },
          {
            value: 8,
            text: '최후의 일격',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 21160,
        class: 204,
        text: '천상의 연주',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '빠른 준비',
            isGem: false,
          },
          {
            value: 2,
            text: '날렵한 시전',
            isGem: false,
          },
          {
            value: 3,
            text: '정신 강화',
            isGem: false,
          },
          {
            value: 5,
            text: '용맹의 연주',
            isGem: false,
          },
          {
            value: 8,
            text: '나를 위한 연주',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 36200,
        class: 105,
        text: '천상의 축복',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '정신 강화',
            isGem: false,
          },
          {
            value: 2,
            text: '날렵한 시전',
            isGem: false,
          },
          {
            value: 3,
            text: '신앙심',
            isGem: false,
          },
          {
            value: 4,
            text: '인내심',
            isGem: false,
          },
          {
            value: 5,
            text: '가벼움 ',
            isGem: false,
          },
          {
            value: 7,
            text: '완전한 축복',
            isGem: false,
          },
          {
            value: 8,
            text: '천상의 진혼곡',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 34090,
        class: 305,
        text: '철량추',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '빠른 준비',
            isGem: false,
          },
          {
            value: 3,
            text: '화력 조절',
            isGem: false,
          },
          {
            value: 7,
            text: '퍼올리기',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 23230,
        class: 303,
        text: '철포난격',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 3,
            text: '넘치는 힘',
            isGem: false,
          },
          {
            value: 4,
            text: '충격 생성',
            isGem: false,
          },
          {
            value: 6,
            text: '빠른 준비',
            isGem: false,
          },
          {
            value: 7,
            text: '진격 강화',
            isGem: false,
          },
          {
            value: 8,
            text: '강화된 주먹',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 34170,
        class: 305,
        text: '청룡진',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 3,
            text: '빠른 준비',
            isGem: false,
          },
          {
            value: 5,
            text: '대지 파괴',
            isGem: false,
          },
          {
            value: 8,
            text: '최후의 판단',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 34100,
        class: 305,
        text: '청룡출수',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '방어 준비',
            isGem: false,
          },
          {
            value: 2,
            text: '마력 조절',
            isGem: false,
          },
          {
            value: 3,
            text: '무방비 표적',
            isGem: false,
          },
          {
            value: 4,
            text: '화력 조절',
            isGem: false,
          },
          {
            value: 6,
            text: '난무 특화',
            isGem: false,
          },
          {
            value: 7,
            text: '번개 회전',
            isGem: false,
          },
          {
            value: 8,
            text: '돌진 공격',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 16500,
        class: 102,
        text: '체인 소드',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '급소 타격',
            isGem: false,
          },
          {
            value: 4,
            text: '섬멸',
            isGem: false,
          },
          {
            value: 5,
            text: '검상',
            isGem: false,
          },
          {
            value: 6,
            text: '속공 준비',
            isGem: false,
          },
          {
            value: 7,
            text: '빠른 준비',
            isGem: false,
          },
          {
            value: 8,
            text: '강화된 일격',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 19040,
        class: 202,
        text: '체크메이트',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '꿰뚫는 일격',
            isGem: false,
          },
          {
            value: 2,
            text: '급소 타격',
            isGem: false,
          },
          {
            value: 4,
            text: '썬더 메이트',
            isGem: false,
          },
          {
            value: 5,
            text: '집중된 어둠',
            isGem: false,
          },
          {
            value: 6,
            text: '약점 포착',
            isGem: false,
          },
          {
            value: 8,
            text: '데드라인',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 23130,
        class: 303,
        text: '초신성 폭발',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '재빠른 손놀림',
            isGem: false,
          },
          {
            value: 2,
            text: '정의로운 약탈',
            isGem: false,
          },
          {
            value: 3,
            text: '빠른 준비',
            isGem: false,
          },
          {
            value: 4,
            text: '꿰뚫는 일격',
            isGem: false,
          },
          {
            value: 7,
            text: '격투가의 긍지',
            isGem: false,
          },
          {
            value: 8,
            text: '무회전 타격',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 22280,
        class: 302,
        text: '초풍각',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '뇌풍각',
            isGem: false,
          },
          {
            value: 2,
            text: '수풍각',
            isGem: false,
          },
          {
            value: 3,
            text: '화풍각',
            isGem: false,
          },
          {
            value: 5,
            text: '빠른 준비',
            isGem: false,
          },
          {
            value: 6,
            text: '재빠른 발놀림',
            isGem: false,
          },
          {
            value: 7,
            text: '분노의 회축',
            isGem: false,
          },
          {
            value: 8,
            text: '극강의 수련',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 39280,
        class: 312,
        text: '초풍각',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '뇌풍각',
            isGem: false,
          },
          {
            value: 2,
            text: '수풍각',
            isGem: false,
          },
          {
            value: 3,
            text: '화풍각',
            isGem: false,
          },
          {
            value: 5,
            text: '빠른 준비',
            isGem: false,
          },
          {
            value: 6,
            text: '재빠른 발놀림',
            isGem: false,
          },
          {
            value: 7,
            text: '분노의 회축',
            isGem: false,
          },
          {
            value: 8,
            text: '극강의 수련',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 29230,
        class: 503,
        text: '최후의 만찬',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '빠른 준비',
            isGem: false,
          },
          {
            value: 2,
            text: '화염탄',
            isGem: false,
          },
          {
            value: 3,
            text: '냉기탄',
            isGem: false,
          },
          {
            value: 4,
            text: '뜨거운 열기',
            isGem: false,
          },
          {
            value: 5,
            text: '강한 폭발',
            isGem: false,
          },
          {
            value: 6,
            text: '집행',
            isGem: false,
          },
          {
            value: 7,
            text: '더블 샷',
            isGem: false,
          },
          {
            value: 8,
            text: '연발 사격',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 38230,
        class: 512,
        text: '최후의 만찬',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '빠른 준비',
            isGem: false,
          },
          {
            value: 2,
            text: '화염탄',
            isGem: false,
          },
          {
            value: 3,
            text: '냉기탄',
            isGem: false,
          },
          {
            value: 4,
            text: '뜨거운 열기',
            isGem: false,
          },
          {
            value: 5,
            text: '강한 폭발',
            isGem: false,
          },
          {
            value: 6,
            text: '집행',
            isGem: false,
          },
          {
            value: 7,
            text: '더블 샷',
            isGem: false,
          },
          {
            value: 8,
            text: '연발 사격',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 17190,
        class: 104,
        text: '카운터 스피어',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '공격 준비',
            isGem: false,
          },
          {
            value: 2,
            text: '단단한 갑옷',
            isGem: false,
          },
          {
            value: 4,
            text: '빠른 준비',
            isGem: false,
          },
          {
            value: 5,
            text: '강화된 일격',
            isGem: false,
          },
          {
            value: 6,
            text: '약점 포착',
            isGem: false,
          },
          {
            value: 7,
            text: '폭격창',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 21040,
        class: 204,
        text: '컨빅션 코어',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '코어 유지',
            isGem: false,
          },
          {
            value: 2,
            text: '빠른 준비',
            isGem: false,
          },
          {
            value: 3,
            text: '강화된 코어',
            isGem: false,
          },
          {
            value: 4,
            text: '냉기 코어',
            isGem: false,
          },
          {
            value: 5,
            text: '결집 코어',
            isGem: false,
          },
          {
            value: 6,
            text: '파생 효과',
            isGem: false,
          },
          {
            value: 7,
            text: '코어 폭발',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 26550,
        class: 404,
        text: '콜 오브 나이프',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '그림자 충전',
            isGem: false,
          },
          {
            value: 2,
            text: '약육 강식',
            isGem: false,
          },
          {
            value: 3,
            text: '그림자 강탈',
            isGem: false,
          },
          {
            value: 5,
            text: '성장하는 어둠',
            isGem: false,
          },
          {
            value: 6,
            text: '치명적인 그림자',
            isGem: false,
          },
          {
            value: 7,
            text: '절망의 부름',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 19170,
        class: 202,
        text: '쿼드라 엑셀레이트',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 2,
            text: '날렵한 움직임',
            isGem: false,
          },
          {
            value: 4,
            text: '탁월한 기동성',
            isGem: false,
          },
          {
            value: 6,
            text: '카드 증가',
            isGem: false,
          },
          {
            value: 7,
            text: '헥사곤 강화',
            isGem: false,
          },
          {
            value: 8,
            text: '엑셀레이트 집중',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 29260,
        class: 503,
        text: '퀵 샷',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 3,
            text: '집중력 강화',
            isGem: false,
          },
          {
            value: 4,
            text: '가벼운 발걸음',
            isGem: false,
          },
          {
            value: 5,
            text: '사격 개시',
            isGem: false,
          },
          {
            value: 6,
            text: '성장 사격',
            isGem: false,
          },
          {
            value: 7,
            text: '마지막 빛',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 38020,
        class: 512,
        text: '퀵 스텝',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '생기 흡수',
            isGem: false,
          },
          {
            value: 3,
            text: '빠른 준비',
            isGem: false,
          },
          {
            value: 5,
            text: '연사',
            isGem: false,
          },
          {
            value: 7,
            text: '환영 사격',
            isGem: false,
          },
          {
            value: 8,
            text: '급소 사격',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 16050,
        class: 102,
        text: '크라임 해저드',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 2,
            text: '강화된 일격',
            isGem: false,
          },
          {
            value: 3,
            text: '예리한 일격',
            isGem: false,
          },
          {
            value: 4,
            text: '약점 포착',
            isGem: false,
          },
          {
            value: 5,
            text: '집중',
            isGem: false,
          },
          {
            value: 6,
            text: '폭주 강화',
            isGem: false,
          },
          {
            value: 7,
            text: '플레임 러쉬',
            isGem: false,
          },
          {
            value: 8,
            text: '레드 라이트닝',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 28190,
        class: 502,
        text: '크레모아 지뢰',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '재빠른 손놀림',
            isGem: false,
          },
          {
            value: 2,
            text: '무기 파괴',
            isGem: false,
          },
          {
            value: 3,
            text: '밀쳐내기',
            isGem: false,
          },
          {
            value: 5,
            text: '천둥벼락',
            isGem: false,
          },
          {
            value: 6,
            text: '불벼락',
            isGem: false,
          },
          {
            value: 7,
            text: '폭풍의 전율',
            isGem: false,
          },
          {
            value: 8,
            text: '집중된 폭풍',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 27180,
        class: 403,
        text: '크루얼 커터',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '날렵한 움직임',
            isGem: false,
          },
          {
            value: 2,
            text: '마력 조절',
            isGem: false,
          },
          {
            value: 3,
            text: '출혈 효과',
            isGem: false,
          },
          {
            value: 4,
            text: '전기 공격',
            isGem: false,
          },
          {
            value: 5,
            text: '대지 공격',
            isGem: false,
          },
          {
            value: 6,
            text: '원거리 공격',
            isGem: false,
          },
          {
            value: 7,
            text: '부메랑',
            isGem: false,
          },
          {
            value: 8,
            text: '잠식 해방',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 38070,
        class: 512,
        text: '타겟 다운',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 4,
            text: '대용량 탄창',
            isGem: false,
          },
          {
            value: 5,
            text: '작렬철강탄',
            isGem: false,
          },
          {
            value: 6,
            text: '반자동 라이플',
            isGem: false,
          },
          {
            value: 7,
            text: '정조준',
            isGem: false,
          },
          {
            value: 8,
            text: '천국의 계단',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 24260,
        class: 304,
        text: '탄지공',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '빠른 준비',
            isGem: false,
          },
          {
            value: 3,
            text: '재빠른 손놀림',
            isGem: false,
          },
          {
            value: 4,
            text: '기동성 약화',
            isGem: false,
          },
          {
            value: 5,
            text: '화염 공격',
            isGem: false,
          },
          {
            value: 6,
            text: '무방비 표적',
            isGem: false,
          },
          {
            value: 8,
            text: '초신속 타격',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 25130,
        class: 402,
        text: '터닝 슬래쉬',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 2,
            text: '탁월한 기동성',
            isGem: false,
          },
          {
            value: 3,
            text: '강화된 일격',
            isGem: false,
          },
          {
            value: 7,
            text: '집중 공격',
            isGem: false,
          },
          {
            value: 8,
            text: '트리플 턴',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 16190,
        class: 102,
        text: '템페스트 슬래쉬',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '집중',
            isGem: false,
          },
          {
            value: 2,
            text: '날렵한 움직임',
            isGem: false,
          },
          {
            value: 3,
            text: '빠른 준비',
            isGem: false,
          },
          {
            value: 4,
            text: '급소 타격',
            isGem: false,
          },
          {
            value: 5,
            text: '강화된 일격',
            isGem: false,
          },
          {
            value: 6,
            text: '약점 포착',
            isGem: false,
          },
          {
            value: 7,
            text: '휘몰아치기',
            isGem: false,
          },
          {
            value: 8,
            text: '폭풍 베기',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 29070,
        class: 503,
        text: '트리플 익스플로젼',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 2,
            text: '마무리 사격',
            isGem: false,
          },
          {
            value: 3,
            text: '집중력 강화',
            isGem: false,
          },
          {
            value: 4,
            text: '재빠른 손놀림',
            isGem: false,
          },
          {
            value: 6,
            text: '불꽃 탄환',
            isGem: false,
          },
          {
            value: 7,
            text: '쿼드 익스플로젼',
            isGem: false,
          },
          {
            value: 8,
            text: '슈퍼 익스플로젼',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 25090,
        class: 402,
        text: '트윈 쉐도우',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '마력 조절',
            isGem: false,
          },
          {
            value: 2,
            text: '오브 조절',
            isGem: false,
          },
          {
            value: 3,
            text: '빠른 준비',
            isGem: false,
          },
          {
            value: 4,
            text: '백어택 강화',
            isGem: false,
          },
          {
            value: 6,
            text: '급소 타격',
            isGem: false,
          },
          {
            value: 7,
            text: '십자 공격',
            isGem: false,
          },
          {
            value: 8,
            text: '전진 후퇴',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 23260,
        class: 303,
        text: '파쇄격',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '과격한 주먹',
            isGem: false,
          },
          {
            value: 3,
            text: '파격적인 행보',
            isGem: false,
          },
          {
            value: 4,
            text: '넘쳐나는 힘',
            isGem: false,
          },
          {
            value: 5,
            text: '충격 조절',
            isGem: false,
          },
          {
            value: 6,
            text: '단단한 갑옷',
            isGem: false,
          },
          {
            value: 7,
            text: '기습 공격',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 23090,
        class: 303,
        text: '파쇄의 강타',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '피의 갈증',
            isGem: false,
          },
          {
            value: 4,
            text: '삼연살',
            isGem: false,
          },
          {
            value: 5,
            text: '약점포착',
            isGem: false,
          },
          {
            value: 6,
            text: '집중',
            isGem: false,
          },
          {
            value: 7,
            text: '일격 필살',
            isGem: false,
          },
          {
            value: 8,
            text: '초월의 경지',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 24180,
        class: 304,
        text: '파쇄장',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '인내 강화',
            isGem: false,
          },
          {
            value: 2,
            text: '탁월한 기동성',
            isGem: false,
          },
          {
            value: 3,
            text: '재빠른 손놀림',
            isGem: false,
          },
          {
            value: 5,
            text: '공격 준비',
            isGem: false,
          },
          {
            value: 7,
            text: '달인의 장법',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 20110,
        class: 203,
        text: '파우루',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '황혼의 연소',
            isGem: false,
          },
          {
            value: 4,
            text: '공격력 강화',
            isGem: false,
          },
          {
            value: 5,
            text: '타오르는 불꽃',
            isGem: false,
          },
          {
            value: 6,
            text: '소환 유지',
            isGem: false,
          },
          {
            value: 7,
            text: '푸른 불꽃 파우루',
            isGem: false,
          },
          {
            value: 8,
            text: '화염의 파우루',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 16030,
        class: 102,
        text: '파워 브레이크',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '예리한 일격',
            isGem: false,
          },
          {
            value: 2,
            text: '날렵한 움직임',
            isGem: false,
          },
          {
            value: 3,
            text: '정신 강화',
            isGem: false,
          },
          {
            value: 5,
            text: '강화된 일격',
            isGem: false,
          },
          {
            value: 6,
            text: '무방비 표적',
            isGem: false,
          },
          {
            value: 7,
            text: '위력 축적',
            isGem: false,
          },
          {
            value: 8,
            text: '소용돌이',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 18220,
        class: 103,
        text: '파워 숄더',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '단단한 신체',
            isGem: false,
          },
          {
            value: 2,
            text: '승리의 계약',
            isGem: false,
          },
          {
            value: 3,
            text: '치명적인 힘',
            isGem: false,
          },
          {
            value: 4,
            text: '목표 완료',
            isGem: false,
          },
          {
            value: 5,
            text: '반중력',
            isGem: false,
          },
          {
            value: 7,
            text: '우직한 해머',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 18180,
        class: 103,
        text: '파워 스트라이크',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '무모한 공격',
            isGem: false,
          },
          {
            value: 2,
            text: '견딜 수 없는 힘',
            isGem: false,
          },
          {
            value: 3,
            text: '빠른 준비',
            isGem: false,
          },
          {
            value: 4,
            text: '행운의 코어',
            isGem: false,
          },
          {
            value: 5,
            text: '성장하는 해머',
            isGem: false,
          },
          {
            value: 7,
            text: '끝없는 맹공',
            isGem: false,
          },
          {
            value: 8,
            text: '치밀한 타격',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 17060,
        class: 104,
        text: '파이어 불릿',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '단단한 갑옷',
            isGem: false,
          },
          {
            value: 2,
            text: '행운의 기회',
            isGem: false,
          },
          {
            value: 3,
            text: '마력 조절',
            isGem: false,
          },
          {
            value: 5,
            text: '소이탄',
            isGem: false,
          },
          {
            value: 6,
            text: '강화된 일격',
            isGem: false,
          },
          {
            value: 7,
            text: '공격창출',
            isGem: false,
          },
          {
            value: 8,
            text: '한방포격',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 26140,
        class: 404,
        text: '팬텀 댄서',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 4,
            text: '발목 절단',
            isGem: false,
          },
          {
            value: 6,
            text: '날카로운 단검',
            isGem: false,
          },
          {
            value: 7,
            text: '마무리 동작',
            isGem: false,
          },
          {
            value: 8,
            text: '폭풍의 춤',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 29270,
        class: 503,
        text: '퍼펙트 샷',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '출혈 효과',
            isGem: false,
          },
          {
            value: 4,
            text: '정밀 사격',
            isGem: false,
          },
          {
            value: 6,
            text: '마무리 사격',
            isGem: false,
          },
          {
            value: 8,
            text: '강화된 사격',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 38270,
        class: 512,
        text: '퍼펙트 샷',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '출혈 효과',
            isGem: false,
          },
          {
            value: 4,
            text: '정밀 사격',
            isGem: false,
          },
          {
            value: 6,
            text: '마무리 사격',
            isGem: false,
          },
          {
            value: 8,
            text: '강화된 사격',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 18170,
        class: 103,
        text: '퍼펙트 스윙',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '약점포착',
            isGem: false,
          },
          {
            value: 2,
            text: '마무리 일격',
            isGem: false,
          },
          {
            value: 4,
            text: '뇌진탕',
            isGem: false,
          },
          {
            value: 5,
            text: '날카로운 해머',
            isGem: false,
          },
          {
            value: 7,
            text: '학살의 시간',
            isGem: false,
          },
          {
            value: 8,
            text: '무절제',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 35200,
        class: 505,
        text: '펄스 파이어',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 4,
            text: '충격 펄스',
            isGem: false,
          },
          {
            value: 5,
            text: '섬광 펄스',
            isGem: false,
          },
          {
            value: 6,
            text: '배터리 충전',
            isGem: false,
          },
          {
            value: 7,
            text: '명사수',
            isGem: false,
          },
          {
            value: 8,
            text: '펄스 차지',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 25190,
        class: 402,
        text: '페이탈 웨이브',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '오브 조절',
            isGem: false,
          },
          {
            value: 2,
            text: '재빠른 손놀림',
            isGem: false,
          },
          {
            value: 3,
            text: '약육강식',
            isGem: false,
          },
          {
            value: 5,
            text: '급소 타격',
            isGem: false,
          },
          {
            value: 6,
            text: '냉기 공격',
            isGem: false,
          },
          {
            value: 7,
            text: '더블 웨이브',
            isGem: false,
          },
          {
            value: 8,
            text: '데스 웨이브',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 19160,
        class: 202,
        text: '포 카드',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '신속한 준비',
            isGem: false,
          },
          {
            value: 2,
            text: '정신 강화',
            isGem: false,
          },
          {
            value: 4,
            text: '눈속임',
            isGem: false,
          },
          {
            value: 6,
            text: '카드 강화',
            isGem: false,
          },
          {
            value: 7,
            text: '지연 충격',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 38240,
        class: 512,
        text: '포커스 샷',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 4,
            text: '강화 탄환',
            isGem: false,
          },
          {
            value: 5,
            text: '섬광',
            isGem: false,
          },
          {
            value: 6,
            text: '더블탭',
            isGem: false,
          },
          {
            value: 7,
            text: '빠른 마무리',
            isGem: false,
          },
          {
            value: 8,
            text: '최후의 일격',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 30100,
        class: 504,
        text: '포탑 소환',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '고속 충전',
            isGem: false,
          },
          {
            value: 2,
            text: '보조 배터리',
            isGem: false,
          },
          {
            value: 4,
            text: '강화된 포탑',
            isGem: false,
          },
          {
            value: 7,
            text: '빅 팩',
            isGem: false,
          },
          {
            value: 8,
            text: '레이저 포탑',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 21080,
        class: 204,
        text: '폭풍의 서곡',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '정신 집중',
            isGem: false,
          },
          {
            value: 2,
            text: '빠른 준비',
            isGem: false,
          },
          {
            value: 3,
            text: '약육 강식',
            isGem: false,
          },
          {
            value: 5,
            text: '선율 증가',
            isGem: false,
          },
          {
            value: 6,
            text: '낙뢰 강화',
            isGem: false,
          },
          {
            value: 7,
            text: '강력한 서곡',
            isGem: false,
          },
          {
            value: 8,
            text: '낙뢰 집중',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 25170,
        class: 402,
        text: '폴스타',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '빠른 준비',
            isGem: false,
          },
          {
            value: 2,
            text: '오브 조절',
            isGem: false,
          },
          {
            value: 3,
            text: '약점 포착',
            isGem: false,
          },
          {
            value: 5,
            text: '급소 타격',
            isGem: false,
          },
          {
            value: 7,
            text: '문 스타',
            isGem: false,
          },
          {
            value: 8,
            text: '스타 더스트',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 18070,
        class: 103,
        text: '풀 스윙',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '단단한 심장',
            isGem: false,
          },
          {
            value: 2,
            text: '재빠른 움직임',
            isGem: false,
          },
          {
            value: 3,
            text: '빠른 준비',
            isGem: false,
          },
          {
            value: 5,
            text: '절대적인 힘',
            isGem: false,
          },
          {
            value: 6,
            text: '무서운 해머',
            isGem: false,
          },
          {
            value: 7,
            text: '야수의 눈',
            isGem: false,
          },
          {
            value: 8,
            text: '광폭한 공격',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 24190,
        class: 304,
        text: '풍뢰일광포',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '충전 강화',
            isGem: false,
          },
          {
            value: 2,
            text: '본능적인 움직임',
            isGem: false,
          },
          {
            value: 3,
            text: '시간의 노래',
            isGem: false,
          },
          {
            value: 5,
            text: '표적 삭제',
            isGem: false,
          },
          {
            value: 7,
            text: '상황 종료',
            isGem: false,
          },
          {
            value: 8,
            text: '폭발적인 공격',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 34050,
        class: 305,
        text: '풍진격',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '마력 조절',
            isGem: false,
          },
          {
            value: 3,
            text: '발묶기',
            isGem: false,
          },
          {
            value: 4,
            text: '난무 특화',
            isGem: false,
          },
          {
            value: 5,
            text: '약점포착',
            isGem: false,
          },
          {
            value: 6,
            text: '최후의 판단',
            isGem: false,
          },
          {
            value: 7,
            text: '대회전',
            isGem: false,
          },
          {
            value: 8,
            text: '내려치기',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 29140,
        class: 503,
        text: '플라즈마 불릿',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '원거리 사격',
            isGem: false,
          },
          {
            value: 2,
            text: '재빠른 사격',
            isGem: false,
          },
          {
            value: 5,
            text: '빙결 효과',
            isGem: false,
          },
          {
            value: 6,
            text: '급소 사격',
            isGem: false,
          },
          {
            value: 7,
            text: '초전하 지대',
            isGem: false,
          },
          {
            value: 8,
            text: '플라즈마 분열',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 38140,
        class: 512,
        text: '플라즈마 불릿',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '원거리 사격',
            isGem: false,
          },
          {
            value: 2,
            text: '재빠른 사격',
            isGem: false,
          },
          {
            value: 5,
            text: '빙결 효과',
            isGem: false,
          },
          {
            value: 6,
            text: '급소 사격',
            isGem: false,
          },
          {
            value: 7,
            text: '초전하 지대',
            isGem: false,
          },
          {
            value: 8,
            text: '플라즈마 분열',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 30210,
        class: 504,
        text: '플라즈마 스톰',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '재빠른 손놀림',
            isGem: false,
          },
          {
            value: 2,
            text: '단단한 갑옷',
            isGem: false,
          },
          {
            value: 3,
            text: '기절 효과',
            isGem: false,
          },
          {
            value: 4,
            text: '고속 비행',
            isGem: false,
          },
          {
            value: 7,
            text: '플라즈마 성장',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 16300,
        class: 102,
        text: '피니쉬 스트라이크',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 2,
            text: '출혈 효과',
            isGem: false,
          },
          {
            value: 3,
            text: '강화된 일격',
            isGem: false,
          },
          {
            value: 4,
            text: '마무리 공격',
            isGem: false,
          },
          {
            value: 6,
            text: '약점 포착',
            isGem: false,
          },
          {
            value: 7,
            text: '충격파',
            isGem: false,
          },
          {
            value: 8,
            text: '확인사살',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 38260,
        class: 512,
        text: '피스키퍼',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '마력 조절',
            isGem: false,
          },
          {
            value: 4,
            text: '대공 사격',
            isGem: false,
          },
          {
            value: 6,
            text: '케나인 CQC',
            isGem: false,
          },
          {
            value: 7,
            text: '기절 효과',
            isGem: false,
          },
          {
            value: 8,
            text: '정화 의식',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 27110,
        class: 403,
        text: '피어스 쏜',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '마력 조절',
            isGem: false,
          },
          {
            value: 2,
            text: '출혈 효과',
            isGem: false,
          },
          {
            value: 3,
            text: '강화된 일격',
            isGem: false,
          },
          {
            value: 4,
            text: '부패한 지대',
            isGem: false,
          },
          {
            value: 5,
            text: '트리플 쏜',
            isGem: false,
          },
          {
            value: 6,
            text: '빠른 준비',
            isGem: false,
          },
          {
            value: 7,
            text: '전진하는 가시',
            isGem: false,
          },
          {
            value: 8,
            text: '거대한 가시',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 27170,
        class: 403,
        text: '하울링',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '재빠른 손놀림',
            isGem: false,
          },
          {
            value: 2,
            text: '공포 유지',
            isGem: false,
          },
          {
            value: 3,
            text: '빠른 준비',
            isGem: false,
          },
          {
            value: 4,
            text: '약육강식',
            isGem: false,
          },
          {
            value: 5,
            text: '잠식하는 힘',
            isGem: false,
          },
          {
            value: 8,
            text: '마이티 로어',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 21270,
        class: 204,
        text: '행진곡',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '시간 감소',
            isGem: false,
          },
          {
            value: 2,
            text: '정신 강화',
            isGem: false,
          },
          {
            value: 3,
            text: '경쾌한 행진곡',
            isGem: false,
          },
          {
            value: 5,
            text: '행진 강화',
            isGem: false,
          },
          {
            value: 7,
            text: '위협적 행진',
            isGem: false,
          },
          {
            value: 8,
            text: '선율의 행진',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 25210,
        class: 402,
        text: '헤드 헌트',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '빠른 준비',
            isGem: false,
          },
          {
            value: 2,
            text: '마력 조절',
            isGem: false,
          },
          {
            value: 3,
            text: '무기 파괴',
            isGem: false,
          },
          {
            value: 6,
            text: '강화된 일격',
            isGem: false,
          },
          {
            value: 7,
            text: '약점 포착',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 18050,
        class: 103,
        text: '헤비 크러쉬',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 2,
            text: '암흑물질',
            isGem: false,
          },
          {
            value: 3,
            text: '대지의 힘',
            isGem: false,
          },
          {
            value: 4,
            text: '분쇄',
            isGem: false,
          },
          {
            value: 5,
            text: '행운의 코어',
            isGem: false,
          },
          {
            value: 6,
            text: '무방비 표적',
            isGem: false,
          },
          {
            value: 8,
            text: '여진',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 16080,
        class: 102,
        text: '헬 블레이드',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 2,
            text: '도약',
            isGem: false,
          },
          {
            value: 4,
            text: '융해',
            isGem: false,
          },
          {
            value: 5,
            text: '용암 분출',
            isGem: false,
          },
          {
            value: 6,
            text: '필사의 일격',
            isGem: false,
          },
          {
            value: 7,
            text: '대지 뒤집기',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 37340,
        class: 205,
        text: '혹한의 부름',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '오한',
            isGem: false,
          },
          {
            value: 2,
            text: '정신 강화',
            isGem: false,
          },
          {
            value: 3,
            text: '깨달음',
            isGem: false,
          },
          {
            value: 4,
            text: '지배력 강화',
            isGem: false,
          },
          {
            value: 5,
            text: '불완전한 지배',
            isGem: false,
          },
          {
            value: 6,
            text: '통찰력',
            isGem: false,
          },
          {
            value: 7,
            text: '강화된 일격',
            isGem: false,
          },
          {
            value: 8,
            text: '최후의 일격',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 30120,
        class: 504,
        text: '화염방사기',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '급소 공격',
            isGem: false,
          },
          {
            value: 2,
            text: '빠른 준비',
            isGem: false,
          },
          {
            value: 3,
            text: '화력 조절',
            isGem: false,
          },
          {
            value: 6,
            text: '방어막',
            isGem: false,
          },
          {
            value: 7,
            text: '푸른 불꽃',
            isGem: false,
          },
          {
            value: 8,
            text: '불 태우기',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 22130,
        class: 302,
        text: '화조강림',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 2,
            text: '가벼운 표적',
            isGem: false,
          },
          {
            value: 3,
            text: '뜨거운 열기',
            isGem: false,
          },
          {
            value: 4,
            text: '맹렬한 공격',
            isGem: false,
          },
          {
            value: 5,
            text: '약점포착',
            isGem: false,
          },
          {
            value: 6,
            text: '동결 효과',
            isGem: false,
          },
          {
            value: 7,
            text: '멈추지 않는 기습',
            isGem: false,
          },
          {
            value: 8,
            text: '날렵한 움직임',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 39130,
        class: 312,
        text: '화조강림',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 2,
            text: '가벼운 표적',
            isGem: false,
          },
          {
            value: 3,
            text: '뜨거운 열기',
            isGem: false,
          },
          {
            value: 4,
            text: '맹렬한 공격',
            isGem: false,
          },
          {
            value: 5,
            text: '약점포착',
            isGem: false,
          },
          {
            value: 6,
            text: '동결 효과',
            isGem: false,
          },
          {
            value: 7,
            text: '멈추지 않는 기습',
            isGem: false,
          },
          {
            value: 8,
            text: '날렵한 움직임',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 24220,
        class: 304,
        text: '회선격추',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 2,
            text: '속도 강화',
            isGem: false,
          },
          {
            value: 5,
            text: '무방비 표적',
            isGem: false,
          },
          {
            value: 6,
            text: '무자비',
            isGem: false,
          },
          {
            value: 8,
            text: '적극적인 공격',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 34070,
        class: 305,
        text: '회선창',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '마력 조절',
            isGem: false,
          },
          {
            value: 4,
            text: '약점포착',
            isGem: false,
          },
          {
            value: 5,
            text: '화력 조절',
            isGem: false,
          },
          {
            value: 7,
            text: '바닥 가르기',
            isGem: false,
          },
          {
            value: 8,
            text: '연속 회전',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 23210,
        class: 303,
        text: '회심의 일격',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '빠른 준비',
            isGem: false,
          },
          {
            value: 2,
            text: '급소타격',
            isGem: false,
          },
          {
            value: 3,
            text: '단전 강화',
            isGem: false,
          },
          {
            value: 5,
            text: '인대 파열',
            isGem: false,
          },
          {
            value: 7,
            text: '통달',
            isGem: false,
          },
          {
            value: 8,
            text: '초열음파',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 36030,
        class: 105,
        text: '회전 베기',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 2,
            text: '급소 타격',
            isGem: false,
          },
          {
            value: 3,
            text: '혼신의 일격',
            isGem: false,
          },
          {
            value: 4,
            text: '약육 강식',
            isGem: false,
          },
          {
            value: 5,
            text: '힘의 방출',
            isGem: false,
          },
          {
            value: 6,
            text: '탁월한 기동성',
            isGem: false,
          },
          {
            value: 7,
            text: '연속 공격',
            isGem: false,
          },
          {
            value: 8,
            text: '검의 흔적',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 28100,
        class: 502,
        text: '회피 사격',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '재빠른 손놀림',
            isGem: false,
          },
          {
            value: 2,
            text: '탁월한 기동성',
            isGem: false,
          },
          {
            value: 3,
            text: '빠른 준비',
            isGem: false,
          },
          {
            value: 4,
            text: '가벼운 발걸음',
            isGem: false,
          },
          {
            value: 6,
            text: '무거운 화살',
            isGem: false,
          },
          {
            value: 7,
            text: '회심의 일격',
            isGem: false,
          },
          {
            value: 8,
            text: '전략적 회피',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 30140,
        class: 504,
        text: '휘두르기',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '마력 조절',
            isGem: false,
          },
          {
            value: 6,
            text: '마나 갈취',
            isGem: false,
          },
          {
            value: 7,
            text: '강화된 일격',
            isGem: false,
          },
          {
            value: 8,
            text: '기절 유지',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 16070,
        class: 102,
        text: '휠윈드',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '가벼운 발걸음',
            isGem: false,
          },
          {
            value: 3,
            text: '빠른 준비',
            isGem: false,
          },
          {
            value: 4,
            text: '전진 베기',
            isGem: false,
          },
          {
            value: 5,
            text: '대차륜',
            isGem: false,
          },
          {
            value: 6,
            text: '갈라진 칼날',
            isGem: false,
          },
          {
            value: 7,
            text: '진공베기',
            isGem: false,
          },
          {
            value: 8,
            text: '용오름',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 24170,
        class: 304,
        text: '흡철장',
        isSkillGroup: false,
        marketMenuSkillTripodList: [
          {
            value: 1,
            text: '단단한 갑옷',
            isGem: false,
          },
          {
            value: 2,
            text: '충전 강화',
            isGem: false,
          },
          {
            value: 3,
            text: '운용 집중',
            isGem: false,
          },
          {
            value: 5,
            text: '재빠른 손놀림',
            isGem: false,
          },
          {
            value: 6,
            text: '무자비',
            isGem: false,
          },
          {
            value: 7,
            text: '폭발하는 불꽃',
            isGem: false,
          },
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 23000,
        class: 203,
        text: '고대의 정령 스킬',
        isSkillGroup: true,
        marketMenuSkillTripodList: [
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 41000,
        class: 402,
        text: '버스트 스킬',
        isSkillGroup: true,
        marketMenuSkillTripodList: [
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 51000,
        class: 502,
        text: '실버호크 스킬',
        isSkillGroup: true,
        marketMenuSkillTripodList: [
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 54000,
        class: 505,
        text: '싱크 스킬',
        isSkillGroup: true,
        marketMenuSkillTripodList: [
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 42000,
        class: 403,
        text: '악마 스킬',
        isSkillGroup: true,
        marketMenuSkillTripodList: [
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 13000,
        class: 103,
        text: '중력 가중 스킬',
        isSkillGroup: true,
        marketMenuSkillTripodList: [
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
      {
        value: 53000,
        class: 504,
        text: '포격 스킬',
        isSkillGroup: true,
        marketMenuSkillTripodList: [
          {
            value: 500,
            text: '스킬 공격력 증가',
            isGem: true,
          },
          {
            value: 2700,
            text: '스킬 쿨타임 감소',
            isGem: true,
          },
        ],
      },
    ],
  },
};
