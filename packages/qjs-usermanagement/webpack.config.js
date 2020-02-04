const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    app: "./src/js/app.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template/index.ejs",
      title: "User Management" //check how the title is used in ./src/index.html
    }),
    new HtmlWebpackPlugin({
      filename: "dev.html",
      title: "User Management Dev" //check how the title is used in ./src/index.html
    })
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
