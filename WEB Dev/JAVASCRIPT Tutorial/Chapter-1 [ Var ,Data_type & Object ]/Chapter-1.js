
// Variable :- It has GLOBAL scope we can use it in different file not this only

var a = 5;
var b = 3;
var naam = "zarhan";

console.log(a + b);

console.log(typeof a, typeof b, typeof naam);

// var 33a = 2; not allowed

// -----------------------------------------------------------------------------


// LET :- It has BLOCK scope it only be used in where it exist in particular file ( more convinient than var)

let c = 23;

// ----------------------------------------------------------------------------


// CONST :- A CONSTANT thing IT is BLOCK SCOPE

const d = 43;

// d = d-2; we cannot change const in this way : output is error

console.log(d - 2); //but can in this way: output is 41

// ----------------------------------------------------------------------------

// Global v/s Block scope :-

var global = "i M GLOBAL scope";

{  //Block  

    let block = "i M BLOCK scope";

    console.log(global + "in {}");
    console.log(block + "in {}");
}

console.log(global);
// console.log(block);    it will show error if block in {} if not then it will print


// ===========================================================================================


// DATA TYPE =>

// There are two team of data :  Primitive{Primary}  and  Object{Non-Primary}

// PRIMITIVE :-> NULL       >> [ type = object ]
//               STRING 
//               NUMBER [Number,float,const]
//               Boolean [True,False]
//               Undefined
//               Big-Int
//               SYMBOL

let x = "Harry bhai";
let y = 22;
let z = 3.55;
const p = true;
let q = undefined;
let r = null;

console.log(x, y, z, p, q, r)
console.log(typeof x, typeof y, typeof z, typeof p, typeof q, typeof r)

//imp_NOTE >> 

// Null type = Object(sec_dt) bcz it was very previously setted in files of JS and many project used that concept due to which if developer do changes in its type they Also have to alter that files(infinitely)

//hence It was A MISTAKE DONE BY developer 


// ------------------------------------------------------

// OBJECT :>
// { key : "value" }

let Object = {
    name: " Zarhan",           // NOTE: [ name : "..." or "name" : "..." ]  --> VALID
    "roll no": 32,            //         roll no : ...          -->(Xrong - containes space) 
    year: 2006,               //         "roll no":...          --> VALID
}

console.log(Object)

Object.name = "Zarhan Memom";
console.log(Object)                    // name is altered now

Object.added_part = "hello i added";
console.log(Object)                   //contains added with name as prev changed 



