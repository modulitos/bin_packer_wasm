mod utils;

use crate::utils::set_panic_hook;
use bin_packer_3d::bin::Bin as BinBp;
use bin_packer_3d::item::Item as ItemBp;
use bin_packer_3d::packing_algorithm::packing_algorithm;
use js_sys::Object;
use serde::{Deserialize, Serialize};
use wasm_bindgen::prelude::*;
use wasm_bindgen::JsCast;

#[derive(Serialize, Deserialize, Debug, Eq, PartialEq)]
struct Bin {
    dims: [u32; 3],
}

#[derive(Serialize, Deserialize, Debug, Eq, PartialEq)]
struct Item {
    id: String,
    dims: [u32; 3],
}

extern crate web_sys;

// A macro to provide `println!(..)`-style syntax for `console.log` logging.
macro_rules! log {
    ( $( $t:tt )* ) => {
        web_sys::console::log_1(&format!( $( $t )*).into());
    }
}

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
pub fn setup() {
    set_panic_hook();
    log!("setup complete!");
}

#[wasm_bindgen]
extern "C" {
    fn alert(s: &str);
}

#[wasm_bindgen]
pub fn greet() {
    alert("Hello, wasm-previewer!");
}

#[wasm_bindgen]
pub struct BinPacker {}

#[wasm_bindgen]
impl BinPacker {
    pub fn new() -> Self {
        log!("creating the bin packer!");

        let deck = ItemBp::new("deck", [2, 8, 12]);
        let die = ItemBp::new("die", [8, 8, 8]);
        let items = vec![deck, deck, die, deck, deck];
        log!("items: {:?}", items);

        let _packed_items = packing_algorithm(BinBp::new([8, 8, 12]), &items);
        Self {}
    }

    pub fn packing_algorithm(bin: &JsValue, items: &JsValue) -> JsValue {
        let bin: Bin = bin.into_serde().unwrap();
        let items: Vec<Item> = items.into_serde().unwrap();
        let bins = vec![items];
        JsValue::from_serde(&bins).unwrap()
    }
}
