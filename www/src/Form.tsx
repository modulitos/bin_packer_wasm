import React, {
  Dispatch,
  DispatchWithoutAction,
  FC,
  useReducer,
  useState,
} from "react";
import { BinPacker, setup } from "wasm-previewer";
import { PackedItem, Item, Bin } from "./BinPackerInterfaces";
import ItemInput from "./ItemInput";
import BinInput from "./BinInput";

enum types {
  UPDATE_ITEM,
  UPDATE_BIN,
}

interface State {
  items: Item[];
  bin: Bin;
}

type Action =
  | { type: types.UPDATE_ITEM; results: { item: Item; i: number } }
  | { type: types.UPDATE_BIN; results: Bin };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case types.UPDATE_ITEM: {
      const i = action.results.i;
      return {
        ...state,
        items: [
          ...state.items.slice(0, i),
          action.results.item,
          ...state.items.slice(i + 1),
        ],
      };
    }
    case types.UPDATE_BIN: {
      return {
        ...state,
        bin: action.results,
      };
    }
  }
}

type FormProps = {
  onPack: (packedBins: PackedItem[][]) => void;
};

const Form: FC<FormProps> = ({ onPack }) => {
  // Suppressing false TS compiler error (IDE issue with jetbrains):
  // https://intellij-support.jetbrains.com/hc/en-us/community/posts/115000502410-Typescript-inspections-fail-invalid-number-of-arguments
  //
  // noinspection TypeScriptValidateTypes
  const [state, dispatch]: [State, Dispatch<Action>] = React.useReducer(
    reducer,
    {
      items: [
        {
          height: 1,
          width: 1,
          length: 1,
          id: "test item",
          quantity: 12,
        },
      ],
      bin: {
        height: 1,
        width: 1,
        length: 1,
      },
    },
  );

  // make this call only on mount:
  setup();

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
        onUpdate={(newItem: Item) =>
          dispatch({
            type: types.UPDATE_ITEM,
            results: {
              item: newItem,
              i: 0,
            },
          })
        }
        item={state.items[0]}
        keyI={0}
      />
      <h1 className="font-sans font-bold text-3xl">{`Your Bin:`}</h1>
      <BinInput
        onUpdate={(newBin: Bin) =>
          dispatch({ type: types.UPDATE_BIN, results: newBin })
        }
        bin={state.bin}
      />

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
