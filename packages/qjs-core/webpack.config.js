const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    core: "./src/index.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].umd.js",
    libraryTarget: "umd"
  },
  plugins: [],
  devServer: {
    contentBase: "./dist" //will try to use ./dist/index.html
  },
  // watch: true,
  // watchOptions: {
  //   ignored: /node_modules/,
  //   aggregateTimeout: 300,
  //   poll: 1000
  // },
  devtool: "eval-source-map",
  mode: "development",
  target: "web"
};
