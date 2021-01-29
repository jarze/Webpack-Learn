const compilerHooks = [
  'initialize',
  'shouldEmit',
  'done',
  'afterDone',
  'additionalPass',
  // AsyncSeriesHook
  // compiler.run() 执行之前，添加一个钩子。
  'beforeRun',
  // AsyncSeriesHook
  // 开始读取 records 之前，钩入(hook into) compiler。
  'run',
  'emit',
  'assetEmitted',
  'afterEmit',
  'thisCompilation',
  'compilation',
  // SyncHook
  // NormalModuleFactory 创建之后，执行插件。
  'normalModuleFactory',
  'contextModuleFactory',
  'beforeCompile',
  'compile',
  'make',
  'finishMake',
  'afterCompile',
  // AsyncSeriesHook
  // 监听模式下，一个新的编译(compilation)触发之后，执行一个插件，但是是在实际编译开始之前。
  'watchRun',
  'failed',
  'invalid',
  'watchClose',
  'infrastructureLog',
  // SyncHook
  // environment 准备好之后，执行插件。
  'environment',
  // SyncHook
  // environment 安装完成之后，执行插件。
  'afterEnvironment',
  // SyncHook
  // 设置完初始插件之后，执行插件。
  'afterPlugins',
  // SyncHook
  // resolver 安装完成之后，执行插件。
  'afterResolvers',
  // SyncBailHook
  // 在 entry 配置项处理过之后，执行插件。
  'entryOption'
];

// 一个 JavaScript 命名函数。
function XXPlugin(options) {
  // 使用 options 设置插件实例……
}

// 在插件函数的 prototype 上定义一个 `apply` 方法。
XXPlugin.prototype.apply = function (compiler) {
  for (const hook of compilerHooks) {
    if (!compiler.hooks[hook]) continue;
    compiler.hooks[hook].tap('XXPlugin', params => {
      console.log(`1-------|以同步方式触及 ${hook} 钩子。`);
    });
    // try {
    //   compiler.hooks[hook].tapAsync('XXPlugin', (compiler, callback) => {
    //     console.log(`2--------|以异步方式触及 ${hook} 钩子。`);
    //     typeof callback === 'function' && callback();
    //   });
    //   compiler.hooks[hook].tapPromise('XXPlugin', (compiler) => {
    //     return new Promise((resolve) => setTimeout(resolve, 0)).then(() => {
    //       console.log(`3---------|以具有延迟的异步方式触及 ${hook} 钩子。`);
    //     });
    //   });
    // } catch (error) {
    //   console.error(hook, '====', error.message);
    // }
  }
};

module.exports = XXPlugin;
