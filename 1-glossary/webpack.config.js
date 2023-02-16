require("dotenv").config();
// const HTMPWebpackPlugin = require('html-webpack-plugin');
// const cssLoader = require('css-loader')
// const MiniCssExtractPlugin = require("mini-css-extract-plugin")

const path = require("path");
var SRC_DIR = path.join(__dirname, "/client/src");
var DIST_DIR = path.join(__dirname, "/client/dist");
/*
  What should go here?  Great question!

  Before you go to documentation, verify which version of webpack
  you are using.

  Use this config to copy production versions of your
  index.html and styles.css to dist folder upon build
*/


module.exports = {
  mode: "development",
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: "bundle.js",
    path: DIST_DIR,
  },

  target: "web",
  devServer: {
    port: "3000",
    static: ["./client"],
    open: true,
    hot: true,
    liveReload: true
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  // plugins: [
  //   new HTMPWebpackPlugin({
  //     inject: true,
  //     template: path.resolve(__dirname, "/client/src/index.html")
  //   }),
  //   new MiniCssExtractPlugin()
  // ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,    //kind of file extension this rule should look for and apply in test
        exclude: /node_modules/, //folder to be excluded
        use: 'babel-loader' //loader which we are going to use
      }
      // {
      //   test: /\\.css$/,
      //   use: [
      //     MiniCssExtractPlugin.loader, // instead of style-loader
      //     'css-loader',
      //     {
      //       loader: "css-loader",
      //       options: {
      //         importLoaders: 1,
      //         modules: true,
      //       },
      //     },
      //   ],
      // }
    ]
  }
}
