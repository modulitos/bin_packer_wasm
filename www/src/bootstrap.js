// A dependency graph that contains any wasm must all be imported
// asynchronously. This `bootstrap.ts` file does the single async import, so
// that no one else needs to worry about it again.
//
// https://github.com/rustwasm/rust-webpack-template/issues/43
import("./index")
  .catch(e => console.error("Oh no! Error importing `index` file:", e));
