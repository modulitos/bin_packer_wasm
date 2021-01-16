import { default as defaultImport} from "./test_mod.mjs";
import assert from "assert";

assert(defaultImport() === "myDefault");
console.log("mjs test passed!");

