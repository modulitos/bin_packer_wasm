import React from "react";
import { BinPacker, setup } from "wasm-previewer";

function App() {
  console.log("All modules loaded");

  setup();
  const bin = {
    dims: [4, 5, 6],
  };

  const item_1 = {
    id: "item 1",
    dims: [1, 2, 3],
  };

  const items = [item_1];
  const res = BinPacker.packing_algorithm(bin, items);

  console.log("res: ", JSON.stringify(res));
  console.assert(
    JSON.stringify(res) === '[[{"id":"item 1","dims":[1,2,3]}]]',
    "bin packer failed!!!",
  );
  return (
    <div className="">
      {/*<img className="" src={require('./profile.jpg')} alt="Display" />*/}
      <div className="">
        <div className="">Blessing Krofegha</div>
        <p className="">
          When i’m not coding i switch to netflix with biscuits and cold tea as
          my companion. <span></span>😜
        </p>
      </div>
      <div className="">
        <span className="">#Software Engineer</span>
        <span className="">#Writter</span>
        <span className="">#Public Speaker</span>
      </div>
    </div>
  );
}

export default App;
