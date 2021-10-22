export type Imprint = Record<string, number>;

export type Effects = Record<string, number>;

export interface SearchOption {
  category: string;
  quality: number;
  dealOption1: {
    type: string;
    min: number;
  };
  dealOption2?: {
    type: string;
    min: number;
  };
  imprintOption1?: {
    type: string;
    min: number;
  };
  imprintOption2?: {
    type: string;
    min: number;
  };
}

export interface Item {
  name: string;
  effects: Effects;
  quality: number;
  price: number;
}

export interface ComposeResult {
  price: number;
  effects: Effects;
  items: Record<string, Item>;
}
