// @ts-check
const Webpack = require('webpack');
const Path = require('path');

module.exports = {
  entry: './packages/Index.ts',
  output: {
    path: Path.resolve(__dirname + '/dist/web/agescx-js.min.js'),
    library: 'agescx',
    libraryTarget: 'var'
  },
  node: {
    fs: 'empty'
  },
  target: 'web',
  resolve: {
    extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js', '.json'],
    alias: {
      data: Path.resolve(__dirname, 'packages/data')
    }
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        loader: 'ts-loader',
        options: {
          configFile: 'tsconfig.json'
        }
      }
    ]
  }
};
