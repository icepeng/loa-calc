export interface Item {
  isFixed: boolean;
  name: string;
  id: string;
  grade: number | null;
  tradeLeft: number | null;
  effects: [string, number][];
  quality: number;
  price: number;
  buyPrice: number;
  auctionPrice: number;
}
