/* eslint-disable import/no-extraneous-dependencies */
const path = require("path");
const webpack = require("webpack");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
    mode: "production",
    target: "web",
    entry: {
        vendor: ["lodash"],
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "dll.[name].js",
        library: "[name]_[fullhash]",
    },
    plugins: [
        new webpack.DllPlugin({
            // context: __dirname,
            path: path.join(__dirname, "dist", "[name]-manifest.json"),
            name: "[name]_[fullhash]",
        }),
    ],
    optimization: {
        minimizer: [new TerserPlugin({
            extractComments: false,
        })],
    },
};