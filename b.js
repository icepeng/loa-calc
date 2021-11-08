function* product(...vectors) {
  const [head, ...tail] = vectors;
  const remainder = tail.length > 0 ? product(...tail) : [[]];
  for (let r of remainder) for (let h of head) yield [h, ...r];
}

function* combinations(elements, length) {
  for (let i = 0; i < elements.length; i++) {
    if (length === 1) {
      yield [elements[i]];
    } else {
      const remaining = combinations(
        elements.slice(i + 1, elements.length),
        length - 1
      );
      for (const next of remaining) {
        yield [elements[i], ...next];
      }
    }
  }
}

function* combinationsWithReplacement(elements, length) {
  for (let i = 0; i < elements.length; i++) {
    if (length === 1) {
      yield [elements[i]];
    } else {
      const remaining = combinationsWithReplacement(
        elements.slice(i, elements.length),
        length - 1
      );
      for (const next of remaining) {
        yield [elements[i], ...next];
      }
    }
  }
}

function getCandidates(target, length, imprintLimit) {
  const items = Array.from(combinations([...Object.keys(target), "잡옵"], 2));
  const combines = Array.from(combinationsWithReplacement(items, length));

  return combines.filter((combine) => {
    const objMax = { ...target };
    combine.forEach(([x, y]) => {
      objMax[x] -= 3;
      objMax[y] -= 3;
    });
    if (Object.values(objMax).find((x) => x <= -3)) {
      return false;
    }

    return [
      ...product(
        ...Array.from({ length: combine.length }, () => [
          [3, imprintLimit],
          [imprintLimit, 3],
        ])
      ),
    ].find((arr) => {
      const obj = { ...target };
      combine.forEach(([x, y], i) => {
        obj[x] -= arr[i][0];
        obj[y] -= arr[i][1];
      });
      return !Object.values(obj).find((x) => x > 0);
    });
  });
}

function getCombinations(target, combine, imprintLimit) {
  const result = [];
  const visited = new Set();
  function rec(left, additions) {
    const hash = JSON.stringify(additions);
    if (visited.has(hash)) {
      return;
    }
    visited.add(hash);

    if (!Object.values(left).find((x) => x > 0)) {
      result.push(additions);
      return;
    }

    for (let i = 0; i < additions.length; i += 1) {
      const [a, b] = additions[i];
      if (b[1] === 3 && a[1] < imprintLimit && left[a[0]] > 0) {
        const next = [...additions];
        next[i] = [[a[0], a[1] + 1], b];
        rec({ ...left, [a[0]]: left[a[0]] - 1 }, next);
      }
      if (a[1] === 3 && b[1] < imprintLimit && left[b[0]] > 0) {
        const next = [...additions];
        next[i] = [a, [b[0], b[1] + 1]];
        rec({ ...left, [b[0]]: left[b[0]] - 1 }, next);
      }
    }
  }

  rec(
    combine.reduce(
      (obj, [a, b]) => {
        obj[a] -= 3;
        obj[b] -= 3;
        return obj;
      },
      { ...target }
    ),
    combine.map(([a, b]) => [
      [a, 3],
      [b, 3],
    ])
  );
  return result.map((res) => sortObj(res.map((x) => Object.fromEntries(x))));
}

function sortObj(arr) {
  return arr
    .map((x) => [x, JSON.stringify(x)])
    .sort((a, b) => a[1].localeCompare(b[1]))
    .map((x) => x[0]);
}

function dedupe(arr) {
  return Array.from(new Set(arr.map((item) => JSON.stringify(item)))).map(
    (item) => JSON.parse(item)
  );
}

function run(initial, length, imprintLimit) {
  console.time();
  const combinations = getCandidates(initial, length, imprintLimit)
    .map((candidate) => getCombinations(initial, candidate, imprintLimit))
    .flat();
  console.timeEnd();
  console.log(dedupe(combinations).length);
}

run(
  {
    원한: 15 - 9,
    바리케이드: 8,
    돌격대장: 9 - 5,
    "진화의 유산": 15 - 9 - 3,
  },
  4,
  5
);

// run(
//   {
//     원한: 3,
//     바리케이드: 9,
//     돌격대장: 15,
//     "예리한 둔기": 6,
//     아드레날린: 6,
//     "진화의 유산": 5,
//   },
//   5,
//   6
// );

// run(
//   {
//     원한: 15 - 12,
//     바리케이드: 15 - 7,
//     돌격대장: 15 - 6,
//     "예리한 둔기": 15 - 12,
//     "진화의 유산": 5,
//   },
//   5,
//   5
// );
