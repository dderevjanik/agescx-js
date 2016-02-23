const webpack = require('webpack'),
    path = require('path');

module.exports = {
    cache: true,
    entry: ['./src/Scenario.ts'],
    debug: true,
    devtools: 'source-map',
    target: 'web',
    output: {
        path: path.resolve(__dirname + '/build'),
        publicPath: '/build/',
        filename: 'main.js',
        library: 'agescx'
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
