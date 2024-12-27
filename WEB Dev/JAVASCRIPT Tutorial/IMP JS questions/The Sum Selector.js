// The Sum Selector: You are working on a function that should sum all numbers in an array until it encounters a negative number. Write a function that performs this summation.


let array = [1, 2, 3, -4,-2];

let sum = 0

for (let i = 0; i < array.length; i++) {
    if (array[i]<0) {
        break;
    }else{
    sum += array[i]
    }
}

console.log(sum);
