const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: "build",
    historyApiFallback: true,
    inline: true,
    progress: true,
    stats: "errors-only",
    port: 3000,
  },
});
