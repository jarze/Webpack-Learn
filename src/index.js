import a from "./mo";
import tsFun from "./ts/ts.ts";

import "./test";
import styles from "./less/style.less";

require("./style.css");
document.write("it works");
document.write(require("./bar.js"));
document.write(a.a);
document.write(tsFun("input"));

// less
//document.write(<div className={styles.test}>哈哈哈哈</div>);
