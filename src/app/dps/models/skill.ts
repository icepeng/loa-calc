import { Enemy, getReductionRate } from './enemy';
import { addStat, getMultiplier, getTotalAtt, Stat } from './stat';

export type SkillType =
  | 'Normal'
  | 'Chain'
  | 'Combo'
  | 'Charge'
  | 'Holding'
  | 'Casting'
  | 'Area';
export type AttackPosition = 'head' | 'back' | 'side';

export interface Skill {
  name: string;
  base: number;
  coefficient: number;
  multiplier: number;
  type: SkillType;
  head: boolean;
  back: boolean;
  consumeMana: boolean;
  stat: Stat;
  skillAfters: Skill[];
  tags: string[];
}

export interface SkillResult {
  allCrit: number;
  noCrit: number;
  average: number;
  stat: Stat;
}

export function getDamage(
  skill: Skill,
  enemy: Enemy,
  position: AttackPosition,
  initialStat: Stat
): SkillResult {
  const skillAfterResults = skill.skillAfters.map((sk) =>
    getDamage(sk, enemy, position, initialStat)
  );
  const skillAftersAllCrit = skillAfterResults.reduce(
    (sum, { allCrit }) => sum + allCrit,
    0
  );
  const skillAftersNoCrit = skillAfterResults.reduce(
    (sum, { noCrit }) => sum + noCrit,
    0
  );
  const skillAftersAverage = skillAfterResults.reduce(
    (sum, { average }) => sum + average,
    0
  );

  let stat = addStat(skill.stat, initialStat);
  if (skill.head && position === 'head') {
    stat = addStat(stat, Stat({ pdamageIndep: 20 }));
    stat = addStat(
      stat,
      Stat({
        pdamageIndep: stat.pdamageIndepHead,
        critDamage: stat.critDamageHead,
      })
    );
  }
  if (skill.back && position === 'back') {
    stat = addStat(stat, Stat({ pdamageIndep: 5, crit: 10 }));
    stat = addStat(
      stat,
      Stat({
        pdamageIndep: stat.pdamageIndepBack,
        critDamage: stat.critDamageBack,
      })
    );
  }

  const baseDmg = skill.base + getTotalAtt(stat) * skill.coefficient;
  const enemyReductionRate = getReductionRate(enemy, stat.armorIgnore);
  const nocritDmg =
    baseDmg * getMultiplier(stat) * enemyReductionRate * skill.multiplier;
  const critDmg = (nocritDmg * stat.critDamage) / 100;

  const crit = Math.min(stat.crit, 100) / 100;
  const damage = (1 - crit) * nocritDmg + crit * critDmg;

  return {
    allCrit: skillAftersAllCrit + critDmg,
    noCrit: skillAftersNoCrit + nocritDmg,
    average: skillAftersAverage + damage,
    stat,
  };
}
