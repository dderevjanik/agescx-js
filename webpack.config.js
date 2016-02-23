const webpack = require('webpack'),
    path = require('path');

module.exports = {
    cache: true,
    entry: ['./src/Scenario.ts'],
    debug: true,
    devtools: 'eval',
    target: 'node',
    output: {
        path: path.resolve(__dirname + 'build'),
        publicPath: '/build/',
        filename: 'main.js'
    },
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: 'ts-loader'
            }
        ]
    }
};
