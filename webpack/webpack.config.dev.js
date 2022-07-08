import path from 'path';
import url from 'url';

import webpack from 'webpack';
import { merge } from 'webpack-merge';
import ESLintPlugin from 'eslint-webpack-plugin';
import StylelintPlugin from 'stylelint-webpack-plugin';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import common from './webpack.common.js';

export default merge(common, {
  target: 'web',
  mode: 'development',
  devtool: 'source-map',
  output: {
    chunkFilename: 'js/[name].chunk.js',
    assetModuleFilename: 'assets/[name][ext]',
  },
  devServer: {
    client: {
      logging: 'error',
    },
    hot: true,
    watchFiles: ['src/**/*.html'],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
    new ESLintPlugin({
      extensions: 'js',
      emitWarning: true,
      files: path.resolve(__dirname, '../src'),
    }),
    new StylelintPlugin({
      files: path.join('src', '**/*.s?(a|c)ss'),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, '../src'),
        loader: 'babel-loader',
      },
      {
        test: /\.s?css$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          'postcss-loader',
          'sass-loader',
        ],
      },
    ],
  },
});
