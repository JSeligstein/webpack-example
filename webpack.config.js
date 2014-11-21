var path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    path: 'html/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
       { test: /\.jsx?$/, loader: 'jsx-loader?harmony' },
    ]
  },
  resolve: {
    root: __dirname,
    alias: {
        'webpack-example': path.join(__dirname, './webpack.js')
    }
  }
};
