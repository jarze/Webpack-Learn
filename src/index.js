import a from "./mo";
import tsFun from "./ts/ts.ts";
import Icon from "./assets/panda-waving.png";
import "./test";
import "./less/style.less";

require("./style.css");
document.write("it works");
document.write(require("./bar.js"));
document.write(a.a);
document.write(tsFun("input"));

// less
//document.write(<div className={styles.test}>哈哈哈哈</div>);
function component() {
  var element = document.createElement("div");
  // Lodash，现在由此脚本导入
  element.innerHTML = "hello world!";
  element.classList.add("test");

  // 将图像添加到我们现有的 div。
  var myIcon = new Image();
  myIcon.src = Icon;
  element.appendChild(myIcon);

  return element;
}

document.body.appendChild(component());
