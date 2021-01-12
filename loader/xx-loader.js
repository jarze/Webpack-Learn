//https://www.webpackjs.com/api/loaders/

function formateParams(
  t,
  data = [
    "version",
    "context",
    "request",
    "query",
    "data",
    "loaderIndex",
    "resource",
    "resourcePath",
    "resourceQuery",
    "target",
    "webpack",
  ]
) {
  return data
    .map(item => `<dl><dt>this.${item}</dt><dd>${t[item]}</dd></dl>`)
    .join("");
}

module.exports = function (content, map, meta) {
  // 同步loader
  this.callback(
    null,
    content.replace(
      "test-loader",
      `测试自定义loader：替换文案(test-loader)xx-loader-test-loader；<br />(pitch)this.data.value: ${
        this.data.value
      } </br>${formateParams(this)}`
    ),
    map,
    meta
  );
  return; // 当调用 callback() 时总是返回 undefined

  // 异步loader
  var callback = this.async();
  someAsyncOperation(content, function (err, result) {
    if (err) return callback(err);
    callback(null, result, map, meta);
  });

  // this.version  loader API 的版本号。
  // this.context  模块所在的目录。可以用作解析其他模块路径的上下文。

  // this.callback(
  //   err: Error | null,
  //   content: string | Buffer,
  //   sourceMap?: SourceMap,
  //   meta?: any
  // );

  // this.async  告诉 loader-runner 这个 loader 将会异步地回调。返回 this.callback。
  // this.data  在 pitch 阶段和正常阶段之间共享的 data 对象。
  // ...
};

// 默认情况下，资源文件会被转化为 UTF-8 字符串，然后传给 loader。通过设置 raw，loader 可以接收原始的 Buffer。每一个 loader 都可以用 String 或者 Buffer 的形式传递它的处理结果。Complier 将会把它们在 loader 之间相互转换。
// module.exports.raw = true;

// loader 总是从右到左地被调用,在执行 loader 之前，会先从左到右调用 loader 上的 pitch 方法
// use: [
//   'a-loader',
//   'b-loader',
//   'c-loader'
// ]
// 将会发生这些步骤：
// |- a-loader `pitch`
//   |- b-loader `pitch`
//     |- c-loader `pitch`
//       |- requested module is picked up as a dependency
//     |- c-loader normal execution
//   |- b-loader normal execution
// |- a-loader normal execution

module.exports.pitch = function (remainingRequest, precedingRequest, data) {
  // 传递给 pitch 方法的 data，在执行阶段也会暴露在 this.data 之下，并且可以用于在循环时，捕获和共享前面的信息。
  data.value = 42;

  if (false) {
    // 如果某个 loader 在 pitch 方法中给出一个结果，那么这个过程会回过身来，并跳过剩下的 loader。在我们上面的例子中，如果 b-loader 的 pitch 方法返回了一些东西：
    return (
      "module.exports = require(" +
      JSON.stringify("-!" + remainingRequest) +
      ");"
    );
    // 上面的步骤将被缩短为：
    // |- a-loader `pitch`
    //   |- b-loader `pitch` returns a module
    // |- a-loader normal execution
  }
};
