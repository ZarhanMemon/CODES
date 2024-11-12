// Calculate factorial using reduce and for loop


// Factorial using reduce
let factorial_1 = (n) => {

    // Generate array from 1 to n
    const array_factorial = (n) => {
        let a = [];
        for (let i = 1; i <= n; i++) {
            a.unshift(i)  // Add numbers in reverse order
        }
        return a;  // Return the array
    }

    // Calculate factorial using reduce
    let a = array_factorial(n);
    let result = a.reduce((acc, crr) => acc * crr, 1);
    
    // Output result
    console.log("\nThe " + a[0] + "! factorial is " + result + ".\n");
}

// Call factorial_1 for 6
factorial_1(6);



// Factorial using for loop
let factorial_2 = (n) => {
    let result = 1;  // Start with result = 1
    for (let i = n; i > 0; i--) {
        result *= i;  // Multiply result by i
    }
    // Output result
    console.log("The " + n + "! factorial is " + result + ".");
}

// Call factorial_2 for 6
factorial_2(6);
