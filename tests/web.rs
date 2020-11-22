//! Test suite for the Web and headless browsers.

#![cfg(target_arch = "wasm32")]

extern crate wasm_bindgen_test;
use js_sys::{Object, JSON};
use wasm_bindgen::JsValue;
use wasm_bindgen_test::*;
use wasm_previewer::{BinPacker, setup};

wasm_bindgen_test_configure!(run_in_browser);

#[wasm_bindgen_test]
fn pass() {
    assert_eq!(1 + 1, 2);
}

#[wasm_bindgen_test]
pub fn test_packing_algorithm() {
    setup();
    let bin = JSON::parse(r#"{
        "dims": [1,2,3]
    }"#)
    .unwrap();
    let items = JSON::parse(r#"[
    {
        "id": "asdf",
        "dims": [1,2,3]
    }
    ]"#).unwrap();

    let expected = JSON::parse(r#"[
        [
            "asdf"
        ]
    ]"#).unwrap();

    assert_eq!(
        JSON::stringify(&BinPacker::packing_algorithm(&bin, &items).unwrap()),
        JSON::stringify(&expected),
    );
}
