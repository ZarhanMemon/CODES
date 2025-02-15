
//if ECMA:-
// import {a, b, d} from "./mymodule.js"
// console.log(a, b, d)

import harry from "./mymodule.js"
console.log(harry)



//if COMMONJS
const a = require("./mymodule2.js")
console.log(a, __dirname, __filename)


//in commonjs is a function which take below as an input 

// (function(exports, require, module, __filename, __dirname) {
//     // Module code actually lives here
//   });