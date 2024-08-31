/* eslint-disable no-console */
import debounce from "../debounce/index.js";

const f1 = (num) => console.log(num);
const f2 = (a, b) => console.log(a + b);

const debounced = debounce(f1);
const debounced2 = debounce(f2);

debounced(1);
debounced(2);
debounced(3);
debounced(4);

debounced2(3, 5);
debounced2(10, 20);
