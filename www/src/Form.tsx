import React, {
  Dispatch,
  DispatchWithoutAction,
  FC,
  useReducer,
  useState,
} from "react";
// use this in package.json for local dev: "bin_packer_3d": "file:../pkg"
import { BinPacker, setup } from "bin_packer_3d";
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
          height: 6,
          width: 4,
          length: 1,
          id: "test item",
          quantity: 12,
        },
      ],
      bin: {
        height: 4,
        width: 4,
        length: 6,
      },
    },
  );

  React.useEffect(() => {
    console.log("setup wasm!");
    setup();
  }, []);

  const packBins = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const packedBins = BinPacker.packing_algorithm(
      {
        dims: [state.bin.height, state.bin.length, state.bin.width],
      },
      state.items.flatMap((item) => {
        return Array.from({ length: item.quantity }).fill({
          id: item.id,
          dims: [item.height, item.length, item.width],
        });
      }),
    );
    // console.assert(
    //   JSON.stringify(packedBins) === '[[{"id":"item 1","dims":[1,2,3]}]]',
    //   "bin packer failed!!!",
    // );

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
        className="block text-white uppercase text-lg p-4 rounded max-w-sm bg-teal-200 hover:bg-teal-600 justify-self-left "
        type="submit"
        onClick={(e) => packBins(e)}
      >
        {`Pack it!`}
      </button>
    </form>
  );
};

export default Form;
