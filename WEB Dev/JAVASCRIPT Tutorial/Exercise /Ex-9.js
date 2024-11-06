/* Create a faulty calculator using JavaScript

This faulty calculator does following:
1. It takes two numbers as input from the user
2. It perfoms wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **


It performs wrong operation 10% of the times

*/


let Faulty_calci = (a, b, s) => {

    const r = Math.random()

    if (r < 0.1) {
        if (s == " + ") {
            console.log();
            let c = a - b;
            console.log(a, s, b, " = ", c);
        }

        else if (s == " x ") {
            console.log();
            let c = a + b;
            console.log(a, s, b, " = ", c);
        }

        else if (s == " - ") {
            console.log();
            let c = a / b;
            console.log(a, s, b, " = ", c);
        }

        else if (s == " / ") {
            console.log();
            let c = a ** b;
            console.log(a, s, b, " = ", c);

        }

    }
    else {
        if (s == " + ") {
            console.log(); let c = a + b;
            console.log(a, s, b, " = ", c);
        }

        else if (s == " - ") {
            console.log();
            let c = a - b;
            console.log(a, s, b, " = ", c);
        }

        else if (s == " x ") {
            console.log();
            let c = a * b;
            console.log(a, s, b, " = ", c);
        }

        else if (s == " / ") {
            console.log();
            let c = a / b;
            console.log(a, s, b, " = ", c);

        }
        else if(b==0){
            console.log("Can't be divisible by",b);
            return null;

        }
    }

}



 Faulty_calci(2, 4, " + ");
 Faulty_calci(2, 4, " - ");
 Faulty_calci(2, 4, " x ");
 Faulty_calci(2, 4, " / ");




/* ANOTER WAY :-->


 Faulty Calculator in JavaScript
This faulty calculator:
1. Takes two numbers as input.
2. Performs wrong operations 10% of the time as follows:
   - '+' becomes '-'
   - '*' becomes '+'
   - '-' becomes '/'
   - '/' becomes '**'


let Faulty_calci = (a, b, s) => {

    // Generate a random number to determine if the calculation should be faulty
    const r = Math.random();

    // Handle faulty calculation
    const performFaultyOperation = () => {
        if (s === " + ") {
            return a - b;  // Faulty: '+' becomes '-'
        } else if (s === " x ") {
            return a + b;  // Faulty: '*' becomes '+'
        } else if (s === " - ") {
            return a / b;  // Faulty: '-' becomes '/'
        } else if (s === " / ") {
            return a ** b; // Faulty: '/' becomes '**'
        }
    };

    // Handle normal (correct) calculation
    const performNormalOperation = () => {
        if (s === " + ") {
            return a + b;
        } else if (s === " - ") {
            return a - b;
        } else if (s === " x ") {
            return a * b;
        } else if (s === " / ") {
            if (b === 0) {
                console.log("Can't divide by zero!");
                return null;  // Prevent division by zero
            }
            return a / b;
        }
    };

    // Perform the operation based on random chance (10% faulty)
    let result;
    if (r < 0.1) {
        result = performFaultyOperation();
    } else {
        result = performNormalOperation();
    }

    // Display the result
    if (result !== null) {
        console.log(`${a} ${s} ${b} = ${result}`);
    }
};

// Test cases
Faulty_calci(2, 4, " + ");
Faulty_calci(2, 4, " - ");
Faulty_calci(2, 4, " x ");
Faulty_calci(2, 4, " / ");

*/

