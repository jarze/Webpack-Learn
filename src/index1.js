import './less/style.less';

setTimeout(() => {
  import(`./mo.js`).then((a) => {
    var element = document.createElement('div');
    element.classList.add('test1');
    element.innerHTML = `<h1>entry another ----- another 入口文件 </h1><img src="/static/images/pixel-mona-heart.gif" /><div>${a.default.a}</div>`;
    document.body.appendChild(element);
  });
}, 5000);
