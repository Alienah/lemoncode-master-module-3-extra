const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
  mode: "production",
  output: {
    filename: '[name].[chunkhash].js',
    assetModuleFilename: "images/[hash][ext][query]",
  },
  stats: "verbose",
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css',
    }),
  ],
});