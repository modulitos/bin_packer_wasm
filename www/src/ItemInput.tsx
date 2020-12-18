import React, { FC } from "react";
import { Item } from "./BinPackerInterfaces";

type ItemInputProps = {
  onUpdate: Function;
  // TODO: include a remove button:
  // onDelete: Function;
  item: Item;
  keyI: number;
};

const ItemInput: FC<ItemInputProps> = ({ item, keyI, onUpdate }) => {
  const inputGroupClasses = "grid grid-flow-row";
  const label_classes =
    "font-bold text-gray-600 text-xs leading-8 uppercase h-6 mx-2 mt-3";
  const input_classes = "bg-gray-200 shadow-inner rounded-l p-2";
  const textOverride = { maxWidth: "8rem" };
  const numOverride = { maxWidth: "6rem" };
  // TODO: better styles: https://css-tricks.com/style-form-tailwind-css/ and validation of form fields
  return (
    <div className="grid grid-flow-row grid-cols-5">
      <div className={inputGroupClasses}>
        <label
          htmlFor={`id_${keyI}`}
          className={label_classes}
        >{`Item id:`}</label>
        <input
          className={input_classes}
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
      <div className={inputGroupClasses}>
        <label
          htmlFor={`height_${keyI}`}
          className={label_classes}
        >{`height:`}</label>
        <input
          className={input_classes}
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
              height: e.target.value,
            })
          }
        />
      </div>
      <div className={inputGroupClasses}>
        <label
          htmlFor={`length_${keyI}`}
          className={label_classes}
        >{`length:`}</label>
        <input
          className={input_classes}
          id={`length_${keyI}`}
          style={numOverride}
          type="number"
          step={0.1}
          placeholder="Enter your item's length"
          value={item.length}
          onChange={(e) =>
            onUpdate({
              ...item,
              length: e.target.value,
            })
          }
        />
      </div>
      <div className={inputGroupClasses}>
        <label
          htmlFor={`width_${keyI}`}
          className={label_classes}
        >{`width:`}</label>
        <input
          className={input_classes}
          id={`width_${keyI}`}
          style={numOverride}
          type="number"
          step={0.1}
          placeholder="Enter your item's width"
          value={item.width}
          onChange={(e) =>
            onUpdate({
              ...item,
              width: e.target.value,
            })
          }
        />
      </div>

      <div className={inputGroupClasses}>
        <label
          htmlFor={`quantity_${keyI}`}
          className={label_classes}
        >{`quantity:`}</label>
        <input
          className={input_classes}
          id={`quantity_${keyI}`}
          style={numOverride}
          type="number"
          placeholder="Enter the quantity"
          value={item.quantity}
          onChange={(e) =>
            onUpdate({
              ...item,
              quantity: e.target.value,
            })
          }
        />
      </div>
    </div>
  );
};

export default ItemInput;
