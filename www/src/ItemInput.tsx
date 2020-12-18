import React, { FC } from "react";
import { Item } from "./BinPackerInterfaces";

type ItemInputProps = {
  setHeight: Function;
  setWidth: Function;
  setLength: Function;
  setId: Function;
  setQuantity: Function;
  // TODO: include a remove button:
  // delete: Function;
  item: Item;
  keyI: number;
};

const ItemInput: FC<ItemInputProps> = ({
  setHeight,
  setWidth,
  setLength,
  setId,
  setQuantity,
  item,
  keyI,
}) => {
  let classes = "bg-gray-200 shadow-inner rounded-l p-2";
  return (
    <div className="inline-grid gap-x-2 grid-cols-5">
      <input
        className={classes}
        id={`id_${keyI}`}
        type="text"
        placeholder="Enter your item's id"
        value={item.id}
        onChange={(e) => setId(e.target.value)}
      />
      <input
        className={classes}
        id={`height_${keyI}`}
        type="number"
        step={0.1}
        placeholder="Enter your item's height"
        value={item.height}
        onChange={(e) => setHeight(e.target.value)}
      />
      <input
        className={classes}
        id={`length_${keyI}`}
        type="number"
        step={0.1}
        placeholder="Enter your item's length"
        value={item.length}
        onChange={(e) => setLength(e.target.value)}
      />
      <input
        className={classes}
        id={`width_${keyI}`}
        type="number"
        step={0.1}
        placeholder="Enter your item's width"
        value={item.width}
        onChange={(e) => setWidth(e.target.value)}
      />
      <input
        className={classes}
        id={`quantity_${keyI}`}
        type="number"
        placeholder="Enter the quantity"
        value={item.quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
    </div>
  );
};

export default ItemInput;
