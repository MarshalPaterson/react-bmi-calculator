// var HtmlWebpackPlugin = require("html-webpack-plugin");
// var ExtractTextPlugin = require('extract-text-webpack-plugin');

// var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
//   template: __dirname + "/src/index.html",
//   filename: "index.html",
//   inject: "body"
// });

// module.exports = {
//   entry: __dirname + "/src/App.js",
//   output: {
//     path: __dirname + "/public",
//     filename: "bundle.js"
//   },
//   plugins: [HTMLWebpackPluginConfig, new ExtractTextPlugin("styles.css")],
//   devServer: {
//     inline: true,
//     contentBase: "./public",
//     port: 8080
//   },
//   module: {
//     loaders: [
//       { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
//       {
//         test: /\.css/,
//         loader: ExtractTextPlugin.extract("css-loader")
//       }
//     ]
//   }
// };
module.exports = {
  context: __dirname,
  entry: {
    jsx: "./src/index.jsx",
    css: "./src/styles.css",
    html: "./src/index.html",
  },

  output: {
    path: __dirname + "/static",
    filename: "bundle.js",
  },
  module: {
    preLoaders: [
        //Eslint loader
      { test: /\.jsx?$/, exclude: /node_modules/, loader: "eslint-loader"},
    ],
    loaders: [
      { test: /\.html$/, loader: "file?name=[name].[ext]" },
      { test: /\.css$/, loader: "file?name=[name].[ext]" },
      { test: /\.jsx?$/, exclude: /node_modules/, loaders: ["react-hot","babel-loader"]},
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  eslint: {
    configFile: './.eslintrc'
  },
  devServer: {
    inline:true,
    port: 8008
  }
};
