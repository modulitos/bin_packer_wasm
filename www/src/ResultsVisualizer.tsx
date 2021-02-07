import React from "react";
import {
  PackedBin,
  PackedBinWithPosition,
  PackedItem,
  PackedItemWithPosition,
} from "./BinPackerInterfaces";
import BinCanvas from "./webgl/BinCanvas";
import BinSummary from "./BinSummary";

type ResultsVisualizerProps = {
  packedBins: PackedBin[];
};

const ResultsVisualizer: React.FC<ResultsVisualizerProps> = ({
  packedBins,
}) => {
  // return (
  //   <div className="object-fill">
  //     {`Results: `}
  //     {packedBins.map((bin: PackedItem[], bin_index) => {
  //       return (
  //         <div className="p-2" key={bin_index}>
  //           <p>{`Bin #${bin_index + 1}`}</p>
  //           <p>{`${bin.length} item(s):`}</p>
  //           {bin.map((item: PackedItem, item_index) => {
  //             return (
  //               <div className="p-4" key={item_index}>
  //                 {JSON.stringify(item, null, 2)}
  //               </div>
  //             );
  //           })}
  //         </div>
  //       );
  //     })}
  //   </div>
  // );
  const packedBin: PackedBinWithPosition = [];
  return (
    <div className="overflow-x-auto p-4 sm:p-6 z-10">
      <h1 className="font-sans font-bold text-2xl mb-2 sm:mb-6">
        {packedBins.length == 0
          ? "Fill out the form to pack some bins!"
          : "Packed Bins Results"}
      </h1>
      <BinSummary packedBins={packedBins} />
      <BinCanvas packedBin={packedBin} />
    </div>
  );
};

export default ResultsVisualizer;
