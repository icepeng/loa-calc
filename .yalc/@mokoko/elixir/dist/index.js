"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  api: () => api,
  benchmark: () => benchmark,
  data: () => data,
  effect: () => effect_default,
  game: () => game_default,
  mutation: () => mutation_default,
  sage: () => sage_default
});
module.exports = __toCommonJS(src_exports);

// src/data/effect.ts
var effectLevelTable = {
  0: 0,
  1: 0,
  2: 0,
  3: 1,
  4: 1,
  5: 1,
  6: 2,
  7: 2,
  8: 3,
  9: 4,
  10: 5
};
var effectOptions = [
  {
    id: "10000",
    name: "\uC2A4\uD0EF",
    optionDescriptions: [
      "\uC2A4\uD0EF(\uD798/\uBBFC\uCCA9/\uC9C0\uB2A5)",
      "\uC2A4\uD0EF +720/+864",
      "\uC2A4\uD0EF +1782",
      "\uC2A4\uD0EF +2700",
      "\uC2A4\uD0EF +4050",
      "\uC2A4\uD0EF +5400"
    ]
  },
  // {
  //   "id": "10001",
  //   "name": "힘",
  //   "optionDescriptions": [
  //     "힘",
  //     "힘 +720",
  //     "힘 +1782",
  //     "힘 +2700",
  //     "힘 +4050",
  //     "힘 +5400"
  //   ]
  // },
  // {
  //   "id": "10002",
  //   "name": "힘",
  //   "optionDescriptions": [
  //     "힘",
  //     "힘 +864",
  //     "힘 +1782",
  //     "힘 +2700",
  //     "힘 +4050",
  //     "힘 +5400"
  //   ]
  // },
  // {
  //   "id": "10003",
  //   "name": "힘",
  //   "optionDescriptions": [
  //     "힘",
  //     "힘 +864",
  //     "힘 +1782",
  //     "힘 +2700",
  //     "힘 +4050",
  //     "힘 +5400"
  //   ]
  // },
  // {
  //   "id": "10004",
  //   "name": "힘",
  //   "optionDescriptions": [
  //     "힘",
  //     "힘 +864",
  //     "힘 +1782",
  //     "힘 +2700",
  //     "힘 +4050",
  //     "힘 +5400"
  //   ]
  // },
  // {
  //   "id": "10005",
  //   "name": "힘",
  //   "optionDescriptions": [
  //     "힘",
  //     "힘 +864",
  //     "힘 +1782",
  //     "힘 +2700",
  //     "힘 +4050",
  //     "힘 +5400"
  //   ]
  // },
  // {
  //   "id": "10006",
  //   "name": "힘",
  //   "optionDescriptions": [
  //     "힘",
  //     "힘 +720",
  //     "힘 +1782",
  //     "힘 +2700",
  //     "힘 +4050",
  //     "힘 +5400"
  //   ]
  // },
  // {
  //   "id": "10007",
  //   "name": "힘",
  //   "optionDescriptions": [
  //     "지능",
  //     "지능 +864",
  //     "지능 +1782",
  //     "지능 +2700",
  //     "지능 +4050",
  //     "지능 +5400"
  //   ]
  // },
  // {
  //   "id": "10008",
  //   "name": "지능",
  //   "optionDescriptions": [
  //     "지능",
  //     "지능 +864",
  //     "지능 +1782",
  //     "지능 +2700",
  //     "지능 +4050",
  //     "지능 +5400"
  //   ]
  // },
  // {
  //   "id": "10009",
  //   "name": "지능",
  //   "optionDescriptions": [
  //     "지능",
  //     "지능 +864",
  //     "지능 +1782",
  //     "지능 +2700",
  //     "지능 +4050",
  //     "지능 +5400"
  //   ]
  // },
  // {
  //   "id": "10010",
  //   "name": "지능",
  //   "optionDescriptions": [
  //     "지능",
  //     "지능 +864",
  //     "지능 +1782",
  //     "지능 +2700",
  //     "지능 +4050",
  //     "지능 +5400"
  //   ]
  // },
  // {
  //   "id": "10011",
  //   "name": "지능",
  //   "optionDescriptions": [
  //     "지능",
  //     "지능 +864",
  //     "지능 +1782",
  //     "지능 +2700",
  //     "지능 +4050",
  //     "지능 +5400"
  //   ]
  // },
  // {
  //   "id": "10012",
  //   "name": "지능",
  //   "optionDescriptions": [
  //     "힘",
  //     "힘 +864",
  //     "힘 +1782",
  //     "힘 +2700",
  //     "힘 +4050",
  //     "힘 +5400"
  //   ]
  // },
  // {
  //   "id": "10013",
  //   "name": "힘",
  //   "optionDescriptions": [
  //     "힘",
  //     "힘 +864",
  //     "힘 +1782",
  //     "힘 +2700",
  //     "힘 +4050",
  //     "힘 +5400"
  //   ]
  // },
  // {
  //   "id": "10014",
  //   "name": "힘",
  //   "optionDescriptions": [
  //     "힘",
  //     "힘 +864",
  //     "힘 +1782",
  //     "힘 +2700",
  //     "힘 +4050",
  //     "힘 +5400"
  //   ]
  // },
  // {
  //   "id": "10015",
  //   "name": "힘",
  //   "optionDescriptions": [
  //     "힘",
  //     "힘 +864",
  //     "힘 +1782",
  //     "힘 +2700",
  //     "힘 +4050",
  //     "힘 +5400"
  //   ]
  // },
  // {
  //   "id": "10016",
  //   "name": "힘",
  //   "optionDescriptions": [
  //     "힘",
  //     "힘 +720",
  //     "힘 +1782",
  //     "힘 +2700",
  //     "힘 +4050",
  //     "힘 +5400"
  //   ]
  // },
  // {
  //   "id": "10017",
  //   "name": "힘",
  //   "optionDescriptions": [
  //     "힘",
  //     "힘 +864",
  //     "힘 +1782",
  //     "힘 +2700",
  //     "힘 +4050",
  //     "힘 +5400"
  //   ]
  // },
  // {
  //   "id": "10018",
  //   "name": "힘",
  //   "optionDescriptions": [
  //     "힘",
  //     "힘 +864",
  //     "힘 +1782",
  //     "힘 +2700",
  //     "힘 +4050",
  //     "힘 +5400"
  //   ]
  // },
  // {
  //   "id": "10019",
  //   "name": "힘",
  //   "optionDescriptions": [
  //     "민첩",
  //     "민첩 +864",
  //     "민첩 +1782",
  //     "민첩 +2700",
  //     "민첩 +4050",
  //     "민첩 +5400"
  //   ]
  // },
  // {
  //   "id": "10020",
  //   "name": "민첩",
  //   "optionDescriptions": [
  //     "민첩",
  //     "민첩 +864",
  //     "민첩 +1782",
  //     "민첩 +2700",
  //     "민첩 +4050",
  //     "민첩 +5400"
  //   ]
  // },
  // {
  //   "id": "10021",
  //   "name": "민첩",
  //   "optionDescriptions": [
  //     "민첩",
  //     "민첩 +864",
  //     "민첩 +1782",
  //     "민첩 +2700",
  //     "민첩 +4050",
  //     "민첩 +5400"
  //   ]
  // },
  // {
  //   "id": "10022",
  //   "name": "민첩",
  //   "optionDescriptions": [
  //     "민첩",
  //     "민첩 +864",
  //     "민첩 +1782",
  //     "민첩 +2700",
  //     "민첩 +4050",
  //     "민첩 +5400"
  //   ]
  // },
  // {
  //   "id": "10023",
  //   "name": "민첩",
  //   "optionDescriptions": [
  //     "민첩",
  //     "민첩 +864",
  //     "민첩 +1782",
  //     "민첩 +2700",
  //     "민첩 +4050",
  //     "민첩 +5400"
  //   ]
  // },
  // {
  //   "id": "10024",
  //   "name": "민첩",
  //   "optionDescriptions": [
  //     "민첩",
  //     "민첩 +864",
  //     "민첩 +1782",
  //     "민첩 +2700",
  //     "민첩 +4050",
  //     "민첩 +5400"
  //   ]
  // },
  // {
  //   "id": "10025",
  //   "name": "민첩",
  //   "optionDescriptions": [
  //     "민첩",
  //     "민첩 +864",
  //     "민첩 +1782",
  //     "민첩 +2700",
  //     "민첩 +4050",
  //     "민첩 +5400"
  //   ]
  // },
  // {
  //   "id": "10026",
  //   "name": "민첩",
  //   "optionDescriptions": [
  //     "민첩",
  //     "민첩 +864",
  //     "민첩 +1782",
  //     "민첩 +2700",
  //     "민첩 +4050",
  //     "민첩 +5400"
  //   ]
  // },
  // {
  //   "id": "10027",
  //   "name": "민첩",
  //   "optionDescriptions": [
  //     "민첩",
  //     "민첩 +864",
  //     "민첩 +1782",
  //     "민첩 +2700",
  //     "민첩 +4050",
  //     "민첩 +5400"
  //   ]
  // },
  // {
  //   "id": "10028",
  //   "name": "민첩",
  //   "optionDescriptions": [
  //     "민첩",
  //     "민첩 +864",
  //     "민첩 +1782",
  //     "민첩 +2700",
  //     "민첩 +4050",
  //     "민첩 +5400"
  //   ]
  // },
  // {
  //   "id": "10029",
  //   "name": "민첩",
  //   "optionDescriptions": [
  //     "민첩",
  //     "민첩 +864",
  //     "민첩 +1782",
  //     "민첩 +2700",
  //     "민첩 +4050",
  //     "민첩 +5400"
  //   ]
  // },
  // {
  //   "id": "10030",
  //   "name": "민첩",
  //   "optionDescriptions": [
  //     "지능",
  //     "지능 +864",
  //     "지능 +1782",
  //     "지능 +2700",
  //     "지능 +4050",
  //     "지능 +5400"
  //   ]
  // },
  // {
  //   "id": "10031",
  //   "name": "지능",
  //   "optionDescriptions": [
  //     "지능",
  //     "지능 +864",
  //     "지능 +1782",
  //     "지능 +2700",
  //     "지능 +4050",
  //     "지능 +5400"
  //   ]
  // },
  // {
  //   "id": "10032",
  //   "name": "지능",
  //   "optionDescriptions": [
  //     "지능",
  //     "지능 +864",
  //     "지능 +1782",
  //     "지능 +2700",
  //     "지능 +4050",
  //     "지능 +5400"
  //   ]
  // },
  {
    id: "10100",
    name: "\uACF5\uACA9\uB825",
    optionDescriptions: [
      "\uACF5\uACA9\uB825",
      "\uACF5\uACA9\uB825 +122",
      "\uACF5\uACA9\uB825 +253",
      "\uACF5\uACA9\uB825 +383",
      "\uACF5\uACA9\uB825 +575",
      "\uACF5\uACA9\uB825 +767"
    ]
  },
  {
    id: "10101",
    name: "\uBB34\uAE30 \uACF5\uACA9\uB825",
    optionDescriptions: [
      "\uBB34\uAE30 \uACF5\uACA9\uB825",
      "\uBB34\uAE30 \uACF5\uACA9\uB825 +236",
      "\uBB34\uAE30 \uACF5\uACA9\uB825 +488",
      "\uBB34\uAE30 \uACF5\uACA9\uB825 +740",
      "\uBB34\uAE30 \uACF5\uACA9\uB825 +1110",
      "\uBB34\uAE30 \uACF5\uACA9\uB825 +1480"
    ]
  },
  {
    id: "10102",
    name: "\uD0C8\uCD9C\uC758 \uB2EC\uC778",
    optionDescriptions: [
      "\uAE30\uC0C1\uAE30 \uC7AC\uC0AC\uC6A9 \uB300\uAE30\uC2DC\uAC04 \uAC10\uC18C",
      "\uAE30\uC0C1\uAE30 \uC7AC\uC0AC\uC6A9 \uB300\uAE30\uC2DC\uAC04 \uAC10\uC18C +0.38%",
      "\uAE30\uC0C1\uAE30 \uC7AC\uC0AC\uC6A9 \uB300\uAE30\uC2DC\uAC04 \uAC10\uC18C +0.79%",
      "\uAE30\uC0C1\uAE30 \uC7AC\uC0AC\uC6A9 \uB300\uAE30\uC2DC\uAC04 \uAC10\uC18C +1.2%",
      "\uAE30\uC0C1\uAE30 \uC7AC\uC0AC\uC6A9 \uB300\uAE30\uC2DC\uAC04 \uAC10\uC18C +1.8%",
      "\uAE30\uC0C1\uAE30 \uC7AC\uC0AC\uC6A9 \uB300\uAE30\uC2DC\uAC04 \uAC10\uC18C +2.4%"
    ]
  },
  {
    id: "10103",
    name: "\uD68C\uD53C\uC758 \uB2EC\uC778",
    optionDescriptions: [
      "\uC774\uB3D9\uAE30 \uC7AC\uC0AC\uC6A9 \uB300\uAE30\uC2DC\uAC04 \uAC10\uC18C",
      "\uC774\uB3D9\uAE30 \uC7AC\uC0AC\uC6A9 \uB300\uAE30\uC2DC\uAC04 \uAC10\uC18C +0.38%",
      "\uC774\uB3D9\uAE30 \uC7AC\uC0AC\uC6A9 \uB300\uAE30\uC2DC\uAC04 \uAC10\uC18C +0.79%",
      "\uC774\uB3D9\uAE30 \uC7AC\uC0AC\uC6A9 \uB300\uAE30\uC2DC\uAC04 \uAC10\uC18C +1.2%",
      "\uC774\uB3D9\uAE30 \uC7AC\uC0AC\uC6A9 \uB300\uAE30\uC2DC\uAC04 \uAC10\uC18C +1.8%",
      "\uC774\uB3D9\uAE30 \uC7AC\uC0AC\uC6A9 \uB300\uAE30\uC2DC\uAC04 \uAC10\uC18C +2.4%"
    ]
  },
  {
    id: "10104",
    name: "\uB9C8\uB098",
    optionDescriptions: [
      "\uCD5C\uB300 \uB9C8\uB098",
      "\uCD5C\uB300 \uB9C8\uB098 +15",
      "\uCD5C\uB300 \uB9C8\uB098 +32",
      "\uCD5C\uB300 \uB9C8\uB098 +49",
      "\uCD5C\uB300 \uB9C8\uB098 +73",
      "\uCD5C\uB300 \uB9C8\uB098 +98"
    ]
  },
  {
    id: "10105",
    name: "\uC0DD\uBA85\uC758 \uCD95\uBCF5",
    optionDescriptions: [
      "\uC804\uD22C \uC911 \uC0DD\uBA85\uB825 \uD68C\uBCF5\uB7C9",
      "\uC804\uD22C \uC911 \uC0DD\uBA85\uB825 \uD68C\uBCF5\uB7C9 +6",
      "\uC804\uD22C \uC911 \uC0DD\uBA85\uB825 \uD68C\uBCF5\uB7C9 +12",
      "\uC804\uD22C \uC911 \uC0DD\uBA85\uB825 \uD68C\uBCF5\uB7C9 +19",
      "\uC804\uD22C \uC911 \uC0DD\uBA85\uB825 \uD68C\uBCF5\uB7C9 +29",
      "\uC804\uD22C \uC911 \uC0DD\uBA85\uB825 \uD68C\uBCF5\uB7C9 +39"
    ]
  },
  {
    id: "10106",
    name: "\uC790\uC6D0\uC758 \uCD95\uBCF5",
    optionDescriptions: [
      "\uC804\uD22C \uC790\uC6D0 \uC790\uC5F0 \uD68C\uBCF5\uB7C9 \uC99D\uAC00",
      "\uC804\uD22C \uC790\uC6D0 \uC790\uC5F0 \uD68C\uBCF5\uB7C9 \uC99D\uAC00 +0.46%",
      "\uC804\uD22C \uC790\uC6D0 \uC790\uC5F0 \uD68C\uBCF5\uB7C9 \uC99D\uAC00 +0.95%",
      "\uC804\uD22C \uC790\uC6D0 \uC790\uC5F0 \uD68C\uBCF5\uB7C9 \uC99D\uAC00 +1.45%",
      "\uC804\uD22C \uC790\uC6D0 \uC790\uC5F0 \uD68C\uBCF5\uB7C9 \uC99D\uAC00 +2.17%",
      "\uC804\uD22C \uC790\uC6D0 \uC790\uC5F0 \uD68C\uBCF5\uB7C9 \uC99D\uAC00 +2.9%"
    ]
  },
  {
    id: "10107",
    name: "\uBC29\uB791\uC790",
    optionDescriptions: [
      "\uD30C\uD2F0 \uBC0F \uACF5\uACA9\uB300\uAC00 \uC544\uB2D0 \uACBD\uC6B0 \uD53C\uD574 \uC99D\uAC00",
      "\uD30C\uD2F0 \uBC0F \uACF5\uACA9\uB300\uAC00 \uC544\uB2D0 \uACBD\uC6B0 \uD53C\uD574 \uC99D\uAC00 +0.8%",
      "\uD30C\uD2F0 \uBC0F \uACF5\uACA9\uB300\uAC00 \uC544\uB2D0 \uACBD\uC6B0 \uD53C\uD574 \uC99D\uAC00 +1.65%",
      "\uD30C\uD2F0 \uBC0F \uACF5\uACA9\uB300\uAC00 \uC544\uB2D0 \uACBD\uC6B0 \uD53C\uD574 \uC99D\uAC00 +2.5%",
      "\uD30C\uD2F0 \uBC0F \uACF5\uACA9\uB300\uAC00 \uC544\uB2D0 \uACBD\uC6B0 \uD53C\uD574 \uC99D\uAC00 +3.75%",
      "\uD30C\uD2F0 \uBC0F \uACF5\uACA9\uB300\uAC00 \uC544\uB2D0 \uACBD\uC6B0 \uD53C\uD574 \uC99D\uAC00 +5%"
    ]
  },
  {
    id: "10108",
    name: "\uBB34\uB825\uD654",
    optionDescriptions: [
      "\uBB34\uB825\uD654 \uD53C\uD574\uB7C9",
      "\uBB34\uB825\uD654 \uD53C\uD574\uB7C9 +0.38%",
      "\uBB34\uB825\uD654 \uD53C\uD574\uB7C9 +0.79%",
      "\uBB34\uB825\uD654 \uD53C\uD574\uB7C9 +1.2%",
      "\uBB34\uB825\uD654 \uD53C\uD574\uB7C9 +1.8%",
      "\uBB34\uB825\uD654 \uD53C\uD574\uB7C9 +2.4%"
    ]
  },
  {
    id: "10109",
    name: "\uBB3C\uC57D \uC911\uB3C5",
    optionDescriptions: [
      "\uD68C\uBCF5\uD615 \uBC30\uD2C0 \uC544\uC774\uD15C\uC758 \uD68C\uBCF5\uB7C9 \uC99D\uAC00",
      "\uD68C\uBCF5\uD615 \uBC30\uD2C0 \uC544\uC774\uD15C\uC758 \uD68C\uBCF5\uB7C9 \uC99D\uAC00 +1.13%",
      "\uD68C\uBCF5\uD615 \uBC30\uD2C0 \uC544\uC774\uD15C\uC758 \uD68C\uBCF5\uB7C9 \uC99D\uAC00 +2.34%",
      "\uD68C\uBCF5\uD615 \uBC30\uD2C0 \uC544\uC774\uD15C\uC758 \uD68C\uBCF5\uB7C9 \uC99D\uAC00 +3.55%",
      "\uD68C\uBCF5\uD615 \uBC30\uD2C0 \uC544\uC774\uD15C\uC758 \uD68C\uBCF5\uB7C9 \uC99D\uAC00 +5.32%",
      "\uD68C\uBCF5\uD615 \uBC30\uD2C0 \uC544\uC774\uD15C\uC758 \uD68C\uBCF5\uB7C9 \uC99D\uAC00 +7.1%"
    ]
  },
  {
    id: "10110",
    name: "\uD3ED\uBC1C\uBB3C \uB2EC\uC778",
    optionDescriptions: [
      "\uBC30\uD2C0 \uC544\uC774\uD15C\uC758 \uD53C\uD574\uB7C9 \uC99D\uAC00",
      "\uBC30\uD2C0 \uC544\uC774\uD15C\uC758 \uD53C\uD574\uB7C9 \uC99D\uAC00 +1.6%",
      "\uBC30\uD2C0 \uC544\uC774\uD15C\uC758 \uD53C\uD574\uB7C9 \uC99D\uAC00 +3.3%",
      "\uBC30\uD2C0 \uC544\uC774\uD15C\uC758 \uD53C\uD574\uB7C9 \uC99D\uAC00 +5%",
      "\uBC30\uD2C0 \uC544\uC774\uD15C\uC758 \uD53C\uD574\uB7C9 \uC99D\uAC00 +7.5%",
      "\uBC30\uD2C0 \uC544\uC774\uD15C\uC758 \uD53C\uD574\uB7C9 \uC99D\uAC00 +10%"
    ]
  },
  {
    id: "11000",
    name: "\uD589\uC6B4 (\uC9C8\uC11C)",
    optionDescriptions: [
      "\uACF5\uACA9\uB825",
      "\uACF5\uACA9\uB825 +0.23%",
      "\uACF5\uACA9\uB825 +0.47%",
      "\uACF5\uACA9\uB825 +0.72%",
      "\uACF5\uACA9\uB825 +1.08%",
      "\uACF5\uACA9\uB825 +1.44%"
    ]
  },
  {
    id: "11001",
    name: "\uD68C\uC2EC (\uC9C8\uC11C)",
    optionDescriptions: [
      "\uACF5\uACA9\uB825",
      "\uACF5\uACA9\uB825 +0.23%",
      "\uACF5\uACA9\uB825 +0.47%",
      "\uACF5\uACA9\uB825 +0.72%",
      "\uACF5\uACA9\uB825 +1.08%",
      "\uACF5\uACA9\uB825 +1.44%"
    ]
  },
  {
    id: "11002",
    name: "\uB2EC\uC778 (\uC9C8\uC11C)",
    optionDescriptions: [
      "\uACF5\uACA9\uB825",
      "\uACF5\uACA9\uB825 +0.23%",
      "\uACF5\uACA9\uB825 +0.47%",
      "\uACF5\uACA9\uB825 +0.72%",
      "\uACF5\uACA9\uB825 +1.08%",
      "\uACF5\uACA9\uB825 +1.44%"
    ]
  },
  {
    id: "11003",
    name: "\uAC15\uB9F9 (\uC9C8\uC11C)",
    optionDescriptions: [
      "\uACF5\uACA9\uB825",
      "\uACF5\uACA9\uB825 +0.23%",
      "\uACF5\uACA9\uB825 +0.47%",
      "\uACF5\uACA9\uB825 +0.72%",
      "\uACF5\uACA9\uB825 +1.08%",
      "\uACF5\uACA9\uB825 +1.44%"
    ]
  },
  {
    id: "11004",
    name: "\uCE7C\uB0A0 \uBC29\uD328 (\uC9C8\uC11C)",
    optionDescriptions: [
      "\uACF5\uACA9\uB825",
      "\uACF5\uACA9\uB825 +0.23%",
      "\uACF5\uACA9\uB825 +0.47%",
      "\uACF5\uACA9\uB825 +0.72%",
      "\uACF5\uACA9\uB825 +1.08%",
      "\uACF5\uACA9\uB825 +1.44%"
    ]
  },
  {
    id: "11005",
    name: "\uC120\uBD09\uB300 (\uC9C8\uC11C)",
    optionDescriptions: [
      "\uACF5\uACA9\uB825",
      "\uACF5\uACA9\uB825 +0.23%",
      "\uACF5\uACA9\uB825 +0.47%",
      "\uACF5\uACA9\uB825 +0.72%",
      "\uACF5\uACA9\uB825 +1.08%",
      "\uACF5\uACA9\uB825 +1.44%"
    ]
  },
  {
    id: "11006",
    name: "\uC120\uAC01\uC790 (\uC9C8\uC11C)",
    optionDescriptions: [
      "\uD30C\uD2F0\uC6D0\uC5D0\uAC8C \uC8FC\uB294 \uD68C\uBCF5 \uBC0F \uBCF4\uD638\uB9C9 \uD6A8\uACFC",
      "\uC790\uC2E0\uC758 \uACF5\uACA9\uB825\uC5D0 \uAE30\uBC18\uD55C \uD30C\uD2F0 \uACF5\uACA9\uB825 \uBC84\uD504 \uD6A8\uACFC +0.64%",
      "\uC790\uC2E0\uC758 \uACF5\uACA9\uB825\uC5D0 \uAE30\uBC18\uD55C \uD30C\uD2F0 \uACF5\uACA9\uB825 \uBC84\uD504 \uD6A8\uACFC +1.32%",
      "\uC790\uC2E0\uC758 \uACF5\uACA9\uB825\uC5D0 \uAE30\uBC18\uD55C \uD30C\uD2F0 \uACF5\uACA9\uB825 \uBC84\uD504 \uD6A8\uACFC +2%",
      "\uC790\uC2E0\uC758 \uACF5\uACA9\uB825\uC5D0 \uAE30\uBC18\uD55C \uD30C\uD2F0 \uACF5\uACA9\uB825 \uBC84\uD504 \uD6A8\uACFC +3%",
      "\uC790\uC2E0\uC758 \uACF5\uACA9\uB825\uC5D0 \uAE30\uBC18\uD55C \uD30C\uD2F0 \uACF5\uACA9\uB825 \uBC84\uD504 \uD6A8\uACFC +4%"
    ]
  },
  {
    id: "11007",
    name: "\uC9C4\uAD70 (\uC9C8\uC11C)",
    optionDescriptions: [
      "\uC790\uC2E0\uC758 \uACF5\uACA9\uB825\uC5D0 \uAE30\uBC18\uD55C \uD30C\uD2F0 \uACF5\uACA9\uB825 \uBC84\uD504 \uD6A8\uACFC",
      "\uC790\uC2E0\uC758 \uACF5\uACA9\uB825\uC5D0 \uAE30\uBC18\uD55C \uD30C\uD2F0 \uACF5\uACA9\uB825 \uBC84\uD504 \uD6A8\uACFC +0.64%",
      "\uC790\uC2E0\uC758 \uACF5\uACA9\uB825\uC5D0 \uAE30\uBC18\uD55C \uD30C\uD2F0 \uACF5\uACA9\uB825 \uBC84\uD504 \uD6A8\uACFC +1.32%",
      "\uC790\uC2E0\uC758 \uACF5\uACA9\uB825\uC5D0 \uAE30\uBC18\uD55C \uD30C\uD2F0 \uACF5\uACA9\uB825 \uBC84\uD504 \uD6A8\uACFC +2%",
      "\uC790\uC2E0\uC758 \uACF5\uACA9\uB825\uC5D0 \uAE30\uBC18\uD55C \uD30C\uD2F0 \uACF5\uACA9\uB825 \uBC84\uD504 \uD6A8\uACFC +3%",
      "\uC790\uC2E0\uC758 \uACF5\uACA9\uB825\uC5D0 \uAE30\uBC18\uD55C \uD30C\uD2F0 \uACF5\uACA9\uB825 \uBC84\uD504 \uD6A8\uACFC +4%"
    ]
  },
  {
    id: "11008",
    name: "\uC2E0\uB150 (\uC9C8\uC11C)",
    optionDescriptions: [
      "\uC790\uC2E0\uC758 \uACF5\uACA9\uB825\uC5D0 \uAE30\uBC18\uD55C \uD30C\uD2F0 \uACF5\uACA9\uB825 \uBC84\uD504 \uD6A8\uACFC",
      "\uC790\uC2E0\uC758 \uACF5\uACA9\uB825\uC5D0 \uAE30\uBC18\uD55C \uD30C\uD2F0 \uACF5\uACA9\uB825 \uBC84\uD504 \uD6A8\uACFC +0.64%",
      "\uC790\uC2E0\uC758 \uACF5\uACA9\uB825\uC5D0 \uAE30\uBC18\uD55C \uD30C\uD2F0 \uACF5\uACA9\uB825 \uBC84\uD504 \uD6A8\uACFC +1.32%",
      "\uC790\uC2E0\uC758 \uACF5\uACA9\uB825\uC5D0 \uAE30\uBC18\uD55C \uD30C\uD2F0 \uACF5\uACA9\uB825 \uBC84\uD504 \uD6A8\uACFC +2%",
      "\uC790\uC2E0\uC758 \uACF5\uACA9\uB825\uC5D0 \uAE30\uBC18\uD55C \uD30C\uD2F0 \uACF5\uACA9\uB825 \uBC84\uD504 \uD6A8\uACFC +3%",
      "\uC790\uC2E0\uC758 \uACF5\uACA9\uB825\uC5D0 \uAE30\uBC18\uD55C \uD30C\uD2F0 \uACF5\uACA9\uB825 \uBC84\uD504 \uD6A8\uACFC +4%"
    ]
  },
  {
    id: "12000",
    name: "\uBCF4\uC2A4 \uD53C\uD574",
    optionDescriptions: [
      "\uBCF4\uC2A4 \uB4F1\uAE09 \uC774\uC0C1 \uBAAC\uC2A4\uD130\uC5D0\uAC8C \uC8FC\uB294 \uD53C\uD574",
      "\uBCF4\uC2A4 \uB4F1\uAE09 \uC774\uC0C1 \uBAAC\uC2A4\uD130\uC5D0\uAC8C \uC8FC\uB294 \uD53C\uD574 +0.38%",
      "\uBCF4\uC2A4 \uB4F1\uAE09 \uC774\uC0C1 \uBAAC\uC2A4\uD130\uC5D0\uAC8C \uC8FC\uB294 \uD53C\uD574 +0.79%",
      "\uBCF4\uC2A4 \uB4F1\uAE09 \uC774\uC0C1 \uBAAC\uC2A4\uD130\uC5D0\uAC8C \uC8FC\uB294 \uD53C\uD574 +1.2%",
      "\uBCF4\uC2A4 \uB4F1\uAE09 \uC774\uC0C1 \uBAAC\uC2A4\uD130\uC5D0\uAC8C \uC8FC\uB294 \uD53C\uD574 +1.8%",
      "\uBCF4\uC2A4 \uB4F1\uAE09 \uC774\uC0C1 \uBAAC\uC2A4\uD130\uC5D0\uAC8C \uC8FC\uB294 \uD53C\uD574 +2.4%"
    ]
  },
  {
    id: "12001",
    name: "\uAC01\uC131\uAE30 \uD53C\uD574",
    optionDescriptions: [
      "\uAC01\uC131\uAE30 \uD53C\uD574",
      "\uAC01\uC131\uAE30 \uD53C\uD574 +1.2%",
      "\uAC01\uC131\uAE30 \uD53C\uD574 +2.47%",
      "\uAC01\uC131\uAE30 \uD53C\uD574 +3.75%",
      "\uAC01\uC131\uAE30 \uD53C\uD574 +5.62%",
      "\uAC01\uC131\uAE30 \uD53C\uD574 +7.5%"
    ]
  },
  {
    id: "12002",
    name: "\uBCF4\uD638\uB9C9 \uAC15\uD654",
    optionDescriptions: [
      "\uD30C\uD2F0\uC6D0\uC5D0\uAC8C \uC8FC\uB294 \uBCF4\uD638\uB9C9 \uD6A8\uACFC",
      "\uD30C\uD2F0\uC6D0\uC5D0\uAC8C \uC8FC\uB294 \uBCF4\uD638\uB9C9 \uD6A8\uACFC +0.67%",
      "\uD30C\uD2F0\uC6D0\uC5D0\uAC8C \uC8FC\uB294 \uBCF4\uD638\uB9C9 \uD6A8\uACFC +1.38%",
      "\uD30C\uD2F0\uC6D0\uC5D0\uAC8C \uC8FC\uB294 \uBCF4\uD638\uB9C9 \uD6A8\uACFC +2.1%",
      "\uD30C\uD2F0\uC6D0\uC5D0\uAC8C \uC8FC\uB294 \uBCF4\uD638\uB9C9 \uD6A8\uACFC +3.15%",
      "\uD30C\uD2F0\uC6D0\uC5D0\uAC8C \uC8FC\uB294 \uBCF4\uD638\uB9C9 \uD6A8\uACFC +4.2%"
    ]
  },
  {
    id: "12003",
    name: "\uD68C\uBCF5 \uAC15\uD654",
    optionDescriptions: [
      "\uD30C\uD2F0\uC6D0\uC5D0\uAC8C \uC8FC\uB294 \uD68C\uBCF5 \uD6A8\uACFC",
      "\uD30C\uD2F0\uC6D0\uC5D0\uAC8C \uC8FC\uB294 \uD68C\uBCF5 \uD6A8\uACFC +0.67%",
      "\uD30C\uD2F0\uC6D0\uC5D0\uAC8C \uC8FC\uB294 \uD68C\uBCF5 \uD6A8\uACFC +1.38%",
      "\uD30C\uD2F0\uC6D0\uC5D0\uAC8C \uC8FC\uB294 \uD68C\uBCF5 \uD6A8\uACFC +2.1%",
      "\uD30C\uD2F0\uC6D0\uC5D0\uAC8C \uC8FC\uB294 \uD68C\uBCF5 \uD6A8\uACFC +3.15%",
      "\uD30C\uD2F0\uC6D0\uC5D0\uAC8C \uC8FC\uB294 \uD68C\uBCF5 \uD6A8\uACFC +4.2%"
    ]
  },
  {
    id: "13000",
    name: "\uCD5C\uB300 \uC0DD\uBA85\uB825",
    optionDescriptions: [
      "\uCD5C\uB300 \uC0DD\uBA85\uB825",
      "\uCD5C\uB300 \uC0DD\uBA85\uB825 +2720",
      "\uCD5C\uB300 \uC0DD\uBA85\uB825 +5610",
      "\uCD5C\uB300 \uC0DD\uBA85\uB825 +8500",
      "\uCD5C\uB300 \uC0DD\uBA85\uB825 +12750",
      "\uCD5C\uB300 \uC0DD\uBA85\uB825 +17000"
    ]
  },
  {
    id: "13001",
    name: "\uBC1B\uB294 \uD53C\uD574 \uAC10\uC18C",
    optionDescriptions: [
      "\uBC1B\uB294 \uD53C\uD574 \uAC10\uC18C",
      "\uBC1B\uB294 \uD53C\uD574 \uAC10\uC18C +1.6%",
      "\uBC1B\uB294 \uD53C\uD574 \uAC10\uC18C +3.3%",
      "\uBC1B\uB294 \uD53C\uD574 \uAC10\uC18C +5%",
      "\uBC1B\uB294 \uD53C\uD574 \uAC10\uC18C +7.5%",
      "\uBC1B\uB294 \uD53C\uD574 \uAC10\uC18C +10%"
    ]
  },
  {
    id: "13002",
    name: "\uBB3C\uB9AC \uBC29\uC5B4\uB825",
    optionDescriptions: [
      "\uBB3C\uB9AC \uBC29\uC5B4\uB825",
      "\uBB3C\uB9AC \uBC29\uC5B4\uB825 +960",
      "\uBB3C\uB9AC \uBC29\uC5B4\uB825 +1980",
      "\uBB3C\uB9AC \uBC29\uC5B4\uB825 +3000",
      "\uBB3C\uB9AC \uBC29\uC5B4\uB825 +4500",
      "\uBB3C\uB9AC \uBC29\uC5B4\uB825 +6000"
    ]
  },
  {
    id: "13003",
    name: "\uB9C8\uBC95 \uBC29\uC5B4\uB825",
    optionDescriptions: [
      "\uB9C8\uBC95 \uBC29\uC5B4\uB825",
      "\uB9C8\uBC95 \uBC29\uC5B4\uB825 +960",
      "\uB9C8\uBC95 \uBC29\uC5B4\uB825 +1980",
      "\uB9C8\uBC95 \uBC29\uC5B4\uB825 +3000",
      "\uB9C8\uBC95 \uBC29\uC5B4\uB825 +4500",
      "\uB9C8\uBC95 \uBC29\uC5B4\uB825 +6000"
    ]
  },
  {
    id: "14000",
    name: "\uCE58\uBA85\uD0C0 \uD53C\uD574",
    optionDescriptions: [
      "\uCE58\uBA85\uD0C0 \uD53C\uD574",
      "\uCE58\uBA85\uD0C0 \uD53C\uD574 +1.12%",
      "\uCE58\uBA85\uD0C0 \uD53C\uD574 +2.31%",
      "\uCE58\uBA85\uD0C0 \uD53C\uD574 +3.5%",
      "\uCE58\uBA85\uD0C0 \uD53C\uD574 +5.25%",
      "\uCE58\uBA85\uD0C0 \uD53C\uD574 +7%"
    ]
  },
  {
    id: "14001",
    name: "\uCD94\uAC00 \uD53C\uD574",
    optionDescriptions: [
      "\uCD94\uAC00 \uD53C\uD574",
      "\uCD94\uAC00 \uD53C\uD574 +0.49%",
      "\uCD94\uAC00 \uD53C\uD574 +1.02%",
      "\uCD94\uAC00 \uD53C\uD574 +1.55%",
      "\uCD94\uAC00 \uD53C\uD574 +2.32%",
      "\uCD94\uAC00 \uD53C\uD574 +3.1%"
    ]
  },
  {
    id: "14002",
    name: "\uC544\uC774\uB374\uD2F0\uD2F0 \uD68D\uB4DD",
    optionDescriptions: [
      "\uACF5\uACA9 \uC801\uC911 \uC2DC \uC544\uC774\uB374\uD2F0\uD2F0 \uAC8C\uC774\uC9C0 \uD68D\uB4DD\uB7C9",
      "\uACF5\uACA9 \uC801\uC911 \uC2DC \uC544\uC774\uB374\uD2F0\uD2F0 \uAC8C\uC774\uC9C0 \uD68D\uB4DD\uB7C9 +0.64%",
      "\uACF5\uACA9 \uC801\uC911 \uC2DC \uC544\uC774\uB374\uD2F0\uD2F0 \uAC8C\uC774\uC9C0 \uD68D\uB4DD\uB7C9 +1.32%",
      "\uACF5\uACA9 \uC801\uC911 \uC2DC \uC544\uC774\uB374\uD2F0\uD2F0 \uAC8C\uC774\uC9C0 \uD68D\uB4DD\uB7C9 +2%",
      "\uACF5\uACA9 \uC801\uC911 \uC2DC \uC544\uC774\uB374\uD2F0\uD2F0 \uAC8C\uC774\uC9C0 \uD68D\uB4DD\uB7C9 +3%",
      "\uACF5\uACA9 \uC801\uC911 \uC2DC \uC544\uC774\uB374\uD2F0\uD2F0 \uAC8C\uC774\uC9C0 \uD68D\uB4DD\uB7C9 +4%"
    ]
  },
  {
    id: "14003",
    name: "\uC544\uAD70 \uAC15\uD654",
    optionDescriptions: [
      "\uC790\uC2E0\uC758 \uACF5\uACA9\uB825\uC5D0 \uAE30\uBC18\uD55C \uD30C\uD2F0 \uACF5\uACA9\uB825 \uBC84\uD504 \uD6A8\uACFC",
      "\uC790\uC2E0\uC758 \uACF5\uACA9\uB825\uC5D0 \uAE30\uBC18\uD55C \uD30C\uD2F0 \uACF5\uACA9\uB825 \uBC84\uD504 \uD6A8\uACFC +0.96%",
      "\uC790\uC2E0\uC758 \uACF5\uACA9\uB825\uC5D0 \uAE30\uBC18\uD55C \uD30C\uD2F0 \uACF5\uACA9\uB825 \uBC84\uD504 \uD6A8\uACFC +1.98%",
      "\uC790\uC2E0\uC758 \uACF5\uACA9\uB825\uC5D0 \uAE30\uBC18\uD55C \uD30C\uD2F0 \uACF5\uACA9\uB825 \uBC84\uD504 \uD6A8\uACFC +3%",
      "\uC790\uC2E0\uC758 \uACF5\uACA9\uB825\uC5D0 \uAE30\uBC18\uD55C \uD30C\uD2F0 \uACF5\uACA9\uB825 \uBC84\uD504 \uD6A8\uACFC +4.5%",
      "\uC790\uC2E0\uC758 \uACF5\uACA9\uB825\uC5D0 \uAE30\uBC18\uD55C \uD30C\uD2F0 \uACF5\uACA9\uB825 \uBC84\uD504 \uD6A8\uACFC +6%"
    ]
  },
  {
    id: "15000",
    name: "\uD589\uC6B4 (\uD63C\uB3C8)",
    optionDescriptions: [
      "\uC801\uC5D0\uAC8C \uC8FC\uB294 \uD53C\uD574",
      "\uC801\uC5D0\uAC8C \uC8FC\uB294 \uD53C\uD574 +0.23%",
      "\uC801\uC5D0\uAC8C \uC8FC\uB294 \uD53C\uD574 +0.47%",
      "\uC801\uC5D0\uAC8C \uC8FC\uB294 \uD53C\uD574 +0.72%",
      "\uC801\uC5D0\uAC8C \uC8FC\uB294 \uD53C\uD574 +1.08%",
      "\uC801\uC5D0\uAC8C \uC8FC\uB294 \uD53C\uD574 +1.44%"
    ]
  },
  {
    id: "15001",
    name: "\uD68C\uC2EC (\uD63C\uB3C8)",
    optionDescriptions: [
      "\uC801\uC5D0\uAC8C \uC8FC\uB294 \uD53C\uD574",
      "\uC801\uC5D0\uAC8C \uC8FC\uB294 \uD53C\uD574 +0.23%",
      "\uC801\uC5D0\uAC8C \uC8FC\uB294 \uD53C\uD574 +0.47%",
      "\uC801\uC5D0\uAC8C \uC8FC\uB294 \uD53C\uD574 +0.72%",
      "\uC801\uC5D0\uAC8C \uC8FC\uB294 \uD53C\uD574 +1.08%",
      "\uC801\uC5D0\uAC8C \uC8FC\uB294 \uD53C\uD574 +1.44%"
    ]
  },
  {
    id: "15002",
    name: "\uB2EC\uC778 (\uD63C\uB3C8)",
    optionDescriptions: [
      "\uC801\uC5D0\uAC8C \uC8FC\uB294 \uD53C\uD574",
      "\uC801\uC5D0\uAC8C \uC8FC\uB294 \uD53C\uD574 +0.23%",
      "\uC801\uC5D0\uAC8C \uC8FC\uB294 \uD53C\uD574 +0.47%",
      "\uC801\uC5D0\uAC8C \uC8FC\uB294 \uD53C\uD574 +0.72%",
      "\uC801\uC5D0\uAC8C \uC8FC\uB294 \uD53C\uD574 +1.08%",
      "\uC801\uC5D0\uAC8C \uC8FC\uB294 \uD53C\uD574 +1.44%"
    ]
  },
  {
    id: "15003",
    name: "\uAC15\uB9F9 (\uD63C\uB3C8)",
    optionDescriptions: [
      "\uCD94\uAC00 \uD53C\uD574",
      "\uC801\uC5D0\uAC8C \uC8FC\uB294 \uD53C\uD574 +0.23%",
      "\uC801\uC5D0\uAC8C \uC8FC\uB294 \uD53C\uD574 +0.47%",
      "\uC801\uC5D0\uAC8C \uC8FC\uB294 \uD53C\uD574 +0.72%",
      "\uC801\uC5D0\uAC8C \uC8FC\uB294 \uD53C\uD574 +1.08%",
      "\uC801\uC5D0\uAC8C \uC8FC\uB294 \uD53C\uD574 +1.44%"
    ]
  },
  {
    id: "15004",
    name: "\uCE7C\uB0A0 \uBC29\uD328 (\uD63C\uB3C8)",
    optionDescriptions: [
      "\uC801\uC5D0\uAC8C \uC8FC\uB294 \uD53C\uD574",
      "\uC801\uC5D0\uAC8C \uC8FC\uB294 \uD53C\uD574 +0.23%",
      "\uC801\uC5D0\uAC8C \uC8FC\uB294 \uD53C\uD574 +0.47%",
      "\uC801\uC5D0\uAC8C \uC8FC\uB294 \uD53C\uD574 +0.72%",
      "\uC801\uC5D0\uAC8C \uC8FC\uB294 \uD53C\uD574 +1.08%",
      "\uC801\uC5D0\uAC8C \uC8FC\uB294 \uD53C\uD574 +1.44%"
    ]
  },
  {
    id: "15005",
    name: "\uC120\uBD09\uB300 (\uD63C\uB3C8)",
    optionDescriptions: [
      "\uC801\uC5D0\uAC8C \uC8FC\uB294 \uD53C\uD574",
      "\uC801\uC5D0\uAC8C \uC8FC\uB294 \uD53C\uD574 +0.23%",
      "\uC801\uC5D0\uAC8C \uC8FC\uB294 \uD53C\uD574 +0.47%",
      "\uC801\uC5D0\uAC8C \uC8FC\uB294 \uD53C\uD574 +0.72%",
      "\uC801\uC5D0\uAC8C \uC8FC\uB294 \uD53C\uD574 +1.08%",
      "\uC801\uC5D0\uAC8C \uC8FC\uB294 \uD53C\uD574 +1.44%"
    ]
  },
  {
    id: "15006",
    name: "\uC120\uAC01\uC790 (\uD63C\uB3C8)",
    optionDescriptions: [
      "\uD30C\uD2F0\uC6D0\uC5D0\uAC8C \uC8FC\uB294 \uD68C\uBCF5 \uBC0F \uBCF4\uD638\uB9C9 \uD6A8\uACFC",
      "\uD30C\uD2F0\uC6D0\uC5D0\uAC8C \uC8FC\uB294 \uD68C\uBCF5 \uBC0F \uBCF4\uD638\uB9C9 \uD6A8\uACFC +0.23%",
      "\uD30C\uD2F0\uC6D0\uC5D0\uAC8C \uC8FC\uB294 \uD68C\uBCF5 \uBC0F \uBCF4\uD638\uB9C9 \uD6A8\uACFC +0.47%",
      "\uD30C\uD2F0\uC6D0\uC5D0\uAC8C \uC8FC\uB294 \uD68C\uBCF5 \uBC0F \uBCF4\uD638\uB9C9 \uD6A8\uACFC +0.72%",
      "\uD30C\uD2F0\uC6D0\uC5D0\uAC8C \uC8FC\uB294 \uD68C\uBCF5 \uBC0F \uBCF4\uD638\uB9C9 \uD6A8\uACFC +1.08%",
      "\uD30C\uD2F0\uC6D0\uC5D0\uAC8C \uC8FC\uB294 \uD68C\uBCF5 \uBC0F \uBCF4\uD638\uB9C9 \uD6A8\uACFC +1.44%"
    ]
  },
  {
    id: "15007",
    name: "\uC9C4\uAD70 (\uD63C\uB3C8)",
    optionDescriptions: [
      "\uD30C\uD2F0\uC6D0\uC5D0\uAC8C \uC8FC\uB294 \uD68C\uBCF5 \uBC0F \uBCF4\uD638\uB9C9 \uD6A8\uACFC",
      "\uD30C\uD2F0\uC6D0\uC5D0\uAC8C \uC8FC\uB294 \uD68C\uBCF5 \uBC0F \uBCF4\uD638\uB9C9 \uD6A8\uACFC +0.23%",
      "\uD30C\uD2F0\uC6D0\uC5D0\uAC8C \uC8FC\uB294 \uD68C\uBCF5 \uBC0F \uBCF4\uD638\uB9C9 \uD6A8\uACFC +0.47%",
      "\uD30C\uD2F0\uC6D0\uC5D0\uAC8C \uC8FC\uB294 \uD68C\uBCF5 \uBC0F \uBCF4\uD638\uB9C9 \uD6A8\uACFC +0.72%",
      "\uD30C\uD2F0\uC6D0\uC5D0\uAC8C \uC8FC\uB294 \uD68C\uBCF5 \uBC0F \uBCF4\uD638\uB9C9 \uD6A8\uACFC +1.08%",
      "\uD30C\uD2F0\uC6D0\uC5D0\uAC8C \uC8FC\uB294 \uD68C\uBCF5 \uBC0F \uBCF4\uD638\uB9C9 \uD6A8\uACFC +1.44%"
    ]
  },
  {
    id: "15008",
    name: "\uC2E0\uB150 (\uD63C\uB3C8)",
    optionDescriptions: [
      "\uD30C\uD2F0\uC6D0\uC5D0\uAC8C \uC8FC\uB294 \uD68C\uBCF5 \uBC0F \uBCF4\uD638\uB9C9 \uD6A8\uACFC",
      "\uD30C\uD2F0\uC6D0\uC5D0\uAC8C \uC8FC\uB294 \uD68C\uBCF5 \uBC0F \uBCF4\uD638\uB9C9 \uD6A8\uACFC +0.23%",
      "\uD30C\uD2F0\uC6D0\uC5D0\uAC8C \uC8FC\uB294 \uD68C\uBCF5 \uBC0F \uBCF4\uD638\uB9C9 \uD6A8\uACFC +0.47%",
      "\uD30C\uD2F0\uC6D0\uC5D0\uAC8C \uC8FC\uB294 \uD68C\uBCF5 \uBC0F \uBCF4\uD638\uB9C9 \uD6A8\uACFC +0.72%",
      "\uD30C\uD2F0\uC6D0\uC5D0\uAC8C \uC8FC\uB294 \uD68C\uBCF5 \uBC0F \uBCF4\uD638\uB9C9 \uD6A8\uACFC +1.08%",
      "\uD30C\uD2F0\uC6D0\uC5D0\uAC8C \uC8FC\uB294 \uD68C\uBCF5 \uBC0F \uBCF4\uD638\uB9C9 \uD6A8\uACFC +1.44%"
    ]
  }
];
var effectOptionsRecord = Object.fromEntries(effectOptions.map((item) => [item.id, item]));

// src/model/effect.ts
function isMutable(effect, maxEnchant) {
  return effect.isSealed === false && effect.value < maxEnchant;
}
function getLevel(effect) {
  const value = effect.value;
  if (value < 0 || value > 10) {
    throw new Error(`Invalid effect value: ${value}`);
  }
  return effectLevelTable[value];
}
function getEffectOptionById(id) {
  const option = effectOptionsRecord[id];
  if (!option) {
    throw new Error(`Invalid effect option id: ${id}`);
  }
  return option;
}
function getEffectOptionNameById(id) {
  return getEffectOptionById(id).name;
}
function getEffectOptionDescriptionByIdAndLevel(id, level) {
  const option = getEffectOptionById(id);
  return option.optionDescriptions[level];
}
function setValue(effect, value) {
  if (effect.isSealed && effect.value !== value) {
    throw new Error("Effect is sealed");
  }
  if (value < 0) {
    throw new Error("Effect value must be positive");
  }
  return {
    ...effect,
    value
  };
}
function setOption(effect, option) {
  if (effect.isSealed) {
    throw new Error("Effect is sealed");
  }
  return {
    ...effect,
    option
  };
}
function seal(effect) {
  if (effect.isSealed) {
    throw new Error("Effect is already sealed");
  }
  return {
    ...effect,
    isSealed: true
  };
}
function unseal(effect) {
  if (!effect.isSealed) {
    throw new Error("Effect is already unsealed");
  }
  return {
    ...effect,
    isSealed: false
  };
}
var effect_default = {
  isMutable,
  getLevel,
  getEffectOptionById,
  getEffectOptionNameById,
  getEffectOptionDescriptionByIdAndLevel,
  setValue,
  setOption,
  seal,
  unseal
};

// src/model/mutation.ts
function createProbMutation(index, value, remainTurn) {
  return {
    target: "prob",
    index,
    value,
    remainTurn
  };
}
function createLuckyRatioMutation(index, value, remainTurn) {
  return {
    target: "luckyRatio",
    index,
    value,
    remainTurn
  };
}
function createEnchantIncreaseAmountMutation(value) {
  return {
    target: "enchantIncreaseAmount",
    index: -1,
    value,
    remainTurn: 1
  };
}
function createEnchantEffectCountMutation(value) {
  return {
    target: "enchantEffectCount",
    index: -1,
    value,
    remainTurn: 1
  };
}
function passTurn(mutation) {
  return {
    ...mutation,
    remainTurn: mutation.remainTurn - 1
  };
}
var mutation_default = {
  createProbMutation,
  createLuckyRatioMutation,
  createEnchantIncreaseAmountMutation,
  createEnchantEffectCountMutation,
  passTurn
};

// src/data/const.ts
var MAX_LAWFUL = 3;
var MAX_CHAOS = 6;

// src/model/sage.ts
function isLawfulFull(sage) {
  return sage.type === "lawful" && sage.power === MAX_LAWFUL;
}
function isChaosFull(sage) {
  return sage.type === "chaos" && sage.power === MAX_CHAOS;
}
function updatePower(sage, selectedIndex) {
  if (sage.type === "none") {
    if (sage.index === selectedIndex) {
      return { ...sage, type: "lawful", power: 1 };
    }
    return { ...sage, type: "chaos", power: 1 };
  }
  if (sage.type === "lawful") {
    if (sage.index === selectedIndex) {
      return {
        ...sage,
        type: "lawful",
        power: sage.power === MAX_LAWFUL ? 1 : sage.power + 1
      };
    }
    return {
      ...sage,
      type: "chaos",
      power: 1
    };
  }
  if (sage.type === "chaos") {
    if (sage.index === selectedIndex) {
      return { ...sage, type: "lawful", power: 1 };
    }
    return {
      ...sage,
      type: "chaos",
      power: sage.power === MAX_CHAOS ? 1 : sage.power + 1
    };
  }
  throw new Error("Invalid sage type");
}
function exhaust(sage) {
  return {
    ...sage,
    isExhausted: true
  };
}
function createInitialState(index) {
  return {
    index,
    type: "none",
    power: 0,
    isExhausted: false,
    councilId: ""
  };
}
var sage_default = {
  isLawfulFull,
  isChaosFull,
  updatePower,
  exhaust,
  createInitialState
};

// src/util/clamp.ts
function clamp(value, max) {
  return Math.min(Math.max(value, 0), max);
}

// src/util/cycle.ts
function cycle(n, mod, direction) {
  if (direction === 0) {
    return (n + mod - 1) % mod;
  } else {
    return (n + 1) % mod;
  }
}

// src/model/game.ts
function isEffectMutable(state, effectIndex) {
  return effect_default.isMutable(
    state.effects[effectIndex],
    state.config.maxEnchant
  );
}
function isEffectSealed(state, effectIndex) {
  return state.effects[effectIndex].isSealed;
}
function getEffectValue(state, effectIndex) {
  return state.effects[effectIndex].value;
}
function checkSealNeeded(state) {
  const sealedEffectCount = state.effects.filter(
    (effect) => effect.isSealed
  ).length;
  const toSeal = 3 - sealedEffectCount;
  return state.turnLeft <= toSeal;
}
function getCouncilType(state, sageIndex) {
  const sage = state.sages[sageIndex];
  const isSealNeeded = checkSealNeeded(state);
  if (sage.isExhausted) {
    return "exhausted";
  }
  if (sage_default.isLawfulFull(sage)) {
    if (isSealNeeded) {
      return "lawfulSeal";
    }
    return "lawful";
  }
  if (sage_default.isChaosFull(sage)) {
    if (isSealNeeded) {
      return "chaosSeal";
    }
    return "chaos";
  }
  if (isSealNeeded) {
    return "seal";
  }
  return "common";
}
function isTurnInRange(state, [min, max]) {
  if (min === 0) {
    return true;
  }
  const turn = state.config.totalTurn - state.turnLeft + 1;
  return turn >= min && turn < max;
}
function createInitialState2(config) {
  return {
    config,
    phase: "council",
    turnLeft: config.totalTurn,
    turnPassed: 0,
    rerollLeft: 2,
    effects: [
      {
        optionId: "12000",
        index: 0,
        value: 0,
        isSealed: false
      },
      {
        optionId: "10101",
        index: 1,
        value: 0,
        isSealed: false
      },
      {
        optionId: "10000",
        index: 2,
        value: 0,
        isSealed: false
      },
      {
        optionId: "10106",
        index: 3,
        value: 0,
        isSealed: false
      },
      {
        optionId: "10108",
        index: 4,
        value: 0,
        isSealed: false
      }
    ],
    mutations: [],
    sages: [
      sage_default.createInitialState(0),
      sage_default.createInitialState(1),
      sage_default.createInitialState(2)
    ]
  };
}
function markAsRestart(state) {
  return {
    ...state,
    phase: "restart"
  };
}
function decreaseTurn(state, amount) {
  if (state.turnLeft <= 0) {
    throw new Error("No turn left");
  }
  return {
    ...state,
    turnLeft: state.turnLeft - amount
  };
}
function passTurn2(state, selectedSageIndex) {
  if (state.phase !== "enchant") {
    throw new Error("Invalid phase");
  }
  if (state.turnLeft <= 0) {
    throw new Error("No turn left");
  }
  const nextPhase = state.turnLeft === 1 ? "done" : "council";
  return {
    ...state,
    phase: nextPhase,
    turnLeft: state.turnLeft - 1,
    turnPassed: state.turnPassed + 1,
    mutations: state.mutations.map(mutation_default.passTurn).filter((mutation) => mutation.remainTurn > 0),
    sages: state.sages.map(
      (sage) => sage_default.updatePower(sage, selectedSageIndex)
    )
  };
}
function increaseRerollLeft(state, amount) {
  return {
    ...state,
    rerollLeft: state.rerollLeft + amount
  };
}
function decreaseRerollLeft(state) {
  if (state.rerollLeft <= 0) {
    throw new Error("No reroll left");
  }
  return {
    ...state,
    rerollLeft: state.rerollLeft - 1
  };
}
function exhaustSage(state, sageIndex) {
  return {
    ...state,
    sages: state.sages.map(
      (sage, index) => index === sageIndex ? sage_default.exhaust(sage) : sage
    )
  };
}
function setEffectValue(state, effectIndex, value) {
  const clampedValue = clamp(value, state.config.maxEnchant);
  return {
    ...state,
    effects: state.effects.map(
      (effect, index) => index === effectIndex ? effect_default.setValue(effect, clampedValue) : effect
    )
  };
}
function setEffectValueAll(state, values) {
  const clampedValues = values.map(
    (value) => clamp(value, state.config.maxEnchant)
  );
  return {
    ...state,
    effects: state.effects.map(
      (effect, index) => effect_default.setValue(effect, clampedValues[index])
    )
  };
}
function increaseEffectValue(state, effectIndex, diff) {
  const clampedValue = clamp(
    getEffectValue(state, effectIndex) + diff,
    state.config.maxEnchant
  );
  return {
    ...state,
    effects: state.effects.map(
      (effect, index) => index === effectIndex ? effect_default.setValue(effect, clampedValue) : effect
    )
  };
}
function increaseEffectValueAll(state, diffs) {
  const clampedValues = diffs.map(
    (diff, index) => clamp(getEffectValue(state, index) + diff, state.config.maxEnchant)
  );
  return {
    ...state,
    effects: state.effects.map(
      (effect, index) => effect_default.setValue(effect, clampedValues[index])
    )
  };
}
function sealEffect(state, effectIndex) {
  return {
    ...state,
    effects: state.effects.map(
      (effect, index) => index === effectIndex ? effect_default.seal(effect) : effect
    )
  };
}
function unsealEffect(state, effectIndex) {
  return {
    ...state,
    effects: state.effects.map(
      (effect, index) => index === effectIndex ? effect_default.unseal(effect) : effect
    )
  };
}
function addMutations(state, mutations) {
  return {
    ...state,
    mutations: [...state.mutations, ...mutations]
  };
}
var game_default = {
  // getters
  isEffectMutable,
  isEffectSealed,
  getEffectValue,
  checkSealNeeded,
  getCouncilType,
  isTurnInRange,
  // setters
  createInitialState: createInitialState2,
  markAsRestart,
  decreaseTurn,
  passTurn: passTurn2,
  increaseRerollLeft,
  decreaseRerollLeft,
  exhaustSage,
  setEffectValue,
  setEffectValueAll,
  increaseEffectValue,
  increaseEffectValueAll,
  sealEffect,
  unsealEffect,
  addMutations
};

// src/data/council.ts
var councils = [
  {
    id: "R4fhmY6g",
    pickRatio: 72e3,
    range: [0, 0],
    descriptions: [
      "\uC774\uBC88 \uC5F0\uC131\uC5D0\uC11C <{0}> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <35>% \uC62C\uB824\uC8FC\uC9C0.",
      "\uC774\uBC88 \uC5F0\uC131\uC5D0\uC11C <{0}> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <35>% \uC62C\uB9AC\uACA0\uB124.",
      "\uC774\uBC88 \uC5F0\uC131\uC5D0\uC11C <{0}> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <35>% \uC62C\uB824\uB4DC\uB9AC\uC8E0."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "mutateProb",
        targetType: "proposed",
        targetCondition: 1,
        targetCount: 1,
        ratio: 0,
        value: [3500, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "y+L7srcs",
    pickRatio: 72e3,
    range: [0, 0],
    descriptions: [
      "\uC774\uBC88 \uC5F0\uC131\uC5D0\uC11C <{1}> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <35>% \uC62C\uB824\uC8FC\uC9C0.",
      "\uC774\uBC88 \uC5F0\uC131\uC5D0\uC11C <{1}> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <35>% \uC62C\uB9AC\uACA0\uB124.",
      "\uC774\uBC88 \uC5F0\uC131\uC5D0\uC11C <{1}> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <35>% \uC62C\uB824\uB4DC\uB9AC\uC8E0."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "mutateProb",
        targetType: "proposed",
        targetCondition: 2,
        targetCount: 1,
        ratio: 0,
        value: [3500, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "nOvVPr9C",
    pickRatio: 72e3,
    range: [0, 0],
    descriptions: [
      "\uC774\uBC88 \uC5F0\uC131\uC5D0\uC11C <{2}> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <35>% \uC62C\uB824\uC8FC\uC9C0.",
      "\uC774\uBC88 \uC5F0\uC131\uC5D0\uC11C <{2}> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <35>% \uC62C\uB9AC\uACA0\uB124.",
      "\uC774\uBC88 \uC5F0\uC131\uC5D0\uC11C <{2}> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <35>% \uC62C\uB824\uB4DC\uB9AC\uC8E0."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "mutateProb",
        targetType: "proposed",
        targetCondition: 3,
        targetCount: 1,
        ratio: 0,
        value: [3500, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "fz4dYPTI",
    pickRatio: 72e3,
    range: [0, 0],
    descriptions: [
      "\uC774\uBC88 \uC5F0\uC131\uC5D0\uC11C <{3}> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <35>% \uC62C\uB824\uC8FC\uC9C0.",
      "\uC774\uBC88 \uC5F0\uC131\uC5D0\uC11C <{3}> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <35>% \uC62C\uB9AC\uACA0\uB124.",
      "\uC774\uBC88 \uC5F0\uC131\uC5D0\uC11C <{3}> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <35>% \uC62C\uB824\uB4DC\uB9AC\uC8E0."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "mutateProb",
        targetType: "proposed",
        targetCondition: 4,
        targetCount: 1,
        ratio: 0,
        value: [3500, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "4SzCiO3/",
    pickRatio: 72e3,
    range: [0, 0],
    descriptions: [
      "\uC774\uBC88 \uC5F0\uC131\uC5D0\uC11C <{4}> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <35>% \uC62C\uB824\uC8FC\uC9C0.",
      "\uC774\uBC88 \uC5F0\uC131\uC5D0\uC11C <{4}> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <35>% \uC62C\uB9AC\uACA0\uB124.",
      "\uC774\uBC88 \uC5F0\uC131\uC5D0\uC11C <{4}> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <35>% \uC62C\uB824\uB4DC\uB9AC\uC8E0."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "mutateProb",
        targetType: "proposed",
        targetCondition: 5,
        targetCount: 1,
        ratio: 0,
        value: [3500, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "a5gxIgIR",
    pickRatio: 4e4,
    range: [0, 0],
    descriptions: [
      "\uC774\uBC88 \uC5F0\uC131\uC5D0\uC11C <\uB124\uAC00 \uACE0\uB974\uB294> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <35>% \uC62C\uB824\uC8FC\uC9C0.",
      "\uC774\uBC88 \uC5F0\uC131\uC5D0\uC11C <\uC790\uB124\uAC00 \uC120\uD0DD\uD55C> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <35>% \uC62C\uB9AC\uACA0\uB124.",
      "\uC774\uBC88 \uC5F0\uC131\uC5D0\uC11C <\uB2F9\uC2E0\uC774 \uD0DD\uD55C> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <35>% \uC62C\uB824\uB4DC\uB9AC\uC8E0."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "mutateProb",
        targetType: "userSelect",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [3500, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "bHcd6ti8",
    pickRatio: 18e3,
    range: [0, 0],
    descriptions: [
      "\uC774\uBC88 \uC5F0\uC131\uC5D0\uC11C <{0}> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <70>% \uC62C\uB824\uC8FC\uC9C0.",
      "\uC774\uBC88 \uC5F0\uC131\uC5D0\uC11C <{0}> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <70>% \uC62C\uB9AC\uACA0\uB124.",
      "\uC774\uBC88 \uC5F0\uC131\uC5D0\uC11C <{0}> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <70>% \uC62C\uB824\uB4DC\uB9AC\uC8E0."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "mutateProb",
        targetType: "proposed",
        targetCondition: 1,
        targetCount: 1,
        ratio: 0,
        value: [7e3, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "mhKCAtQm",
    pickRatio: 18e3,
    range: [0, 0],
    descriptions: [
      "\uC774\uBC88 \uC5F0\uC131\uC5D0\uC11C <{1}> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <70>% \uC62C\uB824\uC8FC\uC9C0.",
      "\uC774\uBC88 \uC5F0\uC131\uC5D0\uC11C <{1}> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <70>% \uC62C\uB9AC\uACA0\uB124.",
      "\uC774\uBC88 \uC5F0\uC131\uC5D0\uC11C <{1}> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <70>% \uC62C\uB824\uB4DC\uB9AC\uC8E0."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "mutateProb",
        targetType: "proposed",
        targetCondition: 2,
        targetCount: 1,
        ratio: 0,
        value: [7e3, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "Vq7MHlLo",
    pickRatio: 18e3,
    range: [0, 0],
    descriptions: [
      "\uC774\uBC88 \uC5F0\uC131\uC5D0\uC11C <{2}> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <70>% \uC62C\uB824\uC8FC\uC9C0.",
      "\uC774\uBC88 \uC5F0\uC131\uC5D0\uC11C <{2}> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <70>% \uC62C\uB9AC\uACA0\uB124.",
      "\uC774\uBC88 \uC5F0\uC131\uC5D0\uC11C <{2}> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <70>% \uC62C\uB824\uB4DC\uB9AC\uC8E0."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "mutateProb",
        targetType: "proposed",
        targetCondition: 3,
        targetCount: 1,
        ratio: 0,
        value: [7e3, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "95shRB1l",
    pickRatio: 18e3,
    range: [0, 0],
    descriptions: [
      "\uC774\uBC88 \uC5F0\uC131\uC5D0\uC11C <{3}> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <70>% \uC62C\uB824\uC8FC\uC9C0.",
      "\uC774\uBC88 \uC5F0\uC131\uC5D0\uC11C <{3}> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <70>% \uC62C\uB9AC\uACA0\uB124.",
      "\uC774\uBC88 \uC5F0\uC131\uC5D0\uC11C <{3}> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <70>% \uC62C\uB824\uB4DC\uB9AC\uC8E0."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "mutateProb",
        targetType: "proposed",
        targetCondition: 4,
        targetCount: 1,
        ratio: 0,
        value: [7e3, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "5EkUTXxa",
    pickRatio: 18e3,
    range: [0, 0],
    descriptions: [
      "\uC774\uBC88 \uC5F0\uC131\uC5D0\uC11C <{4}> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <70>% \uC62C\uB824\uC8FC\uC9C0.",
      "\uC774\uBC88 \uC5F0\uC131\uC5D0\uC11C <{4}> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <70>% \uC62C\uB9AC\uACA0\uB124.",
      "\uC774\uBC88 \uC5F0\uC131\uC5D0\uC11C <{4}> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <70>% \uC62C\uB824\uB4DC\uB9AC\uC8E0."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "mutateProb",
        targetType: "proposed",
        targetCondition: 5,
        targetCount: 1,
        ratio: 0,
        value: [7e3, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "gWvAL7v4",
    pickRatio: 1e4,
    range: [0, 0],
    descriptions: [
      "\uC774\uBC88 \uC5F0\uC131\uC5D0\uC11C <\uB124\uAC00 \uACE0\uB974\uB294> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <70>% \uC62C\uB824\uC8FC\uC9C0.",
      "\uC774\uBC88 \uC5F0\uC131\uC5D0\uC11C <\uC790\uB124\uAC00 \uC120\uD0DD\uD55C> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <70>% \uC62C\uB9AC\uACA0\uB124.",
      "\uC774\uBC88 \uC5F0\uC131\uC5D0\uC11C <\uB2F9\uC2E0\uC774 \uD0DD\uD55C> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <70>% \uC62C\uB824\uB4DC\uB9AC\uC8E0."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "mutateProb",
        targetType: "userSelect",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [7e3, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "ijXdy8lT",
    pickRatio: 72e3,
    range: [0, 0],
    descriptions: [
      "\uB0A8\uC740 \uBAA8\uB4E0 \uC5F0\uC131\uC5D0\uC11C <{0}> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <5>% \uC62C\uB824\uC8FC\uC9C0.",
      "\uB0A8\uC740 \uBAA8\uB4E0 \uC5F0\uC131\uC5D0\uC11C <{0}> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <5>% \uC62C\uB9AC\uACA0\uB124.",
      "\uB0A8\uC740 \uBAA8\uB4E0 \uC5F0\uC131\uC5D0\uC11C <{0}> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <5>% \uC62C\uB824\uB4DC\uB9AC\uC8E0."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "mutateProb",
        targetType: "proposed",
        targetCondition: 1,
        targetCount: 1,
        ratio: 0,
        value: [500, 0],
        remainTurn: 99
      }
    ]
  },
  {
    id: "mEgQwgCI",
    pickRatio: 72e3,
    range: [0, 0],
    descriptions: [
      "\uB0A8\uC740 \uBAA8\uB4E0 \uC5F0\uC131\uC5D0\uC11C <{1}> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <5>% \uC62C\uB824\uC8FC\uC9C0.",
      "\uB0A8\uC740 \uBAA8\uB4E0 \uC5F0\uC131\uC5D0\uC11C <{1}> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <5>% \uC62C\uB9AC\uACA0\uB124.",
      "\uB0A8\uC740 \uBAA8\uB4E0 \uC5F0\uC131\uC5D0\uC11C <{1}> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <5>% \uC62C\uB824\uB4DC\uB9AC\uC8E0."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "mutateProb",
        targetType: "proposed",
        targetCondition: 2,
        targetCount: 1,
        ratio: 0,
        value: [500, 0],
        remainTurn: 99
      }
    ]
  },
  {
    id: "rdpIbeOC",
    pickRatio: 72e3,
    range: [0, 0],
    descriptions: [
      "\uB0A8\uC740 \uBAA8\uB4E0 \uC5F0\uC131\uC5D0\uC11C <{2}> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <5>% \uC62C\uB824\uC8FC\uC9C0.",
      "\uB0A8\uC740 \uBAA8\uB4E0 \uC5F0\uC131\uC5D0\uC11C <{2}> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <5>% \uC62C\uB9AC\uACA0\uB124.",
      "\uB0A8\uC740 \uBAA8\uB4E0 \uC5F0\uC131\uC5D0\uC11C <{2}> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <5>% \uC62C\uB824\uB4DC\uB9AC\uC8E0."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "mutateProb",
        targetType: "proposed",
        targetCondition: 3,
        targetCount: 1,
        ratio: 0,
        value: [500, 0],
        remainTurn: 99
      }
    ]
  },
  {
    id: "+MZRW50J",
    pickRatio: 72e3,
    range: [0, 0],
    descriptions: [
      "\uB0A8\uC740 \uBAA8\uB4E0 \uC5F0\uC131\uC5D0\uC11C <{3}> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <5>% \uC62C\uB824\uC8FC\uC9C0.",
      "\uB0A8\uC740 \uBAA8\uB4E0 \uC5F0\uC131\uC5D0\uC11C <{3}> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <5>% \uC62C\uB9AC\uACA0\uB124.",
      "\uB0A8\uC740 \uBAA8\uB4E0 \uC5F0\uC131\uC5D0\uC11C <{3}> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <5>% \uC62C\uB824\uB4DC\uB9AC\uC8E0."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "mutateProb",
        targetType: "proposed",
        targetCondition: 4,
        targetCount: 1,
        ratio: 0,
        value: [500, 0],
        remainTurn: 99
      }
    ]
  },
  {
    id: "RhysJqOW",
    pickRatio: 72e3,
    range: [0, 0],
    descriptions: [
      "\uB0A8\uC740 \uBAA8\uB4E0 \uC5F0\uC131\uC5D0\uC11C <{4}> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <5>% \uC62C\uB824\uC8FC\uC9C0.",
      "\uB0A8\uC740 \uBAA8\uB4E0 \uC5F0\uC131\uC5D0\uC11C <{4}> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <5>% \uC62C\uB9AC\uACA0\uB124.",
      "\uB0A8\uC740 \uBAA8\uB4E0 \uC5F0\uC131\uC5D0\uC11C <{4}> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <5>% \uC62C\uB824\uB4DC\uB9AC\uC8E0."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "mutateProb",
        targetType: "proposed",
        targetCondition: 5,
        targetCount: 1,
        ratio: 0,
        value: [500, 0],
        remainTurn: 99
      }
    ]
  },
  {
    id: "6VmV1uPy",
    pickRatio: 4e4,
    range: [0, 0],
    descriptions: [
      "\uB0A8\uC740 \uBAA8\uB4E0 \uC5F0\uC131\uC5D0\uC11C <\uB124\uAC00 \uACE0\uB974\uB294> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <5>% \uC62C\uB824\uC8FC\uC9C0.",
      "\uB0A8\uC740 \uBAA8\uB4E0 \uC5F0\uC131\uC5D0\uC11C <\uC790\uB124\uAC00 \uC120\uD0DD\uD55C> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <5>% \uC62C\uB9AC\uACA0\uB124.",
      "\uB0A8\uC740 \uBAA8\uB4E0 \uC5F0\uC131\uC5D0\uC11C <\uB2F9\uC2E0\uC774 \uD0DD\uD55C> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <5>% \uC62C\uB824\uB4DC\uB9AC\uC8E0."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "mutateProb",
        targetType: "userSelect",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [500, 0],
        remainTurn: 99
      }
    ]
  },
  {
    id: "oBuqiS5a",
    pickRatio: 18e3,
    range: [0, 0],
    descriptions: [
      "\uB0A8\uC740 \uBAA8\uB4E0 \uC5F0\uC131\uC5D0\uC11C <{0}> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <10>% \uC62C\uB824\uC8FC\uC9C0.",
      "\uB0A8\uC740 \uBAA8\uB4E0 \uC5F0\uC131\uC5D0\uC11C <{0}> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <10>% \uC62C\uB9AC\uACA0\uB124.",
      "\uB0A8\uC740 \uBAA8\uB4E0 \uC5F0\uC131\uC5D0\uC11C <{0}> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <10>% \uC62C\uB824\uB4DC\uB9AC\uC8E0."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "mutateProb",
        targetType: "proposed",
        targetCondition: 1,
        targetCount: 1,
        ratio: 0,
        value: [1e3, 0],
        remainTurn: 99
      }
    ]
  },
  {
    id: "7IoNpMxz",
    pickRatio: 18e3,
    range: [0, 0],
    descriptions: [
      "\uB0A8\uC740 \uBAA8\uB4E0 \uC5F0\uC131\uC5D0\uC11C <{1}> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <10>% \uC62C\uB824\uC8FC\uC9C0.",
      "\uB0A8\uC740 \uBAA8\uB4E0 \uC5F0\uC131\uC5D0\uC11C <{1}> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <10>% \uC62C\uB9AC\uACA0\uB124.",
      "\uB0A8\uC740 \uBAA8\uB4E0 \uC5F0\uC131\uC5D0\uC11C <{1}> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <10>% \uC62C\uB824\uB4DC\uB9AC\uC8E0."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "mutateProb",
        targetType: "proposed",
        targetCondition: 2,
        targetCount: 1,
        ratio: 0,
        value: [1e3, 0],
        remainTurn: 99
      }
    ]
  },
  {
    id: "rSXM6CZj",
    pickRatio: 18e3,
    range: [0, 0],
    descriptions: [
      "\uB0A8\uC740 \uBAA8\uB4E0 \uC5F0\uC131\uC5D0\uC11C <{2}> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <10>% \uC62C\uB824\uC8FC\uC9C0.",
      "\uB0A8\uC740 \uBAA8\uB4E0 \uC5F0\uC131\uC5D0\uC11C <{2}> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <10>% \uC62C\uB9AC\uACA0\uB124.",
      "\uB0A8\uC740 \uBAA8\uB4E0 \uC5F0\uC131\uC5D0\uC11C <{2}> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <10>% \uC62C\uB824\uB4DC\uB9AC\uC8E0."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "mutateProb",
        targetType: "proposed",
        targetCondition: 3,
        targetCount: 1,
        ratio: 0,
        value: [1e3, 0],
        remainTurn: 99
      }
    ]
  },
  {
    id: "XD+A7Frs",
    pickRatio: 18e3,
    range: [0, 0],
    descriptions: [
      "\uB0A8\uC740 \uBAA8\uB4E0 \uC5F0\uC131\uC5D0\uC11C <{3}> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <10>% \uC62C\uB824\uC8FC\uC9C0.",
      "\uB0A8\uC740 \uBAA8\uB4E0 \uC5F0\uC131\uC5D0\uC11C <{3}> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <10>% \uC62C\uB9AC\uACA0\uB124.",
      "\uB0A8\uC740 \uBAA8\uB4E0 \uC5F0\uC131\uC5D0\uC11C <{3}> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <10>% \uC62C\uB824\uB4DC\uB9AC\uC8E0."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "mutateProb",
        targetType: "proposed",
        targetCondition: 4,
        targetCount: 1,
        ratio: 0,
        value: [1e3, 0],
        remainTurn: 99
      }
    ]
  },
  {
    id: "YnZSXf6A",
    pickRatio: 18e3,
    range: [0, 0],
    descriptions: [
      "\uB0A8\uC740 \uBAA8\uB4E0 \uC5F0\uC131\uC5D0\uC11C <{4}> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <10>% \uC62C\uB824\uC8FC\uC9C0.",
      "\uB0A8\uC740 \uBAA8\uB4E0 \uC5F0\uC131\uC5D0\uC11C <{4}> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <10>% \uC62C\uB9AC\uACA0\uB124.",
      "\uB0A8\uC740 \uBAA8\uB4E0 \uC5F0\uC131\uC5D0\uC11C <{4}> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <10>% \uC62C\uB824\uB4DC\uB9AC\uC8E0."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "mutateProb",
        targetType: "proposed",
        targetCondition: 5,
        targetCount: 1,
        ratio: 0,
        value: [1e3, 0],
        remainTurn: 99
      }
    ]
  },
  {
    id: "0f1OGjTw",
    pickRatio: 1e4,
    range: [0, 0],
    descriptions: [
      "\uB0A8\uC740 \uBAA8\uB4E0 \uC5F0\uC131\uC5D0\uC11C <\uB124\uAC00 \uACE0\uB974\uB294> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <10>% \uC62C\uB824\uC8FC\uC9C0.",
      "\uB0A8\uC740 \uBAA8\uB4E0 \uC5F0\uC131\uC5D0\uC11C <\uC790\uB124\uAC00 \uC120\uD0DD\uD55C> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <10>% \uC62C\uB9AC\uACA0\uB124.",
      "\uB0A8\uC740 \uBAA8\uB4E0 \uC5F0\uC131\uC5D0\uC11C <\uB2F9\uC2E0\uC774 \uD0DD\uD55C> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <10>% \uC62C\uB824\uB4DC\uB9AC\uC8E0."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "mutateProb",
        targetType: "userSelect",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [1e3, 0],
        remainTurn: 99
      }
    ]
  },
  {
    id: "3JIsEQAL",
    pickRatio: 72e3,
    range: [0, 0],
    descriptions: [
      "\uC774\uBC88 \uC5F0\uC131\uC5D0\uC11C <{0}> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <20>% \uB0B4\uB824\uC8FC\uC9C0.",
      "\uC774\uBC88 \uC5F0\uC131\uC5D0\uC11C <{0}> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <20>% \uB0B4\uB9AC\uACA0\uB124.",
      "\uC774\uBC88 \uC5F0\uC131\uC5D0\uC11C <{0}> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <20>% \uB0B4\uB824\uB4DC\uB9AC\uC8E0."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "mutateProb",
        targetType: "proposed",
        targetCondition: 1,
        targetCount: 1,
        ratio: 0,
        value: [-2e3, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "pGrUp9Q2",
    pickRatio: 72e3,
    range: [0, 0],
    descriptions: [
      "\uC774\uBC88 \uC5F0\uC131\uC5D0\uC11C <{1}> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <20>% \uB0B4\uB824\uC8FC\uC9C0.",
      "\uC774\uBC88 \uC5F0\uC131\uC5D0\uC11C <{1}> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <20>% \uB0B4\uB9AC\uACA0\uB124.",
      "\uC774\uBC88 \uC5F0\uC131\uC5D0\uC11C <{1}> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <20>% \uB0B4\uB824\uB4DC\uB9AC\uC8E0."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "mutateProb",
        targetType: "proposed",
        targetCondition: 2,
        targetCount: 1,
        ratio: 0,
        value: [-2e3, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "VORJa66k",
    pickRatio: 72e3,
    range: [0, 0],
    descriptions: [
      "\uC774\uBC88 \uC5F0\uC131\uC5D0\uC11C <{2}> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <20>% \uB0B4\uB824\uC8FC\uC9C0.",
      "\uC774\uBC88 \uC5F0\uC131\uC5D0\uC11C <{2}> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <20>% \uB0B4\uB9AC\uACA0\uB124.",
      "\uC774\uBC88 \uC5F0\uC131\uC5D0\uC11C <{2}> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <20>% \uB0B4\uB824\uB4DC\uB9AC\uC8E0."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "mutateProb",
        targetType: "proposed",
        targetCondition: 3,
        targetCount: 1,
        ratio: 0,
        value: [-2e3, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "DCgLqVPV",
    pickRatio: 72e3,
    range: [0, 0],
    descriptions: [
      "\uC774\uBC88 \uC5F0\uC131\uC5D0\uC11C <{3}> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <20>% \uB0B4\uB824\uC8FC\uC9C0.",
      "\uC774\uBC88 \uC5F0\uC131\uC5D0\uC11C <{3}> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <20>% \uB0B4\uB9AC\uACA0\uB124.",
      "\uC774\uBC88 \uC5F0\uC131\uC5D0\uC11C <{3}> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <20>% \uB0B4\uB824\uB4DC\uB9AC\uC8E0."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "mutateProb",
        targetType: "proposed",
        targetCondition: 4,
        targetCount: 1,
        ratio: 0,
        value: [-2e3, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "wxjn4v11",
    pickRatio: 72e3,
    range: [0, 0],
    descriptions: [
      "\uC774\uBC88 \uC5F0\uC131\uC5D0\uC11C <{4}> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <20>% \uB0B4\uB824\uC8FC\uC9C0.",
      "\uC774\uBC88 \uC5F0\uC131\uC5D0\uC11C <{4}> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <20>% \uB0B4\uB9AC\uACA0\uB124.",
      "\uC774\uBC88 \uC5F0\uC131\uC5D0\uC11C <{4}> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <20>% \uB0B4\uB824\uB4DC\uB9AC\uC8E0."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "mutateProb",
        targetType: "proposed",
        targetCondition: 5,
        targetCount: 1,
        ratio: 0,
        value: [-2e3, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "7wgizvUn",
    pickRatio: 4e4,
    range: [0, 0],
    descriptions: [
      "\uC774\uBC88 \uC5F0\uC131\uC5D0\uC11C <\uB124\uAC00 \uACE0\uB974\uB294> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <20>% \uB0B4\uB824\uC8FC\uC9C0.",
      "\uC774\uBC88 \uC5F0\uC131\uC5D0\uC11C <\uC790\uB124\uAC00 \uC120\uD0DD\uD55C> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <20>% \uB0B4\uB9AC\uACA0\uB124.",
      "\uC774\uBC88 \uC5F0\uC131\uC5D0\uC11C <\uB2F9\uC2E0\uC774 \uD0DD\uD55C> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <20>% \uB0B4\uB824\uB4DC\uB9AC\uC8E0."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "mutateProb",
        targetType: "userSelect",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [-2e3, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "ukVMmA4r",
    pickRatio: 18e3,
    range: [0, 0],
    descriptions: [
      "\uC774\uBC88 \uC5F0\uC131\uC5D0\uC11C <{0}> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <40>% \uB0B4\uB824\uC8FC\uC9C0.",
      "\uC774\uBC88 \uC5F0\uC131\uC5D0\uC11C <{0}> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <40>% \uB0B4\uB9AC\uACA0\uB124.",
      "\uC774\uBC88 \uC5F0\uC131\uC5D0\uC11C <{0}> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <40>% \uB0B4\uB824\uB4DC\uB9AC\uC8E0."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "mutateProb",
        targetType: "proposed",
        targetCondition: 1,
        targetCount: 1,
        ratio: 0,
        value: [-4e3, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "hAHtj7hy",
    pickRatio: 18e3,
    range: [0, 0],
    descriptions: [
      "\uC774\uBC88 \uC5F0\uC131\uC5D0\uC11C <{1}> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <40>% \uB0B4\uB824\uC8FC\uC9C0.",
      "\uC774\uBC88 \uC5F0\uC131\uC5D0\uC11C <{1}> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <40>% \uB0B4\uB9AC\uACA0\uB124.",
      "\uC774\uBC88 \uC5F0\uC131\uC5D0\uC11C <{1}> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <40>% \uB0B4\uB824\uB4DC\uB9AC\uC8E0."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "mutateProb",
        targetType: "proposed",
        targetCondition: 2,
        targetCount: 1,
        ratio: 0,
        value: [-4e3, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "lB3xLGoX",
    pickRatio: 18e3,
    range: [0, 0],
    descriptions: [
      "\uC774\uBC88 \uC5F0\uC131\uC5D0\uC11C <{2}> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <40>% \uB0B4\uB824\uC8FC\uC9C0.",
      "\uC774\uBC88 \uC5F0\uC131\uC5D0\uC11C <{2}> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <40>% \uB0B4\uB9AC\uACA0\uB124.",
      "\uC774\uBC88 \uC5F0\uC131\uC5D0\uC11C <{2}> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <40>% \uB0B4\uB824\uB4DC\uB9AC\uC8E0."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "mutateProb",
        targetType: "proposed",
        targetCondition: 3,
        targetCount: 1,
        ratio: 0,
        value: [-4e3, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "MbBlHWJi",
    pickRatio: 18e3,
    range: [0, 0],
    descriptions: [
      "\uC774\uBC88 \uC5F0\uC131\uC5D0\uC11C <{3}> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <40>% \uB0B4\uB824\uC8FC\uC9C0.",
      "\uC774\uBC88 \uC5F0\uC131\uC5D0\uC11C <{3}> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <40>% \uB0B4\uB9AC\uACA0\uB124.",
      "\uC774\uBC88 \uC5F0\uC131\uC5D0\uC11C <{3}> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <40>% \uB0B4\uB824\uB4DC\uB9AC\uC8E0."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "mutateProb",
        targetType: "proposed",
        targetCondition: 4,
        targetCount: 1,
        ratio: 0,
        value: [-4e3, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "K+jvDm0G",
    pickRatio: 18e3,
    range: [0, 0],
    descriptions: [
      "\uC774\uBC88 \uC5F0\uC131\uC5D0\uC11C <{4}> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <40>% \uB0B4\uB824\uC8FC\uC9C0.",
      "\uC774\uBC88 \uC5F0\uC131\uC5D0\uC11C <{4}> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <40>% \uB0B4\uB9AC\uACA0\uB124.",
      "\uC774\uBC88 \uC5F0\uC131\uC5D0\uC11C <{4}> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <40>% \uB0B4\uB824\uB4DC\uB9AC\uC8E0."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "mutateProb",
        targetType: "proposed",
        targetCondition: 5,
        targetCount: 1,
        ratio: 0,
        value: [-4e3, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "1Z2+BfwB",
    pickRatio: 1e4,
    range: [0, 0],
    descriptions: [
      "\uC774\uBC88 \uC5F0\uC131\uC5D0\uC11C <\uB124\uAC00 \uACE0\uB974\uB294> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <40>% \uB0B4\uB824\uC8FC\uC9C0.",
      "\uC774\uBC88 \uC5F0\uC131\uC5D0\uC11C <\uC790\uB124\uAC00 \uC120\uD0DD\uD55C> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <40>% \uB0B4\uB9AC\uACA0\uB124.",
      "\uC774\uBC88 \uC5F0\uC131\uC5D0\uC11C <\uB2F9\uC2E0\uC774 \uD0DD\uD55C> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <40>% \uB0B4\uB824\uB4DC\uB9AC\uC8E0."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "mutateProb",
        targetType: "userSelect",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [-4e3, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "x0InBN1Q",
    pickRatio: 72e3,
    range: [0, 0],
    descriptions: [
      "\uB0A8\uC740 \uBAA8\uB4E0 \uC5F0\uC131\uC5D0\uC11C <{0}> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <5>% \uB0B4\uB824\uC8FC\uC9C0.",
      "\uB0A8\uC740 \uBAA8\uB4E0 \uC5F0\uC131\uC5D0\uC11C <{0}> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <5>% \uB0B4\uB9AC\uACA0\uB124.",
      "\uB0A8\uC740 \uBAA8\uB4E0 \uC5F0\uC131\uC5D0\uC11C <{0}> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <5>% \uB0B4\uB824\uB4DC\uB9AC\uC8E0."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "mutateProb",
        targetType: "proposed",
        targetCondition: 1,
        targetCount: 1,
        ratio: 0,
        value: [-500, 0],
        remainTurn: 99
      }
    ]
  },
  {
    id: "edZNTMQF",
    pickRatio: 72e3,
    range: [0, 0],
    descriptions: [
      "\uB0A8\uC740 \uBAA8\uB4E0 \uC5F0\uC131\uC5D0\uC11C <{1}> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <5>% \uB0B4\uB824\uC8FC\uC9C0.",
      "\uB0A8\uC740 \uBAA8\uB4E0 \uC5F0\uC131\uC5D0\uC11C <{1}> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <5>% \uB0B4\uB9AC\uACA0\uB124.",
      "\uB0A8\uC740 \uBAA8\uB4E0 \uC5F0\uC131\uC5D0\uC11C <{1}> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <5>% \uB0B4\uB824\uB4DC\uB9AC\uC8E0."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "mutateProb",
        targetType: "proposed",
        targetCondition: 2,
        targetCount: 1,
        ratio: 0,
        value: [-500, 0],
        remainTurn: 99
      }
    ]
  },
  {
    id: "BynwLkza",
    pickRatio: 72e3,
    range: [0, 0],
    descriptions: [
      "\uB0A8\uC740 \uBAA8\uB4E0 \uC5F0\uC131\uC5D0\uC11C <{2}> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <5>% \uB0B4\uB824\uC8FC\uC9C0.",
      "\uB0A8\uC740 \uBAA8\uB4E0 \uC5F0\uC131\uC5D0\uC11C <{2}> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <5>% \uB0B4\uB9AC\uACA0\uB124.",
      "\uB0A8\uC740 \uBAA8\uB4E0 \uC5F0\uC131\uC5D0\uC11C <{2}> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <5>% \uB0B4\uB824\uB4DC\uB9AC\uC8E0."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "mutateProb",
        targetType: "proposed",
        targetCondition: 3,
        targetCount: 1,
        ratio: 0,
        value: [-500, 0],
        remainTurn: 99
      }
    ]
  },
  {
    id: "j6tS2JWw",
    pickRatio: 72e3,
    range: [0, 0],
    descriptions: [
      "\uB0A8\uC740 \uBAA8\uB4E0 \uC5F0\uC131\uC5D0\uC11C <{3}> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <5>% \uB0B4\uB824\uC8FC\uC9C0.",
      "\uB0A8\uC740 \uBAA8\uB4E0 \uC5F0\uC131\uC5D0\uC11C <{3}> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <5>% \uB0B4\uB9AC\uACA0\uB124.",
      "\uB0A8\uC740 \uBAA8\uB4E0 \uC5F0\uC131\uC5D0\uC11C <{3}> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <5>% \uB0B4\uB824\uB4DC\uB9AC\uC8E0."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "mutateProb",
        targetType: "proposed",
        targetCondition: 4,
        targetCount: 1,
        ratio: 0,
        value: [-500, 0],
        remainTurn: 99
      }
    ]
  },
  {
    id: "hr4eAi80",
    pickRatio: 72e3,
    range: [0, 0],
    descriptions: [
      "\uB0A8\uC740 \uBAA8\uB4E0 \uC5F0\uC131\uC5D0\uC11C <{4}> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <5>% \uB0B4\uB824\uC8FC\uC9C0.",
      "\uB0A8\uC740 \uBAA8\uB4E0 \uC5F0\uC131\uC5D0\uC11C <{4}> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <5>% \uB0B4\uB9AC\uACA0\uB124.",
      "\uB0A8\uC740 \uBAA8\uB4E0 \uC5F0\uC131\uC5D0\uC11C <{4}> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <5>% \uB0B4\uB824\uB4DC\uB9AC\uC8E0."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "mutateProb",
        targetType: "proposed",
        targetCondition: 5,
        targetCount: 1,
        ratio: 0,
        value: [-500, 0],
        remainTurn: 99
      }
    ]
  },
  {
    id: "q+a6jS9L",
    pickRatio: 4e4,
    range: [0, 0],
    descriptions: [
      "\uB0A8\uC740 \uBAA8\uB4E0 \uC5F0\uC131\uC5D0\uC11C <\uB124\uAC00 \uACE0\uB974\uB294> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <5>% \uB0B4\uB824\uC8FC\uC9C0.",
      "\uB0A8\uC740 \uBAA8\uB4E0 \uC5F0\uC131\uC5D0\uC11C <\uC790\uB124\uAC00 \uC120\uD0DD\uD55C> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <5>% \uB0B4\uB9AC\uACA0\uB124.",
      "\uB0A8\uC740 \uBAA8\uB4E0 \uC5F0\uC131\uC5D0\uC11C <\uB2F9\uC2E0\uC774 \uD0DD\uD55C> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <5>% \uB0B4\uB824\uB4DC\uB9AC\uC8E0."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "mutateProb",
        targetType: "userSelect",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [-500, 0],
        remainTurn: 99
      }
    ]
  },
  {
    id: "lk493u0f",
    pickRatio: 18e3,
    range: [0, 0],
    descriptions: [
      "\uB0A8\uC740 \uBAA8\uB4E0 \uC5F0\uC131\uC5D0\uC11C <{0}> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <10>% \uB0B4\uB824\uC8FC\uC9C0.",
      "\uB0A8\uC740 \uBAA8\uB4E0 \uC5F0\uC131\uC5D0\uC11C <{0}> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <10>% \uB0B4\uB9AC\uACA0\uB124.",
      "\uB0A8\uC740 \uBAA8\uB4E0 \uC5F0\uC131\uC5D0\uC11C <{0}> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <10>% \uB0B4\uB824\uB4DC\uB9AC\uC8E0."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "mutateProb",
        targetType: "proposed",
        targetCondition: 1,
        targetCount: 1,
        ratio: 0,
        value: [-1e3, 0],
        remainTurn: 99
      }
    ]
  },
  {
    id: "3Z3Yk/vI",
    pickRatio: 18e3,
    range: [0, 0],
    descriptions: [
      "\uB0A8\uC740 \uBAA8\uB4E0 \uC5F0\uC131\uC5D0\uC11C <{1}> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <10>% \uB0B4\uB824\uC8FC\uC9C0.",
      "\uB0A8\uC740 \uBAA8\uB4E0 \uC5F0\uC131\uC5D0\uC11C <{1}> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <10>% \uB0B4\uB9AC\uACA0\uB124.",
      "\uB0A8\uC740 \uBAA8\uB4E0 \uC5F0\uC131\uC5D0\uC11C <{1}> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <10>% \uB0B4\uB824\uB4DC\uB9AC\uC8E0."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "mutateProb",
        targetType: "proposed",
        targetCondition: 2,
        targetCount: 1,
        ratio: 0,
        value: [-1e3, 0],
        remainTurn: 99
      }
    ]
  },
  {
    id: "tzLD/hSf",
    pickRatio: 18e3,
    range: [0, 0],
    descriptions: [
      "\uB0A8\uC740 \uBAA8\uB4E0 \uC5F0\uC131\uC5D0\uC11C <{2}> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <10>% \uB0B4\uB824\uC8FC\uC9C0.",
      "\uB0A8\uC740 \uBAA8\uB4E0 \uC5F0\uC131\uC5D0\uC11C <{2}> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <10>% \uB0B4\uB9AC\uACA0\uB124.",
      "\uB0A8\uC740 \uBAA8\uB4E0 \uC5F0\uC131\uC5D0\uC11C <{2}> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <10>% \uB0B4\uB824\uB4DC\uB9AC\uC8E0."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "mutateProb",
        targetType: "proposed",
        targetCondition: 3,
        targetCount: 1,
        ratio: 0,
        value: [-1e3, 0],
        remainTurn: 99
      }
    ]
  },
  {
    id: "lIRt7F3t",
    pickRatio: 18e3,
    range: [0, 0],
    descriptions: [
      "\uB0A8\uC740 \uBAA8\uB4E0 \uC5F0\uC131\uC5D0\uC11C <{3}> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <10>% \uB0B4\uB824\uC8FC\uC9C0.",
      "\uB0A8\uC740 \uBAA8\uB4E0 \uC5F0\uC131\uC5D0\uC11C <{3}> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <10>% \uB0B4\uB9AC\uACA0\uB124.",
      "\uB0A8\uC740 \uBAA8\uB4E0 \uC5F0\uC131\uC5D0\uC11C <{3}> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <10>% \uB0B4\uB824\uB4DC\uB9AC\uC8E0."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "mutateProb",
        targetType: "proposed",
        targetCondition: 4,
        targetCount: 1,
        ratio: 0,
        value: [-1e3, 0],
        remainTurn: 99
      }
    ]
  },
  {
    id: "rZvPL8BK",
    pickRatio: 18e3,
    range: [0, 0],
    descriptions: [
      "\uB0A8\uC740 \uBAA8\uB4E0 \uC5F0\uC131\uC5D0\uC11C <{4}> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <10>% \uB0B4\uB824\uC8FC\uC9C0.",
      "\uB0A8\uC740 \uBAA8\uB4E0 \uC5F0\uC131\uC5D0\uC11C <{4}> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <10>% \uB0B4\uB9AC\uACA0\uB124.",
      "\uB0A8\uC740 \uBAA8\uB4E0 \uC5F0\uC131\uC5D0\uC11C <{4}> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <10>% \uB0B4\uB824\uB4DC\uB9AC\uC8E0."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "mutateProb",
        targetType: "proposed",
        targetCondition: 5,
        targetCount: 1,
        ratio: 0,
        value: [-1e3, 0],
        remainTurn: 99
      }
    ]
  },
  {
    id: "l+rAEPKP",
    pickRatio: 1e4,
    range: [0, 0],
    descriptions: [
      "\uB0A8\uC740 \uBAA8\uB4E0 \uC5F0\uC131\uC5D0\uC11C <\uB124\uAC00 \uACE0\uB974\uB294> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <10>% \uB0B4\uB824\uC8FC\uC9C0.",
      "\uB0A8\uC740 \uBAA8\uB4E0 \uC5F0\uC131\uC5D0\uC11C <\uC790\uB124\uAC00 \uC120\uD0DD\uD55C> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <10>% \uB0B4\uB9AC\uACA0\uB124.",
      "\uB0A8\uC740 \uBAA8\uB4E0 \uC5F0\uC131\uC5D0\uC11C <\uB2F9\uC2E0\uC774 \uD0DD\uD55C> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <10>% \uB0B4\uB824\uB4DC\uB9AC\uC8E0."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "mutateProb",
        targetType: "userSelect",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [-1e3, 0],
        remainTurn: 99
      }
    ]
  },
  {
    id: "fSLS3rof",
    pickRatio: 63e3,
    range: [0, 0],
    descriptions: [
      "\uC774\uBC88\uC5D0\uB294 <{0}> \uD6A8\uACFC\uB97C \uC5F0\uC131\uD574\uC8FC\uC9C0.",
      "\uC774\uBC88\uC5D0\uB294 <{0}> \uD6A8\uACFC\uB97C \uC5F0\uC131\uD558\uACA0\uB124.",
      "\uC774\uBC88\uC5D0\uB294 <{0}> \uD6A8\uACFC\uB97C \uC5F0\uC131\uD574\uB4DC\uB9AC\uC8E0."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "setEnchantTargetAndAmount",
        targetType: "proposed",
        targetCondition: 1,
        targetCount: 1,
        ratio: 0,
        value: [1, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "vKd6ITdI",
    pickRatio: 63e3,
    range: [0, 0],
    descriptions: [
      "\uC774\uBC88\uC5D0\uB294 <{1}> \uD6A8\uACFC\uB97C \uC5F0\uC131\uD574\uC8FC\uC9C0.",
      "\uC774\uBC88\uC5D0\uB294 <{1}> \uD6A8\uACFC\uB97C \uC5F0\uC131\uD558\uACA0\uB124.",
      "\uC774\uBC88\uC5D0\uB294 <{1}> \uD6A8\uACFC\uB97C \uC5F0\uC131\uD574\uB4DC\uB9AC\uC8E0."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "setEnchantTargetAndAmount",
        targetType: "proposed",
        targetCondition: 2,
        targetCount: 1,
        ratio: 0,
        value: [1, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "wDSmKG9f",
    pickRatio: 63e3,
    range: [0, 0],
    descriptions: [
      "\uC774\uBC88\uC5D0\uB294 <{2}> \uD6A8\uACFC\uB97C \uC5F0\uC131\uD574\uC8FC\uC9C0.",
      "\uC774\uBC88\uC5D0\uB294 <{2}> \uD6A8\uACFC\uB97C \uC5F0\uC131\uD558\uACA0\uB124.",
      "\uC774\uBC88\uC5D0\uB294 <{2}> \uD6A8\uACFC\uB97C \uC5F0\uC131\uD574\uB4DC\uB9AC\uC8E0."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "setEnchantTargetAndAmount",
        targetType: "proposed",
        targetCondition: 3,
        targetCount: 1,
        ratio: 0,
        value: [1, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "2nmDq61K",
    pickRatio: 63e3,
    range: [0, 0],
    descriptions: [
      "\uC774\uBC88\uC5D0\uB294 <{3}> \uD6A8\uACFC\uB97C \uC5F0\uC131\uD574\uC8FC\uC9C0.",
      "\uC774\uBC88\uC5D0\uB294 <{3}> \uD6A8\uACFC\uB97C \uC5F0\uC131\uD558\uACA0\uB124.",
      "\uC774\uBC88\uC5D0\uB294 <{3}> \uD6A8\uACFC\uB97C \uC5F0\uC131\uD574\uB4DC\uB9AC\uC8E0."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "setEnchantTargetAndAmount",
        targetType: "proposed",
        targetCondition: 4,
        targetCount: 1,
        ratio: 0,
        value: [1, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "hwyOMWSr",
    pickRatio: 63e3,
    range: [0, 0],
    descriptions: [
      "\uC774\uBC88\uC5D0\uB294 <{4}> \uD6A8\uACFC\uB97C \uC5F0\uC131\uD574\uC8FC\uC9C0.",
      "\uC774\uBC88\uC5D0\uB294 <{4}> \uD6A8\uACFC\uB97C \uC5F0\uC131\uD558\uACA0\uB124.",
      "\uC774\uBC88\uC5D0\uB294 <{4}> \uD6A8\uACFC\uB97C \uC5F0\uC131\uD574\uB4DC\uB9AC\uC8E0."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "setEnchantTargetAndAmount",
        targetType: "proposed",
        targetCondition: 5,
        targetCount: 1,
        ratio: 0,
        value: [1, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "s+iwb0Rw",
    pickRatio: 35e3,
    range: [0, 0],
    descriptions: [
      "\uC774\uBC88\uC5D0\uB294 <\uB124\uAC00 \uACE0\uB974\uB294> \uD6A8\uACFC\uB97C \uC5F0\uC131\uD574\uC8FC\uC9C0.",
      "\uC774\uBC88\uC5D0\uB294 <\uC790\uB124\uAC00 \uC120\uD0DD\uD55C> \uD6A8\uACFC\uB97C \uC5F0\uC131\uD558\uACA0\uB124.",
      "\uC774\uBC88\uC5D0\uB294 <\uB2F9\uC2E0\uC774 \uD0DD\uD55C> \uD6A8\uACFC\uB97C \uC5F0\uC131\uD574\uB4DC\uB9AC\uC8E0."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "setEnchantTargetAndAmount",
        targetType: "userSelect",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [1, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "NhvwhMBa",
    pickRatio: 63e3,
    range: [0, 0],
    descriptions: [
      "\uC774\uBC88\uC5D0\uB294 <{0}> \uD6A8\uACFC\uB97C <2>\uB2E8\uACC4 \uC5F0\uC131\uD574\uC8FC\uC9C0. \uB2E4\uB9CC \uAE30\uD68C\uB97C <2>\uD68C \uC18C\uBAA8\uD558\uAC8C \uB420 \uAC70\uC57C.",
      "\uC774\uBC88\uC5D0\uB294 <{0}> \uD6A8\uACFC\uB97C <2>\uB2E8\uACC4 \uC5F0\uC131\uD558\uACA0\uB124. \uB300\uC2E0, \uAE30\uD68C\uB97C <2>\uD68C \uC18C\uBAA8\uD560\uAC78\uC138.",
      "<{0}> \uD6A8\uACFC\uB97C <2>\uB2E8\uACC4 \uC5F0\uC131\uD574\uB4DC\uB9AC\uC8E0. \uAE30\uD68C\uB97C <2>\uD68C \uC18C\uBAA8\uD558\uACA0\uC9C0\uB9CC\uC694."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "setEnchantTargetAndAmount",
        targetType: "proposed",
        targetCondition: 1,
        targetCount: 1,
        ratio: 0,
        value: [2, 0],
        remainTurn: 1
      },
      {
        type: "decreaseTurnLeft",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [1, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "LXZ6vfnw",
    pickRatio: 63e3,
    range: [0, 0],
    descriptions: [
      "\uC774\uBC88\uC5D0\uB294 <{1}> \uD6A8\uACFC\uB97C <2>\uB2E8\uACC4 \uC5F0\uC131\uD574\uC8FC\uC9C0. \uB2E4\uB9CC \uAE30\uD68C\uB97C <2>\uD68C \uC18C\uBAA8\uD558\uAC8C \uB420 \uAC70\uC57C.",
      "\uC774\uBC88\uC5D0\uB294 <{1}> \uD6A8\uACFC\uB97C <2>\uB2E8\uACC4 \uC5F0\uC131\uD558\uACA0\uB124. \uB300\uC2E0, \uAE30\uD68C\uB97C <2>\uD68C \uC18C\uBAA8\uD560\uAC78\uC138.",
      "<{1}> \uD6A8\uACFC\uB97C <2>\uB2E8\uACC4 \uC5F0\uC131\uD574\uB4DC\uB9AC\uC8E0. \uAE30\uD68C\uB97C <2>\uD68C \uC18C\uBAA8\uD558\uACA0\uC9C0\uB9CC\uC694."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "setEnchantTargetAndAmount",
        targetType: "proposed",
        targetCondition: 2,
        targetCount: 1,
        ratio: 0,
        value: [2, 0],
        remainTurn: 1
      },
      {
        type: "decreaseTurnLeft",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [1, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "1K2B/VuY",
    pickRatio: 63e3,
    range: [0, 0],
    descriptions: [
      "\uC774\uBC88\uC5D0\uB294 <{2}> \uD6A8\uACFC\uB97C <2>\uB2E8\uACC4 \uC5F0\uC131\uD574\uC8FC\uC9C0. \uB2E4\uB9CC \uAE30\uD68C\uB97C <2>\uD68C \uC18C\uBAA8\uD558\uAC8C \uB420 \uAC70\uC57C.",
      "\uC774\uBC88\uC5D0\uB294 <{2}> \uD6A8\uACFC\uB97C <2>\uB2E8\uACC4 \uC5F0\uC131\uD558\uACA0\uB124. \uB300\uC2E0, \uAE30\uD68C\uB97C <2>\uD68C \uC18C\uBAA8\uD560\uAC78\uC138.",
      "<{2}> \uD6A8\uACFC\uB97C <2>\uB2E8\uACC4 \uC5F0\uC131\uD574\uB4DC\uB9AC\uC8E0. \uAE30\uD68C\uB97C <2>\uD68C \uC18C\uBAA8\uD558\uACA0\uC9C0\uB9CC\uC694."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "setEnchantTargetAndAmount",
        targetType: "proposed",
        targetCondition: 3,
        targetCount: 1,
        ratio: 0,
        value: [2, 0],
        remainTurn: 1
      },
      {
        type: "decreaseTurnLeft",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [1, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "yHnMY93c",
    pickRatio: 63e3,
    range: [0, 0],
    descriptions: [
      "\uC774\uBC88\uC5D0\uB294 <{3}> \uD6A8\uACFC\uB97C <2>\uB2E8\uACC4 \uC5F0\uC131\uD574\uC8FC\uC9C0. \uB2E4\uB9CC \uAE30\uD68C\uB97C <2>\uD68C \uC18C\uBAA8\uD558\uAC8C \uB420 \uAC70\uC57C.",
      "\uC774\uBC88\uC5D0\uB294 <{3}> \uD6A8\uACFC\uB97C <2>\uB2E8\uACC4 \uC5F0\uC131\uD558\uACA0\uB124. \uB300\uC2E0, \uAE30\uD68C\uB97C <2>\uD68C \uC18C\uBAA8\uD560\uAC78\uC138.",
      "<{3}> \uD6A8\uACFC\uB97C <2>\uB2E8\uACC4 \uC5F0\uC131\uD574\uB4DC\uB9AC\uC8E0. \uAE30\uD68C\uB97C <2>\uD68C \uC18C\uBAA8\uD558\uACA0\uC9C0\uB9CC\uC694."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "setEnchantTargetAndAmount",
        targetType: "proposed",
        targetCondition: 4,
        targetCount: 1,
        ratio: 0,
        value: [2, 0],
        remainTurn: 1
      },
      {
        type: "decreaseTurnLeft",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [1, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "azHB9NEx",
    pickRatio: 63e3,
    range: [0, 0],
    descriptions: [
      "\uC774\uBC88\uC5D0\uB294 <{4}> \uD6A8\uACFC\uB97C <2>\uB2E8\uACC4 \uC5F0\uC131\uD574\uC8FC\uC9C0. \uB2E4\uB9CC \uAE30\uD68C\uB97C <2>\uD68C \uC18C\uBAA8\uD558\uAC8C \uB420 \uAC70\uC57C.",
      "\uC774\uBC88\uC5D0\uB294 <{4}> \uD6A8\uACFC\uB97C <2>\uB2E8\uACC4 \uC5F0\uC131\uD558\uACA0\uB124. \uB300\uC2E0, \uAE30\uD68C\uB97C <2>\uD68C \uC18C\uBAA8\uD560\uAC78\uC138.",
      "<{4}> \uD6A8\uACFC\uB97C <2>\uB2E8\uACC4 \uC5F0\uC131\uD574\uB4DC\uB9AC\uC8E0. \uAE30\uD68C\uB97C <2>\uD68C \uC18C\uBAA8\uD558\uACA0\uC9C0\uB9CC\uC694."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "setEnchantTargetAndAmount",
        targetType: "proposed",
        targetCondition: 5,
        targetCount: 1,
        ratio: 0,
        value: [2, 0],
        remainTurn: 1
      },
      {
        type: "decreaseTurnLeft",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [1, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "CO+S24gs",
    pickRatio: 35e3,
    range: [0, 0],
    descriptions: [
      "\uC774\uBC88\uC5D0\uB294 <\uB124\uAC00 \uACE0\uB974\uB294> \uD6A8\uACFC\uB97C <2>\uB2E8\uACC4 \uC5F0\uC131\uD574\uC8FC\uC9C0. \uB2E4\uB9CC \uAE30\uD68C\uB97C <2>\uD68C \uC18C\uBAA8\uD558\uAC8C \uB420 \uAC70\uC57C.",
      "\uC774\uBC88\uC5D0\uB294 <\uC790\uB124\uAC00 \uC120\uD0DD\uD55C> \uD6A8\uACFC\uB97C <2>\uB2E8\uACC4 \uC5F0\uC131\uD558\uACA0\uB124. \uB300\uC2E0, \uAE30\uD68C\uB97C <2>\uD68C \uC18C\uBAA8\uD560\uAC78\uC138.",
      "<\uB2F9\uC2E0\uC774 \uD0DD\uD55C> \uD6A8\uACFC\uB97C <2>\uB2E8\uACC4 \uC5F0\uC131\uD574\uB4DC\uB9AC\uC8E0. \uAE30\uD68C\uB97C <2>\uD68C \uC18C\uBAA8\uD558\uACA0\uC9C0\uB9CC\uC694."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "setEnchantTargetAndAmount",
        targetType: "userSelect",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [2, 0],
        remainTurn: 1
      },
      {
        type: "decreaseTurnLeft",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [1, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "t2L3Jkgf",
    pickRatio: 5e4,
    range: [0, 0],
    descriptions: [
      "\uC774\uBC88\uC5D0 \uC5F0\uC131\uB418\uB294 \uD6A8\uACFC\uB294 <2>\uB2E8\uACC4 \uC62C\uB77C\uAC08\uAC70\uC57C.",
      "\uC774\uBC88\uC5D0 \uC5F0\uC131\uB418\uB294 \uD6A8\uACFC\uB294 <2>\uB2E8\uACC4 \uC62C\uB77C\uAC08 \uAC78\uC138.",
      "\uC774\uBC88\uC5D0 \uC5F0\uC131\uB418\uB294 \uD6A8\uACFC\uB294 <2>\uB2E8\uACC4 \uC62C\uB77C\uAC08 \uAC70\uC5D0\uC694."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "setEnchantIncreaseAmount",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [2, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "85QUcGkJ",
    pickRatio: 5e4,
    range: [0, 0],
    descriptions: [
      "\uC774\uBC88\uC5D0 \uC5F0\uC131\uB418\uB294 \uD6A8\uACFC\uB294 <3>\uB2E8\uACC4 \uC62C\uB77C\uAC08\uAC70\uC57C. \uB2E4\uB9CC \uAE30\uD68C\uB97C <2>\uD68C \uC18C\uBAA8\uD558\uAC8C \uB418\uACA0\uC9C0.",
      "\uC774\uBC88\uC5D0 \uC5F0\uC131\uB418\uB294 \uD6A8\uACFC\uB294 <3>\uB2E8\uACC4 \uC62C\uB77C\uAC08 \uAC78\uC138. \uB300\uC2E0, \uAE30\uD68C\uB97C <2>\uD68C \uC18C\uBAA8\uD558\uACA0\uB124.",
      "\uC774\uBC88\uC5D0 \uC5F0\uC131\uB418\uB294 \uD6A8\uACFC\uB294 <3>\uB2E8\uACC4 \uC62C\uB77C\uAC08 \uAC70\uC5D0\uC694. \uAE30\uD68C\uB97C <2>\uD68C \uC18C\uBAA8\uD558\uACA0\uC9C0\uB9CC\uC694."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "setEnchantIncreaseAmount",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [3, 0],
        remainTurn: 1
      },
      {
        type: "decreaseTurnLeft",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [1, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "WHIji6kk",
    pickRatio: 5e4,
    range: [0, 0],
    descriptions: [
      "\uC774\uBC88\uC5D0\uB294 <2>\uAC1C\uC758 \uD6A8\uACFC\uB97C \uB3D9\uC2DC\uC5D0 \uC5F0\uC131\uD558\uACA0\uC5B4.",
      "\uC774\uBC88\uC5D0\uB294 <2>\uAC1C\uC758 \uD6A8\uACFC\uB97C \uC5F0\uC131\uD558\uACA0\uB124.",
      "\uC774\uBC88\uC5D0\uB294 <2>\uAC1C\uC758 \uD6A8\uACFC\uB97C \uB3D9\uC2DC\uC5D0 \uC5F0\uC131\uD574\uB4DC\uB9AC\uC8E0."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "setEnchantEffectCount",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [2, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "1K1N7q8U",
    pickRatio: 5e4,
    range: [0, 0],
    descriptions: [
      "\uC774\uBC88\uC5D0\uB294 <3>\uAC1C\uC758 \uD6A8\uACFC\uB97C \uB3D9\uC2DC\uC5D0 \uC5F0\uC131\uD558\uACA0\uC5B4. \uB2E4\uB9CC \uAE30\uD68C\uB97C <2>\uD68C \uC18C\uBAA8\uD558\uAC8C \uB418\uACA0\uC9C0.",
      "\uC774\uBC88\uC5D0\uB294 <3>\uAC1C\uC758 \uD6A8\uACFC\uB97C \uC5F0\uC131\uD558\uACA0\uB124. \uB300\uC2E0, \uAE30\uD68C\uB97C <2>\uD68C \uC18C\uBAA8\uD558\uACA0\uB124.",
      "\uC774\uBC88\uC5D0\uB294 <3>\uAC1C\uC758 \uD6A8\uACFC\uB97C \uB3D9\uC2DC\uC5D0 \uC5F0\uC131\uD574\uB4DC\uB9AC\uC8E0. \uAE30\uD68C\uB97C <2>\uD68C \uC18C\uBAA8\uD558\uACA0\uC9C0\uB9CC\uC694."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "setEnchantEffectCount",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [3, 0],
        remainTurn: 1
      },
      {
        type: "decreaseTurnLeft",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [1, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "+l/Vq72z",
    pickRatio: 63e3,
    range: [0, 0],
    descriptions: [
      "\uC774\uBC88 \uC5F0\uC131\uC5D0\uC11C <{0}> \uD6A8\uACFC\uC758 \uB300\uC131\uACF5 \uD655\uB960\uC744 <100>% \uC62C\uB824\uC8FC\uC9C0.",
      "\uC774\uBC88 \uC5F0\uC131\uC5D0\uC11C <{0}> \uD6A8\uACFC\uC758 \uB300\uC131\uACF5 \uD655\uB960\uC744 <100>% \uC62C\uB9AC\uACA0\uB124.",
      "\uC774\uBC88 \uC5F0\uC131\uC5D0\uC11C <{0}> \uD6A8\uACFC\uC758 \uB300\uC131\uACF5 \uD655\uB960\uC744 <100>% \uC62C\uB824\uB4DC\uB9AC\uC8E0."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "mutateLuckyRatio",
        targetType: "proposed",
        targetCondition: 1,
        targetCount: 1,
        ratio: 0,
        value: [1e4, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "kNwOBIrh",
    pickRatio: 63e3,
    range: [0, 0],
    descriptions: [
      "\uC774\uBC88 \uC5F0\uC131\uC5D0\uC11C <{1}> \uD6A8\uACFC\uC758 \uB300\uC131\uACF5 \uD655\uB960\uC744 <100>% \uC62C\uB824\uC8FC\uC9C0.",
      "\uC774\uBC88 \uC5F0\uC131\uC5D0\uC11C <{1}> \uD6A8\uACFC\uC758 \uB300\uC131\uACF5 \uD655\uB960\uC744 <100>% \uC62C\uB9AC\uACA0\uB124.",
      "\uC774\uBC88 \uC5F0\uC131\uC5D0\uC11C <{1}> \uD6A8\uACFC\uC758 \uB300\uC131\uACF5 \uD655\uB960\uC744 <100>% \uC62C\uB824\uB4DC\uB9AC\uC8E0."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "mutateLuckyRatio",
        targetType: "proposed",
        targetCondition: 2,
        targetCount: 1,
        ratio: 0,
        value: [1e4, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "5yDNv7tt",
    pickRatio: 63e3,
    range: [0, 0],
    descriptions: [
      "\uC774\uBC88 \uC5F0\uC131\uC5D0\uC11C <{2}> \uD6A8\uACFC\uC758 \uB300\uC131\uACF5 \uD655\uB960\uC744 <100>% \uC62C\uB824\uC8FC\uC9C0.",
      "\uC774\uBC88 \uC5F0\uC131\uC5D0\uC11C <{2}> \uD6A8\uACFC\uC758 \uB300\uC131\uACF5 \uD655\uB960\uC744 <100>% \uC62C\uB9AC\uACA0\uB124.",
      "\uC774\uBC88 \uC5F0\uC131\uC5D0\uC11C <{2}> \uD6A8\uACFC\uC758 \uB300\uC131\uACF5 \uD655\uB960\uC744 <100>% \uC62C\uB824\uB4DC\uB9AC\uC8E0."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "mutateLuckyRatio",
        targetType: "proposed",
        targetCondition: 3,
        targetCount: 1,
        ratio: 0,
        value: [1e4, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "cWKctr4Y",
    pickRatio: 63e3,
    range: [0, 0],
    descriptions: [
      "\uC774\uBC88 \uC5F0\uC131\uC5D0\uC11C <{3}> \uD6A8\uACFC\uC758 \uB300\uC131\uACF5 \uD655\uB960\uC744 <100>% \uC62C\uB824\uC8FC\uC9C0.",
      "\uC774\uBC88 \uC5F0\uC131\uC5D0\uC11C <{3}> \uD6A8\uACFC\uC758 \uB300\uC131\uACF5 \uD655\uB960\uC744 <100>% \uC62C\uB9AC\uACA0\uB124.",
      "\uC774\uBC88 \uC5F0\uC131\uC5D0\uC11C <{3}> \uD6A8\uACFC\uC758 \uB300\uC131\uACF5 \uD655\uB960\uC744 <100>% \uC62C\uB824\uB4DC\uB9AC\uC8E0."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "mutateLuckyRatio",
        targetType: "proposed",
        targetCondition: 4,
        targetCount: 1,
        ratio: 0,
        value: [1e4, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "ti89QM08",
    pickRatio: 63e3,
    range: [0, 0],
    descriptions: [
      "\uC774\uBC88 \uC5F0\uC131\uC5D0\uC11C <{4}> \uD6A8\uACFC\uC758 \uB300\uC131\uACF5 \uD655\uB960\uC744 <100>% \uC62C\uB824\uC8FC\uC9C0.",
      "\uC774\uBC88 \uC5F0\uC131\uC5D0\uC11C <{4}> \uD6A8\uACFC\uC758 \uB300\uC131\uACF5 \uD655\uB960\uC744 <100>% \uC62C\uB9AC\uACA0\uB124.",
      "\uC774\uBC88 \uC5F0\uC131\uC5D0\uC11C <{4}> \uD6A8\uACFC\uC758 \uB300\uC131\uACF5 \uD655\uB960\uC744 <100>% \uC62C\uB824\uB4DC\uB9AC\uC8E0."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "mutateLuckyRatio",
        targetType: "proposed",
        targetCondition: 5,
        targetCount: 1,
        ratio: 0,
        value: [1e4, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "hVCN9GMr",
    pickRatio: 35e3,
    range: [0, 0],
    descriptions: [
      "\uC774\uBC88 \uC5F0\uC131\uC5D0\uC11C <\uB124\uAC00 \uACE0\uB974\uB294> \uD6A8\uACFC\uC758 \uB300\uC131\uACF5 \uD655\uB960\uC744 <100>% \uC62C\uB824\uC8FC\uC9C0.",
      "\uC774\uBC88 \uC5F0\uC131\uC5D0\uC11C <\uC790\uB124\uAC00 \uC120\uD0DD\uD55C> \uD6A8\uACFC\uC758 \uB300\uC131\uACF5 \uD655\uB960\uC744 <100>% \uC62C\uB9AC\uACA0\uB124.",
      "\uC774\uBC88 \uC5F0\uC131\uC5D0\uC11C <\uB2F9\uC2E0\uC774 \uD0DD\uD55C> \uD6A8\uACFC\uC758 \uB300\uC131\uACF5 \uD655\uB960\uC744 <100>% \uC62C\uB824\uB4DC\uB9AC\uC8E0."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "mutateLuckyRatio",
        targetType: "userSelect",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [1e4, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "R3VkRa5o",
    pickRatio: 100800,
    range: [0, 0],
    descriptions: [
      "\uB0A8\uC740 \uBAA8\uB4E0 \uC5F0\uC131\uC5D0\uC11C <{0}> \uD6A8\uACFC\uC758 \uB300\uC131\uACF5 \uD655\uB960\uC744 <7>% \uC62C\uB824\uC8FC\uC9C0.",
      "\uB0A8\uC740 \uBAA8\uB4E0 \uC5F0\uC131\uC5D0\uC11C <{0}> \uD6A8\uACFC\uC758 \uB300\uC131\uACF5 \uD655\uB960\uC744 <7>% \uC62C\uB9AC\uACA0\uB124.",
      "\uB0A8\uC740 \uBAA8\uB4E0 \uC5F0\uC131\uC5D0\uC11C <{0}> \uD6A8\uACFC\uC758 \uB300\uC131\uACF5 \uD655\uB960\uC744 <7>% \uC62C\uB824\uB4DC\uB9AC\uC8E0."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "mutateLuckyRatio",
        targetType: "proposed",
        targetCondition: 1,
        targetCount: 1,
        ratio: 0,
        value: [700, 0],
        remainTurn: 99
      }
    ]
  },
  {
    id: "6CvFcBRK",
    pickRatio: 100800,
    range: [0, 0],
    descriptions: [
      "\uB0A8\uC740 \uBAA8\uB4E0 \uC5F0\uC131\uC5D0\uC11C <{1}> \uD6A8\uACFC\uC758 \uB300\uC131\uACF5 \uD655\uB960\uC744 <7>% \uC62C\uB824\uC8FC\uC9C0.",
      "\uB0A8\uC740 \uBAA8\uB4E0 \uC5F0\uC131\uC5D0\uC11C <{1}> \uD6A8\uACFC\uC758 \uB300\uC131\uACF5 \uD655\uB960\uC744 <7>% \uC62C\uB9AC\uACA0\uB124.",
      "\uB0A8\uC740 \uBAA8\uB4E0 \uC5F0\uC131\uC5D0\uC11C <{1}> \uD6A8\uACFC\uC758 \uB300\uC131\uACF5 \uD655\uB960\uC744 <7>% \uC62C\uB824\uB4DC\uB9AC\uC8E0."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "mutateLuckyRatio",
        targetType: "proposed",
        targetCondition: 2,
        targetCount: 1,
        ratio: 0,
        value: [700, 0],
        remainTurn: 99
      }
    ]
  },
  {
    id: "Mlj/o8hr",
    pickRatio: 100800,
    range: [0, 0],
    descriptions: [
      "\uB0A8\uC740 \uBAA8\uB4E0 \uC5F0\uC131\uC5D0\uC11C <{2}> \uD6A8\uACFC\uC758 \uB300\uC131\uACF5 \uD655\uB960\uC744 <7>% \uC62C\uB824\uC8FC\uC9C0.",
      "\uB0A8\uC740 \uBAA8\uB4E0 \uC5F0\uC131\uC5D0\uC11C <{2}> \uD6A8\uACFC\uC758 \uB300\uC131\uACF5 \uD655\uB960\uC744 <7>% \uC62C\uB9AC\uACA0\uB124.",
      "\uB0A8\uC740 \uBAA8\uB4E0 \uC5F0\uC131\uC5D0\uC11C <{2}> \uD6A8\uACFC\uC758 \uB300\uC131\uACF5 \uD655\uB960\uC744 <7>% \uC62C\uB824\uB4DC\uB9AC\uC8E0."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "mutateLuckyRatio",
        targetType: "proposed",
        targetCondition: 3,
        targetCount: 1,
        ratio: 0,
        value: [700, 0],
        remainTurn: 99
      }
    ]
  },
  {
    id: "kZBjTO4d",
    pickRatio: 100800,
    range: [0, 0],
    descriptions: [
      "\uB0A8\uC740 \uBAA8\uB4E0 \uC5F0\uC131\uC5D0\uC11C <{3}> \uD6A8\uACFC\uC758 \uB300\uC131\uACF5 \uD655\uB960\uC744 <7>% \uC62C\uB824\uC8FC\uC9C0.",
      "\uB0A8\uC740 \uBAA8\uB4E0 \uC5F0\uC131\uC5D0\uC11C <{3}> \uD6A8\uACFC\uC758 \uB300\uC131\uACF5 \uD655\uB960\uC744 <7>% \uC62C\uB9AC\uACA0\uB124.",
      "\uB0A8\uC740 \uBAA8\uB4E0 \uC5F0\uC131\uC5D0\uC11C <{3}> \uD6A8\uACFC\uC758 \uB300\uC131\uACF5 \uD655\uB960\uC744 <7>% \uC62C\uB824\uB4DC\uB9AC\uC8E0."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "mutateLuckyRatio",
        targetType: "proposed",
        targetCondition: 4,
        targetCount: 1,
        ratio: 0,
        value: [700, 0],
        remainTurn: 99
      }
    ]
  },
  {
    id: "GHmzTYc4",
    pickRatio: 100800,
    range: [0, 0],
    descriptions: [
      "\uB0A8\uC740 \uBAA8\uB4E0 \uC5F0\uC131\uC5D0\uC11C <{4}> \uD6A8\uACFC\uC758 \uB300\uC131\uACF5 \uD655\uB960\uC744 <7>% \uC62C\uB824\uC8FC\uC9C0.",
      "\uB0A8\uC740 \uBAA8\uB4E0 \uC5F0\uC131\uC5D0\uC11C <{4}> \uD6A8\uACFC\uC758 \uB300\uC131\uACF5 \uD655\uB960\uC744 <7>% \uC62C\uB9AC\uACA0\uB124.",
      "\uB0A8\uC740 \uBAA8\uB4E0 \uC5F0\uC131\uC5D0\uC11C <{4}> \uD6A8\uACFC\uC758 \uB300\uC131\uACF5 \uD655\uB960\uC744 <7>% \uC62C\uB824\uB4DC\uB9AC\uC8E0."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "mutateLuckyRatio",
        targetType: "proposed",
        targetCondition: 5,
        targetCount: 1,
        ratio: 0,
        value: [700, 0],
        remainTurn: 99
      }
    ]
  },
  {
    id: "wCFQOzcX",
    pickRatio: 56e3,
    range: [0, 0],
    descriptions: [
      "\uB0A8\uC740 \uBAA8\uB4E0 \uC5F0\uC131\uC5D0\uC11C <\uB124\uAC00 \uACE0\uB974\uB294> \uD6A8\uACFC\uC758 \uB300\uC131\uACF5 \uD655\uB960\uC744 <7>% \uC62C\uB824\uC8FC\uC9C0.",
      "\uB0A8\uC740 \uBAA8\uB4E0 \uC5F0\uC131\uC5D0\uC11C <\uC790\uB124\uAC00 \uC120\uD0DD\uD55C> \uD6A8\uACFC\uC758 \uB300\uC131\uACF5 \uD655\uB960\uC744 <7>% \uC62C\uB9AC\uACA0\uB124.",
      "\uB0A8\uC740 \uBAA8\uB4E0 \uC5F0\uC131\uC5D0\uC11C <\uB2F9\uC2E0\uC774 \uD0DD\uD55C> \uD6A8\uACFC\uC758 \uB300\uC131\uACF5 \uD655\uB960\uC744 <7>% \uC62C\uB824\uB4DC\uB9AC\uC8E0."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "mutateLuckyRatio",
        targetType: "userSelect",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [700, 0],
        remainTurn: 99
      }
    ]
  },
  {
    id: "ce23HTSj",
    pickRatio: 25200,
    range: [0, 0],
    descriptions: [
      "\uB0A8\uC740 \uBAA8\uB4E0 \uC5F0\uC131\uC5D0\uC11C <{0}> \uD6A8\uACFC\uC758 \uB300\uC131\uACF5 \uD655\uB960\uC744 <15>% \uC62C\uB824\uC8FC\uC9C0.",
      "\uB0A8\uC740 \uBAA8\uB4E0 \uC5F0\uC131\uC5D0\uC11C <{0}> \uD6A8\uACFC\uC758 \uB300\uC131\uACF5 \uD655\uB960\uC744 <15>% \uC62C\uB9AC\uACA0\uB124.",
      "\uB0A8\uC740 \uBAA8\uB4E0 \uC5F0\uC131\uC5D0\uC11C <{0}> \uD6A8\uACFC\uC758 \uB300\uC131\uACF5 \uD655\uB960\uC744 <15>% \uC62C\uB824\uB4DC\uB9AC\uC8E0."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "mutateLuckyRatio",
        targetType: "proposed",
        targetCondition: 1,
        targetCount: 1,
        ratio: 0,
        value: [1500, 0],
        remainTurn: 99
      }
    ]
  },
  {
    id: "kzAzSxCP",
    pickRatio: 25200,
    range: [0, 0],
    descriptions: [
      "\uB0A8\uC740 \uBAA8\uB4E0 \uC5F0\uC131\uC5D0\uC11C <{1}> \uD6A8\uACFC\uC758 \uB300\uC131\uACF5 \uD655\uB960\uC744 <15>% \uC62C\uB824\uC8FC\uC9C0.",
      "\uB0A8\uC740 \uBAA8\uB4E0 \uC5F0\uC131\uC5D0\uC11C <{1}> \uD6A8\uACFC\uC758 \uB300\uC131\uACF5 \uD655\uB960\uC744 <15>% \uC62C\uB9AC\uACA0\uB124.",
      "\uB0A8\uC740 \uBAA8\uB4E0 \uC5F0\uC131\uC5D0\uC11C <{1}> \uD6A8\uACFC\uC758 \uB300\uC131\uACF5 \uD655\uB960\uC744 <15>% \uC62C\uB824\uB4DC\uB9AC\uC8E0."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "mutateLuckyRatio",
        targetType: "proposed",
        targetCondition: 2,
        targetCount: 1,
        ratio: 0,
        value: [1500, 0],
        remainTurn: 99
      }
    ]
  },
  {
    id: "z6p8cFTO",
    pickRatio: 25200,
    range: [0, 0],
    descriptions: [
      "\uB0A8\uC740 \uBAA8\uB4E0 \uC5F0\uC131\uC5D0\uC11C <{2}> \uD6A8\uACFC\uC758 \uB300\uC131\uACF5 \uD655\uB960\uC744 <15>% \uC62C\uB824\uC8FC\uC9C0.",
      "\uB0A8\uC740 \uBAA8\uB4E0 \uC5F0\uC131\uC5D0\uC11C <{2}> \uD6A8\uACFC\uC758 \uB300\uC131\uACF5 \uD655\uB960\uC744 <15>% \uC62C\uB9AC\uACA0\uB124.",
      "\uB0A8\uC740 \uBAA8\uB4E0 \uC5F0\uC131\uC5D0\uC11C <{2}> \uD6A8\uACFC\uC758 \uB300\uC131\uACF5 \uD655\uB960\uC744 <15>% \uC62C\uB824\uB4DC\uB9AC\uC8E0."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "mutateLuckyRatio",
        targetType: "proposed",
        targetCondition: 3,
        targetCount: 1,
        ratio: 0,
        value: [1500, 0],
        remainTurn: 99
      }
    ]
  },
  {
    id: "aGCYXU7Q",
    pickRatio: 25200,
    range: [0, 0],
    descriptions: [
      "\uB0A8\uC740 \uBAA8\uB4E0 \uC5F0\uC131\uC5D0\uC11C <{3}> \uD6A8\uACFC\uC758 \uB300\uC131\uACF5 \uD655\uB960\uC744 <15>% \uC62C\uB824\uC8FC\uC9C0.",
      "\uB0A8\uC740 \uBAA8\uB4E0 \uC5F0\uC131\uC5D0\uC11C <{3}> \uD6A8\uACFC\uC758 \uB300\uC131\uACF5 \uD655\uB960\uC744 <15>% \uC62C\uB9AC\uACA0\uB124.",
      "\uB0A8\uC740 \uBAA8\uB4E0 \uC5F0\uC131\uC5D0\uC11C <{3}> \uD6A8\uACFC\uC758 \uB300\uC131\uACF5 \uD655\uB960\uC744 <15>% \uC62C\uB824\uB4DC\uB9AC\uC8E0."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "mutateLuckyRatio",
        targetType: "proposed",
        targetCondition: 4,
        targetCount: 1,
        ratio: 0,
        value: [1500, 0],
        remainTurn: 99
      }
    ]
  },
  {
    id: "x9KzuUpf",
    pickRatio: 25200,
    range: [0, 0],
    descriptions: [
      "\uB0A8\uC740 \uBAA8\uB4E0 \uC5F0\uC131\uC5D0\uC11C <{4}> \uD6A8\uACFC\uC758 \uB300\uC131\uACF5 \uD655\uB960\uC744 <15>% \uC62C\uB824\uC8FC\uC9C0.",
      "\uB0A8\uC740 \uBAA8\uB4E0 \uC5F0\uC131\uC5D0\uC11C <{4}> \uD6A8\uACFC\uC758 \uB300\uC131\uACF5 \uD655\uB960\uC744 <15>% \uC62C\uB9AC\uACA0\uB124.",
      "\uB0A8\uC740 \uBAA8\uB4E0 \uC5F0\uC131\uC5D0\uC11C <{4}> \uD6A8\uACFC\uC758 \uB300\uC131\uACF5 \uD655\uB960\uC744 <15>% \uC62C\uB824\uB4DC\uB9AC\uC8E0."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "mutateLuckyRatio",
        targetType: "proposed",
        targetCondition: 5,
        targetCount: 1,
        ratio: 0,
        value: [1500, 0],
        remainTurn: 99
      }
    ]
  },
  {
    id: "PkuGa1XV",
    pickRatio: 14e3,
    range: [0, 0],
    descriptions: [
      "\uB0A8\uC740 \uBAA8\uB4E0 \uC5F0\uC131\uC5D0\uC11C <\uB124\uAC00 \uACE0\uB974\uB294> \uD6A8\uACFC\uC758 \uB300\uC131\uACF5 \uD655\uB960\uC744 <15>% \uC62C\uB824\uC8FC\uC9C0.",
      "\uB0A8\uC740 \uBAA8\uB4E0 \uC5F0\uC131\uC5D0\uC11C <\uC790\uB124\uAC00 \uC120\uD0DD\uD55C> \uD6A8\uACFC\uC758 \uB300\uC131\uACF5 \uD655\uB960\uC744 <15>% \uC62C\uB9AC\uACA0\uB124.",
      "\uB0A8\uC740 \uBAA8\uB4E0 \uC5F0\uC131\uC5D0\uC11C <\uB2F9\uC2E0\uC774 \uD0DD\uD55C> \uD6A8\uACFC\uC758 \uB300\uC131\uACF5 \uD655\uB960\uC744 <15>% \uC62C\uB824\uB4DC\uB9AC\uC8E0."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "mutateLuckyRatio",
        targetType: "userSelect",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [1500, 0],
        remainTurn: 99
      }
    ]
  },
  {
    id: "TAVpe+mD",
    pickRatio: 14e4,
    range: [0, 0],
    descriptions: [
      "\uC774\uBC88 \uC5F0\uC131\uC5D0\uC11C <\uBAA8\uB4E0> \uD6A8\uACFC\uC758 \uB300\uC131\uACF5 \uD655\uB960\uC744 <30>% \uC62C\uB824\uC8FC\uC9C0.",
      "\uC774\uBC88 \uC5F0\uC131\uC5D0\uC11C <\uBAA8\uB4E0> \uD6A8\uACFC\uC758 \uB300\uC131\uACF5 \uD655\uB960\uC744 <30>% \uC62C\uB9AC\uACA0\uB124.",
      "\uC774\uBC88 \uC5F0\uC131\uC5D0\uC11C <\uBAA8\uB4E0> \uD6A8\uACFC\uC758 \uB300\uC131\uACF5 \uD655\uB960\uC744 <30>% \uC62C\uB824\uB4DC\uB9AC\uC8E0."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "mutateLuckyRatio",
        targetType: "random",
        targetCondition: 0,
        targetCount: 5,
        ratio: 0,
        value: [3e3, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "NTMBgMo+",
    pickRatio: 35e3,
    range: [0, 0],
    descriptions: [
      "\uC774\uBC88 \uC5F0\uC131\uC5D0\uC11C <\uBAA8\uB4E0> \uD6A8\uACFC\uC758 \uB300\uC131\uACF5 \uD655\uB960\uC744 <60>% \uC62C\uB824\uC8FC\uC9C0.",
      "\uC774\uBC88 \uC5F0\uC131\uC5D0\uC11C <\uBAA8\uB4E0> \uD6A8\uACFC\uC758 \uB300\uC131\uACF5 \uD655\uB960\uC744 <60>% \uC62C\uB9AC\uACA0\uB124.",
      "\uC774\uBC88 \uC5F0\uC131\uC5D0\uC11C <\uBAA8\uB4E0> \uD6A8\uACFC\uC758 \uB300\uC131\uACF5 \uD655\uB960\uC744 <60>% \uC62C\uB824\uB4DC\uB9AC\uC8E0."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "mutateLuckyRatio",
        targetType: "random",
        targetCondition: 0,
        targetCount: 5,
        ratio: 0,
        value: [6e3, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "SYHl4YT5",
    pickRatio: 14e4,
    range: [0, 0],
    descriptions: [
      "\uB0A8\uC740 \uBAA8\uB4E0 \uC5F0\uC131\uC5D0\uC11C <\uBAA8\uB4E0> \uD6A8\uACFC\uC758 \uB300\uC131\uACF5 \uD655\uB960\uC744 <5>% \uC62C\uB824\uC8FC\uC9C0.",
      "\uB0A8\uC740 \uBAA8\uB4E0 \uC5F0\uC131\uC5D0\uC11C <\uBAA8\uB4E0> \uD6A8\uACFC\uC758 \uB300\uC131\uACF5 \uD655\uB960\uC744 <5>% \uC62C\uB9AC\uACA0\uB124.",
      "\uB0A8\uC740 \uBAA8\uB4E0 \uC5F0\uC131\uC5D0\uC11C <\uBAA8\uB4E0> \uD6A8\uACFC\uC758 \uB300\uC131\uACF5 \uD655\uB960\uC744 <5>% \uC62C\uB824\uB4DC\uB9AC\uC8E0."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "mutateLuckyRatio",
        targetType: "random",
        targetCondition: 0,
        targetCount: 5,
        ratio: 0,
        value: [500, 0],
        remainTurn: 99
      }
    ]
  },
  {
    id: "aX3p4cvY",
    pickRatio: 35e3,
    range: [0, 0],
    descriptions: [
      "\uB0A8\uC740 \uBAA8\uB4E0 \uC5F0\uC131\uC5D0\uC11C <\uBAA8\uB4E0> \uD6A8\uACFC\uC758 \uB300\uC131\uACF5 \uD655\uB960\uC744 <10>% \uC62C\uB824\uC8FC\uC9C0.",
      "\uB0A8\uC740 \uBAA8\uB4E0 \uC5F0\uC131\uC5D0\uC11C <\uBAA8\uB4E0> \uD6A8\uACFC\uC758 \uB300\uC131\uACF5 \uD655\uB960\uC744 <10>% \uC62C\uB9AC\uACA0\uB124.",
      "\uB0A8\uC740 \uBAA8\uB4E0 \uC5F0\uC131\uC5D0\uC11C <\uBAA8\uB4E0> \uD6A8\uACFC\uC758 \uB300\uC131\uACF5 \uD655\uB960\uC744 <10>% \uC62C\uB824\uB4DC\uB9AC\uC8E0."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "mutateLuckyRatio",
        targetType: "random",
        targetCondition: 0,
        targetCount: 5,
        ratio: 0,
        value: [1e3, 0],
        remainTurn: 99
      }
    ]
  },
  {
    id: "i77mOeM9",
    pickRatio: 25200,
    range: [0, 0],
    descriptions: [
      "<{0}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C [<-1>~<+2>]\uB9CC\uD07C \uC62C\uB824\uC8FC\uC9C0.",
      "<{0}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C [<-1>~<+2>] \uC911 \uD558\uB098\uB9CC\uD07C \uC62C\uB9AC\uACA0\uB124.",
      "<{0}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C [<-1>~<+2>]\uB9CC\uD07C \uC62C\uB824\uB4DC\uB9AC\uC8E0."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetRanged",
        targetType: "proposed",
        targetCondition: 1,
        targetCount: 1,
        ratio: 0,
        value: [-1, 2],
        remainTurn: 1
      }
    ]
  },
  {
    id: "/DTt9Jyz",
    pickRatio: 25200,
    range: [0, 0],
    descriptions: [
      "<{1}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C [<-1>~<+2>]\uB9CC\uD07C \uC62C\uB824\uC8FC\uC9C0.",
      "<{1}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C [<-1>~<+2>] \uC911 \uD558\uB098\uB9CC\uD07C \uC62C\uB9AC\uACA0\uB124.",
      "<{1}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C [<-1>~<+2>]\uB9CC\uD07C \uC62C\uB824\uB4DC\uB9AC\uC8E0."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetRanged",
        targetType: "proposed",
        targetCondition: 2,
        targetCount: 1,
        ratio: 0,
        value: [-1, 2],
        remainTurn: 1
      }
    ]
  },
  {
    id: "jIyKQ1yu",
    pickRatio: 25200,
    range: [0, 0],
    descriptions: [
      "<{2}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C [<-1>~<+2>]\uB9CC\uD07C \uC62C\uB824\uC8FC\uC9C0.",
      "<{2}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C [<-1>~<+2>] \uC911 \uD558\uB098\uB9CC\uD07C \uC62C\uB9AC\uACA0\uB124.",
      "<{2}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C [<-1>~<+2>]\uB9CC\uD07C \uC62C\uB824\uB4DC\uB9AC\uC8E0."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetRanged",
        targetType: "proposed",
        targetCondition: 3,
        targetCount: 1,
        ratio: 0,
        value: [-1, 2],
        remainTurn: 1
      }
    ]
  },
  {
    id: "thfMDeCV",
    pickRatio: 25200,
    range: [0, 0],
    descriptions: [
      "<{3}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C [<-1>~<+2>]\uB9CC\uD07C \uC62C\uB824\uC8FC\uC9C0.",
      "<{3}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C [<-1>~<+2>] \uC911 \uD558\uB098\uB9CC\uD07C \uC62C\uB9AC\uACA0\uB124.",
      "<{3}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C [<-1>~<+2>]\uB9CC\uD07C \uC62C\uB824\uB4DC\uB9AC\uC8E0."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetRanged",
        targetType: "proposed",
        targetCondition: 4,
        targetCount: 1,
        ratio: 0,
        value: [-1, 2],
        remainTurn: 1
      }
    ]
  },
  {
    id: "b+n5sZX3",
    pickRatio: 25200,
    range: [0, 0],
    descriptions: [
      "<{4}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C [<-1>~<+2>]\uB9CC\uD07C \uC62C\uB824\uC8FC\uC9C0.",
      "<{4}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C [<-1>~<+2>] \uC911 \uD558\uB098\uB9CC\uD07C \uC62C\uB9AC\uACA0\uB124.",
      "<{4}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C [<-1>~<+2>]\uB9CC\uD07C \uC62C\uB824\uB4DC\uB9AC\uC8E0."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetRanged",
        targetType: "proposed",
        targetCondition: 5,
        targetCount: 1,
        ratio: 0,
        value: [-1, 2],
        remainTurn: 1
      }
    ]
  },
  {
    id: "8Syfgx/g",
    pickRatio: 14e3,
    range: [0, 0],
    descriptions: [
      "<\uB124\uAC00 \uACE0\uB974\uB294> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C [<-1>~<+2>]\uB9CC\uD07C \uC62C\uB824\uC8FC\uC9C0.",
      "<\uC790\uB124\uAC00 \uC120\uD0DD\uD55C> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C [<-1>~<+2>] \uC911 \uD558\uB098\uB9CC\uD07C \uC62C\uB9AC\uACA0\uB124.",
      "<\uB2F9\uC2E0\uC774 \uD0DD\uD55C> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C [<-1>~<+2>]\uB9CC\uD07C \uC62C\uB824\uB4DC\uB9AC\uC8E0."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetRanged",
        targetType: "userSelect",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [-1, 2],
        remainTurn: 1
      }
    ]
  },
  {
    id: "7Q1vxaVt",
    pickRatio: 100800,
    range: [0, 0],
    descriptions: [
      "<{0}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C [<-2>~<+2>]\uB9CC\uD07C \uC62C\uB824\uC8FC\uC9C0.",
      "<{0}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C [<-2>~<+2>] \uC911 \uD558\uB098\uB9CC\uD07C \uC62C\uB9AC\uACA0\uB124.",
      "<{0}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C [<-2>~<+2>]\uB9CC\uD07C \uC62C\uB824\uB4DC\uB9AC\uC8E0."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetRanged",
        targetType: "proposed",
        targetCondition: 1,
        targetCount: 1,
        ratio: 0,
        value: [-2, 2],
        remainTurn: 1
      }
    ]
  },
  {
    id: "1rkJc2I8",
    pickRatio: 100800,
    range: [0, 0],
    descriptions: [
      "<{1}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C [<-2>~<+2>]\uB9CC\uD07C \uC62C\uB824\uC8FC\uC9C0.",
      "<{1}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C [<-2>~<+2>] \uC911 \uD558\uB098\uB9CC\uD07C \uC62C\uB9AC\uACA0\uB124.",
      "<{1}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C [<-2>~<+2>]\uB9CC\uD07C \uC62C\uB824\uB4DC\uB9AC\uC8E0."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetRanged",
        targetType: "proposed",
        targetCondition: 2,
        targetCount: 1,
        ratio: 0,
        value: [-2, 2],
        remainTurn: 1
      }
    ]
  },
  {
    id: "hQ55Zl2K",
    pickRatio: 100800,
    range: [0, 0],
    descriptions: [
      "<{2}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C [<-2>~<+2>]\uB9CC\uD07C \uC62C\uB824\uC8FC\uC9C0.",
      "<{2}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C [<-2>~<+2>] \uC911 \uD558\uB098\uB9CC\uD07C \uC62C\uB9AC\uACA0\uB124.",
      "<{2}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C [<-2>~<+2>]\uB9CC\uD07C \uC62C\uB824\uB4DC\uB9AC\uC8E0."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetRanged",
        targetType: "proposed",
        targetCondition: 3,
        targetCount: 1,
        ratio: 0,
        value: [-2, 2],
        remainTurn: 1
      }
    ]
  },
  {
    id: "Z7YnoWEJ",
    pickRatio: 100800,
    range: [0, 0],
    descriptions: [
      "<{3}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C [<-2>~<+2>]\uB9CC\uD07C \uC62C\uB824\uC8FC\uC9C0.",
      "<{3}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C [<-2>~<+2>] \uC911 \uD558\uB098\uB9CC\uD07C \uC62C\uB9AC\uACA0\uB124.",
      "<{3}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C [<-2>~<+2>]\uB9CC\uD07C \uC62C\uB824\uB4DC\uB9AC\uC8E0."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetRanged",
        targetType: "proposed",
        targetCondition: 4,
        targetCount: 1,
        ratio: 0,
        value: [-2, 2],
        remainTurn: 1
      }
    ]
  },
  {
    id: "Xan/BMLi",
    pickRatio: 100800,
    range: [0, 0],
    descriptions: [
      "<{4}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C [<-2>~<+2>]\uB9CC\uD07C \uC62C\uB824\uC8FC\uC9C0.",
      "<{4}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C [<-2>~<+2>] \uC911 \uD558\uB098\uB9CC\uD07C \uC62C\uB9AC\uACA0\uB124.",
      "<{4}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C [<-2>~<+2>]\uB9CC\uD07C \uC62C\uB824\uB4DC\uB9AC\uC8E0."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetRanged",
        targetType: "proposed",
        targetCondition: 5,
        targetCount: 1,
        ratio: 0,
        value: [-2, 2],
        remainTurn: 1
      }
    ]
  },
  {
    id: "79o+kxjm",
    pickRatio: 56e3,
    range: [0, 0],
    descriptions: [
      "<\uB124\uAC00 \uACE0\uB974\uB294> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C [<-2>~<+2>]\uB9CC\uD07C \uC62C\uB824\uC8FC\uC9C0.",
      "<\uC790\uB124\uAC00 \uC120\uD0DD\uD55C> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C [<-2>~<+2>] \uC911 \uD558\uB098\uB9CC\uD07C \uC62C\uB9AC\uACA0\uB124.",
      "<\uB2F9\uC2E0\uC774 \uD0DD\uD55C> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C [<-2>~<+2>]\uB9CC\uD07C \uC62C\uB824\uB4DC\uB9AC\uC8E0."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetRanged",
        targetType: "userSelect",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [-2, 2],
        remainTurn: 1
      }
    ]
  },
  {
    id: "JGBDGHjm",
    pickRatio: 134640,
    range: [0, 0],
    descriptions: [
      "<{0}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB824\uBCF4\uACA0\uC5B4. <25>% \uD655\uB960\uB85C \uC131\uACF5\uD558\uACA0\uAD70.",
      "<{0}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB824\uBCF4\uACA0\uB124. \uC131\uACF5\uB960\uC740 <25>%\uC77C\uC138.",
      "<{0}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB824\uBCF4\uC8E0. \uC131\uACF5 \uD655\uB960\uC740 <25>%\uC5D0\uC694."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 1,
        targetCount: 1,
        ratio: 2500,
        value: [1, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "5wrsX6h6",
    pickRatio: 134640,
    range: [0, 0],
    descriptions: [
      "<{1}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB824\uBCF4\uACA0\uC5B4. <25>% \uD655\uB960\uB85C \uC131\uACF5\uD558\uACA0\uAD70.",
      "<{1}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB824\uBCF4\uACA0\uB124. \uC131\uACF5\uB960\uC740 <25>%\uC77C\uC138.",
      "<{1}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB824\uBCF4\uC8E0. \uC131\uACF5 \uD655\uB960\uC740 <25>%\uC5D0\uC694."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 2,
        targetCount: 1,
        ratio: 2500,
        value: [1, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "5byV02q9",
    pickRatio: 134640,
    range: [0, 0],
    descriptions: [
      "<{2}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB824\uBCF4\uACA0\uC5B4. <25>% \uD655\uB960\uB85C \uC131\uACF5\uD558\uACA0\uAD70.",
      "<{2}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB824\uBCF4\uACA0\uB124. \uC131\uACF5\uB960\uC740 <25>%\uC77C\uC138.",
      "<{2}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB824\uBCF4\uC8E0. \uC131\uACF5 \uD655\uB960\uC740 <25>%\uC5D0\uC694."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 3,
        targetCount: 1,
        ratio: 2500,
        value: [1, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "a1icfFTU",
    pickRatio: 134640,
    range: [0, 0],
    descriptions: [
      "<{3}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB824\uBCF4\uACA0\uC5B4. <25>% \uD655\uB960\uB85C \uC131\uACF5\uD558\uACA0\uAD70.",
      "<{3}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB824\uBCF4\uACA0\uB124. \uC131\uACF5\uB960\uC740 <25>%\uC77C\uC138.",
      "<{3}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB824\uBCF4\uC8E0. \uC131\uACF5 \uD655\uB960\uC740 <25>%\uC5D0\uC694."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 4,
        targetCount: 1,
        ratio: 2500,
        value: [1, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "71gjGPn/",
    pickRatio: 134640,
    range: [0, 0],
    descriptions: [
      "<{4}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB824\uBCF4\uACA0\uC5B4. <25>% \uD655\uB960\uB85C \uC131\uACF5\uD558\uACA0\uAD70.",
      "<{4}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB824\uBCF4\uACA0\uB124. \uC131\uACF5\uB960\uC740 <25>%\uC77C\uC138.",
      "<{4}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB824\uBCF4\uC8E0. \uC131\uACF5 \uD655\uB960\uC740 <25>%\uC5D0\uC694."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 5,
        targetCount: 1,
        ratio: 2500,
        value: [1, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "X0RAe7B2",
    pickRatio: 74800,
    range: [0, 0],
    descriptions: [
      "<\uB124\uAC00 \uACE0\uB974\uB294> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB824\uBCF4\uACA0\uC5B4. <25>% \uD655\uB960\uB85C \uC131\uACF5\uD558\uACA0\uAD70.",
      "<\uC790\uB124\uAC00 \uC120\uD0DD\uD55C> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB824\uBCF4\uACA0\uB124. \uC131\uACF5\uB960\uC740 <25>%\uC77C\uC138.",
      "<\uB2F9\uC2E0\uC774 \uD0DD\uD55C> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB824\uBCF4\uC8E0. \uC131\uACF5 \uD655\uB960\uC740 <25>%\uC5D0\uC694."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetWithRatio",
        targetType: "userSelect",
        targetCondition: 0,
        targetCount: 1,
        ratio: 2500,
        value: [1, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "y4Malxk+",
    pickRatio: 33660,
    range: [0, 0],
    descriptions: [
      "<{0}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB824\uBCF4\uACA0\uC5B4. <50>% \uD655\uB960\uB85C \uC131\uACF5\uD558\uACA0\uAD70.",
      "<{0}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB824\uBCF4\uACA0\uB124. \uC131\uACF5\uB960\uC740 <50>%\uC77C\uC138.",
      "<{0}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB824\uBCF4\uC8E0. \uC131\uACF5 \uD655\uB960\uC740 <50>%\uC5D0\uC694."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 1,
        targetCount: 1,
        ratio: 5e3,
        value: [1, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "BkPQwoCV",
    pickRatio: 33660,
    range: [0, 0],
    descriptions: [
      "<{1}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB824\uBCF4\uACA0\uC5B4. <50>% \uD655\uB960\uB85C \uC131\uACF5\uD558\uACA0\uAD70.",
      "<{1}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB824\uBCF4\uACA0\uB124. \uC131\uACF5\uB960\uC740 <50>%\uC77C\uC138.",
      "<{1}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB824\uBCF4\uC8E0. \uC131\uACF5 \uD655\uB960\uC740 <50>%\uC5D0\uC694."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 2,
        targetCount: 1,
        ratio: 5e3,
        value: [1, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "/SexNoGC",
    pickRatio: 33660,
    range: [0, 0],
    descriptions: [
      "<{2}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB824\uBCF4\uACA0\uC5B4. <50>% \uD655\uB960\uB85C \uC131\uACF5\uD558\uACA0\uAD70.",
      "<{2}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB824\uBCF4\uACA0\uB124. \uC131\uACF5\uB960\uC740 <50>%\uC77C\uC138.",
      "<{2}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB824\uBCF4\uC8E0. \uC131\uACF5 \uD655\uB960\uC740 <50>%\uC5D0\uC694."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 3,
        targetCount: 1,
        ratio: 5e3,
        value: [1, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "Ls8paxJO",
    pickRatio: 33660,
    range: [0, 0],
    descriptions: [
      "<{3}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB824\uBCF4\uACA0\uC5B4. <50>% \uD655\uB960\uB85C \uC131\uACF5\uD558\uACA0\uAD70.",
      "<{3}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB824\uBCF4\uACA0\uB124. \uC131\uACF5\uB960\uC740 <50>%\uC77C\uC138.",
      "<{3}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB824\uBCF4\uC8E0. \uC131\uACF5 \uD655\uB960\uC740 <50>%\uC5D0\uC694."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 4,
        targetCount: 1,
        ratio: 5e3,
        value: [1, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "6ccueETl",
    pickRatio: 33660,
    range: [0, 0],
    descriptions: [
      "<{4}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB824\uBCF4\uACA0\uC5B4. <50>% \uD655\uB960\uB85C \uC131\uACF5\uD558\uACA0\uAD70.",
      "<{4}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB824\uBCF4\uACA0\uB124. \uC131\uACF5\uB960\uC740 <50>%\uC77C\uC138.",
      "<{4}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB824\uBCF4\uC8E0. \uC131\uACF5 \uD655\uB960\uC740 <50>%\uC5D0\uC694."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 5,
        targetCount: 1,
        ratio: 5e3,
        value: [1, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "KEO802/y",
    pickRatio: 18700,
    range: [0, 0],
    descriptions: [
      "<\uB124\uAC00 \uACE0\uB974\uB294> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB824\uBCF4\uACA0\uC5B4. <50>% \uD655\uB960\uB85C \uC131\uACF5\uD558\uACA0\uAD70.",
      "<\uC790\uB124\uAC00 \uC120\uD0DD\uD55C> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB824\uBCF4\uACA0\uB124. \uC131\uACF5\uB960\uC740 <50>%\uC77C\uC138.",
      "<\uB2F9\uC2E0\uC774 \uD0DD\uD55C> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB824\uBCF4\uC8E0. \uC131\uACF5 \uD655\uB960\uC740 <50>%\uC5D0\uC694."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetWithRatio",
        targetType: "userSelect",
        targetCondition: 0,
        targetCount: 1,
        ratio: 5e3,
        value: [1, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "bg2DjkX7",
    pickRatio: 165e3,
    range: [0, 0],
    descriptions: [
      "<\uC784\uC758\uC758 \uD6A8\uACFC> \uD558\uB098\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB824\uC8FC\uC9C0. \uC5B4\uB5A4 \uD6A8\uACFC\uC77C \uC9C0 \uBCF4\uC790\uACE0.",
      "<\uC784\uC758\uC758 \uD6A8\uACFC> <1>\uAC1C\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB9AC\uACA0\uB124.",
      "<\uC784\uC758\uC758 \uD6A8\uACFC> <1>\uAC1C\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB824\uB4DC\uB9AC\uC8E0."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetWithRatio",
        targetType: "random",
        targetCondition: 0,
        targetCount: 1,
        ratio: 1e4,
        value: [1, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "vobAMurl",
    pickRatio: 3e4,
    range: [1, 5],
    descriptions: [
      "<{0}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C [<1>~<2>] \uC911 \uD558\uB098\uB85C \uBC14\uAFD4\uC8FC\uC9C0.",
      "<{0}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C [<1>~<2>] \uC911 \uD558\uB098\uB85C \uBCC0\uACBD\uD558\uACA0\uB124.",
      "<{0}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C [<1>~<2>] \uC911 \uD558\uB098\uB85C \uBC14\uAFD4\uB4DC\uB9AC\uC8E0."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "setValueRanged",
        targetType: "proposed",
        targetCondition: 1,
        targetCount: 1,
        ratio: 0,
        value: [1, 2],
        remainTurn: 1
      }
    ]
  },
  {
    id: "we9uip6Z",
    pickRatio: 3e4,
    range: [1, 5],
    descriptions: [
      "<{1}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C [<1>~<2>] \uC911 \uD558\uB098\uB85C \uBC14\uAFD4\uC8FC\uC9C0.",
      "<{1}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C [<1>~<2>] \uC911 \uD558\uB098\uB85C \uBCC0\uACBD\uD558\uACA0\uB124.",
      "<{1}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C [<1>~<2>] \uC911 \uD558\uB098\uB85C \uBC14\uAFD4\uB4DC\uB9AC\uC8E0."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "setValueRanged",
        targetType: "proposed",
        targetCondition: 2,
        targetCount: 1,
        ratio: 0,
        value: [1, 2],
        remainTurn: 1
      }
    ]
  },
  {
    id: "QhCcZr3A",
    pickRatio: 3e4,
    range: [1, 5],
    descriptions: [
      "<{2}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C [<1>~<2>] \uC911 \uD558\uB098\uB85C \uBC14\uAFD4\uC8FC\uC9C0.",
      "<{2}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C [<1>~<2>] \uC911 \uD558\uB098\uB85C \uBCC0\uACBD\uD558\uACA0\uB124.",
      "<{2}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C [<1>~<2>] \uC911 \uD558\uB098\uB85C \uBC14\uAFD4\uB4DC\uB9AC\uC8E0."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "setValueRanged",
        targetType: "proposed",
        targetCondition: 3,
        targetCount: 1,
        ratio: 0,
        value: [1, 2],
        remainTurn: 1
      }
    ]
  },
  {
    id: "oGqnMU5h",
    pickRatio: 3e4,
    range: [1, 5],
    descriptions: [
      "<{3}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C [<1>~<2>] \uC911 \uD558\uB098\uB85C \uBC14\uAFD4\uC8FC\uC9C0.",
      "<{3}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C [<1>~<2>] \uC911 \uD558\uB098\uB85C \uBCC0\uACBD\uD558\uACA0\uB124.",
      "<{3}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C [<1>~<2>] \uC911 \uD558\uB098\uB85C \uBC14\uAFD4\uB4DC\uB9AC\uC8E0."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "setValueRanged",
        targetType: "proposed",
        targetCondition: 4,
        targetCount: 1,
        ratio: 0,
        value: [1, 2],
        remainTurn: 1
      }
    ]
  },
  {
    id: "Vh5lCVWD",
    pickRatio: 3e4,
    range: [1, 5],
    descriptions: [
      "<{4}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C [<1>~<2>] \uC911 \uD558\uB098\uB85C \uBC14\uAFD4\uC8FC\uC9C0.",
      "<{4}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C [<1>~<2>] \uC911 \uD558\uB098\uB85C \uBCC0\uACBD\uD558\uACA0\uB124.",
      "<{4}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C [<1>~<2>] \uC911 \uD558\uB098\uB85C \uBC14\uAFD4\uB4DC\uB9AC\uC8E0."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "setValueRanged",
        targetType: "proposed",
        targetCondition: 5,
        targetCount: 1,
        ratio: 0,
        value: [1, 2],
        remainTurn: 1
      }
    ]
  },
  {
    id: "byT3AP1L",
    pickRatio: 3e4,
    range: [5, 9],
    descriptions: [
      "<{0}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C [<2>~<3>] \uC911 \uD558\uB098\uB85C \uBC14\uAFD4\uC8FC\uC9C0.",
      "<{0}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C [<2>~<3>] \uC911 \uD558\uB098\uB85C \uBCC0\uACBD\uD558\uACA0\uB124.",
      "<{0}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C [<2>~<3>] \uC911 \uD558\uB098\uB85C \uBC14\uAFD4\uB4DC\uB9AC\uC8E0."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "setValueRanged",
        targetType: "proposed",
        targetCondition: 1,
        targetCount: 1,
        ratio: 0,
        value: [2, 3],
        remainTurn: 1
      }
    ]
  },
  {
    id: "J8w8OZSR",
    pickRatio: 3e4,
    range: [5, 9],
    descriptions: [
      "<{1}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C [<2>~<3>] \uC911 \uD558\uB098\uB85C \uBC14\uAFD4\uC8FC\uC9C0.",
      "<{1}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C [<2>~<3>] \uC911 \uD558\uB098\uB85C \uBCC0\uACBD\uD558\uACA0\uB124.",
      "<{1}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C [<2>~<3>] \uC911 \uD558\uB098\uB85C \uBC14\uAFD4\uB4DC\uB9AC\uC8E0."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "setValueRanged",
        targetType: "proposed",
        targetCondition: 2,
        targetCount: 1,
        ratio: 0,
        value: [2, 3],
        remainTurn: 1
      }
    ]
  },
  {
    id: "A8NeKsMb",
    pickRatio: 3e4,
    range: [5, 9],
    descriptions: [
      "<{2}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C [<2>~<3>] \uC911 \uD558\uB098\uB85C \uBC14\uAFD4\uC8FC\uC9C0.",
      "<{2}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C [<2>~<3>] \uC911 \uD558\uB098\uB85C \uBCC0\uACBD\uD558\uACA0\uB124.",
      "<{2}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C [<2>~<3>] \uC911 \uD558\uB098\uB85C \uBC14\uAFD4\uB4DC\uB9AC\uC8E0."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "setValueRanged",
        targetType: "proposed",
        targetCondition: 3,
        targetCount: 1,
        ratio: 0,
        value: [2, 3],
        remainTurn: 1
      }
    ]
  },
  {
    id: "9suFjJG6",
    pickRatio: 3e4,
    range: [5, 9],
    descriptions: [
      "<{3}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C [<2>~<3>] \uC911 \uD558\uB098\uB85C \uBC14\uAFD4\uC8FC\uC9C0.",
      "<{3}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C [<2>~<3>] \uC911 \uD558\uB098\uB85C \uBCC0\uACBD\uD558\uACA0\uB124.",
      "<{3}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C [<2>~<3>] \uC911 \uD558\uB098\uB85C \uBC14\uAFD4\uB4DC\uB9AC\uC8E0."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "setValueRanged",
        targetType: "proposed",
        targetCondition: 4,
        targetCount: 1,
        ratio: 0,
        value: [2, 3],
        remainTurn: 1
      }
    ]
  },
  {
    id: "50L3W9SX",
    pickRatio: 3e4,
    range: [5, 9],
    descriptions: [
      "<{4}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C [<2>~<3>] \uC911 \uD558\uB098\uB85C \uBC14\uAFD4\uC8FC\uC9C0.",
      "<{4}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C [<2>~<3>] \uC911 \uD558\uB098\uB85C \uBCC0\uACBD\uD558\uACA0\uB124.",
      "<{4}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C [<2>~<3>] \uC911 \uD558\uB098\uB85C \uBC14\uAFD4\uB4DC\uB9AC\uC8E0."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "setValueRanged",
        targetType: "proposed",
        targetCondition: 5,
        targetCount: 1,
        ratio: 0,
        value: [2, 3],
        remainTurn: 1
      }
    ]
  },
  {
    id: "047momkZ",
    pickRatio: 3e4,
    range: [9, 13],
    descriptions: [
      "<{0}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C [<3>~<4>] \uC911 \uD558\uB098\uB85C \uBC14\uAFD4\uC8FC\uC9C0.",
      "<{0}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C [<3>~<4>] \uC911 \uD558\uB098\uB85C \uBCC0\uACBD\uD558\uACA0\uB124.",
      "<{0}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C [<3>~<4>] \uC911 \uD558\uB098\uB85C \uBC14\uAFD4\uB4DC\uB9AC\uC8E0."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "setValueRanged",
        targetType: "proposed",
        targetCondition: 1,
        targetCount: 1,
        ratio: 0,
        value: [3, 4],
        remainTurn: 1
      }
    ]
  },
  {
    id: "KZoUmp2O",
    pickRatio: 3e4,
    range: [9, 13],
    descriptions: [
      "<{1}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C [<3>~<4>] \uC911 \uD558\uB098\uB85C \uBC14\uAFD4\uC8FC\uC9C0.",
      "<{1}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C [<3>~<4>] \uC911 \uD558\uB098\uB85C \uBCC0\uACBD\uD558\uACA0\uB124.",
      "<{1}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C [<3>~<4>] \uC911 \uD558\uB098\uB85C \uBC14\uAFD4\uB4DC\uB9AC\uC8E0."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "setValueRanged",
        targetType: "proposed",
        targetCondition: 2,
        targetCount: 1,
        ratio: 0,
        value: [3, 4],
        remainTurn: 1
      }
    ]
  },
  {
    id: "mLkomdnr",
    pickRatio: 3e4,
    range: [9, 13],
    descriptions: [
      "<{2}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C [<3>~<4>] \uC911 \uD558\uB098\uB85C \uBC14\uAFD4\uC8FC\uC9C0.",
      "<{2}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C [<3>~<4>] \uC911 \uD558\uB098\uB85C \uBCC0\uACBD\uD558\uACA0\uB124.",
      "<{2}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C [<3>~<4>] \uC911 \uD558\uB098\uB85C \uBC14\uAFD4\uB4DC\uB9AC\uC8E0."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "setValueRanged",
        targetType: "proposed",
        targetCondition: 3,
        targetCount: 1,
        ratio: 0,
        value: [3, 4],
        remainTurn: 1
      }
    ]
  },
  {
    id: "i194sjct",
    pickRatio: 3e4,
    range: [9, 13],
    descriptions: [
      "<{3}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C [<3>~<4>] \uC911 \uD558\uB098\uB85C \uBC14\uAFD4\uC8FC\uC9C0.",
      "<{3}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C [<3>~<4>] \uC911 \uD558\uB098\uB85C \uBCC0\uACBD\uD558\uACA0\uB124.",
      "<{3}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C [<3>~<4>] \uC911 \uD558\uB098\uB85C \uBC14\uAFD4\uB4DC\uB9AC\uC8E0."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "setValueRanged",
        targetType: "proposed",
        targetCondition: 4,
        targetCount: 1,
        ratio: 0,
        value: [3, 4],
        remainTurn: 1
      }
    ]
  },
  {
    id: "2A+gt/cN",
    pickRatio: 3e4,
    range: [9, 13],
    descriptions: [
      "<{4}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C [<3>~<4>] \uC911 \uD558\uB098\uB85C \uBC14\uAFD4\uC8FC\uC9C0.",
      "<{4}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C [<3>~<4>] \uC911 \uD558\uB098\uB85C \uBCC0\uACBD\uD558\uACA0\uB124.",
      "<{4}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C [<3>~<4>] \uC911 \uD558\uB098\uB85C \uBC14\uAFD4\uB4DC\uB9AC\uC8E0."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "setValueRanged",
        targetType: "proposed",
        targetCondition: 5,
        targetCount: 1,
        ratio: 0,
        value: [3, 4],
        remainTurn: 1
      }
    ]
  },
  {
    id: "JYral2nj",
    pickRatio: 3e4,
    range: [13, 99],
    descriptions: [
      "<{0}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C [<5>~<6>] \uC911 \uD558\uB098\uB85C \uBC14\uAFD4\uC8FC\uC9C0.",
      "<{0}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C [<5>~<6>] \uC911 \uD558\uB098\uB85C \uBCC0\uACBD\uD558\uACA0\uB124.",
      "<{0}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C [<5>~<6>] \uC911 \uD558\uB098\uB85C \uBC14\uAFD4\uB4DC\uB9AC\uC8E0."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "setValueRanged",
        targetType: "proposed",
        targetCondition: 1,
        targetCount: 1,
        ratio: 0,
        value: [5, 6],
        remainTurn: 1
      }
    ]
  },
  {
    id: "kN9lY3qv",
    pickRatio: 3e4,
    range: [13, 99],
    descriptions: [
      "<{1}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C [<5>~<6>] \uC911 \uD558\uB098\uB85C \uBC14\uAFD4\uC8FC\uC9C0.",
      "<{1}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C [<5>~<6>] \uC911 \uD558\uB098\uB85C \uBCC0\uACBD\uD558\uACA0\uB124.",
      "<{1}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C [<5>~<6>] \uC911 \uD558\uB098\uB85C \uBC14\uAFD4\uB4DC\uB9AC\uC8E0."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "setValueRanged",
        targetType: "proposed",
        targetCondition: 2,
        targetCount: 1,
        ratio: 0,
        value: [5, 6],
        remainTurn: 1
      }
    ]
  },
  {
    id: "JFixwpK0",
    pickRatio: 3e4,
    range: [13, 99],
    descriptions: [
      "<{2}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C [<5>~<6>] \uC911 \uD558\uB098\uB85C \uBC14\uAFD4\uC8FC\uC9C0.",
      "<{2}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C [<5>~<6>] \uC911 \uD558\uB098\uB85C \uBCC0\uACBD\uD558\uACA0\uB124.",
      "<{2}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C [<5>~<6>] \uC911 \uD558\uB098\uB85C \uBC14\uAFD4\uB4DC\uB9AC\uC8E0."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "setValueRanged",
        targetType: "proposed",
        targetCondition: 3,
        targetCount: 1,
        ratio: 0,
        value: [5, 6],
        remainTurn: 1
      }
    ]
  },
  {
    id: "TmqN4vVw",
    pickRatio: 3e4,
    range: [13, 99],
    descriptions: [
      "<{3}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C [<5>~<6>] \uC911 \uD558\uB098\uB85C \uBC14\uAFD4\uC8FC\uC9C0.",
      "<{3}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C [<5>~<6>] \uC911 \uD558\uB098\uB85C \uBCC0\uACBD\uD558\uACA0\uB124.",
      "<{3}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C [<5>~<6>] \uC911 \uD558\uB098\uB85C \uBC14\uAFD4\uB4DC\uB9AC\uC8E0."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "setValueRanged",
        targetType: "proposed",
        targetCondition: 4,
        targetCount: 1,
        ratio: 0,
        value: [5, 6],
        remainTurn: 1
      }
    ]
  },
  {
    id: "oTBcM6oi",
    pickRatio: 3e4,
    range: [13, 99],
    descriptions: [
      "<{4}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C [<5>~<6>] \uC911 \uD558\uB098\uB85C \uBC14\uAFD4\uC8FC\uC9C0.",
      "<{4}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C [<5>~<6>] \uC911 \uD558\uB098\uB85C \uBCC0\uACBD\uD558\uACA0\uB124.",
      "<{4}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C [<5>~<6>] \uC911 \uD558\uB098\uB85C \uBC14\uAFD4\uB4DC\uB9AC\uC8E0."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "setValueRanged",
        targetType: "proposed",
        targetCondition: 5,
        targetCount: 1,
        ratio: 0,
        value: [5, 6],
        remainTurn: 1
      }
    ]
  },
  {
    id: "SWqTv7r4",
    pickRatio: 6e3,
    range: [5, 99],
    descriptions: [
      "<{0}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uB354 \uC62C\uB824\uC8FC\uC9C0. \uD558\uC9C0\uB9CC <{1}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uAC00 <1> \uB0B4\uB824\uAC08 \uAC70\uC57C.",
      "<{0}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB9AC\uACA0\uB124. \uB2E4\uB9CC <{1}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB294 <1> \uC904\uC5B4\uB4E4 \uAC78\uC138.",
      "<{0}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB824\uB4DC\uB9B4\uAC8C\uC694. <{1}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB294 <1> \uC904\uC5B4\uB4E4\uACA0\uC9C0\uB9CC\uC694."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 1,
        targetCount: 1,
        ratio: 1e4,
        value: [1, 0],
        remainTurn: 1
      },
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 2,
        targetCount: 1,
        ratio: 1e4,
        value: [-1, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "EjhjzT/R",
    pickRatio: 6e3,
    range: [5, 99],
    descriptions: [
      "<{0}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uB354 \uC62C\uB824\uC8FC\uC9C0. \uD558\uC9C0\uB9CC <{2}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uAC00 <1> \uB0B4\uB824\uAC08 \uAC70\uC57C.",
      "<{0}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB9AC\uACA0\uB124. \uB2E4\uB9CC <{2}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB294 <1> \uC904\uC5B4\uB4E4 \uAC78\uC138.",
      "<{0}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB824\uB4DC\uB9B4\uAC8C\uC694. <{2}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB294 <1> \uC904\uC5B4\uB4E4\uACA0\uC9C0\uB9CC\uC694."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 1,
        targetCount: 1,
        ratio: 1e4,
        value: [1, 0],
        remainTurn: 1
      },
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 3,
        targetCount: 1,
        ratio: 1e4,
        value: [-1, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "+iVcsDZw",
    pickRatio: 6e3,
    range: [5, 99],
    descriptions: [
      "<{0}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uB354 \uC62C\uB824\uC8FC\uC9C0. \uD558\uC9C0\uB9CC <{3}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uAC00 <1> \uB0B4\uB824\uAC08 \uAC70\uC57C.",
      "<{0}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB9AC\uACA0\uB124. \uB2E4\uB9CC <{3}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB294 <1> \uC904\uC5B4\uB4E4 \uAC78\uC138.",
      "<{0}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB824\uB4DC\uB9B4\uAC8C\uC694. <{3}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB294 <1> \uC904\uC5B4\uB4E4\uACA0\uC9C0\uB9CC\uC694."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 1,
        targetCount: 1,
        ratio: 1e4,
        value: [1, 0],
        remainTurn: 1
      },
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 4,
        targetCount: 1,
        ratio: 1e4,
        value: [-1, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "AdyeXApQ",
    pickRatio: 6e3,
    range: [5, 99],
    descriptions: [
      "<{0}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uB354 \uC62C\uB824\uC8FC\uC9C0. \uD558\uC9C0\uB9CC <{4}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uAC00 <1> \uB0B4\uB824\uAC08 \uAC70\uC57C.",
      "<{0}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB9AC\uACA0\uB124. \uB2E4\uB9CC <{4}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB294 <1> \uC904\uC5B4\uB4E4 \uAC78\uC138.",
      "<{0}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB824\uB4DC\uB9B4\uAC8C\uC694. <{4}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB294 <1> \uC904\uC5B4\uB4E4\uACA0\uC9C0\uB9CC\uC694."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 1,
        targetCount: 1,
        ratio: 1e4,
        value: [1, 0],
        remainTurn: 1
      },
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 5,
        targetCount: 1,
        ratio: 1e4,
        value: [-1, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "B3RZYuEw",
    pickRatio: 6e3,
    range: [5, 99],
    descriptions: [
      "<{1}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uB354 \uC62C\uB824\uC8FC\uC9C0. \uD558\uC9C0\uB9CC <{0}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uAC00 <1> \uB0B4\uB824\uAC08 \uAC70\uC57C.",
      "<{1}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB9AC\uACA0\uB124. \uB2E4\uB9CC <{0}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB294 <1> \uC904\uC5B4\uB4E4 \uAC78\uC138.",
      "<{1}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB824\uB4DC\uB9B4\uAC8C\uC694. <{0}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB294 <1> \uC904\uC5B4\uB4E4\uACA0\uC9C0\uB9CC\uC694."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 2,
        targetCount: 1,
        ratio: 1e4,
        value: [1, 0],
        remainTurn: 1
      },
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 1,
        targetCount: 1,
        ratio: 1e4,
        value: [-1, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "K/tErtHA",
    pickRatio: 6e3,
    range: [5, 99],
    descriptions: [
      "<{1}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uB354 \uC62C\uB824\uC8FC\uC9C0. \uD558\uC9C0\uB9CC <{2}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uAC00 <1> \uB0B4\uB824\uAC08 \uAC70\uC57C.",
      "<{1}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB9AC\uACA0\uB124. \uB2E4\uB9CC <{2}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB294 <1> \uC904\uC5B4\uB4E4 \uAC78\uC138.",
      "<{1}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB824\uB4DC\uB9B4\uAC8C\uC694. <{2}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB294 <1> \uC904\uC5B4\uB4E4\uACA0\uC9C0\uB9CC\uC694."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 2,
        targetCount: 1,
        ratio: 1e4,
        value: [1, 0],
        remainTurn: 1
      },
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 3,
        targetCount: 1,
        ratio: 1e4,
        value: [-1, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "vWruBgyn",
    pickRatio: 6e3,
    range: [5, 99],
    descriptions: [
      "<{1}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uB354 \uC62C\uB824\uC8FC\uC9C0. \uD558\uC9C0\uB9CC <{3}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uAC00 <1> \uB0B4\uB824\uAC08 \uAC70\uC57C.",
      "<{1}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB9AC\uACA0\uB124. \uB2E4\uB9CC <{3}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB294 <1> \uC904\uC5B4\uB4E4 \uAC78\uC138.",
      "<{1}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB824\uB4DC\uB9B4\uAC8C\uC694. <{3}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB294 <1> \uC904\uC5B4\uB4E4\uACA0\uC9C0\uB9CC\uC694."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 2,
        targetCount: 1,
        ratio: 1e4,
        value: [1, 0],
        remainTurn: 1
      },
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 4,
        targetCount: 1,
        ratio: 1e4,
        value: [-1, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "gUpUns5p",
    pickRatio: 6e3,
    range: [5, 99],
    descriptions: [
      "<{1}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uB354 \uC62C\uB824\uC8FC\uC9C0. \uD558\uC9C0\uB9CC <{4}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uAC00 <1> \uB0B4\uB824\uAC08 \uAC70\uC57C.",
      "<{1}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB9AC\uACA0\uB124. \uB2E4\uB9CC <{4}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB294 <1> \uC904\uC5B4\uB4E4 \uAC78\uC138.",
      "<{1}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB824\uB4DC\uB9B4\uAC8C\uC694. <{4}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB294 <1> \uC904\uC5B4\uB4E4\uACA0\uC9C0\uB9CC\uC694."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 2,
        targetCount: 1,
        ratio: 1e4,
        value: [1, 0],
        remainTurn: 1
      },
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 5,
        targetCount: 1,
        ratio: 1e4,
        value: [-1, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "rSbiyCFy",
    pickRatio: 6e3,
    range: [5, 99],
    descriptions: [
      "<{2}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uB354 \uC62C\uB824\uC8FC\uC9C0. \uD558\uC9C0\uB9CC <{0}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uAC00 <1> \uB0B4\uB824\uAC08 \uAC70\uC57C.",
      "<{2}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB9AC\uACA0\uB124. \uB2E4\uB9CC <{0}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB294 <1> \uC904\uC5B4\uB4E4 \uAC78\uC138.",
      "<{2}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB824\uB4DC\uB9B4\uAC8C\uC694. <{0}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB294 <1> \uC904\uC5B4\uB4E4\uACA0\uC9C0\uB9CC\uC694."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 3,
        targetCount: 1,
        ratio: 1e4,
        value: [1, 0],
        remainTurn: 1
      },
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 1,
        targetCount: 1,
        ratio: 1e4,
        value: [-1, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "FCQnXKMQ",
    pickRatio: 6e3,
    range: [5, 99],
    descriptions: [
      "<{2}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uB354 \uC62C\uB824\uC8FC\uC9C0. \uD558\uC9C0\uB9CC <{1}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uAC00 <1> \uB0B4\uB824\uAC08 \uAC70\uC57C.",
      "<{2}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB9AC\uACA0\uB124. \uB2E4\uB9CC <{1}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB294 <1> \uC904\uC5B4\uB4E4 \uAC78\uC138.",
      "<{2}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB824\uB4DC\uB9B4\uAC8C\uC694. <{1}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB294 <1> \uC904\uC5B4\uB4E4\uACA0\uC9C0\uB9CC\uC694."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 3,
        targetCount: 1,
        ratio: 1e4,
        value: [1, 0],
        remainTurn: 1
      },
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 2,
        targetCount: 1,
        ratio: 1e4,
        value: [-1, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "/uXHQ7CZ",
    pickRatio: 6e3,
    range: [5, 99],
    descriptions: [
      "<{2}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uB354 \uC62C\uB824\uC8FC\uC9C0. \uD558\uC9C0\uB9CC <{3}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uAC00 <1> \uB0B4\uB824\uAC08 \uAC70\uC57C.",
      "<{2}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB9AC\uACA0\uB124. \uB2E4\uB9CC <{3}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB294 <1> \uC904\uC5B4\uB4E4 \uAC78\uC138.",
      "<{2}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB824\uB4DC\uB9B4\uAC8C\uC694. <{3}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB294 <1> \uC904\uC5B4\uB4E4\uACA0\uC9C0\uB9CC\uC694."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 3,
        targetCount: 1,
        ratio: 1e4,
        value: [1, 0],
        remainTurn: 1
      },
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 4,
        targetCount: 1,
        ratio: 1e4,
        value: [-1, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "zUk2JDxz",
    pickRatio: 6e3,
    range: [5, 99],
    descriptions: [
      "<{2}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uB354 \uC62C\uB824\uC8FC\uC9C0. \uD558\uC9C0\uB9CC <{4}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uAC00 <1> \uB0B4\uB824\uAC08 \uAC70\uC57C.",
      "<{2}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB9AC\uACA0\uB124. \uB2E4\uB9CC <{4}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB294 <1> \uC904\uC5B4\uB4E4 \uAC78\uC138.",
      "<{2}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB824\uB4DC\uB9B4\uAC8C\uC694. <{4}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB294 <1> \uC904\uC5B4\uB4E4\uACA0\uC9C0\uB9CC\uC694."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 3,
        targetCount: 1,
        ratio: 1e4,
        value: [1, 0],
        remainTurn: 1
      },
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 5,
        targetCount: 1,
        ratio: 1e4,
        value: [-1, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "ghQ9VjHG",
    pickRatio: 6e3,
    range: [5, 99],
    descriptions: [
      "<{3}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uB354 \uC62C\uB824\uC8FC\uC9C0. \uD558\uC9C0\uB9CC <{0}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uAC00 <1> \uB0B4\uB824\uAC08 \uAC70\uC57C.",
      "<{3}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB9AC\uACA0\uB124. \uB2E4\uB9CC <{0}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB294 <1> \uC904\uC5B4\uB4E4 \uAC78\uC138.",
      "<{3}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB824\uB4DC\uB9B4\uAC8C\uC694. <{0}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB294 <1> \uC904\uC5B4\uB4E4\uACA0\uC9C0\uB9CC\uC694."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 4,
        targetCount: 1,
        ratio: 1e4,
        value: [1, 0],
        remainTurn: 1
      },
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 1,
        targetCount: 1,
        ratio: 1e4,
        value: [-1, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "JvY8DuIr",
    pickRatio: 6e3,
    range: [5, 99],
    descriptions: [
      "<{3}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uB354 \uC62C\uB824\uC8FC\uC9C0. \uD558\uC9C0\uB9CC <{1}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uAC00 <1> \uB0B4\uB824\uAC08 \uAC70\uC57C.",
      "<{3}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB9AC\uACA0\uB124. \uB2E4\uB9CC <{1}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB294 <1> \uC904\uC5B4\uB4E4 \uAC78\uC138.",
      "<{3}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB824\uB4DC\uB9B4\uAC8C\uC694. <{1}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB294 <1> \uC904\uC5B4\uB4E4\uACA0\uC9C0\uB9CC\uC694."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 4,
        targetCount: 1,
        ratio: 1e4,
        value: [1, 0],
        remainTurn: 1
      },
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 2,
        targetCount: 1,
        ratio: 1e4,
        value: [-1, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "gWeuX02U",
    pickRatio: 6e3,
    range: [5, 99],
    descriptions: [
      "<{3}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uB354 \uC62C\uB824\uC8FC\uC9C0. \uD558\uC9C0\uB9CC <{2}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uAC00 <1> \uB0B4\uB824\uAC08 \uAC70\uC57C.",
      "<{3}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB9AC\uACA0\uB124. \uB2E4\uB9CC <{2}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB294 <1> \uC904\uC5B4\uB4E4 \uAC78\uC138.",
      "<{3}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB824\uB4DC\uB9B4\uAC8C\uC694. <{2}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB294 <1> \uC904\uC5B4\uB4E4\uACA0\uC9C0\uB9CC\uC694."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 4,
        targetCount: 1,
        ratio: 1e4,
        value: [1, 0],
        remainTurn: 1
      },
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 3,
        targetCount: 1,
        ratio: 1e4,
        value: [-1, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "VK+hUWmP",
    pickRatio: 6e3,
    range: [5, 99],
    descriptions: [
      "<{3}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uB354 \uC62C\uB824\uC8FC\uC9C0. \uD558\uC9C0\uB9CC <{4}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uAC00 <1> \uB0B4\uB824\uAC08 \uAC70\uC57C.",
      "<{3}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB9AC\uACA0\uB124. \uB2E4\uB9CC <{4}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB294 <1> \uC904\uC5B4\uB4E4 \uAC78\uC138.",
      "<{3}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB824\uB4DC\uB9B4\uAC8C\uC694. <{4}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB294 <1> \uC904\uC5B4\uB4E4\uACA0\uC9C0\uB9CC\uC694."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 4,
        targetCount: 1,
        ratio: 1e4,
        value: [1, 0],
        remainTurn: 1
      },
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 5,
        targetCount: 1,
        ratio: 1e4,
        value: [-1, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "2/6UeeTT",
    pickRatio: 6e3,
    range: [5, 99],
    descriptions: [
      "<{4}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uB354 \uC62C\uB824\uC8FC\uC9C0. \uD558\uC9C0\uB9CC <{0}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uAC00 <1> \uB0B4\uB824\uAC08 \uAC70\uC57C.",
      "<{4}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB9AC\uACA0\uB124. \uB2E4\uB9CC <{0}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB294 <1> \uC904\uC5B4\uB4E4 \uAC78\uC138.",
      "<{4}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB824\uB4DC\uB9B4\uAC8C\uC694. <{0}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB294 <1> \uC904\uC5B4\uB4E4\uACA0\uC9C0\uB9CC\uC694."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 5,
        targetCount: 1,
        ratio: 1e4,
        value: [1, 0],
        remainTurn: 1
      },
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 1,
        targetCount: 1,
        ratio: 1e4,
        value: [-1, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "qPVfMKLF",
    pickRatio: 6e3,
    range: [5, 99],
    descriptions: [
      "<{4}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uB354 \uC62C\uB824\uC8FC\uC9C0. \uD558\uC9C0\uB9CC <{1}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uAC00 <1> \uB0B4\uB824\uAC08 \uAC70\uC57C.",
      "<{4}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB9AC\uACA0\uB124. \uB2E4\uB9CC <{1}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB294 <1> \uC904\uC5B4\uB4E4 \uAC78\uC138.",
      "<{4}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB824\uB4DC\uB9B4\uAC8C\uC694. <{1}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB294 <1> \uC904\uC5B4\uB4E4\uACA0\uC9C0\uB9CC\uC694."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 5,
        targetCount: 1,
        ratio: 1e4,
        value: [1, 0],
        remainTurn: 1
      },
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 2,
        targetCount: 1,
        ratio: 1e4,
        value: [-1, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "ajWpy2vD",
    pickRatio: 6e3,
    range: [5, 99],
    descriptions: [
      "<{4}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uB354 \uC62C\uB824\uC8FC\uC9C0. \uD558\uC9C0\uB9CC <{2}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uAC00 <1> \uB0B4\uB824\uAC08 \uAC70\uC57C.",
      "<{4}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB9AC\uACA0\uB124. \uB2E4\uB9CC <{2}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB294 <1> \uC904\uC5B4\uB4E4 \uAC78\uC138.",
      "<{4}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB824\uB4DC\uB9B4\uAC8C\uC694. <{2}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB294 <1> \uC904\uC5B4\uB4E4\uACA0\uC9C0\uB9CC\uC694."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 5,
        targetCount: 1,
        ratio: 1e4,
        value: [1, 0],
        remainTurn: 1
      },
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 3,
        targetCount: 1,
        ratio: 1e4,
        value: [-1, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "2/hpD+Ht",
    pickRatio: 6e3,
    range: [5, 99],
    descriptions: [
      "<{4}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uB354 \uC62C\uB824\uC8FC\uC9C0. \uD558\uC9C0\uB9CC <{3}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uAC00 <1> \uB0B4\uB824\uAC08 \uAC70\uC57C.",
      "<{4}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB9AC\uACA0\uB124. \uB2E4\uB9CC <{3}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB294 <1> \uC904\uC5B4\uB4E4 \uAC78\uC138.",
      "<{4}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB824\uB4DC\uB9B4\uAC8C\uC694. <{3}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB294 <1> \uC904\uC5B4\uB4E4\uACA0\uC9C0\uB9CC\uC694."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 5,
        targetCount: 1,
        ratio: 1e4,
        value: [1, 0],
        remainTurn: 1
      },
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 4,
        targetCount: 1,
        ratio: 1e4,
        value: [-1, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "a+2FNqIn",
    pickRatio: 24e3,
    range: [5, 99],
    descriptions: [
      "<{0}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uB354 \uC62C\uB824\uC8FC\uC9C0. \uD558\uC9C0\uB9CC <{1}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uAC00 <2> \uB0B4\uB824\uAC08 \uAC70\uC57C.",
      "<{0}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB9AC\uACA0\uB124. \uB2E4\uB9CC <{1}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB294 <2> \uC904\uC5B4\uB4E4 \uAC78\uC138.",
      "<{0}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB824\uB4DC\uB9B4\uAC8C\uC694. <{1}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB294 <2> \uC904\uC5B4\uB4E4\uACA0\uC9C0\uB9CC\uC694."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 1,
        targetCount: 1,
        ratio: 1e4,
        value: [1, 0],
        remainTurn: 1
      },
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 2,
        targetCount: 1,
        ratio: 1e4,
        value: [-2, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "SF3Qb/e0",
    pickRatio: 24e3,
    range: [5, 99],
    descriptions: [
      "<{0}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uB354 \uC62C\uB824\uC8FC\uC9C0. \uD558\uC9C0\uB9CC <{2}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uAC00 <2> \uB0B4\uB824\uAC08 \uAC70\uC57C.",
      "<{0}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB9AC\uACA0\uB124. \uB2E4\uB9CC <{2}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB294 <2> \uC904\uC5B4\uB4E4 \uAC78\uC138.",
      "<{0}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB824\uB4DC\uB9B4\uAC8C\uC694. <{2}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB294 <2> \uC904\uC5B4\uB4E4\uACA0\uC9C0\uB9CC\uC694."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 1,
        targetCount: 1,
        ratio: 1e4,
        value: [1, 0],
        remainTurn: 1
      },
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 3,
        targetCount: 1,
        ratio: 1e4,
        value: [-2, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "DXW+hvxI",
    pickRatio: 24e3,
    range: [5, 99],
    descriptions: [
      "<{0}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uB354 \uC62C\uB824\uC8FC\uC9C0. \uD558\uC9C0\uB9CC <{3}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uAC00 <2> \uB0B4\uB824\uAC08 \uAC70\uC57C.",
      "<{0}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB9AC\uACA0\uB124. \uB2E4\uB9CC <{3}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB294 <2> \uC904\uC5B4\uB4E4 \uAC78\uC138.",
      "<{0}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB824\uB4DC\uB9B4\uAC8C\uC694. <{3}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB294 <2> \uC904\uC5B4\uB4E4\uACA0\uC9C0\uB9CC\uC694."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 1,
        targetCount: 1,
        ratio: 1e4,
        value: [1, 0],
        remainTurn: 1
      },
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 4,
        targetCount: 1,
        ratio: 1e4,
        value: [-2, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "ISgAfJ/U",
    pickRatio: 24e3,
    range: [5, 99],
    descriptions: [
      "<{0}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uB354 \uC62C\uB824\uC8FC\uC9C0. \uD558\uC9C0\uB9CC <{4}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uAC00 <2> \uB0B4\uB824\uAC08 \uAC70\uC57C.",
      "<{0}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB9AC\uACA0\uB124. \uB2E4\uB9CC <{4}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB294 <2> \uC904\uC5B4\uB4E4 \uAC78\uC138.",
      "<{0}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB824\uB4DC\uB9B4\uAC8C\uC694. <{4}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB294 <2> \uC904\uC5B4\uB4E4\uACA0\uC9C0\uB9CC\uC694."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 1,
        targetCount: 1,
        ratio: 1e4,
        value: [1, 0],
        remainTurn: 1
      },
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 5,
        targetCount: 1,
        ratio: 1e4,
        value: [-2, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "jwKH/tJQ",
    pickRatio: 24e3,
    range: [5, 99],
    descriptions: [
      "<{1}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uB354 \uC62C\uB824\uC8FC\uC9C0. \uD558\uC9C0\uB9CC <{0}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uAC00 <2> \uB0B4\uB824\uAC08 \uAC70\uC57C.",
      "<{1}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB9AC\uACA0\uB124. \uB2E4\uB9CC <{0}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB294 <2> \uC904\uC5B4\uB4E4 \uAC78\uC138.",
      "<{1}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB824\uB4DC\uB9B4\uAC8C\uC694. <{0}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB294 <2> \uC904\uC5B4\uB4E4\uACA0\uC9C0\uB9CC\uC694."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 2,
        targetCount: 1,
        ratio: 1e4,
        value: [1, 0],
        remainTurn: 1
      },
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 1,
        targetCount: 1,
        ratio: 1e4,
        value: [-2, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "ha0RNM2S",
    pickRatio: 24e3,
    range: [5, 99],
    descriptions: [
      "<{1}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uB354 \uC62C\uB824\uC8FC\uC9C0. \uD558\uC9C0\uB9CC <{2}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uAC00 <2> \uB0B4\uB824\uAC08 \uAC70\uC57C.",
      "<{1}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB9AC\uACA0\uB124. \uB2E4\uB9CC <{2}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB294 <2> \uC904\uC5B4\uB4E4 \uAC78\uC138.",
      "<{1}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB824\uB4DC\uB9B4\uAC8C\uC694. <{2}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB294 <2> \uC904\uC5B4\uB4E4\uACA0\uC9C0\uB9CC\uC694."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 2,
        targetCount: 1,
        ratio: 1e4,
        value: [1, 0],
        remainTurn: 1
      },
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 3,
        targetCount: 1,
        ratio: 1e4,
        value: [-2, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "UBH1OOAB",
    pickRatio: 24e3,
    range: [5, 99],
    descriptions: [
      "<{1}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uB354 \uC62C\uB824\uC8FC\uC9C0. \uD558\uC9C0\uB9CC <{3}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uAC00 <2> \uB0B4\uB824\uAC08 \uAC70\uC57C.",
      "<{1}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB9AC\uACA0\uB124. \uB2E4\uB9CC <{3}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB294 <2> \uC904\uC5B4\uB4E4 \uAC78\uC138.",
      "<{1}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB824\uB4DC\uB9B4\uAC8C\uC694. <{3}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB294 <2> \uC904\uC5B4\uB4E4\uACA0\uC9C0\uB9CC\uC694."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 2,
        targetCount: 1,
        ratio: 1e4,
        value: [1, 0],
        remainTurn: 1
      },
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 4,
        targetCount: 1,
        ratio: 1e4,
        value: [-2, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "9lgXNOiC",
    pickRatio: 24e3,
    range: [5, 99],
    descriptions: [
      "<{1}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uB354 \uC62C\uB824\uC8FC\uC9C0. \uD558\uC9C0\uB9CC <{4}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uAC00 <2> \uB0B4\uB824\uAC08 \uAC70\uC57C.",
      "<{1}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB9AC\uACA0\uB124. \uB2E4\uB9CC <{4}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB294 <2> \uC904\uC5B4\uB4E4 \uAC78\uC138.",
      "<{1}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB824\uB4DC\uB9B4\uAC8C\uC694. <{4}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB294 <2> \uC904\uC5B4\uB4E4\uACA0\uC9C0\uB9CC\uC694."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 2,
        targetCount: 1,
        ratio: 1e4,
        value: [1, 0],
        remainTurn: 1
      },
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 5,
        targetCount: 1,
        ratio: 1e4,
        value: [-2, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "rdyz4dIp",
    pickRatio: 24e3,
    range: [5, 99],
    descriptions: [
      "<{2}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uB354 \uC62C\uB824\uC8FC\uC9C0. \uD558\uC9C0\uB9CC <{0}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uAC00 <2> \uB0B4\uB824\uAC08 \uAC70\uC57C.",
      "<{2}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB9AC\uACA0\uB124. \uB2E4\uB9CC <{0}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB294 <2> \uC904\uC5B4\uB4E4 \uAC78\uC138.",
      "<{2}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB824\uB4DC\uB9B4\uAC8C\uC694. <{0}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB294 <2> \uC904\uC5B4\uB4E4\uACA0\uC9C0\uB9CC\uC694."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 3,
        targetCount: 1,
        ratio: 1e4,
        value: [1, 0],
        remainTurn: 1
      },
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 1,
        targetCount: 1,
        ratio: 1e4,
        value: [-2, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "ort3ppx9",
    pickRatio: 24e3,
    range: [5, 99],
    descriptions: [
      "<{2}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uB354 \uC62C\uB824\uC8FC\uC9C0. \uD558\uC9C0\uB9CC <{1}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uAC00 <2> \uB0B4\uB824\uAC08 \uAC70\uC57C.",
      "<{2}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB9AC\uACA0\uB124. \uB2E4\uB9CC <{1}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB294 <2> \uC904\uC5B4\uB4E4 \uAC78\uC138.",
      "<{2}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB824\uB4DC\uB9B4\uAC8C\uC694. <{1}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB294 <2> \uC904\uC5B4\uB4E4\uACA0\uC9C0\uB9CC\uC694."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 3,
        targetCount: 1,
        ratio: 1e4,
        value: [1, 0],
        remainTurn: 1
      },
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 2,
        targetCount: 1,
        ratio: 1e4,
        value: [-2, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "8/+7Jihl",
    pickRatio: 24e3,
    range: [5, 99],
    descriptions: [
      "<{2}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uB354 \uC62C\uB824\uC8FC\uC9C0. \uD558\uC9C0\uB9CC <{3}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uAC00 <2> \uB0B4\uB824\uAC08 \uAC70\uC57C.",
      "<{2}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB9AC\uACA0\uB124. \uB2E4\uB9CC <{3}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB294 <2> \uC904\uC5B4\uB4E4 \uAC78\uC138.",
      "<{2}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB824\uB4DC\uB9B4\uAC8C\uC694. <{3}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB294 <2> \uC904\uC5B4\uB4E4\uACA0\uC9C0\uB9CC\uC694."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 3,
        targetCount: 1,
        ratio: 1e4,
        value: [1, 0],
        remainTurn: 1
      },
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 4,
        targetCount: 1,
        ratio: 1e4,
        value: [-2, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "grVgy2EL",
    pickRatio: 24e3,
    range: [5, 99],
    descriptions: [
      "<{2}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uB354 \uC62C\uB824\uC8FC\uC9C0. \uD558\uC9C0\uB9CC <{4}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uAC00 <2> \uB0B4\uB824\uAC08 \uAC70\uC57C.",
      "<{2}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB9AC\uACA0\uB124. \uB2E4\uB9CC <{4}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB294 <2> \uC904\uC5B4\uB4E4 \uAC78\uC138.",
      "<{2}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB824\uB4DC\uB9B4\uAC8C\uC694. <{4}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB294 <2> \uC904\uC5B4\uB4E4\uACA0\uC9C0\uB9CC\uC694."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 3,
        targetCount: 1,
        ratio: 1e4,
        value: [1, 0],
        remainTurn: 1
      },
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 5,
        targetCount: 1,
        ratio: 1e4,
        value: [-2, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "tCtjuNbF",
    pickRatio: 24e3,
    range: [5, 99],
    descriptions: [
      "<{3}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uB354 \uC62C\uB824\uC8FC\uC9C0. \uD558\uC9C0\uB9CC <{0}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uAC00 <2> \uB0B4\uB824\uAC08 \uAC70\uC57C.",
      "<{3}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB9AC\uACA0\uB124. \uB2E4\uB9CC <{0}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB294 <2> \uC904\uC5B4\uB4E4 \uAC78\uC138.",
      "<{3}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB824\uB4DC\uB9B4\uAC8C\uC694. <{0}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB294 <2> \uC904\uC5B4\uB4E4\uACA0\uC9C0\uB9CC\uC694."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 4,
        targetCount: 1,
        ratio: 1e4,
        value: [1, 0],
        remainTurn: 1
      },
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 1,
        targetCount: 1,
        ratio: 1e4,
        value: [-2, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "KvsOIpFI",
    pickRatio: 24e3,
    range: [5, 99],
    descriptions: [
      "<{3}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uB354 \uC62C\uB824\uC8FC\uC9C0. \uD558\uC9C0\uB9CC <{1}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uAC00 <2> \uB0B4\uB824\uAC08 \uAC70\uC57C.",
      "<{3}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB9AC\uACA0\uB124. \uB2E4\uB9CC <{1}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB294 <2> \uC904\uC5B4\uB4E4 \uAC78\uC138.",
      "<{3}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB824\uB4DC\uB9B4\uAC8C\uC694. <{1}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB294 <2> \uC904\uC5B4\uB4E4\uACA0\uC9C0\uB9CC\uC694."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 4,
        targetCount: 1,
        ratio: 1e4,
        value: [1, 0],
        remainTurn: 1
      },
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 2,
        targetCount: 1,
        ratio: 1e4,
        value: [-2, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "MbJQIQxy",
    pickRatio: 24e3,
    range: [5, 99],
    descriptions: [
      "<{3}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uB354 \uC62C\uB824\uC8FC\uC9C0. \uD558\uC9C0\uB9CC <{2}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uAC00 <2> \uB0B4\uB824\uAC08 \uAC70\uC57C.",
      "<{3}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB9AC\uACA0\uB124. \uB2E4\uB9CC <{2}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB294 <2> \uC904\uC5B4\uB4E4 \uAC78\uC138.",
      "<{3}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB824\uB4DC\uB9B4\uAC8C\uC694. <{2}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB294 <2> \uC904\uC5B4\uB4E4\uACA0\uC9C0\uB9CC\uC694."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 4,
        targetCount: 1,
        ratio: 1e4,
        value: [1, 0],
        remainTurn: 1
      },
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 3,
        targetCount: 1,
        ratio: 1e4,
        value: [-2, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "TF99NWdH",
    pickRatio: 24e3,
    range: [5, 99],
    descriptions: [
      "<{3}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uB354 \uC62C\uB824\uC8FC\uC9C0. \uD558\uC9C0\uB9CC <{4}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uAC00 <2> \uB0B4\uB824\uAC08 \uAC70\uC57C.",
      "<{3}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB9AC\uACA0\uB124. \uB2E4\uB9CC <{4}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB294 <2> \uC904\uC5B4\uB4E4 \uAC78\uC138.",
      "<{3}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB824\uB4DC\uB9B4\uAC8C\uC694. <{4}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB294 <2> \uC904\uC5B4\uB4E4\uACA0\uC9C0\uB9CC\uC694."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 4,
        targetCount: 1,
        ratio: 1e4,
        value: [1, 0],
        remainTurn: 1
      },
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 5,
        targetCount: 1,
        ratio: 1e4,
        value: [-2, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "sIomcuqP",
    pickRatio: 24e3,
    range: [5, 99],
    descriptions: [
      "<{4}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uB354 \uC62C\uB824\uC8FC\uC9C0. \uD558\uC9C0\uB9CC <{0}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uAC00 <2> \uB0B4\uB824\uAC08 \uAC70\uC57C.",
      "<{4}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB9AC\uACA0\uB124. \uB2E4\uB9CC <{0}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB294 <2> \uC904\uC5B4\uB4E4 \uAC78\uC138.",
      "<{4}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB824\uB4DC\uB9B4\uAC8C\uC694. <{0}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB294 <2> \uC904\uC5B4\uB4E4\uACA0\uC9C0\uB9CC\uC694."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 5,
        targetCount: 1,
        ratio: 1e4,
        value: [1, 0],
        remainTurn: 1
      },
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 1,
        targetCount: 1,
        ratio: 1e4,
        value: [-2, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "OPEOVax7",
    pickRatio: 24e3,
    range: [5, 99],
    descriptions: [
      "<{4}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uB354 \uC62C\uB824\uC8FC\uC9C0. \uD558\uC9C0\uB9CC <{1}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uAC00 <2> \uB0B4\uB824\uAC08 \uAC70\uC57C.",
      "<{4}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB9AC\uACA0\uB124. \uB2E4\uB9CC <{1}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB294 <2> \uC904\uC5B4\uB4E4 \uAC78\uC138.",
      "<{4}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB824\uB4DC\uB9B4\uAC8C\uC694. <{1}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB294 <2> \uC904\uC5B4\uB4E4\uACA0\uC9C0\uB9CC\uC694."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 5,
        targetCount: 1,
        ratio: 1e4,
        value: [1, 0],
        remainTurn: 1
      },
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 2,
        targetCount: 1,
        ratio: 1e4,
        value: [-2, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "cKNn2QqI",
    pickRatio: 24e3,
    range: [5, 99],
    descriptions: [
      "<{4}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uB354 \uC62C\uB824\uC8FC\uC9C0. \uD558\uC9C0\uB9CC <{2}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uAC00 <2> \uB0B4\uB824\uAC08 \uAC70\uC57C.",
      "<{4}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB9AC\uACA0\uB124. \uB2E4\uB9CC <{2}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB294 <2> \uC904\uC5B4\uB4E4 \uAC78\uC138.",
      "<{4}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB824\uB4DC\uB9B4\uAC8C\uC694. <{2}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB294 <2> \uC904\uC5B4\uB4E4\uACA0\uC9C0\uB9CC\uC694."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 5,
        targetCount: 1,
        ratio: 1e4,
        value: [1, 0],
        remainTurn: 1
      },
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 3,
        targetCount: 1,
        ratio: 1e4,
        value: [-2, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "G6VDDeZR",
    pickRatio: 24e3,
    range: [5, 99],
    descriptions: [
      "<{4}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uB354 \uC62C\uB824\uC8FC\uC9C0. \uD558\uC9C0\uB9CC <{3}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uAC00 <2> \uB0B4\uB824\uAC08 \uAC70\uC57C.",
      "<{4}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB9AC\uACA0\uB124. \uB2E4\uB9CC <{3}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB294 <2> \uC904\uC5B4\uB4E4 \uAC78\uC138.",
      "<{4}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB824\uB4DC\uB9B4\uAC8C\uC694. <{3}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB294 <2> \uC904\uC5B4\uB4E4\uACA0\uC9C0\uB9CC\uC694."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 5,
        targetCount: 1,
        ratio: 1e4,
        value: [1, 0],
        remainTurn: 1
      },
      {
        type: "increaseTargetWithRatio",
        targetType: "proposed",
        targetCondition: 4,
        targetCount: 1,
        ratio: 1e4,
        value: [-2, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "slVyBRf3",
    pickRatio: 18e3,
    range: [0, 0],
    descriptions: [
      "<\uCD5C\uACE0 \uB2E8\uACC4> \uD6A8\uACFC <1>\uAC1C\uC640  <\uCD5C\uD558 \uB2E8\uACC4> \uD6A8\uACFC <1>\uAC1C\uC758 \uB2E8\uACC4\uB97C \uB4A4\uBC14\uAFD4\uC8FC\uC9C0.",
      "<\uCD5C\uACE0 \uB2E8\uACC4> \uD6A8\uACFC <1>\uAC1C\uC640 <\uCD5C\uD558 \uB2E8\uACC4> \uD6A8\uACFC <1>\uAC1C\uC758 \uB2E8\uACC4\uB97C \uC11C\uB85C \uBC14\uAFD4\uC8FC\uACA0\uB124.",
      "<\uCD5C\uACE0 \uB2E8\uACC4> \uD6A8\uACFC <1>\uAC1C, <\uCD5C\uD558 \uB2E8\uACC4> \uD6A8\uACFC <1>\uAC1C\uC758 \uB2E8\uACC4\uB97C \uB4A4\uBC14\uAFB8\uACA0\uC5B4\uC694."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "swapMinMax",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [0, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "o2AEXCgS",
    pickRatio: 72e3,
    range: [0, 0],
    descriptions: [
      "<\uCD5C\uACE0 \uB2E8\uACC4> \uD6A8\uACFC <1>\uAC1C\uC758 \uB2E8\uACC4\uB97C <1> \uC18C\uBAA8\uD558\uACA0\uB2E4. \uB300\uC2E0 <\uCD5C\uACE0 \uB2E8\uACC4> \uD6A8\uACFC <1>\uAC1C\uC640 <\uCD5C\uD558 \uB2E8\uACC4> \uD6A8\uACFC <1>\uAC1C\uC758 \uB2E8\uACC4\uB97C \uB4A4\uBC14\uAFD4\uC8FC\uC9C0.",
      "<\uCD5C\uACE0 \uB2E8\uACC4> \uD6A8\uACFC <1>\uAC1C\uC758 \uB2E8\uACC4\uB97C <1> \uC18C\uBAA8\uD558\uACA0\uB124. \uB300\uC2E0 <\uCD5C\uACE0 \uB2E8\uACC4> \uD6A8\uACFC <1>\uAC1C\uC640 <\uCD5C\uD558 \uB2E8\uACC4> \uD6A8\uACFC <1>\uAC1C\uC758 \uB2E8\uACC4\uB97C \uC11C\uB85C \uBC14\uAFD4\uC8FC\uACA0\uB124.",
      "<\uCD5C\uACE0 \uB2E8\uACC4> \uD6A8\uACFC <1>\uAC1C\uC758 \uB2E8\uACC4\uB97C <1> \uC18C\uBAA8\uD558\uC8E0. \uB300\uC2E0 <\uCD5C\uACE0 \uB2E8\uACC4> \uD6A8\uACFC <1>\uAC1C\uC640 <\uCD5C\uD558 \uB2E8\uACC4> \uD6A8\uACFC <1>\uAC1C\uC758 \uB2E8\uACC4\uB97C \uB4A4\uBC14\uAFB8\uACA0\uC5B4\uC694."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "decreaseMaxAndSwapMinMax",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [0, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "kv1WbTjP",
    pickRatio: 18e3,
    range: [0, 0],
    descriptions: [
      "<{0}> \uD6A8\uACFC\uC640 <{1}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C \uB4A4\uBC14\uAFD4\uC904\uAC8C.",
      "<{0}> \uD6A8\uACFC\uC640 <{1}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C \uC11C\uB85C \uBC14\uAFD4\uC8FC\uACA0\uB124.",
      "<{0}> \uD6A8\uACFC\uC640 <{1}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C \uB4A4\uBC14\uAFB8\uACA0\uC5B4\uC694."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "swapValues",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [0, 1],
        remainTurn: 1
      }
    ]
  },
  {
    id: "+D1JKGnY",
    pickRatio: 18e3,
    range: [0, 0],
    descriptions: [
      "<{0}> \uD6A8\uACFC\uC640 <{2}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C \uB4A4\uBC14\uAFD4\uC904\uAC8C.",
      "<{0}> \uD6A8\uACFC\uC640 <{2}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C \uC11C\uB85C \uBC14\uAFD4\uC8FC\uACA0\uB124.",
      "<{0}> \uD6A8\uACFC\uC640 <{2}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C \uB4A4\uBC14\uAFB8\uACA0\uC5B4\uC694."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "swapValues",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [0, 2],
        remainTurn: 1
      }
    ]
  },
  {
    id: "vjqwUBQf",
    pickRatio: 18e3,
    range: [0, 0],
    descriptions: [
      "<{0}> \uD6A8\uACFC\uC640 <{3}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C \uB4A4\uBC14\uAFD4\uC904\uAC8C.",
      "<{0}> \uD6A8\uACFC\uC640 <{3}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C \uC11C\uB85C \uBC14\uAFD4\uC8FC\uACA0\uB124.",
      "<{0}> \uD6A8\uACFC\uC640 <{3}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C \uB4A4\uBC14\uAFB8\uACA0\uC5B4\uC694."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "swapValues",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [0, 3],
        remainTurn: 1
      }
    ]
  },
  {
    id: "UM8FdJ47",
    pickRatio: 18e3,
    range: [0, 0],
    descriptions: [
      "<{0}> \uD6A8\uACFC\uC640 <{4}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C \uB4A4\uBC14\uAFD4\uC904\uAC8C.",
      "<{0}> \uD6A8\uACFC\uC640 <{4}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C \uC11C\uB85C \uBC14\uAFD4\uC8FC\uACA0\uB124.",
      "<{0}> \uD6A8\uACFC\uC640 <{4}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C \uB4A4\uBC14\uAFB8\uACA0\uC5B4\uC694."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "swapValues",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [0, 4],
        remainTurn: 1
      }
    ]
  },
  {
    id: "Te+sg9qJ",
    pickRatio: 18e3,
    range: [0, 0],
    descriptions: [
      "<{1}> \uD6A8\uACFC\uC640 <{2}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C \uB4A4\uBC14\uAFD4\uC904\uAC8C.",
      "<{1}> \uD6A8\uACFC\uC640 <{2}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C \uC11C\uB85C \uBC14\uAFD4\uC8FC\uACA0\uB124.",
      "<{1}> \uD6A8\uACFC\uC640 <{2}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C \uB4A4\uBC14\uAFB8\uACA0\uC5B4\uC694."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "swapValues",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [1, 2],
        remainTurn: 1
      }
    ]
  },
  {
    id: "YuNKedL4",
    pickRatio: 18e3,
    range: [0, 0],
    descriptions: [
      "<{1}> \uD6A8\uACFC\uC640 <{3}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C \uB4A4\uBC14\uAFD4\uC904\uAC8C.",
      "<{1}> \uD6A8\uACFC\uC640 <{3}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C \uC11C\uB85C \uBC14\uAFD4\uC8FC\uACA0\uB124.",
      "<{1}> \uD6A8\uACFC\uC640 <{3}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C \uB4A4\uBC14\uAFB8\uACA0\uC5B4\uC694."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "swapValues",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [1, 3],
        remainTurn: 1
      }
    ]
  },
  {
    id: "Qe0MWSWN",
    pickRatio: 18e3,
    range: [0, 0],
    descriptions: [
      "<{1}> \uD6A8\uACFC\uC640 <{4}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C \uB4A4\uBC14\uAFD4\uC904\uAC8C.",
      "<{1}> \uD6A8\uACFC\uC640 <{4}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C \uC11C\uB85C \uBC14\uAFD4\uC8FC\uACA0\uB124.",
      "<{1}> \uD6A8\uACFC\uC640 <{4}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C \uB4A4\uBC14\uAFB8\uACA0\uC5B4\uC694."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "swapValues",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [1, 4],
        remainTurn: 1
      }
    ]
  },
  {
    id: "HhcvwkZK",
    pickRatio: 18e3,
    range: [0, 0],
    descriptions: [
      "<{2}> \uD6A8\uACFC\uC640 <{3}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C \uB4A4\uBC14\uAFD4\uC904\uAC8C.",
      "<{2}> \uD6A8\uACFC\uC640 <{3}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C \uC11C\uB85C \uBC14\uAFD4\uC8FC\uACA0\uB124.",
      "<{2}> \uD6A8\uACFC\uC640 <{3}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C \uB4A4\uBC14\uAFB8\uACA0\uC5B4\uC694."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "swapValues",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [2, 3],
        remainTurn: 1
      }
    ]
  },
  {
    id: "QmI5GlED",
    pickRatio: 18e3,
    range: [0, 0],
    descriptions: [
      "<{2}> \uD6A8\uACFC\uC640 <{4}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C \uB4A4\uBC14\uAFD4\uC904\uAC8C.",
      "<{2}> \uD6A8\uACFC\uC640 <{4}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C \uC11C\uB85C \uBC14\uAFD4\uC8FC\uACA0\uB124.",
      "<{2}> \uD6A8\uACFC\uC640 <{4}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C \uB4A4\uBC14\uAFB8\uACA0\uC5B4\uC694."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "swapValues",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [2, 4],
        remainTurn: 1
      }
    ]
  },
  {
    id: "2D4TdKj7",
    pickRatio: 18e3,
    range: [0, 0],
    descriptions: [
      "<{3}> \uD6A8\uACFC\uC640 <{4}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C \uB4A4\uBC14\uAFD4\uC904\uAC8C.",
      "<{3}> \uD6A8\uACFC\uC640 <{4}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C \uC11C\uB85C \uBC14\uAFD4\uC8FC\uACA0\uB124.",
      "<{3}> \uD6A8\uACFC\uC640 <{4}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C \uB4A4\uBC14\uAFB8\uACA0\uC5B4\uC694."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "swapValues",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [3, 4],
        remainTurn: 1
      }
    ]
  },
  {
    id: "BUyf16QW",
    pickRatio: 31500,
    range: [0, 0],
    descriptions: [
      "<{0}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC18C\uBAA8\uD558\uACA0\uB2E4. \uB300\uC2E0 <{0}> \uD6A8\uACFC\uC640 <{1}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C \uB4A4\uBC14\uAFD4\uC8FC\uC9C0.",
      "<{0}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC18C\uBAA8\uD558\uACA0\uB124. \uB300\uC2E0 <{0}> \uD6A8\uACFC\uC640 <{1}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C \uC11C\uB85C \uBC14\uAFD4\uC8FC\uACA0\uB124.",
      "<{0}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC18C\uBAA8\uD558\uC8E0. \uB300\uC2E0 <{0}> \uD6A8\uACFC\uC640 <{1}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C \uB4A4\uBC14\uAFB8\uACA0\uC5B4\uC694."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "decreaseFirstTargetAndSwap",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [0, 1],
        remainTurn: 1
      }
    ]
  },
  {
    id: "ZV3sa3WY",
    pickRatio: 31500,
    range: [0, 0],
    descriptions: [
      "<{0}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC18C\uBAA8\uD558\uACA0\uB2E4. \uB300\uC2E0 <{0}> \uD6A8\uACFC\uC640 <{2}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C \uB4A4\uBC14\uAFD4\uC8FC\uC9C0.",
      "<{0}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC18C\uBAA8\uD558\uACA0\uB124. \uB300\uC2E0 <{0}> \uD6A8\uACFC\uC640 <{2}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C \uC11C\uB85C \uBC14\uAFD4\uC8FC\uACA0\uB124.",
      "<{0}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC18C\uBAA8\uD558\uC8E0. \uB300\uC2E0 <{0}> \uD6A8\uACFC\uC640 <{2}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C \uB4A4\uBC14\uAFB8\uACA0\uC5B4\uC694."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "decreaseFirstTargetAndSwap",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [0, 2],
        remainTurn: 1
      }
    ]
  },
  {
    id: "xejEn+yQ",
    pickRatio: 31500,
    range: [0, 0],
    descriptions: [
      "<{0}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC18C\uBAA8\uD558\uACA0\uB2E4. \uB300\uC2E0 <{0}> \uD6A8\uACFC\uC640 <{3}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C \uB4A4\uBC14\uAFD4\uC8FC\uC9C0.",
      "<{0}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC18C\uBAA8\uD558\uACA0\uB124. \uB300\uC2E0 <{0}> \uD6A8\uACFC\uC640 <{3}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C \uC11C\uB85C \uBC14\uAFD4\uC8FC\uACA0\uB124.",
      "<{0}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC18C\uBAA8\uD558\uC8E0. \uB300\uC2E0 <{0}> \uD6A8\uACFC\uC640 <{3}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C \uB4A4\uBC14\uAFB8\uACA0\uC5B4\uC694."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "decreaseFirstTargetAndSwap",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [0, 3],
        remainTurn: 1
      }
    ]
  },
  {
    id: "FZWy8SWk",
    pickRatio: 31500,
    range: [0, 0],
    descriptions: [
      "<{0}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC18C\uBAA8\uD558\uACA0\uB2E4. \uB300\uC2E0 <{0}> \uD6A8\uACFC\uC640 <{4}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C \uB4A4\uBC14\uAFD4\uC8FC\uC9C0.",
      "<{0}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC18C\uBAA8\uD558\uACA0\uB124. \uB300\uC2E0 <{0}> \uD6A8\uACFC\uC640 <{4}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C \uC11C\uB85C \uBC14\uAFD4\uC8FC\uACA0\uB124.",
      "<{0}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC18C\uBAA8\uD558\uC8E0. \uB300\uC2E0 <{0}> \uD6A8\uACFC\uC640 <{4}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C \uB4A4\uBC14\uAFB8\uACA0\uC5B4\uC694."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "decreaseFirstTargetAndSwap",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [0, 4],
        remainTurn: 1
      }
    ]
  },
  {
    id: "w1wmShOG",
    pickRatio: 31500,
    range: [0, 0],
    descriptions: [
      "<{1}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC18C\uBAA8\uD558\uACA0\uB2E4. \uB300\uC2E0 <{1}> \uD6A8\uACFC\uC640 <{2}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C \uB4A4\uBC14\uAFD4\uC8FC\uC9C0.",
      "<{1}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC18C\uBAA8\uD558\uACA0\uB124. \uB300\uC2E0 <{1}> \uD6A8\uACFC\uC640 <{2}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C \uC11C\uB85C \uBC14\uAFD4\uC8FC\uACA0\uB124.",
      "<{1}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC18C\uBAA8\uD558\uC8E0. \uB300\uC2E0 <{1}> \uD6A8\uACFC\uC640 <{2}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C \uB4A4\uBC14\uAFB8\uACA0\uC5B4\uC694."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "decreaseFirstTargetAndSwap",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [1, 2],
        remainTurn: 1
      }
    ]
  },
  {
    id: "pBytMqjc",
    pickRatio: 31500,
    range: [0, 0],
    descriptions: [
      "<{1}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC18C\uBAA8\uD558\uACA0\uB2E4. \uB300\uC2E0 <{1}> \uD6A8\uACFC\uC640 <{3}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C \uB4A4\uBC14\uAFD4\uC8FC\uC9C0.",
      "<{1}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC18C\uBAA8\uD558\uACA0\uB124. \uB300\uC2E0 <{1}> \uD6A8\uACFC\uC640 <{3}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C \uC11C\uB85C \uBC14\uAFD4\uC8FC\uACA0\uB124.",
      "<{1}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC18C\uBAA8\uD558\uC8E0. \uB300\uC2E0 <{1}> \uD6A8\uACFC\uC640 <{3}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C \uB4A4\uBC14\uAFB8\uACA0\uC5B4\uC694."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "decreaseFirstTargetAndSwap",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [1, 3],
        remainTurn: 1
      }
    ]
  },
  {
    id: "PkOCMf3y",
    pickRatio: 31500,
    range: [0, 0],
    descriptions: [
      "<{1}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC18C\uBAA8\uD558\uACA0\uB2E4. \uB300\uC2E0 <{1}> \uD6A8\uACFC\uC640 <{4}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C \uB4A4\uBC14\uAFD4\uC8FC\uC9C0.",
      "<{1}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC18C\uBAA8\uD558\uACA0\uB124. \uB300\uC2E0 <{1}> \uD6A8\uACFC\uC640 <{4}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C \uC11C\uB85C \uBC14\uAFD4\uC8FC\uACA0\uB124.",
      "<{1}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC18C\uBAA8\uD558\uC8E0. \uB300\uC2E0 <{1}> \uD6A8\uACFC\uC640 <{4}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C \uB4A4\uBC14\uAFB8\uACA0\uC5B4\uC694."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "decreaseFirstTargetAndSwap",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [1, 4],
        remainTurn: 1
      }
    ]
  },
  {
    id: "9tZSH3Qf",
    pickRatio: 31500,
    range: [0, 0],
    descriptions: [
      "<{2}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC18C\uBAA8\uD558\uACA0\uB2E4. \uB300\uC2E0 <{2}> \uD6A8\uACFC\uC640 <{3}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C \uB4A4\uBC14\uAFD4\uC8FC\uC9C0.",
      "<{2}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC18C\uBAA8\uD558\uACA0\uB124. \uB300\uC2E0 <{2}> \uD6A8\uACFC\uC640 <{3}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C \uC11C\uB85C \uBC14\uAFD4\uC8FC\uACA0\uB124.",
      "<{2}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC18C\uBAA8\uD558\uC8E0. \uB300\uC2E0 <{2}> \uD6A8\uACFC\uC640 <{3}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C \uB4A4\uBC14\uAFB8\uACA0\uC5B4\uC694."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "decreaseFirstTargetAndSwap",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [2, 3],
        remainTurn: 1
      }
    ]
  },
  {
    id: "uf7hyKcO",
    pickRatio: 31500,
    range: [0, 0],
    descriptions: [
      "<{2}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC18C\uBAA8\uD558\uACA0\uB2E4. \uB300\uC2E0 <{2}> \uD6A8\uACFC\uC640 <{4}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C \uB4A4\uBC14\uAFD4\uC8FC\uC9C0.",
      "<{2}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC18C\uBAA8\uD558\uACA0\uB124. \uB300\uC2E0 <{2}> \uD6A8\uACFC\uC640 <{4}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C \uC11C\uB85C \uBC14\uAFD4\uC8FC\uACA0\uB124.",
      "<{2}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC18C\uBAA8\uD558\uC8E0. \uB300\uC2E0 <{2}> \uD6A8\uACFC\uC640 <{4}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C \uB4A4\uBC14\uAFB8\uACA0\uC5B4\uC694."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "decreaseFirstTargetAndSwap",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [2, 4],
        remainTurn: 1
      }
    ]
  },
  {
    id: "BG5GeAxp",
    pickRatio: 31500,
    range: [0, 0],
    descriptions: [
      "<{3}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC18C\uBAA8\uD558\uACA0\uB2E4. \uB300\uC2E0 <{3}> \uD6A8\uACFC\uC640 <{4}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C \uB4A4\uBC14\uAFD4\uC8FC\uC9C0.",
      "<{3}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC18C\uBAA8\uD558\uACA0\uB124. \uB300\uC2E0 <{3}> \uD6A8\uACFC\uC640 <{4}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C \uC11C\uB85C \uBC14\uAFD4\uC8FC\uACA0\uB124.",
      "<{3}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC18C\uBAA8\uD558\uC8E0. \uB300\uC2E0 <{3}> \uD6A8\uACFC\uC640 <{4}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C \uB4A4\uBC14\uAFB8\uACA0\uC5B4\uC694."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "decreaseFirstTargetAndSwap",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [3, 4],
        remainTurn: 1
      }
    ]
  },
  {
    id: "1OwEpxRp",
    pickRatio: 31500,
    range: [0, 0],
    descriptions: [
      "<{1}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC18C\uBAA8\uD558\uACA0\uB2E4. \uB300\uC2E0 <{1}> \uD6A8\uACFC\uC640 <{0}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C \uB4A4\uBC14\uAFD4\uC8FC\uC9C0.",
      "<{1}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC18C\uBAA8\uD558\uACA0\uB124. \uB300\uC2E0 <{1}> \uD6A8\uACFC\uC640 <{0}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C \uC11C\uB85C \uBC14\uAFD4\uC8FC\uACA0\uB124.",
      "<{1}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC18C\uBAA8\uD558\uC8E0. \uB300\uC2E0 <{1}> \uD6A8\uACFC\uC640 <{0}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C \uB4A4\uBC14\uAFB8\uACA0\uC5B4\uC694."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "decreaseFirstTargetAndSwap",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [1, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "Kme6BgN+",
    pickRatio: 31500,
    range: [0, 0],
    descriptions: [
      "<{2}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC18C\uBAA8\uD558\uACA0\uB2E4. \uB300\uC2E0 <{2}> \uD6A8\uACFC\uC640 <{0}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C \uB4A4\uBC14\uAFD4\uC8FC\uC9C0.",
      "<{2}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC18C\uBAA8\uD558\uACA0\uB124. \uB300\uC2E0 <{2}> \uD6A8\uACFC\uC640 <{0}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C \uC11C\uB85C \uBC14\uAFD4\uC8FC\uACA0\uB124.",
      "<{2}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC18C\uBAA8\uD558\uC8E0. \uB300\uC2E0 <{2}> \uD6A8\uACFC\uC640 <{0}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C \uB4A4\uBC14\uAFB8\uACA0\uC5B4\uC694."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "decreaseFirstTargetAndSwap",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [2, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "uOAYp5/X",
    pickRatio: 31500,
    range: [0, 0],
    descriptions: [
      "<{3}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC18C\uBAA8\uD558\uACA0\uB2E4. \uB300\uC2E0 <{3}> \uD6A8\uACFC\uC640 <{0}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C \uB4A4\uBC14\uAFD4\uC8FC\uC9C0.",
      "<{3}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC18C\uBAA8\uD558\uACA0\uB124. \uB300\uC2E0 <{3}> \uD6A8\uACFC\uC640 <{0}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C \uC11C\uB85C \uBC14\uAFD4\uC8FC\uACA0\uB124.",
      "<{3}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC18C\uBAA8\uD558\uC8E0. \uB300\uC2E0 <{3}> \uD6A8\uACFC\uC640 <{0}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C \uB4A4\uBC14\uAFB8\uACA0\uC5B4\uC694."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "decreaseFirstTargetAndSwap",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [3, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "Xn2xYHMU",
    pickRatio: 31500,
    range: [0, 0],
    descriptions: [
      "<{4}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC18C\uBAA8\uD558\uACA0\uB2E4. \uB300\uC2E0 <{4}> \uD6A8\uACFC\uC640 <{0}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C \uB4A4\uBC14\uAFD4\uC8FC\uC9C0.",
      "<{4}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC18C\uBAA8\uD558\uACA0\uB124. \uB300\uC2E0 <{4}> \uD6A8\uACFC\uC640 <{0}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C \uC11C\uB85C \uBC14\uAFD4\uC8FC\uACA0\uB124.",
      "<{4}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC18C\uBAA8\uD558\uC8E0. \uB300\uC2E0 <{4}> \uD6A8\uACFC\uC640 <{0}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C \uB4A4\uBC14\uAFB8\uACA0\uC5B4\uC694."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "decreaseFirstTargetAndSwap",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [4, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "kHTjKuGd",
    pickRatio: 31500,
    range: [0, 0],
    descriptions: [
      "<{2}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC18C\uBAA8\uD558\uACA0\uB2E4. \uB300\uC2E0 <{2}> \uD6A8\uACFC\uC640 <{1}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C \uB4A4\uBC14\uAFD4\uC8FC\uC9C0.",
      "<{2}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC18C\uBAA8\uD558\uACA0\uB124. \uB300\uC2E0 <{2}> \uD6A8\uACFC\uC640 <{1}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C \uC11C\uB85C \uBC14\uAFD4\uC8FC\uACA0\uB124.",
      "<{2}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC18C\uBAA8\uD558\uC8E0. \uB300\uC2E0 <{2}> \uD6A8\uACFC\uC640 <{1}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C \uB4A4\uBC14\uAFB8\uACA0\uC5B4\uC694."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "decreaseFirstTargetAndSwap",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [2, 1],
        remainTurn: 1
      }
    ]
  },
  {
    id: "V9jqUIcZ",
    pickRatio: 31500,
    range: [0, 0],
    descriptions: [
      "<{3}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC18C\uBAA8\uD558\uACA0\uB2E4. \uB300\uC2E0 <{3}> \uD6A8\uACFC\uC640 <{1}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C \uB4A4\uBC14\uAFD4\uC8FC\uC9C0.",
      "<{3}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC18C\uBAA8\uD558\uACA0\uB124. \uB300\uC2E0 <{3}> \uD6A8\uACFC\uC640 <{1}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C \uC11C\uB85C \uBC14\uAFD4\uC8FC\uACA0\uB124.",
      "<{3}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC18C\uBAA8\uD558\uC8E0. \uB300\uC2E0 <{3}> \uD6A8\uACFC\uC640 <{1}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C \uB4A4\uBC14\uAFB8\uACA0\uC5B4\uC694."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "decreaseFirstTargetAndSwap",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [3, 1],
        remainTurn: 1
      }
    ]
  },
  {
    id: "V/+gke/j",
    pickRatio: 31500,
    range: [0, 0],
    descriptions: [
      "<{4}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC18C\uBAA8\uD558\uACA0\uB2E4. \uB300\uC2E0 <{4}> \uD6A8\uACFC\uC640 <{1}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C \uB4A4\uBC14\uAFD4\uC8FC\uC9C0.",
      "<{4}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC18C\uBAA8\uD558\uACA0\uB124. \uB300\uC2E0 <{4}> \uD6A8\uACFC\uC640 <{1}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C \uC11C\uB85C \uBC14\uAFD4\uC8FC\uACA0\uB124.",
      "<{4}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC18C\uBAA8\uD558\uC8E0. \uB300\uC2E0 <{4}> \uD6A8\uACFC\uC640 <{1}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C \uB4A4\uBC14\uAFB8\uACA0\uC5B4\uC694."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "decreaseFirstTargetAndSwap",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [4, 1],
        remainTurn: 1
      }
    ]
  },
  {
    id: "JLQT/st1",
    pickRatio: 31500,
    range: [0, 0],
    descriptions: [
      "<{3}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC18C\uBAA8\uD558\uACA0\uB2E4. \uB300\uC2E0 <{3}> \uD6A8\uACFC\uC640 <{2}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C \uB4A4\uBC14\uAFD4\uC8FC\uC9C0.",
      "<{3}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC18C\uBAA8\uD558\uACA0\uB124. \uB300\uC2E0 <{3}> \uD6A8\uACFC\uC640 <{2}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C \uC11C\uB85C \uBC14\uAFD4\uC8FC\uACA0\uB124.",
      "<{3}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC18C\uBAA8\uD558\uC8E0. \uB300\uC2E0 <{3}> \uD6A8\uACFC\uC640 <{2}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C \uB4A4\uBC14\uAFB8\uACA0\uC5B4\uC694."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "decreaseFirstTargetAndSwap",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [3, 2],
        remainTurn: 1
      }
    ]
  },
  {
    id: "YWmEriBs",
    pickRatio: 31500,
    range: [0, 0],
    descriptions: [
      "<{4}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC18C\uBAA8\uD558\uACA0\uB2E4. \uB300\uC2E0 <{4}> \uD6A8\uACFC\uC640 <{2}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C \uB4A4\uBC14\uAFD4\uC8FC\uC9C0.",
      "<{4}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC18C\uBAA8\uD558\uACA0\uB124. \uB300\uC2E0 <{4}> \uD6A8\uACFC\uC640 <{2}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C \uC11C\uB85C \uBC14\uAFD4\uC8FC\uACA0\uB124.",
      "<{4}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC18C\uBAA8\uD558\uC8E0. \uB300\uC2E0 <{4}> \uD6A8\uACFC\uC640 <{2}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C \uB4A4\uBC14\uAFB8\uACA0\uC5B4\uC694."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "decreaseFirstTargetAndSwap",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [4, 2],
        remainTurn: 1
      }
    ]
  },
  {
    id: "XSbhd2UF",
    pickRatio: 31500,
    range: [0, 0],
    descriptions: [
      "<{4}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC18C\uBAA8\uD558\uACA0\uB2E4. \uB300\uC2E0 <{4}> \uD6A8\uACFC\uC640 <{3}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C \uB4A4\uBC14\uAFD4\uC8FC\uC9C0.",
      "<{4}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC18C\uBAA8\uD558\uACA0\uB124. \uB300\uC2E0 <{4}> \uD6A8\uACFC\uC640 <{3}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C \uC11C\uB85C \uBC14\uAFD4\uC8FC\uACA0\uB124.",
      "<{4}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC18C\uBAA8\uD558\uC8E0. \uB300\uC2E0 <{4}> \uD6A8\uACFC\uC640 <{3}> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C \uB4A4\uBC14\uAFB8\uACA0\uC5B4\uC694."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "decreaseFirstTargetAndSwap",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [4, 3],
        remainTurn: 1
      }
    ]
  },
  {
    id: "WguDgqRX",
    pickRatio: 22e3,
    range: [1, 6],
    descriptions: [
      "<\uCD5C\uD558 \uB2E8\uACC4> \uD6A8\uACFC <1>\uAC1C\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB824\uC8FC\uC9C0.",
      "<\uCD5C\uD558 \uB2E8\uACC4> \uD6A8\uACFC <1>\uAC1C\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB9AC\uACA0\uB124.",
      "<\uCD5C\uD558 \uB2E8\uACC4> \uD6A8\uACFC <1>\uAC1C\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB824\uB4DC\uB9AC\uC8E0."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseMinAndDecreaseTarget",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [1, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "rwCzVWtL",
    pickRatio: 33e3,
    range: [1, 6],
    descriptions: [
      "<\uCD5C\uD558 \uB2E8\uACC4> \uD6A8\uACFC <1>\uAC1C\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB824\uC8FC\uC9C0. \uD558\uC9C0\uB9CC <\uCD5C\uACE0 \uB2E8\uACC4> \uD6A8\uACFC <1>\uAC1C\uC758 \uB2E8\uACC4\uB294 <1> \uB0B4\uB824\uAC08 \uAC70\uC57C.",
      "<\uCD5C\uD558 \uB2E8\uACC4> \uD6A8\uACFC <1>\uAC1C\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB9AC\uACA0\uB124. \uB2E4\uB9CC <\uCD5C\uACE0 \uB2E8\uACC4> \uD6A8\uACFC <1>\uAC1C\uC758 \uB2E8\uACC4\uB294 <1> \uC904\uC5B4\uB4E4 \uAC78\uC138.",
      "<\uCD5C\uD558 \uB2E8\uACC4> \uD6A8\uACFC <1>\uAC1C\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB824\uB4DC\uB9AC\uC8E0. <\uCD5C\uACE0 \uB2E8\uACC4> \uD6A8\uACFC <1>\uAC1C\uC758 \uB2E8\uACC4\uAC00 <1> \uC904\uC5B4\uB4E4\uACA0\uC9C0\uB9CC\uC694."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseMinAndDecreaseTarget",
        targetType: "maxValue",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [1, -1],
        remainTurn: 1
      }
    ]
  },
  {
    id: "y34ZDrYU",
    pickRatio: 66e3,
    range: [1, 6],
    descriptions: [
      "<\uCD5C\uD558 \uB2E8\uACC4> \uD6A8\uACFC <1>\uAC1C\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB824\uC8FC\uC9C0. \uD558\uC9C0\uB9CC <\uCD5C\uACE0 \uB2E8\uACC4> \uD6A8\uACFC <1>\uAC1C\uC758 \uB2E8\uACC4\uB294 <2> \uB0B4\uB824\uAC08 \uAC70\uC57C.",
      "<\uCD5C\uD558 \uB2E8\uACC4> \uD6A8\uACFC <1>\uAC1C\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB9AC\uACA0\uB124. \uB2E4\uB9CC <\uCD5C\uACE0 \uB2E8\uACC4> \uD6A8\uACFC <1>\uAC1C\uC758 \uB2E8\uACC4\uB294 <2> \uC904\uC5B4\uB4E4 \uAC78\uC138.",
      "<\uCD5C\uD558 \uB2E8\uACC4> \uD6A8\uACFC <1>\uAC1C\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB824\uB4DC\uB9AC\uC8E0. <\uCD5C\uACE0 \uB2E8\uACC4> \uD6A8\uACFC <1>\uAC1C\uC758 \uB2E8\uACC4\uAC00 <2> \uC904\uC5B4\uB4E4\uACA0\uC9C0\uB9CC\uC694."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseMinAndDecreaseTarget",
        targetType: "maxValue",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [1, -2],
        remainTurn: 1
      }
    ]
  },
  {
    id: "B0wBsFQZ",
    pickRatio: 33e3,
    range: [1, 6],
    descriptions: [
      "<\uCD5C\uD558 \uB2E8\uACC4> \uD6A8\uACFC <1>\uAC1C\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB824\uC8FC\uC9C0. \uD558\uC9C0\uB9CC <\uB2E4\uB978> \uD6A8\uACFC <1>\uAC1C\uC758 \uB2E8\uACC4\uB294 <1> \uB0B4\uB824\uAC08 \uAC70\uC57C.",
      "<\uCD5C\uD558 \uB2E8\uACC4> \uD6A8\uACFC <1>\uAC1C\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB9AC\uACA0\uB124. \uB2E4\uB9CC <\uB2E4\uB978> \uD6A8\uACFC <1>\uAC1C\uC758 \uB2E8\uACC4\uB294 <1> \uC904\uC5B4\uB4E4 \uAC78\uC138.",
      "<\uCD5C\uD558 \uB2E8\uACC4> \uD6A8\uACFC <1>\uAC1C\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB824\uB4DC\uB9AC\uC8E0. <\uB2E4\uB978> \uD6A8\uACFC <1>\uAC1C\uC758 \uB2E8\uACC4\uAC00 <1> \uC904\uC5B4\uB4E4\uACA0\uC9C0\uB9CC\uC694."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseMinAndDecreaseTarget",
        targetType: "random",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [1, -1],
        remainTurn: 1
      }
    ]
  },
  {
    id: "YjCTNhrR",
    pickRatio: 66e3,
    range: [1, 6],
    descriptions: [
      "<\uCD5C\uD558 \uB2E8\uACC4> \uD6A8\uACFC <1>\uAC1C\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB824\uC8FC\uC9C0. \uD558\uC9C0\uB9CC <\uB2E4\uB978> \uD6A8\uACFC <1>\uAC1C\uC758 \uB2E8\uACC4\uB294 <2> \uB0B4\uB824\uAC08 \uAC70\uC57C.",
      "<\uCD5C\uD558 \uB2E8\uACC4> \uD6A8\uACFC <1>\uAC1C\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB9AC\uACA0\uB124. \uB2E4\uB9CC <\uB2E4\uB978> \uD6A8\uACFC <1>\uAC1C\uC758 \uB2E8\uACC4\uB294 <2> \uC904\uC5B4\uB4E4 \uAC78\uC138.",
      "<\uCD5C\uD558 \uB2E8\uACC4> \uD6A8\uACFC <1>\uAC1C\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB824\uB4DC\uB9AC\uC8E0. <\uB2E4\uB978> \uD6A8\uACFC <1>\uAC1C\uC758 \uB2E8\uACC4\uAC00 <2> \uC904\uC5B4\uB4E4\uACA0\uC9C0\uB9CC\uC694."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseMinAndDecreaseTarget",
        targetType: "random",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [1, -2],
        remainTurn: 1
      }
    ]
  },
  {
    id: "+l4Nv2wX",
    pickRatio: 5500,
    range: [0, 0],
    descriptions: [
      "<\uCD5C\uACE0 \uB2E8\uACC4> \uD6A8\uACFC <1>\uAC1C\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB824\uC8FC\uC9C0.",
      "<\uCD5C\uACE0 \uB2E8\uACC4> \uD6A8\uACFC <1>\uAC1C\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB9AC\uACA0\uB124.",
      "<\uCD5C\uACE0 \uB2E8\uACC4> \uD6A8\uACFC <1>\uAC1C\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB824\uB4DC\uB9AC\uC8E0."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseMaxAndDecreaseTarget",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [1, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "noTUfDIQ",
    pickRatio: 8250,
    range: [0, 0],
    descriptions: [
      "<\uCD5C\uACE0 \uB2E8\uACC4> \uD6A8\uACFC <1>\uAC1C\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB824\uC8FC\uC9C0. \uD558\uC9C0\uB9CC <\uCD5C\uD558 \uB2E8\uACC4> \uD6A8\uACFC <1>\uAC1C\uC758 \uB2E8\uACC4\uB294 <1> \uB0B4\uB824\uAC08 \uAC70\uC57C.",
      "<\uCD5C\uACE0 \uB2E8\uACC4> \uD6A8\uACFC <1>\uAC1C\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB9AC\uACA0\uB124. \uB2E4\uB9CC <\uCD5C\uD558 \uB2E8\uACC4> \uD6A8\uACFC <1>\uAC1C\uC758 \uB2E8\uACC4\uB294 <1> \uC904\uC5B4\uB4E4 \uAC78\uC138.",
      "<\uCD5C\uACE0 \uB2E8\uACC4> \uD6A8\uACFC <1>\uAC1C\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB824\uB4DC\uB9AC\uC8E0. <\uCD5C\uD558 \uB2E8\uACC4> \uD6A8\uACFC <1>\uAC1C\uC758 \uB2E8\uACC4\uAC00 <1> \uC904\uC5B4\uB4E4\uACA0\uC9C0\uB9CC\uC694."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseMaxAndDecreaseTarget",
        targetType: "minValue",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [1, -1],
        remainTurn: 1
      }
    ]
  },
  {
    id: "4eJwfnBT",
    pickRatio: 16500,
    range: [0, 0],
    descriptions: [
      "<\uCD5C\uACE0 \uB2E8\uACC4> \uD6A8\uACFC <1>\uAC1C\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB824\uC8FC\uC9C0. \uD558\uC9C0\uB9CC <\uCD5C\uD558 \uB2E8\uACC4> \uD6A8\uACFC <1>\uAC1C\uC758 \uB2E8\uACC4\uB294 <2> \uB0B4\uB824\uAC08 \uAC70\uC57C.",
      "<\uCD5C\uACE0 \uB2E8\uACC4> \uD6A8\uACFC <1>\uAC1C\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB9AC\uACA0\uB124. \uB2E4\uB9CC <\uCD5C\uD558 \uB2E8\uACC4> \uD6A8\uACFC <1>\uAC1C\uC758 \uB2E8\uACC4\uB294 <2> \uC904\uC5B4\uB4E4 \uAC78\uC138.",
      "<\uCD5C\uACE0 \uB2E8\uACC4> \uD6A8\uACFC <1>\uAC1C\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB824\uB4DC\uB9AC\uC8E0. <\uCD5C\uD558 \uB2E8\uACC4> \uD6A8\uACFC <1>\uAC1C\uC758 \uB2E8\uACC4\uAC00 <2> \uC904\uC5B4\uB4E4\uACA0\uC9C0\uB9CC\uC694."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseMaxAndDecreaseTarget",
        targetType: "minValue",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [1, -2],
        remainTurn: 1
      }
    ]
  },
  {
    id: "YrGnYgEu",
    pickRatio: 8250,
    range: [0, 0],
    descriptions: [
      "<\uCD5C\uACE0 \uB2E8\uACC4> \uD6A8\uACFC <1>\uAC1C\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB824\uC8FC\uC9C0. \uD558\uC9C0\uB9CC <\uC784\uC758\uC758> \uD6A8\uACFC <1>\uAC1C\uC758 \uB2E8\uACC4\uB294 <1> \uB0B4\uB824\uAC08 \uAC70\uC57C.",
      "<\uCD5C\uACE0 \uB2E8\uACC4> \uD6A8\uACFC <1>\uAC1C\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB9AC\uACA0\uB124. \uB2E4\uB9CC <\uC784\uC758\uC758> \uD6A8\uACFC <1>\uAC1C\uC758 \uB2E8\uACC4\uB294 <1> \uC904\uC5B4\uB4E4 \uAC78\uC138.",
      "<\uCD5C\uACE0 \uB2E8\uACC4> \uD6A8\uACFC <1>\uAC1C\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB824\uB4DC\uB9AC\uC8E0. <\uC784\uC758\uC758> \uD6A8\uACFC <1>\uAC1C\uC758 \uB2E8\uACC4\uAC00 <1> \uC904\uC5B4\uB4E4\uACA0\uC9C0\uB9CC\uC694."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseMaxAndDecreaseTarget",
        targetType: "random",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [1, -1],
        remainTurn: 1
      }
    ]
  },
  {
    id: "OtcWJjNT",
    pickRatio: 16500,
    range: [0, 0],
    descriptions: [
      "<\uCD5C\uACE0 \uB2E8\uACC4> \uD6A8\uACFC <1>\uAC1C\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB824\uC8FC\uC9C0. \uD558\uC9C0\uB9CC <\uC784\uC758\uC758> \uD6A8\uACFC <1>\uAC1C\uC758 \uB2E8\uACC4\uB294 <2> \uB0B4\uB824\uAC08 \uAC70\uC57C.",
      "<\uCD5C\uACE0 \uB2E8\uACC4> \uD6A8\uACFC <1>\uAC1C\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB9AC\uACA0\uB124. \uB2E4\uB9CC <\uC784\uC758\uC758> \uD6A8\uACFC <1>\uAC1C\uC758 \uB2E8\uACC4\uB294 <2> \uC904\uC5B4\uB4E4 \uAC78\uC138.",
      "<\uCD5C\uACE0 \uB2E8\uACC4> \uD6A8\uACFC <1>\uAC1C\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB824\uB4DC\uB9AC\uC8E0. <\uC784\uC758\uC758> \uD6A8\uACFC <1>\uAC1C\uC758 \uB2E8\uACC4\uAC00 <2> \uC904\uC5B4\uB4E4\uACA0\uC9C0\uB9CC\uC694."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseMaxAndDecreaseTarget",
        targetType: "random",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [1, -2],
        remainTurn: 1
      }
    ]
  },
  {
    id: "ZB9XG5ww",
    pickRatio: 3e4,
    range: [1, 6],
    descriptions: [
      "<\uCD5C\uD558 \uB2E8\uACC4> \uD6A8\uACFC <1>\uAC1C\uC758 \uB2E8\uACC4\uB97C <2> \uC62C\uB824\uC8FC\uC9C0. \uD558\uC9C0\uB9CC <\uCD5C\uACE0 \uB2E8\uACC4> \uD6A8\uACFC <1>\uAC1C\uC758 \uB2E8\uACC4\uB294 <2> \uB0B4\uB824\uAC08 \uAC70\uC57C.",
      "<\uCD5C\uD558 \uB2E8\uACC4> \uD6A8\uACFC <1>\uAC1C\uC758 \uB2E8\uACC4\uB97C <2> \uC62C\uB9AC\uACA0\uB124. \uB2E4\uB9CC <\uCD5C\uACE0 \uB2E8\uACC4> \uD6A8\uACFC <1>\uAC1C\uC758 \uB2E8\uACC4\uB294 <2> \uC904\uC5B4\uB4E4 \uAC78\uC138.",
      "<\uCD5C\uD558 \uB2E8\uACC4> \uD6A8\uACFC <1>\uAC1C\uC758 \uB2E8\uACC4\uB97C <2> \uC62C\uB824\uB4DC\uB9AC\uC8E0. <\uCD5C\uACE0 \uB2E8\uACC4> \uD6A8\uACFC <1>\uAC1C\uC758 \uB2E8\uACC4\uAC00 <2> \uC904\uC5B4\uB4E4\uACA0\uC9C0\uB9CC\uC694."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseMinAndDecreaseTarget",
        targetType: "maxValue",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [2, -2],
        remainTurn: 1
      }
    ]
  },
  {
    id: "XN5hHxIA",
    pickRatio: 15e3,
    range: [1, 6],
    descriptions: [
      "<\uCD5C\uD558 \uB2E8\uACC4> \uD6A8\uACFC <1>\uAC1C\uC758 \uB2E8\uACC4\uB97C <2> \uC62C\uB824\uC8FC\uC9C0. \uD558\uC9C0\uB9CC <\uCD5C\uACE0 \uB2E8\uACC4> \uD6A8\uACFC <1>\uAC1C\uC758 \uB2E8\uACC4\uB294 <1> \uB0B4\uB824\uAC08 \uAC70\uC57C.",
      "<\uCD5C\uD558 \uB2E8\uACC4> \uD6A8\uACFC <1>\uAC1C\uC758 \uB2E8\uACC4\uB97C <2> \uC62C\uB9AC\uACA0\uB124. \uB2E4\uB9CC <\uCD5C\uACE0 \uB2E8\uACC4> \uD6A8\uACFC <1>\uAC1C\uC758 \uB2E8\uACC4\uB294 <1> \uC904\uC5B4\uB4E4 \uAC78\uC138.",
      "<\uCD5C\uD558 \uB2E8\uACC4> \uD6A8\uACFC <1>\uAC1C\uC758 \uB2E8\uACC4\uB97C <2> \uC62C\uB824\uB4DC\uB9AC\uC8E0. <\uCD5C\uACE0 \uB2E8\uACC4> \uD6A8\uACFC <1>\uAC1C\uC758 \uB2E8\uACC4\uAC00 <1> \uC904\uC5B4\uB4E4\uACA0\uC9C0\uB9CC\uC694."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseMinAndDecreaseTarget",
        targetType: "maxValue",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [2, -1],
        remainTurn: 1
      }
    ]
  },
  {
    id: "pyFVTyxz",
    pickRatio: 3e4,
    range: [1, 6],
    descriptions: [
      "<\uCD5C\uD558 \uB2E8\uACC4> \uD6A8\uACFC <1>\uAC1C\uC758 \uB2E8\uACC4\uB97C <2> \uC62C\uB824\uC8FC\uC9C0. \uD558\uC9C0\uB9CC <\uB2E4\uB978> \uD6A8\uACFC <1>\uAC1C\uC758 \uB2E8\uACC4\uB294 <2> \uB0B4\uB824\uAC08 \uAC70\uC57C.",
      "<\uCD5C\uD558 \uB2E8\uACC4> \uD6A8\uACFC <1>\uAC1C\uC758 \uB2E8\uACC4\uB97C <2> \uC62C\uB9AC\uACA0\uB124. \uB2E4\uB9CC <\uB2E4\uB978> \uD6A8\uACFC <1>\uAC1C\uC758 \uB2E8\uACC4\uB294 <2> \uC904\uC5B4\uB4E4 \uAC78\uC138.",
      "<\uCD5C\uD558 \uB2E8\uACC4> \uD6A8\uACFC <1>\uAC1C\uC758 \uB2E8\uACC4\uB97C <2> \uC62C\uB824\uB4DC\uB9AC\uC8E0. <\uB2E4\uB978> \uD6A8\uACFC <1>\uAC1C\uC758 \uB2E8\uACC4\uAC00 <2> \uC904\uC5B4\uB4E4\uACA0\uC9C0\uB9CC\uC694."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseMinAndDecreaseTarget",
        targetType: "random",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [2, -2],
        remainTurn: 1
      }
    ]
  },
  {
    id: "WGvKm6dz",
    pickRatio: 15e3,
    range: [1, 6],
    descriptions: [
      "<\uCD5C\uD558 \uB2E8\uACC4> \uD6A8\uACFC <1>\uAC1C\uC758 \uB2E8\uACC4\uB97C <2> \uC62C\uB824\uC8FC\uC9C0. \uD558\uC9C0\uB9CC <\uB2E4\uB978> \uD6A8\uACFC <1>\uAC1C\uC758 \uB2E8\uACC4\uB294 <1> \uB0B4\uB824\uAC08 \uAC70\uC57C.",
      "<\uCD5C\uD558 \uB2E8\uACC4> \uD6A8\uACFC <1>\uAC1C\uC758 \uB2E8\uACC4\uB97C <2> \uC62C\uB9AC\uACA0\uB124. \uB2E4\uB9CC <\uB2E4\uB978> \uD6A8\uACFC <1>\uAC1C\uC758 \uB2E8\uACC4\uB294 <1> \uC904\uC5B4\uB4E4 \uAC78\uC138.",
      "<\uCD5C\uD558 \uB2E8\uACC4> \uD6A8\uACFC <1>\uAC1C\uC758 \uB2E8\uACC4\uB97C <2> \uC62C\uB824\uB4DC\uB9AC\uC8E0. <\uB2E4\uB978> \uD6A8\uACFC <1>\uAC1C\uC758 \uB2E8\uACC4\uAC00 <1> \uC904\uC5B4\uB4E4\uACA0\uC9C0\uB9CC\uC694."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseMinAndDecreaseTarget",
        targetType: "random",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [2, -1],
        remainTurn: 1
      }
    ]
  },
  {
    id: "ZctqR2nY",
    pickRatio: 1e4,
    range: [1, 6],
    descriptions: [
      "<\uCD5C\uD558 \uB2E8\uACC4> \uD6A8\uACFC <1>\uAC1C\uC758 \uB2E8\uACC4\uB97C <2> \uC62C\uB824\uC8FC\uC9C0.",
      "<\uCD5C\uD558 \uB2E8\uACC4> \uD6A8\uACFC <1>\uAC1C\uC758 \uB2E8\uACC4\uB97C <2> \uC62C\uB9AC\uACA0\uB124.",
      "<\uCD5C\uD558 \uB2E8\uACC4> \uD6A8\uACFC <1>\uAC1C\uC758 \uB2E8\uACC4\uB97C <2> \uC62C\uB824\uB4DC\uB9AC\uC8E0."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseMinAndDecreaseTarget",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [2, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "q1tgjYMp",
    pickRatio: 1e4,
    range: [3, 99],
    descriptions: [
      "<\uC5F0\uC131\uB418\uC9C0 \uC54A\uC740> \uD6A8\uACFC\uB4E4\uC774 \uC788\uAD70. \uC800 \uD6A8\uACFC\uB4E4\uC758 \uB2E8\uACC4\uB97C \uC8C4\uB2E4 <1>\uC529 \uC62C\uB824\uC8FC\uC9C0.",
      "<\uC5F0\uC131\uB418\uC9C0 \uC54A\uC740> \uD6A8\uACFC\uB4E4\uC758 \uB2E8\uACC4\uB97C \uC804\uBD80 <1>\uC529 \uC62C\uB824\uC8FC\uACA0\uB124.",
      "<\uC5F0\uC131\uB418\uC9C0 \uC54A\uC740> \uD6A8\uACFC\uB4E4\uC774 \uC788\uB124\uC694. \uC800 \uD6A8\uACFC \uBAA8\uB450, \uB2E8\uACC4\uB97C <1>\uC529 \uC62C\uB824\uB4DC\uB9AC\uC8E0."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetWithRatio",
        targetType: "lteValue",
        targetCondition: 0,
        targetCount: 5,
        ratio: 1e4,
        value: [1, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "Hp1Jly41",
    pickRatio: 2e4,
    range: [5, 99],
    descriptions: [
      "\uB2E8\uACC4\uAC00 <2> \uC774\uD558\uC778 \uD6A8\uACFC\uB4E4\uC774 \uC788\uAD70. \uC800 \uD6A8\uACFC\uB4E4\uC758 \uB2E8\uACC4\uB97C \uC8C4\uB2E4 <1>\uC529 \uC62C\uB824\uC8FC\uC9C0.",
      "\uB2E8\uACC4\uAC00 <2> \uC774\uD558\uC778 \uD6A8\uACFC\uB4E4\uC758 \uB2E8\uACC4\uB97C \uC804\uBD80 <1>\uC529 \uC62C\uB824\uC8FC\uACA0\uB124.",
      "\uB2E8\uACC4\uAC00 <2> \uC774\uD558\uC778 \uD6A8\uACFC\uB4E4\uC774 \uC788\uB124\uC694. \uC800 \uD6A8\uACFC \uBAA8\uB450, \uB2E8\uACC4\uB97C <1>\uC529 \uC62C\uB824\uB4DC\uB9AC\uC8E0."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetWithRatio",
        targetType: "lteValue",
        targetCondition: 2,
        targetCount: 5,
        ratio: 1e4,
        value: [1, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "0aBSrAj3",
    pickRatio: 3e4,
    range: [9, 99],
    descriptions: [
      "\uB2E8\uACC4\uAC00 <4> \uC774\uD558\uC778 \uD6A8\uACFC\uB4E4\uC774 \uC788\uAD70. \uC800 \uD6A8\uACFC\uB4E4\uC758 \uB2E8\uACC4\uB97C \uC8C4\uB2E4 <1>\uC529 \uC62C\uB824\uC8FC\uC9C0.",
      "\uB2E8\uACC4\uAC00 <4> \uC774\uD558\uC778 \uD6A8\uACFC\uB4E4\uC758 \uB2E8\uACC4\uB97C \uC804\uBD80 <1>\uC529 \uC62C\uB824\uC8FC\uACA0\uB124.",
      "\uB2E8\uACC4\uAC00 <4> \uC774\uD558\uC778 \uD6A8\uACFC\uB4E4\uC774 \uC788\uB124\uC694. \uC800 \uD6A8\uACFC \uBAA8\uB450, \uB2E8\uACC4\uB97C <1>\uC529 \uC62C\uB824\uB4DC\uB9AC\uC8E0."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetWithRatio",
        targetType: "lteValue",
        targetCondition: 4,
        targetCount: 5,
        ratio: 1e4,
        value: [1, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "qw+dYf8J",
    pickRatio: 4e4,
    range: [13, 99],
    descriptions: [
      "\uB2E8\uACC4\uAC00 <6> \uC774\uD558\uC778 \uD6A8\uACFC\uB4E4\uC774 \uC788\uAD70. \uC800 \uD6A8\uACFC\uB4E4\uC758 \uB2E8\uACC4\uB97C \uC8C4\uB2E4 <1>\uC529 \uC62C\uB824\uC8FC\uC9C0.",
      "\uB2E8\uACC4\uAC00 <6> \uC774\uD558\uC778 \uD6A8\uACFC\uB4E4\uC758 \uB2E8\uACC4\uB97C \uC804\uBD80 <1>\uC529 \uC62C\uB824\uC8FC\uACA0\uB124.",
      "\uB2E8\uACC4\uAC00 <6> \uC774\uD558\uC778 \uD6A8\uACFC\uB4E4\uC774 \uC788\uB124\uC694. \uC800 \uD6A8\uACFC \uBAA8\uB450, \uB2E8\uACC4\uB97C <1>\uC529 \uC62C\uB824\uB4DC\uB9AC\uC8E0."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetWithRatio",
        targetType: "lteValue",
        targetCondition: 6,
        targetCount: 5,
        ratio: 1e4,
        value: [1, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "Betrhw/Y",
    pickRatio: 5e3,
    range: [5, 99],
    descriptions: [
      "<1, 3, 5\uBC88> \uC2AC\uB86F\uC758 \uB2E8\uACC4\uB97C <1>\uC529 \uC62C\uB824\uC8FC\uC9C0. \uD558\uC9C0\uB9CC <2, 4\uBC88> \uC2AC\uB86F\uC758 \uB2E8\uACC4\uAC00 <2>\uC529 \uB0B4\uB824\uAC08 \uAC70\uC57C.",
      "<1, 3, 5\uBC88> \uC2AC\uB86F\uC758 \uB2E8\uACC4\uB97C <1>\uC529 \uC62C\uB9AC\uACA0\uB124. \uB2E4\uB9CC <2, 4\uBC88> \uC2AC\uB86F\uC758 \uB2E8\uACC4\uAC00 <2>\uC529 \uC904\uC5B4\uB4E4 \uAC78\uC138.",
      "<1, 3, 5\uBC88> \uC2AC\uB86F\uC758 \uB2E8\uACC4\uB97C <1>\uC529 \uC62C\uB824\uB4DC\uB9AC\uC8E0. <2, 4\uBC88> \uC2AC\uB86F\uC758 \uB2E8\uACC4\uAC00 <2>\uC529 \uC904\uC5B4\uB4E4\uACA0\uC9C0\uB9CC\uC694."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetWithRatio",
        targetType: "oneThreeFive",
        targetCondition: 0,
        targetCount: 3,
        ratio: 1e4,
        value: [1, 0],
        remainTurn: 1
      },
      {
        type: "increaseTargetWithRatio",
        targetType: "twoFour",
        targetCondition: 0,
        targetCount: 2,
        ratio: 1e4,
        value: [-2, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "yb+he5Xt",
    pickRatio: 2e4,
    range: [5, 99],
    descriptions: [
      "<2, 4\uBC88> \uC2AC\uB86F\uC758 \uB2E8\uACC4\uB97C <1>\uC529 \uC62C\uB824\uC8FC\uC9C0. \uD558\uC9C0\uB9CC <1, 3, 5\uBC88> \uC2AC\uB86F\uC758 \uB2E8\uACC4\uAC00 <2>\uC529 \uB0B4\uB824\uAC08 \uAC70\uC57C.",
      "<2, 4\uBC88> \uC2AC\uB86F\uC758 \uB2E8\uACC4\uB97C <1>\uC529 \uC62C\uB9AC\uACA0\uB124. \uB2E4\uB9CC <1, 3, 5\uBC88> \uC2AC\uB86F\uC758 \uB2E8\uACC4\uAC00 <2>\uC529 \uC904\uC5B4\uB4E4 \uAC78\uC138.",
      "<2, 4\uBC88> \uC2AC\uB86F\uC758 \uB2E8\uACC4\uB97C <1>\uC529 \uC62C\uB824\uB4DC\uB9AC\uC8E0. <1, 3, 5\uBC88> \uC2AC\uB86F\uC758 \uB2E8\uACC4\uAC00 <2>\uC529 \uC904\uC5B4\uB4E4\uACA0\uC9C0\uB9CC\uC694."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetWithRatio",
        targetType: "twoFour",
        targetCondition: 0,
        targetCount: 2,
        ratio: 1e4,
        value: [1, 0],
        remainTurn: 1
      },
      {
        type: "increaseTargetWithRatio",
        targetType: "oneThreeFive",
        targetCondition: 0,
        targetCount: 3,
        ratio: 1e4,
        value: [-2, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "tw2b8sHF",
    pickRatio: 24e4,
    range: [5, 99],
    descriptions: [
      "<\uC784\uC758\uC758 \uD6A8\uACFC>\uB97C <1>\uAC1C \uBD09\uC778\uD560 \uAC70\uC57C.",
      "\uC784\uC758\uC758 \uD6A8\uACFC\uB97C <1>\uAC1C \uBD09\uC778\uD558\uACA0\uB124.",
      "<\uC784\uC758\uC758 \uD6A8\uACFC> <1>\uAC1C\uAC00 \uBD09\uC778\uB420 \uAC70\uC5D0\uC694."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "sealTarget",
        targetType: "random",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [0, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "XwiC96kj",
    pickRatio: 100800,
    range: [5, 99],
    descriptions: [
      "<{0}> \uD6A8\uACFC\uB97C \uBD09\uC778\uD558\uACA0\uB2E4. \uB2E4\uB9CC \uC774\uBC88 \uC5F0\uC131\uC5D0\uC11C \uAE30\uD68C\uB97C <2>\uD68C \uC18C\uBAA8\uD558\uACA0\uC9C0.",
      "<{0}> \uD6A8\uACFC\uB97C \uBD09\uC778\uD558\uACA0\uB124. \uB2E4\uB9CC \uC774\uBC88 \uC5F0\uC131\uC5D0\uC11C\uB294 \uAE30\uD68C\uB97C <2>\uD68C \uC18C\uBAA8\uD560 \uAC78\uC138.",
      "<{0}> \uD6A8\uACFC\uB97C \uBD09\uC778\uD574\uB4DC\uB9AC\uC8E0. \uAE30\uD68C\uB97C <2>\uD68C \uC18C\uBAA8\uD558\uACA0\uC9C0\uB9CC\uC694."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "sealTarget",
        targetType: "proposed",
        targetCondition: 1,
        targetCount: 1,
        ratio: 0,
        value: [0, 0],
        remainTurn: 1
      },
      {
        type: "decreaseTurnLeft",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [1, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "zu9Nj4vh",
    pickRatio: 100800,
    range: [5, 99],
    descriptions: [
      "<{1}> \uD6A8\uACFC\uB97C \uBD09\uC778\uD558\uACA0\uB2E4. \uB2E4\uB9CC \uC774\uBC88 \uC5F0\uC131\uC5D0\uC11C \uAE30\uD68C\uB97C <2>\uD68C \uC18C\uBAA8\uD558\uACA0\uC9C0.",
      "<{1}> \uD6A8\uACFC\uB97C \uBD09\uC778\uD558\uACA0\uB124. \uB2E4\uB9CC \uC774\uBC88 \uC5F0\uC131\uC5D0\uC11C\uB294 \uAE30\uD68C\uB97C <2>\uD68C \uC18C\uBAA8\uD560 \uAC78\uC138.",
      "<{1}> \uD6A8\uACFC\uB97C \uBD09\uC778\uD574\uB4DC\uB9AC\uC8E0. \uAE30\uD68C\uB97C <2>\uD68C \uC18C\uBAA8\uD558\uACA0\uC9C0\uB9CC\uC694."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "sealTarget",
        targetType: "proposed",
        targetCondition: 2,
        targetCount: 1,
        ratio: 0,
        value: [0, 0],
        remainTurn: 1
      },
      {
        type: "decreaseTurnLeft",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [1, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "8/vq2Y/e",
    pickRatio: 100800,
    range: [5, 99],
    descriptions: [
      "<{2}> \uD6A8\uACFC\uB97C \uBD09\uC778\uD558\uACA0\uB2E4. \uB2E4\uB9CC \uC774\uBC88 \uC5F0\uC131\uC5D0\uC11C \uAE30\uD68C\uB97C <2>\uD68C \uC18C\uBAA8\uD558\uACA0\uC9C0.",
      "<{2}> \uD6A8\uACFC\uB97C \uBD09\uC778\uD558\uACA0\uB124. \uB2E4\uB9CC \uC774\uBC88 \uC5F0\uC131\uC5D0\uC11C\uB294 \uAE30\uD68C\uB97C <2>\uD68C \uC18C\uBAA8\uD560 \uAC78\uC138.",
      "<{2}> \uD6A8\uACFC\uB97C \uBD09\uC778\uD574\uB4DC\uB9AC\uC8E0. \uAE30\uD68C\uB97C <2>\uD68C \uC18C\uBAA8\uD558\uACA0\uC9C0\uB9CC\uC694."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "sealTarget",
        targetType: "proposed",
        targetCondition: 3,
        targetCount: 1,
        ratio: 0,
        value: [0, 0],
        remainTurn: 1
      },
      {
        type: "decreaseTurnLeft",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [1, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "JfA+Wzj6",
    pickRatio: 100800,
    range: [5, 99],
    descriptions: [
      "<{3}> \uD6A8\uACFC\uB97C \uBD09\uC778\uD558\uACA0\uB2E4. \uB2E4\uB9CC \uC774\uBC88 \uC5F0\uC131\uC5D0\uC11C \uAE30\uD68C\uB97C <2>\uD68C \uC18C\uBAA8\uD558\uACA0\uC9C0.",
      "<{3}> \uD6A8\uACFC\uB97C \uBD09\uC778\uD558\uACA0\uB124. \uB2E4\uB9CC \uC774\uBC88 \uC5F0\uC131\uC5D0\uC11C\uB294 \uAE30\uD68C\uB97C <2>\uD68C \uC18C\uBAA8\uD560 \uAC78\uC138.",
      "<{3}> \uD6A8\uACFC\uB97C \uBD09\uC778\uD574\uB4DC\uB9AC\uC8E0. \uAE30\uD68C\uB97C <2>\uD68C \uC18C\uBAA8\uD558\uACA0\uC9C0\uB9CC\uC694."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "sealTarget",
        targetType: "proposed",
        targetCondition: 4,
        targetCount: 1,
        ratio: 0,
        value: [0, 0],
        remainTurn: 1
      },
      {
        type: "decreaseTurnLeft",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [1, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "l9PDNEwk",
    pickRatio: 100800,
    range: [5, 99],
    descriptions: [
      "<{4}> \uD6A8\uACFC\uB97C \uBD09\uC778\uD558\uACA0\uB2E4. \uB2E4\uB9CC \uC774\uBC88 \uC5F0\uC131\uC5D0\uC11C \uAE30\uD68C\uB97C <2>\uD68C \uC18C\uBAA8\uD558\uACA0\uC9C0.",
      "<{4}> \uD6A8\uACFC\uB97C \uBD09\uC778\uD558\uACA0\uB124. \uB2E4\uB9CC \uC774\uBC88 \uC5F0\uC131\uC5D0\uC11C\uB294 \uAE30\uD68C\uB97C <2>\uD68C \uC18C\uBAA8\uD560 \uAC78\uC138.",
      "<{4}> \uD6A8\uACFC\uB97C \uBD09\uC778\uD574\uB4DC\uB9AC\uC8E0. \uAE30\uD68C\uB97C <2>\uD68C \uC18C\uBAA8\uD558\uACA0\uC9C0\uB9CC\uC694."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "sealTarget",
        targetType: "proposed",
        targetCondition: 5,
        targetCount: 1,
        ratio: 0,
        value: [0, 0],
        remainTurn: 1
      },
      {
        type: "decreaseTurnLeft",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [1, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "zxpmYMXP",
    pickRatio: 56e3,
    range: [5, 99],
    descriptions: [
      "<\uB124\uAC00 \uACE0\uB974\uB294> \uD6A8\uACFC\uB97C \uBD09\uC778\uD558\uACA0\uB2E4. \uB2E4\uB9CC \uC774\uBC88 \uC5F0\uC131\uC5D0\uC11C \uAE30\uD68C\uB97C <2>\uD68C \uC18C\uBAA8\uD558\uACA0\uC9C0.",
      "<\uC790\uB124\uAC00 \uC120\uD0DD\uD55C> \uD6A8\uACFC\uB97C \uBD09\uC778\uD558\uACA0\uB124. \uB2E4\uB9CC \uC774\uBC88 \uC5F0\uC131\uC5D0\uC11C\uB294 \uAE30\uD68C\uB97C <2>\uD68C \uC18C\uBAA8\uD560 \uAC78\uC138.",
      "<\uB2F9\uC2E0\uC774 \uD0DD\uD55C> \uD6A8\uACFC\uB97C \uBD09\uC778\uD574\uB4DC\uB9AC\uC8E0. \uAE30\uD68C\uB97C <2>\uD68C \uC18C\uBAA8\uD558\uACA0\uC9C0\uB9CC\uC694."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "sealTarget",
        targetType: "userSelect",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [0, 0],
        remainTurn: 1
      },
      {
        type: "decreaseTurnLeft",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [1, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "XR286C4T",
    pickRatio: 35e4,
    range: [0, 0],
    descriptions: [
      "\uC774\uBC88 \uC5F0\uC131\uC5D0\uC11C \uBE44\uC6A9\uC774 \uB4E4\uC9C0 \uC54A\uACA0\uC5B4.",
      "\uC774\uBC88 \uC5F0\uC131\uC5D0\uB294 \uBE44\uC6A9 \uC18C\uBAA8\uAC00 \uC5C6\uC744 \uAC78\uC138.",
      "\uC774\uBC88 \uC5F0\uC131\uC5D0\uB294 \uBE44\uC6A9\uC774 \uB4E4\uC9C0 \uC54A\uC744 \uAC70\uC608\uC694."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 99,
    logics: [
      {
        type: "decreasePrice",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [-1e4, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "fCMn1qX+",
    pickRatio: 105e3,
    range: [0, 0],
    descriptions: [
      "\uB0A8\uC740 \uBAA8\uB4E0 \uC5F0\uC131\uC5D0\uC11C \uBE44\uC6A9\uC774 <20%> \uB35C \uB4E4\uACA0\uC5B4.",
      "\uB0A8\uC740 \uBAA8\uB4E0 \uC5F0\uC131\uC5D0\uC11C \uBE44\uC6A9 \uC18C\uBAA8\uAC00 <20%> \uC904\uC5B4\uB4E4 \uAC78\uC138.",
      "\uC774\uD6C4 \uBAA8\uB4E0 \uC5F0\uC131\uC5D0\uC11C \uBE44\uC6A9\uC774 <20%> \uB35C \uB4E4\uAC70\uC5D0\uC694."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 2,
    logics: [
      {
        type: "decreasePrice",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [-2e3, 0],
        remainTurn: 99
      }
    ]
  },
  {
    id: "AP6Jmn0t",
    pickRatio: 45e3,
    range: [0, 0],
    descriptions: [
      "\uB0A8\uC740 \uBAA8\uB4E0 \uC5F0\uC131\uC5D0\uC11C \uBE44\uC6A9\uC774 <40%> \uB35C \uB4E4\uACA0\uC5B4.",
      "\uB0A8\uC740 \uBAA8\uB4E0 \uC5F0\uC131\uC5D0\uC11C \uBE44\uC6A9 \uC18C\uBAA8\uAC00 <40%> \uC904\uC5B4\uB4E4 \uAC78\uC138.",
      "\uC774\uD6C4 \uBAA8\uB4E0 \uC5F0\uC131\uC5D0\uC11C \uBE44\uC6A9\uC774 <40%> \uB35C \uB4E4\uAC70\uC5D0\uC694."
    ],
    slotType: 3,
    type: "common",
    applyLimit: 2,
    logics: [
      {
        type: "decreasePrice",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [-4e3, 0],
        remainTurn: 99
      }
    ]
  },
  {
    id: "YHNPF0sg",
    pickRatio: 1e8,
    range: [0, 0],
    descriptions: [
      "\uC774\uC81C \uC2AC\uC2AC \uB9C8\uBB34\uB9AC\uD558\uB3C4\uB85D \uD558\uC9C0. <{0}> \uD6A8\uACFC\uB97C \uBD09\uC778\uD558\uACA0\uB2E4.",
      "\uC5F0\uAE08\uC220\uC774 \uB9C8\uBB34\uB9AC\uB418\uACE0 \uC788\uAD70. <{0}> \uD6A8\uACFC\uB97C \uBD09\uC778\uD558\uACA0\uB124.",
      "\uC774\uC81C \uB9C8\uBB34\uB9AC\uD558\uC8E0. <{0}> \uD6A8\uACFC\uB97C \uBD09\uC778\uD574\uB4DC\uB9AC\uC8E0."
    ],
    slotType: 3,
    type: "seal",
    applyLimit: 99,
    logics: [
      {
        type: "sealTarget",
        targetType: "proposed",
        targetCondition: 1,
        targetCount: 1,
        ratio: 0,
        value: [0, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "0GbCd4/9",
    pickRatio: 1e8,
    range: [0, 0],
    descriptions: [
      "\uC774\uC81C \uC2AC\uC2AC \uB9C8\uBB34\uB9AC\uD558\uB3C4\uB85D \uD558\uC9C0. <{1}> \uD6A8\uACFC\uB97C \uBD09\uC778\uD558\uACA0\uB2E4.",
      "\uC5F0\uAE08\uC220\uC774 \uB9C8\uBB34\uB9AC\uB418\uACE0 \uC788\uAD70. <{1}> \uD6A8\uACFC\uB97C \uBD09\uC778\uD558\uACA0\uB124.",
      "\uC774\uC81C \uB9C8\uBB34\uB9AC\uD558\uC8E0. <{1}> \uD6A8\uACFC\uB97C \uBD09\uC778\uD574\uB4DC\uB9AC\uC8E0."
    ],
    slotType: 3,
    type: "seal",
    applyLimit: 99,
    logics: [
      {
        type: "sealTarget",
        targetType: "proposed",
        targetCondition: 2,
        targetCount: 1,
        ratio: 0,
        value: [0, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "MukueyQj",
    pickRatio: 1e8,
    range: [0, 0],
    descriptions: [
      "\uC774\uC81C \uC2AC\uC2AC \uB9C8\uBB34\uB9AC\uD558\uB3C4\uB85D \uD558\uC9C0. <{2}> \uD6A8\uACFC\uB97C \uBD09\uC778\uD558\uACA0\uB2E4.",
      "\uC5F0\uAE08\uC220\uC774 \uB9C8\uBB34\uB9AC\uB418\uACE0 \uC788\uAD70. <{2}> \uD6A8\uACFC\uB97C \uBD09\uC778\uD558\uACA0\uB124.",
      "\uC774\uC81C \uB9C8\uBB34\uB9AC\uD558\uC8E0. <{2}> \uD6A8\uACFC\uB97C \uBD09\uC778\uD574\uB4DC\uB9AC\uC8E0."
    ],
    slotType: 3,
    type: "seal",
    applyLimit: 99,
    logics: [
      {
        type: "sealTarget",
        targetType: "proposed",
        targetCondition: 3,
        targetCount: 1,
        ratio: 0,
        value: [0, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "5l7Yfh2Z",
    pickRatio: 1e8,
    range: [0, 0],
    descriptions: [
      "\uC774\uC81C \uC2AC\uC2AC \uB9C8\uBB34\uB9AC\uD558\uB3C4\uB85D \uD558\uC9C0. <{3}> \uD6A8\uACFC\uB97C \uBD09\uC778\uD558\uACA0\uB2E4.",
      "\uC5F0\uAE08\uC220\uC774 \uB9C8\uBB34\uB9AC\uB418\uACE0 \uC788\uAD70. <{3}> \uD6A8\uACFC\uB97C \uBD09\uC778\uD558\uACA0\uB124.",
      "\uC774\uC81C \uB9C8\uBB34\uB9AC\uD558\uC8E0. <{3}> \uD6A8\uACFC\uB97C \uBD09\uC778\uD574\uB4DC\uB9AC\uC8E0."
    ],
    slotType: 3,
    type: "seal",
    applyLimit: 99,
    logics: [
      {
        type: "sealTarget",
        targetType: "proposed",
        targetCondition: 4,
        targetCount: 1,
        ratio: 0,
        value: [0, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "S0tcT4gJ",
    pickRatio: 1e8,
    range: [0, 0],
    descriptions: [
      "\uC774\uC81C \uC2AC\uC2AC \uB9C8\uBB34\uB9AC\uD558\uB3C4\uB85D \uD558\uC9C0. <{4}> \uD6A8\uACFC\uB97C \uBD09\uC778\uD558\uACA0\uB2E4.",
      "\uC5F0\uAE08\uC220\uC774 \uB9C8\uBB34\uB9AC\uB418\uACE0 \uC788\uAD70. <{4}> \uD6A8\uACFC\uB97C \uBD09\uC778\uD558\uACA0\uB124.",
      "\uC774\uC81C \uB9C8\uBB34\uB9AC\uD558\uC8E0. <{4}> \uD6A8\uACFC\uB97C \uBD09\uC778\uD574\uB4DC\uB9AC\uC8E0."
    ],
    slotType: 3,
    type: "seal",
    applyLimit: 99,
    logics: [
      {
        type: "sealTarget",
        targetType: "proposed",
        targetCondition: 5,
        targetCount: 1,
        ratio: 0,
        value: [0, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "vsB18riz",
    pickRatio: 1,
    range: [0, 0],
    descriptions: [
      "\uC774\uC81C \uC2AC\uC2AC \uB9C8\uBB34\uB9AC\uD558\uB3C4\uB85D \uD558\uC9C0. <\uB124\uAC00 \uACE0\uB974\uB294> \uD6A8\uACFC\uB97C \uBD09\uC778\uD558\uACA0\uB2E4.",
      "\uC5F0\uAE08\uC220\uC774 \uB9C8\uBB34\uB9AC\uB418\uACE0 \uC788\uAD70. <\uC790\uB124\uAC00 \uC120\uD0DD\uD55C> \uD6A8\uACFC\uB97C \uBD09\uC778\uD558\uACA0\uB124.",
      "\uC774\uC81C \uB9C8\uBB34\uB9AC\uD558\uC8E0. <\uB2F9\uC2E0\uC774 \uD0DD\uD55C> \uD6A8\uACFC\uB97C \uBD09\uC778\uD574\uB4DC\uB9AC\uC8E0."
    ],
    slotType: 3,
    type: "seal",
    applyLimit: 99,
    logics: [
      {
        type: "sealTarget",
        targetType: "userSelect",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [0, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "jpmWCt6l",
    pickRatio: 1,
    range: [0, 0],
    descriptions: [
      "(\uD604\uC790\uAC00 \uBA85\uC0C1\uC5D0 \uC7A0\uACA8 \uC788\uC2B5\uB2C8\uB2E4.)",
      "(\uD604\uC790\uAC00 \uBA85\uC0C1\uC5D0 \uC7A0\uACA8 \uC788\uC2B5\uB2C8\uB2E4.)",
      "(\uD604\uC790\uAC00 \uBA85\uC0C1\uC5D0 \uC7A0\uACA8 \uC788\uC2B5\uB2C8\uB2E4.)"
    ],
    slotType: 3,
    type: "exhausted",
    applyLimit: 99,
    logics: []
  },
  {
    id: "REEHEKll",
    pickRatio: 1,
    range: [0, 0],
    descriptions: [
      "(\uD604\uC790\uAC00 \uD68C\uBCF5 \uC911\uC785\uB2C8\uB2E4.)",
      "(\uD604\uC790\uAC00 \uD68C\uBCF5 \uC911\uC785\uB2C8\uB2E4.)",
      "(\uD604\uC790\uAC00 \uD68C\uBCF5 \uC911\uC785\uB2C8\uB2E4.)"
    ],
    slotType: 3,
    type: "exhausted",
    applyLimit: 99,
    logics: []
  },
  {
    id: "mT9NbAEJ",
    pickRatio: 1,
    range: [0, 0],
    descriptions: [
      "(\uD604\uC790\uAC00 \uD734\uC2DD\uC744 \uCDE8\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.)",
      "(\uD604\uC790\uAC00 \uD734\uC2DD\uC744 \uCDE8\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.)",
      "(\uD604\uC790\uAC00 \uD734\uC2DD\uC744 \uCDE8\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.)"
    ],
    slotType: 3,
    type: "exhausted",
    applyLimit: 99,
    logics: []
  },
  {
    id: "LyR8If14",
    pickRatio: 1,
    range: [0, 0],
    descriptions: [
      "(\uD604\uC790\uAC00 \uACE0\uB1CC\uC5D0 \uBE60\uC838 \uC788\uC2B5\uB2C8\uB2E4.)",
      "(\uD604\uC790\uAC00 \uACE0\uB1CC\uC5D0 \uBE60\uC838 \uC788\uC2B5\uB2C8\uB2E4.)",
      "(\uD604\uC790\uAC00 \uACE0\uB1CC\uC5D0 \uBE60\uC838 \uC788\uC2B5\uB2C8\uB2E4.)"
    ],
    slotType: 3,
    type: "exhausted",
    applyLimit: 99,
    logics: []
  },
  {
    id: "lkx3BHk1",
    pickRatio: 1,
    range: [0, 0],
    descriptions: [
      "(\uD604\uC790\uB294 \uC870\uC5B8\uC744 \uC219\uACE0\uC911\uC785\uB2C8\uB2E4.)",
      "(\uD604\uC790\uB294 \uC870\uC5B8\uC744 \uC219\uACE0\uC911\uC785\uB2C8\uB2E4.)",
      "(\uD604\uC790\uB294 \uC870\uC5B8\uC744 \uC219\uACE0\uC911\uC785\uB2C8\uB2E4.)"
    ],
    slotType: 3,
    type: "exhausted",
    applyLimit: 99,
    logics: []
  },
  {
    id: "7xKQ0O4a",
    pickRatio: 1,
    range: [0, 0],
    descriptions: [
      "(\uD604\uC790\uB294 \uC0C8\uB85C\uC6B4 \uC5F0\uAD6C\uB97C \uC9C4\uD589\uC911\uC785\uB2C8\uB2E4.)",
      "(\uD604\uC790\uB294 \uC0C8\uB85C\uC6B4 \uC5F0\uAD6C\uB97C \uC9C4\uD589\uC911\uC785\uB2C8\uB2E4.)",
      "(\uD604\uC790\uB294 \uC0C8\uB85C\uC6B4 \uC5F0\uAD6C\uB97C \uC9C4\uD589\uC911\uC785\uB2C8\uB2E4.)"
    ],
    slotType: 3,
    type: "exhausted",
    applyLimit: 99,
    logics: []
  },
  {
    id: "Ls6v0E6S",
    pickRatio: 1,
    range: [0, 0],
    descriptions: [
      "(\uD604\uC790\uB294 \uBB35\uC0C1\uC5D0 \uBE60\uC838 \uC788\uC2B5\uB2C8\uB2E4.)",
      "(\uD604\uC790\uB294 \uBB35\uC0C1\uC5D0 \uBE60\uC838 \uC788\uC2B5\uB2C8\uB2E4.)",
      "(\uD604\uC790\uB294 \uBB35\uC0C1\uC5D0 \uBE60\uC838 \uC788\uC2B5\uB2C8\uB2E4.)"
    ],
    slotType: 3,
    type: "exhausted",
    applyLimit: 99,
    logics: []
  },
  {
    id: "UD8aRfvQ",
    pickRatio: 1,
    range: [0, 0],
    descriptions: [
      "(\uD604\uC790\uB294 \uC0AC\uC0C9\uC5D0 \uBE60\uC838 \uC788\uC2B5\uB2C8\uB2E4.)",
      "(\uD604\uC790\uB294 \uC0AC\uC0C9\uC5D0 \uBE60\uC838 \uC788\uC2B5\uB2C8\uB2E4.)",
      "(\uD604\uC790\uB294 \uC0AC\uC0C9\uC5D0 \uBE60\uC838 \uC788\uC2B5\uB2C8\uB2E4.)"
    ],
    slotType: 3,
    type: "exhausted",
    applyLimit: 99,
    logics: []
  },
  {
    id: "h/hk94ec",
    pickRatio: 85e4,
    range: [0, 0],
    descriptions: [
      "\uB0A8\uC740 \uBAA8\uB4E0 \uC5F0\uC131\uC5D0\uC11C <\uB124\uAC00 \uACE0\uB974\uB294> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <15>% \uC62C\uB824\uC8FC\uC9C0.",
      "\uB0A8\uC740 \uBAA8\uB4E0 \uC5F0\uC131\uC5D0\uC11C <\uC790\uB124\uAC00 \uC120\uD0DD\uD55C> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <15>% \uC62C\uB9AC\uACA0\uB124.",
      "\uB0A8\uC740 \uBAA8\uB4E0 \uC5F0\uC131\uC5D0\uC11C <\uB2F9\uC2E0\uC774 \uD0DD\uD55C> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <15>% \uC62C\uB824\uB4DC\uB9AC\uC8E0."
    ],
    slotType: 3,
    type: "lawful",
    applyLimit: 99,
    logics: [
      {
        type: "mutateProb",
        targetType: "userSelect",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [1500, 0],
        remainTurn: 99
      }
    ]
  },
  {
    id: "Cztb50e7",
    pickRatio: 85e4,
    range: [0, 0],
    descriptions: [
      "\uB0A8\uC740 \uBAA8\uB4E0 \uC5F0\uC131\uC5D0\uC11C <\uB124\uAC00 \uACE0\uB974\uB294> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <20>% \uB0B4\uB824\uC8FC\uC9C0.",
      "\uB0A8\uC740 \uBAA8\uB4E0 \uC5F0\uC131\uC5D0\uC11C <\uC790\uB124\uAC00 \uC120\uD0DD\uD55C> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <20>% \uB0B4\uB9AC\uACA0\uB124.",
      "\uB0A8\uC740 \uBAA8\uB4E0 \uC5F0\uC131\uC5D0\uC11C <\uB2F9\uC2E0\uC774 \uD0DD\uD55C> \uD6A8\uACFC\uAC00 \uC5F0\uC131\uB420 \uD655\uB960\uC744 <20>% \uB0B4\uB824\uB4DC\uB9AC\uC8E0."
    ],
    slotType: 3,
    type: "lawful",
    applyLimit: 99,
    logics: [
      {
        type: "mutateProb",
        targetType: "userSelect",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [-2e3, 0],
        remainTurn: 99
      }
    ]
  },
  {
    id: "sbi7g0nQ",
    pickRatio: 6e5,
    range: [0, 0],
    descriptions: [
      "\uB0A8\uC740 \uBAA8\uB4E0 \uC5F0\uC131\uC5D0\uC11C <\uB124\uAC00 \uACE0\uB974\uB294> \uD6A8\uACFC\uC758 \uB300\uC131\uACF5 \uD655\uB960\uC744 <25>% \uC62C\uB824\uC8FC\uC9C0.",
      "\uB0A8\uC740 \uBAA8\uB4E0 \uC5F0\uC131\uC5D0\uC11C <\uC790\uB124\uAC00 \uC120\uD0DD\uD55C> \uD6A8\uACFC\uC758 \uB300\uC131\uACF5 \uD655\uB960\uC744 <25>% \uC62C\uB9AC\uACA0\uB124.",
      "\uB0A8\uC740 \uBAA8\uB4E0 \uC5F0\uC131\uC5D0\uC11C <\uB2F9\uC2E0\uC774 \uD0DD\uD55C> \uD6A8\uACFC\uC758 \uB300\uC131\uACF5 \uD655\uB960\uC744 <25>% \uC62C\uB824\uB4DC\uB9AC\uC8E0."
    ],
    slotType: 3,
    type: "lawful",
    applyLimit: 99,
    logics: [
      {
        type: "mutateLuckyRatio",
        targetType: "userSelect",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [2500, 0],
        remainTurn: 99
      }
    ]
  },
  {
    id: "loHKiru6",
    pickRatio: 21e4,
    range: [0, 0],
    descriptions: [
      "\uB0A8\uC740 \uBAA8\uB4E0 \uC5F0\uC131\uC5D0\uC11C <\uBAA8\uB4E0> \uD6A8\uACFC\uC758 \uB300\uC131\uACF5 \uD655\uB960\uC744 <15>% \uC62C\uB824\uC8FC\uC9C0.",
      "\uB0A8\uC740 \uBAA8\uB4E0 \uC5F0\uC131\uC5D0\uC11C <\uBAA8\uB4E0> \uD6A8\uACFC\uC758 \uB300\uC131\uACF5 \uD655\uB960\uC744 <15>% \uC62C\uB9AC\uACA0\uB124.",
      "\uB0A8\uC740 \uBAA8\uB4E0 \uC5F0\uC131\uC5D0\uC11C <\uBAA8\uB4E0> \uD6A8\uACFC\uC758 \uB300\uC131\uACF5 \uD655\uB960\uC744 <15>% \uC62C\uB824\uB4DC\uB9AC\uC8E0."
    ],
    slotType: 3,
    type: "lawful",
    applyLimit: 99,
    logics: [
      {
        type: "mutateLuckyRatio",
        targetType: "random",
        targetCondition: 0,
        targetCount: 5,
        ratio: 0,
        value: [1500, 0],
        remainTurn: 99
      }
    ]
  },
  {
    id: "6WfZZIUE",
    pickRatio: 42e4,
    range: [0, 0],
    descriptions: [
      "\uB0A8\uC740 \uBAA8\uB4E0 \uC5F0\uC131\uC5D0\uC11C <1, 3, 5\uBC88> \uD6A8\uACFC\uC758 \uB300\uC131\uACF5 \uD655\uB960\uC744 <15>% \uC62C\uB824\uC8FC\uC9C0.",
      "\uB0A8\uC740 \uBAA8\uB4E0 \uC5F0\uC131\uC5D0\uC11C <1, 3, 5\uBC88> \uD6A8\uACFC\uC758 \uB300\uC131\uACF5 \uD655\uB960\uC744 <15>% \uC62C\uB9AC\uACA0\uB124.",
      "\uB0A8\uC740 \uBAA8\uB4E0 \uC5F0\uC131\uC5D0\uC11C <1, 3, 5\uBC88> \uD6A8\uACFC\uC758 \uB300\uC131\uACF5 \uD655\uB960\uC744 <15>% \uC62C\uB824\uB4DC\uB9AC\uC8E0."
    ],
    slotType: 3,
    type: "lawful",
    applyLimit: 99,
    logics: [
      {
        type: "mutateLuckyRatio",
        targetType: "oneThreeFive",
        targetCondition: 0,
        targetCount: 3,
        ratio: 0,
        value: [1500, 0],
        remainTurn: 99
      }
    ]
  },
  {
    id: "TNjx4HLm",
    pickRatio: 77e4,
    range: [0, 0],
    descriptions: [
      "\uB0A8\uC740 \uBAA8\uB4E0 \uC5F0\uC131\uC5D0\uC11C <2, 4\uBC88> \uD6A8\uACFC\uC758 \uB300\uC131\uACF5 \uD655\uB960\uC744 <15>% \uC62C\uB824\uC8FC\uC9C0.",
      "\uB0A8\uC740 \uBAA8\uB4E0 \uC5F0\uC131\uC5D0\uC11C <2, 4\uBC88> \uD6A8\uACFC\uC758 \uB300\uC131\uACF5 \uD655\uB960\uC744 <15>% \uC62C\uB9AC\uACA0\uB124.",
      "\uB0A8\uC740 \uBAA8\uB4E0 \uC5F0\uC131\uC5D0\uC11C <2, 4\uBC88> \uD6A8\uACFC\uC758 \uB300\uC131\uACF5 \uD655\uB960\uC744 <15>% \uC62C\uB824\uB4DC\uB9AC\uC8E0."
    ],
    slotType: 3,
    type: "lawful",
    applyLimit: 99,
    logics: [
      {
        type: "mutateLuckyRatio",
        targetType: "twoFour",
        targetCondition: 0,
        targetCount: 2,
        ratio: 0,
        value: [1500, 0],
        remainTurn: 99
      }
    ]
  },
  {
    id: "xQkReT+j",
    pickRatio: 5e5,
    range: [0, 0],
    descriptions: [
      "\uC774\uBC88\uC5D0\uB294 <\uB124\uAC00 \uACE0\uB974\uB294> \uD6A8\uACFC\uB97C <2>\uB2E8\uACC4 \uC5F0\uC131\uD574\uC8FC\uACA0\uC5B4.",
      "\uC774\uBC88\uC5D0\uB294 <\uC790\uB124\uAC00 \uC120\uD0DD\uD55C> \uD6A8\uACFC\uB97C <2>\uB2E8\uACC4 \uC5F0\uC131\uD558\uACA0\uB124.",
      "\uC774\uBC88\uC5D0\uB294 <\uB2F9\uC2E0\uC774 \uD0DD\uD55C> \uD6A8\uACFC\uB97C <2>\uB2E8\uACC4 \uC5F0\uC131\uD574\uB4DC\uB9AC\uC8E0."
    ],
    slotType: 3,
    type: "lawful",
    applyLimit: 99,
    logics: [
      {
        type: "setEnchantTargetAndAmount",
        targetType: "userSelect",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [2, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "+Ip1EgL4",
    pickRatio: 5e5,
    range: [0, 0],
    descriptions: [
      "\uC774\uBC88 \uC5F0\uC131\uC740 \uC5F0\uC131 \uAE30\uD68C\uB97C \uC18C\uBAA8\uD558\uC9C0 \uC54A\uC544.",
      "\uC774\uBC88 \uC5F0\uC131\uC740 \uAE30\uD68C \uC18C\uBAA8 \uC5C6\uC774 \uC9C4\uD589\uD574\uC8FC\uACA0\uB124.",
      "\uC774\uBC88\uC5D0\uB294 \uAE30\uD68C\uB97C \uC18C\uBAA8\uD558\uC9C0 \uC54A\uACE0 \uC5F0\uC131\uD560\uAC8C\uC694."
    ],
    slotType: 3,
    type: "lawful",
    applyLimit: 99,
    logics: [
      {
        type: "decreaseTurnLeft",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [-1, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "D3OzU8G0",
    pickRatio: 722500,
    range: [0, 0],
    descriptions: [
      "<\uB124\uAC00 \uACE0\uB974\uB294> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB824\uC8FC\uC9C0.",
      "<\uC790\uB124\uAC00 \uC120\uD0DD\uD55C> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB9AC\uACA0\uB124.",
      "<\uB2F9\uC2E0\uC774 \uD0DD\uD55C> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB824\uB4DC\uB9AC\uC8E0."
    ],
    slotType: 3,
    type: "lawful",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetWithRatio",
        targetType: "userSelect",
        targetCondition: 0,
        targetCount: 1,
        ratio: 1e4,
        value: [1, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "ofyisuN6",
    pickRatio: 127500,
    range: [0, 0],
    descriptions: [
      "<\uB124\uAC00 \uACE0\uB974\uB294> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <2> \uC62C\uB824\uC8FC\uC9C0.",
      "<\uC790\uB124\uAC00 \uC120\uD0DD\uD55C> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <2> \uC62C\uB9AC\uACA0\uB124.",
      "<\uB2F9\uC2E0\uC774 \uD0DD\uD55C> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <2> \uC62C\uB824\uB4DC\uB9AC\uC8E0."
    ],
    slotType: 3,
    type: "lawful",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetWithRatio",
        targetType: "userSelect",
        targetCondition: 0,
        targetCount: 1,
        ratio: 1e4,
        value: [2, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "5kSp87eD",
    pickRatio: 15e4,
    range: [0, 0],
    descriptions: [
      "<\uCD5C\uACE0 \uB2E8\uACC4> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <2> \uC62C\uB824\uC8FC\uC9C0.",
      "<\uCD5C\uACE0 \uB2E8\uACC4> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <2> \uC62C\uB9AC\uACA0\uB124.",
      "<\uCD5C\uACE0 \uB2E8\uACC4> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C <2> \uC62C\uB824\uB4DC\uB9AC\uC8E0."
    ],
    slotType: 3,
    type: "lawful",
    applyLimit: 99,
    logics: [
      {
        type: "increaseMaxAndDecreaseTarget",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [2, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "/zilvZLj",
    pickRatio: 1e5,
    range: [0, 0],
    descriptions: [
      "\uC774\uBC88\uC5D0 \uC5F0\uC131\uB418\uB294 \uD6A8\uACFC\uB294 <3>\uB2E8\uACC4 \uC62C\uB77C\uAC08\uAC70\uC57C.",
      "\uC774\uBC88\uC5D0 \uC5F0\uC131\uB418\uB294 \uD6A8\uACFC\uB294 <3>\uB2E8\uACC4 \uC62C\uB77C\uAC08\uAC78\uC138.",
      "\uC774\uBC88\uC5D0 \uC5F0\uC131\uB418\uB294 \uD6A8\uACFC\uB294 <3>\uB2E8\uACC4 \uC62C\uB77C\uAC08 \uAC70\uC5D0\uC694."
    ],
    slotType: 3,
    type: "lawful",
    applyLimit: 99,
    logics: [
      {
        type: "setEnchantIncreaseAmount",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [3, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "+8utgKU6",
    pickRatio: 1e5,
    range: [0, 0],
    descriptions: [
      "\uC774\uBC88\uC5D0\uB294 <3>\uAC1C\uC758 \uD6A8\uACFC\uB97C \uB3D9\uC2DC\uC5D0 \uC5F0\uC131\uD558\uACA0\uC5B4.",
      "\uC774\uBC88\uC5D0\uB294 <3>\uAC1C\uC758 \uD6A8\uACFC\uB97C \uB3D9\uC2DC\uC5D0 \uC5F0\uC131\uD558\uACA0\uB124.",
      "\uC774\uBC88\uC5D0\uB294 <3>\uAC1C\uC758 \uD6A8\uACFC\uB97C \uB3D9\uC2DC\uC5D0 \uC5F0\uC131\uD574\uB4DC\uB9AC\uC8E0."
    ],
    slotType: 3,
    type: "lawful",
    applyLimit: 99,
    logics: [
      {
        type: "setEnchantEffectCount",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [3, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "XIp5VDkc",
    pickRatio: 2e6,
    range: [0, 0],
    descriptions: [
      "\uB0A8\uC740 \uBAA8\uB4E0 \uC5F0\uC131\uC5D0\uC11C \uBE44\uC6A9\uC774 \uB4E4\uC9C0 \uC54A\uACA0\uC5B4.",
      "\uB0A8\uC740 \uBAA8\uB4E0 \uC5F0\uC131\uC5D0\uC11C \uBE44\uC6A9 \uC18C\uBAA8\uAC00 \uC5C6\uC744 \uAC78\uC138.",
      "\uC774\uD6C4 \uBAA8\uB4E0 \uC5F0\uC131\uC5D0\uC11C \uBE44\uC6A9\uC774 \uB4E4\uC9C0 \uC54A\uC744 \uAC70\uC5D0\uC694."
    ],
    slotType: 3,
    type: "lawful",
    applyLimit: 1,
    logics: [
      {
        type: "decreasePrice",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [-1e4, 0],
        remainTurn: 99
      }
    ]
  },
  {
    id: "TaZ9BkBv",
    pickRatio: 1e5,
    range: [0, 0],
    descriptions: [
      "<\uB124\uAC00 \uACE0\uB974\uB294> \uD6A8\uACFC\uB97C \uBD09\uC778\uD558\uACA0\uB2E4.",
      "<\uC790\uB124\uAC00 \uC120\uD0DD\uD55C> \uD6A8\uACFC\uB97C \uBD09\uC778\uD558\uACA0\uB124.",
      "<\uB2F9\uC2E0\uC774 \uD0DD\uD55C> \uD6A8\uACFC\uB97C \uBD09\uC778\uD574\uB4DC\uB9AC\uC8E0."
    ],
    slotType: 3,
    type: "lawful",
    applyLimit: 99,
    logics: [
      {
        type: "sealTarget",
        targetType: "userSelect",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [0, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "ycA6pw+q",
    pickRatio: 6e5,
    range: [0, 0],
    descriptions: [
      "\uC870\uC5B8\uC774 \uB354 \uD544\uC694\uD55C\uAC00? \uB2E4\uB978 \uC870\uC5B8 \uBCF4\uAE30 \uD69F\uC218\uB97C <2>\uD68C \uB298\uB824\uC8FC\uC9C0.",
      "\uC790\uB124\uC758 \uB2E4\uB978 \uC870\uC5B8 \uBCF4\uAE30 \uD69F\uC218\uB97C <2>\uD68C \uB298\uB824\uC8FC\uACA0\uB124.",
      "\uD56D\uC0C1 \uC870\uC5B8\uC5D0 \uADC0 \uAE30\uC6B8\uC5EC\uC57C \uD574\uC694. \uB2F9\uC2E0\uC758 \uB2E4\uB978 \uC870\uC5B8 \uBCF4\uAE30 \uD69F\uC218\uB97C <2>\uD68C \uB298\uB824\uB4DC\uB9AC\uC8E0."
    ],
    slotType: 3,
    type: "lawful",
    applyLimit: 99,
    logics: [
      {
        type: "increaseReroll",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [2, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "EzgocQZ1",
    pickRatio: 14e5,
    range: [0, 0],
    descriptions: [
      "\uC870\uC5B8\uC774 \uB354 \uD544\uC694\uD55C\uAC00? \uB2E4\uB978 \uC870\uC5B8 \uBCF4\uAE30 \uD69F\uC218\uB97C <1>\uD68C \uB298\uB824\uC8FC\uC9C0.",
      "\uC790\uB124\uC758 \uB2E4\uB978 \uC870\uC5B8 \uBCF4\uAE30 \uD69F\uC218\uB97C <1>\uD68C \uB298\uB824\uC8FC\uACA0\uB124.",
      "\uD56D\uC0C1 \uC870\uC5B8\uC5D0 \uADC0 \uAE30\uC6B8\uC5EC\uC57C \uD574\uC694. \uB2F9\uC2E0\uC758 \uB2E4\uB978 \uC870\uC5B8 \uBCF4\uAE30 \uD69F\uC218\uB97C <1>\uD68C \uB298\uB824\uB4DC\uB9AC\uC8E0."
    ],
    slotType: 3,
    type: "lawful",
    applyLimit: 99,
    logics: [
      {
        type: "increaseReroll",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [1, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "mYuyjIL/",
    pickRatio: 1e8,
    range: [0, 0],
    descriptions: [
      "\uC774\uC81C \uC2AC\uC2AC \uB9C8\uBB34\uB9AC\uD558\uB3C4\uB85D \uD558\uC9C0. <\uB124\uAC00 \uACE0\uB974\uB294> \uD6A8\uACFC\uB97C \uBD09\uC778\uD558\uACE0, \uC774\uBC88 \uC5F0\uC131\uC740 \uAE30\uD68C\uB97C \uC18C\uBAA8\uD558\uC9C0 \uC54A\uC744 \uAC70\uC57C.",
      "\uC5F0\uAE08\uC220\uC774 \uB9C8\uBB34\uB9AC\uB418\uACE0 \uC788\uAD70. <\uC790\uB124\uAC00 \uC120\uD0DD\uD55C> \uD6A8\uACFC\uB97C \uBD09\uC778\uD558\uACE0, \uC774\uBC88 \uC5F0\uC131\uC740 \uAE30\uD68C \uC18C\uBAA8 \uC5C6\uC774 \uC9C4\uD589\uD574\uC8FC\uACA0\uB124.",
      "\uC774\uC81C \uB9C8\uBB34\uB9AC\uD558\uC8E0. <\uB2F9\uC2E0\uC774 \uD0DD\uD55C> \uD6A8\uACFC\uB97C \uBD09\uC778\uD558\uACE0, \uC774\uBC88 \uC5F0\uC131\uC740 \uAE30\uD68C\uB97C \uC18C\uBAA8\uD558\uC9C0 \uC54A\uACE0 \uC9C4\uD589\uD560\uAC8C\uC694."
    ],
    slotType: 3,
    type: "lawfulSeal",
    applyLimit: 99,
    logics: [
      {
        type: "sealTarget",
        targetType: "userSelect",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [0, 0],
        remainTurn: 1
      },
      {
        type: "decreaseTurnLeft",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [-1, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "tDM7WU8A",
    pickRatio: 1e8,
    range: [0, 0],
    descriptions: [
      "\uC774\uC81C \uC2AC\uC2AC \uB9C8\uBB34\uB9AC\uD558\uB3C4\uB85D \uD558\uC9C0. <\uB124\uAC00 \uACE0\uB974\uB294> \uD6A8\uACFC\uB97C \uBD09\uC778\uD558\uACE0, \uC774\uBC88\uC5D0 \uC5F0\uC131\uB418\uB294 \uD6A8\uACFC\uB294 <2>\uB2E8\uACC4 \uC62C\uB77C\uAC08\uAC70\uC57C.",
      "\uC5F0\uAE08\uC220\uC774 \uB9C8\uBB34\uB9AC\uB418\uACE0 \uC788\uAD70. <\uC790\uB124\uAC00 \uC120\uD0DD\uD55C> \uD6A8\uACFC\uB97C \uBD09\uC778\uD558\uACE0, \uC774\uBC88\uC5D0 \uC5F0\uC131\uB418\uB294 \uD6A8\uACFC\uB294 <2>\uB2E8\uACC4 \uC62C\uB77C\uAC08 \uAC78\uC138.",
      "\uC774\uC81C \uB9C8\uBB34\uB9AC\uD558\uC8E0. <\uB2F9\uC2E0\uC774 \uD0DD\uD55C> \uD6A8\uACFC\uB97C \uBD09\uC778\uD558\uACE0, \uC774\uBC88\uC5D0 \uC5F0\uC131\uB418\uB294 \uD6A8\uACFC\uB294 <2>\uB2E8\uACC4 \uC62C\uB77C\uAC08 \uAC70\uC5D0\uC694."
    ],
    slotType: 3,
    type: "lawfulSeal",
    applyLimit: 99,
    logics: [
      {
        type: "sealTarget",
        targetType: "userSelect",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [0, 0],
        remainTurn: 1
      },
      {
        type: "setEnchantIncreaseAmount",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [2, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "jDRIeRQj",
    pickRatio: 1e8,
    range: [0, 0],
    descriptions: [
      "\uC774\uC81C \uC2AC\uC2AC \uB9C8\uBB34\uB9AC\uD558\uB3C4\uB85D \uD558\uC9C0. <\uB124\uAC00 \uACE0\uB974\uB294> \uD6A8\uACFC\uB97C \uBD09\uC778\uD558\uACE0, \uC774\uBC88 \uC5F0\uC131\uC740 <2>\uAC1C\uC758 \uD6A8\uACFC\uB97C \uB3D9\uC2DC\uC5D0 \uC5F0\uC131\uD558\uACA0\uC5B4.",
      "\uC5F0\uAE08\uC220\uC774 \uB9C8\uBB34\uB9AC\uB418\uACE0 \uC788\uAD70. <\uC790\uB124\uAC00 \uC120\uD0DD\uD55C> \uD6A8\uACFC\uB97C \uBD09\uC778\uD558\uACE0, \uC774\uBC88 \uC5F0\uC131\uC740 <2>\uAC1C\uC758 \uD6A8\uACFC\uB97C \uB3D9\uC2DC\uC5D0 \uC5F0\uC131\uD558\uACA0\uB124.",
      "\uC774\uC81C \uB9C8\uBB34\uB9AC\uD558\uC8E0. <\uB2F9\uC2E0\uC774 \uD0DD\uD55C> \uD6A8\uACFC\uB97C \uBD09\uC778\uD558\uACE0, \uC774\uBC88 \uC5F0\uC131\uC740 <2>\uAC1C\uC758 \uD6A8\uACFC\uB97C \uB3D9\uC2DC\uC5D0 \uC5F0\uC131\uD574\uB4DC\uB9AC\uC8E0."
    ],
    slotType: 3,
    type: "lawfulSeal",
    applyLimit: 99,
    logics: [
      {
        type: "sealTarget",
        targetType: "userSelect",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [0, 0],
        remainTurn: 1
      },
      {
        type: "setEnchantEffectCount",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [2, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "WMJBJxRd",
    pickRatio: 1,
    range: [0, 0],
    descriptions: [
      "\uC774\uC81C \uC2AC\uC2AC \uB9C8\uBB34\uB9AC\uD558\uB3C4\uB85D \uD558\uC9C0. <\uB124\uAC00 \uACE0\uB974\uB294> \uD6A8\uACFC\uB97C \uBD09\uC778\uD558\uACA0\uB2E4.",
      "\uC5F0\uAE08\uC220\uC774 \uB9C8\uBB34\uB9AC\uB418\uACE0 \uC788\uAD70. <\uC790\uB124\uAC00 \uC120\uD0DD\uD55C> \uD6A8\uACFC\uB97C \uBD09\uC778\uD558\uACA0\uB124.",
      "\uC774\uC81C \uB9C8\uBB34\uB9AC\uD558\uC8E0. <\uB2F9\uC2E0\uC774 \uD0DD\uD55C> \uD6A8\uACFC\uB97C \uBD09\uC778\uD574\uB4DC\uB9AC\uC8E0."
    ],
    slotType: 3,
    type: "lawfulSeal",
    applyLimit: 99,
    logics: [
      {
        type: "sealTarget",
        targetType: "userSelect",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [0, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "duDeuWzL",
    pickRatio: 1e6,
    range: [0, 0],
    descriptions: [
      "<\uC784\uC758\uC758 \uD6A8\uACFC> <1>\uAC1C\uC758 \uBD09\uC778\uC744 \uD574\uC81C\uD558\uACE0, \uB2E4\uB978 \uD6A8\uACFC <1>\uAC1C\uB97C \uBD09\uC778\uD574\uC8FC\uC9C0.",
      "<\uC784\uC758\uC758 \uD6A8\uACFC> <1>\uAC1C\uC758 \uBD09\uC778\uC744 \uD574\uC81C\uD558\uACA0\uB124. \uB300\uC2E0 \uB2E4\uB978 \uD6A8\uACFC <1>\uAC1C\uB97C \uBD09\uC778\uD558\uB3C4\uB85D \uD558\uC9C0.",
      "<\uC784\uC758\uC758 \uD6A8\uACFC> <1>\uAC1C\uC758 \uBD09\uC778\uC744 \uD574\uC81C\uD558\uACA0\uC5B4\uC694. \uB300\uC2E0 \uB2E4\uB978 \uD6A8\uACFC <1>\uAC1C\uB97C \uBD09\uC778\uD558\uC8E0."
    ],
    slotType: 3,
    type: "chaos",
    applyLimit: 99,
    logics: [
      {
        type: "unsealAndSealOther",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [0, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "Q1+1MRri",
    pickRatio: 125e4,
    range: [0, 0],
    descriptions: [
      "<\uBAA8\uB4E0 \uD6A8\uACFC>\uC758 \uB2E8\uACC4\uB97C \uB4A4\uC11E\uB3C4\uB85D \uD558\uC9C0. \uC5B4\uB5BB\uAC8C \uB4A4\uC11E\uC77C\uC9C0 \uBCF4\uC790\uACE0.",
      "<\uBAA8\uB4E0 \uD6A8\uACFC>\uC758 \uB2E8\uACC4\uB97C \uB4A4\uC11E\uACA0\uB124. \uC88B\uC740 \uACB0\uACFC\uAC00 \uB098\uC624\uAE38 \uBC14\uB77C\uB124.",
      "<\uBAA8\uB4E0 \uD6A8\uACFC>\uC758 \uB2E8\uACC4\uB97C \uB4A4\uC11E\uC5B4\uB4DC\uB9AC\uC8E0. \uC6D0\uD558\uB294 \uACB0\uACFC\uAC00 \uB098\uC624\uAE38 \uBC14\uB77C\uC694."
    ],
    slotType: 3,
    type: "chaos",
    applyLimit: 99,
    logics: [
      {
        type: "shuffleAll",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [0, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "6qTJU2I2",
    pickRatio: 125e4,
    range: [0, 0],
    descriptions: [
      "<\uBAA8\uB4E0 \uD6A8\uACFC>\uC758 \uB2E8\uACC4\uB97C \uC7AC\uBD84\uBC30\uD558\uC9C0. \uC5B4\uB5BB\uAC8C \uB098\uB260\uC9C0 \uBCF4\uC790\uACE0.",
      "<\uBAA8\uB4E0 \uD6A8\uACFC>\uC758 \uB2E8\uACC4\uB97C \uC7AC\uBD84\uBC30\uD558\uACA0\uB124. \uC88B\uC740 \uACB0\uACFC\uAC00 \uB098\uC624\uAE38 \uBC14\uB77C\uB124.",
      "<\uBAA8\uB4E0 \uD6A8\uACFC>\uC758 \uB2E8\uACC4\uB97C \uC7AC\uBD84\uBC30\uD558\uC8E0. \uC6D0\uD558\uB294 \uACB0\uACFC\uAC00 \uB098\uC624\uAE38 \uBC14\uB77C\uC694."
    ],
    slotType: 3,
    type: "chaos",
    applyLimit: 99,
    logics: [
      {
        type: "redistributeAll",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [0, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "SlBzYKh5",
    pickRatio: 5e5,
    range: [0, 0],
    descriptions: [
      "<\uC784\uC758\uC758 \uD6A8\uACFC> <1>\uAC1C\uC758 \uB2E8\uACC4\uB97C <2> \uC62C\uB824\uC8FC\uC9C0. \uC5B4\uB5A4 \uD6A8\uACFC\uC77C \uC9C0 \uBCF4\uC790\uACE0.",
      "<\uC784\uC758\uC758 \uD6A8\uACFC> <1>\uAC1C\uC758 \uB2E8\uACC4\uB97C <2> \uC62C\uB9AC\uACA0\uB124.",
      "<\uC784\uC758\uC758 \uD6A8\uACFC> <1>\uAC1C\uC758 \uB2E8\uACC4\uB97C <2> \uC62C\uB824\uB4DC\uB9AC\uC8E0. \uC5B4\uB5A4 \uD6A8\uACFC\uC77C\uC9C0\uB294 \uC54C \uC218 \uC5C6\uC5B4\uC694."
    ],
    slotType: 3,
    type: "chaos",
    applyLimit: 99,
    logics: [
      {
        type: "increaseTargetWithRatio",
        targetType: "random",
        targetCondition: 0,
        targetCount: 1,
        ratio: 1e4,
        value: [2, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "tyuFeHnJ",
    pickRatio: 1e6,
    range: [0, 0],
    descriptions: [
      "\uC774\uB300\uB860 \uC548\uB418\uACA0\uC5B4. \uC5D8\uB9AD\uC11C\uC758 \uD6A8\uACFC\uC640 \uB2E8\uACC4\uB97C <\uCD08\uAE30\uD654>\uD558\uACA0\uB2E4.",
      "\uD750\uB984\uC774 \uC88B\uC9C0 \uC54A\uAD70.  \uC5D8\uB9AD\uC11C\uC758 \uD6A8\uACFC\uC640 \uB2E8\uACC4\uB97C <\uCD08\uAE30\uD654>\uD558\uACA0\uB124.",
      "\uACE4\uB780\uD55C \uC0C1\uD669\uC774\uC5D0\uC694. \uC5D8\uB9AD\uC11C\uC758 \uD6A8\uACFC\uC640 \uB2E8\uACC4\uB97C <\uCD08\uAE30\uD654>\uD558\uB3C4\uB85D \uD558\uC8E0."
    ],
    slotType: 3,
    type: "chaos",
    applyLimit: 99,
    logics: [
      {
        type: "restart",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [0, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "WgHhNIkc",
    pickRatio: 1e6,
    range: [0, 0],
    descriptions: [
      "<\uB124\uAC00 \uACE0\uB974\uB294> \uC2AC\uB86F\uC758 \uD6A8\uACFC\uB97C \uBC14\uAFD4\uC8FC\uC9C0. \uC5B4\uB5A4 \uD6A8\uACFC\uC77C\uC9C0 \uBCF4\uC790\uACE0.",
      "<\uC790\uB124\uAC00 \uC120\uD0DD\uD55C> \uC2AC\uB86F\uC758 \uD6A8\uACFC\uB97C \uBCC0\uACBD\uD558\uACA0\uB124. \uC88B\uC740 \uACB0\uACFC\uAC00 \uB098\uC624\uAE38 \uBC14\uB77C\uB124.",
      "<\uB2F9\uC2E0\uC774 \uD0DD\uD55C> \uC2AC\uB86F\uC758 \uD6A8\uACFC\uB97C \uBC14\uAFD4\uBCF4\uC8E0. \uC6D0\uD558\uB294 \uACB0\uACFC\uAC00 \uB098\uC624\uAE38 \uBC14\uB77C\uC694."
    ],
    slotType: 3,
    type: "chaos",
    applyLimit: 99,
    logics: [
      {
        type: "changeEffect",
        targetType: "userSelect",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [0, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "dzmT6oDh",
    pickRatio: 15e5,
    range: [0, 0],
    descriptions: [
      "\uB0B4 \uD798\uC744 \uBAA8\uB450 <\uC18C\uC9C4>\uD558\uACA0\uB2E4. \uB300\uC2E0, <\uB124\uAC00 \uACE0\uB974\uB294> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C [<0>~<+4>] \uC911 \uD558\uB098\uB9CC\uD07C \uC62C\uB824\uC8FC\uC9C0.",
      "\uB0B4 \uD798\uC744 \uBAA8\uB450 <\uC18C\uC9C4>\uD558\uACA0\uB124. \uB300\uC2E0, <\uC790\uB124\uAC00 \uC120\uD0DD\uD55C> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C [<0>~<+4>] \uC911 \uD558\uB098\uB9CC\uD07C \uC62C\uB9B4\uAC78\uC138.",
      "\uC81C \uD798\uC744 \uBAA8\uB450 <\uC18C\uC9C4>\uD558\uACA0\uC5B4\uC694. \uB300\uC2E0, <\uB2F9\uC2E0\uC774 \uD0DD\uD55C> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C [<0>~<+4>] \uC911 \uD558\uB098\uB9CC\uD07C \uC62C\uB824\uB4DC\uB9AC\uC8E0."
    ],
    slotType: 0,
    type: "chaos",
    applyLimit: 1,
    logics: [
      {
        type: "increaseTargetRanged",
        targetType: "userSelect",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [0, 4],
        remainTurn: 1
      },
      {
        type: "exhaust",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [1, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "iK1sybsd",
    pickRatio: 15e5,
    range: [0, 0],
    descriptions: [
      "\uB0B4 \uD798\uC744 \uBAA8\uB450 <\uC18C\uC9C4>\uD558\uACA0\uB2E4. \uB300\uC2E0, <\uB124\uAC00 \uACE0\uB974\uB294> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C [<+2>~<+3>] \uC911 \uD558\uB098\uB9CC\uD07C \uC62C\uB824\uC8FC\uC9C0.",
      "\uB0B4 \uD798\uC744 \uBAA8\uB450 <\uC18C\uC9C4>\uD558\uACA0\uB124. \uB300\uC2E0, <\uC790\uB124\uAC00 \uC120\uD0DD\uD55C> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C [<+2>~<+3>] \uC911 \uD558\uB098\uB9CC\uD07C \uC62C\uB9B4\uAC78\uC138.",
      "\uC81C \uD798\uC744 \uBAA8\uB450 <\uC18C\uC9C4>\uD558\uACA0\uC5B4\uC694. \uB300\uC2E0, <\uB2F9\uC2E0\uC774 \uD0DD\uD55C> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C [<+2>~<+3>] \uC911 \uD558\uB098\uB9CC\uD07C \uC62C\uB824\uB4DC\uB9AC\uC8E0."
    ],
    slotType: 1,
    type: "chaos",
    applyLimit: 1,
    logics: [
      {
        type: "increaseTargetRanged",
        targetType: "userSelect",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [2, 3],
        remainTurn: 1
      },
      {
        type: "exhaust",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [2, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "catBzLT2",
    pickRatio: 15e5,
    range: [0, 0],
    descriptions: [
      "\uB0B4 \uD798\uC744 \uBAA8\uB450 <\uC18C\uC9C4>\uD558\uACA0\uB2E4. \uB300\uC2E0, <\uB124\uAC00 \uACE0\uB974\uB294> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C [<-4>~<+5>] \uC911 \uD558\uB098\uB9CC\uD07C \uC62C\uB824\uC8FC\uC9C0.",
      "\uB0B4 \uD798\uC744 \uBAA8\uB450 <\uC18C\uC9C4>\uD558\uACA0\uB124. \uB300\uC2E0, <\uC790\uB124\uAC00 \uC120\uD0DD\uD55C> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C [<-4>~<+5>] \uC911 \uD558\uB098\uB9CC\uD07C \uC62C\uB9B4\uAC78\uC138.",
      "\uC81C \uD798\uC744 \uBAA8\uB450 <\uC18C\uC9C4>\uD558\uACA0\uC5B4\uC694. \uB300\uC2E0, <\uB2F9\uC2E0\uC774 \uD0DD\uD55C> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C [<-4>~<+5>] \uC911 \uD558\uB098\uB9CC\uD07C \uC62C\uB824\uB4DC\uB9AC\uC8E0."
    ],
    slotType: 2,
    type: "chaos",
    applyLimit: 1,
    logics: [
      {
        type: "increaseTargetRanged",
        targetType: "userSelect",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [-4, 5],
        remainTurn: 1
      },
      {
        type: "exhaust",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [3, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "gskS6IVo",
    pickRatio: 625e3,
    range: [0, 0],
    descriptions: [
      "<\uBAA8\uB4E0 \uD6A8\uACFC>\uC758 \uB2E8\uACC4\uB97C  \uC704\uB85C <1> \uC2AC\uB86F \uC529 \uC62E\uACA8\uC8FC\uACA0\uC5B4.",
      "<\uBAA8\uB4E0 \uD6A8\uACFC>\uC758 \uB2E8\uACC4\uB97C \uC704\uB85C <1> \uC2AC\uB86F \uC774\uB3D9\uC2DC\uD0A4\uACA0\uB124.",
      "<\uBAA8\uB4E0 \uD6A8\uACFC>\uC758 \uB2E8\uACC4\uB97C \uC704\uB85C <1> \uC2AC\uB86F \uC529 \uC62E\uACA8\uB4DC\uB9AC\uC8E0."
    ],
    slotType: 3,
    type: "chaos",
    applyLimit: 99,
    logics: [
      {
        type: "shiftAll",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [0, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "5Zh4+5A2",
    pickRatio: 625e3,
    range: [0, 0],
    descriptions: [
      "<\uBAA8\uB4E0 \uD6A8\uACFC>\uC758 \uB2E8\uACC4\uB97C  \uC544\uB798\uB85C <1> \uC2AC\uB86F \uC529 \uC62E\uACA8\uC8FC\uACA0\uC5B4.",
      "<\uBAA8\uB4E0 \uD6A8\uACFC>\uC758 \uB2E8\uACC4\uB97C \uC544\uB798\uB85C <1> \uC2AC\uB86F \uC774\uB3D9\uC2DC\uD0A4\uACA0\uB124.",
      "<\uBAA8\uB4E0 \uD6A8\uACFC>\uC758 \uB2E8\uACC4\uB97C \uC544\uB798\uB85C <1> \uC2AC\uB86F \uC529 \uC62E\uACA8\uB4DC\uB9AC\uC8E0."
    ],
    slotType: 3,
    type: "chaos",
    applyLimit: 99,
    logics: [
      {
        type: "shiftAll",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [1, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "Nvbbk1oK",
    pickRatio: 2e5,
    range: [0, 0],
    descriptions: [
      "<\uB124\uAC00 \uACE0\uB974\uB294> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C \uC804\uBD80 \uB2E4\uB978 \uD6A8\uACFC\uC5D0 \uB098\uB204\uC9C0. \uC5B4\uB5BB\uAC8C \uB098\uB260\uC9C0 \uBCF4\uC790\uACE0.",
      "<\uC790\uB124\uAC00 \uC120\uD0DD\uD55C> \uD6A8\uACFC\uC758 \uBAA8\uB4E0 \uB2E8\uACC4\uB97C \uB2E4\uB978 \uD6A8\uACFC\uC5D0 \uC784\uC758\uB85C \uBD84\uBC30\uD558\uACA0\uB124. \uC88B\uC740 \uACB0\uACFC\uAC00 \uB098\uC624\uAE38 \uBC14\uB77C\uB124.",
      "<\uB2F9\uC2E0\uC774 \uD0DD\uD55C> \uD6A8\uACFC\uC758 \uB2E8\uACC4\uB97C \uC804\uBD80 \uB2E4\uB978 \uD6A8\uACFC\uC5D0 \uB098\uB204\uB3C4\uB85D \uD558\uC8E0. \uB2F9\uC2E0\uC774 \uC6D0\uD558\uB294 \uB300\uB85C \uC774\uB904\uC9C0\uAE38."
    ],
    slotType: 3,
    type: "chaos",
    applyLimit: 99,
    logics: [
      {
        type: "redistributeSelectedToOthers",
        targetType: "userSelect",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [0, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "neWy7Q1Q",
    pickRatio: 4e5,
    range: [0, 0],
    descriptions: [
      "<\uCD5C\uD558 \uB2E8\uACC4> \uD6A8\uACFC <1>\uAC1C\uC758 \uB2E8\uACC4\uB97C \uC804\uBD80 \uB2E4\uB978 \uD6A8\uACFC\uC5D0 \uB098\uB204\uC9C0. \uC5B4\uB5BB\uAC8C \uB098\uB260\uC9C0 \uBCF4\uC790\uACE0.",
      "<\uCD5C\uD558 \uB2E8\uACC4> \uD6A8\uACFC <1>\uAC1C\uC758 \uBAA8\uB4E0 \uB2E8\uACC4\uB97C \uB2E4\uB978 \uD6A8\uACFC\uC5D0 \uC784\uC758\uB85C \uBD84\uBC30\uD558\uACA0\uB124. \uC88B\uC740 \uACB0\uACFC\uAC00 \uB098\uC624\uAE38 \uBC14\uB77C\uB124.",
      "<\uCD5C\uD558 \uB2E8\uACC4> \uD6A8\uACFC <1>\uAC1C\uC758 \uB2E8\uACC4\uB97C \uC804\uBD80 \uB2E4\uB978 \uD6A8\uACFC\uC5D0 \uB098\uB204\uB3C4\uB85D \uD558\uC8E0. \uB2F9\uC2E0\uC774 \uC6D0\uD558\uB294 \uB300\uB85C \uC774\uB904\uC9C0\uAE38."
    ],
    slotType: 3,
    type: "chaos",
    applyLimit: 99,
    logics: [
      {
        type: "redistributeMinToOthers",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [0, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "Wrr88BQQ",
    pickRatio: 4e5,
    range: [0, 0],
    descriptions: [
      "<\uCD5C\uACE0 \uB2E8\uACC4> \uD6A8\uACFC <1>\uAC1C\uC758 \uB2E8\uACC4\uB97C \uC804\uBD80 \uB2E4\uB978 \uD6A8\uACFC\uC5D0 \uB098\uB204\uC9C0. \uC5B4\uB5BB\uAC8C \uB098\uB260\uC9C0 \uBCF4\uC790\uACE0.",
      "<\uCD5C\uACE0 \uB2E8\uACC4> \uD6A8\uACFC <1>\uAC1C\uC758 \uBAA8\uB4E0 \uB2E8\uACC4\uB97C \uB2E4\uB978 \uD6A8\uACFC\uC5D0 \uC784\uC758\uB85C \uBD84\uBC30\uD558\uACA0\uB124. \uC88B\uC740 \uACB0\uACFC\uAC00 \uB098\uC624\uAE38 \uBC14\uB77C\uB124.",
      "<\uCD5C\uACE0 \uB2E8\uACC4> \uD6A8\uACFC <1>\uAC1C\uC758 \uB2E8\uACC4\uB97C \uC804\uBD80 \uB2E4\uB978 \uD6A8\uACFC\uC5D0 \uB098\uB204\uB3C4\uB85D \uD558\uC8E0. \uB2F9\uC2E0\uC774 \uC6D0\uD558\uB294 \uB300\uB85C \uC774\uB904\uC9C0\uAE38."
    ],
    slotType: 3,
    type: "chaos",
    applyLimit: 99,
    logics: [
      {
        type: "redistributeMaxToOthers",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [0, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "NdpregIz",
    pickRatio: 1e8,
    range: [0, 0],
    descriptions: [
      "\uC774\uC81C \uC2AC\uC2AC \uB9C8\uBB34\uB9AC\uD558\uB3C4\uB85D \uD558\uC9C0. <\uB124\uAC00 \uACE0\uB974\uB294> \uD6A8\uACFC\uB97C \uBD09\uC778\uD558\uACE0, <\uC784\uC758\uC758 \uD6A8\uACFC> <1>\uAC1C\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB824\uC8FC\uC9C0.",
      "\uC5F0\uAE08\uC220\uC774 \uB9C8\uBB34\uB9AC\uB418\uACE0 \uC788\uAD70. <\uC790\uB124\uAC00 \uC120\uD0DD\uD55C> \uD6A8\uACFC\uB97C \uBD09\uC778\uD558\uACE0, <\uC784\uC758\uC758 \uD6A8\uACFC> <1>\uAC1C\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB9AC\uACA0\uB124.",
      "\uC774\uC81C \uB9C8\uBB34\uB9AC\uD558\uC8E0. <\uB2F9\uC2E0\uC774 \uD0DD\uD55C> \uD6A8\uACFC\uB97C \uBD09\uC778\uD558\uACE0, <\uB2E4\uB978 \uD6A8\uACFC> <1>\uAC1C\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB824\uB4DC\uB9AC\uC8E0."
    ],
    slotType: 3,
    type: "chaosSeal",
    applyLimit: 99,
    logics: [
      {
        type: "sealTarget",
        targetType: "userSelect",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [0, 0],
        remainTurn: 1
      },
      {
        type: "increaseTargetWithRatio",
        targetType: "random",
        targetCondition: 0,
        targetCount: 1,
        ratio: 1e4,
        value: [1, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "Z85t18hM",
    pickRatio: 1e8,
    range: [0, 0],
    descriptions: [
      "\uC774\uC81C \uC2AC\uC2AC \uB9C8\uBB34\uB9AC\uD558\uB3C4\uB85D \uD558\uC9C0. <\uB124\uAC00 \uACE0\uB974\uB294> \uD6A8\uACFC\uB97C \uBD09\uC778\uD558\uACE0, <\uCD5C\uD558 \uB2E8\uACC4> \uD6A8\uACFC <1>\uAC1C\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB824\uC8FC\uC9C0.",
      "\uC5F0\uAE08\uC220\uC774 \uB9C8\uBB34\uB9AC\uB418\uACE0 \uC788\uAD70. <\uC790\uB124\uAC00 \uC120\uD0DD\uD55C> \uD6A8\uACFC\uB97C \uBD09\uC778\uD558\uACE0, <\uCD5C\uD558 \uB2E8\uACC4> \uD6A8\uACFC <1>\uAC1C\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB9AC\uACA0\uB124.",
      "\uC774\uC81C \uB9C8\uBB34\uB9AC\uD558\uC8E0. <\uB2F9\uC2E0\uC774 \uD0DD\uD55C> \uD6A8\uACFC\uB97C \uBD09\uC778\uD558\uACE0, <\uCD5C\uD558 \uB2E8\uACC4> \uD6A8\uACFC <1>\uAC1C\uC758 \uB2E8\uACC4\uB97C <1> \uC62C\uB824\uB4DC\uB9AC\uC8E0."
    ],
    slotType: 3,
    type: "chaosSeal",
    applyLimit: 99,
    logics: [
      {
        type: "sealTarget",
        targetType: "userSelect",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [0, 0],
        remainTurn: 1
      },
      {
        type: "increaseTargetWithRatio",
        targetType: "minValue",
        targetCondition: 0,
        targetCount: 1,
        ratio: 1e4,
        value: [1, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "d7DeSvZO",
    pickRatio: 1e8,
    range: [0, 0],
    descriptions: [
      "\uC774\uC81C \uC2AC\uC2AC \uB9C8\uBB34\uB9AC\uD558\uB3C4\uB85D \uD558\uC9C0. <\uB124\uAC00 \uACE0\uB974\uB294> \uD6A8\uACFC\uB97C \uBD09\uC778\uD558\uACE0, <\uBAA8\uB4E0 \uD6A8\uACFC>\uC758 \uB2E8\uACC4\uB97C \uC784\uC758\uB85C \uC7AC\uBD84\uBC30 \uD558\uACA0\uB2E4. \uD589\uC6B4\uC744 \uBE4C\uC9C0.",
      "\uC5F0\uAE08\uC220\uC774 \uB9C8\uBB34\uB9AC\uB418\uACE0 \uC788\uAD70. <\uC790\uB124\uAC00 \uC120\uD0DD\uD55C> \uD6A8\uACFC\uB97C \uBD09\uC778\uD558\uACE0, <\uBAA8\uB4E0 \uD6A8\uACFC>\uC758 \uB2E8\uACC4\uB97C \uC784\uC758\uB85C \uC7AC\uBD84\uBC30\uD558\uACA0\uB124. \uC88B\uC740 \uACB0\uACFC\uAC00 \uB098\uC624\uAE38 \uBC14\uB77C\uB124.",
      "\uC774\uC81C \uB9C8\uBB34\uB9AC\uD558\uC8E0. <\uB2F9\uC2E0\uC774 \uD0DD\uD55C> \uD6A8\uACFC\uB97C \uBD09\uC778\uD558\uACE0, <\uBAA8\uB4E0 \uD6A8\uACFC>\uC758 \uB2E8\uACC4\uB97C \uC784\uC758\uB85C \uC7AC\uBD84\uBC30\uD558\uC8E0. \uB2F9\uC2E0\uC774 \uC6D0\uD558\uB294 \uB300\uB85C \uC774\uB904\uC9C0\uAE38."
    ],
    slotType: 3,
    type: "chaosSeal",
    applyLimit: 99,
    logics: [
      {
        type: "sealTarget",
        targetType: "userSelect",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [0, 0],
        remainTurn: 1
      },
      {
        type: "redistributeAll",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [0, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "Gw3wxrgY",
    pickRatio: 1e8,
    range: [0, 0],
    descriptions: [
      "\uC774\uC81C \uC2AC\uC2AC \uB9C8\uBB34\uB9AC\uD558\uB3C4\uB85D \uD558\uC9C0. <\uB124\uAC00 \uACE0\uB974\uB294> \uD6A8\uACFC\uB97C \uBD09\uC778\uD558\uACE0, <\uBAA8\uB4E0 \uD6A8\uACFC>\uC758 \uB2E8\uACC4\uB97C \uC784\uC758\uB85C \uB4A4\uC11E\uB3C4\uB85D \uD558\uACA0\uB2E4. \uD589\uC6B4\uC744 \uBE4C\uC9C0.",
      "\uC5F0\uAE08\uC220\uC774 \uB9C8\uBB34\uB9AC\uB418\uACE0 \uC788\uAD70. <\uC790\uB124\uAC00 \uC120\uD0DD\uD55C> \uD6A8\uACFC\uB97C \uBD09\uC778\uD558\uACE0, <\uBAA8\uB4E0 \uD6A8\uACFC>\uC758 \uB2E8\uACC4\uB97C \uC784\uC758\uB85C \uB4A4\uC11E\uACA0\uB124. \uC88B\uC740 \uACB0\uACFC\uAC00 \uB098\uC624\uAE38 \uBC14\uB77C\uB124.",
      "\uC774\uC81C \uB9C8\uBB34\uB9AC\uD558\uC8E0. <\uB2F9\uC2E0\uC774 \uD0DD\uD55C> \uD6A8\uACFC\uB97C \uBD09\uC778\uD558\uACE0, <\uBAA8\uB4E0 \uD6A8\uACFC>\uC758 \uB2E8\uACC4\uB97C \uC784\uC758\uB85C \uB4A4\uC11E\uC5B4\uB4DC\uB9AC\uC8E0. \uB2F9\uC2E0\uC774 \uC6D0\uD558\uB294 \uB300\uB85C \uC774\uB904\uC9C0\uAE38."
    ],
    slotType: 3,
    type: "chaosSeal",
    applyLimit: 99,
    logics: [
      {
        type: "sealTarget",
        targetType: "userSelect",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [0, 0],
        remainTurn: 1
      },
      {
        type: "shuffleAll",
        targetType: "none",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [0, 0],
        remainTurn: 1
      }
    ]
  },
  {
    id: "v31V/eFJ",
    pickRatio: 1,
    range: [0, 0],
    descriptions: [
      "\uC774\uC81C \uC2AC\uC2AC \uB9C8\uBB34\uB9AC\uD558\uB3C4\uB85D \uD558\uC9C0. <\uB124\uAC00 \uACE0\uB974\uB294> \uD6A8\uACFC\uB97C \uBD09\uC778\uD558\uACA0\uB2E4.",
      "\uC5F0\uAE08\uC220\uC774 \uB9C8\uBB34\uB9AC\uB418\uACE0 \uC788\uAD70. <\uC790\uB124\uAC00 \uC120\uD0DD\uD55C> \uD6A8\uACFC\uB97C \uBD09\uC778\uD558\uACA0\uB124.",
      "\uC774\uC81C \uB9C8\uBB34\uB9AC\uD558\uC8E0. <\uB2F9\uC2E0\uC774 \uD0DD\uD55C> \uD6A8\uACFC\uB97C \uBD09\uC778\uD574\uB4DC\uB9AC\uC8E0."
    ],
    slotType: 3,
    type: "chaosSeal",
    applyLimit: 99,
    logics: [
      {
        type: "sealTarget",
        targetType: "userSelect",
        targetCondition: 0,
        targetCount: 1,
        ratio: 0,
        value: [0, 0],
        remainTurn: 1
      }
    ]
  }
];
var councilRecord = Object.fromEntries(
  councils.map((item) => [item.id, item])
);
var councilsPerType = {
  common: councils.filter((data2) => data2.type === "common"),
  exhausted: councils.filter((data2) => data2.type === "exhausted"),
  lawful: councils.filter((data2) => data2.type === "lawful"),
  lawfulSeal: councils.filter((data2) => data2.type === "lawfulSeal"),
  chaos: councils.filter((data2) => data2.type === "chaos"),
  chaosSeal: councils.filter((data2) => data2.type === "chaosSeal"),
  seal: councils.filter((data2) => data2.type === "seal")
};

// src/service/council.ts
function createCouncilService(chance2, logicGuardService2) {
  function isCouncilAvailable(state, council, sageIndex, pickedCouncils) {
    if (!game_default.isTurnInRange(state, council.range)) {
      return false;
    }
    if (pickedCouncils.includes(council.id)) {
      return false;
    }
    if (council.slotType === 3) {
      return true;
    }
    return council.slotType === sageIndex;
  }
  function getOne(id) {
    const council = councilRecord[id];
    if (!council) {
      throw new Error("Invalid council id");
    }
    return council;
  }
  function getLogics(id) {
    return getOne(id).logics;
  }
  function pick(state, sageIndex, pickedCouncils) {
    const councilType = game_default.getCouncilType(state, sageIndex);
    const availableCouncils = councilsPerType[councilType].filter(
      (data2) => isCouncilAvailable(state, data2, sageIndex, pickedCouncils)
    );
    if (availableCouncils.length === 0) {
      throw new Error("No council available");
    }
    const weightTable = availableCouncils.map((council) => council.pickRatio);
    let selected;
    let cnt = 0;
    while (true) {
      cnt++;
      if (cnt > 1e3) {
        console.log(state, sageIndex, pickedCouncils);
        throw new Error("Failed to pick council");
      }
      selected = chance2.weighted(availableCouncils, weightTable);
      if (selected.logics.every(
        (logic) => logicGuardService2.runLogicGuard(state, logic)
      )) {
        break;
      }
    }
    return selected.id;
  }
  return {
    pick,
    getOne,
    getLogics
  };
}

// src/service/effect.ts
function createEffectService(chance2) {
  function pickMinValueIndex(effects) {
    const values = effects.filter((eff) => !eff.isSealed).map((eff) => eff.value);
    const min = Math.min(...values);
    const minIndexes = [0, 1, 2, 3, 4].filter(
      (index) => effects[index].value === min && !effects[index].isSealed
    );
    const pickedMin = chance2.pickone(minIndexes);
    return [min, pickedMin];
  }
  function pickMaxValueIndex(effects) {
    const values = effects.filter((eff) => !eff.isSealed).map((eff) => eff.value);
    const max = Math.max(...values);
    const maxIndexes = [0, 1, 2, 3, 4].filter(
      (index) => effects[index].value === max && !effects[index].isSealed
    );
    const pickedMax = chance2.pickone(maxIndexes);
    return [max, pickedMax];
  }
  function getUiSelectableEffects(state, index) {
    const otherSelectedEffectIds = state.effects.filter((eff) => eff.index !== index).map((eff) => eff.optionId);
    return effectOptions.filter(
      (eff) => !otherSelectedEffectIds.includes(eff.id)
    );
  }
  function getEffectOptionCurrentDescription(state, index) {
    const eff = state.effects[index];
    const option = effect_default.getEffectOptionById(eff.optionId);
    const level = effect_default.getLevel(eff);
    return option.optionDescriptions[level];
  }
  return {
    pickMinValueIndex,
    pickMaxValueIndex,
    getUiSelectableEffects,
    getEffectOptionCurrentDescription
  };
}

// src/service/game.ts
function createGameService(chance2, sageService2, councilService2, logicService2, targetService2, mutationService2) {
  function getInitialGameState(config) {
    const state = game_default.createInitialState(config);
    return sageService2.updateCouncils(state);
  }
  function isEffectSelectionRequired(state, ui) {
    if (ui.selectedSageIndex === null) {
      return false;
    }
    const sage = state.sages[ui.selectedSageIndex];
    const logics = councilService2.getLogics(sage.councilId);
    return logics.some((logic) => logic.targetType === "userSelect");
  }
  function getEffectLevel(state, index) {
    const effect = state.effects[index];
    return effect_default.getLevel(effect);
  }
  function getSelectableSages(state) {
    return state.sages.map((sage, index) => ({ sage, index })).filter(({ sage }) => !sage.isExhausted).map(({ index }) => index);
  }
  function getSelectableEffects(state) {
    return state.effects.map((effect, index) => ({ effect, index })).filter(({ effect }) => !effect.isSealed).map(({ index }) => index);
  }
  function applyCouncil(state, ui) {
    if (ui.selectedSageIndex === null) {
      throw new Error("Sage is not selected");
    }
    if (isEffectSelectionRequired(state, ui) && ui.selectedEffectIndex == null) {
      throw new Error("Effect is not selected");
    }
    const sage = state.sages[ui.selectedSageIndex];
    const logics = councilService2.getLogics(sage.councilId);
    const counciledState = logics.reduce(
      (acc, logic) => logicService2.runLogic(
        acc,
        logic,
        targetService2.getTargets(acc, ui, logic)
      ),
      state
    );
    const nextPhase = counciledState.phase === "restart" ? "restart" : "enchant";
    return {
      ...counciledState,
      phase: nextPhase
    };
  }
  function enchant(state, ui) {
    if (ui.selectedSageIndex === null) {
      throw new Error("Sage is not selected");
    }
    const enchantEffectCount = mutationService2.queryEnchantEffectCount(state);
    const enchantIncreaseAmount = mutationService2.queryEnchantIncreaseAmount(state);
    const luckyRatios = mutationService2.queryLuckyRatios(state);
    const pickRatios = mutationService2.queryPickRatios(state);
    let nextState = state;
    for (let i = 0; i < enchantEffectCount; i += 1) {
      if (pickRatios.every((ratio) => ratio === 0)) {
        break;
      }
      const selectedEffectIndex = chance2.weighted([0, 1, 2, 3, 4], pickRatios);
      pickRatios[selectedEffectIndex] = 0;
      const luckyRatio = luckyRatios[selectedEffectIndex];
      const isLucky = chance2.bool({ likelihood: luckyRatio * 100 });
      state = game_default.increaseEffectValue(
        nextState,
        selectedEffectIndex,
        enchantIncreaseAmount + (isLucky ? 1 : 0)
      );
    }
    nextState = game_default.passTurn(state, ui.selectedSageIndex);
    if (nextState.phase === "done") {
      return nextState;
    }
    return sageService2.updateCouncils(nextState);
  }
  function reroll(state) {
    if (state.rerollLeft <= 0) {
      throw new Error("No reroll left");
    }
    return sageService2.updateCouncils(game_default.decreaseRerollLeft(state));
  }
  return {
    getInitialGameState,
    getEffectLevel,
    getSelectableSages,
    getSelectableEffects,
    isEffectSelectionRequired,
    applyCouncil,
    enchant,
    reroll
  };
}

// src/service/logic.ts
function createLogicService(chance2, effectService2) {
  function mutateProb(state, logic, targets) {
    const mutations = targets.map(
      (index) => mutation_default.createProbMutation(
        index,
        logic.value[0] / 1e4,
        logic.remainTurn
      )
    );
    return game_default.addMutations(state, mutations);
  }
  function mutateLuckyRatio(state, logic, targets) {
    const mutations = targets.map(
      (index) => mutation_default.createLuckyRatioMutation(
        index,
        logic.value[0] / 1e4,
        logic.remainTurn
      )
    );
    return game_default.addMutations(state, mutations);
  }
  function increaseTargetWithRatio(state, logic, targets) {
    return targets.reduce((acc, index) => {
      const isSuccess = chance2.bool({ likelihood: logic.ratio / 100 });
      if (isSuccess) {
        return game_default.increaseEffectValue(acc, index, logic.value[0]);
      }
      return acc;
    }, state);
  }
  function increaseTargetRanged(state, logic, targets) {
    return targets.reduce((acc, index) => {
      const diff = chance2.integer({
        min: logic.value[0],
        max: logic.value[1]
      });
      return game_default.increaseEffectValue(acc, index, diff);
    }, state);
  }
  function decreaseTurnLeft(state, logic, targets) {
    return game_default.decreaseTurn(state, logic.value[0]);
  }
  function shuffleAll(state, logic, targets) {
    const beforeShuffle = [0, 1, 2, 3, 4].filter(
      (index) => !game_default.isEffectSealed(state, index)
    );
    const afterShuffle = chance2.shuffle(beforeShuffle);
    return beforeShuffle.reduce(
      (acc, index, i) => game_default.setEffectValue(
        acc,
        index,
        game_default.getEffectValue(state, afterShuffle[i])
      ),
      state
    );
  }
  function setEnchantTargetAndAmount(state, logic, targets) {
    const mutations = targets.flatMap((index) => [
      mutation_default.createProbMutation(index, 1, logic.remainTurn),
      mutation_default.createEnchantIncreaseAmountMutation(logic.value[0])
    ]);
    return game_default.addMutations(state, mutations);
  }
  function unsealAndSealOther(state, logic, targets) {
    const sealedIndexes = [0, 1, 2, 3, 4].filter(
      (index) => game_default.isEffectSealed(state, index)
    );
    const unsealedIndexes = [0, 1, 2, 3, 4].filter(
      (index) => !game_default.isEffectSealed(state, index)
    );
    const sealedIndex = chance2.pickone(sealedIndexes);
    const unsealedIndex = chance2.pickone(unsealedIndexes);
    return game_default.sealEffect(
      game_default.unsealEffect(state, sealedIndex),
      unsealedIndex
    );
  }
  function changeEffect(state, logic, targets) {
    return state;
  }
  function sealTarget(state, logic, targets) {
    return targets.reduce((acc, index) => game_default.sealEffect(acc, index), state);
  }
  function increaseReroll(state, logic, targets) {
    return game_default.increaseRerollLeft(state, logic.value[0]);
  }
  function decreasePrice(state, logic, targets) {
    return state;
  }
  function restart(state, logic, targets) {
    return game_default.markAsRestart(state);
  }
  function setEnchantIncreaseAmount(state, logic, targets) {
    return game_default.addMutations(state, [
      mutation_default.createEnchantIncreaseAmountMutation(logic.value[0])
    ]);
  }
  function setEnchantEffectCount(state, logic, targets) {
    return game_default.addMutations(state, [
      mutation_default.createEnchantEffectCountMutation(logic.value[0])
    ]);
  }
  function setValueRanged(state, logic, targets) {
    return targets.reduce((acc, index) => {
      const value = chance2.integer({
        min: logic.value[0],
        max: logic.value[1]
      });
      return game_default.setEffectValue(acc, index, value);
    }, state);
  }
  function redistributeAll(state, logic, targets) {
    const totalValue = state.effects.filter((eff) => !eff.isSealed).reduce((acc, eff) => acc + eff.value, 0);
    const availableIndexes = [0, 1, 2, 3, 4].filter(
      (index) => !game_default.isEffectSealed(state, index)
    );
    const values = [0, 1, 2, 3, 4].map(
      (index) => game_default.isEffectSealed(state, index) ? game_default.getEffectValue(state, index) : 0
    );
    for (let i = 0; i < totalValue; i++) {
      const index = chance2.pickone(availableIndexes);
      values[index]++;
    }
    return game_default.setEffectValueAll(state, values);
  }
  function redistributeSelectedToOthers(state, logic, targets) {
    const target = targets[0];
    const selectedValue = game_default.getEffectValue(state, target);
    const availableIndexes = [0, 1, 2, 3, 4].filter(
      (index) => !game_default.isEffectSealed(state, index) && index !== target
    );
    const values = [0, 1, 2, 3, 4].map(
      (index) => index !== target ? game_default.getEffectValue(state, index) : 0
    );
    for (let i = 0; i < selectedValue; i++) {
      const index = chance2.pickone(availableIndexes);
      values[index]++;
    }
    return game_default.setEffectValueAll(state, values);
  }
  function shiftAll(state, logic, targets) {
    const values = state.effects.map((eff) => eff.value);
    const direction = logic.value[0];
    const shiftedValues = [];
    for (let i = 0; i < 5; i++) {
      if (game_default.isEffectSealed(state, i)) {
        shiftedValues[i] = values[i];
      }
      let j = i;
      do {
        j = cycle(j, 5, direction);
      } while (game_default.isEffectSealed(state, j));
      shiftedValues[j] = values[i];
    }
    return game_default.setEffectValueAll(state, shiftedValues);
  }
  function swapValues(state, logic, targets) {
    const [target1, target2] = logic.value;
    const value1 = game_default.getEffectValue(state, target1);
    const value2 = game_default.getEffectValue(state, target2);
    return game_default.setEffectValue(
      game_default.setEffectValue(state, target1, value2),
      target2,
      value1
    );
  }
  function swapMinMax(state, logic, targets) {
    const [max, pickedMax] = effectService2.pickMaxValueIndex(state.effects);
    const [min, pickedMin] = effectService2.pickMinValueIndex(state.effects);
    return game_default.setEffectValue(
      game_default.setEffectValue(state, pickedMax, min),
      pickedMin,
      max
    );
  }
  function exhaust2(state, logic, targets) {
    const sageIndex = logic.value[0] - 1;
    return game_default.exhaustSage(state, sageIndex);
  }
  function increaseMaxAndDecreaseTarget(state, logic, targets) {
    const [_, pickedMax] = effectService2.pickMaxValueIndex(state.effects);
    const increasedState = game_default.increaseEffectValue(
      state,
      pickedMax,
      logic.value[0]
    );
    return targets.reduce(
      (acc, index) => game_default.increaseEffectValue(acc, index, logic.value[1]),
      increasedState
    );
  }
  function increaseMinAndDecreaseTarget(state, logic, targets) {
    const [_, pickedMin] = effectService2.pickMinValueIndex(state.effects);
    const increasedState = game_default.increaseEffectValue(
      state,
      pickedMin,
      logic.value[0]
    );
    return targets.reduce(
      (acc, index) => game_default.increaseEffectValue(acc, index, logic.value[1]),
      increasedState
    );
  }
  function redistributeMinToOthers(state, logic, targets) {
    const [minValue, pickedMin] = effectService2.pickMinValueIndex(
      state.effects
    );
    const availableIndexes = [0, 1, 2, 3, 4].filter(
      (index) => !game_default.isEffectSealed(state, index) && index !== pickedMin
    );
    const values = [0, 1, 2, 3, 4].map(
      (index) => index !== pickedMin ? game_default.getEffectValue(state, index) : 0
    );
    for (let i = 0; i < minValue; i++) {
      const index = chance2.pickone(availableIndexes);
      values[index]++;
    }
    return game_default.setEffectValueAll(state, values);
  }
  function redistributeMaxToOthers(state, logic, targets) {
    const [maxValue, pickedMax] = effectService2.pickMaxValueIndex(
      state.effects
    );
    const availableIndexes = [0, 1, 2, 3, 4].filter(
      (index) => !game_default.isEffectSealed(state, index) && index !== pickedMax
    );
    const values = [0, 1, 2, 3, 4].map(
      (index) => index !== pickedMax ? game_default.getEffectValue(state, index) : 0
    );
    for (let i = 0; i < maxValue; i++) {
      const index = chance2.pickone(availableIndexes);
      values[index]++;
    }
    return game_default.setEffectValueAll(state, values);
  }
  function decreaseMaxAndSwapMinMax(state, logic, targets) {
    const [max, pickedMax] = effectService2.pickMaxValueIndex(state.effects);
    const [min, pickedMin] = effectService2.pickMinValueIndex(state.effects);
    return game_default.setEffectValue(
      game_default.setEffectValue(state, pickedMax, min),
      pickedMin,
      max - 1
    );
  }
  function decreaseFirstTargetAndSwap(state, logic, targets) {
    const [target1, target2] = logic.value;
    const value1 = game_default.getEffectValue(state, target1);
    const value2 = game_default.getEffectValue(state, target2);
    return game_default.setEffectValue(
      game_default.setEffectValue(state, target1, value2),
      target2,
      value1 - 1
    );
  }
  const logicFns = {
    mutateProb,
    mutateLuckyRatio,
    increaseTargetWithRatio,
    increaseTargetRanged,
    decreaseTurnLeft,
    shuffleAll,
    setEnchantTargetAndAmount,
    unsealAndSealOther,
    changeEffect,
    sealTarget,
    increaseReroll,
    decreasePrice,
    restart,
    setEnchantIncreaseAmount,
    setEnchantEffectCount,
    setValueRanged,
    redistributeAll,
    redistributeSelectedToOthers,
    shiftAll,
    swapValues,
    swapMinMax,
    exhaust: exhaust2,
    increaseMaxAndDecreaseTarget,
    increaseMinAndDecreaseTarget,
    redistributeMinToOthers,
    redistributeMaxToOthers,
    decreaseMaxAndSwapMinMax,
    decreaseFirstTargetAndSwap
  };
  function runLogic(state, logic, targets) {
    return logicFns[logic.type](state, logic, targets);
  }
  return {
    runLogic
  };
}

// src/service/logic-guard.ts
function createLogicGuardService() {
  function mutateProb(state, logic) {
    if (logic.targetType === "proposed") {
      return game_default.isEffectMutable(state, logic.targetCondition - 1);
    }
    return true;
  }
  function mutateLuckyRatio(state, logic) {
    if (logic.targetType === "proposed") {
      return game_default.isEffectMutable(state, logic.targetCondition - 1);
    }
    return true;
  }
  function increaseTargetWithRatio(state, logic) {
    if (logic.targetType === "proposed") {
      return game_default.isEffectMutable(state, logic.targetCondition - 1);
    }
    return true;
  }
  function increaseTargetRanged(state, logic) {
    if (logic.targetType === "proposed") {
      return game_default.isEffectMutable(state, logic.targetCondition - 1);
    }
    return true;
  }
  function decreaseTurnLeft(state, logic) {
    return state.turnLeft > 1;
  }
  function shuffleAll(state, logic) {
    return true;
  }
  function setEnchantTargetAndAmount(state, logic) {
    if (logic.targetType === "proposed") {
      return game_default.isEffectMutable(state, logic.targetCondition - 1);
    }
    return true;
  }
  function unsealAndSealOther(state, logic) {
    return !!state.effects.find((eff) => eff.isSealed);
  }
  function changeEffect(state, logic) {
    return true;
  }
  function sealTarget(state, logic) {
    const sealedCount = state.effects.filter((eff) => eff.isSealed).length;
    if (sealedCount >= 3) {
      return false;
    }
    if (logic.targetType === "proposed") {
      return !state.effects[logic.targetCondition - 1].isSealed;
    }
    return true;
  }
  function increaseReroll(state, logic) {
    return true;
  }
  function decreasePrice(state, logic) {
    return true;
  }
  function restart(state, logic) {
    return true;
  }
  function setEnchantIncreaseAmount(state, logic) {
    return true;
  }
  function setEnchantEffectCount(state, logic) {
    return state.effects.filter((_, i) => game_default.isEffectMutable(state, i)).length >= logic.value[0];
  }
  function setValueRanged(state, logic) {
    if (logic.targetType === "proposed") {
      const index = logic.targetCondition - 1;
      const isMutable2 = game_default.isEffectMutable(state, index);
      const isLowerThanMax = state.effects[index].value < logic.value[1];
      return isMutable2 && isLowerThanMax;
    }
    return true;
  }
  function redistributeAll(state, logic) {
    return true;
  }
  function redistributeSelectedToOthers(state, logic) {
    return true;
  }
  function shiftAll(state, logic) {
    return true;
  }
  function swapValues(state, logic) {
    return game_default.isEffectMutable(state, logic.value[0]) && game_default.isEffectMutable(state, logic.value[1]);
  }
  function swapMinMax(state, logic) {
    return true;
  }
  function exhaust2(state, logic) {
    return true;
  }
  function increaseMaxAndDecreaseTarget(state, logic) {
    if (logic.targetType === "proposed") {
      return game_default.isEffectMutable(state, logic.targetCondition - 1);
    }
    return true;
  }
  function increaseMinAndDecreaseTarget(state, logic) {
    if (logic.targetType === "proposed") {
      return game_default.isEffectMutable(state, logic.targetCondition - 1);
    }
    return true;
  }
  function redistributeMinToOthers(state, logic) {
    return true;
  }
  function redistributeMaxToOthers(state, logic) {
    return true;
  }
  function decreaseMaxAndSwapMinMax(state, logic) {
    return true;
  }
  function decreaseFirstTargetAndSwap(state, logic) {
    return game_default.isEffectMutable(state, logic.value[0]) && game_default.isEffectMutable(state, logic.value[1]);
  }
  const logicGuards = {
    mutateProb,
    mutateLuckyRatio,
    increaseTargetWithRatio,
    increaseTargetRanged,
    decreaseTurnLeft,
    shuffleAll,
    setEnchantTargetAndAmount,
    unsealAndSealOther,
    changeEffect,
    sealTarget,
    increaseReroll,
    decreasePrice,
    restart,
    setEnchantIncreaseAmount,
    setEnchantEffectCount,
    setValueRanged,
    redistributeAll,
    redistributeSelectedToOthers,
    shiftAll,
    swapValues,
    swapMinMax,
    exhaust: exhaust2,
    increaseMaxAndDecreaseTarget,
    increaseMinAndDecreaseTarget,
    redistributeMinToOthers,
    redistributeMaxToOthers,
    decreaseMaxAndSwapMinMax,
    decreaseFirstTargetAndSwap
  };
  function runLogicGuard(state, logic) {
    return logicGuards[logic.type](state, logic);
  }
  return {
    runLogicGuard
  };
}

// src/service/mutation.ts
function createMutationService() {
  function queryPickRatios(state) {
    const mutableCount = [0, 1, 2, 3, 4].filter(
      (index) => game_default.isEffectMutable(state, index)
    ).length;
    const pickRatios = Array.from(
      { length: 5 },
      (_, i) => game_default.isEffectMutable(state, i) ? 1 / mutableCount : 0
    );
    if (mutableCount === 1) {
      return pickRatios;
    }
    const probMutations = state.mutations.filter(
      (mutation) => mutation.target === "prob"
    );
    for (const mutation of probMutations) {
      if (!game_default.isEffectMutable(state, mutation.index)) {
        continue;
      }
      const targetProb = pickRatios[mutation.index];
      const updatedProb = Math.max(Math.min(targetProb + mutation.value, 1), 0);
      const actualDiff = updatedProb - targetProb;
      for (let i = 0; i < 5; i += 1) {
        if (i === mutation.index) {
          pickRatios[i] = updatedProb;
        } else {
          pickRatios[i] = pickRatios[i] * (1 - actualDiff / (1 - targetProb));
        }
      }
    }
    return pickRatios;
  }
  function queryLuckyRatios(state) {
    const luckyRatios = Array.from({ length: 5 }, () => 0.1);
    const luckyRatioMutations = state.mutations.filter(
      (mutation) => mutation.target === "luckyRatio"
    );
    for (const mutation of luckyRatioMutations) {
      luckyRatios[mutation.index] = Math.max(
        Math.min(luckyRatios[mutation.index] + mutation.value, 1),
        0
      );
    }
    return luckyRatios;
  }
  function queryEnchantEffectCount(state) {
    return state.mutations.find(
      (mutation) => mutation.target === "enchantEffectCount"
    )?.value ?? 1;
  }
  function queryEnchantIncreaseAmount(state) {
    return state.mutations.find(
      (mutation) => mutation.target === "enchantIncreaseAmount"
    )?.value ?? 1;
  }
  return {
    queryPickRatios,
    queryLuckyRatios,
    queryEnchantEffectCount,
    queryEnchantIncreaseAmount
  };
}

// src/service/rng.ts
var import_chance = require("chance");
function createRngService() {
  let chance2 = new import_chance.Chance();
  function setSeed(seed) {
    chance2 = new import_chance.Chance(seed);
  }
  function getSeed() {
    return chance2.seed;
  }
  function bool(opts) {
    if (opts?.likelihood === 1e4) {
      return true;
    }
    if (opts?.likelihood === 0) {
      return false;
    }
    return chance2.bool(opts);
  }
  function pickone(items) {
    return chance2.pickone(items);
  }
  function pickset(items, size) {
    return chance2.pickset(items, size);
  }
  function weighted(items, weights) {
    return chance2.weighted(items, weights);
  }
  function integer({ min, max }) {
    return chance2.integer({ min, max });
  }
  function shuffle(arr) {
    return chance2.shuffle(arr);
  }
  return {
    setSeed,
    getSeed,
    bool,
    pickone,
    pickset,
    weighted,
    integer,
    shuffle
  };
}

// src/service/sage.ts
function createSageService(councilService2) {
  function updateCouncils(state) {
    const council1 = councilService2.pick(state, 0, []);
    const council2 = councilService2.pick(state, 1, [council1]);
    const council3 = councilService2.pick(state, 2, [council1, council2]);
    return {
      ...state,
      sages: [
        {
          ...state.sages[0],
          councilId: council1
        },
        {
          ...state.sages[1],
          councilId: council2
        },
        {
          ...state.sages[2],
          councilId: council3
        }
      ]
    };
  }
  function getDescription(state, sageIndex) {
    const id = state.sages[sageIndex].councilId;
    const council = councilService2.getOne(id);
    if (!council) {
      throw new Error("Invalid council id");
    }
    const effectNames = state.effects.map(
      (eff) => effect_default.getEffectOptionNameById(eff.optionId)
    );
    return council.descriptions[sageIndex].replaceAll("{0}", effectNames[0]).replaceAll("{1}", effectNames[1]).replaceAll("{2}", effectNames[2]).replaceAll("{3}", effectNames[3]).replaceAll("{4}", effectNames[4]);
  }
  return {
    updateCouncils,
    getDescription
  };
}

// src/service/target.ts
function createTargetService(chance2) {
  function none(state, ui, logic) {
    return [];
  }
  function random(state, ui, logic) {
    const available = [0, 1, 2, 3, 4].filter(
      (index) => !game_default.isEffectSealed(state, index)
    );
    return chance2.pickset(available, logic.targetCount);
  }
  function proposed(state, ui, logic) {
    return [logic.targetCondition - 1];
  }
  function minValue(state, ui, logic) {
    const available = [0, 1, 2, 3, 4].filter(
      (index) => !game_default.isEffectSealed(state, index)
    );
    const minValue2 = Math.min(
      ...available.map((index) => state.effects[index].value)
    );
    const candidates = available.filter(
      (index) => state.effects[index].value === minValue2
    );
    return chance2.pickset(candidates, logic.targetCount);
  }
  function maxValue(state, ui, logic) {
    const available = [0, 1, 2, 3, 4].filter(
      (index) => !game_default.isEffectSealed(state, index)
    );
    const maxValue2 = Math.max(
      ...available.map((index) => state.effects[index].value)
    );
    const candidates = available.filter(
      (index) => state.effects[index].value === maxValue2
    );
    return chance2.pickset(candidates, logic.targetCount);
  }
  function userSelect(state, ui, logic) {
    if (ui.selectedEffectIndex == null) {
      throw new Error("Effect is not selected");
    }
    return [ui.selectedEffectIndex];
  }
  function lteValue(state, ui, logic) {
    const available = [0, 1, 2, 3, 4].filter(
      (index) => !game_default.isEffectSealed(state, index)
    );
    return available.filter(
      (index) => state.effects[index].value <= logic.targetCondition
    );
  }
  function oneThreeFive(state) {
    return [0, 2, 4].filter((index) => !game_default.isEffectSealed(state, index));
  }
  function twoFour(state) {
    return [1, 3].filter((index) => !game_default.isEffectSealed(state, index));
  }
  const targetFns = {
    none,
    random,
    proposed,
    minValue,
    maxValue,
    userSelect,
    lteValue,
    oneThreeFive,
    twoFour
  };
  function getTargets(state, ui, logic) {
    return targetFns[logic.targetType](state, ui, logic);
  }
  return {
    getTargets
  };
}

// src/api.ts
var chance = createRngService();
var logicGuardService = createLogicGuardService();
var mutationService = createMutationService();
var effectService = createEffectService(chance);
var targetService = createTargetService(chance);
var logicService = createLogicService(chance, effectService);
var councilService = createCouncilService(chance, logicGuardService);
var sageService = createSageService(councilService);
var gameService = createGameService(
  chance,
  sageService,
  councilService,
  logicService,
  targetService,
  mutationService
);
var api = {
  game: gameService,
  sage: sageService,
  council: councilService,
  logic: logicService,
  target: targetService,
  mutation: mutationService,
  effect: effectService,
  rng: chance
};
var data = {
  councils,
  effectLevelTable,
  effectOptions
};

// src/benchmark.ts
function benchmark({
  selectionFn,
  scoreFn,
  iteration,
  config,
  seed
}) {
  api.rng.setSeed(seed);
  let totalScore = 0;
  for (let i = 0; i < iteration; i++) {
    if (i % 1e3 === 0) {
      console.log(`Iteration: ${i} Score: ${totalScore}`);
    }
    let state = api.game.getInitialGameState(config);
    let uiStateHistory = [];
    while (state.phase !== "done") {
      const uiState = selectionFn(state, uiStateHistory);
      state = api.game.applyCouncil(state, uiState);
      uiStateHistory.push(uiState);
      if (state.phase === "restart") {
        state = api.game.getInitialGameState(config);
        uiStateHistory = [];
        continue;
      }
      state = api.game.enchant(state, uiState);
    }
    totalScore += scoreFn(state);
  }
  return {
    totalScore,
    iteration
  };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  api,
  benchmark,
  data,
  effect,
  game,
  mutation,
  sage
});
