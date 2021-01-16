// https://subscription.packtpub.com/book/web_development/9781788997379/9/ch09lvl1sec74/testing-webassembly-modules-with-jest
// https://hub.packtpub.com/testing-webassembly-modules-with-jest-tutorial/

// import React from "react";
// import { render, cleanup, screen } from "@testing-library/react";
// import Form from "../Form";
//
// afterEach(cleanup);
//
// test("should render", async () => {
//     // render(
//   const { getByTestId, getByRole, getByText } = render(
//     <Form
//       onPack={() => {
//         console.log("pack!");
//       }}
//     />,
//   );
//   // expect(getByTestId("counter")).toHaveTextContent(0);
//   //   expect(getByRole('button')).not.toHaveA('disabled')
//   // expect(screen.getByRole('button')).not.toHaveAttribute('disabled')
//   expect(getByText("Pack it!")).toBeInTheDocument();
// });
//

// setup();
// this work:
// but this doesn't?!

// HERE!!!

// This module is found when changing "module" to "main" in bin packer's package.json! We'll need our testing runtime to
// detect this somehow, and load the module via "module" not "main"...
// (UPDATE: fixed this with "jest-module-field-resolver" in jest.config.js)

// PROBLEM: failing when trying to execute the .wasm file, with error:
// "SyntaxError: Invalid or unexpected token"
// maybe try this to load the wasm file:
// https://hub.packtpub.com/testing-webassembly-modules-with-jest-tutorial/

import * as bp from "bin_packer_3d";
console.log("bp:", bp);

import inside from "point-in-polygon";
// const inside = require("point-in-polygon");
var polygon = [
  [1, 1],
  [1, 2],
  [2, 2],
  [2, 1],
];
inside([1.5, 1.5], polygon),
  test("adds 1 + 2 to equal 3", () => {
    expect(1 + 2).toBe(3);
  });

// function start(module: typeof import("bin_packer_3d")) {
//   module.setup();
//   // console.log("All modules loaded");
//   // mymod.my_exported_rust_function();
//   test("adds 1 + 2 to equal 3", () => {
//     expect(1 + 2).toBe(3);
//   });
// }
//
// async function load() {
//   start(await import("bin_packer_3d"));
// }
//
// load();
//
// // /**
// //  * @jest-environment node
// //  */
