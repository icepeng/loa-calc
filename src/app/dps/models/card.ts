import { addStat, Stat } from './stat';

export type CardStatus = string[];

export const cardData: Record<string, Stat> = {
  '남겨진 바람의 절벽 (12)': Stat({
    crit: 7,
  }),
  '세상을 구하는 빛 (18)': Stat({
    pdamageIndep: 7,
  }),
  '세상을 구하는 빛 (30)': Stat({
    pdamageIndep: 15,
  }),
};

export function getCardStat(cardStatus: CardStatus): Stat {
  let stat = Stat({});
  for (const card of cardStatus) {
    stat = addStat(stat, cardData[card]);
  }
  return stat;
}
