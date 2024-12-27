// The Vowel Counter: You need to create a function that counts the number of vowels in a given string. Consider both uppercase and lowercase vowels.

let vowels = ["a","e","i","o","u"];

let string = "zarhaniei";

let result = 0


for (let i = 0; i < string.length; i++) {
  vowels.forEach(element => {
    if (element.toUpperCase() === string[i] || element.toLowerCase() === string[i] ) {
        result += 1;
    } 
  });
}

console.log(result);
