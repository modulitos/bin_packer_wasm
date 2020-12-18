import React from "react";
import { Bin, Item } from "./BinPackerInterfaces";

type BinInputProps = {
  onUpdate: Function;
  bin: Bin;
};

const BinInput: React.FC<BinInputProps> = ({ bin, onUpdate }) => {
  // TODO: DRY up this CSS with ItemInput:
  const inputGroupClasses = "grid grid-flow-row pr-8";
  const label_classes =
    "font-bold text-gray-600 text-xs leading-8 uppercase h-6 mx-2 mt-3";
  const input_classes = "bg-gray-200 shadow-inner rounded-l p-2";
  const numOverride = { maxWidth: "6rem" };

  return (
    <div className="flex justify-start">
      <div className={inputGroupClasses}>
        <label
          htmlFor={`bin_input_height`}
          className={label_classes}
        >{`Height:`}</label>
        <input
          className={input_classes}
          id="bin_input_height"
          style={numOverride}
          type="number"
          aria-label="bin height"
          placeholder="Enter your bin's height"
          value={bin.height}
          onChange={(e) => {
            onUpdate({
              ...bin,
              height: parseInt(e.target.value),
            });
          }}
        />
      </div>
      <div className={inputGroupClasses}>
        <label
          htmlFor={`bin_input_length`}
          className={label_classes}
        >{`Length:`}</label>
        <input
          className={input_classes}
          id="bin_input_length"
          style={numOverride}
          type="number"
          aria-label="bin length"
          placeholder="Enter your bin's length"
          value={bin.length}
          onChange={(e) => {
            onUpdate({
              ...bin,
              length: parseInt(e.target.value),
            });
          }}
        />
      </div>
      <div className={inputGroupClasses}>
        <label
          htmlFor={`bin_input_width`}
          className={label_classes}
        >{`Width:`}</label>
        <input
          className={input_classes}
          id="bin_input_width"
          style={numOverride}
          type="number"
          aria-label="bin width"
          placeholder="Enter your bin's width"
          value={bin.width}
          onChange={(e) => {
            onUpdate({
              ...bin,
              width: parseInt(e.target.value),
            });
          }}
        />
      </div>
    </div>
  );
};

export default BinInput;
