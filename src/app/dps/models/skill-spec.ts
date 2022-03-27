import { SkillType } from './skill';
import { Stat } from './stat';
import { Tripod } from './tripod';
import { PartialBy } from './type';

export interface SkillSpec {
  name: string;
  damageTable: Record<number, [number, number]>;
  multiplier: number;
  type: SkillType;
  head: boolean;
  back: boolean;
  consumeMana: boolean;
  configurable: boolean;
  tripods: Tripod[];
  skillAfters: string[];
  selectableOptions: { name: string; stat: Stat }[];
  statFromSpecial?: (special: number) => Stat;
  tags: string[];
}

const defaultSkillSpec = {
  multiplier: 1,
  head: false,
  back: false,
  consumeMana: true,
  configurable: true,
  tripods: [],
  skillAfters: [],
  selectableOptions: [],
  tags: [],
};

export function SkillSpec(
  obj: PartialBy<SkillSpec, keyof typeof defaultSkillSpec>
): SkillSpec {
  return {
    ...defaultSkillSpec,
    ...obj,
  };
}

export function getTripod(
  skillSpec: SkillSpec,
  tripodName: string
): Tripod | undefined {
  return skillSpec.tripods.find((tripod) => tripod.name === tripodName);
}
