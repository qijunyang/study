const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  entry: "./src/boot.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "webpack4_vue2.bundle.js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      app: `<div id="app"></div>`,
      title: "Webpack4 and Vue2" //check how the title is used in ./src/index.html
    }),
    new VueLoaderPlugin()
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
  mode: "development",
  resolve: { alias: { vue: "vue/dist/vue.esm.js" } },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: "vue-loader"
      }
    ]
  }
};
