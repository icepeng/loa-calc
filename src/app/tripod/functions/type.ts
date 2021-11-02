export interface TripodForm {
  skill: number;
  tripod: number;
  level: number;
}

export interface Product {
  name: string;
  id: string;
  grade: number;
  effects: {
    skill: string;
    tripod: string;
    level: number;
  }[];
  auctionPrice: number;
  buyPrice: number;
  price: number;
  tradeLeft: number;
}

export interface SearchResult {
  tripod: TripodForm[];
  products: Product[];
}

export interface Summary {
  tripod: TripodForm[];
  price: number;
  trade2: number | undefined;
  trade1: number | undefined;
  trade0: number | undefined;
}

export interface ComposeResult {
  price: number;
  summary: Record<number, Summary>;
}
