import React from "react";
import { PackedBin, PackedItem } from "./BinPackerInterfaces";

type ResultsVisualizerProps = {
  packedBins: PackedBin[];
};

const ResultsVisualizer: React.FC<ResultsVisualizerProps> = ({
  packedBins,
}) => {
  if (packedBins.length == 0) {
    return <div>{"Fill out the form to start packing."}</div>;
  }

  return (
    <div className="object-fill">
      {`Results: `}
      {packedBins.map((bin: PackedItem[], bin_index) => {
        return (
          <div className="p-2" key={bin_index}>
            <p>{`Bin #${bin_index + 1}`}</p>
            <p>{`${bin.length} item(s):`}</p>
            {bin.map((item: PackedItem, item_index) => {
              return (
                <div className="p-4" key={item_index}>
                  {JSON.stringify(item, null, 2)}
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
