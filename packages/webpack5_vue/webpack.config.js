const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    entry: {
        app: './src/client/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[hash].js', //[contenthash]
        libraryTarget: 'umd',
    },
    mode: "none", //used to define enviroment
    module: {
        rules: [{
                test: /\.txt$/,
                use: 'raw-loader'
            }, {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            // this will apply to both plain `.js` files
            // AND `<script>` blocks in `.vue` files
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            // this will apply to both plain `.css` files
            // AND `<style>` blocks in `.vue` files
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            }
        ],
    },
    plugins: [
      new webpack.DllReferencePlugin({
        context: __dirname,
        manifest: require('./dist/vendor-manifest.json')
      }),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      }),
      new HtmlWebpackPlugin({
        title: 'Webpack5 + Vue App',
        template: './src/client/index.html',
      }),
      new VueLoaderPlugin()
    ],
    devtool: 'source-map',
    resolve: {
      alias: {
        vue: 'vue/dist/vue.js'
      }
    }
};