const webpack = require('webpack'), 
    path = require('path');

module.exports = {  
    cache: true,
    entry: ['./src/ScenarioData.ts'],
    debug: true,
    devtools: 'eval',
    output: {
        path: __dirname + '/build/',
        filename: 'zbundle.js'
    },
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin()
    ],
    module: {
        loaders: [
            { test: /\.ts$/, loader: 'ts-loader' }
        ]
    }
};