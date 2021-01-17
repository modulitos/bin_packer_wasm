import React from "react";
import { Bin } from "./BinPackerInterfaces";

type BinInputProps = {
  onUpdate: Function;
  bin: Bin;
};

const BinInput: React.FC<BinInputProps> = ({ bin, onUpdate }) => {
  const numOverride = { maxWidth: "6rem" };

  return (
    <div className="flex justify-start flex-wrap my-2">
      <div className="field-group mr-8">
        <label
          htmlFor={`bin_input_height`}
          className="field-label"
        >{`Height`}</label>
        <input
          className="field"
          id="bin_input_height"
          style={numOverride}
          required={true}
          type="number"
          step={0.1}
          aria-label="bin height"
          placeholder="Enter your bin's height"
          value={bin.height}
          onChange={(e) => {
            onUpdate({
              ...bin,
              height: parseFloat(e.target.value),
            });
          }}
        />
      </div>
      <div className="field-group mr-8">
        <label
          htmlFor={`bin_input_length`}
          className="field-label"
        >{`Length`}</label>
        <input
          className="field"
          id="bin_input_length"
          style={numOverride}
          required={true}
          type="number"
          step={0.1}
          aria-label="bin length"
          placeholder="Enter your bin's length"
          value={bin.length}
          onChange={(e) => {
            onUpdate({
              ...bin,
              length: parseFloat(e.target.value),
            });
          }}
        />
      </div>
      <div className="field-group">
        <label
          htmlFor={`bin_input_width`}
          className="field-label"
        >{`Width`}</label>
        <input
          className="field"
          id="bin_input_width"
          style={numOverride}
          required={true}
          type="number"
          step={0.1}
          aria-label="bin width"
          placeholder="Enter your bin's width"
          value={bin.width}
          onChange={(e) => {
            onUpdate({
              ...bin,
              width: parseFloat(e.target.value),
            });
          }}
        />
      </div>
    </div>
  );
};

export default BinInput;
