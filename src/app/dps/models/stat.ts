export interface InternalStat {
  weaponAtt: number;
  mainStat: number;
  pmainStat: number;
  crit: number;
  special: number;
  swift: number;
}

export interface Stat {
  crit: number;
  critDamage: number;
  critDamageHead: number;
  critDamageBack: number;
  pdamage: number;
  pdamageIndep: number;
  pdamageIndepHead: number;
  pdamageIndepBack: number;
  armorIgnore: number;
  pattCommon: number;
  pattJob: number;
  pattIndep: number;
  att: number;
  movingSpeed: number;
}

export function addPdamageIndep(a: number, b: number): number {
  return a + b + a * b * 0.01;
}

export function subPdamageIndep(a: number, b: number): number {
  return ((100 + a) / (100 + b)) * 100 - 100;
}

export function InternalStat(obj: Partial<InternalStat> = {}): InternalStat {
  return {
    weaponAtt: 0,
    mainStat: 0,
    pmainStat: 0,
    crit: 0,
    special: 0,
    swift: 0,
    ...obj,
  };
}

export function Stat(obj: Partial<Stat> = {}): Stat {
  return {
    crit: 0,
    critDamage: 0,
    critDamageHead: 0,
    critDamageBack: 0,
    pdamage: 0,
    pdamageIndep: 0,
    pdamageIndepHead: 0,
    pdamageIndepBack: 0,
    armorIgnore: 0,
    pattCommon: 0,
    pattJob: 0,
    pattIndep: 0,
    att: 0,
    movingSpeed: 0,
    ...obj,
  };
}

export function translateStat(internalStat: InternalStat): Stat {
  return Stat({
    crit: internalStat.crit * 0.03577,
    critDamage: 200,
    att: Math.sqrt(
      (internalStat.weaponAtt *
        ((internalStat.mainStat * (100 + internalStat.pmainStat)) / 100)) /
        6
    ),
    movingSpeed: internalStat.swift * 0.01717,
  });
}

export function addInternalStat(
  a: InternalStat,
  b: InternalStat
): InternalStat {
  return {
    weaponAtt: a.weaponAtt + b.weaponAtt,
    mainStat: a.mainStat + b.mainStat,
    pmainStat: a.pmainStat + b.pmainStat,
    crit: a.crit + b.crit,
    special: a.special + b.special,
    swift: a.swift + b.swift,
  };
}

export function addStat(a: Stat, b: Stat): Stat {
  return {
    crit: a.crit + b.crit,
    critDamage: a.critDamage + b.critDamage,
    critDamageHead: a.critDamageHead + b.critDamageHead,
    critDamageBack: a.critDamageBack + b.critDamageBack,
    pdamage: a.pdamage + b.pdamage,
    pdamageIndep: addPdamageIndep(a.pdamageIndep, b.pdamageIndep),
    pdamageIndepHead: addPdamageIndep(a.pdamageIndepHead, b.pdamageIndepHead),
    pdamageIndepBack: addPdamageIndep(a.pdamageIndepBack, b.pdamageIndepBack),
    armorIgnore: 100 - 0.01 * ((100 - a.armorIgnore) * (100 - b.armorIgnore)),
    pattCommon: a.pattCommon + b.pattCommon,
    pattJob: a.pattJob + b.pattJob,
    pattIndep: addPdamageIndep(a.pattIndep, b.pattIndep),
    att: a.att + b.att,
    movingSpeed: a.movingSpeed + b.movingSpeed,
  };
}

export function getTotalAtt(stat: Stat): number {
  const patt = addPdamageIndep(
    addPdamageIndep(stat.pattCommon, stat.pattJob),
    stat.pattIndep
  );
  return stat.att * (1 + patt / 100);
}

export function getMultiplier(stat: Stat): number {
  return (1 + stat.pdamageIndep / 100) * (1 + stat.pdamage / 100);
}
