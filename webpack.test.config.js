const webpack = require('webpack'),
    webpackConfig = require('./webpack.config.js'),
    path = require('path');

module.exports = {
    entry: ['./test/Main.ts'],
    resolve: webpackConfig.resolve,
    plugins: [
        new webpack.DefinePlugin({
            'PROCESS_ENV': '"test"',
            'VERSION': JSON.stringify(require('./package.json').version)
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
