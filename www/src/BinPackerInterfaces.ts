export interface PackedItem {
  id: string;
  dims: [
    x?: number,
    y?: number,
    z?: number
  ];
  // dims: number[3];
}
export type PackedBin  = PackedItem[];

// TODO: refactor BinPacker to support this interface, which will allow us to position the items within a bin.

export interface PackedItemWithPosition {
  id: string;
  dims: [
    x?: number,
    y?: number,
    z?: number
  ];
}
export type PackedBinWithPosition  = PackedItemWithPosition[];

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
