const path = require('path');

module.exports = {
  entry: './src/bootstrap.ts',
  mode: "development",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.wasm$/,
        type: "webassembly/experimental"
      }
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js', '.wasm' ],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
