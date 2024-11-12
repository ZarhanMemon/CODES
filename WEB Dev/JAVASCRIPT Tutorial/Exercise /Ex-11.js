
// Write a program to calculate factorial of a number using reduce and using for loops


// 6! = 6*5*4*3*2*1

 
 
let factorial_1 = (n) => {

    const array_factorial = (n) => {
        let a = [];
        for (let i = 1; i <= n; i++) {
            a.unshift(i)
        }
        return a;
    }

    let a = array_factorial(n);
    let result = a.reduce((acc, crr) => acc * crr, 1);
    console.log("\nThe " + a[0] + "! factorial is " + result + ".\n");
}

factorial_1(6);




let factorial_2 = (n) => {
    let result = 1;
    for (let i = n; i > 0; i--) {
        result *= i;
    }
    console.log("The " + n + "! factorial is " + result + ".");;
}


factorial_2(6);
