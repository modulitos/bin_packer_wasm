import React, { useState } from "react";
import { default as ResultsVisualizer } from "./ResultsVisualizer";
import { PackedBin } from "./BinPackerInterfaces";
import Form from "./Form";
import Sidebar from "./Sidebar";

function App() {
  console.log("All modules loaded");

  const [packedBins, setPackedBins] = useState<PackedBin[]>([]);
  const [selectedBin, selectBin] = useState<number>(null);

  console.log("packedBins: ", JSON.stringify(packedBins, null, 2));

  return (
    <div className="container max-w-full grid grid-cols-1 sm:grid-cols-2">
      <ResultsVisualizer packedBins={packedBins} selectedBin={selectedBin} onSelectBin={selectBin}/>
      <Sidebar>
        <Form onPack={(packedBins) => {
          setPackedBins(packedBins);
          selectBin(null)
        }} />
      </Sidebar>
    </div>
  );
}

export default App;
