const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    ui: "./src/index.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].umd.js",
    libraryTarget: "umd"
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "QJS UI" //check how the title is used in ./src/index.html
    }),
  ],
  devServer: {
    contentBase: "./dist" //will try to use ./dist/index.html
  },
  watch: true,
  watchOptions: {
    ignored: /node_modules/,
    aggregateTimeout: 300,
    poll: 1000
  },
  devtool: "eval-source-map",
  mode: "development"
};
