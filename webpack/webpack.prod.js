const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const Dotenv = require('dotenv-webpack');
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
    new Dotenv({
      path: './prod.env',
    }),
  ],
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'all',
          name: (module) => {
            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
            return `vendor/${packageName.replace("@", "")}`;
          },
          test: /[\\/]node_modules[\\/]/,
          enforce: true,
        },
      },
    },
  },
});