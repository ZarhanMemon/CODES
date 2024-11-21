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
