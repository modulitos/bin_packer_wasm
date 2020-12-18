import React, { FC, useState } from "react";
import { BinPacker, setup } from "wasm-previewer";
import { PackedItem, Item } from "./BinPackerInterfaces";
import ItemInput from "./ItemInput";

type FormProps = {
  onPack: (packedBins: PackedItem[][]) => void;
};

const Form: FC<FormProps> = ({ onPack }) => {
  setup();
  const [items, setItemQuantity] = useState<Item[]>([
    {
      height: 1,
      width: 1,
      length: 1,
      id: "test item",
      quantity: 12,
    },
  ]);

  const packBins = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    // TODO: call this with our actual items:
    const bin = {
      dims: [4, 5, 6],
    };

    const item_1 = {
      id: "item 1",
      dims: [1, 2, 3],
    };

    const test_items = [item_1];
    const packedBins = BinPacker.packing_algorithm(bin, test_items);
    console.assert(
      JSON.stringify(packedBins) === '[[{"id":"item 1","dims":[1,2,3]}]]',
      "bin packer failed!!!",
    );

    onPack(packedBins);
  };

  return (
    <form className="grid grid-flow-row grid-cols-1 gap-4 mx-4 my-8">
      <h1 className="font-sans font-bold text-3xl">{`Your Items:`}</h1>
      <ItemInput
        setHeight={console.log}
        setLength={console.log}
        setWidth={console.log}
        setQuantity={console.log}
        setId={console.log}
        item={items[0]}
        keyI={0}
      />
      {/*{`Your Bin:`}*/}
      {/*<input*/}
      {/*  className="bg-gray-200 shadow-inner rounded-l p-2 flex-1"*/}
      {/*  id="bin"*/}
      {/*  type="email"*/}
      {/*  aria-label="email address"*/}
      {/*  placeholder="Enter your bin's dimensions"*/}
      {/*  value={itemQuantity}*/}
      {/*  onChange={(e) => console.log(e.target.value)}*/}
      {/*/>*/}
      <button
        className="bg-blue-600 hover:bg-blue-700 duration-300 text-white shadow p-2 rounded-r max-w-lg justify-self-center"
        type="submit"
        onClick={(e) => packBins(e)}
      >
        {`Pack it!`}
      </button>
    </form>
  );
};

export default Form;
