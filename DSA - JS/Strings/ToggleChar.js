
let str = "AbCd";

let toggle = "";
let toggle1 = "";

for (let i = 0; i < str.length; i++) {

    if (str.charAt(i) !== str.charAt(i).toLowerCase()) {
        toggle += str.charAt(i).toLowerCase();
    }
    else {
        toggle += str.charAt(i).toUpperCase()
    }

}

console.log(str)
console.log(toggle)


//==================================================



let str1 = toggle;

let toggle_1 = "";

for (let i = 0; i < str1.length; i++) {

    let charCode = str1.charCodeAt(i)

    if (charCode >= 65 && charCode < 97) {
        toggle_1 += String.fromCharCode(charCode + 32);

    } else if (charCode >= 97) {
        toggle_1 += String.fromCharCode(charCode - 32);
    }
}

console.log(str1)
console.log(toggle_1)