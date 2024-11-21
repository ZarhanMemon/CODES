let promise = new Promise((resolve, reject) => {
    console.log("heelo");
    resolve("done");
})

// output:-

// heelo
// promise
// Promise {<fulfilled>: 'done'}
// [[Prototype]]: Promise
// [[PromiseState]]: "fulfilled"
// [[PromiseResult]]: "done"


//  IF PROMISE IS RESOLVED :- THEN what?

promise.then((res)=>{
    console.log("Promises hogya pura",res)  // res == resolve(message) == "done"
})


// --------------------------------------------------------------------
 


let promise2 = new Promise((resolve, reject) => {
    reject("error");
})

// output:-
// promises.js:23 Uncaught (in promise) error
// (anonymous)	@	promises.js:23
// (anonymous)	@	promises.js:22

// promise2
// Promise {<rejected>: 'error'}
// [[Prototype]] : Promise
// [[PromiseState]] : "rejected"
// [[PromiseResult]] : "error"


//  IF PROMISE2 IS REJECTED :- CATCH what?

promise2.catch((err)=>{
    console.log("Promise2 totgaya",err)  // err == reject(error) == "error msg"
})



// eg both :-

let promise3 = new Promise((resolve, reject) => {
    let a = 1;
    if (a>0){
    setTimeout(() => {
        console.log("heelo");
        resolve("done");
    }, 3000);
    }
    else{
        reject("some error");
    }
})


promise3.then((res)=>{
    console.log("Hogaya bahi balablae",res);
}).catch((err)=>{
    console.log("Nahi hora match",err)
})

// --------------------------------------------------------------------


//Promises Chain :- p.then(..).then --> ..  like alternate for callback chain

let p = new Promise((resolve, reject) => {
    console.log("Task1")
    resolve();
})

p.then(()=>{
    console.log("Task2")
}).then(()=>{
    console.log("Task3")
}).then(()=>{
    console.log("This is promises.then chain")
})

// --------------------------------------------------------------------


// Multi .THEN on P

let q = new Promise((resolve, reject) => {
    console.log("Multi .THEN on P")
    resolve();
})


q.then(()=>{ console.log("1") });

q.then(()=>{ console.log("2") });

q.then(()=>{ console.log("3") });



//--------------------------------------------------------------------------------------------------



let q = new Promise((resolve, reject) => {
    resolve("message1");
})

let p = new Promise((resolve, reject) => {
    reject("message2");
 })

let a = new Promise((resolve, reject) => {
    resolve("message3");
})

let b = new Promise((resolve, reject) => {
    reject("message4");
 })


//     METHODS OF PROMISSES :-


// Promise.all(): Resolves when all promises resolve. Rejects if any promise rejects.

// Promise.allSettled(): Resolves when all promises settle (either resolved or rejected).

// Promise.race(): Resolves or rejects as soon as the first promise resolves or rejects.

// Promise.resolve(): Returns a resolved promise with a given value.

// Promise.reject(): Returns a rejected promise with a given reason.




let r = Promise.all([q , p , a , b]);     //it only prints the resolved ones if one is rejected then its not printed

r.then((res)=>{
    console.log(res)
}).catch(()=>{
    console.log("Error q/p/a/b might one throw error");
})




let s = Promise.allSettled([q , p , a , b]);   //it prinst either q,p,a,b are resolved or not

s.then((res)=>{
    console.log(res)
})



let promise1 = new Promise((resolve) => setTimeout(resolve, 500, 'First'));
let promise2 = new Promise((reject) => setTimeout(reject, 100, 'Second'));

let t = Promise.race([promise1, promise2]);
   t.then((result) => {
        console.log(result);           // 'Second' (because promise2 resolves first it might be reject then it also print same)
    });



let u = Promise.resolve(42);
u.then(value => {
    console.log(value);      // 42
});



let v = Promise.reject('Something went wrong!');
v.catch(err => {
    console.log(err);  // 'Something went wrong!'
});

