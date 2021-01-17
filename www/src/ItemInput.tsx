import React, { FC } from "react";
import { Item } from "./BinPackerInterfaces";
import { XButton } from "./Buttons";

type ItemInputProps = {
  onUpdate: Function;
  onDelete: (e: React.MouseEvent<HTMLButtonElement>) => void;
  item: Item;
  keyI: number;
};

const ItemInput: FC<ItemInputProps> = ({ item, keyI, onUpdate, onDelete }) => {
  const textOverride = { maxWidth: "8rem" };
  const numOverride = { maxWidth: "6rem" };

  // styles used: https://css-tricks.com/style-form-tailwind-css/
  // TODO: better validation
  return (
    <div className="flex justify-start flex-wrap my-2">
      <div className="field-group mr-8">
        <label
          htmlFor={`id_${keyI}`}
          className="field-label"
        >{`Item id`}</label>
        <input
          className="field"
          style={textOverride}
          id={`id_${keyI}`}
          required
          type="text"
          placeholder="Enter your item's id"
          value={item.id}
          onChange={(e) => {
            onUpdate({
              ...item,
              id: e.target.value,
            });
          }}
        />
      </div>
      <div className="field-group mr-8">
        <label
          htmlFor={`height_${keyI}`}
          className="field-label"
        >{`height`}</label>
        <input
          className="field"
          style={numOverride}
          required={true}
          id={`height_${keyI}`}
          type="number"
          step={0.1}
          placeholder="Enter your item's height"
          value={item.height}
          onChange={(e) =>
            onUpdate({
              ...item,
              height: parseFloat(e.target.value),
            })
          }
        />
      </div>
      <div className="field-group mr-8">
        <label
          htmlFor={`length_${keyI}`}
          className="field-label"
        >{`length`}</label>
        <input
          className="field"
          style={numOverride}
          required={true}
          id={`length_${keyI}`}
          type="number"
          step={0.1}
          placeholder="Enter your item's length"
          value={item.length}
          onChange={(e) =>
            onUpdate({
              ...item,
              length: parseFloat(e.target.value),
            })
          }
        />
      </div>
      <div className="field-group mr-8">
        <label
          htmlFor={`width_${keyI}`}
          className="field-label"
        >{`width`}</label>
        <input
          className="field"
          id={`width_${keyI}`}
          style={numOverride}
          required={true}
          type="number"
          step={0.1}
          placeholder="Enter your item's width"
          value={item.width}
          onChange={(e) =>
            onUpdate({
              ...item,
              width: parseFloat(e.target.value),
            })
          }
        />
      </div>

      <div className="field-group">
        <label
          htmlFor={`quantity_${keyI}`}
          className="field-label"
        >{`quantity`}</label>
        <input
          className="field"
          id={`quantity_${keyI}`}
          style={numOverride}
          required={true}
          type="number"
          placeholder="Enter the quantity"
          value={item.quantity}
          onChange={(e) =>
            onUpdate({
              ...item,
              quantity: parseInt(e.target.value),
            })
          }
        />
      </div>
      <XButton onClick={onDelete} />
    </div>
  );
};

export default ItemInput;
