import React, { useState } from "react";
import { default as ResultsVisualizer } from "./ResultsVisualizer";
import { PackedBin } from "./BinPackerInterfaces";
import Form from "./Form";
import Sidebar from "./Sidebar";

function App() {
  console.log("All modules loaded");

  const [packedBins, setPackedBins] = useState<PackedBin[]>([]);

  console.log("packedBins: ", JSON.stringify(packedBins, null, 2));

  return (
    <div className="container max-w-full inline-grid gap-x-4 grid-cols-1 sm:grid-cols-2">
      <ResultsVisualizer packedBins={packedBins} />
      <Sidebar>
        <Form onPack={setPackedBins} />
      </Sidebar>
    </div>
  );
}

export default App;
