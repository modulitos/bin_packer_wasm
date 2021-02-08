import React, { Dispatch, FC } from "react";
// use this in package.json for local dev: "bin_packer_3d": "file:../pkg"
import { BinPacker, setup } from "bin_packer_3d";
import { PackedItem, Item, Bin, PackedBin } from "./BinPackerInterfaces";
import ItemInput from "./ItemInput";
import BinInput from "./BinInput";
import { PlusButton } from "./Buttons";

enum types {
  UPDATE_ITEM,
  UPDATE_BIN,
  CREATE_ITEM,
  DELETE_ITEM,
  SHOW_ERROR,
}

interface State {
  items: Item[];
  bin: Bin;
  error?: string;
}

type Action =
  | { type: types.UPDATE_ITEM; results: { item: Item; i: number } }
  | { type: types.CREATE_ITEM }
  | { type: types.DELETE_ITEM; results: number }
  | { type: types.UPDATE_BIN; results: Bin }
  | { type: types.SHOW_ERROR; error: string };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case types.CREATE_ITEM: {
      const i = state.items.length;
      return {
        ...state,
        items: [
          ...state.items,
          {
            id: `item ${i + 1}`,
            height: 1,
            length: 1,
            width: 1,
            quantity: 1,
          },
        ],
        error: null,
      };
    }
    case types.UPDATE_ITEM: {
      const i = action.results.i;
      return {
        ...state,
        items: [
          ...state.items.slice(0, i),
          action.results.item,
          ...state.items.slice(i + 1),
        ],
        error: null,
      };
    }
    case types.DELETE_ITEM: {
      const i = action.results;
      return {
        ...state,
        items: [...state.items.slice(0, i), ...state.items.slice(i + 1)],
        error: null,
      };
    }
    case types.UPDATE_BIN: {
      return {
        ...state,
        bin: action.results,
        error: null,
      };
    }
    case types.SHOW_ERROR: {
      return {
        ...state,
        error: action.error,
      };
    }
  }
}

type FormProps = {
  onPack: (packedBins: PackedBin[]) => void;
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
          height: 2,
          width: 8,
          length: 12,
          id: "deck",
          quantity: 5,
        },
        {
          height: 6,
          width: 6,
          length: 6,
          id: "die",
          quantity: 1,
        },
      ],
      bin: {
        height: 8,
        width: 8,
        length: 12,
      },
      error: null,
    },
  );

  React.useEffect(() => {
    console.log("setup wasm!");
    setup();
  }, []);

  const packBins = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    try {
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
      // const packedBins = [[{ id: "item 1", dims: [1, 2, 3] }]];
      // console.assert(
      //   JSON.stringify(packedBins) === '[[{"id":"item 1","dims":[1,2,3]}]]',
      //   "bin packer failed!!!",
      // );

      console.log("packedBins:", packedBins)
      onPack(packedBins);
    } catch (error) {
      if (typeof error === "string" && error.startsWith("binpack error")) {
        dispatch({
          type: types.SHOW_ERROR,
          error: error,
        });
      } else {
        throw error;
      }
    }
  };

  return (
    <form className="flex flex-col p-4 sm:p-6">
      <h1 className="font-sans font-bold text-3xl my-2">{`Your Items:`}</h1>
      {state.items.map((item, i) => (
        <ItemInput
          onUpdate={(newItem: Item) =>
            dispatch({
              type: types.UPDATE_ITEM,
              results: {
                item: newItem,
                i,
              },
            })
          }
          onDelete={() =>
            dispatch({
              type: types.DELETE_ITEM,
              results: i,
            })
          }
          item={item}
          key={i}
          keyI={i}
        />
      ))}
      <PlusButton
        onClick={() =>
          dispatch({
            type: types.CREATE_ITEM,
          })
        }
      />
      <h1 className="font-sans font-bold text-3xl my-2">{`Your Bin:`}</h1>
      <BinInput
        onUpdate={(newBin: Bin) =>
          dispatch({ type: types.UPDATE_BIN, results: newBin })
        }
        bin={state.bin}
      />
      <button
        className="btn btn-teal btn-teal:hover justify-self-left max-w-sm my-2"
        type="submit"
        onClick={(e) => packBins(e)}
      >
        {`Pack it!`}
      </button>
      {state.error && (
        <React.Fragment>
          <h5 className="error-text text-2xl col-span-full">
            {"Unable to pack your request, due to errors:"}
          </h5>
          <p className="error-text  col-span-full">{state.error}</p>
        </React.Fragment>
      )}
    </form>
  );
};

export default Form;
