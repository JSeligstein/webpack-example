
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
  }
};
