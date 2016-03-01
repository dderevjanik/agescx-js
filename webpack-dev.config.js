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
    plugins: webpackConfig.plugins,
    module: webpackConfig.module
};
