use bin_packer_3d::error::Error as BinPacker3dError;
use serde_json::error::Error as SerdeJsonError;
use thiserror::Error;

#[derive(Debug, Error)]
pub enum MyError {
    #[error("json serialization error: `{0}`")]
    BadJson(SerdeJsonError),
    #[error("binpack error: `{0}`")]
    BinPackError(BinPacker3dError),
}

// Use this if/when we want to raise a native JS error:
// #[wasm_bindgen]
// extern "C" {
//     #[wasm_bindgen(js_name = Error)]
//     type JsError;
//
//     #[wasm_bindgen(constructor, js_class = "Error")]
//     fn new(message: &str) -> JsError;
// }
