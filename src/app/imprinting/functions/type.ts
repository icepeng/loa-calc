export type Imprint = Record<string, number>;

export type Effects = Record<string, number>;

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

export interface Item {
  isFixed: boolean;
  name: string;
  id: string | null;
  grade: number | null;
  tradeLeft: number | null;
  effects: Effects;
  quality: number;
  price: number;
  buyPrice: number;
  auctionPrice: number;
}

export interface ComposeResult {
  price: number;
  effects: Effects;
  items: Record<string, Item>;
}

export interface ComposeFilter {
  effects: Effects;
  hasBuyPrice: boolean;
  tradeLeft: number;
  exclude: Set<string>;
}
