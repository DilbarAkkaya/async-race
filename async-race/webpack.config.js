const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintPugin = require('eslint-webpack-plugin');

const devServer = (isDev) => !isDev ? {} : {
  devServer: {
    open: true,
    port: 8080,
    static: path.join(__dirname, 'public'),
    historyApiFallback: true
  }
};

const esLintPlugin = (isDev) => isDev? [] : [new ESLintPugin({extensions: ['js']})];
module.exports = ({develop}) => ({
  mode: develop ? 'development' : 'production',
  devtool: develop ? 'inline-source-map' : false,
  entry: {
    app: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    assetModuleFilename: 'assets/[hash][ext]',
  },
  module: {
  rules: [
    {
      test: /\.(?:ico|gif|jpg|jpeg|svg)$/i,
      type: 'asset/resource',
    },
    {
      test: /\.(woff(2)?|eot|ttf|otf)$/i,
      type: 'asset/resource',
    },
    {
      test: /\.css$/i,
      use: [MiniCssExtractPlugin.loader, 'css-loader']
    },
    {
      test: /\.s[ac]ss$/i,
      use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
    }
  ]
  },
  resolve: {
    extensions: ['.js']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      favicon: './public/favicon.svg'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
    new CopyPlugin({
      patterns: [{ from: './public'}]
    }),
    new CleanWebpackPlugin({cleanStaleWebpackAssets: false}),
    ...esLintPlugin(develop),
  ],
  ...devServer(develop),
});