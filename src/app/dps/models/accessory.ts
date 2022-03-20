import { addInternalStat, InternalStat } from './stat';

export type AccessoryGrade = 'epic' | 'legendary' | 'relic' | 'ancient';
export type AccessoryCategory = 'necklace' | 'ear' | 'ring';
export type AccessorySlot = 'necklace' | 'ear1' | 'ear2' | 'ring1' | 'ring2';
export type AccessoryStatus = Record<AccessorySlot, AccessoryGrade>;

export const accessoryData: Record<
  AccessoryGrade,
  Record<AccessoryCategory, InternalStat>
> = {
  epic: {
    necklace: InternalStat({
      mainStat: 6554,
    }),
    ear: InternalStat({
      mainStat: 5097,
    }),
    ring: InternalStat({
      mainStat: 4733,
    }),
  },
  legendary: {
    necklace: InternalStat({
      mainStat: 7171,
    }),
    ear: InternalStat({
      mainStat: 5578,
    }),
    ring: InternalStat({
      mainStat: 5179,
    }),
  },
  relic: {
    necklace: InternalStat({
      mainStat: 9872,
    }),
    ear: InternalStat({
      mainStat: 7678,
    }),
    ring: InternalStat({
      mainStat: 7130,
    }),
  },
  ancient: {
    necklace: InternalStat({
      mainStat: 12546,
    }),
    ear: InternalStat({
      mainStat: 9758,
    }),
    ring: InternalStat({
      mainStat: 9061,
    }),
  },
};

const slotCategoryMap: Record<AccessorySlot, AccessoryCategory> = {
  necklace: 'necklace',
  ear1: 'ear',
  ear2: 'ear',
  ring1: 'ring',
  ring2: 'ring',
};

export function getAccessoryInternalStat(
  accessoryStatus: AccessoryStatus
): InternalStat {
  let internalStat = InternalStat({});
  for (const [slot, grade] of Object.entries(accessoryStatus)) {
    internalStat = addInternalStat(
      internalStat,
      accessoryData[grade][slotCategoryMap[slot as AccessorySlot]]
    );
  }
  return internalStat;
}
