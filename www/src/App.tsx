import React from "react";
import { BinPacker, setup } from "wasm-previewer";
import { default as ResultsVisualizer, PackedItem } from "./ResultsVisualizer";

function App() {
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
  const packedBins: PackedItem[][] = BinPacker.packing_algorithm(bin, items);

  console.log("res: ", JSON.stringify(packedBins));
  console.assert(
    JSON.stringify(packedBins) === '[[{"id":"item 1","dims":[1,2,3]}]]',
    "bin packer failed!!!",
  );
  return (
    <React.Fragment>
      {`Results: `}
      <ResultsVisualizer packedBins={packedBins} />
    </React.Fragment>
  );
}

export default App;
