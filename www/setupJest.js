import { enableFetchMocks } from "jest-fetch-mock";
import { readFileSync } from "fs";

// https://blog.valuemotive.com/testing-webassembly-with-jest-jsdom-6d76af120b8c
console.log("testing!");

enableFetchMocks(); // Read the .wasm file to memory
const file = readFileSync("./node_modules/bin_packer_3d/bin_packer_3d_bg.wasm");
console.log("testing!");

fetch.mockResponse(async (request) => {
  console.log("mock response!");
  if (request.url.endsWith(".wasm")) {
    return {
      status: 200,
      body: file,
    };
  } else {
    return {
      status: 404,
      body: "Not Found",
    };
  }
});
