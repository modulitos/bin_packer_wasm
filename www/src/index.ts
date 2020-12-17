import { BinPacker, setup } from "wasm-previewer";

console.log("All modules loaded");

setup();
const bin = {
  dims: [4, 5, 6],
};

const item_1 = {
  id: "item 1",
  dims: [1, 2, 3],
};

const items = [item_1];
const res = BinPacker.packing_algorithm(bin, items);

console.log("res: ", JSON.stringify(res));
console.assert(JSON.stringify(res) === '[[{"id":"item 1","dims":[1,2,3]}]]');
