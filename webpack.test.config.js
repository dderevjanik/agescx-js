const webpack = require('webpack'),
    webpackConfig = require('./webpack.config.js'),
    path = require('path');

module.exports = {
    entry: ['./test/Main.ts'],
    resolve: webpackConfig.resolve,
    plugins: [
        new webpack.DefinePlugin({
            'NODE_ENV': '"test"',
        })
    ],
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                include: [
                    path.resolve(__dirname, 'src'),
                    path.resolve(__dirname, 'test')
                ]
            }
        ]
    },
    target: 'node',
    output: {
        path: path.resolve(__dirname + '/build'),
        publicPath: '/build/',
        filename: 'test.js',
        libraryTarget: 'commonjs'
    },
};
