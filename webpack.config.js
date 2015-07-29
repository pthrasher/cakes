var configObj = {

  entry: {
    app: './src/app.js',
  },

  output: {
    path: __dirname + '/build',
    filename: "[name].js",
    publicPath: '/'
  },

  resolve: {
    extensions: ['', '.js', '.scss'],
    modulesDirectories: [
      './node_modules',
    ],
  },

  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: 'style!css!sass',
      }, {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
      },
    ],
  },

};

module.exports = configObj;
