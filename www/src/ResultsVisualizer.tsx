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
    <React.Fragment>
      {packedBins.map((bin: PackedItem[], bin_index) => {
        return (
          <div key={bin_index}>
            {`Bin #${bin_index + 1}:`}
            {bin.map((item: PackedItem, item_index) => {
              return (
                <div key={item_index}>
                  {`item #${item_index + 1}:    ${JSON.stringify(item)}`}
                </div>
              );
            })}
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default ResultsVisualizer;
