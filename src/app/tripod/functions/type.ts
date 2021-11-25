export interface TripodValue {
  skill: number;
  tripod: number;
  level: number;
}

export interface TripodText {
  skill: string;
  tripod: string;
  level: number;
}

export interface Product {
  name: string;
  id: string;
  grade: number;
  effects: [TripodText, TripodText, TripodText];
  buyPrice: number;
  auctionPrice: number;
  tradeLeft: number;
}

export interface SearchResult {
  tripod: TripodValue[];
  products: Product[];
}

export interface ComposeFilter {
  tradeLeft: number;
  requiredTripods: TripodValue[];
  fixedItems: Record<number, Summary>;
  excludedItems: Record<number, Summary[]>;
}

export interface Summary {
  tripod: TripodValue[];
  price: number;
  trade2: number | undefined;
  trade1: number | undefined;
  trade0: number | undefined;
}

export interface ComposeResult {
  price: number;
  summary: Record<number, Summary>;
}
