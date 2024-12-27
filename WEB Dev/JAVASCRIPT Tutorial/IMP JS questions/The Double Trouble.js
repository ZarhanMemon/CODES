// The Double Trouble: You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.


let array = [7, 7, 7, 7, 7];
let result = []

for (let i = 0; i < array.length; i++) {
    if (array[i] !== array[i + 1]) {
        result.push(array[i])
        result.push(array[i]);
    }
    else {
        result.push(array[i])
    }
}

console.log(result);

