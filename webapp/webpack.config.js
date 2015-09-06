// webpack.config.js
module.exports = {
  entry: './src/app.jsx',
  output: {
    path: 'build/js',
    filename: 'bundle.js'       
  },
  resolveLoader: {
      modulesDirectories: [
          'node_modules'
      ]
},
  module: {
    loaders: [
      { 
        test: /\.jsx?$/, 
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader' 
      }
    ]
  }
};