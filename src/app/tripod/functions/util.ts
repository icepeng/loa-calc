import { marketData } from '../data';
import { TripodValue } from './type';

const skillMap = new Map(
  marketData.marketAuction.marketMenuAuctionSkillList.map((data) => [
    data.value,
    data,
  ])
);

const tripodMap = new Map(
  marketData.marketAuction.marketMenuAuctionSkillList.flatMap((skill) =>
    skill.marketMenuSkillTripodList.map((tripod) => [
      `${skill.value}-${tripod.value}`,
      tripod,
    ])
  )
);

export function getTripodString(item: TripodValue) {
  const skill = skillMap.get(item.skill)!;
  const tripod = tripodMap.get(`${item.skill}-${item.tripod}`)!;
  return `[${skill.text}] ${tripod.text}+${item.level}`;
}

export function hashTripod(tripod: TripodValue) {
  return `${tripod.skill}-${tripod.tripod}-${tripod.level}`;
}
