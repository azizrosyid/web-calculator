/* eslint-disable import/no-extraneous-dependencies */
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: 'build',
    historyApiFallback: true,
    inline: true,
    progress: true,
    stats: 'errors-only',
    port: 3000,
  },
});
