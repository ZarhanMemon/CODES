async function eating() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('hello')
        }, 1000);
    })
}

async function main1() {
    let a = await eating();
    console.log(a);
    let b = await eating();
    console.log(b);
}

// main()


// IIFE method : ( to write asyn await function without calling it eg main() in 16 line)

(async function main2() {
    let a = await eating();
    console.log(a);
    let b = await eating();
    console.log(b);
})();

//  (); ye use to call the function 

(function hello() {
    console.log('hiiii');


// Destructor :- use for arr and object diract variable assigning

// 1. ARRAY me

let arr = [0,1,2];

let x = arr[0]
let y = arr[1]
let z = arr[2]
console.log(x,y,z);


// mentos life
let [a,b,c] = [0,1,2,3,4];
console.log(a,b,c);


// ...any_word - ye age ke sare waluea ko ek var array me store karenge array = [3,4,5]
let [i,j, ...array] = [1,2,3,4,5] 
console.log(i,j,array);

// ------------------------------------------------

//2. OBJECT me

let obj = {l:-1 , m:-2 , n:-3 , p:-3}

//normal
// let u = obj[0]
// let v = obj[1]
// let w = obj[2]
// console.log(u,v,w);


//mentos life - ve asign l , m , other as obj[0] and obj[1] and obj[2,3]

let {l ,m ,...other} = obj;     // ...any_word = { n:-3 , p:-3}
console.log(l,m, other);


})();


