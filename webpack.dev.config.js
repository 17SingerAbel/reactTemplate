const path = require("path");

module.exports = {
  mode: "development",
  entry: [
    "webpack-dev-server/client?http://localhost:3000/",
    "./src/index.tsx",
  ],
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "dist"),
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
  devtool: "source-map",
  devServer: {
    contentBase: [path.join(__dirname, "src"), path.join(__dirname, "dist")],
    open: true,
  },
  module: {
    rules: [
      { test: /\.scss$/, use: ["style-loader", "css-loader", "sass-loader"] },
      { test: /\.tsx?$/, loader: "babel-loader" },
      { test: /\.tsx?$/, loader: "ts-loader" },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
    ],
  },
};
