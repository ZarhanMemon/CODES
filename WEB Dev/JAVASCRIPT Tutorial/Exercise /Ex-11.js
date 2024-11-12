// Write a program to calculate factorial of a number using reduce and using for loops


// 6! = 6*5*4*3*2*1

let array = [6, 5, 4, 3, 2, 1];

let factorial_1 = (array) => {
    let result = array.reduce((acc, crr) => acc * crr, 1);
    console.log("\nThe " + array[0] + "! factorial is " + result + ".\n");
}

factorial_1(array);




let factorial_2 = (n) => {
    let result = 1;
    for (let i = n; i > 0; i--) {
        result *= i;
    }
    console.log("The " + n + "! factorial is " + result + ".");;
}


factorial_2(6);
