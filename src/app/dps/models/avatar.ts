import { addInternalStat, InternalStat } from './stat';

export type AvatarGrade = 'rare' | 'epic' | 'legendary';
export type AvatarSlot = 'head' | 'top' | 'bottom' | 'weapon';
export type AvatarStatus = Record<AvatarSlot, AvatarGrade>;

export const avatarData: Record<AvatarGrade, InternalStat> = {
  rare: InternalStat({ pmainStat: 0.5 }),
  epic: InternalStat({ pmainStat: 1 }),
  legendary: InternalStat({ pmainStat: 2 }),
};

export function getAvatarInternalStat(
  avatarStatus: AvatarStatus
): InternalStat {
  let internalStat = InternalStat({});
  for (const grade of Object.values(avatarStatus)) {
    internalStat = addInternalStat(internalStat, avatarData[grade]);
  }
  return internalStat;
}
