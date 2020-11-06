import { cube } from "./mo";
import tsFun from "./ts/ts.ts";

document.write("it works");
document.write(tsFun("input"));
document.write(cube(10));

// less
//document.write(<div className={styles.test}>哈哈哈哈</div>);
function component() {
  var element = document.createElement("div");
  // Lodash，现在由此脚本导入
  element.innerHTML = "hello world!";

  // 将图像添加到我们现有的 div。
  var myIcon = new Image();
  myIcon.src = "/static/pixel-mona-heart.gif";
  element.appendChild(myIcon);

  return element;
}

document.body.appendChild(component());
