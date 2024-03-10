export type Raid = keyof typeof rewardData;
export type Reward = (typeof rewardData)[Raid];

export const raidGroup: Record<string, Raid[]> = {
  '오레하의 우물(노말)': ['아이라의 눈(노말)', '오레하 프라바사(노말)'],
  '오레하의 우물(하드)': ['아이라의 눈(하드)', '오레하 프라바사(하드)'],
  아르고스: ['아르고스'],
  '발탄(하드)': ['발탄 1관문(하드)', '발탄 2관문(하드)'],
  '비아키스(하드)': ['비아키스 1관문(하드)', '비아키스 2관문(하드)'],
  쿠크세이튼: ['쿠크세이튼 1관문', '쿠크세이튼 2관문', '쿠크세이튼 3관문'],
  '아브렐슈드(노말)': [
    '아브렐슈드 1관문(노말)',
    '아브렐슈드 2관문(노말)',
    '아브렐슈드 3관문(노말)',
    '아브렐슈드 4관문(노말)',
  ],
  '아브렐슈드(하드)': [
    '아브렐슈드 1관문(하드)',
    '아브렐슈드 2관문(하드)',
    '아브렐슈드 3관문(하드)',
    '아브렐슈드 4관문(하드)',
  ],
  '카양겔(노말)': [
    '영원한 빛의 요람 1관문(노말)',
    '영원한 빛의 요람 2관문(노말)',
    '영원한 빛의 요람 3관문(노말)',
  ],
  '카양겔(하드)': [
    '영원한 빛의 요람 1관문(하드)',
    '영원한 빛의 요람 2관문(하드)',
    '영원한 빛의 요람 3관문(하드)',
  ],
  '일리아칸(노말)': [
    '일리아칸 1관문(노말)',
    '일리아칸 2관문(노말)',
    '일리아칸 3관문(노말)',
  ],
  '일리아칸(하드)': [
    '일리아칸 1관문(하드)',
    '일리아칸 2관문(하드)',
    '일리아칸 3관문(하드)',
  ],
  '혼돈의 상아탑(노말)': [
    '혼돈의 상아탑 1관문(노말)',
    '혼돈의 상아탑 2관문(노말)',
    '혼돈의 상아탑 3관문(노말)',
    '혼돈의 상아탑 4관문(노말)',
  ],
  '혼돈의 상아탑(하드)': [
    '혼돈의 상아탑 1관문(하드)',
    '혼돈의 상아탑 2관문(하드)',
    '혼돈의 상아탑 3관문(하드)',
    '혼돈의 상아탑 4관문(하드)',
  ],
  '카멘(노말)': ['카멘 1관문(노말)', '카멘 2관문(노말)', '카멘 3관문(노말)'],
  '카멘(하드)': [
    '카멘 1관문(하드)',
    '카멘 2관문(하드)',
    '카멘 3관문(하드)',
    '카멘 4관문(하드)',
  ],
  '에키드나(노말)': ['에키드나 1관문(노말)', '에키드나 2관문(노말)'],
  '에키드나(하드)': ['에키드나 1관문(하드)', '에키드나 2관문(하드)'],
};

