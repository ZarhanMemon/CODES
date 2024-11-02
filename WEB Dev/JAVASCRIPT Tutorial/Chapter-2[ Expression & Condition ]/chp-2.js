                               
//                                    EXPRESSION 


let a = "heelo";
let b = 34;


// 1]  ARITHEMATIC -->  + - * / % ** // -- ++

let x = 2 ;
let y = 7 ;

console.log("x + y = " + (x + y))
console.log("x - y = " + (x - y))
console.log("x * y = " + (x * y))
console.log("x / y = " + (x / y))

console.log("x % y = " + (x % y))
console.log("x ** y = " + (x ** y))

console.log(" pre ++x  = " + ( ++x ))
console.log("pre --y = " + ( --y)) 

console.log(" post x++ = " + (x++))
console.log(" post x-- = " + (x--))


// 2]  ASSIGNMENT ->  == += -= /= *= %= > < <= >= !=   ,   ===(eql to value & type)  !==(not eql to value & type)  ?(ternery)


console.log("x += y =" + (x += y))
console.log("x *= y = " + (x *= y))
console.log("x /= y = " + (x /= y))
console.log("x %= y = " + (x %= y))


//3] COMPARISSION -> == != <= >= < > , ===(eql to value & type)  !==(not eql to value & type)  ?(ternery)


console.log("x == y = " + (x==y))
console.log("x != y = " + (x!=y))
console.log("x > y = " + (x > y))
console.log("x < y = " + (x < y))
console.log(" x <= y  = " + (x <= y))
console.log("x >= y = " + ( x >= y)) 

console.log("x === y = " + (x === y))
console.log("x !== y = " + (x !== y))


//4]  lOGICAL ->  && and ,  || or , ! not/negation

let c = true;
let d = true
let e = false

// 1] AND ->  true && true = true
console.log("true and true = "+ c && d)
console.log("true and false = "+ c && e)

// 2] AND ->  true || false = true
console.log("true and true = "+ c || d)
console.log("true and false = "+ c || e)

// 3] AND ->  ! true = false
console.log(" !true = "+ !c )
console.log(" !false = "+ !e)



// OPERANT(a b) and OPERATOR( + ) 

a + b 



 // SINGLE LINE COMMENTS


 /* MULTILINE COMMENT */



                                            // CONDITION 

/*
 1] if
 2] if else
 3] if elseif else
*/

// 1] 

if (true){
    console.log("if condition true then print this sentence")
}

//2]

if (false){
    console.log("if condition true then print this sentence")
}
else{
   console.log("else condition then print this sentence")
}

//3]

if (false){
    console.log("if condition true then print this sentence")
}
else if (true) {
    console.log("else if then print this sentence")
} 
else{
    console.log("")
}



// TERNERY ? ->

// (condition) ? 'yes' : 'no'      --> if cond true then yes if nahi then no

( true ) ? console.log('heelo') : console.log('byee')
