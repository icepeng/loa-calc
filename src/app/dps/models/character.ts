import { AccessoryStatus, getAccessoryInternalStat } from './accessory';
import { AvatarStatus, getAvatarInternalStat } from './avatar';
import { CardStatus, getCardStat } from './card';
import { EngravingStatus } from './engraving';
import { GearStatus, getGearInternalStat } from './gear';
import { SkillStatus } from './job';
import { getSetitemStat, SetitemStatus } from './setitem';
import {
  addInternalStat,
  addStat,
  InternalStat,
  Stat,
  translateStat,
} from './stat';

export interface CommonStatus {
  combatLevel: number;
  expeditionStat: number;
  crit: number;
  special: number;
  swift: number;
  weaponPdamage: number;
}

export interface Character {
  jobName: string;
  commonStatus: CommonStatus;
  gearStatus: GearStatus;
  accessoryStatus: AccessoryStatus;
  avatarStatus: AvatarStatus;
  cardStatus: CardStatus;
  engravingStatus: EngravingStatus;
  setitemStatus: SetitemStatus;
  skillStatus: SkillStatus;
}

const combatLevelMap: Record<number, number> = {
  50: 409,
  51: 410,
  52: 411,
  53: 412,
  54: 414,
  55: 416,
  56: 418,
  57: 420,
  58: 423,
  59: 426,
  60: 429,
};

export function getInternalStat(character: Character): InternalStat {
  const commonStatus = character.commonStatus;
  let internalStat = InternalStat({
    mainStat:
      combatLevelMap[commonStatus.combatLevel] + commonStatus.expeditionStat,
    crit: commonStatus.crit,
    special: commonStatus.special,
    swift: commonStatus.swift,
  });
  // internalStat = addInternalStat(internalStat, character.bracelet_internal_stat)
  internalStat = addInternalStat(
    internalStat,
    getGearInternalStat(character.gearStatus)
  );
  internalStat = addInternalStat(
    internalStat,
    getAccessoryInternalStat(character.accessoryStatus)
  );
  internalStat = addInternalStat(
    internalStat,
    getAvatarInternalStat(character.avatarStatus)
  );
  return internalStat;
}

export function getBasisStat(
  character: Character,
  internalStat: InternalStat,
  additionalStat: Stat = Stat()
): Stat {
  let stat = translateStat(internalStat);
  // character.bracelet_stat
  stat = addStat(stat, Stat({ pdamage: character.commonStatus.weaponPdamage }));
  stat = addStat(stat, additionalStat);
  stat = addStat(stat, getSetitemStat(character.setitemStatus));
  stat = addStat(stat, getCardStat(character.cardStatus));
  return stat;
}
