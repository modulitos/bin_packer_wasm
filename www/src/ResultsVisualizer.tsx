import React from "react";
import { PackedBin, PackedBinWithPosition } from "./BinPackerInterfaces";
import ResultsCanvas from "./webgl/ResultsCanvas";
import BinSummary from "./BinSummary";

type ResultsVisualizerProps = {
  packedBins: PackedBin[];
};

const ResultsVisualizer: React.FC<ResultsVisualizerProps> = ({
  packedBins,
}) => {
  // TODO: testing only
  // packedBins = [
  //   ["deck", "deck", "deck", "deck"],
  //   ["deck", "die"],
  // ];
  packedBins = [
    [
      "deck",
      "deck",
      "deck",
      "deck",
      "blah",
      "asdf",
      "qwer",
      "qwerqw",
      "werqw",
      "qwrqw",
      "qwerw",
    ],
    ["deck", "deck", "deck", "deck"],
    ["deck", "deck"],
    ["die", "die"],
    ["die", "die"],
    ["die", "die"],
    ["die", "die"],
    ["die", "die"],
    ["die", "die"],
    ["die", "die"],
    ["die"],
  ];

  const packedBin: PackedBinWithPosition = [];
  return (
    <div className="z-10">
      <BinSummary packedBins={packedBins} />
      <ResultsCanvas packedBin={packedBin} />
    </div>
  );
};

export default ResultsVisualizer;
