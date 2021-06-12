const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
  context: path.join(__dirname, 'src'),
  resolve: {
    extensions: ['.js', '.ts'],
  },
  entry: {
    app: ['./index.ts'],
  },
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
      {
        test: /\.(png|jpg)$/,
        exclude: /node_modules/,
        type: 'asset/resource',
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html',
      scriptLoading: 'blocking',
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
  ],
  devtool: 'eval-source-map',
  devServer: {
    port: 8082,
  },
};
