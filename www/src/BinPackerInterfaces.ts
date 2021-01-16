export interface PackedItem {
  id: string;
  dims: number[];
  // dims: number[3];
}

export type PackedBin  = PackedItem[];

export interface Bin {
  height: number; // float
  length: number; // float
  width: number; // float
}

export interface Item {
  id: string;
  height: number; // float
  length: number; // float
  width: number; // float
  quantity: number; // int
}
