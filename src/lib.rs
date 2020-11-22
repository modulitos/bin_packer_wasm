mod utils;
mod error;

use crate::utils::set_panic_hook;
use bin_packer_3d::bin::Bin as BinBp;
use bin_packer_3d::item::Item as ItemBp;
use bin_packer_3d::packing_algorithm::packing_algorithm;
use js_sys::Object;
use serde::{Deserialize, Serialize};
use wasm_bindgen::prelude::*;
use wasm_bindgen::JsCast;
use crate::error::MyError;

type Dimension = f64;

extern crate web_sys;

// A macro to provide `println!(..)`-style syntax for `console.log` logging.
macro_rules! log {
    ( $( $t:tt )* ) => {
        web_sys::console::log_1(&format!( $( $t )*).into());
    }
}

// If we want to raise a native JS error:
// #[wasm_bindgen]
// extern "C" {
//     #[wasm_bindgen(js_name = Error)]
//     type JsError;
//
//     #[wasm_bindgen(constructor, js_class = "Error")]
//     fn new(message: &str) -> JsError;
// }

#[derive(Serialize, Deserialize, Debug)]
struct Bin {
    dims: [Dimension; 3],
}

impl From<Bin> for BinBp<'_> {
    fn from(bin: Bin) -> Self {
        Self::new(bin.dims)
    }
}

type ItemId = String;

#[derive(Serialize, Deserialize, Debug)]
struct Item {
    id: ItemId,
    dims: [Dimension; 3],
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

fn js_value_to_bin(val: &JsValue) -> Result<Bin, JsValue> {
    val.into_serde::<Bin>()
        .map_err(|err| error_to_js_value(MyError::BadJson(err)))
}

fn js_value_to_items(val: &JsValue) -> Result<Vec<Item>, JsValue> {
    val.into_serde::<Vec<Item>>()
        .map_err(|err| error_to_js_value(MyError::BadJson(err)))
}

fn error_to_js_value(err: MyError) -> JsValue {
    JsValue::from_str(&err.to_string())
}

#[wasm_bindgen]
pub struct BinPacker {}

#[wasm_bindgen]
impl BinPacker {
    pub fn packing_algorithm(bin: &JsValue, items: &JsValue) -> Result<JsValue, JsValue> {
        let bin = js_value_to_bin(bin)?;
        let items = js_value_to_items(items)?;
        let items: Vec<ItemBp<'_>> = items
            .iter()
            // TODO: Simplfy this by removing the lifetime from ItemBp...
            .map(|item: &Item| ItemBp::new(&item.id, item.dims))
            .collect();

        let items_res = packing_algorithm(bin.into(), &items)
            .map_err(|err| error_to_js_value(MyError::BinPackError(err)))?;

        JsValue::from_serde(&items_res).map_err(|err| error_to_js_value(MyError::BadJson(err)))
    }
}
