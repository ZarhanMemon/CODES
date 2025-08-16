
let str = "abcdef";

let revStr ='';

for (let i = str.length; i >= 0 ; i--) {
    revStr = revStr + str.charAt(i)
}

console.log(revStr)