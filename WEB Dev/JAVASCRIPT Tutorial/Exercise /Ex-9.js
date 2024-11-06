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

        }
    }

}



 Faulty_calci(2, 4, " + ");
 Faulty_calci(2, 4, " - ");
 Faulty_calci(2, 4, " x ");
 Faulty_calci(2, 4, " / ");



