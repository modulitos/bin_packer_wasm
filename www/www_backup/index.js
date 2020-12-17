import { BinPacker, setup } from "wasm-previewer";
// import * as wasm from "hello-wasm-pack";

// wasm.greet();
// wasm.bin_pack();
// const binPacker = BinPacker.new();
setup();
const bin = {
    dims: [4,5,6]
}

const item_1 = {
    id: "item 1",
        dims: [1,2, 3]
}
const items = [
    item_1,
]
const res = BinPacker.packing_algorithm(bin, items);

console.log("res: ", JSON.stringify(res));
console.assert(JSON.stringify(res) === '[[{"id":"item 1","dims":[1,2,3]}]]');