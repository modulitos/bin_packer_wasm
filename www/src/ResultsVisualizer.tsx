import React from "react";
import { PackedBin, PackedItem } from "./BinPackerInterfaces";

type ResultsVisualizerProps = {
  packedBins: PackedBin[];
};

const ResultsVisualizer: React.FC<ResultsVisualizerProps> = ({
  packedBins,
}) => {
  if (packedBins.length == 0) {
    return <div>{"Select some bins to start packing!"}</div>;
  }

  return (
    <div className="object-fill">
      {`Results: `}
      {packedBins.map((bin: PackedItem[], bin_index) => {
        return (
          <div className="p-2" key={bin_index}>
            {`Bin #${bin_index + 1}, ${bin.length} item(s):`}
            {bin.map((item: PackedItem, item_index) => {
              return (
                <div className="p-4" key={item_index}>
                  {JSON.stringify(item)}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default ResultsVisualizer;
