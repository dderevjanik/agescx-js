/**
 * Webpack config for hot reloading, lint checking and serving example page
 */
const webpack = require('webpack'),
    webpackConfig = require('./webpack.config.js'),
    path = require('path');

module.exports = {
    cache: true,
    entry: webpackConfig.entry,
    debug: true,
    devtools: 'source-map',
    target: 'node',
    output: {
        path: path.resolve(__dirname + '/build'),
        publicPath: '/build/',
        filename: 'index.js',
        library: 'agescx'
    },
    resolve: webpackConfig.resolve,
    plugins: [
        new webpack.DefinePlugin({
            'PROCESS_ENV': '"development"',
            'VERSION': JSON.stringify(require('./package.json').version)
        }),
        new webpack.optimize.UglifyJsPlugin()
    ],
    module: webpackConfig.module
};
