const webpack = require('webpack'),
    webpackConfig = require('./webpack.config.js'),
    path = require('path');

module.exports = {
    entry: webpackConfig.entry,
    target: 'node',
    output: {
        path: path.resolve(__dirname + '/dist'),
        publicPath: '/dist/',
        filename: 'index.js',
        libraryTarget: 'commonjs'
    },
    resolve: webpackConfig.resolve,
    plugins: webpackConfig.plugins,
    module: webpackConfig.module
};
