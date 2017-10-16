const path = require('path')
const webpack = require('webpack')

module.exports = {
  devtool: 'source-map',

  entry: {
    jsx: "./src/index.jsx",
    css: "./src/styles.css",
    html: "./src/index.html",
  },

  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/public/'
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ],

  module: {
    loaders: [
      { test: /\.js?$/,
        loader: 'babel',
        exclude: /node_modules/ },
      { test: /\.scss?$/,
        loader: 'style!css!sass',
        include: path.join(__dirname, 'src', 'styles') },
      { test: /\.png$/,
        loader: 'file' },
      { test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file'},
        { test: /\.html$/, loader: "file?name=[name].[ext]" },
        { test: /\.css$/, loader: "file?name=[name].[ext]" },
        { test: /\.jsx?$/, exclude: /node_modules/, loaders: ["react-hot","babel-loader"]},
     
    ]
  }
}