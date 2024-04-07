import ismail, { a, arr, hello  as h, hello , n} from "./main.js";

console.log(a);
console.log(arr);
console.log(hello());
console.log(n);
console.log(ismail());




// import allthings in one time

import * as all from "./main.js";

console.log(all.arr);
console.log(all.a);
console.log(all.default());
