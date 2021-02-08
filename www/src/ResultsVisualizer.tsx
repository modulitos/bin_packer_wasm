import React from "react";
import { PackedBin, PackedBinWithPosition } from "./BinPackerInterfaces";
import ResultsCanvas from "./webgl/ResultsCanvas";
import BinSummary from "./BinSummary";

// TODO: Bin packer currently doesn't return positional data of the packed items, so we're hard-coding some for now just
// to demo the 3-D visualizer.
const PACKED_BINS: PackedBinWithPosition[] = [
  {
    dims: [12, 8, 8], // length, height, depth
    items: [
      {
        id: "deck",
        dims: [12, 2, 8],
        position: [0, 0, 0],
      },
      {
        id: "deck",
        dims: [12, 2, 8],
        position: [0, 2, 0],
      },
      {
        id: "deck",
        dims: [12, 2, 8],
        position: [0, 4, 0],
      },
      {
        id: "deck",
        dims: [12, 2, 8],
        position: [0, 6, 0],
      },
    ],
  },
  {
    dims: [12, 8, 8], // length, height, depth
    items: [
      {
        id: "deck",
        dims: [12, 2, 8],
        position: [0, 0, 0],
      },
      {
        id: "die",
        dims: [6, 6, 6],
        position: [0, 2, 0],
      },
    ],
  },
];

type ResultsVisualizerProps = {
  packedBins: PackedBin[];
  selectedBin: number;
  onSelectBin: (binIndex: number) => void;
};

const ResultsVisualizer: React.FC<ResultsVisualizerProps> = ({
  packedBins,
  selectedBin,
  onSelectBin,
}) => {
  return (
    <div className="z-10">
      <BinSummary
        packedBins={packedBins}
        onSelectBin={onSelectBin}
        selectedBin={selectedBin}
      />
      {packedBins.length > 0 && selectedBin != null && (
        <>
          <p className="font-bold text-xl">{`3D rendering of packed bin #${
            selectedBin + 1
          }:`}</p>
          <p>{`(NOTE: this visualization is just a demo and not accurate)`}</p>

          <ResultsCanvas
            packedBin={PACKED_BINS[selectedBin % PACKED_BINS.length]}
          />
        </>
      )}
    </div>
  );
};
export default ResultsVisualizer;
