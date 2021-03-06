import a, { cube } from './mo';
// ts-loader
import tsFun from './ts/ts.ts';
// file-loader
import Icon from './assets/panda-waving.png';
// less-loader
import './less/style.less';
// xx-loader
import xxLoader from './test-loader';
// css-loader
require('./style.css');

document.write(`<hr />`);

document.write('<h1>---------- webpack ----------</h1>');

document.write('it works');
document.write(`<br />`);

document.write(require('./bar.js'));
document.write(`<br />`);

document.write(a.a);
document.write(`<br />`);

//  测试 tree shaking
// https://www.webpackjs.com/guides/tree-shaking/
document.write(cube(10));

document.write(`<hr />`);

document.write('<h1>DefinePlugin ----- 配置全局常量😄😄😄</h1>');

document.write(
  `<div>🔥 ${process.env.NODE_ENV} --- ${process.env.env} --- ${VERSION}</div><br/>`
);

document.write(`<hr />`); 

document.write('<h1>tsFun ----- ts-loader😄😄😄</h1>');

document.write(tsFun('input'));

document.write(`<hr />`);

// less
//document.write(<div className={styles.test}>哈哈哈哈</div>);
function component() {
  document.write('<h1>less class && file Image ----- 😄😄😄</h1>');
  var element = document.createElement('div');
  element.innerHTML = 'hello world!';
  element.classList.add('test');
  var myIcon = new Image();
  myIcon.src = Icon;
  element.appendChild(myIcon);
  return element;
}
document.body.appendChild(component());

document.write(`<hr />`);

document.write('<h1>Loader API 测试 ----- xxLoader😄😄😄</h1>');
document.write(`<div>${xxLoader}</div><br/><br/><hr />`);
