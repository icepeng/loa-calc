import { Council, data, query } from '../../../../.yalc/@mokoko/elixir';

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
  focusedIndices: [number, number],
  councilId: string
): string {
  const council = query.council.getOne(councilId);
  if (
    council.logics[0]?.targetType === 'proposed' &&
    council.logics[1]?.targetType === 'proposed'
  ) {
    const target1Idx = council.logics[0].targetCondition - 1;
    const target2Idx = council.logics[1].targetCondition - 1;
    let condition1 = focusedIndices.includes(target1Idx) ? 1 : 3;
    let condition2 = focusedIndices.includes(target2Idx)
      ? condition1 === 1
        ? 2
        : 1
      : condition1 === 3
      ? 4
      : 3;

    return getConvertedCouncil(council, condition1, condition2).id;
  }
  if (council.logics[0]?.targetType === 'proposed') {
    const target1Idx = council.logics[0].targetCondition - 1;
    let condition1 = focusedIndices.includes(target1Idx) ? 1 : 3;
    return getConvertedCouncil(council, condition1, null).id;
  }
  if (council.logics[1]?.targetType === 'proposed') {
    const target2Idx = council.logics[1].targetCondition - 1;
    let condition2 = focusedIndices.includes(target2Idx) ? 1 : 3;
    return getConvertedCouncil(council, null, condition2).id;
  }
  return council.id;
}
