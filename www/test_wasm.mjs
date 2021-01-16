// This module tests that node can load our wasm code, like so:
// node --experimental-modules --experimental-wasm-modules test_wasm.mjs

/// NOTE: this requires the npm package.json to have a "main" field
import { BinPacker } from "bin_packer_3d";
// import * as bp from "bin_packer_3d";
import assert from "assert";

// console.log("bp:", bp);

const res = BinPacker.packing_algorithm(
  {
    dims: [1, 1, 2],
  },
  [
    {
      id: "1",
      dims:
        [1, 1, 1]
    },
    {
      id: "1",
      dims:
        [1, 1, 1]
    },
    {
      id: "1",
      dims:
        [1, 1, 1]
    }
  ]
)
assert(JSON.stringify(res) === JSON.stringify([["1", "1"], ["1"]]));

console.log("passed!")
