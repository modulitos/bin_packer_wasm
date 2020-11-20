mod utils;

use wasm_bindgen::prelude::*;
use bin_packer_3d::bin::Bin;
use bin_packer_3d::item::Item;
use bin_packer_3d::packing_algorithm::packing_algorithm;
use crate::utils::set_panic_hook;

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
extern {
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

        let deck = Item::new("deck", [2, 8, 12]);
        let die = Item::new("die", [8, 8, 8]);
        let items = vec![deck, deck, die, deck, deck];
        log!("items: {:?}", items);

        let _packed_items = packing_algorithm(Bin::new([8, 8, 12]), &items);
        Self {}
    }
}


