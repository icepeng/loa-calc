import { Council, data } from '../../../../.yalc/@mokoko/elixir';

const indexedTable = data.councils.reduce((acc, council) => {
  const key = JSON.stringify(council.logics);
  acc[key] = council;
  return acc;
}, {} as Record<string, Council>);

export function getConvertedCouncil(
  council: Council,
  condition1: number | null,
  condition2: number | null
) {
  const logics = [];
  if (!!council.logics[0]) {
    logics.push({
      ...council.logics[0],
      targetCondition: condition1
        ? condition1
        : council.logics[0].targetCondition,
    });
  }
  if (!!council.logics[1]) {
    logics.push({
      ...council.logics[1],
      targetCondition: condition2
        ? condition2
        : council.logics[1].targetCondition,
    });
  }

  return indexedTable[JSON.stringify(logics)];
}

export function councilConverter(
  [first, second]: [number, number],
  councilId: string
): string {
  const council = Council.query.getOne(councilId);

  if (council.logics[0].type === 'swapValues') {
    const target1Idx = council.logics[0].value[0];
    const target2Idx = council.logics[0].value[1];
    const matchCount = [target1Idx, target2Idx].filter(
      (idx) => idx === first || idx === second
    ).length;
    const value = {
      0: [2, 3],
      1: [0, 2],
      2: [0, 1],
    }[matchCount];

    return indexedTable[
      JSON.stringify([
        {
          ...council.logics[0],
          value,
        },
      ])
    ].id;
  }

  if (council.logics[0].type === 'decreaseFirstTargetAndSwap') {
    const target1Idx = council.logics[0].value[0];
    const target2Idx = council.logics[0].value[1];
    const isTarget1Included = [first, second].includes(target1Idx);
    const isTarget2Included = [first, second].includes(target2Idx);
    const value =
      isTarget1Included && isTarget2Included
        ? [0, 1]
        : isTarget1Included
        ? [0, 2]
        : isTarget2Included
        ? [2, 0]
        : [2, 3];

    return indexedTable[
      JSON.stringify([
        {
          ...council.logics[0],
          value,
        },
      ])
    ].id;
  }

  if (
    council.logics[0]?.targetType === 'proposed' &&
    council.logics[1]?.targetType === 'proposed'
  ) {
    const target1Idx = council.logics[0].targetCondition - 1;
    const target2Idx = council.logics[1].targetCondition - 1;
    let condition1 = target1Idx === first ? 1 : target1Idx === second ? 2 : 3;
    let condition2 =
      target2Idx === first
        ? 1
        : target2Idx === second
        ? 2
        : condition1 === 3
        ? 4
        : 3;

    return getConvertedCouncil(council, condition1, condition2).id;
  }
  if (council.logics[0]?.targetType === 'proposed') {
    const target1Idx = council.logics[0].targetCondition - 1;
    let condition1 = target1Idx === first ? 1 : target1Idx === second ? 2 : 3;
    return getConvertedCouncil(council, condition1, null).id;
  }
  return council.id;
}
