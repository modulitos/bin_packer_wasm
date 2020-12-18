//! Test suite for the Web and headless browsers.

#![cfg(target_arch = "wasm32")]

extern crate wasm_bindgen_test;
use js_sys::{Object, JSON};
use serde_json::error::Error as SerdeJsonError;
use wasm_bindgen::JsValue;
use wasm_bindgen_test::*;
use wasm_previewer::{error::MyError, setup, BinPacker};

// TODO: It would be nice to have our tests return a Result, but the `wasm_bindgen_test` macro
// doesn't currently support output signatures: https://github.com/rustwasm/wasm-bindgen/issues/1830
// type TestResult<T = ()> = Result<T, JsValue>;

wasm_bindgen_test_configure!(run_in_browser);

#[wasm_bindgen_test]
pub fn test_parse_float() {
    setup();
    let bin = JSON::parse(
        r#"{
        "dims": [1,2,3.1]
    }"#,
    );

    assert!(bin.is_ok());
}

#[wasm_bindgen_test]
pub fn test_packing_algorithm() {
    setup();
    let bin = JSON::parse(
        r#"{
        "dims": [1,2,3]
    }"#,
    )
    .unwrap();

    let items = JSON::parse(
        r#"[
    {
        "id": "asdf",
        "dims": [1,2,3]
    }
    ]"#,
    )
    .unwrap();

    let expected = JSON::parse(
        r#"[
        [
            "asdf"
        ]
    ]"#,
    )
    .unwrap();

    assert_eq!(
        JSON::stringify(&BinPacker::packing_algorithm(&bin, &items).unwrap()),
        JSON::stringify(&expected),
    );
}

#[wasm_bindgen_test]
pub fn test_packing_algorithm_multiple_results() {
    setup();
    let bin = JSON::parse(
        r#"{
        "dims": [6,4,2]
    }"#,
    )
    .unwrap();

    let items = JSON::parse(
        r#"[
    {
        "id": "item",
        "dims": [6,4,1]
    },
    {
        "id": "item",
        "dims": [6,4,1]
    },
    {
        "id": "item",
        "dims": [6,4,1]
    }
    ]"#,
    )
    .unwrap();

    let expected = JSON::parse(
        r#"[
        [
            "item",
            "item"
        ],
        [
            "item"
        ]
    ]"#,
    )
    .unwrap();

    assert_eq!(
        JSON::stringify(&BinPacker::packing_algorithm(&bin, &items).unwrap()),
        JSON::stringify(&expected),
    );
}

#[wasm_bindgen_test]
pub fn test_packing_algorithm_invalid_deserialization() {
    setup();
    // This won't deserialize into a bin!
    let bin = JSON::parse(
        r#"{
        "wrongKey": [1,2,3]
    }"#,
    )
    .unwrap();
    let items = JSON::parse(
        r#"[
    {
        "id": "asdf",
        "dims": [1,2,3]
    }
    ]"#,
    )
    .unwrap();

    assert_eq!(
        BinPacker::packing_algorithm(&bin, &items).unwrap_err(),
        JsValue::from_str("json serialization error: `missing field `dims` at line 1 column 20`")
    );
}
