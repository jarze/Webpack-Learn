const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    // library: "MyLibrary",
    filename: "bundle.js",
  },
  module: {
    rules: [
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.(js|jsx)$/, loader: "babel-loader" },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      // 打包输出HTML
      title: "Hello World app",
      // minify: {
      //   // 压缩HTML文件
      //   removeComments: true, // 移除HTML中的注释
      //   collapseWhitespace: true, // 删除空白符与换行符
      //   minifyCSS: true, // 压缩内联css
      // },
      // filename: "index.html",
      // template: "index.html",
    }),
  ],
  // devServer: {
  //   compress: true,
  //   port: 9000,
  //   proxy: {
  //     "/api": "http://localhost:3000",
  //   },
  // },
};
