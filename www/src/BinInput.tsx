import React from "react";
import { Bin, Item } from "./BinPackerInterfaces";

type BinInputProps = {
  onUpdate: Function;
  bin: Bin;
};

const BinInput: React.FC<BinInputProps> = ({ bin, onUpdate }) => {
  // TODO: DRY up this CSS with ItemInput:
  const numOverride = { maxWidth: "6rem" };

  return (
    <div className="flex justify-start">
      <div className="field-group pr-8">
        <label
          htmlFor={`bin_input_height`}
          className="field-label"
        >{`Height`}</label>
        <input
          className="field"
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
      <div className="field-group pr-8">
        <label
          htmlFor={`bin_input_length`}
          className="field-label"
        >{`Length`}</label>
        <input
          className="field"
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
      <div className="field-group pr-8">
        <label
          htmlFor={`bin_input_width`}
          className="field-label"
        >{`Width`}</label>
        <input
          className="field"
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
