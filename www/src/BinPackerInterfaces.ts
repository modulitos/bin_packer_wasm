export interface PackedItem {
  id: string;
  dims: number[];
  // dims: number[3];
}

export type PackedBin  = PackedItem[];

export interface Item {
  id: string;
  height: number;
  length: number;
  width: number;
  quantity: number;
}
