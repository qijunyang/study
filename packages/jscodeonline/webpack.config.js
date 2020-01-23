const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  entry: "./src/app.js",
  output: {
    path: path.resolve(__dirname, "dist")  
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.ejs",
      title: "Javascript Code Online" //check how the title is used in ./src/index.html
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
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
    ]
  }
};
