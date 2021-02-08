import React from "react";
import { PackedBin } from "./BinPackerInterfaces";

type BinSummaryProps = {
  packedBins: PackedBin[];
  onSelectBin: (binIndex: number) => void;
  selectedBin: number;
};

const BinSummary: React.FC<BinSummaryProps> = ({
  packedBins,
  onSelectBin,
  selectedBin,
}) => {
  const groupedBins = packedBins.map((bin) => {
    return bin.reduce((acc: { [id: string]: number }, itemId) => {
      acc[itemId] ??= 0;
      acc[itemId] += 1;
      return acc;
    }, {});
  });

  return (
    <div className="overflow-x-auto p-4 sm:p-6">
      <h1 className="font-sans font-bold text-2xl mb-2 sm:mb-6">
        {packedBins.length == 0
          ? "Fill out the form to pack some bins!"
          : "Packed Bins Results"}
      </h1>
      <div className="flex flex-row overflow-x-auto">
        {groupedBins.map((bin, i) => {
          const borderClass =
            i == selectedBin
              ? "border-teal-500 hover:border-teal-500"
              : "border-gray-100";
          return (
            <div
              className={`cursor-pointer mx-4 my-2 px-4 py-2 rounded-lg bg-gray-100 flex-shrink-0 hover:bg-teal-300 hover:border-teal-300 box-content border-4 ${borderClass}`}
              onClick={() => onSelectBin(i)}
              key={i}
            >
              <p className="whitespace-nowrap font-bold">{`Bin #${i + 1}:`}</p>
              {Object.entries(bin).map(([itemId, count], j) => {
                return (
                  <p
                    key={`${i}-${j}`}
                    className="whitespace-nowrap"
                  >{`${itemId} x ${count}`}</p>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BinSummary;
