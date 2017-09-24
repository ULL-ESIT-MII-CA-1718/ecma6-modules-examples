"use strict";

//------ main.js ------
//  import {addTextToBody} from './utils.js';
import { square, diag } from './lib.js';
let a = square(11); // 121
console.log(a); // 121
let b = diag(4, 3); // 5
console.log(b); // 5
result.innerHTML = `
<pre>
a = ${a} 
b = ${b}
</pre>
`;
