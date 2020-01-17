const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/app.js",
  output: {
    path: path.resolve(__dirname, "dist")  
  },
  plugins: [
    new HtmlWebpackPlugin({
      app: `<div id="app"></div>`,
      title: "aws amplify tutorial" //check how the title is used in ./src/index.html
    })
  ],
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
  mode: "development"
};
