const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const Dotenv = require('dotenv-webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
  mode: "development",
  output: {
    filename: '[name].js',
  },
  devtool: "eval-source-map",
  devServer: {
    port: 8082,
    stats: "errors-only",
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new Dotenv({
      path: './dev.env',
    }),
  ],
});