export const rewardData = {
  '아이라의 눈(노말)': {
    price: 200,
    rewards: {
      파결: 48,
      수결: 96,
      위명돌: 4,
    },
  },
  '오레하 프라바사(노말)': {
    price: 400,
    rewards: {
      파결: 60,
      수결: 120,
      위명돌: 4,
      파편: 600,
    },
  },
  '아이라의 눈(하드)': {
    price: 100,
    rewards: {
      파결: 60,
      수결: 120,
      위명돌: 16,
      파편: 600,
    },
  },
  '오레하 프라바사(하드)': {
    price: 150,
    rewards: {
      파결: 90,
      수결: 180,
      위명돌: 20,
      파편: 800,
    },
  },
  아르고스: {
    price: 400,
    rewards: {
      파결: 120,
      수결: 240,
      위명돌: 5,
      파편: 720,
    },
  },
  '발탄 1관문(하드)': {
    price: 450,
    rewards: {
      파결: 360,
      수결: 720,
      위명돌: 10,
      파편: 1000,
      혼돈의돌: 3 / 5,
    },
  },
  '발탄 2관문(하드)': {
    price: 600,
    rewards: {
      파결: 480,
      수결: 960,
      위명돌: 10,
      파편: 1300,
      혼돈의돌: 3 / 5,
    },
  },
  '비아키스 1관문(하드)': {
    price: 500,
    rewards: {
      파결: 450,
      수결: 900,
      위명돌: 12,
      파편: 1600,
      혼돈의돌: 3 / 5,
    },
  },
  '비아키스 2관문(하드)': {
    price: 650,
    rewards: {
      파결: 520,
      수결: 1040,
      위명돌: 12,
      파편: 2000,
      혼돈의돌: 3 / 5,
    },
  },
  '쿠크세이튼 1관문': {
    price: 300,
    rewards: {
      파결: 300,
      수결: 600,
      위명돌: 12,
      파편: 1300,
      혼돈의돌: 1 / 5,
    },
  },
  '쿠크세이튼 2관문': {
    price: 500,
    rewards: {
      파결: 420,
      수결: 840,
      위명돌: 12,
      파편: 1300,
      혼돈의돌: 2 / 5,
    },
  },
  '쿠크세이튼 3관문': {
    price: 700,
    rewards: {
      파결: 540,
      수결: 1080,
      위명돌: 12,
      파편: 1600,
      혼돈의돌: 2 / 5,
    },
  },
  '아브렐슈드 1관문(노말)': {
    price: 400,
    rewards: {
      파괴강석: 120,
      수호강석: 240,
      경명돌: 6,
      파편: 2100,
      혼돈의돌: 4 / 5,
    },
  },
  '아브렐슈드 2관문(노말)': {
    price: 600,
    rewards: {
      파괴강석: 150,
      수호강석: 300,
      경명돌: 9,
      파편: 2400,
      혼돈의돌: 4 / 5,
    },
  },
  '아브렐슈드 3관문(노말)': {
    price: 800,
    rewards: {
      파괴강석: 200,
      수호강석: 400,
      경명돌: 8,
      파편: 2800,
      혼돈의돌: 5 / 5,
    },
  },
  '아브렐슈드 4관문(노말)': {
    price: 1500,
    rewards: {
      파괴강석: 600,
      수호강석: 1200,
      경명돌: 27,
      파편: 7000,
      혼돈의돌: 7 / 5,
    },
  },
  '아브렐슈드 1관문(하드)': {
    price: 700,
    rewards: {
      파괴강석: 260,
      수호강석: 520,
      경명돌: 12,
      파편: 3000,
      혼돈의돌: 6 / 5,
    },
  },
  '아브렐슈드 2관문(하드)': {
    price: 900,
    rewards: {
      파괴강석: 420,
      수호강석: 840,
      경명돌: 16,
      파편: 4000,
      혼돈의돌: 6 / 5,
    },
  },
  '아브렐슈드 3관문(하드)': {
    price: 1100,
    rewards: {
      파괴강석: 640,
      수호강석: 1280,
      경명돌: 24,
      파편: 5200,
      혼돈의돌: 7 / 5,
    },
  },
  '아브렐슈드 4관문(하드)': {
    price: 1800,
    rewards: {
      파괴강석: 1000,
      수호강석: 2000,
      경명돌: 40,
      파편: 10000,
      혼돈의돌: 10 / 5,
    },
  },
  '영원한 빛의 요람 1관문(노말)': {
    price: 600,
    rewards: {
      파괴강석: 180,
      수호강석: 360,
      경명돌: 5,
      파편: 1000,
    },
  },
  '영원한 빛의 요람 2관문(노말)': {
    price: 800,
    rewards: {
      파괴강석: 220,
      수호강석: 440,
      경명돌: 6,
      파편: 1500,
    },
  },
  '영원한 빛의 요람 3관문(노말)': {
    price: 1000,
    rewards: {
      파괴강석: 300,
      수호강석: 600,
      경명돌: 8,
      파편: 2000,
    },
  },
  '영원한 빛의 요람 1관문(하드)': {
    price: 700,
    rewards: {
      정제된파괴강석: 70,
      정제된수호강석: 140,
      찬명돌: 3,
      파편: 1500,
    },
  },
  '영원한 빛의 요람 2관문(하드)': {
    price: 900,
    rewards: {
      정제된파괴강석: 90,
      정제된수호강석: 180,
      찬명돌: 4,
      파편: 2000,
    },
  },
  '영원한 빛의 요람 3관문(하드)': {
    price: 1100,
    rewards: {
      정제된파괴강석: 120,
      정제된수호강석: 240,
      찬명돌: 6,
      파편: 2500,
    },
  },
  '일리아칸 1관문(노말)': {
    price: 900,
    rewards: {
      정제된파괴강석: 120,
      정제된수호강석: 240,
      찬명돌: 6,
      파편: 3000,
      혼돈의돌: 3 / 5,
    },
  },
  '일리아칸 2관문(노말)': {
    price: 1100,
    rewards: {
      정제된파괴강석: 160,
      정제된수호강석: 320,
      찬명돌: 8,
      파편: 3000,
      혼돈의돌: 3 / 5,
    },
  },
  '일리아칸 3관문(노말)': {
    price: 1500,
    rewards: {
      정제된파괴강석: 240,
      정제된수호강석: 480,
      찬명돌: 8,
      파편: 4200,
      혼돈의돌: 5 / 5,
    },
  },
  '일리아칸 1관문(하드)': {
    price: 1200,
    rewards: {
      정제된파괴강석: 200,
      정제된수호강석: 400,
      찬명돌: 9,
      파편: 4000,
      혼돈의돌: 7 / 5,
    },
  },
  '일리아칸 2관문(하드)': {
    price: 1400,
    rewards: {
      정제된파괴강석: 240,
      정제된수호강석: 480,
      찬명돌: 12,
      파편: 4000,
      혼돈의돌: 7 / 5,
    },
  },
  '일리아칸 3관문(하드)': {
    price: 1900,
    rewards: {
      정제된파괴강석: 360,
      정제된수호강석: 720,
      찬명돌: 18,
      파편: 5500,
      혼돈의돌: 8 / 5,
    },
  },
  '혼돈의 상아탑 1관문(노말)': {
    price: 700,
    rewards: {
      정제된파괴강석: 100,
      정제된수호강석: 200,
      찬명돌: 2,
      파편: 3000,
    },
  },
  '혼돈의 상아탑 2관문(노말)': {
    price: 800,
    rewards: {
      정제된파괴강석: 100,
      정제된수호강석: 200,
      찬명돌: 2,
      파편: 3000,
    },
  },
  '혼돈의 상아탑 3관문(노말)': {
    price: 900,
    rewards: {
      정제된파괴강석: 200,
      정제된수호강석: 400,
      찬명돌: 2,
      파편: 3000,
    },
  },
  '혼돈의 상아탑 4관문(노말)': {
    price: 1100,
    rewards: {
      정제된파괴강석: 200,
      정제된수호강석: 400,
      찬명돌: 3,
      파편: 4500,
    },
  },
  '혼돈의 상아탑 1관문(하드)': {
    price: 1000,
    rewards: {
      정제된파괴강석: 150,
      정제된수호강석: 300,
      찬명돌: 3,
      파편: 4000,
    },
  },
  '혼돈의 상아탑 2관문(하드)': {
    price: 1000,
    rewards: {
      정제된파괴강석: 150,
      정제된수호강석: 300,
      찬명돌: 3,
      파편: 4000,
    },
  },
  '혼돈의 상아탑 3관문(하드)': {
    price: 1500,
    rewards: {
      정제된파괴강석: 240,
      정제된수호강석: 480,
      찬명돌: 5,
      파편: 5000,
    },
  },
  '혼돈의 상아탑 4관문(하드)': {
    price: 2000,
    rewards: {
      정제된파괴강석: 300,
      정제된수호강석: 600,
      찬명돌: 7,
      파편: 5500,
    },
  },
  '카멘 1관문(노말)': {
    price: 1500,
    rewards: {
      정제된파괴강석: 380,
      정제된수호강석: 760,
      찬명돌: 13,
      파편: 3500,
    },
  },
  '카멘 2관문(노말)': {
    price: 1800,
    rewards: {
      정제된파괴강석: 450,
      정제된수호강석: 900,
      찬명돌: 16,
      파편: 4500,
    },
  },
  '카멘 3관문(노말)': {
    price: 2500,
    rewards: {
      정제된파괴강석: 600,
      정제된수호강석: 1200,
      찬명돌: 20,
      파편: 6000,
    },
  },
  '카멘 1관문(하드)': {
    price: 2000,
    rewards: {
      정제된파괴강석: 500,
      정제된수호강석: 1000,
      찬명돌: 15,
      파편: 5000,
    },
  },
  '카멘 2관문(하드)': {
    price: 2400,
    rewards: {
      정제된파괴강석: 600,
      정제된수호강석: 1200,
      찬명돌: 21,
      파편: 6000,
    },
  },
  '카멘 3관문(하드)': {
    price: 2800,
    rewards: {
      정제된파괴강석: 700,
      정제된수호강석: 1400,
      찬명돌: 27,
      파편: 7500,
    },
  },
  '카멘 4관문(하드)': {
    price: 3600,
    rewards: {
      정제된파괴강석: 850,
      정제된수호강석: 1700,
      찬명돌: 34,
      파편: 9000,
    },
  },
  '에키드나 1관문(노말)': {
    price: 2200,
    rewards: {
      정제된파괴강석: 450,
      정제된수호강석: 900,
      찬명돌: 16,
      파편: 6500,
    },
  },
  '에키드나 2관문(노말)': {
    price: 3400,
    rewards: {
      정제된파괴강석: 800,
      정제된수호강석: 1600,
      찬명돌: 28,
      파편: 9500,
    },
  },
  '에키드나 1관문(하드)': {
    price: 2800,
    rewards: {
      정제된파괴강석: 650,
      정제된수호강석: 1300,
      찬명돌: 28,
      파편: 7500,
    },
  },
  '에키드나 2관문(하드)': {
    price: 4100,
    rewards: {
      정제된파괴강석: 950,
      정제된수호강석: 1900,
      찬명돌: 38,
      파편: 11000,
    },
  },
};
