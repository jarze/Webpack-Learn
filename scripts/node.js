const webpack = require("webpack");
const config = require("../webpack.config.ts");

const compiler = webpack(
  config.default("mock", { mode: "production" }),
  (err, stats) => {
    if (err || stats.hasErrors()) {
      // 在这里处理错误
    }
    // 处理完成
    console.log(
      "--webpackConfig:",
      stats.toString({
        chunks: false, // 使构建过程更静默无输出
        colors: true, // 在控制台展示颜色
      })
    );
  }
);

// 执行(run)
// compiler.run((err, stats) => {
//   // ...
//   console.log("--run:", err, stats);
// });

// 监听(watching)
// const watching = compiler.watch(
//   {
//     // watchOptions 示例
//     aggregateTimeout: 300,
//     poll: undefined,
//   },
//   (err, stats) => {
//     // 在这里打印 watch/build 结果...
//     console.log("--watching:", err, stats);
//   }
// );

// watching.close(() => {
//   console.log("Watching Ended.");
// });
