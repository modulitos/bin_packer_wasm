[<img alt="build status" src="https://img.shields.io/github/workflow/status/modulitos/bin_packer_wasm/CI/master?style=for-the-badge" height="20">](https://github.com/modulitos/bin_packer_wasm/actions?query=branch%3Amaster)

This repo consists of two projects: 
1. a crate with wasm bindings for [bin_packer_3d](https://github.com/modulitos/bin_packing_3d)
2. an SPA to demonstrate the abilities of this crate

## The WASM crate

### Development

#### 🔬 Test the module within Headless Browsers with `wasm-pack test`

```
wasm-pack test --headless --firefox
```


### Building and publishing

#### 🛠️ Build with `wasm-pack build`

```
wasm-pack build
```

##### additional notes for required manual edits:
(TODO: update the upstream wasm-pack lib to avoid having to do this manually)

1. add `"bin_packer_3d_wasm_bg.js"` to the package.json's `files` field
   *perhaps related issue: https://github.com/rustwasm/wasm-pack/issues/199*
2. add `"main": "bin_packer_3d_wasm.js",`
   *to enable importing as esm from node*
3. add `"type": "module",`
   *to enable importing as esm from node*
4. rename the package.json to `"name": "bin_packer_3d"`
   *This crate is named `bin_packer_3d_wasm` to avoid naming conflicts with the `bin_packer_3d` crate.*
5. bump the package.json version

### 🎁 Publish to NPM with `wasm-pack publish`

```
wasm-pack publish
```


## The SPA

### Development
#### 🎦 Start the SPA on a local server

```bash
cd wwww
npm start
```
### Building and publishing

#### 🛠️ Build with `npm run build`

#### 🎁 Publish the SPA with `./upload.sh --prod`

## Acknowledgements

This crate was generated using `cargo generate` with `wasm-pack-template`. [Learn more about `cargo generate` here.](https://github.com/ashleygwilliams/cargo-generate)

```
cargo generate --git https://github.com/rustwasm/wasm-pack-template.git --name my-project
cd my-project
```

