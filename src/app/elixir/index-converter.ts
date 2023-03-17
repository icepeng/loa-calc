export function adviceIndexConverter(
  two_max_opt_idx: [number, number],
  advice_idx: number
) {
  let converted_idx = advice_idx;
  if (0 <= advice_idx && advice_idx <= 59) {
    if (advice_idx % 6 == two_max_opt_idx[0]) {
      converted_idx = (advice_idx / 6) * 6;
    } else if (advice_idx % 6 == two_max_opt_idx[1]) {
      converted_idx = (advice_idx / 6) * 6 + 1;
    } else {
      converted_idx = (advice_idx / 6) * 6 + 2;
    }
  }
  switch (advice_idx) {
    case 64:
    case 65:
    case 66:
    case 67:
    case 68:
      if (advice_idx - 64 == two_max_opt_idx[0]) {
        converted_idx = 64;
      } else if (advice_idx - 64 == two_max_opt_idx[1]) {
        converted_idx = 65;
      } else {
        converted_idx = 66;
      }
      break;
    case 70:
    case 71:
    case 72:
    case 73:
    case 74:
      if (advice_idx - 70 == two_max_opt_idx[0]) {
        converted_idx = 70;
      } else if (advice_idx - 70 == two_max_opt_idx[1]) {
        converted_idx = 71;
      } else {
        converted_idx = 72;
      }
      break;
    case 76:
    case 77:
    case 78:
    case 79:
    case 80:
      if (advice_idx - 76 == two_max_opt_idx[0]) {
        converted_idx = 76;
      } else if (advice_idx - 76 == two_max_opt_idx[1]) {
        converted_idx = 77;
      } else {
        converted_idx = 78;
      }
      break;
    case 86:
    case 87:
    case 88:
    case 89:
    case 90:
      if (advice_idx - 86 == two_max_opt_idx[0]) {
        converted_idx = 86;
      } else if (advice_idx - 86 == two_max_opt_idx[1]) {
        converted_idx = 87;
      } else {
        converted_idx = 88;
      }
      break;
    case 92:
    case 93:
    case 94:
    case 95:
    case 96:
      if (advice_idx - 92 == two_max_opt_idx[0]) {
        converted_idx = 92;
      } else if (advice_idx - 92 == two_max_opt_idx[1]) {
        converted_idx = 93;
      } else {
        converted_idx = 94;
      }
      break;
    case 98:
    case 99:
    case 100:
    case 101:
    case 102:
      if (advice_idx - 98 == two_max_opt_idx[0]) {
        converted_idx = 98;
      } else if (advice_idx - 98 == two_max_opt_idx[1]) {
        converted_idx = 99;
      } else {
        converted_idx = 100;
      }
      break;
    case 104:
    case 105:
    case 106:
    case 107:
    case 108:
      if (advice_idx - 104 == two_max_opt_idx[0]) {
        converted_idx = 104;
      } else if (advice_idx - 104 == two_max_opt_idx[1]) {
        converted_idx = 105;
      } else {
        converted_idx = 106;
      }
      break;
    case 111:
    case 112:
    case 113:
    case 114:
    case 115:
      if (advice_idx - 111 == two_max_opt_idx[0]) {
        converted_idx = 111;
      } else if (advice_idx - 111 == two_max_opt_idx[1]) {
        converted_idx = 112;
      } else {
        converted_idx = 113;
      }
      break;
    case 116:
    case 117:
    case 118:
    case 119:
    case 120:
      if (advice_idx - 116 == two_max_opt_idx[0]) {
        converted_idx = 116;
      } else if (advice_idx - 116 == two_max_opt_idx[1]) {
        converted_idx = 117;
      } else {
        converted_idx = 118;
      }
      break;
    case 121:
    case 122:
    case 123:
    case 124:
    case 125:
      if (advice_idx - 121 == two_max_opt_idx[0]) {
        converted_idx = 121;
      } else if (advice_idx - 121 == two_max_opt_idx[1]) {
        converted_idx = 122;
      } else {
        converted_idx = 123;
      }
      break;
    case 126:
    case 127:
    case 128:
    case 129:
    case 130:
      if (advice_idx - 126 == two_max_opt_idx[0]) {
        converted_idx = 126;
      } else if (advice_idx - 126 == two_max_opt_idx[1]) {
        converted_idx = 127;
      } else {
        converted_idx = 128;
      }
      break;
  }
  const updown_order_1: number[] = [
    0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4,
  ];
  const updown_order_2: number[] = [
    1, 2, 3, 4, 0, 2, 3, 4, 0, 1, 3, 4, 0, 1, 2, 4, 0, 1, 2, 3,
  ];
  if (131 <= advice_idx && advice_idx <= 150) {
    const first_idx = updown_order_1[advice_idx - 131];
    const second_idx = updown_order_2[advice_idx - 131];
    if (
      (first_idx == two_max_opt_idx[0] && second_idx == two_max_opt_idx[1]) ||
      (first_idx == two_max_opt_idx[1] && second_idx == two_max_opt_idx[0])
    ) {
      converted_idx = 131;
    } else if (
      (first_idx == two_max_opt_idx[0] && second_idx != two_max_opt_idx[1]) ||
      (first_idx == two_max_opt_idx[1] && second_idx != two_max_opt_idx[0])
    ) {
      converted_idx = 132;
    } else if (
      (first_idx != two_max_opt_idx[0] && second_idx == two_max_opt_idx[1]) ||
      (first_idx != two_max_opt_idx[1] && second_idx == two_max_opt_idx[0])
    ) {
      converted_idx = 139;
    } else {
      converted_idx = 141;
    }
  }
  if (151 <= advice_idx && advice_idx <= 170) {
    const first_idx = updown_order_1[advice_idx - 151];
    const second_idx = updown_order_2[advice_idx - 151];
    if (
      (first_idx == two_max_opt_idx[0] && second_idx == two_max_opt_idx[1]) ||
      (first_idx == two_max_opt_idx[1] && second_idx == two_max_opt_idx[0])
    ) {
      converted_idx = 151;
    } else if (
      (first_idx == two_max_opt_idx[0] && second_idx != two_max_opt_idx[1]) ||
      (first_idx == two_max_opt_idx[1] && second_idx != two_max_opt_idx[0])
    ) {
      converted_idx = 152;
    } else if (
      (first_idx != two_max_opt_idx[0] && second_idx == two_max_opt_idx[1]) ||
      (first_idx != two_max_opt_idx[1] && second_idx == two_max_opt_idx[0])
    ) {
      converted_idx = 159;
    } else {
      converted_idx = 161;
    }
  }
  if (advice_idx == 171) {
    converted_idx = 174;
  }
  if (advice_idx == 172) {
    converted_idx = 184;
  }
  const free_exchange_1: number[] = [0, 0, 0, 0, 1, 1, 1, 2, 2, 3];
  const free_exchange_2: number[] = [1, 2, 3, 4, 2, 3, 4, 3, 4, 4];
  if (173 <= advice_idx && advice_idx <= 182) {
    const first_idx = free_exchange_1[advice_idx - 173];
    const second_idx = free_exchange_2[advice_idx - 173];
    if (
      (first_idx == two_max_opt_idx[0] && second_idx == two_max_opt_idx[1]) ||
      (first_idx == two_max_opt_idx[1] && second_idx == two_max_opt_idx[0])
    ) {
      converted_idx = 173;
    } else if (
      (first_idx == two_max_opt_idx[0] && second_idx != two_max_opt_idx[1]) ||
      (first_idx == two_max_opt_idx[1] && second_idx != two_max_opt_idx[0])
    ) {
      converted_idx = 174;
    } else if (
      (first_idx != two_max_opt_idx[0] && second_idx == two_max_opt_idx[1]) ||
      (first_idx != two_max_opt_idx[1] && second_idx == two_max_opt_idx[0])
    ) {
      converted_idx = 174;
    } else {
      converted_idx = 180;
    }
  }
  const one_exchange_1: number[] = [
    0, 0, 0, 0, 1, 1, 1, 2, 2, 3, 1, 2, 3, 4, 2, 3, 4, 3, 4, 4,
  ];
  const one_exchange_2: number[] = [
    1, 2, 3, 4, 2, 3, 4, 3, 4, 4, 0, 0, 0, 0, 1, 1, 1, 2, 2, 3,
  ];
  if (183 <= advice_idx && advice_idx <= 202) {
    const first_idx = one_exchange_1[advice_idx - 183];
    const second_idx = one_exchange_2[advice_idx - 183];
    if (
      (first_idx == two_max_opt_idx[0] && second_idx == two_max_opt_idx[1]) ||
      (first_idx == two_max_opt_idx[1] && second_idx == two_max_opt_idx[0])
    ) {
      converted_idx = 183;
    } else if (
      (first_idx == two_max_opt_idx[0] && second_idx != two_max_opt_idx[1]) ||
      (first_idx == two_max_opt_idx[1] && second_idx != two_max_opt_idx[0])
    ) {
      converted_idx = 184;
    } else if (
      (first_idx != two_max_opt_idx[0] && second_idx == two_max_opt_idx[1]) ||
      (first_idx != two_max_opt_idx[1] && second_idx == two_max_opt_idx[0])
    ) {
      converted_idx = 194;
    } else {
      converted_idx = 190;
    }
  }
  switch (advice_idx) {
    //@ts-ignore
    case 222:
      if (
        (two_max_opt_idx[0] == 0 ||
          two_max_opt_idx[0] == 2 ||
          two_max_opt_idx[0] == 4) &&
        (two_max_opt_idx[1] == 0 ||
          two_max_opt_idx[1] == 2 ||
          two_max_opt_idx[1] == 4)
      ) {
        converted_idx = 249;
      } else if (
        two_max_opt_idx[0] == 0 ||
        two_max_opt_idx[0] == 2 ||
        two_max_opt_idx[0] == 4 ||
        two_max_opt_idx[1] == 0 ||
        two_max_opt_idx[1] == 2 ||
        two_max_opt_idx[1] == 4
      ) {
        converted_idx = 151;
      } else {
        converted_idx = 225;
      }
    //@ts-ignore
    case 223:
      if (
        (two_max_opt_idx[0] == 1 || two_max_opt_idx[0] == 3) &&
        (two_max_opt_idx[1] == 1 || two_max_opt_idx[1] == 3)
      ) {
        converted_idx = 249;
      } else if (
        two_max_opt_idx[0] == 1 ||
        two_max_opt_idx[0] == 3 ||
        two_max_opt_idx[1] == 1 ||
        two_max_opt_idx[1] == 3
      ) {
        converted_idx = 151;
      } else {
        converted_idx = 225;
      }
    case 225:
    case 226:
    case 227:
    case 228:
    case 229:
      if (advice_idx - 225 == two_max_opt_idx[0]) {
        converted_idx = 225;
      } else if (advice_idx - 225 == two_max_opt_idx[1]) {
        converted_idx = 226;
      } else {
        converted_idx = 227;
      }
      break;
    case 234:
    case 235:
    case 236:
    case 237:
    case 238:
      if (advice_idx - 234 == two_max_opt_idx[0]) {
        converted_idx = 234;
      } else if (advice_idx - 234 == two_max_opt_idx[1]) {
        converted_idx = 235;
      } else {
        converted_idx = 236;
      }
      break;
  }

  return converted_idx;
}
