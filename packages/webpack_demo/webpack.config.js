const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        "demojs": "./src/js/index.js",
        "democss": "./src/style/index.css" //exported as an module instead of a plain css file
                                            //to get css file it has to use ExtractTextWebpackPlugin or mini-css-extract-plugin
    },
    output: {
        filename: "[name]-[hash].js", //useful variable: [name], [id], [hash]
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: 'umd',
    },
    module: {
        rules: [
            // {
            //     test: /\.css$/,
            //     use: ExtractTextPlugin.extract({
            //         fallback: "style-loader",
            //         use: "css-loader"
            //     })
            // },

            {
                test: /\.css$/,
                use: [
                  {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                      publicPath: '/dist/',
                    },
                  },
                  'css-loader',
                ],
              },
        ]
    },
    plugins: [
        // new ExtractTextPlugin("demo.css"), //generate a plain style file from all css related files

        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: '[name].css',
            chunkFilename: '[id].css',
        }),
    ]
}