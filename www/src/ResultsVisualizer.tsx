import React from "react";

export interface PackedItem {
  id: String;
  dims: number[];
}

type ResultsVisualizerProps = {
  packedBins: PackedItem[][];
};

const ResultsVisualizer: React.FC<ResultsVisualizerProps> = ({
  packedBins,
}) => {
  return (
    <div >
      {`Results: `}
      {packedBins.map((bin: PackedItem[], bin_index) => {
        return (
          <div className="p-2" key={bin_index}>
            {`Bin #${bin_index + 1}:`}
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
