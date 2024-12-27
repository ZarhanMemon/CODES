
// The Mirror Mirror: Imagine you have a string, and you need to create a new string that is a mirror image of the original. Write a function that appends the reversed version of the original string to itself.


let string = "abcdef";
let mirror_str = string;

for (let i = string.length-1 ; i >= 0; i--) {
    mirror_str += string[i];
}

console.log(mirror_str);
