
// TODO: refactor BinPacker to support this interface, which will allow us to know an item's position within the bin.
export interface PackedItemWithPosition {
  id: string;
  // this includes the size and rotation of the packed item.
  dims: [
    x: number,
    y: number,
    z: number
  ];
  // position of the item, relative to the bottom left back corner of the bin.
  position: [
    x: number,
    y: number,
    z: number
  ];
}
export interface PackedBinWithPosition  {
  items: PackedItemWithPosition[],
  dims: [
    x: number,
    y: number,
    z: number
  ]
}

// legacy types, currently being returned from the bin packer crate:
export interface PackedItem {
  id: string;
  dims: [
    x: number,
    y: number,
    z: number
  ];
}
export type PackedBin  = string[]; // a string of the item id's

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
