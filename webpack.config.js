/*eslint-disable */
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  devtool: "inline-source-map",
  devServer: {
    static: "./docs",
  },
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "docs"),
  },
};
