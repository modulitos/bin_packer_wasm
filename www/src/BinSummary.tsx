import React from "react";
import { PackedBin, PackedBinWithPosition } from "./BinPackerInterfaces";

type BinSummaryProps = {
  packedBins: PackedBin[];
};

const BinSummary: React.FC<BinSummaryProps> = ({ packedBins }) => {
  return <div className="p-4 sm:p-6">test</div>;
};

export default BinSummary;
