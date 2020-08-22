/*
 * @Autor: jarze
 * @Date: 2020-08-08 17:11:32
 * @Desc: config
 */
import path from "path";
import process from "process";
import { Configuration } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";

const config: Configuration = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[hash].js",
  },
  //devtool: "inline-source-map",
  module: {
    rules: [
      { test: /\.css$/, loader: "style-loader!css-loader" },
      {
        test: /\.less$/,
        loader: "style-loader!css-loader!less-loader",
        // use: [
        //   {
        //     loader: "style-loader",
        //   },
        //   {
        //     loader: "css-loader",
        //   },
        //   {
        //     loader: "less-loader",
        //   },
        // ],
      },
      { test: /\.(js|jsx)$/, loader: "babel-loader" },
      { test: /\.(ts|tsx)$/, loader: "ts-loader" },
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
      filename: "index.html",
      template: "./public/index.html",
    }),
  ],
  devtool: process.env.mode === "development" ? "source-map" : false,
  // externals: {
  //   jquery: "jQuery",
  // },

  // 性能提示文件大小超过5000bytes警告⚠️
  performance: {
    hints: "warning",
    // 入口起点的最大体积
    maxEntrypointSize: 10000,
    // 单个资源体积
    maxAssetSize: 5000,
    // 只给出 .js 文件的性能提示
    assetFilter: function (assetFilename) {
      return assetFilename.endsWith(".js");
    },
  },

  node: {},
};

//webpack-dev-server
const devServer = {
  port: 8888,
  proxy: {
    "/api": {
      target: "http://localhost:3000",
      pathRewrite: { "^/api": "" },
    },
  },
  // progress:
};

export default { devServer, ...config };
