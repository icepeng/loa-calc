export type Imprint = Record<string, number>;

export type Effects = Record<string, number>;

export type SearchGrade = '유물' | '고대' | '전체';

export interface StoneBook {
  index: number;
  stone: [string, number][];
  stonePenalty: [string, number];
  book: [string, number][];
}

export interface AccMap {
  category: string;
  quality: number;
  dealOption1: [string, number];
  dealOption2?: [string, number];
  name: string;
  imprintOption1: [string, number];
  imprintOption2: [string, number];
  imprintPenalty: [string, number];
}

export interface Candidate {
  stoneBook: StoneBook;
  combinations: Imprint[][];
}

export interface Item {
  isFixed: boolean;
  name: string;
  id: string | null;
  grade: number | null;
  tradeLeft: number | null;
  effects: [string, number][];
  quality: number;
  price: number;
  buyPrice: number;
  auctionPrice: number;
}

export interface ComposeResult {
  price: number;
  effects: Effects;
  items: Record<string, Item>;
  stoneBook: StoneBook;
}

export interface ComposeFilter {
  effects: Effects;
  hasBuyPrice: boolean;
  allowedPenalties: string[];
  tradeLeft: number;
  ancientCountMin: number;
  exclude: Set<string>;
}
