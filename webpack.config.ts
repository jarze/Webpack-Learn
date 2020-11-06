import path from "path";
// import process from "process";
import {
  // Configuration,
  ConfigurationFactory,
  DefinePlugin,
  // optimize,
} from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import CopyWebpackPlugin from "copy-webpack-plugin";

// env: mock|dev|test|prod
const config: ConfigurationFactory = (env, args) => ({
  entry: {
    index: "./src/index.js",
    another: "./src/index1.js",
  },
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
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"],
      },
    ],
  },
  plugins: [
    // 清理打包
    new CleanWebpackPlugin(),
    // 生成html
    new HtmlWebpackPlugin({
      // 打包输出HTML
      // title: (env as string) + JSON.stringify(args.mode) || "hello world",
      // minify: {
      //   // 压缩HTML文件
      //   removeComments: true, // 移除HTML中的注释
      //   collapseWhitespace: true, // 删除空白符与换行符
      //   minifyCSS: true, // 压缩内联css
      // },
      filename: "index.html",
      template: "./public/index.html",
    }),
    new DefinePlugin({
      //指定环境
      "process.env.NODE_ENV": JSON.stringify(args.mode),
    }),
    // 静态目录直接打包输出
    new CopyWebpackPlugin({ patterns: [{ from: "static/**" }] }),

    // new optimize.CommonsChunkPlugin({
    //   name: "common", // 指定公共 bundle 的名称。
    // }),
  ],
  devtool: args.mode === "development" ? "source-map" : false,
  // externals: {
  //   jquery: "jQuery",
  // },

  // 性能提示文件大小超过5000bytes警告⚠️
  performance: {
    hints: "warning",
    // 入口起点的最大体积
    // maxEntrypointSize: 10000,
    // // 单个资源体积
    // maxAssetSize: 5000,
    // // 只给出 .js 文件的性能提示
    // assetFilter: function (assetFilename) {
    //   return assetFilename.endsWith(".js");
    // },
  },
  node: {},
  devServer,
});

//webpack-dev-server
const devServer = {
  port: 8888,
  //静态文件
  // contentBase: [path.join(__dirname, "public"), path.join(__dirname, "static")],
  headers: {
    "X-Custom-Foo": "bar",
  },
  proxy: {
    "/api": {
      target: "http://localhost:3000",
      pathRewrite: { "^/api": "" },
    },
  },
  // progress:
};

export default config;
