import React, {useState} from "react";
import { default as ResultsVisualizer} from "./ResultsVisualizer";
import {PackedBin} from "./BinPackerInterfaces";
import Form from "./Form";

function App() {
  console.log("All modules loaded");

  const [packedBins, setPackedBins] = useState<PackedBin[]>([]);


  console.log("packedBins: ", JSON.stringify(packedBins, null, 2));

  return (
    <div className="container max-w-full inline-grid gap-x-4 grid-cols-2">
      <ResultsVisualizer packedBins={packedBins} />
      <Form onPack={setPackedBins}/>
    </div>
  );
}

export default App;
