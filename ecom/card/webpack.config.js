const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  mode: "development",
  devServer: {
    port: "8082",
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "./public/index.html" }),
    new ModuleFederationPlugin({
      name: "card",
      filename: "remoteEntry.js",
      exposes: {
        "./CardShow": "./src/index",
      },
    }),
  ],
  devtool: "eval-cheap-source-map",
};
